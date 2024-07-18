import { customFetch } from "@/utils/fetch/customFetch";

export const fetchAllClubsFilter = async () => {
    try {
        const response = await customFetch({
            options: {
                'method': 'GET',
            },
            endpointPath: '/clubs/getall'
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(`Error fetching all clubs filter: ${error}`);
        return null;
    }
};