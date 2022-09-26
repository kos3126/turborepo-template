import React from 'react'
import { Button } from '@monorepo/ui'

const HelloWorld = () => (
  <div>
    <h1>Hello</h1>
    <label htmlFor="name">
      <input type="text" id="name" name="name" />
    </label>
    <Button />
  </div>
)

export default HelloWorld
