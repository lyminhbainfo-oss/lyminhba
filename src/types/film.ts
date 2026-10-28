export interface StillFrame {
  id: string;
  projectId: string;
  title: string;
  sceneNumber: string;
  slate: string;
  take: string;
  focalLength: string;
  camera: string;
  tStop: string;
  iso: string;
  shutterAngle: string;
  colorTemp: string;
  timecode: string;
  note1stAD: string;
  fincherMood: string;
  svgGraphicType: 'golden_hour_room' | 'rain_cafe_night' | 'basement_fight' | 'hotel_corridor' | 'harbor_dock' | 'courtroom' | 'alley_rain';
  customImageUrl?: string;
  poeticNote?: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  format: 'feature' | 'short' | 'commercial' | 'music_video' | 'series';
  formatLabel: string;
  role: string;
  cardBadge?: string;
  roleType: 'director' | 'first_ad';
  director: string;
  dop: string;
  productionCompany: string;
  shootingDays?: number;
  setupsCount?: number;
  budgetTier?: string;
  logline: string;
  synopsisVi: string;
  poeticQuote?: string;
  stuntsLevel?: 'Low' | 'Medium' | 'High' | 'Extreme';
  cameraPackage?: string;
  crewSize?: number;
  breakdownHighlights?: string[];
  keyChallenges?: string;
  posterUrl?: string;
  trailerUrl?: string;
  trailerEmbedUrl?: string;
  trailerTitle?: string;
  awards?: string[];
  catalogueSpecs?: {
    format: string;
    aspectRatio: string;
    language: string;
    year: number;
  };
  directorsNote?: string;
  keyCredits?: {
    directorWriterEditor: string;
    producer?: string;
    dop?: string;
    artDirector?: string;
    cast?: string;
    supportedBy?: string;
  };
  stills: StillFrame[];
}

export interface StripboardScene {
  id: string;
  sceneNum: string;
  intExt: 'INT' | 'EXT';
  dayNight: 'DAY' | 'NIGHT';
  setting: string;
  synopsis: string;
  pages: string;
  castIds: number[];
  estTimeMin: number;
  stuntPyro: boolean;
  shootDay: number;
}

export interface CallSheetData {
  projectName: string;
  shootDay: number;
  totalDays: number;
  date: string;
  crewCall: string;
  blockAndRehearse: string;
  cameraRoll: string;
  lunchBreak: string;
  estimatedWrap: string;
  locationName: string;
  locationAddress: string;
  nearestHospital: string;
  hospitalPhone: string;
  weatherForecast: string;
  safetyAlerts: string[];
  departmentDirectives: {
    camera: string;
    gripElectric: string;
    sound: string;
    artProps: string;
    stuntsVfx: string;
  };
}
