import { createContext, useContext } from "react";

export const Context = createContext({ user: "Pelé" });

export default function ComponentA() {
  const { user } = useContext(Context);
  return <h1>{user}</h1>;
}
