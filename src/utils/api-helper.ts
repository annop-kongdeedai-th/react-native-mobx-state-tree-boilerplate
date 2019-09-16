import { request, requestWithBlob } from ".";

export interface IApiResponse {
  success: string;
  data: any;
  error: string[];
  headers: any;
}
export interface IResource {
  name?: string;
  id?: string | number;
}
export class ApiHelper {
  constructor(protected url = "") {
    this.url = url;
  }
  public setUrl(url: string) {
    this.url = url;
  }
  public async getAll(queries?: any): Promise<IApiResponse> {
    try {
      const result = await request.get(this.url, { queries });
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async getOne(id: number): Promise<IApiResponse> {
    try {
      const url = `${this.url}/${id}`;
      const result = await request.get(url, {});
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async createOne(body: any): Promise<IApiResponse> {
    try {
      const result = await request.post(this.url, { body });
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async createOneWithBlob(body: any): Promise<IApiResponse> {
    try {
      const result = await requestWithBlob.post(this.url, { body });
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async createOneJsonWithBlob(body: any): Promise<IApiResponse> {
    try {
      const result = await requestWithBlob.post(this.url, {
        body,
        jsonWithBlob: true,
      });
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async updateOne(body: any, id: number): Promise<IApiResponse> {
    const url = `${this.url}/${id}`;
    try {
      const result = await request.put(url, { body });
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async updateOneWithBlob(body: any, id: number): Promise<IApiResponse> {
    const url = `${this.url}/${id}`;
    try {
      const result = await requestWithBlob.put(url, { body });
      return result;
    } catch (e) {
      throw e;
    }
  }
  public async deleteOne(id: number): Promise<IApiResponse> {
    const url = `${this.url}/${id}`;
    try {
      const result = await request.delete(url, {});
      return result;
    } catch (e) {
      throw e;
    }
  }
}
