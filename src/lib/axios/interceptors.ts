import { AxiosInstance } from "axios";

export function setupInterceptors(axios: AxiosInstance){
    axios.interceptors.request.use((config)=>{
        const token = localStorage.getItem("accessToken");
        if(token){
            config.headers.Authorization= `Bearer ${token}`
        }
        return config;
    });
}