import type {Client} from '../client/Client'
import { APIRequest } from './APIRequest';
export class RESTClient {
  public client: Client
  public globalRemaining: number
  public globalReset: number | null
  public globalDelay: number | null
  constructor(client: Client) {
    this.client = client
    this.globalReset = null
    this.globalDelay = null
    this.globalRemaining = client.options.restGlobalRateLimit > 0 ? client.options.restGlobalRateLimit : Infinity;
  }

  getAuthToken(): string {
    const token = this.client.token ?? this.client.accessToken
    if (token) return `Bearer ${token}`
    throw new Error('AUTH_TOKEN_MISSING')
  }

  get endpoint(): string {
    return this.client.options.endpoint
  }
  set endpoint(value: string) {
    this.client.options.endpoint = value
  }

  request(method: RequestMethods, url: string, options: unknown) {
    const request = new APIRequest(this, method, url, options);
  }
}
