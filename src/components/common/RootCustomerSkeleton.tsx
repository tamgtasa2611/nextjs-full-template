import { rootLoadingAtom } from "@/atoms/common";
import { useRecoilState } from "recoil";
import { Skeleton } from "antd";
import { ReactNode } from "react";

export default function RootCustomerSkeleton({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useRecoilState(rootLoadingAtom);

  setTimeout(() => {
    setLoading(false);
  }, 200);
  return (
    <>
      <Skeleton loading={loading} active className="py-8 px-40">
        {children}
      </Skeleton>
    </>
  );
}
