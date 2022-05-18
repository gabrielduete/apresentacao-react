import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageImg from '.'

describe('<PageImg />', () => {
  it('should title correctly', () => {
    render(<PageImg title='test' />)

    const title = screen.getByTestId('page-image__title')

    expect(title).toBeInTheDocument()
  })
})
