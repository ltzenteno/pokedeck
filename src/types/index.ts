export type PageResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};

export type PokemonItem = {
  name: string;
  url: string;
  detail?: PokemonDetail;
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type EvoChain = {
  id: number;
};

export type PokemonDetail = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStats[];
  chain: EvoChain[];
};
