/**
 * onelibrary-connect
 *
 * Read and query rekordbox OneLibrary (exportLibrary.db) SQLCipher databases
 * from Pioneer DJ / AlphaTheta devices.
 */

// Adapter
export {OneLibraryAdapter} from './adapter.js';

// Database interface
export type {
  DatabaseAdapter,
  DatabasePreference,
  DatabaseType,
  PlaylistQueryResult,
} from './database-adapter.js';

// Connection utilities
export {openOneLibraryDb} from './connection.js';
export {getEncryptionKey} from './encryption.js';

// Entity types
export {EntityFK} from './entities.js';
export type {
  Album,
  Artist,
  Artwork,
  Color,
  Genre,
  Key,
  Label,
  Playlist,
  PlaylistEntry,
  Track,
} from './entities.js';

// Cue and OneLibrary-specific types
export {CueColor, HotcueButton} from './types.js';
export type {
  Category,
  CueAndLoop,
  CuePoint,
  DeviceProperty,
  HistorySession,
  Hotcue,
  Hotloop,
  HotCueBankList,
  Loop,
  MenuItem,
  MyTag,
  SortOption,
} from './types.js';

// Schema row types (for advanced usage)
export {CueKind, MenuItemKind, MyTagAttribute, PlaylistAttribute} from './schema.js';
export type {
  AlbumRow,
  ArtistRow,
  CategoryRow,
  ColorRow,
  ContentRow,
  CueRow,
  GenreRow,
  HistoryContentRow,
  HistoryRow,
  HotCueBankListCueRow,
  HotCueBankListRow,
  ImageRow,
  KeyRow,
  LabelRow,
  MenuItemRow,
  MyTagContentRow,
  MyTagRow,
  PlaylistContentRow,
  PlaylistRow,
  PropertyRow,
  RecommendedLikeRow,
  SortRow,
} from './schema.js';
