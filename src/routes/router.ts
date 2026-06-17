import { Router, Request, Response } from "express";


const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('página inicial')
})


router.get('/alunos', ) // buscar todos os alunos
router.post('/alunos', ) // cadastrar um novo aluno
router.get('/aluno/:id', ) // buscar um aluno específico
router.put('/aluno/:id', ) // editar os dados de um aluno específico
router.delete('/aluno/:id', ) // excluir um aluno específico

export default router;