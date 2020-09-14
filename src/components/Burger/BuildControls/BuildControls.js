import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


export default (props) => (
    <div className={classes.BuildControls}>
        {
            controls.map(c => <BuildControl label={c.label} add={props.add} remove={props.remove} />)
        }
    </div>
);