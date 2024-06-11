'use client'
import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import React from 'react'
import { AcmeLogo } from './icons/acmelogo';
import AppIcon from './icons/appIcon';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
type Props = {}

const MainNavBar = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Cá nhân",
        "Áo đấu",
        "Câu lạc bộ",
        "Cầu thủ",
        "Log Out"
    ];

    return (
        <Navbar
        
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            {/*mobile view */}
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link className='text-inherit flex gap-1' href=''>
                        <AppIcon size='1.5rem' />
                        <p className="font-bold text-inherit text-[1.5rem]">TSport</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand >
                    <Link className='text-inherit flex gap-1' href=''>
                        <AppIcon size='1.5rem' />
                        <p className="font-bold text-inherit text-[1.5rem]">TSport</p>
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="">
                        Áo đấu
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="" aria-current="page" className='text-red-600'>
                        Câu lạc bộ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="">
                        Cầu thủ
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className='flex'>
                    <Link href={''} className='text-inherit'>
                        <ShoppingCartIcon />
                        <div className="">Giỏ hàng</div>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="" className='text-red-600'>Đăng nhập</Link>
                </NavbarItem>
            </NavbarContent>

            {/*mobile view */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default MainNavBar;