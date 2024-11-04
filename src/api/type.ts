import { API_URL } from "./constant"

export type AuthApi = {
    [API_URL.AUTH.LOGIN] : {
            email : string,
            password: string,
        },
    [API_URL.AUTH.SIGN_UP] : {
            email : string,
            password: string,
        },
}

// export type AuthApiUrl = typeoftypeof API_URL['AUTH'];