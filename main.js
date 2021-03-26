const list = ['encode', 'madlib', 'translate', 'search']
const explain = document.querySelector('#explanation')
const ul = document.querySelector('ul')

explain.addEventListener('click', ()=>{
    if(explain.innerText ==='Show explanation'){
        ul.classList=''
        explain.innerText = 'Hide explanation'
    } else if (explain.innerText ==='Hide explanation'){
        ul.classList.add('invisible')
        explain.innerText = 'Show explanation'
    }
})

inputBox.addEventListener('keyup', ()=>{
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
