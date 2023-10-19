import { Sidebar } from "./Sidebar"
import { fireEvent, screen } from "@testing-library/react"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('classNames', () => {
  test('with only one param', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  })

  test('test toogle', () => {
    renderWithTranslation(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  })
})