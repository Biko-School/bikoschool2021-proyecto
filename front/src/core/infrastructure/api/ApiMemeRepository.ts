import MemeRepository from "../../domain/model/MemeRepository";

export default class ApiMemeRepository implements MemeRepository {
  constructor(private apiBaseUrl: string) {}

  async getMemes() {
    let response = await fetch(this.apiBaseUrl + "/memes");
    return await response.json();
  }
}
