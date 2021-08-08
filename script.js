const  tranButton = document.querySelector('#tranButton');


function textTranslation(){
    const inputText = document.querySelector('#inputText').value;
     console.log(inputText);
}


tranButton.addEventListener('click',textTranslation);


