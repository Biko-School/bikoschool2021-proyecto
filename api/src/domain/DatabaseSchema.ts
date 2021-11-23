export interface DatabaseSchema {
    memes: MemeDB[];
}

interface MemeDB { 
    images: images;
    id: string;
    title: string;
    tags: string[];
}

interface images {
    small : {
        url: string
    }
}

