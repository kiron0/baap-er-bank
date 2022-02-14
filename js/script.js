document.getElementById('submit').addEventListener('click', function () {
    const userInput = document.getElementById('user-email');
    const userEmail = userInput.value;

    const passInput = document.getElementById('user-pass');
    const userPass = passInput.value;

    if (userEmail == 'sontan@baap.com' && userPass == 'sontanTheChild') {
        window.location.href = 'banking.html'
    }
    else {
        alert('Hey buddy! give me valid credentials');
        window.location.reload();
    }
})