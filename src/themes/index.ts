import { darkTheme } from './dark';

export interface ThemeInterface {
    colors: {
        background1: string;
        background2: string;
        background3: string;
        background4: string;

        detail1: string;
        detail2: string;
        error: string;

        text: string;
    },
    fonts: {
        family: {
            raleway: string;
            openSans: string;
        }
    },
}

export const Themes = { darkTheme };