import axiosInstance from "@/lib/axios/axios";

export async function login(
  email: string,
  password: string,
  rememberMe: boolean
) {
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
}
