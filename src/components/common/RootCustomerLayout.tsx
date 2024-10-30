"use client";
import { Row, Col } from "antd";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import Navbar from "@/components/Navbar";
import RootCustomerSkeleton from "./RootCustomerSkeleton";

const RootCustomerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <RootCustomerSkeleton>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between py-8 px-40 bg-slate-100">
          <Row gutter={[24, 24]}>
            <Col span={24}>{children}</Col>
          </Row>
        </main>
      </RootCustomerSkeleton>
    </RecoilRoot>
  );
};

export default RootCustomerLayout;
