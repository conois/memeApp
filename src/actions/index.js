import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(changeColor("#"+response.data.new_color));
            console.log(response);
        })
    }
}

export function changeColor(color){
    return{
        type:"CHANGE_COLOR",
        color:color
    }
}