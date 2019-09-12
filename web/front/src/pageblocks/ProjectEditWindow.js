import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/edit-window.css"
export  default function ProjectEditForm(props) {
    const current = Object.assign(props.projectToEdit);
    const update = ()=> {
        props.handleFormChange(current);
    };
    return <div className="edit-window">
        <h1>Редактирование проекта</h1>
        <button className='closeButton' onClick={props.closeHandler}>Х</button>
        <form>
            <div className="prop-cover">
                <div className="prop-name covered"><p>Id</p></div>
                <div className="prop-desc covered">{current.id}</div>
            </div>
            <div className="prop-cover">
                <div className="prop-name covered"><p>Название</p></div>
                <div className="prop-desc covered">
                    <input type="text" name="name" className="prop-desc" value={current.name} onChange={(e)=>{current.name=e.target.value; update()}}/></div>
            </div>
            <div className="prop-cover">
                <div className="prop-name covered"><p>Описание</p></div>
                <div className="prop-desc covered"><textarea rows="3" name="description" value={current.description} onChange={(e)=>{current.description=e.target.value; update()}} />
                </div>
            </div>

            <div className="prop-cover">
                <div className="prop-name covered"><p>Дата окончания</p></div>
                <div className="prop-desc covered"><DatePicker selected = {current.finishDate} onChange = {date=>{current.finishDate=date; update()}} />
                </div>
            </div>

            <div class="but-cover margin_10">
                <button type="submit" onClick={props.saveProject}>Отправить</button>
            </div>
        </form>
    </div>

}