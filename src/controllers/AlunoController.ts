import { Request, Response } from 'express';
import AlunoService from '../services/AlunoServices';

const alunoService = new AlunoService();

class AlunoController {
    
    constructor() {

    }

    getAll(req: Request, res: Response) {
        // Validar os dados
        // Envia dados para o Service
        const result = alunoService.getAll;
    }

    getById(req: Request, res: Response) {
        // Validar os dados
        // Envia dados para o Service
        const result = alunoService.getById(req.params.id as any)
    }

    add(req: Request, res: Response) {
        // Validar todos os dados
        // Sanitizar dados
        // Envia dados para o Service
        const result = alunoService.add(req.body);
    }

    update(req: Request, res: Response) {
        // Validar os dados
        // Sanitizar dados
        // Envia dados para o Service
        const result = alunoService.update(req.params.id as any);
    }

    delete(req: Request, res: Response) {
        // Validar os dados
        // Envia dados para o Service
        const result = alunoService.delete(req.params.id as any);
    }
}

export default AlunoController;