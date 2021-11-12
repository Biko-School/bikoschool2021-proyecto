export class MemeDataImage{
    public readonly width : number;
    public readonly height : number;
    public readonly url : string;

    constructor(jsonImage : JSON){
        this.width = jsonImage['width']
        this.height = jsonImage['height']
        this.url = jsonImage['url']

    }
}


export class MemeData{
    public readonly id : string;
    public readonly slug : string;
    public readonly giphyUrl : string;
    public readonly title: string;
    public readonly importDatetime : Date;
    public readonly tags : string[];

    public readonly originalImage : MemeDataImage;
    public readonly smallImage : MemeDataImage;

    constructor (jsonData : JSON){
        this.id = jsonData['id'];
        this.slug = jsonData['slug'];
        this.giphyUrl = jsonData['giphyUrl'];
        this.title = jsonData['title'];
        this.importDatetime = new Date(jsonData['import_datetime']);
        this.originalImage = new MemeDataImage(jsonData["images"]["original"]);
        this.smallImage = new MemeDataImage(jsonData["images"]["small"]);
        this.tags = jsonData["tags"]

    }
}

/*
      "id": "YleuWir5NTNVXkflSp",
      "type": "gif",
      "slug": "moodman-movie-brazil-the-YleuWir5NTNVXkflSp",
      "giphyUrl": "https://giphy.com/gifs/moodman-movie-brazil-the-YleuWir5NTNVXkflSp",
      "title": "Movie Brazil GIF by MOODMAN",
      "source_tld": "",
      "source_post_url": "",
      "import_datetime": "2020-08-20 02:24:22",
      "username": "",
      "images": {
        "original": {
          "width": "480",
          "height": "269",
          "url": "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif"
        },
        "small": {
          "width": "200",
          "height": "112",
          "url": "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif"
        }
      },
      "tags": ["#movie", "#brazil", "#brazil the movie"]
*/