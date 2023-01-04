declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      id: string;
      background: string;
      primary: string;
      hover: string;
      color: string;
      accent: string;
      success: string;
      error: string;
    };
  }
}

export type File = null | {
  lastModified: number | null;
  lastModifiedDate: Date | null;
  name: string | null;
  size: number | null;
  type: string | null;
  webkitRelativePath: string | null;
};

export type Error = null | string;
