-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AlbumEdited" (
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
    "includesMetadata" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER,
    CONSTRAINT "AlbumEdited_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AlbumEdited" ("commentary", "id", "idAlbum", "idArtist", "includesMetadata", "intYearReleased", "rating", "strAlbum", "strAlbum3DThumb", "strAlbumBack", "strAlbumCDart", "strAlbumThumb", "strArtist", "strDescriptionEN", "strGenre", "strLabel", "strMood", "strReleaseFormat", "strSpeed", "strStyle", "strWikipediaID", "tag") SELECT "commentary", "id", "idAlbum", "idArtist", "includesMetadata", "intYearReleased", "rating", "strAlbum", "strAlbum3DThumb", "strAlbumBack", "strAlbumCDart", "strAlbumThumb", "strArtist", "strDescriptionEN", "strGenre", "strLabel", "strMood", "strReleaseFormat", "strSpeed", "strStyle", "strWikipediaID", "tag" FROM "AlbumEdited";
DROP TABLE "AlbumEdited";
ALTER TABLE "new_AlbumEdited" RENAME TO "AlbumEdited";
CREATE TABLE "new_ArtistEdited" (
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
    "includesMetadata" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER,
    CONSTRAINT "ArtistEdited_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ArtistEdited" ("commentary", "id", "idArtist", "includesMetadata", "intFormedYear", "intMembers", "rating", "strArtist", "strArtistAlternate", "strArtistBanner", "strArtistClearart", "strArtistFanart", "strArtistLogo", "strArtistThumb", "strArtistWideThumb", "strBiographyEN", "strCountry", "strGenre", "strLabel", "strMood", "strStyle", "strWebsite", "tag") SELECT "commentary", "id", "idArtist", "includesMetadata", "intFormedYear", "intMembers", "rating", "strArtist", "strArtistAlternate", "strArtistBanner", "strArtistClearart", "strArtistFanart", "strArtistLogo", "strArtistThumb", "strArtistWideThumb", "strBiographyEN", "strCountry", "strGenre", "strLabel", "strMood", "strStyle", "strWebsite", "tag" FROM "ArtistEdited";
DROP TABLE "ArtistEdited";
ALTER TABLE "new_ArtistEdited" RENAME TO "ArtistEdited";
CREATE TABLE "new_TrackEdited" (
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
    "includesMetadata" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER,
    CONSTRAINT "TrackEdited_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_TrackEdited" ("commentary", "id", "idAlbum", "idArtist", "idTrack", "includesMetadata", "intDuration", "intMusicVidLikes", "intMusicVidViews", "intTrackNumber", "rating", "strAlbum", "strArtist", "strDescriptionEN", "strGenre", "strMood", "strMusicVid", "strMusicVidCompany", "strMusicVidDirector", "strStyle", "strTrack", "strTrackThumb", "tag") SELECT "commentary", "id", "idAlbum", "idArtist", "idTrack", "includesMetadata", "intDuration", "intMusicVidLikes", "intMusicVidViews", "intTrackNumber", "rating", "strAlbum", "strArtist", "strDescriptionEN", "strGenre", "strMood", "strMusicVid", "strMusicVidCompany", "strMusicVidDirector", "strStyle", "strTrack", "strTrackThumb", "tag" FROM "TrackEdited";
DROP TABLE "TrackEdited";
ALTER TABLE "new_TrackEdited" RENAME TO "TrackEdited";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
