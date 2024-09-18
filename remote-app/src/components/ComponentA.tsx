import { createContext, useContext } from "react";

export const Context = createContext({ email: "john@email.com" });

interface ComponentAProps {
  auth: {
    token?: string;
    name?: string;
  };
}

const ComponentA = ({ auth }: ComponentAProps) => {
  const { email } = useContext(Context);
  const { token, name } = auth;
  return (
    <ul>
      <li>Nome: {name}</li>
      <li>E-mail: {email}</li>
      <li>Token: {token}</li>
    </ul>
  );
};

export default ComponentA;
