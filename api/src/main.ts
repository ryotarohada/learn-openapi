import { ApiServer } from './server'
import { config } from 'dotenv'

class Main {
  constructor() {
    this.init()
    this.listenApiServer()
  }

  private init(): void {
    config()
  }

  public listenApiServer(): void {
    new ApiServer()
  }
}

new Main()
