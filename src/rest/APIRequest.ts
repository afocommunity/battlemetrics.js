import type { Client } from '../client/Client';
import type { RESTClient } from './RESTClient';
export class APIRequest {
  rest: RESTClient
  client: Client
  method: RequestMethods
  path: string
  constructor(rest: RESTClient, method: RequestMethods, path: string, options: any) {
    this.rest = rest
    this.client = rest.client
    this.method = method


    let queryString = '';
    if (options.query) {
      const query = Object.entries(options.query)
        .filter(([, value]) => value !== null && typeof value !== 'undefined')
        .flatMap(([key, value]) => (Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]));
      queryString = new URLSearchParams(query as any).toString();
    }
    this.path = `${path}${queryString && `?${queryString}`}`;
  }
}
