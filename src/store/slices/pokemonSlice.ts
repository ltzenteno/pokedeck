import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageResponse, PokemonDetail } from '../../types';

interface PokemonState {
  paginatedPokemons: {
    page: PageResponse<PokemonDetail>;
    currentPage: number;
    isLoading: boolean;
    error?: {
      message: string;
      description: string;
    };
  };
  detail: {
    pokemon?: PokemonDetail;
    isLoading: boolean;
    error?: {
      message: string;
      description: string;
    };
  };
  favorites: PokemonDetail[];
  filteredPokemons: PokemonDetail[];
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
  filteredPokemons: [],
};

const reducers = {
  setPaginatedPokemons: (state: PokemonState, action: PayloadAction<PageResponse<PokemonDetail>>): void => {
    state.paginatedPokemons.page = action.payload;
  },
  setCurrentPage: (state: PokemonState, action: PayloadAction<number>): void => {
    state.paginatedPokemons.currentPage = action.payload;
  },
  setIsLoading: (state: PokemonState, action: PayloadAction<boolean>): void => {
    state.paginatedPokemons.isLoading = action.payload;
  },
  setHomeError: (state: PokemonState, action: PayloadAction<{ message: string, description: string } | undefined>): void => {
    if (action.payload) {
      state.paginatedPokemons.error = {
        message: action.payload.message,
        description: action.payload.description,
      };
    } else {
      state.paginatedPokemons.error = undefined;
    }
  },
  setDetail: (state: PokemonState, action: PayloadAction<PokemonDetail>): void => {
    state.detail.pokemon = action.payload;
  },
  setIsLoadingDetail: (state: PokemonState, action: PayloadAction<boolean>): void => {
    state.detail.isLoading = action.payload;
  },
  setFilteredPokemons: (state: PokemonState, action: PayloadAction<PokemonDetail[]>): void => {
    state.filteredPokemons = action.payload;
  },
  addFavorite: (state: PokemonState, action: PayloadAction<PokemonDetail>) => {
    // redux uses immer underneath, it is safe to "mutate" the state inside these functions
    state.favorites.push(action.payload);
  },
  removeFavorite: (state: PokemonState, action: PayloadAction<PokemonDetail>) => {
    const index = state.favorites.findIndex((pokemon) => pokemon.name === action.payload.name);

    state.favorites.splice(index, 1);
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
  setIsLoadingDetail,
  setFilteredPokemons,
  setHomeError,
  addFavorite,
  removeFavorite,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
