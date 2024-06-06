import type { AppProps } from 'next/app';
import NavbarRoutes from '@/components/navbar-routes';
import { ClerkProvider } from '@clerk/nextjs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <NavbarRoutes />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
