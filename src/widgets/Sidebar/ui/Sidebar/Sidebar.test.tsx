import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('classNames', () => {
  test('with only first param', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toogle', () => {
    componentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
