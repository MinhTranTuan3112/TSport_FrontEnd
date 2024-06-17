import CartTable from '@/components/cart/cartTable';
import { Button } from '@nextui-org/react';
import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
type Props = {}

const CartDetailsPage = (props: Props) => {
    return (
        <>
            <div className="py-10">
                <h1 className='text-center text-3xl font-bold mb-10'>Giỏ hàng của bạn <span className='text-red-600'>(4 sản phẩm)</span></h1>
                <CartTable />

                <div className="payment_row max-w-[70%] my-0 mx-auto mt-5 flex justify-between">
                    <div className="total flex items-center">
                        Tổng cộng:<span className='font-bold text-red-600 ml-2'> 1.000.000 VNĐ</span>
                    </div>
                    <Button type='button' className='bg-red-600 text-white' startContent={<CreditCardIcon/>}>Thanh toán</Button>
                </div>
            </div>
        </>
    );
};

export default CartDetailsPage;