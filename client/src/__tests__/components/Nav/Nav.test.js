import React from "react";
import { shallow } from "enzyme";

import { Nav } from "../../../components/Nav/Nav";

it("renders Nav", () => {
  const wrapper = shallow(<Nav />);

  expect(wrapper.find(".nav").length).toBe(1);
});
