import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { getPoketmonList } from 'client/api';

export const useInfinite = () => {
    const {
        data: pokemonListAll, // data.pages를 갖고 있는 배열
        error, // error 객체
        fetchNextPage: pokemonListAllFetchNextPage, //  다음 페이지를 불러오는 함수
        hasNextPage: pokemonListAllHasNextPage, // 다음 페이지가 있는지 여부, Boolean
        isFetching, // 첫 페이지 fetching 여부, Boolean
        isFetchingNextPage, // 추가 페이지 fetching 여부, Boolean
        status: pokemonListAllStatus, // loading, error, success 중 하나의 상태, string
      } = useInfiniteQuery(
        ["pokemonList"],
        ({ pageParam = 0 }) => getPoketmonList({ pageParam}),
        {
          getNextPageParam: (lastPage, page) => {
            const { next }: any = lastPage;
            if (!next) return undefined;
            return Number(new URL(next).searchParams.get("offset"));
          },
        }
      );

      return { pokemonListAll, pokemonListAllStatus }
}