import React from 'react';
import classes from './BuildControl.css';

export default (props) => (
    // this div is for wrapping and styling
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove}>Less</button>
        <button className={classes.More} onClick={props.add}>More</button>
    </div>
)