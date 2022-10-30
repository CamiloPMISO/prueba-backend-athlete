export type Risk = {
    id: string;
    imcMin: number;
    imcMax: number;
    features: string;
    limitations: string;
    howToReduceIt: string;
    risk: number;
}