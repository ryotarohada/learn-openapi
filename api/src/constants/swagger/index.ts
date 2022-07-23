import swaggerJSDoc from "swagger-jsdoc"
import { PORT } from "@/constants/env"

export const SWAGGER_URI = '/api/spec'
export const SWAGGER_OPTION: Readonly<swaggerJSDoc.Options> = {
  swaggerDefinition: {
    info: {
      title: 'Learn OpenApi',
      description: 'OpenApi学習',
      version: '0.0.1',
      contact: {
        name: 'Ryotaro Hada 🐺',
        email: 'ryotarohada@gmail.com',
      },
    },
    host: `localhost:${PORT}`,
  },
  apis: ['**/index.ts'],
}
