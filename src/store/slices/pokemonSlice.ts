import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageResponse, PokemonDetail, PokemonItem } from '../../types';

interface PokemonState {
  paginatedPokemons: {
    page: PageResponse<PokemonItem>;
    currentPage: number;
    isLoading: boolean;
    error?: {
      message: string;
    }
  };
  detail: {
    pokemon?: PokemonDetail;
    isLoading: boolean;
    error?: {
      message: string;
    };
  };
  favorites: PokemonDetail[];
}

const initialState: PokemonState = {
  paginatedPokemons: {
    page: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
    currentPage: 1,
    isLoading: false,
  },
  detail: {
    isLoading: false,
  },
  favorites: [],
};

const reducers = {
  setPaginatedPokemons: (state: PokemonState, action: PayloadAction<PageResponse<PokemonItem>>): void => {
    state.paginatedPokemons.page = action.payload;
  },
  setCurrentPage: (state: PokemonState, action: PayloadAction<number>): void => {
    state.paginatedPokemons.currentPage = action.payload;
  },
  setIsLoading: (state: PokemonState, action: PayloadAction<boolean>): void => {
    state.paginatedPokemons.isLoading = action.payload;
  },
  setDetail: (state: PokemonState, action: PayloadAction<PokemonDetail>): void => {
    state.detail.pokemon = action.payload;
  },
  setIsloadingDetail: (state: PokemonState, action: PayloadAction<boolean>): void => {
    state.detail.isLoading = action.payload;
  },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers,
});

export const {
  setPaginatedPokemons,
  setCurrentPage,
  setIsLoading,
  setDetail,
  setIsloadingDetail,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
