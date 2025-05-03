export type HeroProps =
  | {
      type: 'video';
      source: string;
      poster: string;
      title?: string;
      description?: string;
      link?: string;
      linkTitle?: string;
    }
  | {
      type: 'image';
      source: string;
      title?: string;
      description?: string;
      link?: string;
      linkTitle?: string;
    };
