export class Meme {
    private readonly _id: string
    private readonly _title: string
    private readonly _image: string
    private readonly _tags: string[]
    //private  _votes: number

    constructor(id:string, title: string, image: string, tags: string[] ) {
        this._id = id
        this._title = title
        this._image = image
        this._tags = tags
    }

    getId(): string {
        return this._id;
    }

    getTitle(): string {
        return this._title
    }

    getImage(): string {
        return this._image
    }

    getTags(): string[] {
        return this._tags
    }
}