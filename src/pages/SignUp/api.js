
import http from "@/lib/http";


export function signUp(requestBody) {
    return http.post("/api/v1/users", requestBody
    )

}
