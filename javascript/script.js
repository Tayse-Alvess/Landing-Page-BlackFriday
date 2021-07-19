function cadastroCliente(){
    let nomeInput = document.getElementById("nome");
    let emailInput = document.getElementById("email");
    
    let email = JSON.parse(localStorage.getItem("cliente"));

    if(email == null){
        localStorage.setItem("cliente", "[]");
        email = [];
    }

    let dataAuxiliar = {
        nome: nomeInput.value,
        email: emailInput.value
    }

    email.push(dataAuxiliar);

    localStorage.setItem("cliente", JSON.stringify(email));
    alert("E-mail cadastrado com sucesso!"); 
    nomeInput.value="";
    emailInput.value="";
}