'use client';
import React from 'react';
import { SWRConfig } from 'swr';

const SWRProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>;
};

export default SWRProvider;