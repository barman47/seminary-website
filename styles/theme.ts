import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

declare module '@mui/styles' {
	interface DefaultTheme extends Theme {}
}

let theme = createTheme({
	components: {
		MuiButton: {
			// styleOverrides: {
			// 	borderRadius: '5px',
			// 	boxShadow: 'none !important',
			// 	paddingBottom: '14px',
			// 	paddingTop: '14px',
			// 	textTransform: 'capitalize'
			// },

		  	defaultProps: {
				disableRipple: true,
				disableFocusRipple: true
		  	},
		},
	},
	
	palette: {
		primary: {
			light: '#59FFF7',
			main: '#002347',
			// dark: '#990300'
		},

		secondary: {
			main: '#333333',
		},

		text: {
			// primary: '#f8f8f8',
			// secondary: '#f8f8f8'
		}
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 480,
			md: 769,
			lg: 1024,
			xl: 1920
		}
	},

	typography: {
		fontFamily: "'Lato', sans-serif",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600
	}
});

theme = responsiveFontSizes(theme);

export default theme;