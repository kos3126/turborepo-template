import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelloWorld } from '@/components'

describe('tests', () => {
  it('should', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Boop')).toBeInTheDocument()
  })
})
