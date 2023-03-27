import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SideMenu } from './SideMenu';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
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

test('SideMenu component with countries', () => {
  renderWithRouter(<SideMenu />);
  const polandFlag = screen.getByAltText('Poland Flag');
  const chinaFlag = screen.getByAltText('China Flag');
  const singaporeFlag = screen.getByAltText('Singapore Flag');
  const hongKongFlag = screen.getByAltText('HongKong Flag');
  const swissFlag = screen.getByAltText('Swiss Flag');
  expectToBeInTheDocument(polandFlag);
  expectToBeInTheDocument(chinaFlag);
  expectToBeInTheDocument(singaporeFlag);
  expectToBeInTheDocument(hongKongFlag);
  expectToBeInTheDocument(swissFlag);
});