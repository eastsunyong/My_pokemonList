import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getPokemonList } from 'client/api';

export const useInfinite = (isView: boolean) => {
  const {
    data: pokemonListAll, // data.pages를 갖고 있는 배열
    fetchNextPage: pokemonListAllFetchNextPage, //  다음 페이지를 불러오는 함수
    hasNextPage: pokemonListAllHasNextPage, // 다음 페이지가 있는지 여부, Boolean
    status: pokemonListAllStatus, // loading, error, success 중 하나의 상태, string
  } = useInfiniteQuery(['pokemonList'], ({ pageParam = 0 }) => getPokemonList({ pageParam }), {
    getNextPageParam: (lastPage, page) => {
      const { next }: any = lastPage;
      if (!next) return undefined;
      return Number(new URL(next).searchParams.get('offset'));
    },
  });
  // 무한 스크롤
  useEffect(() => {
    if (isView && pokemonListAllHasNextPage) pokemonListAllFetchNextPage();
  }, [isView]);

  return { pokemonListAll, pokemonListAllStatus };
};
