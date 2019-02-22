import * as React from 'react';

export interface BurgerBuilderProps {
}

export interface BurgerBuilderState {
}

export default class BurgerBuilder extends React.Component<BurgerBuilderProps, BurgerBuilderState> {
  constructor(props: BurgerBuilderProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
        <React.Fragment>
            <div>Burger</div>
            <div>Build controls</div>
        </React.Fragment>        
    );
  }
}
