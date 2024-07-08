import { customFetch } from "@/utils/fetch/customFetch";

export const fetchAllPlayersFilter = async () => {
    try {
        const response = await customFetch({
            options: {
                'method': 'GET',
            },
            endpointPath: '/players/getall'
        });

        const data = await response.json();
        console.log({ data });
        return data;

    } catch (error) {
        console.error(`Error fetching all players filter: ${error}`);
        return null;
    }
}