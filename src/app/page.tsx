'use client'

import { getShirt } from "@/lib/shirt.action";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

const Home = () => {
  const { getToken } = useAuth()

  useEffect(() => {
    const fetchShirt = async () => {
      const token = await getToken()
      console.log({ token });

      const data = await fetch("https://localhost:7091/api/shirts", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => res.json()).then(data => data.items as Shirt[])

      console.log({ data })
    }

    fetchShirt()

  }, []);

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;