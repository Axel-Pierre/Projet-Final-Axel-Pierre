export async function setUserData(token,id){
    
    localStorage.setItem('token', token);
    localStorage.setItem('id',id)
}

export function removeToken(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('id');
}