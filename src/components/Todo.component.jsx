import "../css/todo.css"
import React from "react"
import { useState } from "react"
import OneTodo from "./oneTodo.component"
import { useEffect } from "react"
import ReloadData from "../store/reloadData.js"
import { observer } from "mobx-react-lite"
import LeftMenu from "./leftMenu.component"
import SmallWindow from "./SmallWindowMenu.components"

const TodoPage = observer(() =>{
    const [displayMenu,setdisplayMenu ] = useState("d-none")
    const [iconsMenu,setIconsMenu ] = useState("bi bi-list")

    useEffect(()=>{
        ReloadData.GetAllTodo()
        ReloadData.Star()
    },[])
    
    function openMenu(){
        if(displayMenu == "d-none"){
            setdisplayMenu("d-block")
            setIconsMenu("bi bi-x-lg")
        }
        else{
            setdisplayMenu("d-none")
            setIconsMenu("bi bi-list")
        }
    }

    function allTodo(){
        ReloadData.GetAllTodo()
    }
    function trueTodo(){
        ReloadData.TrueTodo()
    }
    function newTodo(){
        ReloadData.NewTodo()
    }
    return(
        <div className="todo_container p-3 pt-0">
            {/* addMenu */}
            <div className="d-block d-lg-none smallBurger_cont">
                 <div className={displayMenu + " w-100 smallBurger"}>
                        <SmallWindow></SmallWindow>
                        <div className="d-flex justify-content-center">
                        <i className="cursor_poiter bi bi-x-lg text bi fs-1 p-1" onClick={openMenu}></i>
                        </div>
                 </div>
                 <div className="d-flex justify-content-center">
                     <div>
                     <div className="addmenu text-center" onClick={openMenu}><i className={iconsMenu +" fs-3"}></i></div>
                     </div>
                 </div>
            </div>
            {/* addMenu */}
            <div className="onetodo_container">
            <div className=" d-flex justify-content-center">
                <button type="button" onClick={allTodo} className="m-2 btn btn-info btn-sm">Всі</button>
                <button type="button" onClick={trueTodo} className="m-2 btn btn-info btn-sm">Виконані</button>
                <button type="button" onClick={newTodo} className="m-2 btn btn-info btn-sm">Нові</button>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-100 d-flex justify-content-center">
                    {/*  */}
                        {
                            ReloadData.data.map((i)=>{
                               return <OneTodo key={i.id} data={i}></OneTodo>
                            })
                        }
                    {/*  */}
                </div>
            </div>
       
            </div>
        </div>
    )
})
export default TodoPage