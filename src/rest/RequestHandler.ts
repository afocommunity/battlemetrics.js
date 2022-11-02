import type { RESTClient } from "./RESTClient";
import type { APIRequest } from './APIRequest';
import { AsyncQueue } from "@sapphire/async-queue"

export class RequestHandler {
  public remaining: number
  public limit: number
  public reset: number
  public queue: AsyncQueue = new AsyncQueue()
  constructor(public rest: RESTClient) {
    this.remaining = -1
    this.limit = -1
    this.reset = -1
  }

  get globalLimited(): boolean {
    return this.rest.globalRemaining <= 0 && Date.now() < (this.rest.globalReset ?? Infinity);
  }

  get localLimited() {
    return this.remaining <= 0 && Date.now() < this.reset;
  }

  get limited() {
    return this.globalLimited || this.localLimited;
  }
  get _inactive() {
    return this.queue.remaining === 0 && !this.limited;
  }
  async execute(request: APIRequest) {
    //TODO
  }
  globalDelayFor(ms: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.rest.globalDelay = null;
        resolve(void 0);
      }, ms).unref();
    });
  }

  async onRateLimit() {
    return;
  }
}
