import {Request, Response} from 'express';
import { IAluno } from '../models/Aluno';
import EmailService from './EmailService';

const emailService = new EmailService();

class AlunoService {
    
    constructor() {

    }

    getAll(): IAluno[] {
        // Pedir ao Repository que traga a lista de todos os Alunos cadastrados
        return [
            {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'} 
        ]
    }

    getById(id: string): IAluno  {
        // Pedir para o Repository buscar no banco de dados o usuário com o ID informado
        return {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'} 
    }

    add(data: IAluno): IAluno {
        // Verificar se o aluno já existe. Se já existir, retornar erro
        // Solicitar ao Repository que faça o cadastro desse aluno no BD
        emailService.sendEmailWelcomeAluno();
        return data;
    }

    update(id: string): IAluno {
        // Verificar se o aluno já existe. Se não existir, retornar erro
        // Solicitar ao Repository que ele efetue as alterações no BD
        return {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'}
    }

    delete(id: string): IAluno {
        // Verificar se o aluno existe. Se não existir, retornar erro
        // Pedir que o Repository faça a exclusão do registro
        return {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'}
    }


}

export default AlunoService;