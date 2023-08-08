import { RootLayout } from "../src/layout/root.layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
