import * as React from "react";
import { render } from "@testing-library/react";
import { LoginBox } from "../index.tsx";

const setUser = (id: number) => {};
const setLoginSignupState = (loginState: number) => {};

describe("Testing LoginBox component", () => {
  test("If component renders without crashing", () => {
    const { getByTestId } = render(
      <LoginBox
        setUser={setUser}
        loginSignup={0}
        setLoginSignup={setLoginSignupState}
      />
    );
    const controlElement = getByTestId("loginbox");
    expect(controlElement).toBeInTheDocument();
  });
});
