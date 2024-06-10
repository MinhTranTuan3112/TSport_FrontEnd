"use server"

import { auth } from "@clerk/nextjs/server"

export const getShirt = async () => {
    const { getToken } = auth()

    const token = await getToken()
    console.log({ token });

    const data = await fetch("https://localhost:7091/api/shirts", {
        headers: {
            Authorization: `Bearer ${await getToken()}`
        }
    }).then(res => res.json()).then(data => data.items as Shirt[])

    console.log({ data })

    return data;

}