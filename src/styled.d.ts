import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    } // extends the global DefaultTheme with our ThemeType.
}