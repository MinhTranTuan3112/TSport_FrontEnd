"use client";
import { Content } from '@/components/home/content';
import { NextPage } from 'next'
import React from 'react'
import {Layout} from '@/components/layout/layout';
type Props = {}

const AdminPage: NextPage = (props: Props) => {
    return (
        <>
            <Layout>
                <Content />
            </Layout>
        </>
    )
};

export default AdminPage