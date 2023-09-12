'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_URLS } from '@/config';

import Container from '@/components/container';
import CommentList from '@/components/list';

let CACHE: any = [];

const CustomPage = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      if (CACHE.length > 0) {
        setComments(CACHE);
        return;
      }
      setLoading(true);
      const { data } = await axios.get(API_URLS.comments);
      CACHE = [...data];
      setComments(data);
      setLoading(false);
    })();
  }, []);
  
  return (
    <Container>
      <h1>Custom SWR</h1>
      {loading ? <div>loading...</div> : <CommentList comments={comments} />}
    </Container>
  );
};

export default CustomPage;
