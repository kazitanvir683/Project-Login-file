
const CORRECT_EMAIL = "tanvir@gmail.com"; 
const CORRECT_PASSWORD = "tanvir12345";
const REDIRECT_PAGE = "successfullypage.html"; 
    

function handleLogin(event) {
  
    event.preventDefault(); 

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
    if (emailInput === CORRECT_EMAIL && passwordInput === CORRECT_PASSWORD) {
    
        
        showNotification("Login Successful! Redirecting...", 'success');
        
        
        setTimeout(() => {
            window.location.href = REDIRECT_PAGE; 
        }, 1000); 

    } else {
      
        showNotification("Invalid Email or Password. Please try again.", 'error');
    }
}


function showNotification(message, type) {
    const notificationElement = document.getElementById('loginNotification');
    notificationElement.textContent = message;
    

    if (type === 'success') {
        notificationElement.style.backgroundColor = '#4CAF50'; 
    } else if (type === 'error') {
        notificationElement.style.backgroundColor = '#f44336'; 
    } else {
        notificationElement.style.backgroundColor = '#2196F3'; 
    }
    

    notificationElement.classList.add('show');

    
    setTimeout(() => {
        notificationElement.classList.remove('show');
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});