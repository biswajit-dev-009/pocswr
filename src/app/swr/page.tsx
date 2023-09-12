'use client';
import React from 'react'
import useSWR from 'swr'
import axios from 'axios';

import { API_URLS } from '@/config';

import Container from '@/components/container';
import CommentList from '@/components/list';

const fetchComments = async() => {
  const { data } = await axios.get(API_URLS.comments);
  return data;
};

const SWRPage = () => {
  const { data, error, isLoading } = useSWR(API_URLS.comments, fetchComments);
  
  return (
    <Container>
      <h1>SWR Page</h1>
      {isLoading ? <div>loading...</div> : <CommentList comments={data} />}
    </Container>
  )
}

export default SWRPage;