import axiosInstance from "@/lib/axios/axios";
import { useDispatch} from "react-redux";
import { setUser } from "@/lib/redux/userSlice";

export function useLogin() {
  const dispatch = useDispatch();

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    if (!email || !password) {
      return "Email or password can't be null";
    }

    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
        rememberMe,
      });

      const {
        accessToken,
        userId,
        username,
        email: userEmail,
        expiresAt,
      } = res.data;

      localStorage.setItem("accessToken", accessToken);

      dispatch(setUser({ userId, username, email: userEmail }));

      return {
        message: "Login successful",
        user: {
          userId,
          username,
          email: userEmail,
          expiresAt,
        },
      };
    } catch (error: any) {
      return {
        message: error?.response?.data?.message || "Login failed",
        success: false,
      };
    }
  };

  return {login}
}
