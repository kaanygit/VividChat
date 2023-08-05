import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage";
import { HOME_AUTH_TYPES } from "./homeAuth.types";


interface HomeAuthAction{
    type:string;
    payload?:any;
}
interface initialStateInterface{
    homeAuth:boolean
}

const initialState:initialStateInterface={
    homeAuth:false
};

const homeAuth=(state=initialState,action:HomeAuthAction)=>{
    switch(action.type){
        case HOME_AUTH_TYPES.SET_TRUE:
            return{
                ...state,
                homeAuth:false
            }
        case HOME_AUTH_TYPES.SET_FALSE:
            return{
                ...state,
                homeAuth:true
            }
        default:
            return state
        }

}


export default homeAuth