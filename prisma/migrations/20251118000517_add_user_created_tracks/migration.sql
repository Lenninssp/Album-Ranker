-- CreateTable
CREATE TABLE "UserCreatedTrack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT,
    "album" TEXT,
    "duration" INTEGER,
    "genre" TEXT,
    "mood" TEXT,
    "description" TEXT,
    "rating" INTEGER,
    "commentary" TEXT,
    "tag" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserCreatedTrack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Interaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "trackEditedId" INTEGER,
    "albumEditedId" INTEGER,
    "artistEditedId" INTEGER,
    "comment" TEXT,
    "liked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userCreatedTrackId" INTEGER,
    CONSTRAINT "Interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Interaction_trackEditedId_fkey" FOREIGN KEY ("trackEditedId") REFERENCES "TrackEdited" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interaction_albumEditedId_fkey" FOREIGN KEY ("albumEditedId") REFERENCES "AlbumEdited" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interaction_artistEditedId_fkey" FOREIGN KEY ("artistEditedId") REFERENCES "ArtistEdited" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interaction_userCreatedTrackId_fkey" FOREIGN KEY ("userCreatedTrackId") REFERENCES "UserCreatedTrack" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Interaction" ("albumEditedId", "artistEditedId", "comment", "createdAt", "id", "liked", "trackEditedId", "userId") SELECT "albumEditedId", "artistEditedId", "comment", "createdAt", "id", "liked", "trackEditedId", "userId" FROM "Interaction";
DROP TABLE "Interaction";
ALTER TABLE "new_Interaction" RENAME TO "Interaction";
CREATE INDEX "Interaction_userId_idx" ON "Interaction"("userId");
CREATE INDEX "Interaction_trackEditedId_idx" ON "Interaction"("trackEditedId");
CREATE INDEX "Interaction_albumEditedId_idx" ON "Interaction"("albumEditedId");
CREATE INDEX "Interaction_artistEditedId_idx" ON "Interaction"("artistEditedId");
CREATE UNIQUE INDEX "Interaction_userId_trackEditedId_albumEditedId_artistEditedId_key" ON "Interaction"("userId", "trackEditedId", "albumEditedId", "artistEditedId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
