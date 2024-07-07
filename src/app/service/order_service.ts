
import { customFetch } from "@/utils/fetch/customFetch";
import { createClient } from "@/utils/supabase/client";

export const fetchAddToCart = async ({ shirtId, quantity, size }: AddToCartRequest) => {
    try {
        const supabase = createClient();
        const accessToken = (await supabase.auth.getSession()).data.session?.access_token;

        console.log({ shirtId, quantity, size });

        const response = await customFetch({
            options: {
                method: 'POST'
            },
            endpointPath: '/orders/add-to-cart',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: {
                "shirt-id": shirtId,
                "quantity": quantity,
                "size": size
            },
        });

        return response;

    } catch (error) {
        console.error(`Error in fetchAddToCart: ${error}`);
        return null;
    }
};

export const fetchCartInfo = async (accessToken: string) => {
    try {

        console.log(`Access token: ${accessToken}`);

        const response = await customFetch({
            options: {
                method: 'GET'
            },
            endpointPath: '/orders/get-cart',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });

        const data = await response.json();
        console.log('Cart info');
        console.log({ data });



        return data;
    } catch (error) {
        console.error(`Error fetching cart info: ${error}`);
        return null;
    }
};