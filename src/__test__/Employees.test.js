import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Employees from "../Pages/Employees/Employees";

describe("Testing the Employee page", () => {
  test("testing the employees page is rendered", () => {
    render(<Employees />);
    // const placeHolderText = screen.getByPlaceholderText("Search");
    // expect(placeHolderText).toBeInTheDocument();
  });
});
