import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
// import "@testing-library/jest-dom";

test("renders search input with correct placeholder", () => {
  render(<Header />);
  const placeHolderText = screen.getByPlaceholderText("Search");
  expect(placeHolderText).toBeInTheDocument();
});

test("Pass some text to test search input", () => {
  render(<Header />);
  const searchInput = screen.getByPlaceholderText("Search");
  fireEvent.change(searchInput, { target: { value: "Hello" } });
  expect(searchInput.value).toBe("Hello");
});

test("Changes background color on mouse over", async () => {
  render(<Header />);
  const hoverOnSearch = screen.getByTestId("searchInput");
  expect(hoverOnSearch).toHaveStyle("backgroundColor: 'white';");
  fireEvent.mouseOver(hoverOnSearch);
  expect(hoverOnSearch).toHaveStyle("backgroundColor: '#F2F2F2';");
});

test("renders the switch component", () => {
  render(<Header />);
  const switchComponent = screen.getByRole("checkbox");
  expect(switchComponent).toBeInTheDocument();
});

test("renders four buttons", async () => {
  render(<Header />);
  const items = await screen.findAllByRole("button");
  expect(items).toHaveLength(4);
});
