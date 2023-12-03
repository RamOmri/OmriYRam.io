export type RootTabsParamList = {
  Portfolio: undefined;
  Contact: undefined;
  AboutMe: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Project: { title: string; metaInfo: any; content: any }; // TODO: create content and metainfo type
};
