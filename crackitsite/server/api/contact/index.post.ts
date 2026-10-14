import nodemailer from 'nodemailer'
import type { ApiResponse } from '~~/types/api'
import type { ContactMessageInput } from '~~/types/contact'

export default defineEventHandler(async (event): Promise<ApiResponse<{ message: string; received: ContactMessageInput }>> => {
  const body = await readBody<ContactMessageInput>(event)

  const errors: Record<string, string[]> = {}
  if (!body?.name || !body.name.trim()) {
    errors.name = ['Name is required.']
  }
  if (!body?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    errors.email = ['A valid email address is required.']
  }
  if (!body?.message || !body.message.trim()) {
    errors.message = ['Message cannot be empty.']
  }

  if (Object.keys(errors).length > 0) {
    throw createError({
      statusCode: 422,
      statusMessage: 'UNPROCESSABLE_ENTITY',
      data: {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'The given data was invalid.',
          details: errors
        }
      }
    })
  }

  const config = useRuntimeConfig(event)
  if (!config.smtpHost || !config.smtpUser || !config.smtpPassword) {
    console.error('Contact form email delivery is not configured.')
    throw createError({
      statusCode: 503,
      statusMessage: 'SERVICE_UNAVAILABLE',
      data: {
        error: {
          code: 'EMAIL_NOT_CONFIGURED',
          message: 'The contact form is temporarily unavailable. Please try again later.'
        }
      }
    })
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: String(config.smtpPassword).replace(/\s+/g, '')
    }
  })

  try {
    await transporter.sendMail({
      from: `"${body.name.trim()}" <${config.smtpUser}>`,
      to: config.contactTo,
      replyTo: body.email.trim(),
      subject: `New contact form message from ${body.name.trim()}`,
      text: [
        `Name: ${body.name.trim()}`,
        `Email: ${body.email.trim()}`,
        '',
        body.message.trim()
      ].join('\n')
    })
  } catch (error) {
    console.error('Contact form email delivery failed.', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'BAD_GATEWAY',
      data: {
        error: {
          code: 'EMAIL_DELIVERY_FAILED',
          message: 'We could not send your message. Please try again later.'
        }
      }
    })
  }

  return {
    data: {
      message: 'Thank you! Your message has been sent successfully.',
      received: {
        name: body.name.trim(),
        email: body.email.trim(),
        message: body.message.trim()
      }
    }
  }
})
