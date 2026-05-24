# onelibrary-connect

Read and query rekordbox **OneLibrary** (`exportLibrary.db`) SQLCipher databases
from Pioneer DJ / AlphaTheta devices. Useful for inspecting USB exports, CDJ
SD cards, and the OneLibrary databases used by modern rekordbox versions.

## Installation

```bash
npm install onelibrary-connect
```

This package depends on `better-sqlite3-multiple-ciphers` for SQLCipher
decryption. It will be built as a native module on install.

## Usage

```typescript
import { OneLibraryAdapter } from 'onelibrary-connect';

const db = new OneLibraryAdapter('/path/to/exportLibrary.db');

// Look up a single track
const track = db.findTrack(1);
console.log(`${track.artist?.name} - ${track.title}`);

// Iterate every track
for (const t of db.findAllTracks()) {
  console.log(t.id, t.title, t.tempo, t.key?.name);
}

// Walk the playlist tree
const { folders, playlists, trackEntries } = db.findPlaylist();
for (const playlist of playlists) {
  const trackIds = db.findPlaylistContents(playlist.id);
  console.log(`${playlist.name}: ${trackIds.length} tracks`);
}

// History sessions (one per DJ set recorded on the device)
for (const session of db.findHistorySessions()) {
  const trackIds = db.findHistoryContents(session.id);
  console.log(`${session.name}: ${trackIds.length} tracks`);
}

db.close();
```

## API

### `new OneLibraryAdapter(dbPath: string)`

Open a OneLibrary database. The file is opened read-only and decrypted with the
built-in SQLCipher key used by Pioneer DJ devices.

### Track queries

- `findTrack(id)` — Find a track by `content_id`, with joined artist, album,
  genre, key, color, label, artwork, remixer, original artist, and composer
- `findAllTracks()` — Return every track in the library

### Cue queries

- `findCues(trackId)` — Return all cue points, loops, hot cues, and hot loops
  for a track as a unified `CueAndLoop[]`

### Playlist queries

- `findPlaylist(playlistId?)` — Return `{ folders, playlists, trackEntries }`
  for a given playlist ID, or the root if omitted
- `findPlaylistById(id)` — Fetch a single playlist row
- `findPlaylistContents(id)` — Track IDs in order for a playlist

### MyTag queries

- `findMyTags(parentId?)` — Return `{ folders, tags }` for MyTags
- `findMyTagById(id)` / `findMyTagContents(id)` / `findMyTagsForTrack(trackId)`

### History queries

- `findHistorySessions()` — All history sessions on the device
- `findHistoryContents(historyId)` — Track IDs in a session

### Hot cue bank lists

- `findHotCueBankLists()` — All hot cue bank lists
- `findHotCueBankListCues(bankListId)` — Cue IDs in a bank list

### Menu / sort configuration

- `findMenuItems()` — All browse menu items
- `findVisibleCategories()` — Categories the user has enabled
- `findVisibleSortOptions()` — Sort options the user has enabled

### Reference tables

- `findArtist(id)`, `findAlbum(id)`, `findGenre(id)`, `findKey(id)`,
  `findColor(id)`, `findLabel(id)`, `findArtwork(id)`

### Device properties

- `getProperty()` — Returns `{ deviceName, dbVersion, numberOfContents,
  createdDate, backgroundColorType }`

### Low-level

- `openOneLibraryDb(path)` — Open the SQLCipher database directly without the
  adapter wrapper
- `getEncryptionKey()` — Returns the SQLCipher key

## License

MIT
