import { customFetch } from "@/utils/fetch/customFetch";
import { createClient } from "@/utils/supabase/client";

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

export const fetchAllClubs = async (page: number, search: string) => {
    let url = `/clubs?page=${page}&size=8&sortColumn=id&orderByDesc=true`;
    if (search != "") {
        url += `&ClubRequest.Name=${search}`;
    }
    try {
        const response = await customFetch({
            options: {
                'method': 'GET',
            },
            endpointPath: url
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(`Error fetching all clubs: ${error}`);
        return null;
    }
};

export const removeClubs = async (id: number) => {
    try {
        const supabase = createClient();
        const accessToken = (await supabase.auth.getSession()).data.session?.access_token;
        const response = await customFetch({
            options: {
                'method': 'DELETE',
            },
            endpointPath: `/clubs/${id}`,
            headers: {
                'Content-Type': 'application/json-patch+json',
                'Authorization': `Bearer ${accessToken}`
            },
        });

        return response;

    } catch (error) {
        console.error(`Error remove club: ${error}`);
        return null;
    }
};