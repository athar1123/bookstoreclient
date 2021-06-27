import React from "react";
import { render } from "@testing-library/react"
import App from "./App";

describe ("App component", () => {
    it("makes a snapshot and tests", () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
       });
});