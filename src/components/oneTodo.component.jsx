import { observer } from "mobx-react-lite"
import React, { createRef, useState } from "react";
import "../css/oneTodo.css"
import ReloadData from "../store/reloadData"
// bi-star-fill
// bi-heart-fill
// bi-arrow-through-heart-fill
const OneTodo = observer((props) =>{
    const [dspl1,setdispl1] = useState("d-block")
    const [dspl2,setdispl2] = useState("d-none")
    let textEdit = createRef()
    let line = ""
    if(props.data.starActive){
       line = "line"
    }
    let star = ReloadData.star
    if(props.data.starActive){
        switch (ReloadData.star) {
            case "bi-star":
                star = "bi-star-fill"
                break;
            case "bi-heart":
                star = "bi-heart-fill"
                break;
            case "bi-arrow-through-heart":
                star = "bi-arrow-through-heart-fill"
                break;
        
            default:
                break;
        }
    }
    
    function DeleteTodo(){
        ReloadData.DeleteTodoById(props.data.id)
    }
    function editText(){
        if(dspl1 == "d-block" && dspl2 == "d-none"){
            setdispl1("d-none")
            setdispl2("d-block")
        }
        else{
            setdispl1("d-block")
            setdispl2("d-none")
        }
    }
    function changetxt(){
        ReloadData.EditText(props.data.id,textEdit.current.value)
        editText()
    }
    return(
        <div className={"oneTodo_container col-12 col-lg-5 p-0 "} style={{backgroundColor:props.data.bgColor}}>
             <div className="d-flex justify-content-between align-items-center p-3 pt-0 pb-0">
                <div className="d-none d-sm-flex justify-content-center icons_cont conts">
                    <i onClick={()=> ReloadData.ChangeStar(props.data.id)} className={"cursor_poiter fs-4 text bi p-1 "+star}></i>
                </div>
                
                <div className="d-flex justify-content-center w-100 p-1">
                    <div onClick={editText} className={"cursor_poiter text_cont w-100 conts "+line+" "+dspl1} style={{color:props.data.color,fontSize:props.data.fontSize+"px"}}>{props.data.value}</div>
                    <div className={"d-flex justify-content-around "+dspl2}>
                        <input type="text" ref={textEdit} className="form-control me-2" />
                        <a className="btn btn-primary"  onClick={changetxt} id="linenone" role="button">Ok</a>
                    </div>
                </div>
                <div className="d-none d-sm-flex justify-content-center delete_cont conts">
                <i className="cursor_poiter bi bi-x-lg text bi fs-4 p-1" onClick={DeleteTodo}></i>
                </div>
            </div>
                <div className="d-flex d-sm-none justify-content-around">
                    <i onClick={()=> ReloadData.ChangeStar(props.data.id)} className={"cursor_poiter text bi p-1 "+star}></i>
                    <i className="cursor_poiter bi bi-x-lg text bi fs-5 p-1" onClick={DeleteTodo}></i>
                </div>
        </div>
    )
})
export default OneTodo