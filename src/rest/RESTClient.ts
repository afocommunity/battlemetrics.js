import type { Client } from '../client/Client'
import { APIRequest } from './APIRequest';
export class RESTClient {
  public client: Client
  public globalMinuteRemaining: number
  public globalSecondRemaining: number
  public globalMinuteReset: number | null
  public globalSecondReset: number | null
  public globalSecondDelay: number | null
  public globalMinuteDelay: number | null
  constructor(client: Client) {
    this.client = client
    this.globalSecondDelay = null
    this.globalMinuteDelay = null
    this.globalMinuteReset = null
    this.globalSecondReset = null
    this.globalMinuteRemaining = Infinity; // TODO: Implement Minute+Second Rate Limit Handle
    this.globalSecondRemaining = Infinity; // TODO: Implement Minute+Second Rate Limit Handle
  }

  getAuthToken(): string {
    const token = this.client.token ?? this.client.accessToken
    if (token) return `Bearer ${token}`
    throw new Error('AUTH_TOKEN_MISSING')
  }
  get isAuthorized(): boolean {
    try {
      this.getAuthToken()
      return true
    } catch (error) {
      return false
    }
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
