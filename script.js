function login() {
  const usernameInput = document.getElementById("username").value.toLowerCase();
  const passwordInput = document.getElementById("password").value.toLowerCase();
  const result = document.getElementById('result');
  if (usernameInput === 'zeph' && passwordInput === 'zeph') {
    result.textContent = 'Welcome Zeph!'
  } else if (usernameInput === 'zeph' && passwordInput !== 'zeph') {
    result.textContent = 'Wrong password'
  } else {
    result.textContent = 'Wrong password/username'
  }
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    login();
  }
}
