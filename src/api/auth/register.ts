import axiosInstance from "@/lib/axios/axios";

interface RegisterInput {
  fullName: string;
  email: string;
  password: string;
  oauthProvider?: string | null;
  oauthId?: string | null;
}

export async function register(data: RegisterInput) {
  try {
    const res = await axiosInstance.post("/auth/register", {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      oauthProvider: data.oauthProvider,
      oauthId: data.oauthId,
    });

    return {
      message: "Account registration successful, please verify your email",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error?.response?.data?.message || "Registration failed",
      success: false,
    };
  }
}
