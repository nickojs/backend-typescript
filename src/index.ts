import 'reflect-metadata';
import App from './app';
// import { createConnection } from "typeorm";

const server = new App().express;

server.listen(3000, () => {
  console.log('server started at port 3000');
});
