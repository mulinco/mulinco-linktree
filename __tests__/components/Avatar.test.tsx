import { render, screen, fireEvent } from '@testing-library/react'
import Avatar from '../../app/components/Avatar'
import '@testing-library/jest-dom'

describe('Avatar Component', () => {
  it('renders the initial Goth avatar correctly', () => {
    render(<Avatar isKawaii={false} />)
    
    // Goth avatar image should be visible (opacity-100)
    const gothImage = screen.getByAltText('Avatar Gótico')
    expect(gothImage).toBeInTheDocument()
    expect(gothImage.parentElement?.parentElement).toHaveClass('opacity-100')
    
    // Kawaii avatar should be hidden (opacity-0)
    const kawaiiImage = screen.getByAltText('Avatar Kawaii')
    expect(kawaiiImage).toBeInTheDocument()
    expect(kawaiiImage.parentElement?.parentElement).toHaveClass('opacity-0')
  })

  it('renders the Kawaii avatar correctly', () => {
    render(<Avatar isKawaii={true} />)
    
    // Kawaii avatar image should be visible
    const kawaiiImage = screen.getByAltText('Avatar Kawaii')
    expect(kawaiiImage).toBeInTheDocument()
    expect(kawaiiImage.parentElement?.parentElement).toHaveClass('opacity-100')
    
    // Goth avatar should be hidden
    const gothImage = screen.getByAltText('Avatar Gótico')
    expect(gothImage).toBeInTheDocument()
    expect(gothImage.parentElement?.parentElement).toHaveClass('opacity-0')
  })

  it('triggers double click event', () => {
    const mockDoubleClick = jest.fn()
    render(<Avatar isKawaii={false} onDoubleClick={mockDoubleClick} />)
    
    const wrapper = screen.getByTitle('duplo-clique para trocar seu tema')
    fireEvent.doubleClick(wrapper)
    
    expect(mockDoubleClick).toHaveBeenCalledTimes(1)
  })
})
