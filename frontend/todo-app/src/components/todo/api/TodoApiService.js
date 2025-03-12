import { apiClient } from './ApiClient';

export const retrieveAllTodosForUsernameApi = (username) => apiClient.get(
    `/users/${username}/todos`,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)

export const deleteTodoApi = (username, id) => apiClient.delete(
    `/users/${username}/todos/${id}`,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)

export const retrieveTodoApi = (username, id) => apiClient.get(
    `/users/${username}/todos/${id}`,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)

export const updateTodoApi = (username, id, todo) => apiClient.put(
    `/users/${username}/todos/${id}`,
    todo,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)

export const createTodoApi = (username, todo) => apiClient.post(
    `/users/${username}/todos`,
    todo,
    {
        withCredentials: true, // Ensures cookies and authentication headers are included
        headers: {
            'Origin': 'http://localhost:3000' // Explicitly setting the Origin header
        }
    }
)
