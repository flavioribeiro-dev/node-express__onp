import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = Router();

router.get('/', (req, res) => {
    res.send('página principal')
})

const alunoController = new AlunoController();
router.get('/alunos', alunoController.getAll) // Consulta todos os alunos
router.post('/alunos', alunoController.add) // Cadastra um novo aluno
router.get('/alunos/:id', alunoController.getById) // Consulta um aluno específico
router.put('/alunos/:id', alunoController.update) // Atualiza os dados de um aluno específico
router.delete ('/alunos/:id', alunoController.delete) // Apaga o registro de um aluno

export default router;