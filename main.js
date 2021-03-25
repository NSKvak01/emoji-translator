const submitButton = document.querySelector('#submit-button')

const list = ['encode', 'madlib', 'translate', 'search']

submitButton.addEventListener('click', ()=>{
    let radioValue;
    for (const rad of radio){
        if(rad.checked){
            radioValue=rad.value
        }
    }
    const inputBoxValue = inputBox.value
    if (radioValue==='random'){
        let num = Math.random()*list.length
        num = Math.floor(num)
        radioValue=list[num]
    }
    
    if (radioValue === 'encode'){
        encode(inputBoxValue)
    } else if (radioValue==='madlib'){
        output.innerText = madlib(inputBoxValue)
    } else if (radioValue==='search'){
        output.innerText=''
        for (const letter of search(inputBoxValue)){
            output.innerText+=letter.symbol
        }
    } else if (radioValue==='translate'){
        output.innerText = translate(inputBoxValue)
    }
})
