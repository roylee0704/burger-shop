import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

// this is a single page, it will be container.
const INGREDIENT_PRICES = {
    'cheese': 0.4,
    'meat': 1.3,
    'salad': 0.5,
    'bacon': 1.5,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'cheese': 0,
            'meat': 0,
            'salad': 0,
            'bacon': 0,
        },
        totalPrice: 4,
    };

    addIngredientHandler = (type) => {
        this.setState((prevState) => {
            const curr = {
                ...prevState
            };

            curr.ingredients[type] = curr.ingredients[type] + 1;
            curr.totalPrice = curr.totalPrice + INGREDIENT_PRICES[type];
            return curr;
        });
    };

    removeIngredientHandler = (type) => {
        this.setState((prevState) => {
            const curr = {
                ...prevState
            };

            curr.ingredients[type] = curr.ingredients[type] - 1;
            curr.totalPrice = curr.totalPrice - INGREDIENT_PRICES[type];

            return curr;
        });
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>{this.state.totalPrice}</div>
                <BurgerControls ingredientAdded={this.addIngredientHandler} removed={this.removeIngredientHandler} />
            </Aux>
        );
    }
}


export default BurgerBuilder;