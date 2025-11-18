-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserCreatedTrack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT,
    "album" TEXT,
    "duration" INTEGER,
    "genre" TEXT,
    "mood" TEXT,
    "description" TEXT,
    "rating" TEXT,
    "commentary" TEXT,
    "tag" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserCreatedTrack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserCreatedTrack" ("album", "artist", "commentary", "createdAt", "description", "duration", "genre", "id", "mood", "public", "rating", "tag", "title", "updatedAt", "userId") SELECT "album", "artist", "commentary", "createdAt", "description", "duration", "genre", "id", "mood", "public", "rating", "tag", "title", "updatedAt", "userId" FROM "UserCreatedTrack";
DROP TABLE "UserCreatedTrack";
ALTER TABLE "new_UserCreatedTrack" RENAME TO "UserCreatedTrack";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
