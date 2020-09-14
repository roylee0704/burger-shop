import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

// this is a single page, it will be container.
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'cheese': 0,
            'meat': 0,
            'salad': 0,
            'bacon': 0,
        }
    }

    addIngredientHandler = () => {
        console.log('add!');
    };

    removeIngredientHandler = () => {
        console.log('remove!');
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls add={this.addIngredientHandler} remove={this.removeIngredientHandler} />
            </Aux>
        );
    }
}


export default BurgerBuilder;