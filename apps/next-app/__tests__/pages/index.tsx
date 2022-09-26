import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'

import Home from '@/pages/index'

type Operation = 'add' | 'subtract' | 'multiply' | 'divide'

function setup() {
  render(<Home />)
}

function validateRendering(testIds: string[]) {
  testIds.forEach(id => {
    expect(screen.getByTestId(id)).toBeInTheDocument()
  })
}

function calculate(operation: Operation, n1: number, n2: number) {
  setup()

  const num1Input = screen.getByTestId('num1')
  const num2Input = screen.getByTestId('num2')
  const operationButton = screen.getByTestId(operation)
  const resultArea = screen.getByTestId('result')

  fireEvent.change(num1Input, { target: { value: n1 } })
  fireEvent.change(num2Input, { target: { value: n2 } })

  act(() => operationButton.click())

  return resultArea
}

// eslint-disable-next-line jest/expect-expect
test('renders a calculator', () => {
  setup()
  // check if all components are rendered
  validateRendering([
    'result',
    'num1',
    'num2',
    'add',
    'subtract',
    'multiply',
    'divide',
  ])
})

describe('Calculator', () => {
  it('adds numbers', () => {
    const resultArea = calculate('add', 6, 6)
    expect(resultArea).toHaveTextContent('12')
  })
  it('subtracts numbers', () => {
    const resultArea = calculate('subtract', 8, 5)
    expect(resultArea).toHaveTextContent('3')
  })
  it('multiplies numbers', () => {
    const resultArea = calculate('multiply', 4, 5)
    expect(resultArea).toHaveTextContent('20')
  })
  it('divides numbers', () => {
    const resultArea = calculate('divide', 10, 2)
    expect(resultArea).toHaveTextContent('5')
  })
})
