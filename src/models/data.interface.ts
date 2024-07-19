export interface IData {
  about_me: IAboutMe;
  skills: ISkill[];
  proyects: IProject[];
  contact: any[];
}

export interface IAboutMe {
  title: string;
  name: string;
  description: string;
  img: string;
  icon: string;
  pdf_url: string;
  list: List[];
}

export interface List {
  title: string;
  item: Item[];
}

export interface Item {
  label: string;
  value: string;
  sublabel?: string;
}

export interface IProject {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  img: Img[];
  video_preview: string;
  url_app: string;
  url_github: string;
}

export interface Img {
  src: string;
  alt: string;
}

export interface ISkill {
  label: string;
  icon: string;
}
