import 'react-native';
import React from 'react';
import Dashboard from '../components/Dashboard';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



describe("Dashboard", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Dashboard />);
  });
});