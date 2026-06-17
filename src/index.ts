import Express from "express";
import 'dotenv/config';
import router from "./routes/router";

const server = Express();
server.use(Express.urlencoded({extended: true}));
server.use(router)

server.listen({port: Number(process.env.PORT)}, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})