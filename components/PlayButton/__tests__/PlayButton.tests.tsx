/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayButton } from '../PlayButton';

const onClick = jest.fn();

describe(`<PlayButton />`, () => {
  it(`shoould call onClick prop onClick`, () => {
    render(<PlayButton onClick={onClick} accent />);
    userEvent.click(screen.getByText(/Play/).closest(`button`) as HTMLButtonElement);
    expect(onClick).toBeCalledTimes(1);
  });
});
