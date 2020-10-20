import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../client/Container';
import LineGraph from '../client/components/LineGraph';
import Sidebar from '../client/components/Sidebar';
import { propTypes } from 'react-codemirror';
// import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('renders without crashing', () => {
  beforeEach(() => {
    queryHistory: ['SELECT * FROM address;'];
  });

  xit('renders Container', () => {
    shallow(<Container />);
  });
  it('renders LineGraph', () => {
    shallow(<LineGraph />);
  });
});

// describe('math', () => {
//   it('test', () => {
//     expect(2).toEqual(2);
//   });
// });
