
export type ContentfulAsset = {
        url: string;
        details?: {
            size: number;
            image: {
                width: number;
                height: number;
            };
        };
        fileName?: string;
        contentType?: string;
};

export type AboutMeContent = Partial<{
    title: string;
    profileImage: ContentfulAsset;
    stockImage1: ContentfulAsset;
    stockImage2: ContentfulAsset;
    stockImage3: ContentfulAsset;
    introduction: string;
    personalQualities: string;
    careerGoals: string;
    callToAction: string;

}>

export type ContentFulAboutMe = Partial<{
    title: string;
    stockImage1: {
        fields: {file: ContentfulAsset};
    }
    stockImage2: {
        fields: {file: ContentfulAsset};
    }
    stockImage3: {
        fields: {file: ContentfulAsset};
    }
    profileImage: {
        fields: {file: ContentfulAsset};
    }
    introduction: string;
    personalQualities: string;
    careerGoals: string;
    callToAction: string;
}>

export type ContentFulResponse = {
    items: {fields: ContentFulAboutMe}[]
}
