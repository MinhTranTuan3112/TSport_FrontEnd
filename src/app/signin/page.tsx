'use server';
import React from "react";
import "./signin.css";
import { Button, Input } from "@nextui-org/react";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import Header from "@/components/header/header";
import Image from "next/image";
import exGround from "../../img/OIP.jpg";

const SignIn = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container" style={{ height: "70vh" }}>
          <div className="login-container">
            <div className="left_side-login" style={{ width: "35%" }}>
              <h1 id="title-text">Chào mừng sự trở lại của bạn</h1>
              <Input label='Email' variant='bordered' className="text-wrapper-5" />
              <Input label='Mật khẩu' variant='bordered' className="text-wrapper-5" type="password" />
              <Button
                color="primary"
                className="submit_button"
              >
                Đăng nhập
              </Button>

              <Link href={"signup"}
                style={{ textDecoration: "none", marginTop: "10px", color: "blue", cursor: "pointer" }}
              >
                {" "}
                Chưa có tài khoản ?
              </Link>
            </div>

            <div className="right_side-login custom-hover" style={{ width: "65%" }}>
              <Image src={exGround} alt="bg1" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;