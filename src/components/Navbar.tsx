import { Button, Col, Flex, Row } from "antd";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Row
      align={"middle"}
      justify={"space-between"}
      className="px-40 py-4 shadow bg-white"
    >
      <Col span={6}>
        <Link href={"/"} className="text-2xl text-black font-semibold">
          BLACKCAT
        </Link>
      </Col>
      <Col span={8}>
        <Flex justify="space-between" align="center">
          <Link href={"/"} className="text-black">
            Cửa hàng
          </Link>
          <Link href={"/"} className="text-black">
            Khuyến mãi
          </Link>
          <Link href={"/"} className="text-black">
            Liên hệ
          </Link>
          <Link href={"/"} className="text-black">
            Về chúng tôi
          </Link>
        </Flex>
      </Col>
      <Col span={6}>
        <Flex justify="end" gap={8}>
          <Button>
            <Link href={"/signin"}>Đăng nhập</Link>
          </Button>
          <Button type={"primary"}>
            <Link href={"/signup"}>Đăng ký</Link>
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};

export default Navbar;
