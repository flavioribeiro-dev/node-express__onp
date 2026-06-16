import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial')
})

router.get('/produtos', (req, res) => {
    res.json({ produtos: 'pijamas', cor: 'azul', idade: 99 })
})
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const tamanho = req.query.tam;
    console.log(id, tamanho);
    res.json({ id: id, tamanho: tamanho });
})

export default router;