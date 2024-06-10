import { customFetch } from "../services/fetch-serivce";
import useLocalStorage from "./useLocalStorage";

export const useAccessToken = () => {

    const [accessToken, setAccessToken] = useLocalStorage<string>('access-token', '');

    const updateAccessToken = async (email: string, password: string) => {
        const data = await customFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        setAccessToken(data['access-token']);

    };
    
    return [accessToken, updateAccessToken] as const;
};