import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../client/Container';
import LineGraph from '../client/components/LineGraph';
import { propTypes } from 'react-codemirror';
// // import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('renders without crashing', () => {
  beforeEach(() => {
    queryHistory: ['SELECT * FROM address;'];
  });

  it('renders Container', () => {
    shallow(<LineGraph />);
  });
});
