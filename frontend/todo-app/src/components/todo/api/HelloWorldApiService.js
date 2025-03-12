import { apiClient } from './ApiClient';

export function retrieveHelloWorldBean() {
    return apiClient.get(
        '/hello-world-bean', 
        {
            withCredentials: true, // Ensures cookies and authentication headers are included
            headers: {
                'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
            }
        }
    );  
}

export const retrieveHelloWorldPathVariable = (username, token) => apiClient.get(
    `/hello-world/path-variable/${username}`,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            // Authorization: token,
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)
