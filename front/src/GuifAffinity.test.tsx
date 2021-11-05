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
  it('shows an image', () => {
    // Arrange

    // Act
    render(<GuifCard />)
    const image = screen.getByAltText(/guif/i);

    // Assert
    expect(image).toContain('https://media4.giphy.com/media');
  })
})
