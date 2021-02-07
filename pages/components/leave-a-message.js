import { useState } from 'react'

import styles from '../../styles/LeaveAMessage.module.css'

function LeaveAMessage(props) {
  const { id } = props

  const [name, setName] = useState('')
  const [phoneOrEmail, setPhoneOrEmail] = useState('')
  const [message, setMessage] = useState('')

  const isSendButtonDisabled = name.trim() == '' || phoneOrEmail.trim == '' || message.trim() == ''

  return (
    <div
      className = {styles.container}
      id = {id}
    >
      <div
        className = {styles.title}
      >
        Leave A Message
      </div>

      <div
        className = {styles.formContainer}
      >
        <input
          autoCapitalize = 'words'
          autoCorrect = 'off'
          className = {styles.nameInput}
          onChange = {event => setName(event.target.value)}
          placeholder = 'Name...'
          spellCheck = 'false'
        />

        <input
          autoCapitalize = 'off'
          autoCorrect = 'off'
          className = {styles.phoneOrEmailInput}
          inputMode = 'email'
          onChange = {event => setPhoneOrEmail(event.target.value)}
          placeholder = 'Phone or Email...'
          spellCheck = 'false'
        />

        <textarea
          autoCapitalize = 'sentences'
          className = {styles.messageTextArea}
          onChange = {event => setMessage(event.target.value)}
          placeholder = 'Message...'
        />
        
        <a
          className = {styles.submitButton}
          href = {`#${id}`}
          onClick = {submit}
          style = {{
            backgroundColor: isSendButtonDisabled ? 'rgb(50, 50, 50)' : 'crimson',
            color: isSendButtonDisabled ? 'darkgray' : 'white',
            pointerEvents: isSendButtonDisabled ? 'none' : 'visible'
          }}
        >
          Send
        </a>
      </div>
    </div>
  )

  function submit() {
    alert(name + ' ' + phoneOrEmail + ' ' + message)
  }
}

export default LeaveAMessage