const  tranButton = document.querySelector('#tranButton');


function textTranslation(){
    const inputText = document.querySelector('#inputText').value;
    const outputArea =  document.querySelector('#translate-output');
    
    outputArea.innerHTML = inputText;
}


fetch('https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json')
.then(res => res.json() )
.then(data => console.log(data));


tranButton.addEventListener('click',textTranslation);


