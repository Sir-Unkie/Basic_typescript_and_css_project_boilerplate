import { screen } from '@testing-library/react';

import { render } from '@shared/lib';
import { ValueViewer } from '@shared/ui';

const renderFirstComponent = () => render(<ValueViewer value={0} />);

// TODO: rewrite component and test
describe('Component: ValueViewer', () => {
  it('should render with 0 as initial value', () => {
    renderFirstComponent();
    const divElement = screen.getByText(/value=0/i);

    expect(divElement).toBeInTheDocument();
  });
});
