import { render, screen } from '@testing-library/react';
import GuifAffinity from './GuifAffinity';

describe('GuifAffinity', () => {
  it('shows a guif', () => {
    // Arrange

    // Act
    render(<GuifAffinity />)

    // Assert
    expect(screen.getByAltText(/guif/i)).toBeInTheDocument()
  })
})
