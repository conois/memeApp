let defaultState={
    color:"#FF0000"
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_COLOR"){
        return{
            ...state,
            color:action.color
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;