const form = document.getElementById('form');
const confirm= document.getElementById('confirm');

form.addEventListener('submit',function(e){
    e.preventDefault();


const fname= document.getElementById('fname').value;
const lname= document.getElementById('lname').value;
const email= document.getElementById('email').value;

const username= document.getElementById('username').value;
const password= document.getElementById('password').value;



fetch('http://localhost:3000/auth/signup',{
    method: 'POST',
    body:JSON.stringify({
    fname: fname,
    lname: lname,
    email: email,
   
    username:username,
  
    password:password,

    }),
    headers:{
        "Content-Type": "application/json",
    }
}).then(function (response) {
    return response.json()}).then(function(data) {
        console.log(data);
        window.open('loginboot.html')
    
    })

})
