import { Token } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const iniatalState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};
export const authSlice = createSlice