import React from "react";
import renderer from "react-test-renderer";

import Counter from "../../../components/counter/counter";

describe("<Counter />", () => {
  it("is Alive", () => {
    let component = shallow(<Counter />);
    expect(component.find("span").exists()).toBeTruthy();
  });

  it("changes state on a click", () => {
    let component = mount(<Counter />);
    let button = component.find("button");
    button.simulate("click");
    expect(component.state("stuff")).toBe(false);
    expect(component.find("span").text()).toContain("false");
  });

  it("renders correctly", () => {
    const tree = renderer.crete(<Counter />).toJson();
    expect(tree).toMatchSnapSHot();
  });
});
