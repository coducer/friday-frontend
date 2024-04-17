import { IModalResponse } from "../interfaces/response/IModalResponse";

export class User {
  id: string;
  url: string;

  constructor(params: IModalResponse) {
    this.id = params.id;
    this.url = params.url;
  }
}
