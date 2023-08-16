document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('emailId');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('passwordId');
    const password = passwordField.value;
    // console.log(password);
    if(email === 'Rafi@gmail.com' && password === 'secret'){
        // console.log('Valid User');
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid User");
    }
})