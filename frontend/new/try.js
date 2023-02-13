const container = document.getElementById("set")

Collection= [
    {title: "Biology", description: "This slides show brief information about",pdf:"files/CH_5.pdf", grade:"10", id:"1", comments:[{content:"aaaaaaaaaaaaaaaa",userName:"fas"},{content:"bbbbbbbbbbbbbbb",userName:"eny"},{content:"ccccccccccccccccc",userName:"kal"}]},
    {title: "Chemistry", description: "This slides show brief information about", pdf:"files/CH_5.pdf", grade:"11" , id:"2"},
    {title: "Civics", description: "This slides show brief information about", grade:"9" , id:"3"}]

    for(let list of Collection)
    {    id = list.id
        card = document.createElement("div");
        named = document.createElement("h1");
        named.innerHTML = list.title
        named.style.color="red"
        card.append(named)
        card.classList.add("card")
        card.classList.add("col-8")
        card.classList.add("m-5")
        desc = document.createElement("p")
        desc.innerHTML = list.description
        desc.style.margin = "12"
        card.append(desc)
        anchor = document.createElement("a")
        anchor.href = list.pdf
        anchor.innerHTML = list.pdf
        anchor.style.margin = "12"
        card.append(anchor)
        btn = document.createElement("button")
        btn.innerHTML = "Comment";
        card.append(btn)
        btn.classList.add("btn")
        btn.classList.add("btn-primary")
        btn.classList.add("w-25")
        btn.onclick = (function(id, card) {
            return function(){
                fetchComment(id,card)
            };
        })(id,card)

        container.append(card)
        
      }

function fetchComment(id,card){
    for (let tutor of Collection ){
        if (tutor.id === id){
            comment = document.createElement("div")
            comment.classList.add("m-5")
            commento = document.createElement("input")
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
                commento = document.createElement("input")    
                commento.setAttribute('type', 'text')
                commento.append(comment)
            /* commento.setAttribute('placeholder', 'Enter your comment')
            card.append(commento)
            butto = document.createElement("button")
            butto.innerHTML = "Post"
            card.append(butto) */
            /* butto.classList.add("btn")
            butto.classList.add("btn-primary")
            butto.classList.add("w-25")
            butt.onclick = (function(){ return function() {
                update()
             };})(); */
            
                
            }
        }
            

            card.append(comment);
            break
        }
    }

