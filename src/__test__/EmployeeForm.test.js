import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmployeeForm from "../Pages/Employees/EmployeeForm";

test("Submitting the form with valid data", async () => {
  render(<EmployeeForm />);

  const AllInputFields = document.querySelectorAll("input");
  const firstName = AllInputFields[0];
  const lastName = AllInputFields[1];
  const phone = AllInputFields[2];
  const email = AllInputFields[3];
  const birthday = AllInputFields[4];
  const bloodId = AllInputFields[5];
  const gender = AllInputFields[6];

  // for (let i = 0; i < AllInputFields.length; i++) {
  //   console.log(i, AllInputFields[i].name);
  // }

  fireEvent.change(gender, { target: { value: "Male" } });
  fireEvent.change(firstName, { target: { value: "John" } });
  fireEvent.change(lastName, { target: { value: "Wick" } });
  fireEvent.change(phone, { target: { value: "8123001085" } });
  fireEvent.change(email, { target: { value: "John@gmail.com" } });
  fireEvent.change(birthday, { target: { value: "01/006/1997" } });
  fireEvent.change(bloodId, { target: { value: "1" } });

  expect(firstName).toHaveValue("John");
  expect(lastName).toHaveValue("Wick");
  expect(phone).toHaveValue(8123001085);
  expect(email).toHaveValue("John@gmail.com");
  expect(birthday).toHaveValue("01/006/1997");
  expect(bloodId).toHaveValue("1");
  expect(gender.value).toBe("Male");
});
