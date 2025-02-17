export interface Photo {
    id: number;
    url: string;
    title?: string;
    description?:string;

    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string
    },
    user: {
        name: string,
        location:string
    }
}