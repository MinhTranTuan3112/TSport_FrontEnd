import Link from "next/link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@nextui-org/react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
        <div className="container-fluid">
            <div className="row-header">
                <div style={{width: "20%"}}>
                    <div className="header__logo">
                        <img src="img/logo.png" alt="Logo"/>
                    </div>
                </div>
                <div style={{width: "40%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{width: "80%"}}>
                        <Input
                        startContent={<SearchIcon style={{color: "#000000"}}/>}
                        isClearable
                        className="w-full"
                        classNames={{
                            input: "w-full",
                            mainWrapper: "w-full",
                        }}
                        placeholder="Search..."
                    />
                    </div>
                </div>
                <div style={{width: "20%", display: "flex", alignItems: "center"}}>
                    <div className="header__right">
                        <div style={{display: "flex", alignItems: "center", margin: "0 20px"}}>
                            <ShoppingCartIcon style={{color: "#ffff", width: "40px", height: "40px"}}/>
                        </div>
                        <div className="header__right__auth">
                            <Link href={"/signin"} style={{display: "flex", cursor: "pointer"}}>
                                Đăng nhập
                            </Link>
                            <div style={{textAlign: "left"}}>
                                Xin chào,
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;