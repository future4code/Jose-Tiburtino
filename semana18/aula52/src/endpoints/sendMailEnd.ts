import { Request, Response } from "express";
import transporter from "../services/mailer";
import handlebars from "handlebars";
import fs from "fs";
import { resolve } from "path";

export const sendMailEnd = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body;
    const variables = {};

    const npsPath = resolve(__dirname, "..", "views", "emails", "sendMail.hbs");

    const templateFileContent = fs.readFileSync(npsPath).toString("utf8");

    const mailTemplateParse = handlebars.compile(templateFileContent);

    const mailHtml = mailTemplateParse(variables);

    const mailer = await transporter.sendMail({
      from: `José Victor <${process.env.NODEMAILER_USER}`,
      to: email,
      subject: "Objeto",
      html: mailHtml,
    });
    res.status(200).send({ message: `O email foi enviado para ${email}` });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
};
