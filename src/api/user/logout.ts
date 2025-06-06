import axiosInstance from "@/lib/axios/axios";
import { useDispatch } from "react-redux";
import { clearUser } from "@/lib/redux/userSlice";

export function useLogout() {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const res = await axiosInstance.post("/user/logout");

      const { message } = res.data;

      if (message == "Logout successful") {
        dispatch(clearUser());
        localStorage.removeItem("accessToken")
      }

      return {
        message: "Logout successful",
      };
    } catch (error: any) {
      return {
        message: error?.response?.data?.message || "Logout failed",
        success: false,
      };
    }
  };

  return { logout };
}
