import { configureStore } from "@reduxjs/toolkit";
import settingsSlice, { toggleView } from "./settingsSlice";

const test = (description: string, testFunction: () => void) => {
  console.log(description);
  testFunction();
};

const expectToEqual = (actual: any, expected: any) => {
  if (actual !== expected) {
    throw new Error(`Expected ${actual} to equal ${expected}`);
  }
};

const store = configureStore({
  reducer: {
    settings: settingsSlice,
  },
});

test('toggles view from "list" to "grid"', () => {
  store.dispatch(toggleView());
  const currentState = store.getState().settings;

  expectToEqual(currentState.view, "grid");
});

test('toggles view from "grid" to "list"', () => {
  store.dispatch(toggleView());
  const currentState = store.getState().settings;

  expectToEqual(currentState.view, "list");
});
