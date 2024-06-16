import "./shirtlist.css";
import exGr from "../../img/OIP2.jpg";
import { Checkbox, FormControlLabel, FormGroup, Rating, Select, MenuItem } from "@mui/material";
import {Card, CardBody, CardFooter, Input, Pagination} from "@nextui-org/react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
const ListShirt = () => {
    const list = [
    {
      title: "Orange",
      img: "../../img/OIP.jpg",
      price: 5.50,
      rating: 3,
    },
    {
      title: "Tangerine",
      img: "../../img/OIP.jpg",
      price: 3.00,
      rating: 4,
    },
    {
      title: "Raspberry",
      img: "../../img/OIP.jpg",
      price: 10.00,
      rating: 3.5,
    },
    {
      title: "Lemon",
      img: "../../img/OIP.jpg",
      price: 5.30,
      rating: 3,
    },
    {
      title: "Avocado",
      img: "../../img/OIP.jpg",
      price: 15.70,
      rating: 1,
    },
    {
      title: "Lemon 2",
      img: "../../img/OIP.jpg",
      price: 8.00,
      rating: 4.5,
    },
    {
      title: "Banana",
      img: "../../img/OIP.jpg",
      price: 7.50,
      rating: 2.5,
    },
    {
      title: "Watermelon",
      img: "../../img/OIP.jpg",
      price: 12.20,
      rating: 5,
    },
    {
      title: "Orange",
      img: "../../img/OIP.jpg",
      price: 5.50,
      rating: 3,
    },
    {
      title: "Tangerine",
      img: "../../img/OIP.jpg",
      price: 3.00,
      rating: 4,
    },
    {
      title: "Raspberry",
      img: "../../img/OIP.jpg",
      price: 10.00,
      rating: 3.5,
    },
    {
      title: "Lemon",
      img: "../../img/OIP.jpg",
      price: 5.30,
      rating: 3,
    },
    {
      title: "Avocado",
      img: "../../img/OIP.jpg",
      price: 15.70,
      rating: 1,
    },
    {
      title: "Lemon 2",
      img: "../../img/OIP.jpg",
      price: 8.00,
      rating: 4.5,
    },
    {
      title: "Banana",
      img: "../../img/OIP.jpg",
      price: 7.50,
      rating: 2.5,
    },
    {
      title: "Watermelon",
      img: "../../img/OIP.jpg",
      price: 12.20,
      rating: 5,
    },
  ];
    return (
        <>
            {/* <Header/> */}
            <div className="main-container">
                {/* <Breadcrumbs className="breadcrumb" key="lg" size="lg">
                    <BreadcrumbItem><Link href={"/"}>Trang chủ</Link></BreadcrumbItem>
                    <BreadcrumbItem>Câu lạc bộ</BreadcrumbItem>
                    <BreadcrumbItem>abc</BreadcrumbItem>
                </Breadcrumbs> */}
                <nav className="breadcrumb" style={{ display: "flex" }}>
                    <Link href={"/"}><span >Trang chủ/ Câu lạc bộ/ </span></Link>
                    <span>Chi tiết áo đấu</span>
                </nav>
                <div className="container-fluid-home" style={{minHeight: "700px"}}>
                    <div style={{width: "20%", paddingRight: "20px"}}>
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
                                    <FormControlLabel control={<Checkbox/>} label="Minh" />
                                </FormGroup>
                            </div>
                        </div>
                        <div>
                            <h2>Giá:</h2>
                            <div className="filter-section" style={{display: "flex", alignItems: "center"}}>
                                <Input label="Từ" style={{width: "30%"}}/>
                                <ArrowRightAltIcon style={{width: "10%"}}/>
                                <Input label="Đến" style={{width: "30%"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "80%", display: "flex",justifyContent: "left", alignItems: "start", flexWrap: "wrap"}}>
                        <div style={{width: "100%", display: "flex", justifyContent: "end", paddingRight: "5%", marginBottom: "10px"}}>
                            <Select label="Tiêu chuẩn" style={{width: "20%"}}>
                                <MenuItem value={""}>Bán chạy</MenuItem>
                                <MenuItem value={""}>Đánh giá</MenuItem>
                                <MenuItem value={""}>Mới nhất</MenuItem>
                            </Select>
                            {/* <Select
                                label="Tiêu chuẩn"
                                style={{width: "20%"}}
                            >
                                <SelectItem key={""}>Bán chạy</SelectItem>
                            </Select> */}
                        </div>

                        <div className="gap-2 grid sm:grid-cols-4 w-full">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} className="product-item">
          <CardBody className="overflow-visible p-0 product-img">
            <Image className="img-fluid w-full" src={exGr} alt={item.title}/>
            <Link href={"/detail"} style={{height: "0"}}>
                                        <div className="product-action">
                                            <div className="btn btn-outline-dark btn-square" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <h3 style={{margin: "0"}}>Xem chi tiết</h3>
                                        </div>
                                        </div>
                                        </Link>
          </CardBody>
          <CardFooter className="text-center" style={{flexDirection: "column"}}>
            <h3 style={{margin: "0"}}>{item.title}</h3>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <h5 style={{margin: "0"}}>${item.price * 80 / 100}</h5>
                                        <h6 className="text-muted"><del>${item.price}</del></h6>
                                    </div>
                                    <Rating defaultValue={item.rating} precision={0.5} readOnly/>
          </CardFooter>
        </Card>
      ))}
    </div>

                        <div style={{width: "100%", display: "flex", justifyContent: "end", paddingRight: "5%", margin: "30px 0"}}>
                             <Pagination showControls total={10} initialPage={1} />
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default ListShirt;