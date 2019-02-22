import * as React from 'react';

interface LayoutProps {
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return (
      <React.Fragment>
        <div>Tollbas,sidedrawer,backdrop</div>
        <main>{props.children}</main>
      </React.Fragment>
  );
};

export default Layout;