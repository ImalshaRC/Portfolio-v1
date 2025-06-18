import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState, useRef } from 'react'
import validator from 'validator'
import emailjs from '@emailjs/browser';

export function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');

  // Replace these with your EmailJS credentials
  const SERVICE_ID = "service_4bici38";
  const TEMPLATE_ID = "template_hr9g30t";
  const PUBLIC_KEY = "ya4kmgYYACbNovb2r";

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      setSucceeded(true);
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });

      // Reset form
      form.current.reset();
      setMessage('');
      setValidEmail(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email. Please try again.', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setSucceeded(false);
    if (form.current) {
      form.current.reset();
    }
    setMessage('');
    setValidEmail(false);
  };

  if (succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <p>Your message has been sent successfully.</p>
        <div className="button-container">
          <button
            onClick={handleSendAnother}
            className="send-another"
          >
            Send Another Message
          </button>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
            className="back-to-top"
        >
            Back to Top
        </button>
        </div>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="user_name"
          required
        />
        <input
          placeholder="Email"
          type="email"
          name="user_email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
