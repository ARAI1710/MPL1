export interface Meta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface Block {
  _key: string;
  _type: string;
}

export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export interface RichText {
  _type: "block";
  _key: string;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks: string[];
  }>;
  markDefs: unknown[];
}

export interface Slug {
  _type: "slug";
  current: string;
}

export interface Reference {
  _ref: string;
  _type: "reference";
}
