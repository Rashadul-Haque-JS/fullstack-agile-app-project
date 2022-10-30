import { render } from '@testing-library/react';

import SmartTasksUi from './smart-tasks-ui';

describe('SmartTasksUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmartTasksUi />);
    expect(baseElement).toBeTruthy();
  });
});
