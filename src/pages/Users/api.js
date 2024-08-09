import http from "@/lib/http"

export function getAllUser(page) {
    return http.get('/api/v1/users', {
        params: {
            page,
            size: 5
        }
    })
}
