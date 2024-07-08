import { customFetch } from "@/utils/fetch/customFetch";

export const fetchAllSeasonsFilter = async () => {
    try {
        const response = await customFetch({
            options: {
                'method': 'GET',
            },
            endpointPath: '/seasons/getall'
        });

        const data = await response.json();
        console.log({ data });
        return data;

    } catch (error) {
        console.error(`Error fetching all seasons filter: ${error}`);
        return null;
    }
};