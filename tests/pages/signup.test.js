import React from "react";

import { render, screen } from "../test-utils";
import Signup from "@/pages/signup";

describe("Signup", () => {
  it("should render Signup Page", () => {
    render(<Signup />);

    const username = screen.getByPlaceholderText(/Enter username/);
    const password = screen.getByPlaceholderText(/Enter password/);
    const button = screen.getByRole("button");

    expect(username).toBeEnabled();
    expect(password).toBeEnabled();
    expect(button).toBeEnabled();
  });
});
