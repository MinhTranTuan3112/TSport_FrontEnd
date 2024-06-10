const BASE_URL = "http://localhost:8080/api";

export const customFetch = async (endpoint: string, options: RequestInit = {}, accessToken: string = '') => {
    options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    const data = await response.json();

    return data;
};