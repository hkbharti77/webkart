"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { type ThemeProvider as NextThemesProviderType } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
