import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'sonner';
import { CustomCursor } from './components/CustomCursor';
import { ClickRipple } from './components/ClickRipple';
import { SplashCursor } from './components/SplashCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { PageLoader } from './components/PageLoader';

export default function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <SplashCursor />
      <ClickRipple />
      <RouterProvider router={router} />
      <Toaster position="bottom-right" theme="dark" toastOptions={{
        style: {
          background: 'rgba(5, 5, 10, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          color: '#e2e8f0',
        }
      }} />
    </>
  );
}