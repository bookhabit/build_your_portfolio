export interface PortfolioDetailType {
    PortfolioDoc:PortfolioType
    author_name:string
}

export type PortfolioType = {
    title:string; 
    purpose:string;
    introduce:string;
    process:string[]; 
    learned:string[];
    photos: string[],
    important_functions:Important_function[],
    usedTechnology:string[];
    developPeriod:DevelopPeriodType;
    demoLink:DemoLinkType;
    category:CategoryType;
    selectedUI:SelectedUI;
    _id?:string;
    author?:string;
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

export type Important_function = {
    important_function_desc:string,
    important_function_photo:string[],
}

export type CategoryType = "clone"|"individual"|"cooperation"
export type SelectedUI = "A"|"B"|"C"|"D"
