import { apiClient } from "./ApiClient";

export const executeBasicAuthenticationService = (token) => apiClient.get(
    `/basicauth`,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            Authorization: token,
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)

export const executeJwtAuthenticationService = (username, password) => apiClient.post(
    `/authenticate`,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        },
        username, 
        password
    }
)
