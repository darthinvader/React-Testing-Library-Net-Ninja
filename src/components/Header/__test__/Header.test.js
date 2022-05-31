import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text pased into title prop", () => {
  render(<Header title="MY HEADER" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should render a heading", () => {
//   render(<Header title="MY HEADER" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// test("should render heading with my header", () => {
//   render(<Header title="MY HEADER" />);
//   const headingElement = screen.getByRole("heading", { name: "MY HEADER" });
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text pased into title prop", () => {
//   render(<Header title="MY HEADER" />);
//   const headingElement = screen.getByTestId("header1");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text pased into title prop async", async () => {
//   render(<Header title="MY HEADER" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// //QueryBy
// it("should render same text pased into title prop Query", () => {
//   render(<Header title="MY HEADER" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("should render same text pased into title prop getallBy", () => {
//   render(<Header title="MY HEADER" />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
