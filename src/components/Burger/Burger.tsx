import * as React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngreadients/BurgerIngredient';

interface BurgerProps {
    ingredients: {
        [key: string]: number;
    };
}

const Burger: React.FunctionComponent<BurgerProps> = (props) => {
    let transformedIngreadients: any = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={i + igKey} type={igKey}/>;
            });
        }).reduce((arr: any[], el) => {
            return arr.concat(el);
        }, []);
    if (transformedIngreadients.length === 0) {
            transformedIngreadients = <div>Please start adding ingredients!</div>;

    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngreadients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
  );
};

export default Burger;