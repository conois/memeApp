let defaultState={
  image: "https://i.imgflip.com/1jwhww.jpg"
}

const mainReducer = (state=defaultState, action)=>{
  if (action.type==="CHANGE_IMAGE") {
    return {
      ...state,
      image:action.image
    }
  } else {
    return{
      ...state
    }
  }
}

export default mainReducer;