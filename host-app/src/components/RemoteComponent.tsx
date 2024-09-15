import dynamic from "next/dynamic";

// eslint-disable-next-line
const ComponentA = dynamic(() => import("remote/ComponentA"), {
  ssr: false,
});

// eslint-disable-next-line
const ComponentB = dynamic(() => import("remote/ComponentB"), {
  ssr: false,
});

export default function RemoteComponent() {
  return (
    <>
      <ComponentA />
      <ComponentB />
    </>
  );
}
