export interface Theme {
    background:string;
    primary:string;
    secondary:string;
    text:string;
}

export interface ThemeContext {
    dark:boolean,
    handleDark():any
}