import { API_URL } from "./constant";

const BASE_URL = 'http://localhost:8080'

export const fetchAuth = (url : string , params : { email :string , password : string}) => {
    const requestUrl = BASE_URL + url;
    if(url === API_URL.AUTH.LOGIN){
        fetch(requestUrl , {
            method : 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email: params.email,
                password : params.password
            })
        }).then((res) => res.json())
        .then(res => console.log('res', res))
    }
    if(url === API_URL.AUTH.SIGN_UP){
        fetch(requestUrl , {
            method : 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email: params.email,
                password : params.password
            })
        }).then((res) => res.json())
        .then(res => console.log('res', res))
    }
}