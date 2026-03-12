import { render, screen } from '@testing-library/react'
import ProjectCard from '../../app/components/ProjectCard'
import '@testing-library/jest-dom'

const mockProject = {
  id: 'proj1',
  label: 'Portfólio Test',
  description: 'Test description of project.',
  url: 'https://test.com',
  tag: 'freelance',
  delay: 1,
  icon: <svg data-testid="mock-icon"></svg>,
}

describe('ProjectCard Component', () => {
  it('renders the card with correct link, label, and description', () => {
    render(<ProjectCard project={mockProject} />)
    
    // Link structure
    const anchor = screen.getByRole('link')
    expect(anchor).toHaveAttribute('href', 'https://test.com')
    expect(anchor).toHaveAttribute('aria-label', 'Visualizar projeto: Portfólio Test')
    
    // Text content
    expect(screen.getByText('Portfólio Test')).toBeInTheDocument()
    expect(screen.getByText('Test description of project.')).toBeInTheDocument()
    expect(screen.getByText('freelance')).toBeInTheDocument()
    
    // Icon
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument()
  })
})
