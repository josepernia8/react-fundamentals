// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {React, useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const usernameInputRef = useRef()
  // const [error, setError] = useState('')
  const [username, setUsername] = useState('')

  function handleChange(event) {
    const {value} = event.target
    // const isLowerCase = value === value.toLowerCase()
    // const isEmpty = value === ''

    setUsername(value.toLowerCase())
    // setError(isLowerCase && !isEmpty ? '' : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">
          Username:
        </label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
        />
        {/* <div style={{color: 'indianred'}}>{error}</div> */}
      </div>
      <button disabled={username === ''} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
