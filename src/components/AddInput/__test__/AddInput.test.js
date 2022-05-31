import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("Add Input", () => {
  it("Should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Should be able to type to input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("Should have empty input when button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
