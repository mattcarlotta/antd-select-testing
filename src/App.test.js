import { mount } from "enzyme";
import { waitForAct } from "@noshot/utils";
import App from "./App";

const wrapper = mount(<App />);

describe("App", () => {
  it("updates the select input value when an option is clicked", async () => {
    expect(wrapper.find(".ant-select-selection-item")).toHaveText("Lucy");

    wrapper.find(".ant-select-selector").simulate("mousedown");

    await waitForAct(() => {
      wrapper.update();
      expect(wrapper.find(".ant-select-item").length).toEqual(4);
    });

    wrapper.find(".ant-select-item").first().simulate("click");

    await waitForAct(() => {
      wrapper.update();
      expect(wrapper.find(".ant-select-selection-item")).toHaveText("Jack");
    });
  });
});
