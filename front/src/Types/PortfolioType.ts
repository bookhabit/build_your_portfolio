export type PortfolioType = {
    title:string; 
    purpose:string;
    introduce:string;
    process:string; 
    learned:string;
    photos: [string],
    usedTechnology:string[];
    developPeriod:{
        start:string,
        end:string,
    };
    DemoLink:DemoLinkType;
    category:CategoryType;
    selectedUI:SelectedUI
}

export type DemoLinkType = {
    projectURL:string;
    githubURL:string;
    designURL:string;
    document:string;
}

export type CategoryType = ["clone","individual","Cooperation"]
export type SelectedUI = ["A","B","C"]
