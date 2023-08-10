import {
  Checkbox,
  Grid,
  FormControlLabel,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Form } from "../../Components/useForm";
import Control from "../../Controls/Control";
import {
  getBloodCollection,
  getRelation,
} from "../../Services/EmployeeServiceData";

const genderItems = [
  {
    id: "Male",
    title: "Male",
  },
  {
    id: "Female",
    title: "Female",
  },
  {
    id: "Other",
    title: "Other",
  },
];

const initialFieldValues = {
  id: 0,
  gender: "Male",
  firstName: "",
  lastName: "",
  phone: "",
  mail: "",
  birthday: new Date(),
  bloodId: 1,
  streetAddress: "",
  streetAddress2: "",
  city: "",
  state: "",
  country: "",
  zipcode: "",
  genderx: "Male",
  firstNamex: "",
  lastNamex: "",
  relationxId: 1,
  phonex: "",
  streetAddressx: "",
  streetAddress2x: "",
  cityx: "",
  statex: "",
  countryx: "",
  zipcodex: "",
};

function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required.";
    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required.";
    if ("mail" in fieldValues)
      temp.mail = /$^|.+@.+..+/.test(fieldValues.mail)
        ? ""
        : "Email is not Valid.";
    if ("phone" in fieldValues)
      temp.phone =
        fieldValues.phone.length > 9 && fieldValues.phone.length <= 10
          ? ""
          : "This field is required.";
    if ("bloodId" in fieldValues)
      temp.bloodId =
        fieldValues.bloodId.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, resetForm, handleInputChange } =
    useForm(initialFieldValues, true, validate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
      // window.alert("validated");
    }
  };

  useEffect(() => {
    if (recordForEdit != null) {
      setValues({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container sx={{ maxHeight: 700, width: "100%" }}>
          <CardContent>
            <Typography>Personal Details</Typography>
            <Grid container>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="phone"
                  label="Phone Number"
                  type="number"
                  value={values.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="mail"
                  label="Email"
                  value={values.mail}
                  onChange={handleInputChange}
                  error={errors.mail}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.DatePicker
                  name="birthday"
                  label="Birthday"
                  value={values.birthday}
                  onChange={handleInputChange}
                ></Control.DatePicker>
              </Grid>
              <Grid xs={12} sm={2} item>
                <Control.Select
                  name="bloodId"
                  label="Blood"
                  value={values.bloodId}
                  onChange={handleInputChange}
                  options={getBloodCollection()}
                  error={errors.bloodId}
                ></Control.Select>
              </Grid>
              <Grid xs={12} sm={4} item>
                <Control.RadioGroup
                  name="gender"
                  label="Gender"
                  value={values.gender}
                  onChange={handleInputChange}
                  items={genderItems}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="streetAddress"
                  label="Street Address"
                  value={values.streetAddress}
                  onChange={handleInputChange}
                  error={errors.streetAddress}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="streetAddress2"
                  label="Street Address Line 2"
                  value={values.streetAddress2}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="state"
                  label="State"
                  value={values.state}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="country"
                  label="Country"
                  value={values.country}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="zipcode"
                  label="Zip Code"
                  value={values.zipcode}
                  onChange={handleInputChange}
                  error={errors.zipcode}
                />
              </Grid>
            </Grid>

            <Typography>Emergency Contact Details</Typography>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="firstNamex"
                  label="First Name"
                  value={values.firstNamex}
                  onChange={handleInputChange}
                  error={errors.firstNamex}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="lastNamex"
                  label="Last Name"
                  value={values.lastNamex}
                  onChange={handleInputChange}
                  error={errors.lastNamex}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Select
                  name="relationxId"
                  label="Relation"
                  value={values.relationxId}
                  onChange={handleInputChange}
                  options={getRelation()}
                  error={errors.relationxId}
                ></Control.Select>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="phonex"
                  type="number"
                  label="Phone"
                  value={values.phonex}
                  onChange={handleInputChange}
                  error={errors.phonex}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="streetAddressx"
                  label="Street Address"
                  value={values.streetAddressx}
                  onChange={handleInputChange}
                  error={errors.streetAddressx}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="streetAddress2x"
                  label="Street Address Line 2"
                  value={values.streetAddress2x}
                  onChange={handleInputChange}
                  error={errors.streetAddress2x}
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="cityx"
                  label="City"
                  value={values.cityx}
                  onChange={handleInputChange}
                  error={errors.cityx}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="statex"
                  label="State"
                  value={values.statex}
                  onChange={handleInputChange}
                  error={errors.statex}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="countryx"
                  label="Country"
                  value={values.countryx}
                  onChange={handleInputChange}
                  error={errors.countryx}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.Input
                  name="zipcodex"
                  label="Zip Code"
                  value={values.zipcodex}
                  onChange={handleInputChange}
                  error={errors.zipcodex}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <Control.RadioGroup
                  name="genderx"
                  label="Gender"
                  value={values.genderx}
                  onChange={handleInputChange}
                  items={genderItems}
                />
              </Grid>
              <FormControlLabel
                required
                control={<Checkbox checked />}
                label="I agree to the terms and conditions as set out by the user agreement."
              />
              <div>
                <Control.Button type="submit" text="Submit" />
                <Control.Button
                  color="default"
                  text="Reset"
                  onClick={resetForm}
                />
              </div>
            </Grid>
          </CardContent>
        </Grid>
      </Form>
    </>
  );
}

export default EmployeeForm;
