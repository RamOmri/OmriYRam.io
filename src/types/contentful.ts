
export type ContentfulAsset = {
    title?: string;
    description?: string;
    file: {
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
};

export type AboutMeContent = Partial<{
    title: string;
    profileImage: ContentfulAsset["file"];
    stockImage1: ContentfulAsset["file"];
    stockImage2: ContentfulAsset["file"];
    stockImage3: ContentfulAsset["file"];
    introduction: string;
    personalQualities: string;
    careerGoals: string;
    callToAction: string;

}>

export type ContentFulAboutMe = Partial<{
    title: string;
    stockImage1: {
        fields: ContentfulAsset;
    }
    stockImage2: {
        fields: ContentfulAsset;
    }
    stockImage3: {
        fields: ContentfulAsset;
    }
    profileImage: {
        fields: ContentfulAsset;
    }
    introduction: string;
    personalQualities: string;
    careerGoals: string;
    callToAction: string;
}>

export type ContentFulResponse = {
    items: {fields: ContentFulAboutMe}[]
}
