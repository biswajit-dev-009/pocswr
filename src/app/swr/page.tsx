'use client';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { API_URLS } from '@/config';

import Container from '@/components/container';
import CommentList from '@/components/list';

const fetchComments = async () => {
  const data = await fetch(API_URLS.comments);
  return data.json();
};

const SWRPage: React.FC = () => {
  const key = 'comments';
  const { cache } = useSWRConfig();
  const cachedData = cache.get(key)?.data;
  const { data, isLoading } = useSWR(key, fetchComments, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <Container>
      <h1>SWR Page</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <CommentList comments={cachedData ? cachedData : data} />
      )}
    </Container>
  );
};

export default SWRPage;
