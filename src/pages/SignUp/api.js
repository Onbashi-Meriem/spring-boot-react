import axios from "axios";
import { i18nInstance } from "../../locales/index"

export function signUp(requestBody) {
    return axios.post("/api/v1/users", requestBody, {
        headers: {
            "Accept-Language": i18nInstance.language
        }
    })

}
