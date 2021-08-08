const  tranButton = document.querySelector('#tranButton');


function textTranslation(){
    const inputText = document.querySelector('#inputText').value;
    const outputArea =  document.querySelector('#translate-output');
    outputArea.innerHTML = inputText;
}


tranButton.addEventListener('click',textTranslation);


