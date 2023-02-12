// import { token } from "./login.api";

const form = document.getElementById('form');



// form.addEventListener('submit',function(e){
//     e.preventDefault();


// const title= document.getElementById('title').value;
// const subject= document.getElementById('subject').value;
// const grade= document.getElementById('grade').value;

// const content= document.getElementById('content').value;




// fetch('http://localhost:3000/tutorial',{
//     method: 'POST',
//     body:JSON.stringify({
//     Title: title,
//     Subject: subject,
//     Grade: grade,
   
//    Content:content,
  
//     password:password,

//     }),
//     headers:{
//         "Content-Type": "application/json",
//         "Authentication": `Bearer ${token}`
//     }
// }).then(function (response) {
//     return response.json()}).then(function(data) {
//         console.log(data);
//         window.open('loginboot.html')
    
//     })

// })

fetch('http://localhost:3000/tutorial').then(response => response.json()).then(data =>{ console.log(data)
const container = document.getElementById("set")

Collection= [
    {title: "Biology", description: "This slides show brief information about",pdf:"files/CH_5.pdf", grade:"10", id:"1", comments:[{content:"aaaaaaaaaaaaaaaa",userName:"fas"},{content:"bbbbbbbbbbbbbbb",userName:"eny"},{content:"ccccccccccccccccc",userName:"kal"}]},
    {title: "Chemistry", description: "This slides show brief information about", pdf:"files/CH_4.pdf", grade:"11" , id:"2"},
    {title: "Civics", description: "This slides show brief information about", pdf:"files/CH_6.pdf", grade:"9" , id:"3"}]

    for(let list of data)
    {    id = list.id
        card = document.createElement("div");
        named = document.createElement("h1");
        named.innerHTML = list.Title
        
        sub = document.createElement("h4")
        sub.innerHTML = list.Subject;
        card.append(sub);
        sub.style.color="red" 
        sub.innerHTML += "  Grade  " + list.Grade
        
        sub.classList.add("w-25")
        card.append(named)
        card.classList.add("card")
        card.classList.add("col-8")
        card.classList.add("m-5")
        desc = document.createElement("p")
        desc.innerHTML = list.Content
        desc.style.margin = "12"
        card.append(desc)
        anchor = document.createElement("a")
        anchor.href = list.Link
        anchor.innerHTML = list.Link
        
        card.append(anchor)
        
        // btn.onclick = (function(id, card) {
        //     return function(){
        //         fetchComment(id,card)
        //     };
        // })(id,card)

        container.append(card)
        
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
span.onclick = function () {
    modal.style.display = "none";
  };

