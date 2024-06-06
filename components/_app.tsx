import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { NavbarRoutes } from '@/components/navbar-routes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <NavbarRoutes />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
