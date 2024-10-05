import Navbar from "@/components/elements/Navbar";
import Providers from "@/components/layouts/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster"


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </Providers>
  );
}
