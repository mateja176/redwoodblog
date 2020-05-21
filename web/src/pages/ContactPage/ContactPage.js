import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          errorClassName="error"
          name="name"
          validation={{ required: true }}
        />
        <FieldError className="error" name="name" />
        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          errorClassName="error"
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError className="error" name="email" />
        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          errorClassName="error"
          name="message"
          validation={{ required: true }}
        />
        <FieldError className="error" name="message" />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
