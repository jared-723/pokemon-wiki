import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
}

const trainerSlice = createSlice({
    initialState,
    name: "trainer",
    reducers: {

    }
});

export default trainerSlice.reducer