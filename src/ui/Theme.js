import {createMuiTheme} from '@material-ui/core/styles';

const black = '#818181';
const grey = '#808080b3';
const blue = '#31a0ff9e';
export default createMuiTheme({
    props: {
        MuiButton: {
            disableElevation: true
        }
    },
    palette: {
        common: {
            gray: grey,
            black: '#818181'
        }
    },
    typography: {
        customBorder: {
            borderBottom: '1px solid #cccccc30'
        },
        h1: {
            fontSize: 24,
            lineHeight: 'unset'
        },
        h2: {
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: 2
        },
        h3: {
            fontSize: 15,
            color: grey
        },
        subtitle1: {
            fontSize: 20
        },
        subtitle2: {
            fontSize: 16
        },
        caption: {
            color: '#ccc',
            fontSize: 12,
            fontFamily: 'Vazir'
        },
        'fontFamily': 'Vazir',
        'fontSize': 14,
        'fontWeightLight': 300,
        'fontWeightRegular': 400,
        'fontWeightMedium': 500

    },
    overrides: {
        MuiDialog: {
            root: {
                top: 'unset !important'
            },
            paper: {
                width: '100%',
                margin: '0 !important',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }
        },
        MuiTouchRipple: {
            root: {
                color: blue
            }
        },
        MuiButton: {
            root: {
                borderRadius: 0,
                border: '1px solid',
                '&:hover,&:active': {
                    backgroundColor: blue,
                    border: `1px solid ${blue}`,
                    color: black
                }
            },
            label: {
                padding: 3
            }
        },
        MuiIconButton: {
            root: {
                '&:hover': {
                    backgroundColor: 'unset'
                }
            }
        }
    }
});
