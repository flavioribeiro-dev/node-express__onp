import Express from "express";
import 'dotenv/config';
<<<<<<< HEAD
import router from "./router";
=======
>>>>>>> parent of c5ef6bf (criacao do arquivo router)

const server = Express();


server.listen({port: Number(process.env.PORT)}, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})