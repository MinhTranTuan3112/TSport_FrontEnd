'use client';

import React, { useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Selection } from "@react-types/shared/src/selection";
import { Button, Select, SelectItem } from '@nextui-org/react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ClientSelect from '@/components/ClientSelect';
type Props = {
    cartInfo: OrderInCart;
}

// const rows = [
//     {
//         key: "1",
//         name: "Tony Reichert",
//         role: "CEO",
//         status: "Active",
//     },
//     {
//         key: "2",
//         name: "Zoey Lang",
//         role: "Technical Lead",
//         status: "Paused",
//     },
//     {
//         key: "3",
//         name: "Jane Fisher",
//         role: "Senior Developer",
//         status: "Active",
//     },
//     {
//         key: "4",
//         name: "William Howard",
//         role: "Community Manager",
//         status: "Vacation",
//     },
// ];

// const columns = [
//     {
//         key: "name",
//         label: "NAME",
//     },
//     {
//         key: "role",
//         label: "ROLE",
//     },
//     {
//         key: "status",
//         label: "STATUS",
//     },
// ];

const shirtColumns = [
    // {
    //     key: 'shirt_id',
    //     label: 'Mã áo'
    // },
    {
        key: 'shirt_name',
        label: 'Tên áo'
    },
    {
        key: 'size',
        label: 'Size'
    },
    {
        key: 'quantity',
        label: 'Số lượng'
    },
    {
        key: 'price',
        label: 'Đơn Giá'
    },
    {
        key: 'total',
        label: 'Tổng'
    }
];

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

const CartTable = ({ cartInfo }: Props) => {

    const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set([]));

    const [total, setTotal] = useState(0);

    setTotal(cartInfo.total);

    const shirtRows = cartInfo['order-details'].map(od => ({
        key: od['shirt-id'].toString(),
        shirt_name: od.shirt.name,
        size: od.size,
        quantity: od.quantity,
        price: `${formatPrice(od.shirt['shirt-edition']['discount-price'])} VNĐ`,
        total: `${formatPrice(od.shirt['shirt-edition']['discount-price'] * od.quantity)} VNĐ`
    }));

    // const handleSelectionChange = (keys: Selection) => {
    //     if (keys === 'all') {
    //         // Select all keys
    //         const allKeys = new Set(rows.map(row => row.key));
    //         setSelectedKeys(allKeys);
    //     } else if (keys instanceof Set) {
    //         // Convert keys to Set<string> if it's not already
    //         const newKeys = new Set(Array.from(keys).map(String));
    //         setSelectedKeys(newKeys);
    //     }
    // };

    const handleShirtsSelectionChange = (keys: Selection) => {
        if (keys === 'all') {
            // Select all keys
            const allKeys = new Set(cartInfo['order-details'].map(od => od['shirt-id'].toString()));
            setSelectedKeys(allKeys);
        } else {
            // Convert keys to Set<string> if it's not already
            const newKeys = new Set(Array.from(keys).map(String));
            setSelectedKeys(newKeys);
        }
    };

    return (
        <>
            <h1 className='text-center text-3xl font-bold mb-10'>Giỏ hàng của bạn <span className='text-red-600'>({cartInfo['order-details'].length} sản phẩm)</span></h1>
            <Table
                aria-label="Rows actions table example with dynamic content"
                selectionMode="multiple"
                selectionBehavior="toggle"
                selectedKeys={selectedKeys}
                className='max-w-[80%] my-0 mx-auto'
                onSelectionChange={handleShirtsSelectionChange}
            >
                <TableHeader columns={shirtColumns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={shirtRows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="payment_row max-w-[80%] my-0 mx-auto mt-5 flex justify-between">
                <div className="flex gap-5 flex-col w-[30%] shadow-lg p-5 rounded-md">
                    {/* <div className="">
                        </div> */}
                    <ClientSelect className='block' items={paymentOptions} label='Phương thức thanh toán' />
                    {/* <div className="">Phí giao hàng: <span className='font-bold text-red-600 ml-2'> 10.000 VNĐ</span></div> */}
                    <div className="">Tổng cộng:<span className='font-bold text-red-600 ml-2'>{formatPrice(total)} VNĐ</span></div>
                </div>
                <Button type='button' className='bg-red-600 text-white' startContent={<CreditCardIcon />}>Thanh toán</Button>
            </div>
        </>
    );
};

export default CartTable;