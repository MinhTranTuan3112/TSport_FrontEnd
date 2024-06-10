import React from "react";
import "./signup.css";
import avtPatten from "../../img/download.jpg";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const SignUp = () => {
  return (
    <>
        <Header/>
        <div className="main-container">
      <div className="container">
        <div className="register">
          <div className="frame">
            <div className="join-alem-community">Tham gia cùng chúng tôi</div>
            <br />
            <div className="frame-2">
                <div className="mb-3 name">
                    <Input label='Họ' variant='bordered' className="text-wrapper-5"/>
                    <Input label='Tên' variant='bordered' className="text-wrapper-5"/>
                </div>
                <Input label='SĐT' variant='bordered' className="text-wrapper-5"/>
                <Input label='Email' variant='bordered' className="text-wrapper-5"/>
                <Input label='Mật khẩu' variant='bordered' className="text-wrapper-5"/>
                <Input label='Xác nhận mật khẩu' variant='bordered' className="text-wrapper-5"/>

                  <Button
                    className="button-resize text-wrapper-7"
                  >
                    Đăng ký
                  </Button>
              <br />
              <div>
                Đã có tài khoản?{" "}
                <Link href={"/signin"}
                style={{color: "blue"}}
                >
                  Đăng nhập ngay
                </Link>
              </div>
            </div>
          </div>
          <div className="img-container">
            <Image className="image" alt="Avatar" src={avtPatten} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default SignUp;
