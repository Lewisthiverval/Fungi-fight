import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { useAppState } from "../store";

export const LoginPage = () => {
  const nav = useNavigate();
  const login = useAppState((x) => x.login);
  return (
    <Form
      onLogin={(user) => {
        login(user);
        nav("/");
      }}
    />
  );
};
