/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MoreInfoButton } from '../MoreInfoButton';

const onClick = jest.fn();

describe(`<MoreInfoButton />`, () => {
  it(`shoould call onClick prop onClick`, () => {
    render(<MoreInfoButton onClick={onClick} accent />);
    userEvent.click(screen.getByText(/More Info/).closest(`button`) as HTMLButtonElement);
    expect(onClick).toBeCalledTimes(1);
  });
});
