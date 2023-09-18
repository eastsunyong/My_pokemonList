import { useQuery } from 'react-query';
import { getPokemonListWithType } from 'client/api';

export const useType = (type: string | undefined) => {
  const { data: typePokemonList } = useQuery(['pokemon-type', type], () => getPokemonListWithType(type), {
    enabled: !!type,
  });

  return { typePokemonList };
};
