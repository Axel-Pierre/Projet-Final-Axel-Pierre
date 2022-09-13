import axios from 'axios';


export async function test(){
 const {data} = await axios.post('http://localhost:7000/login')
 return console.log(data);
}