/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import { Header } from '../Header';
import { MockedProvider } from '@apollo/client/testing';

jest.spyOn(require(`next/router`), `useRouter`).mockImplementation(() => ({
  route: `/`,
}));

describe(`<Header />`, () => {
  it(`should always have the netflix logo`, async () => {
    render(
      <MockedProvider>
        <Header />
      </MockedProvider>
    );
    expect(screen.getByAltText(/Netflix Logo/)).toHaveAttribute(`title`, `Return to home page`);
  });

  it(`should have a search form`, async () => {
    render(
      <MockedProvider>
        <Header />
      </MockedProvider>
    );
    const input = screen.getByTitle(/What are you looking for\?/) as HTMLInputElement;
    expect(input?.value).toBe(``);
  });
});
