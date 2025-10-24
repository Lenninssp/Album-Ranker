import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "database",
    maxAge: 60 * 60 * 8,
    updateAge: 60 * 10,
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: creds.email },
        });

        if (!user) return null;
        const ok = await compare(creds.password, user.password);
        if (!ok) return null;
        return {
          id: String(user.id),
          name: user.name ?? "",
          email: user.email,
          image: user.imageUrl ?? undefined,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      if (session.user && user) {
        session.user.image = user.image ?? null;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
