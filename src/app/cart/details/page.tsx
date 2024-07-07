// import CartTable from '@/components/cart/cartTable';
import { Button, Select, SelectItem } from '@nextui-org/react';
import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ClientSelect from '@/components/ClientSelect';
import dynamic from 'next/dynamic';
import { fetchCartInfo } from '@/app/service/order_service';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
type Props = {}

const paymentOptions = [
    {
        key: 'COD',
        label: 'Thanh toán khi nhận hàng'
    },
    {
        key: 'MOMO',
        label: 'Thanh toán qua MOMO'
    }
];

const CartTable = dynamic( () => import('@/components/cart/cartTable'), { ssr: false } );

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
                <h1 className='text-center text-3xl font-bold mb-10'>Giỏ hàng của bạn <span className='text-red-600'>(4 sản phẩm)</span></h1>
                <CartTable cartInfo={cartInfo}/>

                <div className="payment_row max-w-[80%] my-0 mx-auto mt-5 flex justify-between">
                    <div className="flex gap-5 flex-col w-[30%] shadow-lg p-5 rounded-md">
                        {/* <div className="">
                        </div> */}
                        <ClientSelect className='block' items={paymentOptions} label='Phương thức thanh toán' />
                        {/* <div className="">Phí giao hàng: <span className='font-bold text-red-600 ml-2'> 10.000 VNĐ</span></div> */}
                        <div className="">Tổng cộng:<span className='font-bold text-red-600 ml-2'>{formatPrice(cartInfo.total)} VNĐ</span></div>
                    </div>
                    <Button type='button' className='bg-red-600 text-white' startContent={<CreditCardIcon />}>Thanh toán</Button>
                </div>
            </div>
        </>
    );
};

export default CartDetailsPage;