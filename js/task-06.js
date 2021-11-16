let inputName = document.querySelector('#validation-input');
inputName.addEventListener('input', changeName);


function changeName() {
            if (inputName.value.length <= 5) {
            inputName.classList.add('invalid');
            } else if(inputName.value.length === 6){
                inputName.classList.remove('invalid');
                inputName.classList.add('valid');
            } else{
                inputName.classList.add('invalid'); 
            }
            return;
        }


    
    