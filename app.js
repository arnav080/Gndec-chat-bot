let toggle_btn = document.getElementById('access-button');
      let faqpage = document.getElementById('popup');
      let hidden = true;

      toggle_btn.addEventListener('click', ()=>{

        if(hidden){
           faqpage.style.display = "block";
           hidden = false
}
        else{
            faqpage.style.display = "none";
            hidden = true;
        }
      })

/* Js for FAQs toggle */
function animate(){
    let toggles = document.getElementsByClassName('toggle');
    let contentDiv = document.getElementsByClassName('answer');
    let icons = document.getElementsByClassName('icon');

    for(let i=0; i<toggles.length; i++){
        toggles[i].addEventListener('click', ()=>{
            if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
                contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
                icons[i].classList.remove('fa-plus');
                icons[i].classList.add('fa-minus');
            }
            else{
                contentDiv[i].style.height = "0px";
                icons[i].classList.remove('fa-minus');
                icons[i].classList.add('fa-plus');
            }

            for(let j=0; j<contentDiv.length; j++){
                if(j!==i){
                    contentDiv[j].style.height = "0px";
                    icons[j].classList.remove('fa-minus');
                    icons[j].classList.add('fa-plus');
                }
            }
        });
    }
}
// trying to make a new faq div for every coming from the api

fetch('http://localhost:5000/get-all')
.then(response => response.json())
.then(data =>  {
    data.faqs.forEach(faq => {
        console.log(`Question: ${faq.question}`);
        console.log(`Answer: ${faq.answer}`);
        const container = document.querySelector('.message-content');
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const toggle = document.createElement('button');
        toggle.setAttribute('class', 'toggle');
        const questionp = document.createElement('p');
        questionp.setAttribute('class', 'question-p');
        questionp.textContent = faq.question;
        const questioni=document.createElement('i')
        questioni.setAttribute('class','icon fa-solid fa-plus')
        const answer=document.createElement('div')
        answer.setAttribute('class','answer')
        const answerp=document.createElement('p')
        answerp.setAttribute('class','answer-p')
        answerp.textContent=faq.answer
        container.appendChild(wrapper);
        wrapper.appendChild(toggle);
        toggle.appendChild(questionp);
        toggle.appendChild(questioni)
        answer.appendChild(answerp)
        wrapper.appendChild(answer)
    })
}).then(animate)


