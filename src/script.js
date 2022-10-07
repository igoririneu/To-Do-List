let task = document.getElementById('main__input');
let checklist = document.querySelector('.container__checklist');

// Função que adiciona o risco na task ao clicar no checkBox.
function checkBox(text){
    
    let text_strike = text.parentNode.children[1]
    
    if(text.checked == true){
        text_strike.innerHTML = `<s>${text_strike.innerText}</s>`;
        console.log(text.parentNode);
    } else {
        text_strike.innerHTML = text_strike.innerText;
        console.log(text.parentNode);
    };  
}

// Função que deleta cada uma das task.
function deleteTask(del){
    
    let task_delete = del.parentNode;

    task_delete.remove();
    console.log(task_delete);
}

// Função que deleta todas as task.
function deleteAll(){

    checklist.innerHTML = "<h1>Tasks</h1><hr>";
    console.log(checklist);
};

// Função que adicional as task no container__checklist.
function submitTask(){

    let task_value = task.value;

    let new_task = document.createElement('div');

    if(task_value == ""){

        alert("Please add a task!");

    } else{
        
        new_task.innerHTML = `<div class="checklist__task"><input type="checkbox" onclick="checkBox(this)"><label>${task_value}</label></div><input class="task__delete" type="reset" name="delete" value="Delete" onclick="deleteTask(this)"><br>`;

        // Adiciona o valor do input no container__checklist.
        checklist.appendChild(new_task);
        console.log(new_task);

        // limpa o input ao enviar a tarefa.
        task.value = "";
    }
};


