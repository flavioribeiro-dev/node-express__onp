import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial')
})

router.get('/produtos', (req, res) => {
    res.json({ produtos: 'pijamas', cor: 'azul', idade: 99 })
})
router.get('/produtos/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const { tamanho, cor } = req.query;
    // const tamanho = req.query.tam;
    // const cor = req.query.cor;
    console.log(id, tamanho);
    res.json({ id: id, tamanho: tamanho, cor: cor });
})

export default router;