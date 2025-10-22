/*
  Warnings:

  - A unique constraint covering the columns `[idAlbum,userId]` on the table `AlbumEdited` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idArtist,userId]` on the table `ArtistEdited` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idTrack,userId]` on the table `TrackEdited` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AlbumEdited_idAlbum_userId_key" ON "AlbumEdited"("idAlbum", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistEdited_idArtist_userId_key" ON "ArtistEdited"("idArtist", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "TrackEdited_idTrack_userId_key" ON "TrackEdited"("idTrack", "userId");
