import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "Gmail", // o cualquier otro servicio que prefieras
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: email,
                to: process.env.EMAIL_TO, // tu email
                subject: `Contact form submission from ${name}`,
                text: message,
                html: `<p>${message}</p>`,
            });

            res.status(200).json({ message: "Message sent successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to send message" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
