import { HOME_AUTH_TYPES } from "./homeAuth.types";
interface initialStateInterface{
    homeAuth:boolean
}


export const homeAuthGlobalActionTrue=(homeAuth:initialStateInterface)=>({
    type:HOME_AUTH_TYPES.SET_TRUE,
})
export const homeAuthGlobalActionFalse=(homeAuth:initialStateInterface)=>({
    type:HOME_AUTH_TYPES.SET_FALSE,
})