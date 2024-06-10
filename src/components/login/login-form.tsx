"use client";
import { Button, Input, Link } from '@nextui-org/react';
import React, { use, useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { useAccessToken } from '../hooks/useAccessToken';
import { useRouter } from 'next/navigation';

type Props = {}


const LoginForm = (props: Props) => {

    const router = useRouter(); 

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [accessToken, updateAccessToken] = useAccessToken();
    

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit form');
        
        await updateAccessToken(loginData.email, loginData.password);

        router.push('/');
    }


    return (
        <>
            <form action="" className='max-w-md my-0 mx-auto mt-5 shadow-lg p-5 flex flex-col gap-5'
            onSubmit={handleFormSubmit}>
                <h1 className='font-bold uppercase text-center text-3xl'>Đăng nhập</h1>
                <Input
                    isClearable
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder="Nhập email"
                    className=''
                    onValueChange={(value) => {
                        setLoginData({ ...loginData, email: value });
                        // console.log(`Email: ${value}`);
                    }}
                    required
                />

                <Input
                    isClearable
                    type='password'
                    label='Mật khẩu'
                    variant='bordered'
                    onValueChange={(value) => setLoginData({ ...loginData, password: value })}
                    placeholder='Nhập mật khẩu'
                    className='' required />

                <Link href='' className='justify-end'>Quên mật khẩu?</Link>
                <Button color='primary' type='submit' className='block w-full text-xl'>Đăng nhập</Button>

                <div className="text-xl text-center font-bold">HOẶC</div>
                <div className="flex justify-center">
                    <FaGoogle className='text-4xl border border-black p-2 rounded-full
                    hover:bg-black hover:text-white hover:cursor-pointer'/>
                </div>
            </form>
        </>
    );
};

export default LoginForm;