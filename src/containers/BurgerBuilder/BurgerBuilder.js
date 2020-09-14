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

    addIngredientHandler = (type) => {
        this.setState((prevState) => {
            const curr = {
                ...prevState
            };

            curr.ingredients[type] = curr.ingredients[type] + 1;
            return curr;
        });
    };

    removeIngredientHandler = (type) => {
        this.setState((prevState) => {
            const curr = {
                ...prevState
            };

            curr.ingredients[type] = curr.ingredients[type] - 1;
            return curr;
        });
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls added={this.addIngredientHandler} removed={this.removeIngredientHandler} />
            </Aux>
        );
    }
}


export default BurgerBuilder;