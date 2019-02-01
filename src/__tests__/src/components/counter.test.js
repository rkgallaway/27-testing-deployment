import React from "react";
import renderer from "react-test-renderer";

import Counter from "../../../components/counter/counter";

describe("<Counter />", () => {
  it("is Alive", () => {
    let component = shallow(<Counter />);
    expect(component.find(".count").text()).toBe('0');
  });

  it('can ccount up', () =>{
    let app = mount(<Counter />);
    app.find('.up').simulate('click');
    expect(app.state('count')).toEqual(1);
    app.find('.up').simulate('click');
    expect(app.state('count')).toEqual(2);
  });

  it('can ccount down', () =>{
    let app = mount(<Counter />);
    app.find('.down').simulate('click');
    expect(app.state('count')).toEqual(-1);
    app.find('.down').simulate('click');
    expect(app.state('count')).toEqual(-2);
  });

  it('visually displays proper polarity ad value on the counter', () =>{
    let app = mount(<Counter />);
    //at 0
    expect(app.find('.count.positive').exists()).toBeFalsy();
    expect(app.find('.count.negative').exists()).toBeFalsy();
    // at 1
    app.find('.up').simulate('click');
    expect(app.find('.count.positive').exists()).toBeTruthy();
    expect(app.find('.count').text()).toBe('1');
    //back down to 0
    app.find('.down').simulate('click');
    expect(app.find('.count').text()).toBe('0');
    expect(app.find('.count.positive').exists()).toBeFalsy();
    expect(app.find('.count.negative').exists()).toBeFalsy();
    //down to -1
    app.find('.down').simulate('click');
    expect(app.find('.count.negative').exists()).toBeTruthy();
    expect(app.find('.count').text()).toBe('-1');
  });
});

describe('Counter /> Core Component (Snapshot Test)', () =>{
  it('renders right', () =>{
    const component = renderer.create(<Counter />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});