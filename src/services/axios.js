import axios from "axios";
import { setUserData } from "../services/localStorage";

export async function login_axios(user, password) {
  await axios
    .post("http://localhost:7000/api/login", {
      email: user,
      password: password,
    })
    .then((response) => {
      console.log(response);
      setUserData(
        response.data.token,
        response.data.user.id,
        response.data.user.isAdmin,
        response.data.user.photo,
        response.data.user.firstname
      );
      return response.data.token;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function data_axios(url, token) {
  let config = { headers: { Authorization: `Bearer ${token}` } };

  const { data } = await axios.get(url, config);
  return data;
}
export async function delete_user_axios(id) {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
 const {data,status}  = await axios.delete(`http://localhost:7000/api/collaborateurs/${id}`,config);
 return {status, data};
}
export async function create_user_axios(content){
    let new_gender = "";
    switch (content.civility) {
      case "Mme": {
        new_gender = "female";
        break;
      }
      case "M": {
        new_gender = "male";
        break;
      }
    }
    let token = localStorage.getItem('token');
    let url = 'http://localhost:7000/api/collaborateurs';
    const res = await axios({
      method: "post",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
  
      data: {
        gender: new_gender,
        firstname: content.name,
        lastname: content.lastname,
        email: content.email,
        password: content.password, // Facultatif : Uniquement si le mot de passe doit être changé
        phone: content.telephone,
        birthdate: content.birthday,
        city: content.city,
        country: content.country,
        service: content.category,
        photo: content.photo,
      },
    });
}
export async function modif_data_axios(url, token, content) {
  let new_gender = "";
  switch (content.civility) {
    case "Mme": {
      new_gender = "female";
      break;
    }
    case "M": {
      new_gender = "male";
      break;
    }
  }
  const res = await axios({
    method: "put",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    data: {
      gender: new_gender,
      firstname: content.name,
      lastname: content.lastname,
      email: content.email,
      password: content.password, // Facultatif : Uniquement si le mot de passe doit être changé
      phone: content.telephone,
      birthdate: content.birthday,
      city: content.city,
      country: content.country,
      service: content.category,
      photo: content.photo,
    },
  });

}