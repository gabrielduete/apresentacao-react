import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import PageFullText from '.'

describe('<PageImg />', () => {
  it('should title correctly', () => {
    render(<PageFullText title='test' />)

    const title = screen.getByTestId('page-image__title')

    expect(title).toBeInTheDocument()
  })
})
