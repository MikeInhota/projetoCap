const express = require("express");
const cadastroRotas = require("./routes/cadastroRota")

const app = express();

const saudacao = "***APP CAP***";

app.listen(3000, () => {
    console.log(saudacao);
    console.log("Servidor ouvindo!");
});

app.use(cadastroRotas);