import { sendEmail, sendConfirmationEmail } from '../utils/hireMeUtility.js';

const sendHireMeRequest = async (req, res, next) => {
  const { name, email, project, description, priceRange } = req.body;

  try {
    // Send email to alrifat2004@gmail.com
    await sendEmail({
      to: 'alrifat2004@gmail.com',
      subject: 'Hire Me Request',
      text: description,
      name: name,
      email: email,
      project: project,
      priceRange: priceRange
    });

    // Send confirmation email to the user
    await sendConfirmationEmail({
      to: email,
      name: name,
      project: project
    });

    res.json({ success: true, message: 'Hire me request sent successfully!' });
  } catch (error) {
    next(error);
  }
};

export { sendHireMeRequest };