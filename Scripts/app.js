

let submitBtn = document.getElementById('submitBtn')
let subscribeInput = document.getElementById('subscribeInput')
let subscribedText = document.getElementById('subscribedTxt')


submitBtn.addEventListener('click', (e) =>{
    ApiCall()
    
})

const ApiCall = async () =>{
    const url = `https://mailcheck.p.rapidapi.com/?domain=${subscribeInput.value}`;
    const options = {
    	method: 'GET',
    	headers: {
    	'X-RapidAPI-Key': `7eefbf4b77mshbfe6662be5e943dp18a647jsnfb99f5cf7219`,
    	'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    	}
    };

    try {
    	const response = await fetch(url, options);
    	const result = await response.json();
        if(result.valid)
        {
            submitBtn.remove()
            subscribeInput.remove()
            const p = document.createElement('p')
            const p2 = document.createElement('p')
            p.textContent = "Thank you for subscribing!"
            p2.textContent = 'We will now send news to your mailbox'
            subscribedText.append(p, p2)
        }
    } 
    catch (error) 
    {
    	console.error(error);
    }
    
}
