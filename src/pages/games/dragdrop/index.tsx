import React from 'react'

function DragDrop() {
  return (
    <div>
<div className="header">
    <div className="header_wrapper">
      <div className="header__nav_menu_container">
        <ul className="header__list">
          <li className="header__item">
            <a href="" className="header__link">Цены</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">О нас</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">Отзывы</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">Вопросы</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">Контакты</a>
          </li>
        </ul>
      </div>
      <div className="header__nav_singin_container">
        <ul className="header__menu_contacts">
          <li className="sing_in">
            <img className="header__menu_img" src="./img/Sing_in.png" alt="#" />
            <a href="" className="header__link">Регистрация</a>
          </li>
          <li className="sing_in">
            <img className="header__menu_img" src="./img/Sing_in.png" alt="#" />
            <a href="" className="header__link">Войти</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="tasks">
    <div className="task_wrapper">
      <div className="add_task">
        <p className="add_task_title">Add your task</p>
        <input type="text" className="add_task_input" />
        <button className="add_task_button">Add</button>

      </div>

      <div className="row">
        <div className="col-header start">Planned</div>
        <div className="col-header inDev">In dev</div>
        <div className="col-header inQa">QA</div>
        <div className="col-header done">Done</div>
      </div>

      <div className="row">
        <div className="placeholder placeholderPlanned">
          <div className="item" draggable="true">Move me</div>
          <div className="item" draggable="true">Move me</div>
        </div>
        <div className="placeholder placeholderInDev"></div>
        <div className="placeholder placeholderQA"></div>
        <div className="placeholder placeholderDone"></div>
      </div>



    </div>
    <div className="garbage">
        <img draggable="false" className="placeholder_garbage" src="./img/garbage_icon.png" alt="" />
    </div>
  </div>    </div>
  )
}

export default DragDrop