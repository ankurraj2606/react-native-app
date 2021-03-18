import 'react-native';
import React from 'react';
import About from '../components/About';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



describe("About", () => {
  it("should render my component", () => {
    const wrapper = shallow(<About />);
  });
});