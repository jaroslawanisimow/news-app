import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../../settingsSlice';
import Header from './Header';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

const onTranslateClickMock = () => {};

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};

const test = (description: string, testFunction: () => void) => {
  console.log(description);
  testFunction();
};

const expectToBeInTheDocument = (element: HTMLElement | null) => {
  if (!element) {
    throw new Error('Element was not found.');
  }
};

test('header with logo', () => {
  renderWithProviders(<Header onTranslateClick={onTranslateClickMock} />);
  const logo = screen.getByTestId('logo');
  expectToBeInTheDocument(logo);
});

test('header with notification icon', () => {
  renderWithProviders(<Header onTranslateClick={onTranslateClickMock} />);
  const notificationIcon = screen.getByLabelText('user');
  expectToBeInTheDocument(notificationIcon);
});

test('header with translate icon', () => {
  renderWithProviders(<Header onTranslateClick={onTranslateClickMock} />);
  const translateIcon = screen.getByTestId('translate icon');
  expectToBeInTheDocument(translateIcon);
});