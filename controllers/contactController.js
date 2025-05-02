import { sendEmail, sendConfirmationEmail } from '../utils/emailUtility.js';

const sendContactEmail = async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send email to alrifat2004@gmail.com
    await sendEmail({
      to: 'alrifat2004@gmail.com',
      subject: subject,
      text: `Message: ${message}`,
      name: name,
      email: email,
      subject: subject,
      message: message
    });

    // Send confirmation email to the user
    await sendConfirmationEmail({
      to: email,
      name: name,
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    next(error);
  }
};

export { sendContactEmail };