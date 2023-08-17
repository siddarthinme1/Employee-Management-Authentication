import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Popup from "../Components/Popup";

test("Test icon is rendering", () => {
  const title = "Add Employee";
  render(<Popup title={title} openPopup={1} />);
  const testTitle = screen.getByRole("heading");
  expect(testTitle).toBeInTheDocument();
});
