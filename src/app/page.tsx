'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@/components/container';
import CommentList from '@/components/list';

import { API_URLS } from '../config/index';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await axios.get(API_URLS.comments);
      setComments(data);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <h1>Normal fetch</h1>
      {loading ? <div>Loading...</div> : <CommentList comments={comments} />}
    </Container>
  );
};

export default Home;
