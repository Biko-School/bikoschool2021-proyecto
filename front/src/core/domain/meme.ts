export class Meme {
    public id: string
    public title: string
    public image: string
    public tags: string[]
    //private  _votes: number

    constructor(id:string, title: string, image: string, tags: string[] ) {
        this.id = id
        this.title = title
        this.image = image
        this.tags = tags
    }

    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title
    }

    getImage(): string {
        return this.image
    }

    getTags(): string[] {
        return this.tags
    }
}