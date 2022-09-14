import produce from 'immer';

const initialState ={
    info : null,
    token: "",
    status:'pending'
};

const TOKEN = 'token';
const INFO = 'info';
export const home_token= (token) => ({
    type: TOKEN,
    payload:token
});
export const home_profile_info = (info) =>({
    type: INFO,
    payload : info,
})


export default function homeReducer(state=initialState,action){
    return produce(state,(draft)=>{
        if(action.type === TOKEN){
        draft.token = localStorage.getItem('token');
        draft.status = "resolved"
        }
        if(action.type === INFO){
          action.info = action.payload;
        }
    })
    

}