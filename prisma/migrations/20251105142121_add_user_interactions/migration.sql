-- CreateTable
CREATE TABLE "Interaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "trackEditedId" INTEGER,
    "albumEditedId" INTEGER,
    "artistEditedId" INTEGER,
    "comment" TEXT,
    "liked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Interaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Interaction_trackEditedId_fkey" FOREIGN KEY ("trackEditedId") REFERENCES "TrackEdited" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interaction_albumEditedId_fkey" FOREIGN KEY ("albumEditedId") REFERENCES "AlbumEdited" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interaction_artistEditedId_fkey" FOREIGN KEY ("artistEditedId") REFERENCES "ArtistEdited" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Interaction_userId_idx" ON "Interaction"("userId");

-- CreateIndex
CREATE INDEX "Interaction_trackEditedId_idx" ON "Interaction"("trackEditedId");

-- CreateIndex
CREATE INDEX "Interaction_albumEditedId_idx" ON "Interaction"("albumEditedId");

-- CreateIndex
CREATE INDEX "Interaction_artistEditedId_idx" ON "Interaction"("artistEditedId");

-- CreateIndex
CREATE UNIQUE INDEX "Interaction_userId_trackEditedId_albumEditedId_artistEditedId_key" ON "Interaction"("userId", "trackEditedId", "albumEditedId", "artistEditedId");
