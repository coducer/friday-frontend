import { IOrderResponse } from "../interfaces/response/IOrderResponse";

export class Orders {
  created_at: string;
  garment_url: string;
  id: number;
  model_id: number;
  status: string;
  tryon_url: string | null;
  updated_at: string;

  constructor(params: IOrderResponse) {
    this.created_at = params.created_at;
    this.garment_url = params.garment_url;
    this.id = params.id;
    this.model_id = params.model_id;
    this.status = params.status;
    this.tryon_url = params.tryon_url;
    this.updated_at = params.updated_at;
  }
}
