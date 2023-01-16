import axios from "axios";
import { getItem, removeItem } from "./LocalStorage";

// let token = getItem('tokenUser');





export function hasAuthenticated(){
    let token = getItem('tokenUser');
    if(token === null){
        return false;
    }else{
        return true;
    }
}

export async function login(credentials){
    return axios.post('http://localhost:3001/api/v1/user/login', credentials).then(response => response);
}

export async function loginAuthorization(token){
    const authAxios = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    return authAxios.post('/api/v1/user/profile').then(response => response);
}

export async function updateProfil(credentials, token){
    const authAxios = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    return authAxios.put('/api/v1/user/profile', credentials).then(response => response);
}

export function logout() {
    removeItem('tokenUser');
    removeItem('infoUser');
    // removeItem('idUser');
    // removeItem('lastNameUser');
    // removeItem('firstNameUser');
    // removeItem('mailUser');
}

