function dodaj (){
    let naredi = toDo.value.trim();
 //   console.log('pritisnil si gumb'); 
 //   console.log(naredi);

    if(naredi === ''){
        alert('prosim vpiši vrednost');
        return;
    }

    itemsArray.push(naredi);
    console.log(itemsArray);

    let listItem = document.createElement('li');
    listItem.textContent = naredi ;

    item.appendChild(listItem);

    
    testis.textContent = JSON.stringify(itemsArray);

    toDo.value = '';
}

function reset(){
    itemsArray = [];
    toDo.value ='';
    item.innerHTML = '';
    testis.textContent = JSON.stringify(itemsArray);
}

let toDo = document.getElementById('input1');
let btn = document.getElementById('vpisi');
let btn2 = document.getElementById('resetiraj');
let item = document.getElementById('list');
let testis = document.getElementById("array");
let itemsArray = [];

btn.addEventListener('click',dodaj);
toDo.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        dodaj();
    }
});
btn2.addEventListener('click',reset);