import MemeRepository from "../../domain/model/MemeRepository";

export default class ApiMemeRepository implements MemeRepository {
  constructor(private apiBaseUrl: string) {}

  async getMemes(searchText: string = "") {
    let memeUrl = this.apiBaseUrl + "/memes";

    let params = new URLSearchParams();
    if (searchText.length > 0) params.append("searchText", searchText);

    memeUrl += `?${params.toString()}`;

    let response = await fetch(memeUrl);
    return await response.json();
  }
}
