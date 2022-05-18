import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageFullText from '.'

describe('<PageImg />', () => {
  it('should title correctly', () => {
    render(<PageFullText title='test' />)

    const title = screen.getByTestId('page-image__title')

    expect(title).toBeInTheDocument()
  })
})
