import { configureStore } from "@reduxjs/toolkit";

import { profilesReducer } from "./profiles/profilesReducer";
import { filterReducer } from "./filter/filterReducer";

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    filter: filterReducer,
  },

});

