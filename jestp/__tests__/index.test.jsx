import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a test', () => {
    render(<Home />)
    const test = screen.getByText('Test')
    expect(test).toBeInTheDocument()
  })
})