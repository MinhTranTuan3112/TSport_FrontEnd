import "./shirtlist.css";
import exGr from "../../img/OIP2.jpg";
import { FormControlLabel, FormGroup, Rating, Select, MenuItem } from "@mui/material";
import { Checkbox, checkboxGroup, Button, Card, CardBody, CardFooter, CheckboxGroup, Input, Pagination } from "@nextui-org/react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortSelect from "../../components/shirts/sortSelect";
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
        {/* <nav className="breadcrumb" style={{ display: "flex" }}>
          <Link href={"/"}><span >Trang chủ/ Câu lạc bộ/ </span></Link>
          <span>Chi tiết áo đấu</span>
        </nav> */}
        <div className="container-fluid-home mt-10" style={{ minHeight: "700px" }}>
          <div className="" style={{ width: "20%", paddingInline: "15px" }}>
            <h1 className="text-2xl font-bold mb-3">
              <FilterAltIcon className="text-2xl" /> Bộ lọc
            </h1>
            <div>
              {/* <h2>Mùa giải</h2> */}
              <div className="filter-section">
                {/* <FormGroup className="filter-control custom-checkbox">
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả" />
                </FormGroup> */}
                <CheckboxGroup
                  label='Mùa giải'
                  color="danger"
                >
                  <Checkbox value="buenos-aires">EURO 2024</Checkbox>
                  <Checkbox value="sydney">World Cup</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
            <div>
              {/* <h2>Cầu thủ</h2> */}
              <div className="filter-section">
                {/* <FormGroup className="filter-control custom-checkbox">
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả" />
                  <FormControlLabel control={<Checkbox />} label="Minh" />
                </FormGroup> */}
                <CheckboxGroup
                  label='Cầu thủ'
                  color="danger"
                >
                  <Checkbox value="buenos-aires">Ronaldo</Checkbox>
                  <Checkbox value="sydney">Messi</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
            <div>
              <h2>Giá</h2>
              <div className="filter-section" style={{ display: "flex", alignItems: "center" }}>
                <Input label="Từ" type="number" />
                <ArrowRightAltIcon style={{ width: "10%" }} />
                <Input label="Đến" type="number" />
              </div>
            </div>
          </div>
          <div style={{ width: "80%", display: "flex", justifyContent: "left", alignItems: "start", flexWrap: "wrap" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "end", paddingRight: "5%", marginBottom: "10px" }}>
              {/* <Select label="Tiêu chuẩn" style={{ width: "20%" }}>
                <MenuItem value={""}>Bán chạy</MenuItem>
                <MenuItem value={""}>Đánh giá</MenuItem>
                <MenuItem value={""}>Mới nhất</MenuItem>
              </Select> */}
              <SortSelect />
              {/* <Select
                                label="Tiêu chuẩn"
                                style={{width: "20%"}}
                            >
                                <SelectItem key={""}>Bán chạy</SelectItem>
                            </Select> */}
            </div>

            <div className="gap-4 grid sm:grid-cols-4 w-full">
              {list.map((item, index) => (
                <Card shadow="md" key={index} className="product-item">
                  <CardBody className="overflow-visible p-0 product-img">
                    <Image className="img-fluid w-full" src={exGr} alt={item.title} />
                    <Link href={"/detail"} style={{ height: "0" }}>
                      <div className="product-action">
                        <div className="btn btn-outline-dark btn-square" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <h3 style={{ margin: "0" }}>Chi tiết</h3>
                        </div>
                      </div>
                    </Link>
                  </CardBody>
                  <CardFooter className="text-center" style={{ flexDirection: "column" }}>
                    <h3 style={{ margin: "0" }}>{item.title}</h3>
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem"
                    }}>
                      <h5 style={{ margin: "0" }} className="font-bold">{item.price * 80 / 100} VNĐ</h5>
                      <h6 className="text-muted"><del>{item.price} VNĐ</del></h6>
                    </div>
                    <Rating defaultValue={item.rating} precision={0.5} readOnly />
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "end", paddingRight: "5%", margin: "30px 0" }}>
              <Pagination color="danger" showControls total={10} initialPage={1} />
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default ListShirt;