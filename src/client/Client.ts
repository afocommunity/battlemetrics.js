import { enumerable } from '../util/enumerable'

export class Client {

  public options: ClientOptions
  @enumerable(false)
  public token?: string
  @enumerable(false)
  public accessToken?: string

  constructor(options: ClientOptions) {
    this.options = {
      ...{ endpoint: 'https://api.battlemetrics.com/' },
      ...options
    }
  }
}
