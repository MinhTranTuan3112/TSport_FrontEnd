import React from 'react'

import dynamic from 'next/dynamic';
import { fetchCartInfo } from '@/app/service/order_service';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
type Props = {}

const CartTable = dynamic(() => import('@/components/cart/cartTable'), { ssr: false });

const CartDetailsPage = async (props: Props) => {
    const supabase = createClient();

    const accessToken = (await supabase.auth.getSession()).data.session?.access_token;
    if (accessToken === undefined || !accessToken) {
        redirect('/login');
    }

    const cartInfo: OrderInCart = await fetchCartInfo(accessToken!);
    console.log({ cartInfo });

    return (
        <>
            <div className="py-10">
                {cartInfo['order-details'].length === 0 ? <h1 className='text-center text-3xl font-bold'>Giỏ hàng của bạn trống</h1>
                    : <CartTable cartInfo={cartInfo} />
                }
            </div>
        </>
    );
};

export default CartDetailsPage;