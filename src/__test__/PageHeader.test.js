import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageHeader from "../Components/PageHeader";
import AbcIcon from "@mui/icons-material/Abc";

test("Test title, subTitle and icon are rendering", () => {
  const title = "Emplpyee Management";
  const subTitle = "Larsen and Toubro Technology Services";
  const icon = <AbcIcon />;
  render(<PageHeader title={title} subTitle={subTitle} icon={icon} />);
  const testTitle = screen.getByText(title);
  const testSubTitle = screen.getByText(subTitle);
  const testIcon = screen.getByTestId("icon");
  expect(testTitle).toBeInTheDocument();
  expect(testSubTitle).toBeInTheDocument();
  expect(testIcon).toBeInTheDocument();
});
