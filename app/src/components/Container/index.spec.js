import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Container from '.'

describe('<Container />', () => {
  it('should render container correctly', () => {
    render(<Container />)

    const container = screen.getByTestId('container-layout__container')

    expect(container).toBeInTheDocument()
  })
})
