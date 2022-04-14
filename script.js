const selezionata ={};

const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes) {
    box.addEventListener('click', Click);
}

function Click(event){
    const box = event.currentTarget;
    const Rispo = box.dataset.choiceId;
    const risposte = box.parentNode.querySelectorAll('div');

    box.querySelector('.checkbox').src = "checked.png";
    box.classList.add('seleziona');
    box.classList.remove('opacita');
    
    for (const risposta of risposte){
        if(risposta.dataset.choiceId != Rispo){
          risposta.classList.add('opacita');
          risposta.querySelector('.checkbox').src="unchecked.png";
          risposta.classList.remove('seleziona');
        }
    }
    selezionata[box.dataset.questionId] = box.dataset.choiceId;
    if(selezionata.one && selezionata.two && selezionata.three){
        for (const box of boxes) {
            box.removeEventListener('click', Click);
        }
        mostra(scegli());
}
}
function mostra(key){
    const visualizza = document.querySelector('#risultato');
    visualizza.querySelector('h1').textContent = risultato[key].title;
    visualizza.querySelector('p').textContent = risultato[key].contents;
    visualizza.classList.remove('#tasto');
    const tasto = document.querySelector('#tasto');
    tasto.addEventListener('click', ricomincia);
}

function scegli(){
    if(selezionata.one === selezionata.two || selezionata.one === selezionata.three)
        return selezionata.one;
    if(selezionata.two === selezionata.one || selezionata.two === selezionata.three)
        return selezionata.two;
    if(selezionata.three === selezionata.one || selezionata.three === selezionata.two)
        return selezionata.three;
    
    return selezionata.one;
}   

function ricomincia(){
       const blocco = document.querySelector('#risultato');
       blocco.classList.add('risult');
    
    for (const j in selezionata) {
        delete selezionata[j];
    }

    for (const box of boxes) {
        box.classList.remove('opacita');
        box.classList.remove('seleziona');
        box.addEventListener('click', Click);
        box.querySelector('.checkbox').src = "unchecked.png";
    }
}
