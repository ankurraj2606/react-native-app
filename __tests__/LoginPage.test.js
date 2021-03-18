import 'react-native';
import React from 'react';
import Loginpage from '../components/Loginpage';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



describe("Loginpage", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Loginpage/>);
  });
});