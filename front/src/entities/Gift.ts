export class Gift {
  private title: string;
  private id: string;
  private urlOriginal: string;
  private import_datetime: string;
  private tags: string[];

  constructor(
    title: string,
    id: string,
    urlOriginal: string,
    import_datetime: string,
    tags: string[]
  ) {
    this.title = title;
    this.id = id;
    this.urlOriginal = urlOriginal;
    this.import_datetime = import_datetime;
    this.tags = tags;
  }
}
