const dados = [{
    nome: "José Carlos",
    email: "josecarlos@exemplo.com",
    cpf: 99900099900,
    dataN: 01102020
}];

const listarCadastro = () => {
    let conteudo = "";
    for (let dado of dados) {
        conteudo += `
      ------------<br>
      Nome: ${dado.nome}<br>
      -----||-----<br>`;
    }

    return conteudo;
};

const adicionarCadastro = novoCadastro => {
    return dados.push(novoCadastro);
};

const buscarCadastro = nomeCadastro => {
    let cadastrosEncontrados = dados.filter(dado => dado.nome == nomeCadastro);

    return cadastrosEncontrados;
};
 
const enviarDados = document.getElementById("enviarDados").addEventListener("click", novoCadastro());

module.exports = {
    listarCadastro,
    adicionarCadastro,
    buscarCadastro
};