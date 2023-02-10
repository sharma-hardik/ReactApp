

const reducer = (action,state) => {
    if(action.type ==="Home_Update"){
        return{
            ...state,
            heading: action.payload.heading,
            subheading: action.payload.subheading,
            description: action.payload.description,
            btntext: action.payload.btntext,
            btnrender: action.payload.btnrender,
             image:action.payload.image,
             bgimage:action.payload.bgimage,
             showhide:action.payload.showhide,
        }
    }
    if(action.type ==="About_Update"){
      return{
          ...state,
          heading: action.payload.heading,
          subheading: action.payload.subheading,
          description: action.payload.description,
          btntext: action.payload.btntext,
          btnrender: action.payload.btnrender,
           image:action.payload.image,
           bgimage:action.payload.bgimage,
           showhide:action.payload.showhide
      }
  }
  return (
    state
  )
}

export default reducer;