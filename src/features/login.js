import produce from 'immer';
import {removeToken} from '../services/localStorage'
const initialState ={
    username :"",
    password :"",
    token:"",
    status : 'pending',
}

const LOG = 'log';
const SUC = "suc";
const LOGOUT = 'logout';


export const loginCheckout = () =>({
type : LOGOUT,

})
export const loginSuccess = (token) =>({
    type: SUC,
    payload: {token}
})
export default function loginReducer(state = initialState,action){
    return produce(state, (draft) =>{
        if(action.type === LOG){
         draft.username = action.payload.username;
         draft.password = action.payload.password;
         if(state.status === 'pending'){
            console.log('ok');
           
         }
      
       
         
         return
        }
        if(action.type === LOGOUT){
            removeToken();
           draft.token = "";
           draft.username = "";
           draft.password ="";
           draft.status = 'pending';
           return
        }
        if(action.type === SUC){
            draft.token = localStorage.getItem('token');
            return
        }
    })
}