import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

export class NodemailerMailAdapter implements MailAdapter {
  
  async sendMail({subject, body}: SendMailData) {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "86c292088d0a1b",
        pass: "ba8d347a6b2e7b"
      }
    });
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Adriano Rocha <adriano_angelo@live.com>',
    subject,
    html: body,
  })
  };
}