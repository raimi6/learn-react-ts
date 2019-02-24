import * as React from 'react';

interface OrderSummaryProps {
    ingredients: {
        [key: string]: number,
    };
}

const OrderSummary: React.FunctionComponent<OrderSummaryProps> = (props) => {
  return (
      <div>
            <ul>
                {
                    Object.keys(props.ingredients).map((ingr,igKey) => {
                    return <li key={igKey}>{igKey} { ingr[igKey] }</li>;
                })
                }
            </ul>
      </div>
  );
};

export default OrderSummary;