import express from 'express';

import{

    listarFuncionarios,
    inserirFuncionarios,
    atualizarFuncionario,
    excluirFuncionario

}from '../controllers/funcionarioController.js'

const router = express.Router();

router.get('/', listarFuncionarios);
router.post('/', inserirFuncionarios);
router.put('/:id', atualizarFuncionario);
router.delete('/:id', excluirFuncionario);

export default router;
