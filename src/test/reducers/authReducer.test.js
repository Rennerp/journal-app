import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en auth reducer", () => {
  test("Debe de realizar el login", () => {
    const initState = {};

    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "Renner",
      },
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      uid: "abc",
      name: "Renner",
    });
  });

  test("Debe de realizar el logout", () => {
    const initState = {
      uid: "asdasdasds",
      name: "Renner",
    };

    const action = {
      type: types.logout,
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });

  test("No debe de realizar cambios en el state", () => {
    const initState = {
      uid: "asdasdasds",
      name: "Renner",
    };

    const action = {
      type: "adasdasd",
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
