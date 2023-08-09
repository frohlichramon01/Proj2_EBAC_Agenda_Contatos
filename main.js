const form = document.getElementById("form-contatos");
let linhas = '';
const contatos = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTotalContatos()
})

function adicionaLinha(){
    const inputNome = document.getElementById("nome");
    const inputFone = document.getElementById("fone");

    if(contatos.includes(inputNome.value)){
        alert(`Contato ${inputNome.value} já cadastrado, altere o nome`);
    } else {
        contatos.push(inputNome.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputFone.value}</td>`;
        linha += '</tr>';
        linhas += linha;

        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;
    }
    
    inputNome.value = '';
    inputFone.value = '';

}

function atualizaTotalContatos(){
    const qtycontatos = document.getElementById("qty-contatos");
    qtycontatos.innerHTML = contatos.length;

}