// 1. Import `extendTheme`
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: false,
};

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#F0F2F5",
      },
    },
    styles: {
      global: () => ({
        body: {
          bg: "#F0F2F5",
        },
      }),
    },
  }
);
