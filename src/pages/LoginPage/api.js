import http from "@/lib/http";


export function login(requestBody) {
    return http.post("/api/v1/auth", requestBody
    )

}
