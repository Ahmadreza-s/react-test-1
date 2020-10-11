import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomizedRadio from './CustomizedRadio';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxHeight: 200,
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    fcl: {
        width: '80%'
    }
});
const RadioLabel = ({isDisabled, text}) => {
    return <Grid container alignItems='center' justify='space-between'>
        <Grid item>
            <p>{text}</p>
        </Grid>


        {
            isDisabled &&
            <Grid item>
                <Typography style={{color: 'orange', fontSize: 12}}>
                    تکمیل
                </Typography>
            </Grid>
        }
    </Grid>;
};

const TimePicker = ({selectedTime, onTimeChange}) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.root} component="fieldset">
            <RadioGroup defaultValue={selectedTime} onChange={onTimeChange}>
                <FormControlLabel
                    classes={{label: classes.fcl}}
                    value='7-9'
                    control={<CustomizedRadio/>}
                    label={<RadioLabel text='ساعت 9-7'/>}/>
                <FormControlLabel
                    classes={{label: classes.fcl}}
                    value='9-10'
                    disabled
                    control={<CustomizedRadio/>}
                    label={<RadioLabel isDisabled text='ساعت 10-9'/>}/>
                <FormControlLabel
                    classes={{label: classes.fcl}}
                    value='12-14'
                    control={<CustomizedRadio/>}
                    label={<RadioLabel text='ساعت 14-12'/>}/>
                <FormControlLabel
                    classes={{label: classes.fcl}}
                    value='14-16'
                    disabled
                    control={<CustomizedRadio/>}
                    label={<RadioLabel isDisabled text='ساعت 16-14'/>}/>
                <FormControlLabel
                    classes={{label: classes.fcl}}
                    value='18-20'
                    control={<CustomizedRadio/>}
                    label={<RadioLabel text='ساعت 20-18'/>}/>
            </RadioGroup>
        </FormControl>
    );

};

export default TimePicker;
