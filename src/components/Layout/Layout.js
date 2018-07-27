import React from 'react';
import Aux from '../../hoc/Aux';

const layout = props => (
  <Aux>
    <div>Tool bar, SideDrawer, backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

let x;

export default layout;
