import { makeAutoObservable, toJS } from "mobx"
import { parsePath } from "react-router-dom";

class ReloadData {
    data = []
    star = ''
    constructor(){
        makeAutoObservable(this)
    }

    Star(){
        switch (localStorage.getItem("Star")) {
            case "Star1":
                this.star = "bi-star"   
                break;
            case "Star2":
                this.star = "bi-heart"   
                break;
            case "Star3":
                this.star = "bi-arrow-through-heart"   
                break;
            default:
                break;
        }
    }

    randomId(length) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');
    
        if (! length) {
            length = Math.floor(Math.random() * chars.length);
        }
    
        var str = '';
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return"#"+str;
    }
    setData(arr){
        localStorage.setItem("Todo",JSON.stringify(arr))
    }

    GetAllTodo(){
        let getLocalTodo = localStorage.getItem("Todo")
        if(getLocalTodo){
            this.data = JSON.parse(getLocalTodo)
        }
        else{
            this.data = [{
                id:"#Error",
                value:"Додайте нову змітку",
                fontSize:30,
                color:"blue",
                bgColor:"yellow"
            }] 
        }
    }
    AddOneTodo(obj){
        this.GetAllTodo()
        this.data.push(obj)
        this.setData(toJS(this.data))
    }
    
    DeleteTodoById(id){
        this.GetAllTodo()
        let filter = toJS(this.data).filter(p => p.id != id)
        this.setData(filter)
        this.GetAllTodo()
    }

    ChangeStar(id){
        this.GetAllTodo()
        for (let i = 0; i < toJS(this.data).length; i++) {
            if(this.data[i].id == id){
                if(this.data[i].starActive){
                    this.data[i].starActive = false
                }
                else{
                    this.data[i].starActive = true
                }
                this.setData(toJS(this.data)) 
            }
        }
    }

    EditText(id,value){
        this.GetAllTodo()
        for (let i = 0; i < toJS(this.data).length; i++) {
            if(this.data[i].id == id){
                this.data[i].value = value
                this.setData(toJS(this.data)) 
            }
        }
    }

    //
        TrueTodo(){
            this.GetAllTodo()
            let arr = []
            for (let i = 0; i  < this.data.length; i++) {
                if(this.data[i].starActive == true){
                    arr.push(this.data[i])
                }
            }
            this.data = arr
        }
        NewTodo(){
            this.GetAllTodo()
            let arr = []
            for (let i = 0; i  < this.data.length; i++) {
                if(this.data[i].starActive == false){
                    arr.push(this.data[i])
                }
            }
            this.data = arr.reverse()
        }
    //

}

export default new ReloadData()