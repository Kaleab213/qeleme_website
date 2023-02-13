import { Token } from "../Auth/login.api.js";





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



fetch('http://localhost:3000/tutorial').then(response => response.json()).then(data =>{ console.log(data)
   
var container = document.getElementById("set")

// Collection= [
//     {title: "Biology", description: "This slides show brief information about",pdf:"files/CH_5.pdf", grade:"10", id:"1", comments:[{content:"aaaaaaaaaaaaaaaa",userName:"fas"},{content:"bbbbbbbbbbbbbbb",userName:"eny"},{content:"ccccccccccccccccc",userName:"kal"}]},
//     {title: "Chemistry", description: "This slides show brief information about", pdf:"files/CH_4.pdf", grade:"11" , id:"2"},
//     {title: "Civics", description: "This slides show brief information about", pdf:"files/CH_6.pdf", grade:"9" , id:"3"}]

    for(let list of data)
    {   let id = list.id
        let card = document.createElement("div");
        let named = document.createElement("h1");
        named.innerHTML = list.Title
        
        let sub = document.createElement("h4")
        sub.innerHTML = list.Subject;
        card.append(sub);
        sub.style.color="red" 
        sub.innerHTML += "  Grade  " + list.Grade
        
        sub.classList.add("w-25")
        card.append(named)
        card.classList.add("card")
        card.classList.add("col-8")
        card.classList.add("m-5")
        let desc = document.createElement("p")
        desc.innerHTML = list.Content
        desc.style.margin = "12"
        card.append(desc)
        let anchor = document.createElement("a")
        anchor.href = list.Link
        anchor.innerHTML = list.Link
        
        card.append(anchor)
        if (container) {
            container.append(card)

        }
       
        
        // btn.onclick = (function(id, card) {
        //     return function(){
        //         fetchComment(id,card)
        //     };
        // })(id,card)

        
        
      }

function fetchComment(id,card){
    for (let tutor of Collection ){
        if (tutor.id === id){
            comment = document.createElement("div")
            comment.classList.add("m-5")
            for(comme of tutor.comments){
                part = document.createElement("div")
                part.classList.add("card")
                part.classList.add("m-3")
                names = document.createElement("h3")
                console.log(comme)
                names.innerHTML = comme.userName;
                cont = document.createElement("p")
                cont.innerHTML = comme.content
                part.append(names)
                part.append(cont)
                comment.append(part)
                
            }
            card.append(comment);
            break
        }
    }
} });
// span.onclick = function () {
//     modal.style.display = "none";
//   };






const container = document.getElementById("post_container");
const requestOfGet={
    method: 'GET',
    
    headers:{
        "Content-Type": "application/json",
        
        Authorization: 'Bearer ' + Token,
    }
    

}

fetch('http://localhost:3000/tutorial/private',requestOfGet).then(response => response.json()).then(data =>{
    
console.log(data)











for (let tutor of data) {
    var tutorId = tutor.id
    let card = document.createElement("div");
    let title = document.createElement("h3");
     title.innerHTML = tutor.Title
    card.append(title)

   let  body = document.createElement("p");
    body.innerHTML = tutor.Content
    card.append(body)

   let  div = document.createElement("div");
   let btn = document.createElement("button");
    btn.onclick = (function(tutorId){ return function() {
        // console.log(tutor.id, card)
        // btn.addEventListener('click', function(e){
            deleteTutor(tutorId, card)
        // }
        // );
        
     };})(tutorId, card);
    btn.innerHTML = "Delete"
    btn.classList.add("btn")
    btn.classList.add("btn-dark")
    btn.classList.add("w-25")

   let btn2 = document.createElement("button");
    btn2.onclick = (function(tutorId, card){ return function() {
        console.log(tutor.id, card)
        // EditTutor(tutor.id, card)
     };})(tutorId, card);
    btn2.innerHTML = "Edit"
    btn2.classList.add("btn")
    btn2.classList.add("btn-dark")
    btn2.classList.add("w-25")

    div.append(btn);
    div.append(btn2);
    div.classList.add("d-flex")
    div.classList.add("justify-content-between")
    card.append(div)

    card.id = tutor.id
    card.classList.add("card")
    card.classList.add("col-5")
    card.classList.add("mb-5")
    // let container=document.createElement
   container.append(card)

}

// function deleteTutor(id, element) {
//     console.log(element)
//     element.remove();
// }

// function EditTutor(id, element) {}
});

function deleteTutor(id, element) {
    const url=`http://localhost:3000/tutorial/${id}`
    fetch(url,{
        method:'DELETE',
        headers:{
            "Content-Type": "application/json",
            
            Authorization: 'Bearer ' + Token,
        }
        

    }).then(response => console.log(response.status))
    element.remove();
}