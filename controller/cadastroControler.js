const cadastroModel = require("../model/cadastro");

const cadastroController = {
    index: (req, res) => {
        res.send(cadastroModel.listarCadastro());
    },
    add: (req, res) => {
        let novoCadastro = req.params;
        cadastroModel.adicionarCadastro(novoCadastro);
        res.send(`${novoCadastro.nome} foi adicionado!`);
    },
    show: (req, res) => {
        res.send("Exibe 1 cadastro em especifico.");
    }
};

module.exports = cadastroController;