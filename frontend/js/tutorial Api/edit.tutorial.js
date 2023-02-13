import { Token } from "./login.api.js"




const form = document.getElementById('form');



if (form) 
{form.addEventListener('submit',function(e){
    e.preventDefault();


const title= document.getElementById('title').value;
const subject= document.getElementById('subject').value;
const grade= document.getElementById('grade').value;

const content= document.getElementById('content').value;
const link = document.getElementById('link').value;




fetch('http://localhost:3000/tutorial',{
    method: 'POST',
    body:JSON.stringify({
    Title: title,
    Subject: subject,
    Grade: grade,
   
   Content:content,
  
    Link:link,

    }),
    headers:{
        "Content-Type": "application/json",
        
        Authorization: 'Bearer ' + Token,
    }
}).then(function (response) {
    return response.json()}).then(function(data) {
        console.log(data);
        window.open('courseMaterialsboot.html')
        
       
    
    })

}) };