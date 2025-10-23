/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "TrackEdited" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTrack" TEXT NOT NULL,
    "idAlbum" TEXT NOT NULL,
    "idArtist" TEXT NOT NULL,
    "strTrack" TEXT NOT NULL,
    "strAlbum" TEXT NOT NULL,
    "strArtist" TEXT NOT NULL,
    "strGenre" TEXT,
    "strMood" TEXT,
    "strStyle" TEXT,
    "intDuration" TEXT,
    "strDescriptionEN" TEXT,
    "strTrackThumb" TEXT,
    "strMusicVid" TEXT,
    "strMusicVidDirector" TEXT,
    "strMusicVidCompany" TEXT,
    "intMusicVidViews" TEXT,
    "intMusicVidLikes" TEXT,
    "intTrackNumber" TEXT,
    "commentary" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "includesMetadata" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "AlbumEdited" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idAlbum" TEXT NOT NULL,
    "idArtist" TEXT NOT NULL,
    "strAlbum" TEXT NOT NULL,
    "strArtist" TEXT NOT NULL,
    "intYearReleased" TEXT NOT NULL,
    "strGenre" TEXT,
    "strStyle" TEXT,
    "strLabel" TEXT,
    "strReleaseFormat" TEXT,
    "strAlbumThumb" TEXT,
    "strAlbumBack" TEXT,
    "strAlbumCDart" TEXT,
    "strAlbum3DThumb" TEXT,
    "strDescriptionEN" TEXT,
    "strMood" TEXT,
    "strSpeed" TEXT,
    "strWikipediaID" TEXT,
    "commentary" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "includesMetadata" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "ArtistEdited" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idArtist" TEXT NOT NULL,
    "strArtist" TEXT NOT NULL,
    "strArtistAlternate" TEXT,
    "strLabel" TEXT,
    "intFormedYear" TEXT,
    "strGenre" TEXT,
    "strStyle" TEXT,
    "strMood" TEXT,
    "strCountry" TEXT,
    "intMembers" TEXT,
    "strWebsite" TEXT,
    "strBiographyEN" TEXT,
    "strArtistThumb" TEXT,
    "strArtistLogo" TEXT,
    "strArtistClearart" TEXT,
    "strArtistWideThumb" TEXT,
    "strArtistFanart" TEXT,
    "strArtistBanner" TEXT,
    "commentary" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "includesMetadata" BOOLEAN NOT NULL DEFAULT true
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name") SELECT "createdAt", "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
