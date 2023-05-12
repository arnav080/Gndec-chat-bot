let toggle_btn = document.getElementById('access-button');
      let faqpage = document.getElementById('popup');
      let hidden = true;

      toggle_btn.addEventListener('click', ()=>{

        if(hidden){
           faqpage.style.display = "block";
           hidden = false;
        }
        else{
            faqpage.style.display = "none";
            hidden = true;
        }


      })

/* Js for FAQs toggle */

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('answer');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}