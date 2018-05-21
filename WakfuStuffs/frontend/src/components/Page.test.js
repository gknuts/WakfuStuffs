import React from "react";
import { mount } from "enzyme";
import {Page} from "./Page";
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme';
configure({ adapter: new Adapter() });

describe("Page", () => {
  let props;
  let mountedPage;
  const page = () => {
    if (!mountedPage) {
      mountedPage = mount(
        <Page {...props} />
      );
    }
    return mountedPage;
  }

  beforeEach(() => {
    props = {
        page: 1,
        size_page: 3,
        actions: undefined,
        total: 100,
    };
    mountedPage = undefined;
  });

  // All tests will go here
    it("always renders a div", () => {
        const divs = page().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    it("always renders a `Pagination`", () => {
      expect(page().find("Pagination").length).toBe(1);
    });

    describe("always renders a `PaginationLink`", () => {
        const paginationLink = page().find("PaginationLink");
        expect(paginationLink.length).toBeGreaterThan(0);
    });

});