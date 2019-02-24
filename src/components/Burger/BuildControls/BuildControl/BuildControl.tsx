import * as React from 'react';
import classes from './BuildControl.module.scss';

interface BuildControlProps {
    label: string;
    removed: any;
    added: any;
    disabled: any;
}

const buildControl: React.FunctionComponent<BuildControlProps> = (props) => {
  return (
      <div className={classes.BuildControl}>
      <div className={classes.Label}>
          {props.label}
      </div>
          <button disabled={props.disabled} onClick={props.removed} className={classes.Less}>Less</button>
          <button onClick={props.added} className={classes.More}>More</button>
      </div>
  );
};

export default buildControl;