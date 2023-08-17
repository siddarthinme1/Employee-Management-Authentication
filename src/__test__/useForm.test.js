import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useForm } from "../Components/useForm";

const validate = (fieldValues) => {
  let errors = {};
  if (!fieldValues.name) {
    errors.name = "Name is required";
  }
  return errors;
};

test("Form renders without errors", () => {
  render(<useForm />);
});

test("useForm handles input change and validation", () => {
  const initialFieldValues = {
    name: "",
    email: "",
  };

  render(
    <useForm
      initialFieldValues={initialFieldValues}
      validateOnChange={true}
      validate={validate}
    />
  );

  const nameInput = screen.queryByLabelText("Name");
  const emailInput = screen.queryByLabelText("Email");
  const button = screen.queryByRole("button");

  // fireEvent.change(nameInput, { target: { value: "John" } });

  // expect(nameInput).toBeInTheDocument();
  // if (nameInput) {
  //   fireEvent.change(nameInput, { target: { value: "John" } });
  // }
  // fireEvent.change(emailInput, {
  //   target: { value: "invalid_email" },
  // });
  // fireEvent.click(button);
});
