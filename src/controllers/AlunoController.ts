import { Request, Response } from 'express';
import AlunoService from '../services/AlunoServices';
import { IAluno } from '../models/Aluno';

const alunoService = new AlunoService();

class AlunoController {
    
    constructor() {

    }

    getAll(req: Request, res: Response) {
        // Validar os dados
        // Envia dados para o Service
        const result = alunoService.getAll();
        res.json(result)
    }

    getById(req: Request, res: Response): IAluno {
        // Validar os dados
        // Envia dados para o Service
        const result = alunoService.getById(req.params.id as any)
        return result;
    }

    add(req: Request, res: Response) {
        // Validar todos os dados
        // Sanitizar dados
        // Envia dados para o Service
        const result = alunoService.add(req.body);
        res.json(result);
    }

    update(req: Request, res: Response) {
        // Validar os dados
        // Sanitizar dados
        // Envia dados para o Service
        const result = alunoService.update(req.params.id as any, req.body);
        res.json(result);
    }

    delete(req: Request, res: Response) {
        // Validar os dados
        // Envia dados para o Service
        const result = alunoService.delete(req.params.id as any);
        res.json(result);
    }
}

export default AlunoController;