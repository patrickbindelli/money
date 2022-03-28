import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
} from "@mantine/core";
import { Layout } from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Layout>
          <Global
            styles={(theme) => ({
              "*, *::before, *::after": {
                boxSizing: "border-box",
              },

              body: {
                ...theme.fn.fontStyles(),
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.white,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black,
                lineHeight: theme.lineHeight,
              },
            })}
          />
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
