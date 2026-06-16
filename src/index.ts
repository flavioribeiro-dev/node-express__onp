import Express from "express";
import 'dotenv/config';
import router from "./router";

const server = Express();

server.use(router);

server.listen({port: Number(process.env.PORT)}, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})