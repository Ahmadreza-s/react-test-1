import React from 'react';
import moment from 'moment-jalaali';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, GridList} from '@material-ui/core';
import DateBtn from './DateBtn';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        maxWidth: 330,
        marginRight: -10
    },
    gridList: {
        flexWrap: 'nowrap',
        margin: 'unset !important',
        transform: 'translateZ(0)'
    }

}));


const DatePicker = ({onDateChanged, selectedDate}) => {


    const classes = useStyles();

    const allDates = [];
    for (let i = 0; i < 10; i++)
        allDates.push(moment().subtract(3, 'day').add(i, 'day'));

    return <div className={classes.root}>
        <GridList className={classes.gridList}>
            {
                allDates.map((date, index) => (
                    <DateBtn isDisabled={index === 0 || index === 1}
                             number={date.format('jDD')}
                             isActive={selectedDate != null && selectedDate.format('jYYYY/jMM/jDD') === date.format('jYYYY/jMM/jDD')}
                             month={date.format('jMMMM')}
                             weekDay={date.format('dddd')}
                             onSelect={() => onDateChanged(date)}
                    />
                ))}


        </GridList>
    </div>;

};

export default DatePicker;