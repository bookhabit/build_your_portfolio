export type PortfolioType = {
    title:string; 
    purpose:string;
    introduce:string;
    process:string; 
    learned:string;
    photos: string[],
    usedTechnology:string[];
    developPeriod:DevelopPeriodType;
    demoLink:DemoLinkType;
    category:CategoryType;
    selectedUI:SelectedUI;
    _id:string;
    author:string;
}

export type DemoLinkType = {
    projectURL:string;
    githubURL:string;
    designURL:string;
    documentURL:string;
}

export type DevelopPeriodType = {
    start:string,
    end:string,
}

export type CategoryType = "clone"|"individual"|"cooperation"
export type SelectedUI = "A"|"B"|"C"
