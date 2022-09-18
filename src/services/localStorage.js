export async function setUserData(token,id,isAdmin,img,name){
    localStorage.setItem('img',img)
    localStorage.setItem('token', token);
    localStorage.setItem('id',id);
    localStorage.setItem('admin',isAdmin);
    localStorage.setItem('name',name);
}

export function removeToken(){
    localStorage.removeItem('img')
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('admin');
    localStorage.removeItem('name');
}