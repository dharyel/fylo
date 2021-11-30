//quando se coloca arquivo.d.extensão, o arquivo tem a finalidade de sobrescrever algo
import 'styled-components';
import { darkTheme } from './dark';

declare module 'styled-components' {
    type ThemeType = typeof darkTheme

    export interface DefaultTheme extends ThemeType {}
}