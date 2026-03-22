/**
 * A hotcue button label
 */
export enum HotcueButton {
  A = 1,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
}

/**
 * When a custom color is not configured the cue point will be one of these
 * colors.
 */
export enum CueColor {
  None = 0x00,
  Blank = 0x15,
  Magenta = 0x31,
  Violet = 0x38,
  Fuchsia = 0x3c,
  LightSlateBlue = 0x3e,
  Blue = 0x01,
  SteelBlue = 0x05,
  Aqua = 0x09,
  SeaGreen = 0x0e,
  Teal = 0x12,
  Green = 0x16,
  Lime = 0x1a,
  Olive = 0x1e,
  Yellow = 0x20,
  Orange = 0x26,
  Red = 0x2a,
  Pink = 0x2d,
}

/**
 * Represents a single cue point. On older exports the label and color may be
 * undefined.
 */
export interface CuePoint {
  type: 'cue_point';
  /**
   * Number of milliseconds from the start of the track.
   */
  offset: number;
  /**
   * The comment associated to the cue point
   */
  label?: string;
  /**
   * RGB values of the hotcue color
   */
  color?: CueColor;
}

type BareCuePoint = Omit<CuePoint, 'type'>;

/**
 * A loop, similar to a cue point, but includes a length.
 */
export type Loop = BareCuePoint & {
  type: 'loop';
  /**
   * The length in milliseconds of the loop
   */
  length: number;
};

/**
 * A hotcue is like a cue point, but also includes the button it is assigned to.
 */
export type Hotcue = BareCuePoint & {
  type: 'hot_cue';
  /**
   * Which hotcue button this hotcue is assigned to.
   */
  button: HotcueButton;
};

/**
 * A hot loop, this is the union of a hotcue and a loop.
 */
export type Hotloop = {type: 'hot_loop'} & (Omit<Hotcue, 'type'> & Omit<Loop, 'type'>);

export type CueAndLoop = CuePoint | Loop | Hotcue | Hotloop;

// ==========================================================================
// OneLibrary-specific entity types
// ==========================================================================

/**
 * User-created tag (MyTag)
 */
export interface MyTag {
  id: number;
  name: string;
  isFolder: boolean;
  parentId: number | null;
}

/**
 * History session
 */
export interface HistorySession {
  id: number;
  name: string;
  parentId: number | null;
}

/**
 * Hot cue bank list
 */
export interface HotCueBankList {
  id: number;
  name: string;
  parentId: number | null;
}

/**
 * Menu item for browsing
 */
export interface MenuItem {
  id: number;
  kind: number;
  name: string;
}

/**
 * Browse category
 */
export interface Category {
  id: number;
  menuItemId: number;
  name: string;
  kind: number;
  isVisible: boolean;
}

/**
 * Sort option
 */
export interface SortOption {
  id: number;
  menuItemId: number;
  name: string;
  kind: number;
  isVisible: boolean;
  isSelectedAsSubColumn: boolean;
}

/**
 * Device property
 */
export interface DeviceProperty {
  deviceName: string;
  dbVersion: string;
  numberOfContents: number;
  createdDate: string;
  backgroundColorType: number;
}
