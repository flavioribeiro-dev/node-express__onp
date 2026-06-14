import Express from "express";
import 'dotenv/config';

const server = Express();


server.listen({port: Number(process.env.PORT)}, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})