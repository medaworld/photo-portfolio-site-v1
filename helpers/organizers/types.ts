declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      id: string;
      background: string;
      primary: string;
      hover: string;
      formBorder: string;
      color: string;
      accent: string;
      selected: string;
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

export type ProbedImages = {
  width: number;
  height: number;
  path: string;
}[];

export type Category = {
  id: string;
  category: string;
  category_lower: string;
  timeCreated: Date;
  coverImg: string;
};

export type Subcategory = {
  category: string;
  category_lower: string;
  coverImg: string | null;
  id: string;
  subcategory: string;
  subcategory_lower: string;
  timeCreated: Date;
};

export type Error = null | string;

export type Image = {
  category: string;
  category_lower: string;
  dateTaken: any;
  description: string;
  id: string;
  subcategory: string;
  subcategory_lower: string;
  timeCreated: Date;
  url: string;
};

export type Images = Image[];
