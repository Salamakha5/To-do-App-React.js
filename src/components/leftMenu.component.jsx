import { useEffect } from "react"
import { useState } from "react"
import "../css/leftMenu.css"
import ReloadData from "../store/reloadData"

// {
//     id:"#45",
//     value:"AVADA KIDAVRA!!!!!!!",
//     fontSize:30,
//     color:"grey",
//     bgColor:"green"
//     starActive:false
// }


function LeftMenu(){
    const [widthMenu,setwidthMenu] = useState("w-4")
    const [display,setdisplay] = useState("d-none")
    const [txtButton,setTxtButton] = useState("OPEN MENU")
    const [displayError,setDisplayError] = useState("d-none")
    const [displayButton,setDisplayButton] = useState("disabled")
    const [textInput,setTextInput] = useState("Нова замітка")
    const [fontSize,setFontSize] = useState(15)
    const [color,setcolor] = useState("white")
    const [bgColor,setBgColor] = useState("brown")

    useEffect(()=>{

    },[])


    function changetextInput(e){
        if(e.target.value.length > 3){
            setDisplayButton("")
            setDisplayError("d-none")
        }
        else{
            setDisplayButton("disabled")
            setDisplayError("d-block")
        }
        setTextInput(e.target.value)
    }
    function changefontSize(e){
        if(e.target.value <= 30){
            setFontSize(e.target.value)
        }
    }
    function changecolor(e){
        setcolor(e.target.value)
    }
    function changeBgcolor(e){
        setBgColor(e.target.value)
    }




    function openMenu(){
        if(widthMenu == "w-4"){
            setwidthMenu("w-25")
            setdisplay("d-block")
            setTxtButton("CLOSE MENU")
        }
        else{
            setwidthMenu("w-4")
            setTxtButton("OPEN MENU")
            setdisplay("d-none")
        }
    }

    function addNewTodo(){
        let TextColor,BgColor
        color == ""? TextColor = "black" : TextColor = color
        bgColor == ""? BgColor = "brown" : BgColor = bgColor
        let obj = {
            id:ReloadData.randomId(6),
            value:textInput,
            fontSize:fontSize,
            color:TextColor,
            bgColor:BgColor,
            starActive:false
            }
        ReloadData.AddOneTodo(obj)
        }
    return(
        <div className={ "d-none d-lg-block border-end border-dark border-3 leftmenu_container " + widthMenu}>
            <div className="openmenu text" onClick={openMenu}>
                <span>{txtButton}</span>
            </div>
            <div className={display+" "+"transition0-7 burgermenu_container"}>
                <h4 className="text-center p-3">Додати нову замітку:</h4>
                <div className="p-1">
                    <div className="mb-4">
                        <span className="infoText">Текст замітки:</span>
                        <input type="text" onInput={changetextInput}   className="form-control p-1"></input>
                        <span className={"textError "+displayError}>Мінімум 4 символа...</span>
                    </div>
                    <div className="mb-4">
                        <span className="infoText">Розмір шрифту замітки:</span>
                        <div className="d-flex align-items-center">
                            <input type="number" onInput={changefontSize} value={fontSize}   className="form-control p-1 me-3" min="5" max="30"></input>
                            <input type="range" onInput={changefontSize} value={fontSize} className="form-range" min="5" max="30"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="infoText">Колір тексту замітки:</span>
                        <div className="d-flex align-items-center">
                            <input type="text"  onInput={changecolor} value={color} placeholder="hex" className="form-control p-1" />
                            <input type="color" onInput={changecolor} className="form-control p-1 ms-1" min="5" max="30"></input>
                        </div>
                    </div>
                    <div className="mb-5">
                        <span className="infoText">Колір замітки:</span>
                        <div className="d-flex align-items-center">
                            <input type="text" onInput={changeBgcolor} value={bgColor} placeholder="hex" className="form-control p-1" />
                            <input type="color" onInput={changeBgcolor} className="form-control p-1 ms-1" min="5" max="30"></input>
                        </div>
                    </div>
                    <div className="">
                        <span className=" infoText">Попередній перегляд:</span>
                        <div className="d-flex justify-content-center align-items-center">
                            {/* ? */}
                                <div className="miniTodo_container w-100 m-3" style={{backgroundColor:bgColor}}>
                                    <div className="d-flex row m-0 align-items-center  w-100 p-2  justify-content-around">
                                        <div className="col d-flex justify-content-center">
                                            <i className="cursor_poiter text bi p-1 bi-star-fill"></i>
                                        </div>
                                        <div className="col text-center" style={{color:color , fontSize:fontSize+"px"}}>{textInput}</div>
                                        <div className="col d-flex justify-content-center">
                                            <i className="cursor_poiter bi bi-x-lg text bi fs-5 p-1"></i>
                                        </div>
                                    </div>
                                </div>
                            {/* ? */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end me-4">
                    <a href="#" className={"btn btn-primary p-1 btn-lg " + displayButton}  role="button"  onClick={addNewTodo}>Додати</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftMenu