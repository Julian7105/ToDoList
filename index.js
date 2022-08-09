const ajouter = document.querySelector(".ajouter");
const cadreList = document.querySelector(".cadreList");
const input = document.querySelector(".tapeText");

let index = 0;

let todoText = "";

input.addEventListener("change", function (e) {
    todoText = e.target.value;
});


function addTodo() {

    if (todoText !== ""){

        index += 1;
        
        const barre = document.createElement("div");
        barre.classList.add("list");
        cadreList.appendChild(barre);
        
        const tiret = document.createElement("span");
        tiret.textContent = "-";
        tiret.classList.add("tiret");
        barre.appendChild(tiret);
        
        const txt = document.createElement("span");
        txt.textContent = todoText;
        txt.classList.add("text");
        barre.appendChild(txt);
        
        
        const poubelle = document.createElement("i");
        poubelle.classList.add("fa-solid");
        poubelle.classList.add("fa-trash-can");
        barre.appendChild(poubelle);
        
        
        
        if (index > 0){
            poubelle.addEventListener("click", () =>{
                barre.remove();
            })
        }
        
    }
    
}

ajouter.addEventListener("click", () =>{
    addTodo();
    input.value = "";
});



