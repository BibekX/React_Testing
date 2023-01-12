import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading from "../Heading";

test("check the snapshot", () => {
  let tree = renderer.create(<Heading />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("check if Learn Angular exists in Heading", async () => {
  //Arrange
  render(<Heading />);

  //Act
  const headingElement = screen.queryAllByText(/^learn angular/i);
  const headingElement2 = screen.getByRole("heading");
  const headingElement3 = screen.getByPlaceholderText("username");

  //Assert
  expect(headingElement).toBeInTheDocument();
  expect(headingElement2).toBeInTheDocument();
  expect(headingElement3).toBeInTheDocument();

  // FIRE EVENT
  const inputElement = screen.getByPlaceholderText("username");
  fireEvent.change(inputElement, { target: { value: "Brock" } });
  expect(inputElement.value).toBe("Brock");
});
