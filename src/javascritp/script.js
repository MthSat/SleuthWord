const yesButton = document.getElementById('yes');
const yesValue = document.getElementById('value-yes');
const noButton = document.getElementById('no');
const noValue = document.getElementById('value-no');
const maybeButton = document.getElementById('maybe');
const maybeValue = document.getElementById('value-maybe');
const abortButton = document.getElementById('abort');
const correctButton = document.getElementById('correct');
var secretword = document.getElementById('secretword');


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

abortButton.addEventListener('click',()=> {
    countyes = 0;
    countno = 0;
    countmaybe = 0;
    updatemaybeValue();
    updatenoValue();
    updateyesValue();
    secretword.type = "password";
    secretword.value = ""; 
});

correctButton.addEventListener('click',()=>{
    secretword.type = "text";
});
