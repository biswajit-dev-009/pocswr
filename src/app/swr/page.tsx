'use client';
import React from 'react';
import useSWR from 'swr';

import { API_URLS } from '@/config';

import Container from '@/components/container';
import CommentList from '@/components/list';

const fetchComments = async () => {
  const data = await fetch(API_URLS.comments);
  return data.json();
};

const SWRPage: React.FC = () => {
  const key = 'comments';

  const { data, isLoading } = useSWR(key, fetchComments, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  return (
    <Container>
      <h1>SWR Page</h1>
      {isLoading ? <div>loading...</div> : <CommentList comments={data} />}
    </Container>
  );
};

export default SWRPage;
