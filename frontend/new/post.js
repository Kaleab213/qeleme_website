const container = document.getElementById("post_container");
tutorials = [
    {id:10, title:"MITOCHDORIA", grade:10, desciption:"this is a toutorial about cell", subject:"biology"},
    {id:11, title:"NUCLUS", grade:10, desciption:"this is a toutorial about cell", subject:"biology"},
    {id:12, title:"POWER OF CELL", grade:10, desciption:"this is a toutorial about cell", subject:"biology"}

]

for (let tutor of tutorials) {
    var tutorId = tutor.id
    card = document.createElement("div");
    title = document.createElement("h3");
    title.innerHTML = tutor.title
    card.append(title)

    body = document.createElement("p");
    body.innerHTML = tutor.desciption
    card.append(body)

    div = document.createElement("div");
    btn = document.createElement("button");
    btn.onclick = (function(tutorId, card){ return function() {
        // console.log(tutor.id, card)
        deleteTutor(tutor.id, card)
     };})(tutorId, card);
    btn.innerHTML = "Delete"
    btn.classList.add("btn")
    btn.classList.add("btn-dark")
    btn.classList.add("w-25")

    let btn2 = document.createElement("button");
    btn2.onclick = (function(tutorId, card){ return function() {
        // console.log(tutor.id, card)
        EditTutor(tutorId, card)
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
    container.append(card)

}

function deleteTutor(id, element) {
    console.log(element)
    element.remove();
}
const named = document.createElement("input");
named.setAttribute('type', 'text')

div = document.createElement("div");        
named.setAttribute('placeholder', tutorials.title)
named.setAttribute('label', 'Enter the title')

named.style.fontsize = "34px"
div.append(named)

names = document.createElement("input");
names.setAttribute('type', 'text')
names.setAttribute('placeholder', 'Enter description')
names.setAttribute('label', 'Enter the title')
names.style.fontsize ="34px"
div.append(names)

function EditTutor(id, element) {
    console.log(element)
    
        card = document.createElement("div");
        
        card.classList.add("card")
        card.style.display = "block"
        card.append(div)
        container.append(card)
    
        butt = document.createElement("button");
        butt.onclick = (function(id, element, card){ return function() {
            // console.log(tutor.id, card)
            update(id, element, card)
         };})(id, element, card);
        butt.innerHTML = "Finish"
        butt.classList.add("btn")
        butt.classList.add("btn-dark")
        butt.classList.add("w-25")
        card.append(butt)
        container.append(card)
        /* card.style.display = "block"
        comments = document.createElement("p")
        comments.innerHTML = list.comment
        comments.style.margin = "12"
        card.append(comments)
        core.append(card) */
}
function update(id, element, card) {
    card.remove();
    
    for (tutor of tutorials) {
        if (id === tutor.id) {
            tutor.title = named.value;
            tutor.desciption = names.value;
            element.innerHTML = "";
            title = document.createElement("h3");
            title.innerHTML = named.value
            content = document.createElement("p");
            content.innerHTML = names.value
            element.append(title)
            element.append(content)

            div = document.createElement("div"); 
            btn = document.createElement("button");
    btn.onclick = (function(tutorId, card){ return function() {
        // console.log(tutor.id, card)
        deleteTutor(tutor.id, card)
     };})(tutorId, card);
    btn.innerHTML = "Delete"
    btn.classList.add("btn")
    btn.classList.add("btn-dark")
    btn.classList.add("w-25")

    let btn2 = document.createElement("button");
    btn2.onclick = (function(tutorId, card){ return function() {
        // console.log(tutor.id, card)
        EditTutor(tutorId, card)
     };})(tutorId, card);
    btn2.innerHTML = "Edit"
    btn2.classList.add("btn")
    btn2.classList.add("btn-dark")
    btn2.classList.add("w-25")

    div.append(btn);
    div.append(btn2);
    div.classList.add("d-flex")
    div.classList.add("justify-content-between")
    element.append(div)


            

        }
    }
    // tutorails.title = named.value,
    // tutorails.desciption = names.value   
}

