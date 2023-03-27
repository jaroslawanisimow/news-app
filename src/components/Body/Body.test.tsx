import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../../articleSlice';
import settingsReducer from '../../settingsSlice';
import { Body } from './Body';
 
const store = configureStore({
  reducer: {
    articles: articleReducer,
    settings: settingsReducer,
  },
});

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

test('main title', () => {
  renderWithProviders(<Body translationLanguage="" />);
  const mainTitle = screen.getByText(/Najświeższe Wiadomości/i);
  expectToBeInTheDocument(mainTitle);
});

test('country name', () => {
  renderWithProviders(<Body translationLanguage="" />);
  const countryName = screen.getByText('Poland');
  expectToBeInTheDocument(countryName);
});

test('news container', () => {
  renderWithProviders(<Body translationLanguage="" />);
  const newsContainer = screen.queryByTestId('news-container');
  if (newsContainer) {
    expectToBeInTheDocument(newsContainer);
  }
});
