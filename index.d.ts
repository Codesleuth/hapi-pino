import { Plugin, Request, ResponseToolkit } from 'hapi'
import * as Pino from 'pino'

declare namespace HapiPino {
  interface Options extends Pino.LoggerOptions {
    logEvents?: string[]
    instance?: Pino.Logger
    stream?: NodeJS.WriteStream
    ignorePaths?: boolean
  }
}

declare var HapiPino: Plugin<HapiPino.Options>

export = HapiPino
