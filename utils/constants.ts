export const TRANSITION = '0.3s linear all';

export type Route = {
    url: string,
    text: string,
    icon?: React.ReactElement
}

export const COLORS = {
    primary: '#168F88',
    black: '#000000',
    borderColor: 'rgb(224, 224, 224)',
    offBlack: '#333333',
    grey: '#969bab',
    darkGrey: '#a9a9a9',
    lightGrey: '#e2e2e2',
    white: '#ffffff',
    offWhite: '#f8f8f8',
    darkTeal: '#091d1d',
    lightTeal: '#f6fafa',
    red: '#EB5757',
    darkRed: '#f21c1c'
};

export interface ErrorObject<T> {
    errors: T;
    isValid: boolean;
};