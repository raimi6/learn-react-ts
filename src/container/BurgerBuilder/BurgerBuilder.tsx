import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import * as React from 'react';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

export interface BurgerBuilderState {
  ingredients: {
    [key: string]: number;
  };
  totalPrice: number;
  performeCheckout: boolean;
}

interface IngredientPrice {
  [index: string]: number;
}

interface DissabldInfo {
  [key: string]: boolean;
}

const INGREDIENT_PRICES: IngredientPrice = {
  bacon: 0.6,
  cheese: 100,
  meat: 0.2,
  salad: 0.5,
};

export default class BurgerBuilder extends React.Component<{}, BurgerBuilderState> {
  constructor(props: any) {
    super(props);

    this.state = {
      ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 1,
      },
      performeCheckout: false,
      totalPrice: 0,
    };
  }

  addIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };

    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
  }

  removeIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };

    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updateIngredients});
  }

  checkoutButtonHandler = (): void => {
    this.setState({performeCheckout: !this.state.performeCheckout});
  }

  render() {

    const disabledInfo: any = {
      ...this.state.ingredients,
    };

    for (const key in disabledInfo) {
      if (disabledInfo.hasOwnProperty(key)) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
    }

    return (
        <React.Fragment>
          <Modal  isOpen={this.state.performeCheckout}>
            <OrderSummary ingredients={this.state.ingredients}/>
          </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <div>
              <BurgerControls
                disabledInfo={disabledInfo}
                ingredientsAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
              />
            </div>
            <DefaultButton  onClick={this.checkoutButtonHandler}/>
        </React.Fragment>
    );
  }
}
