

const titles = document.querySelectorAll('.title h3')
const details = document.querySelectorAll('.detail p')

const title = document.querySelector('.views-title')
const detail = document.querySelector('.views-detail')

const prayButton = document.querySelectorAll('.pray')

for(let i = 0; i < details.length; i++){

        prayButton[i].addEventListener('click', ()=>{

                titles[i].textContent = "Prayer of Thanksgiving"   
                details[i].textContent = `
                Father we thank for the grace you 
                have extended to us to be able to 
                witness this day. We give all the 
                glory to your Holy name` 
                
                prayButton[i].textContent = "Finish"

        })

}

