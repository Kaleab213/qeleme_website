const container = document.getElementById("post_container");
tutorails = [
    {id:10, title:"MITOCHDORIA", grade:10, desciption:"this is a toutorial about cell", subject:"biology"},
    {id:11, title:"NUCLUS", grade:10, desciption:"this is a toutorial about cell", subject:"biology"},
    {id:12, title:"POWER OF CELL", grade:10, desciption:"this is a toutorial about cell", subject:"biology"}

]

for (let tutor of tutorails) {
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

    btn2 = document.createElement("button");
    btn2.onclick = (function(tutorId, card){ return function() {
        // console.log(tutor.id, card)
        EditTutor(tutor.id, card)
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

function EditTutor(id, element) {
    

    

    
    


}
