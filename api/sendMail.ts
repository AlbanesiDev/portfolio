import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const handler = async (req: VercelRequest, res: VercelResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}
	if (!req.body) {
		return res.status(400).json({ message: "Request body is missing" });
	}

	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const mailOptions = {
		from: "joaquinalbanesidev@gmailcom",
		to: email,
		subject: `AlbanesiDev Portfolio | Nuevo mensaje de ${name}`,
		text: message + "\n\n" + email,
	};

	try {
		await transporter.sendMail(mailOptions);
		return res.status(200).json({ message: "Email sent successfully" });
	} catch (error) {
		return res.status(500).json({ message: "Error sending email", error });
	}
};

export default handler;
