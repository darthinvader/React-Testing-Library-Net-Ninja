import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render same text pased into title prop", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElement.length).toBe(5);
  });
});
