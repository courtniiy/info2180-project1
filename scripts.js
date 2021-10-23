window.onload = function(){
    subscription();
}

function subscription(){
    
    let button = document.querySelector('form');
    let btn = button.getElementsByTagName('button');
    let msg = document.getElementsByClassName('message');
    let emailAddress = document.getElementsByTagName('input').value


    btn.onclick =  function() {subsribe()};

    function subsribe(){
        alert('is this thing on??')
            function validateEmail(email){
                let regex = /\S+@\S+\.\S+/;
                return regex.test(email);
                    }
    
    if (validateEmail(emailAddress== true)) {
            msg.innerText = 'Thank you! Your email address' + emailAddress + 'has been added to our mailing list' ;
        
    }

    else{

        msg.innerText = 'Please enter a valid email address'
    }

    }
}