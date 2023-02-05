import "../css/navbar.css"
import React, { useState } from "react";
import {useTheme} from "../hooks/use-theme.js"
import { useEffect } from "react";
import ReloadData from "../store/reloadData.js"

function NavBar(){
    
    const {theme ,setTheme} = useTheme()
    const [iconsName,setIconsName] = useState("bi bi-lightbulb") 
    const [timeAndDay,setTimeAndDay] = useState(new Date().toLocaleString().split(", ")) 
    const [BurgerIcon,setBurgerIcon] = useState("bi bi-list") 
    const [BurgerDisplay,setBurgerDisplay] = useState("d-none") 
    const [Star1,setStar1] = useState("") 
    const [Star2,setStar2] = useState("") 
    const [Star3,setStar3] = useState("") 

    function setIcons(){
        if(iconsName == "bi bi-lightbulb"){
            setIconsName("bi bi-lightbulb-fill")
            setTheme("dark")
            
        }
        else{
            setIconsName("bi bi-lightbulb")
            setTheme("white")

        }
    }
    useEffect(()=>{
        
        setInterval(()=>{
            let a = new Date().toLocaleString().split(", ")
            setTimeAndDay(a)
        },1000)
        if(localStorage.getItem("app-theme") == "white"){
            setIconsName("bi bi-lightbulb")
        }
        else{
            setIconsName("bi bi-lightbulb-fill")
        }
        // star
        if(localStorage.getItem("Star")){
            if(localStorage.getItem("Star") == "Star1"){setStar1("text-danger")}
            else{setStar1("")}
            if(localStorage.getItem("Star") == "Star2"){setStar2("text-danger")}
            else{setStar2("")}
            if(localStorage.getItem("Star") == "Star3"){setStar3("text-danger")}
            else{setStar3("")}
        }
        else{
            localStorage.setItem("Star","Star1")
        }
        // star

    },[])

    function star(e){
        localStorage.setItem("Star",e.target.id)
        ReloadData.Star()
        // star
            if(localStorage.getItem("Star")){
                if(localStorage.getItem("Star") == "Star1"){setStar1("text-danger")}
                else{setStar1("")}
                if(localStorage.getItem("Star") == "Star2"){setStar2("text-danger")}
                else{setStar2("")}
                if(localStorage.getItem("Star") == "Star3"){setStar3("text-danger")}
                else{setStar3("")}
            }
            // star
    }

    function offOnBurgerMenu(){
        if(BurgerIcon == "bi bi-list"){
            setBurgerIcon("bi bi-x-lg")
            setBurgerDisplay("d-block")
        }
        else{
            setBurgerIcon("bi bi-list")
            setBurgerDisplay("d-none")
        }
    }

    function closeBurgerMenu(){
        setBurgerIcon("bi bi-list")
        setBurgerDisplay("d-none")
    }

    return( 
 
 <nav className="navBar row m-0 pt-2 pb-2 d-flex border-bottom border-3 border-dark ">
                <div className="col d-flex  justify-content-evenly align-items-center">
                    <span className="logo text">TODO LIST</span>
                    <i onClick={offOnBurgerMenu} className={BurgerIcon+" fs-1 d-block d-lg-none text"}></i>
                </div>

                {/* burger */}
                <div className={"navbar-smoll d-lg-none " + BurgerDisplay}>
                    <div className="color-bg  container">
                    <div className="text-center fs-3 border-bottom border-dark pb-3">
                                <span className="text ">{timeAndDay[0]}</span><br />
                                <span className="text ">{timeAndDay[1]}</span>
                            </div>
                        <div className="d-flex justify-content-center pb-3 border-bottom border-dark mt-3 align-items-center">
                                <span className="ms-3">
                                <i onClick={star} id="Star1" className={"cursor_poiter text  bi fs-5 p-1 bi-star-fill " + Star1}></i>
                                </span>
                                <span className="ms-3">
                                <i onClick={star} id="Star2" className={"cursor_poiter text bi fs-5 p-1 bi-heart-fill " + Star2}></i>
                                </span>
                                <span className="ms-3">
                                <i onClick={star} id="Star3" className={"cursor_poiter text bi p-1 fs-5 bi-arrow-through-heart-fill "+Star3 }></i>
                                </span>

                            </div>
                            <div className="text-center  d-flex justify-content-between ms-4 me-4">
                                 <i onClick={setIcons} className={iconsName+" cursor_poiter fs-1 text"}></i>
                                 <i onClick={closeBurgerMenu} className="cursor_poiter bi fs-3 p-1 bi-x-lg text"></i>

                            </div>
                    </div>
                </div>
                {/* burger */}

                <div className="col d-none d-lg-flex  justify-content-evenly align-items-center">
                    <div className="row m-0 d-flex justify-content-evenly align-items-center">
                        <div className="col">
                            <div className="text-center">
                            <span className="text">{timeAndDay[0]}</span><br />
                                <span className="text">{timeAndDay[1]}</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <span className="ms-3">
                                    <i onClick={star} id="Star1" className={"cursor_poiter text  bi fs-5 p-1 bi-star-fill " + Star1}></i>
                                </span>
                                <span className="ms-3">
                                    <i onClick={star} id="Star2" className={"cursor_poiter text bi fs-5 p-1 bi-heart-fill " + Star2}></i>
                                </span>
                                <span className="ms-3">
                                    <i onClick={star} id="Star3" className={"cursor_poiter text bi p-1 fs-5 bi-arrow-through-heart-fill "+Star3 }></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <i onClick={setIcons} className={iconsName+" cursor_poiter text fs-2"}></i>
                    </div>
                </div>
        </nav>
    )
}
export default NavBar