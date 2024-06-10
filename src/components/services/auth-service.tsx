
import { customFetch } from "./fetch-serivce";
import { useAccessToken } from "../hooks/useAccessToken";


export const fetchWhoAmI = async () => {
    const [accessToken] = useAccessToken();

    const data = await customFetch('/auth/who-am-i', {
        method: 'GET',
    }, accessToken);
};

