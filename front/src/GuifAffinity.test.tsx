import { render, screen } from '@testing-library/react';
import GuifCard from './components/GuiffCard';

describe('GuifAffinity', () => {
  it('shows the alt tag of a guif', () => {
    // Arrange

    // Act
    render(<GuifCard />)

    // Assert
    expect(screen.getByAltText(/guif/i)).toBeInTheDocument()
  })
})
