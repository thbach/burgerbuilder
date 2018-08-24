import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NaviagationItems from './NavigationItems';
import NaviagationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NaviagationItems />);
  });

  it('should render two <NaviagationItems /> elements if not auth', () => {
    expect(wrapper.find(NaviagationItem)).toHaveLength(2);
  });

  it('should render three <NaviagationItems /> elements if auth', () => {
    wrapper.setProps({isAuth: true});
    expect(wrapper.find(NaviagationItem)).toHaveLength(3);
  });

  it('should render logout /> elements if auth', () => {
    wrapper.setProps({isAuth: true});
    expect(
      wrapper.contains(<NaviagationItem link="/logout">Logout</NaviagationItem>)
    ).toEqual(true);
  });
});
