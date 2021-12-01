//quando se coloca arquivo.d.extensão, o arquivo tem a finalidade de sobrescrever algo
import 'styled-components';
import { ThemeInterface } from './';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}