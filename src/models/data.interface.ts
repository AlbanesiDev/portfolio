export interface IData {
  about_me: IAboutMe;
  skills: ISkill[];
  projects: IProject[];
  contact: IContact;
}

export interface IPersonalInfo {
  label: string;
  value: string;
  sublabel?: string;
}

export interface IListSection {
  title: string;
  item: IPersonalInfo[];
}

export interface IAboutMe {
  title: string;
  name: string;
  description: string;
  img: string;
  icon: string;
  pdf_url: string;
  list: IListSection[];
}

export interface ISkill {
  label: string;
  icon: string;
}

export interface IStack {
  label: string;
  icon: string;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface IVideoPreview {
  cover: string;
  src: string;
  alt: string;
}

export interface IProject {
  title: string;
  subtitle: string;
  description: string;
  stack: IStack[];
  img: IImage[];
  video_preview: IVideoPreview;
  url_app: string;
  url_github: string;
}

export interface IContactFormField {
  name: string;
  placeholder: string;
  type: string;
}

export interface IContactForm {
  name: IContactFormField;
  email: IContactFormField;
  message: IContactFormField;
  btn: string;
}

export interface IContact {
  social_btn: ISocialButton[];
  email: string;
  form: IContactForm;
}
export interface ISocialButton {
  label: string;
  icon: string;
  url: string;
}
