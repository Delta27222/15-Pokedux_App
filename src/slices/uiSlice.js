import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  showErrorNotPokemonFound: false,
  showPage: 'pokemonsList'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action)  => {
      state.loading = action.payload
    },
    setShowErorPokemonNOtFount: (state, action) => {
      state.showErrorNotPokemonFound = action.payload
    },
    setPageToShow: (state, action) =>{
      state.showPage = action.payload;
    }
  }
})

export const { setLoading, setShowErorPokemonNOtFount, setPageToShow } = uiSlice.actions;

export default uiSlice.reducer;