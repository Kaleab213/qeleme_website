//import _ from 'lodash';
const login =document.getElementById('login');

// export { _token as token };
    





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
        token = data.access_token;
        
        
if(data.error){ alert("username and password incorrect")}
else{
    window.open('indexboot.html');
}

    }).catch(error => console.error("Error: " + data.message));

    











});
// export default{data}


