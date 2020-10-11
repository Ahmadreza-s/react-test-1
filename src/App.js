import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import {ThemeProvider} from '@material-ui/styles';
import theme from './ui/Theme';
import moment from 'moment-jalaali';

function App() {
    moment.loadPersian({dialect: 'persian-modern'});
    return (
        <ThemeProvider theme={theme}>
            <Main/>
        </ThemeProvider>
    );
}

export default App;
