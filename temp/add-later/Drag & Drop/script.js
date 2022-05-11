const item = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
const placeholders_garbage = document.querySelectorAll('.garbage')
const addTaskBtn = document.querySelector('.add_task_button')
const placeholderPlanned = document.querySelector('.placeholderPlanned')

addTaskBtn.addEventListener('click',addTask )

item.forEach(element => {
    element.addEventListener('dragstart', dragstart)
    element.addEventListener('dragend', dragend)
});

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

for(const placeholder_garbage of placeholders_garbage){
    placeholder_garbage.addEventListener('dragover', dragover)
    placeholder_garbage.addEventListener('dragenter', dragenter_garbage)
    placeholder_garbage.addEventListener('dragleave', dragleave_garbage)
    placeholder_garbage.addEventListener('drop', dragdrop_garbage)
}

function addTask(){
    let taskInput = document.querySelector('.add_task_input')
if(taskInput.value !==""){
    placeholderPlanned.insertAdjacentHTML('beforeend',`<div class="item" draggable="true">${taskInput.value}</div>`)
}
}


function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide'),0)
}

function dragend(event){
    event.target.className = 'item'
}

function dragover(event){
event.preventDefault()

}
function dragenter(event){
    event.target.classList.add('hovered')
}
function dragenter_garbage(event){
    event.target.classList.add('hovered_garbage')
}

function dragleave(event){
    event.target.classList.remove('hovered')
}
function dragleave_garbage(event){
    event.target.classList.remove('hovered_garbage')
}

function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}
function dragdrop_garbage(event){
    event.target.classList.remove('hovered_garbage')
    event.target.append(item)
}