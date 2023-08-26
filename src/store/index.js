import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slice.js";

export default configureStore({
  reducer: {
    trainer: trainerSlice
  },
});
