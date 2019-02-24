import * as React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

interface BuildControlsProps {
  ingredientsRemoved: (type: string) => void;
  ingredientsAdded: (type: string) => void;
  disabledInfo: any;
}

interface Controls {
  [key: string]: string;
}

const BuildControls: React.FunctionComponent<BuildControlsProps> = (props) => {

  const controls: Controls[] = [
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
  ];

  return (
      <div className={classes.BuildControls}>
      {controls.map((ctrl) => (
        <BuildControl
          disabled={props.disabledInfo[ctrl.type]}
          added={() => props.ingredientsAdded(ctrl.type)}
          removed={() => props.ingredientsRemoved(ctrl.type)}
          key={ctrl.label} label={ctrl.label}
        />
      ))}
      </div>
  );
};

export default BuildControls;