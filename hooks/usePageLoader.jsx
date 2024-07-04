// hooks/usePageLoader.js
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const usePageLoader = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    if (typeof window !== 'undefined') { // Verificar si estamos en el lado del cliente
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }
  }, []);

  return isLoading;
};

export default usePageLoader;
