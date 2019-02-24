import * as React from 'react';
import styles from './Layout.module.scss';

const Layout: React.FunctionComponent<{}> = (props) => {
  return (
      <React.Fragment>
        <div>Toolbars,sidedrawer,backdrop</div>
        <main>{props.children}</main>
      </React.Fragment>
  );
};

export default Layout;