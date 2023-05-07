import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';

import { FirstComponent } from '@shared';

const renderFirstComponent = () => render(<FirstComponent />);

// TODO: rewrite component and test
describe('Component: FirstComponent', () => {
  it('should render 0 initial value', () => {
    renderFirstComponent();
    const divElement = screen.getByText(/value=0/i);

    expect(divElement).toBeInTheDocument();
  });
});
