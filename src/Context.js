import { useContext, useReducer } from "react";
import { createContext } from "react";
import reducer from "./Reducer";

const AppContext = createContext();

const intialstate = {
    heading: "",
    subheading: "",
    description: "",
    btntext: "",
    btnrender: "",
    image: "",
    brave:"",
    showhide:"",
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate);

    const HomeUpdate = () => {
        return dispatch({
            type: "Home_Update",
            payload: { 
               
                heading: "Third Generation",
                subheading: "Future Of Innovation",
                description: "This headphones brings emotion in your life. One thing which change your world is your own voice" ,
                btntext:"Book Now",
                btnrender:"/contact",
                image: "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=360",
                bgimage:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                showhide:"block"
                },
        }
        )
}
const AboutUpdate = () => {
    return dispatch({
        type: "About_Update",
        payload: { 
           
            heading: "About Headphones",
            subheading: "Avaliable Now",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum esse aliquam quaerat praesentium nulla, modi quam doloremque commodi quia eius magni possimus cum, minima sunt, officia dolor unde ab sequi natus perspiciatis? Tempora ipsam accusamus aperiam labore animi consequatur ducimus temporibus cum, distinctio sit laboriosam quia, suscipit velit corrupti praesentium dolor. Eius libero est molestias delectus temporibus, eum labore illo iste hic vitae, molestiae nostrum? Adipisci vel in odit, aliquid fugiat sunt perferendis ipsam? Ratione, vitae molestiae quidem adipisci corporis rem provident a quibusdam atque odio, doloremque deleniti soluta maxime fuga earum, dignissimos " ,
            btntext:"",
            btnrender:"/contact",
            image: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            bgimage:"creation.jpeg",
            showhide:"none"
            },
    }
    )
}





    return <AppContext.Provider value={{...state , HomeUpdate,AboutUpdate}}>
        {children}
    </AppContext.Provider>
}
const GlobalContext = () => {
    return (useContext(AppContext));
}
export { AppProvider, GlobalContext }
