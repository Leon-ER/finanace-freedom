import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    userId: string,
    username: string,
    email: string
}


const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    clearUser: () => {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;