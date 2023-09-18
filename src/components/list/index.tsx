import React from 'react';

import styles from './list.module.css';

const CommentList: React.FC<{
  comments: { name: string; body: string; email: string; id: number }[];
}> = ({ comments }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      {comments.map(({ name, body, email, id }) => (
        <div key={id} className={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><h5>ID: </h5>{id}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><h5>Name: </h5>{name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><h5>Email: </h5>{email}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}><h5>Description: </h5>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
