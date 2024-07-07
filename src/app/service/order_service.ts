
import { customFetch } from "@/utils/fetch/customFetch";
import { createClient } from "@/utils/supabase/client";

export const fetchAddToCart = async ({ shirtId, quantity, size }: AddToCartRequest) => {
    try {
        const supabase = createClient();
        console.log('1');

        const accessToken = (await supabase.auth.getSession()).data.session?.access_token;
        console.log('2');

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

        console.log('3');


        return response;

    } catch (error) {
        console.error(`Error in fetchAddToCart: ${error}`);

        return null;
    }
};