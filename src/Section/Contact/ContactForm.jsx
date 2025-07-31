import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxnx-V8ABkmHXs6OIWjUtI2pSsnRIX6dWCeLI-Ed6NYhd7ISKqGv69_t6CScBKYvvK5/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully!');
        reset(); // clear the form
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      alert('Error submitting form');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex contact-form">
      <div className='half-width'>
        <label htmlFor="name" className="block font-medium">Name</label>
        <input
          type="text"
          placeholder='Enter Your Name'
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="full-width border p-2 rounded"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>
      <div className='half-width'>
        <label htmlFor="email" className="block font-medium">Email</label>
        <input
          type="email"
          placeholder='Enter Your Email'
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
          className="full-width border p-2 rounded"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>
      <div className='full-width'>
        <label htmlFor="subject" className="block font-medium">Subject</label>
        <input
          type="text"
          placeholder='Enter Subject'
          id="subject"
          {...register('subject', { required: 'Subject is required' })}
          className="full-width border p-2 rounded"
        />
        {errors.subject && <p className="text-red-600 text-sm">{errors.subject.message}</p>}
      </div>

      <div className='full-width'>
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea
          id="message"
          placeholder='Enter Message Here'
          rows="6"
          {...register('message', { required: 'Message is required' })}
          className="full-width border p-2 rounded"
        ></textarea>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
