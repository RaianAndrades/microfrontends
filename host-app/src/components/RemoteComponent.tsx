import dynamic from "next/dynamic";
import { useState } from "react";

interface AuthProps {
  token: string;
  name: string;
}

// eslint-disable-next-line
const ComponentA = dynamic(() => import("remote/ComponentA"), {
  ssr: false,
}) as React.ComponentType<{ auth: AuthProps }>;

// eslint-disable-next-line
const ComponentB = dynamic(() => import("remote/ComponentB"), {
  ssr: false,
}) as React.ComponentType<{ total: number; handleTotal: () => void }>;

export default function RemoteComponent() {
  const [total, setTotal] = useState<number>(0);

  const handleTotal = () => setTotal(total + 1);

  return (
    <>
      <ComponentA auth={{ token: "123", name: "Raian" }} />
      <ComponentB total={total} handleTotal={handleTotal} />
    </>
  );
}
