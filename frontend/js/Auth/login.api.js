// import _ from 'lodash';
const login =document.getElementById('login');
export const Token =localStorage.getItem('access_token');







if (login) {
    login.addEventListener('submit', function(e){e.preventDefault();
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    fetch('http://localhost:3000/auth/signin',{
        method: 'POST',
        body:JSON.stringify({
        username: username,
        password: password
       
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(response =>response.json()).then(data=>{
        
        localStorage.setItem('access_token',data.access_token);
        console.log(data.access_token);
        console.log(localStorage);

        
        
if(data.error){ alert("username and password incorrect")}
else{
    window.open('post.html');
}

    }).catch(error => console.error("Error: " + error.message));

    })};


 

