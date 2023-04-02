function generateQuote(){
    const quotes = [
       innerHTML =` <img src="./icons/Эстетик 1.jfif" alt="">` ,
       innerHTML =` <img src="./icons/Эстетик 2.jfif" alt="">`,
       innerHTML =` <img src="./icons/Эстетик 3.jfif" alt=""> ` , 
       innerHTML =` <img src="./icons/Эстетик 4.jfif" alt="">`,
       innerHTML =` <img src="./icons/Эстетик 5.jfif" alt=""> `
    ]
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const quote = quotes[randomIndex]
        document.getElementById('quote').innerHTML = quote
    }
    function saveQuote(){
        const quote = document.getElementById('quote').innerHTML
        localStorage.setItem('quote' , quote)
    
    }
    function loadQuote(){
        const quote = localStorage.getItem('quote')
        if(quote){
            document.getElementById('quote').innerHTML = quote
        }
        else{
            generateQuote()
        }
    }
    document.getElementById('new-quote').addEventListener('click' , function(){
        generateQuote()
        saveQuote()
    })
    window.addEventListener('load' , function(){
        saveQuote()
    })
    