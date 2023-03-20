import { useSelector } from "react-redux";
export const useAuth = () => {
  const { email, name, password } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    name,
    password,
  };
};
