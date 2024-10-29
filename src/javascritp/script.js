const yesButton = document.getElementById('yes');
const yesValue = document.getElementById('value-yes');
const noButton = document.getElementById('no');
const noValue = document.getElementById('value-no');
const maybeButton = document.getElementById('maybe');
const maybeValue = document.getElementById('value-maybe');
const abortButton = document.getElementById('abort');
const correctButton = document.getElementById('correct');
const restartButton = document.getElementById('restart');
const secretword = document.getElementById('secretword');

let countyes = 0;
let countno = 0;
let countmaybe = 0;

const updateyesValue = () => {
    yesValue.innerHTML = countyes;
};

yesButton.addEventListener('click',()=> {
    countyes += 1;
    updateyesValue();
});

const updatenoValue = () => {
    noValue.innerHTML = countno;
};

noButton.addEventListener('click',()=> {
    countno += 1;
    updatenoValue();
});

const updatemaybeValue = () => {
    maybeValue.innerHTML = countmaybe;
};

maybeButton.addEventListener('click',()=> {
    countmaybe += 1;
    updatemaybeValue();
});

correctButton.addEventListener('click',()=>{ 
    secretword.type = "text"; //Revela a palavra secreta
    secretword.disabled = 1; //Bloqueia o botão para que uma nova partida seja iniciada
    yesButton.disabled = 1; 
    noButton.disabled = 1; 
    maybeButton.disabled = 1; 
    correctButton.disabled = 1; 
    abortButton.disabled = 1; 
    ShowResult("ACERTOU",secretword.value,countyes,countno,countmaybe); //Insere o resumo do resultado
    
});

abortButton.addEventListener('click',()=> {
    let textconfirmation = "Certeza que deseja desistir?";
    if (confirm(textconfirmation)==true){
        secretword.type = "text";
        secretword.disabled = 1;
        yesButton.disabled = 1;
        noButton.disabled = 1;
        maybeButton.disabled = 1;
        correctButton.disabled = 1;
        abortButton.disabled = 1;
        ShowResult("DESISTIU",secretword.value,countyes,countno,countmaybe);
    }else{}
});

restartButton.addEventListener('click',()=> {
    countyes = 0; //reseta a contagem de acertos
    countno = 0;
    countmaybe = 0;
    updatemaybeValue(); //atualiza na tela os acertos
    updatenoValue();
    updateyesValue();
    secretword.type = "password"; //esconde a palavra secreta
    secretword.value = ""; //limpa a palavra secreta
    secretword.disabled = 0; //libera os botões
    yesButton.disabled = 0;
    noButton.disabled = 0;
    maybeButton.disabled = 0;
    correctButton.disabled = 0;
    abortButton.disabled = 0;
});


function ShowResult(text0,text1,text2,text3,text4) {
    document.getElementById("result").innerHTML +=
     text0+ "<br>" 
     +"- Palavra: " +"<strong>"+ text1 +"</strong>"+ "<br>"
     +"- SIM: " +"<strong>"+ text2 +"</strong>"+ "<br>"
     +"- NÃO: " +"<strong>"+ text3 +"</strong>"+ "<br>"
     +"- TALVEZ: " +"<strong>"+ text4 +"</strong>"+ "<br>"
     +"Tentativas Totais: " + "<strong>"+(text2+text3+text4)+"</strong>"+"<br><br>";
  }