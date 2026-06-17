import {Request, Response} from 'express';

class AlunoService {
    
    constructor() {

    }

    getAll() {
        // Pedir ao Repository que traga a lista de todos os Alunos cadastrados
    }

    getById(id: string) {
        // Pedir para o Repository buscar no banco de dados o usuário com o ID informado

    }

    add(data: any) {
        // Verificar se o aluno já existe. Se já existir, retornar erro
        // Solicitar ao Repository que faça o cadastro desse aluno no BD

    }

    update(id: string) {
        // Verificar se o aluno já existe. Se não existir, retornar erro
        // Solicitar ao Repository que ele efetue as alterações no BD
    }

    delete(id: string) {
        // Verificar se o aluno existe. Se não existir, retornar erro
        // Pedir que o Repository faça a exclusão do registro
    }


}

export default AlunoService;