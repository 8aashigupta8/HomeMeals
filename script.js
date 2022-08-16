let login = document.getElementById('login');
let signup = document.getElementById('signup');
let aboutus = document.getElementById('aboutus');
/*a.addEventListener('click', showLoginForm);

function showLoginForm(){
    let loginForm = document.getElementById('form');
    loginForm.toggle("slow");
    return false;
}*/

/*$("#anchor").click(function() {  
    $("#form").toggle("slow");
    return false;
  });*/


  login.addEventListener('click', () => {
    const loginform = document.getElementById('loginform');
  
    if (loginform.style.visibility === 'hidden') {
      // 👇️ this SHOWS the form
      loginform.style.visibility = 'visible';
    } else {
      // 👇️ this HIDES the form
      loginform.style.visibility = 'hidden';
    }
  });

  signup.addEventListener('click', () => {
    const signupform = document.getElementById('signupform');
  
    if (signupform.style.visibility === 'hidden') {
      // 👇️ this SHOWS the form
      signupform.style.visibility = 'visible';
    } else {
      // 👇️ this HIDES the form
      signupform.style.visibility = 'hidden';
    }
  });

  aboutus.addEventListener('click', () => {
    const about = document.getElementById('about');
  
    if (about.style.visibility === 'hidden') {
      // 👇️ this SHOWS the form
      about.style.visibility = 'visible';
    } else {
      // 👇️ this HIDES the form
      about.style.visibility = 'hidden';
    }
  });