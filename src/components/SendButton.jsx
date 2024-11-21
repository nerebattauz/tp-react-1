import React from 'react'
import { MdSend } from "react-icons/md";


const SendButton = () => {
  return (
    <button type='submit' className="send-button">
      Send<MdSend style={{padding:"4px 0px 0px 8px"}} />
    </button>
  )
}

export default SendButton
