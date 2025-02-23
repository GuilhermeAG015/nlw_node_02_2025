import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const helloWorld: FastifyPluginAsyncZod = async (app) => {
  app.get('/hello', () => {
    return 'Hello World!'
  })
}