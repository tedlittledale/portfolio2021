import { Provider } from "mobx-react";
import { useStore } from "../store";
import GlobalStyles from "../styles/globals/manifest";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />

      <Analytics />
    </Provider>
  );
}
