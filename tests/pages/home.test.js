import React from "react";

import { render, screen } from "../test-utils";
import Home from "@/pages/home";

describe("Home", () => {
  it("should render Home Page", () => {
    render(<Home />);

    const heading = screen.getByText(/Welcome/i);

    expect(heading).toBeInTheDocument();
  });
});

describe("Home", () => {
  it("can process data", () => {
    render(<Home />);

    const processBtn = screen.getByText(/Process/);

    expect(processBtn).toBeEnabled();
  });
});

describe("Home", () => {
  it("can fetch data", () => {
    render(<Home />);

    const fetchBtn = screen.getByText(/Fetch/);

    expect(fetchBtn).toBeEnabled();
  });
});
