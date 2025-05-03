export type BannerProps =
  | {
      type: 'video';
      source: string;
      poster: string;
      title: string;
      link?: string;
      linkTitle?: string;
    }
  | {
      type: 'image';
      source: string;
      title: string;
      link?: string;
      linkTitle?: string;
    };
