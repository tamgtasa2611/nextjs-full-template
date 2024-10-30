import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
const inter = Inter({ subsets: ["latin"] });
import RootCustomerLayout from "@/components/common/RootCustomerLayout";

export const metadata: Metadata = {
  title: "Jupiter - Thời trang cao cấp cho mọi phong cách",
  description:
    "Khám phá thế giới thời trang đa dạng tại Jupiter. Chúng tôi mang đến những bộ sưu tập quần áo, phụ kiện thời thượng, chất lượng cao. Mua sắm ngay để thể hiện cá tính riêng của bạn!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                //pink: #fb6f92
                //sakura: #ff8080
                //blue: #6499E9 #1d6fc9
                //black: #212427
                //coal: #36454F
                colorPrimary: "#36454F",
              },
            }}
          >
            <RootCustomerLayout>{children}</RootCustomerLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
