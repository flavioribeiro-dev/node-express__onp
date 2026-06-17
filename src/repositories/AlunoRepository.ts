import { IAluno } from "../models/Aluno";

class AlunoRepository {

    constructor() {

    }

    getAll(): IAluno[] {
        // Pedir ao BD que busque todos os alunos cadastrados
        return [
            {nome: 'Flavio Henrique de', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'} 
        ]
    }

    getById(id: string): IAluno  {
        // Pedir ao BD que busque um Aluno com esse ID
        // Se o registro existir, retornar dados. Se não, retornar erro...
        return {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'} 
    }

    add(data: IAluno): IAluno {
        // Pedir ao BD que crie um novo registro com os dados enviados
        return data;
    }

    update(id: string, data: IAluno) {
        // Pedir ao BD que atualize determinado Aluno (id)
        // return {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'} 
        return data;
    }

    delete(id: string) {
        // Pedir ao BD que exclua determinado Aluno (id)
        // return {nome: 'Flavio', email: 'flavio@gmail', telefone: '(98)98877-6644', senha: '9876543', cpf: '1233214566-54'} 
        return id;
    }
}

export default AlunoRepository;
