import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestTabs from "../Components/TestTabs";

test("Test Tabs", () => {
  render(<TestTabs />);
  const tabOne = screen.getByText("Item One");
  expect(tabOne).toBeInTheDocument();
  fireEvent.click(tabOne);
  const subtab = screen.getByText("SubItem One");
  expect(subtab).toBeInTheDocument();

  const tabTwo = screen.getByText("Item Two");
  expect(tabTwo).toBeInTheDocument();
  fireEvent.click(tabTwo);
  const subtab2 = screen.getByText("SubItem Two");
  expect(subtab2).toBeInTheDocument();
});
