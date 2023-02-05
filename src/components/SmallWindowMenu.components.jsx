import { useState } from "react"
import { createRef } from "react"
import "../css/SmallWindowMenu.css"
import ReloadData from "../store/reloadData"

function SmallWindow(){
    const inputText = createRef()
    const inputColor = createRef()
    const inputBgColor = createRef("")
    const [displayError,setdisplayError] = useState("d-none")
    const [displayButton,setdisplayButton] = useState("disabled")
    
    const [color,setColor] = useState("black")
    const [fs1,setfs] = useState(16)
    const [bg,setbg] = useState("red")
    const [text,settext] = useState("......")
    function changeText(e){settext(e.target.value)}
    function changeColor(e){setColor(e.target.value)}
    function changeBgColor(e){setbg(e.target.value)}
    function changefs(e){
        if(e.target.value <= 30){
            setfs(e.target.value)
        }
    }


    function textError(){
        text.length < 4 ? setdisplayError("d-block") : setdisplayError("d-none")
        text.length < 4 ? setdisplayButton("disabled") : setdisplayButton("")
    }

    function addnewTodo(){
        let obj =  {
                id:ReloadData.randomId(6),
                value:text,
                fontSize:fs1,
                color:color,
                bgColor:bg,
                starActive:false
             }
        ReloadData.AddOneTodo(obj)     
    }
    return(
        <div className="w-100 smallmenu_container"> 
            <div className="p-4 pb-0">
                <span className="info-text">Текст нової замітки:</span>
                <input type="text" onChange={textError} onInput={changeText} className="form-control p-1"></input>
                <span className={"textError " + displayError}>Мінімум 4 символа...</span>
                <br />
                <span className="info-text">Розмір шрифту:</span>
                <input type="number" onInput={changefs}  value={fs1} placeholder="5-30" min="5" max="30" className="form-control"/>
                <br />
                <span className="info-text">Колір тексту:</span>
                <input type="color" onInput={changeColor}  className="form-control p-2" />
                <br />
                <span className="info-text">Колір замітки:</span>
                <input type="color" onInput={changeBgColor} className="form-control p-2" />
                <br />
                
                <div>
                   <span className="info-text">Попередній перегляд:</span>
                    <div className="d-flex justify-content-center">
                    {/* ? */}
                   <div className="miniTodo_container w-100 m-3" style={{backgroundColor:bg}}>
                                    <div className="d-flex row m-0 align-items-center  w-100 p-2  justify-content-around">
                                        <div className="col d-flex justify-content-center">
                                            <i className="cursor_poiter text bi p-1 bi-star-fill"></i>
                                        </div>
                                        <div className="col text-center" style={{color:color , fontSize:fs1+"px"}}>{text}</div>
                                        <div className="col d-flex justify-content-center">
                                            <i className="cursor_poiter bi bi-x-lg text bi fs-5 p-1"></i>
                                        </div>
                                    </div>
                                </div>
                    {/* ? */}
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <a href="#" className={"btn btn-primary "+displayButton} onClick={addnewTodo}>Додати</a>
                </div>
            </div>
        </div>
    )
}
export default SmallWindow