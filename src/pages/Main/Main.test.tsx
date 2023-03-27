import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../../articleSlice';
import { Main } from './Main';

const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});

const renderWithProviders = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
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

test('Header component', () => {
  renderWithProviders(<Main />);
  const headerElement = screen.getByRole('banner');
  expectToBeInTheDocument(headerElement);
});

test('Body component', () => {
  renderWithProviders(<Main />);
  const bodyElement = screen.getByText(/Najświeższe Wiadomości/i);
  expectToBeInTheDocument(bodyElement);
});

test('Footer component', () => {
  renderWithProviders(<Main />);
  const footerElement = screen.getByText(/News on the page/i);
  expectToBeInTheDocument(footerElement);
});