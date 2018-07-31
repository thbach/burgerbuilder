import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{
          props.ingredients[igKey]
        }
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p> a delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      <Button btnType={'Danger'} clicked={props.cancel}>
        CANCEL
      </Button>
      <Button btnType={'Success'} clicked={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
