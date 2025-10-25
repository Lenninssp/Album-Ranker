import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
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
        console.log(user);
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
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.name = user.name;
      token.email = user.email;
      token.picture = user.image;
    }
    return token;
  },
  async session({ session, token }) {
    if (session.user && token) {
      session.user.id = token.id as string;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.picture ?? null;
    }
    return session;
  },
},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
