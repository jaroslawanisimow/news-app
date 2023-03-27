import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../../articleSlice';
import { Footer } from './Footer';

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
    throw new Error('Element not found');
  }
};

test('the current time', () => {
  renderWithProviders(<Footer />);
  const currentTime = screen.getByText(/\d{1,2}:\d{2}:\d{2}/);
  expectToBeInTheDocument(currentTime);
});

test('number of news on the page', () => {
  renderWithProviders(<Footer />);
  const newsCount = screen.getByText(/News on the page/i);
  expectToBeInTheDocument(newsCount);
});
