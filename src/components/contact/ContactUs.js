
import React, { useState } from 'react'



const ContactUs = () => {

  const [submit, setSubmit] = useState(false)

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitted')
     
     setTimeout(()=>{
      window.location.reload(true);
     }, 1000)
    
    setSubmit(true)
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,

    }

    console.log(conFom)
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3 tect-center">Feel free to reach out with us</h2>
      <form action="https://formspree.io/f/mayryaaq" method="POST">
        {/* action="https://formspree.io/f/mayryaaq" method="POST" */}
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit"  >
          {formStatus}
        </button>
      </form>
      {
        submit ? <h3 className='text-center text-success'>Thanks for contacting me! </h3> : null
      }
    </div>
  )
}
export default ContactUs


