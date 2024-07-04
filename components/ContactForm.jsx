// components/ContactForm.js
'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const ContactForm = () => {
  const methods = useForm();
  const { handleSubmit, register, formState: { errors } } = methods;

  const onSubmit = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Message sent!');
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <FormProvider >
      <Form >
        <FormField
        //   control={methods.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input {...field} {...register('name', { required: 'Name is required' })} />
              </FormControl>
              <FormMessage>{errors.name && errors.name.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
        //   control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input {...field} {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })} />
              </FormControl>
              <FormMessage>{errors.email && errors.email.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
        //   control={methods.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea {...field} {...register('message', { required: 'Message is required' })} />
              </FormControl>
              <FormMessage>{errors.message && errors.message.message}</FormMessage>
            </FormItem>
          )}
        />
        <button type="submit">Send</button>
      </Form>
    </FormProvider>
  );
};

export default ContactForm;


