function saveUserInput() {
    var userText = document.getElementById("user-input").value;
    if (userText) {
        var isEmailValid = userText.split("@").length == 2;
        if (isEmailValid) {
            var afterAt = userText.split("@")[1];
            if (afterAt.split(".").length == 2) {
                alert("O e-mail "+ userText + " foi salvo com sucesso!");
            }
            else {
                alert("O e-mail nao e valido, tente novamente");
            }    
        }
        else {
            alert("O e-mail nao e valido, tente novamente");
        }
    }
    else {
        alert ("Nao existe e-mail informado. Tente novamente.");
    }
}


/*
LÓGICA PARA EXIBIÇÃO DO ALERTA AO USUÁRIO

Se o texto que o usuário digitou existir (texto que está na variável userText):
Verificar se esse texto é um texto que corresponde a um e-mail.
Se o texto for um e-mail, mostrar a mensagem:
"O e-mail 'email@dominio.com' foi salvo com sucesso!"
Se o texto não for e-mail, mostrar a mensagem:
"O e-mail informado não é válido. Tente novamente."
Caso contrário vou exibir a mensagem: "Não existe e-mail informado. Tente novamente."
*/