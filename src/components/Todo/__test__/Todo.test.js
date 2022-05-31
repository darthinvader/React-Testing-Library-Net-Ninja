import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo", () => {
  it("Should render input element", async () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
    // const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    // expect(inputElement).toBeInTheDocument();
  });

  const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    tasks.forEach((task) => {
      fireEvent.change(inputElement, {
        target: { value: task },
      });
      fireEvent.click(buttonElement);
    });
  };
  it("Should render input element into list", async () => {
    render(<MockTodo />);
    addTasks(["Go Grocerry Shopping", "Pet My Cat", "Wash my hands"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  it("Task should not have completed class when clicked", async () => {
    render(<MockTodo />);
    addTasks(["Go Grocerry Shopping"]);
    const divElement = screen.getByText(/Go Grocerry Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
