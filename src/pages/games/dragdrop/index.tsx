import React from 'react'
import classNames from 'classnames'
import styles from 'src/styles/Dragdrop.module.scss'


interface ITask {
  id: number,
  title: string,
  category: string
}

function DragDrop() {
  const categories = {
    Plan: 'PLAN',
    InDev: 'INDEV',
    QA: 'QA',
    Done: 'DONE',
  }
  const tasks: ITask[] = [
    { id: 1, title: 'Move me1', category: categories.Plan },
    { id: 2, title: 'Move me2', category: categories.InDev },
    { id: 3, title: 'Move me3', category: categories.QA },
    { id: 4, title: 'Move me4', category: categories.Done },
  ]
  const filterTasks = (category: string) => {

    return tasks.filter(task => task.category === category)
  }
  return (

    <div className={styles.tasks}>
      <div className={styles.task_wrapper}>
        <div className={styles.add_task}>
          <p className={styles.add_task_title}>Add your task</p>
          <input type="text" className={styles.add_task_input} />
          <button className={styles.add_task_button}>Add</button>

        </div>

        <div className={styles.row}>
          <div className={classNames(styles.colHeader, styles.Plan)}>Planned</div>
          <div className={classNames(styles.colHeader, styles.inDev)}>In dev</div>
          <div className={classNames(styles.colHeader, styles.QA)}>QA</div>
          <div className={classNames(styles.colHeader, styles.Done)}>Done</div>
        </div>

        <div className={styles.row}>
          <div className={classNames(styles.placeholder, styles.placeholderPlanned)}>

            {filterTasks(categories.Plan).map(({ id, title }) => (
              <div key={id} className={styles.item} draggable="true">{title}</div>
            ))}
          </div>

          <div className={classNames(styles.placeholder, styles.placeholderInDev)}></div>
          <div className={classNames(styles.placeholder, styles.placeholderQA)}></div>
          <div className={classNames(styles.placeholder, styles.placeholderDone)}></div>
        </div>



      </div>
      <div className={styles.garbage}>
        <img draggable="false" className={styles.placeholder_garbage} src="./img/garbage_icon.png" alt="" />
      </div>
    </div>
  )
}

export default DragDrop



// const item = document.querySelectorAll('.item')
// const placeholders = document.querySelectorAll('.placeholder')
// const placeholders_garbage = document.querySelectorAll('.garbage')
// const addTaskBtn = document.querySelector('.add_task_button')
// const placeholderPlanned = document.querySelector('.placeholderPlanned')

// addTaskBtn.addEventListener('click',addTask )

// item.forEach(element => {
//     element.addEventListener('dragstart', dragstart)
//     element.addEventListener('dragend', dragend)
// });

// for(const placeholder of placeholders){
//     placeholder.addEventListener('dragover', dragover)
//     placeholder.addEventListener('dragenter', dragenter)
//     placeholder.addEventListener('dragleave', dragleave)
//     placeholder.addEventListener('drop', dragdrop)
// }

// for(const placeholder_garbage of placeholders_garbage){
//     placeholder_garbage.addEventListener('dragover', dragover)
//     placeholder_garbage.addEventListener('dragenter', dragenter_garbage)
//     placeholder_garbage.addEventListener('dragleave', dragleave_garbage)
//     placeholder_garbage.addEventListener('drop', dragdrop_garbage)
// }

// function addTask(){
//     let taskInput = document.querySelector('.add_task_input')
// if(taskInput.value !==""){
//     placeholderPlanned.insertAdjacentHTML('beforeend',`<div class="item" draggable="true">${taskInput.value}</div>`)
// }
// }


// function dragstart(event){
//     event.target.classList.add('hold')
//     setTimeout(()=>event.target.classList.add('hide'),0)
// }

// function dragend(event){
//     event.target.className = 'item'
// }

// function dragover(event){
// event.preventDefault()

// }
// function dragenter(event){
//     event.target.classList.add('hovered')
// }
// function dragenter_garbage(event){
//     event.target.classList.add('hovered_garbage')
// }

// function dragleave(event){
//     event.target.classList.remove('hovered')
// }
// function dragleave_garbage(event){
//     event.target.classList.remove('hovered_garbage')
// }

// function dragdrop(event){
//     event.target.classList.remove('hovered')
//     event.target.append(item)
// }
// function dragdrop_garbage(event){
//     event.target.classList.remove('hovered_garbage')
//     event.target.append(item)
// }