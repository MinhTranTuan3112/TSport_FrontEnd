"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '@/components/layout/layout';

const Accounts = dynamic(() => import('@/components/accounts').then(mod => mod.Accounts));

const accounts = () => {
   return (
      <Layout>
         <Accounts />
      </Layout>
   )
};

export default accounts;