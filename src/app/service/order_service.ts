
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

        if (response.ok) {
            const data = await response.json();
            console.log('Cart info');
            console.log({ data });

            return data;
        }

        return null;

    } catch (error) {
        console.error(`Error fetching cart info: ${error}`);
        return null;
    }
};

function convertToKebabCaseArray(requests: AddToCartRequest[]): any[] {
    return requests.map(request => ({
        "shirt-id": request.shirtId,
        "quantity": request.quantity,
        "size": request.size
    }));
}

export const fetchConfirmOrder = async (accessToken: string, orderId: number, requests: AddToCartRequest[]) => {
    try {
        const requestBody = convertToKebabCaseArray(requests);

        const response = await customFetch({
            options: {
                method: 'POST'
            },
            endpointPath: `/orders/${orderId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: requestBody
        });

        return response;
    } catch (error) {
        console.error(`Error in fetchConfirmOrder: ${error}`);
        return null;
    }
};