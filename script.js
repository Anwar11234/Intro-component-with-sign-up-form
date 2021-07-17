const form = document.querySelector('form');
const inputs = Array.from(document.querySelectorAll('input'));
const email = document.querySelector('input[type = "email"]');
const paras = document.querySelectorAll('.input-container  .error');
const errorImgs = document.querySelectorAll('.input-container img');


form.addEventListener('submit' , e => { 
    console.log(email.value)
    e.preventDefault();
    for(let i = 0;i < inputs.length; i++){ 
        if(!(inputs[i].value)){ 
            errorImgs[i].style.display = 'block';
            paras[i].style.display = 'block';
            paras[i].setAttribute('aria-hidden' , 'false');
            inputs[i].style.borderColor = 'var(--red)';
        }
    }
    if(!(validateEmail(email.value)) && email.value){ 
        const p = document.querySelector('input[type = "email"] ~ .error');
        const img = document.querySelector('.input-container input[type = "email"] + img')
        p.style.display = 'block';
        img.style.display = 'block';
        p.textContent = 'Looks like this is not an email';
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
