'use server'
import React from "react";
import "./signup.css";
import avtPatten from "../../img/download.jpg";
import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import MainNavBar from "@/components/MainNavBar";
import { signin, signup } from "../signin/actions";

const SignUp = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <MainNavBar/> */}
      <div className="main-container">
        <div className="container">
          <div className="register">
            <div className="frame">
              <div className="join-alem-community">Tham gia cùng chúng tôi</div>
              <br />
              <form className="frame-2">
                <div className="mb-3 name">
                  <Input label='Họ' variant='bordered' className="text-wrapper-5" />
                  <Input label='Tên' variant='bordered' className="text-wrapper-5" />
                </div>
                {/* <Input label='SĐT' variant='bordered' className="text-wrapper-5" /> */}
                <div className="flex flex-col gap-3">
                  <Input label='Email' name="email" type="email" variant='bordered' className="text-wrapper-5" required />
                  <Input label='Mật khẩu' name="password" type="password" variant='bordered' className="text-wrapper-5" required/>
                  <Input label='Xác nhận mật khẩu' type="password" variant='bordered' className="text-wrapper-5" required />
                </div>

                <Button
                  className="button-resize text-wrapper-7 mb-3"
                  type="submit"
                  formAction={signup}
                >
                  Đăng ký
                </Button>
                <div>
                  Đã có tài khoản?{" "}
                  <Link href={"/signin"}
                    style={{ color: "blue" }}
                  >
                    Đăng nhập ngay
                  </Link>
                </div>
              </form>
            </div>
            <div className="img-container">
              <Image className="image" alt="Avatar" src={avtPatten} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
