window.onload = function(){
    subscription();
}

function subscription(){
    
    let button = document.querySelector('form');
    let btn = button.getElementsByTagName('button')[0];
    let msg = document.getElementsByClassName('message')[0];
    

   function subsribe(){
        let emailAddress = document.getElementById("email").value;

        function validateEmail(email){
        let regex = /\S+@\S+\.\S+/;
        return regex.test(email);
                }
    
        if (validateEmail(emailAddress) == true) {
        msg.innerHTML = 'Thank you! Your email address ' + emailAddress + ' has been added to our mailing list!' ;
     }

        else{
            msg.innerHTML = 'Please enter a valid email address.';
            }
    }

    btn.addEventListener('click', (event) => {
        subsribe();
        event.preventDefault();
        
    })   
    
    
}