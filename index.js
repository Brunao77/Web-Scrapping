const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch()
    const page= await browser.newPage()

    await page.goto('https://www.frlp.utn.edu.ar/plan-estudio-sistemas')
    
    
   const enlaces = await page.evaluate(()=>{
        const elements=document.querySelectorAll('.views-field-title a');
        const links = [];
        for(let element of elements){
            links.push(element.innerHTML);
        }
        return links;
    })

    console.log(enlaces);

})();