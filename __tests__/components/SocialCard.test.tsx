import { render, screen } from '@testing-library/react'
import SocialCard from '../../app/components/SocialCard'
import '@testing-library/jest-dom'

const mockLink = {
  id: 'github',
  label: 'GitHub Test',
  username: 'mulinco_test',
  url: 'https://github.com/mulinco_test',
  icon: <svg data-testid="mock-icon"></svg>,
  delay: 1,
}

describe('SocialCard Component', () => {
  it('renders the card with correct link and label', () => {
    render(<SocialCard link={mockLink} />)
    
    // Should have a link with correct href
    const cardAnchor = screen.getByRole('link')
    expect(cardAnchor).toHaveAttribute('href', 'https://github.com/mulinco_test')
    
    // Should have aria-label for accessibility
    expect(cardAnchor).toHaveAttribute('aria-label', 'Visitar perfil de mulinco_test no GitHub Test')
    
    // Should display label and username
    expect(screen.getByText('GitHub Test')).toBeInTheDocument()
    expect(screen.getByText('mulinco_test')).toBeInTheDocument()
    
    // Should render the icon
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })
})
