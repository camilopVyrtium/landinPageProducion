export interface Cite {
    text: string;
    owner: string;
    job: string;
}

export interface Profit {
    id: string;
    image: string;
    text: string;
}
export interface Result {
    id: number;
    title: string;
    text: string;
    cite: Cite;
    image: string;
    line: string;
    profits: Profit[];
}
export interface OurResults {
    title: string;
    separator: string;
    results: Result[];
}
