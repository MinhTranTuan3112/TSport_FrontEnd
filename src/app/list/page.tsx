import "./shirtlist.css";
import exGround from "../../img/OIP.jpg";
import { Checkbox, FormControlLabel, FormGroup, MenuItem, Pagination, Rating, Select, TextField } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Header from "@/components/header/header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/footer";
const ListShirt = () => {
    return (
        <>
            <Header/>
            <div className="main-container">
                <nav className="breadcrumb" style={{display: "flex"}}>
                    <Link href={"/"}><span>Home/ Câu lạc bộ/</span> </Link>
                    <span>abc</span>
                </nav>
                <div className="container-fluid-home" style={{minHeight: "700px"}}>
                    <div style={{width: "20%"}}>
                        <h1>Bộ lọc</h1>
                        <div>
                            <h2>Mùa giải:</h2>
                            <div className="filter-section">
                                <FormGroup className="filter-control custom-checkbox">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả"/>
                                </FormGroup>
                            </div>
                        </div>
                        <div>
                            <h2>Cầu thủ:</h2>
                            <div className="filter-section">
                                <FormGroup className="filter-control custom-checkbox">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả" />
                                </FormGroup>
                            </div>
                        </div>
                        <div>
                            <h2>Giá:</h2>
                            <div className="filter-section" style={{display: "flex", alignItems: "center"}}>
                                <TextField label="Từ" style={{width: "40%"}}/>
                                <ArrowRightAltIcon style={{width: "10%"}}/>
                                <TextField label="Đến" style={{width: "40%"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "80%", display: "flex",justifyContent: "left", alignItems: "start", flexWrap: "wrap"}}>
                        <div style={{width: "100%", display: "flex", justifyContent: "end", paddingRight: "5%", marginBottom: "10px"}}>
                            <Select label="Order" style={{width: "20%"}}>
                                <MenuItem value={""}>Bán chạy</MenuItem>
                                <MenuItem value={""}>Đánh giá</MenuItem>
                                <MenuItem value={""}>Mới nhất</MenuItem>
                            </Select>
                        </div>

                        <div style={{width: "25%"}}>
                            <div className="product-item">
                                <div className="product-img">
                                    <Image className="img-fluid" src={exGround} alt="abc"/>
                                    
                                        <Link href={"/detail"}>
                                        <div className="product-action">
                                            <div className="btn btn-outline-dark btn-square" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <h3 style={{margin: "0"}}>Xem chi tiết</h3>
                                        </div>
                                        </div>
                                        </Link>
                                    
                                </div>
                                <div className="text-center">
                                    <h3 style={{margin: "0"}}>áo 1</h3>
                                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <h5 style={{margin: "0"}}>123</h5>
                                        <h6 className="text-muted"><del>250</del></h6>
                                    </div>
                                    <Rating defaultValue={2.5} precision={0.5} readOnly/>
                                </div>
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", justifyContent: "end", paddingRight: "5%", marginBottom: "10px"}}>
                            <Pagination
                                count={Math.ceil(17 / 7)}
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default ListShirt;