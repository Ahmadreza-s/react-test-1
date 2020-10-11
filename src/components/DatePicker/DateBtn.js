import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {useTheme} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 15,
        marginRight: 15,
        width: 50,
        borderRadius: 25
    }
}));
const DateBtn = ({number, isActive, weekDay, month, isDisabled, onSelect}) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid onClick={!isDisabled && onSelect} container direction='column' justify='center' className={classes.root}>

            {
                isActive &&
                <Grid item container justify='center' style={{display: 'flex'}}>
                    <Typography variant='caption' style={{textAlign: 'center', color: 'cyan'}}>
                        {weekDay}
                    </Typography>
                </Grid>
            }
            <Grid item>
                <Typography variant={isActive ? 'subtitle1' : 'subtitle2'} style={{
                    textAlign: 'center',
                    color: isActive ? 'cyan' : isDisabled && theme.palette.common.gray
                }}>
                    {number}
                </Typography>
            </Grid>
            {
                isActive &&
                <Grid item justify='center' style={{display: 'flex'}}>
                    <Typography variant='caption' style={{textAlign: 'center', color: 'cyan'}}>
                        {month}
                    </Typography>
                </Grid>
            }
        </Grid>
    );
};

export default DateBtn;
