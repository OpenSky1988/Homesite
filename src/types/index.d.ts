declare module 'jsencrypt' {
  export class JSEncrypt {
    constructor();
    setPublicKey(pk: string): void;
    encrypt(key: string): string;
  }
}

interface IAction<T> {
  type: string;
  payload: T;
}

interface IMenuState {
  isOpen: boolean;
  fullHeight: number;
}

interface IListItemState {
  open: boolean;
  key: string;
}

interface IContactFormState {
  email: string;
  name: string;
  phone: string;
  text: string;
}

interface ISkill {
  id: string;
  img: string;
  en: ISkillText;
  ru: ISkillText;
}

interface ISkillText {
  name: string;
  description: string;
}

interface IProject {
  _id: string;
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  img: string;
  skills: string;
}

interface IArticle {
  _id: string;
  id: string | null;
  header: string;
  text: string;
  img: string;
  date: string;
}

interface ILink {
  id: string;
  href: string;
  img: string;
  alt: string;
}
