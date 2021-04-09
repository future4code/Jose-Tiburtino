import { Request, Response } from "express";
import { selectUserByEmail } from "../models/selectUserByEmail";
import { updatePassword } from "../models/updatePassword";
import { generateHash } from "../services/hashManager";
import { validateEmail } from "../services/validateEmail";
import transporter from "../services/sendMailService";
import fs from "fs";
import handlebars from "handlebars";
import { resolve } from "path";

class AccountMailController {
  async execute(req: Request, res: Response) {
    let errorCode: number = 400;
    try {
      const { email } = req.body;
      if (!email) {
        errorCode = 422;
        throw new Error("Email inválido!");
      }
      validateEmail(email);
      const user = await selectUserByEmail(email);
      if (!user) {
        errorCode = 404;
        throw new Error("Usuário não existe.");
      }
      const characters: string = "0123456789abcdefABCDEF@#-*";
      let newPassword: string = "";
      for (let i = 0; i < 12; i++) {
        const randomIndex: number = Math.floor(
          Math.random() * characters.length
        );
        newPassword += characters[randomIndex];
      }
      const hashPassword: string = await generateHash(newPassword);
      await updatePassword(email, hashPassword);
      const npsPath = resolve(
        __dirname,
        "..",
        "views",
        "emails",
        "sendMail.hbs"
      );

      const variables = {
        password: newPassword,
        name: user.name,
      };

      const templateFileContent = fs.readFileSync(npsPath).toString("utf8");

      const mailTemplateParse = handlebars.compile(templateFileContent);

      const mailHtml = mailTemplateParse(variables);

      const mailer = await transporter.sendMail({
        from: `Cookenu <${process.env.NODEMAILER_USER}`,
        to: email,
        subject: "Sua senha do Cookenu",
        html: mailHtml,
      });
      res.status(200).send({
        message: `Sua senha foi alterada, por favor cheque seu email:${email}.`,
      });
    } catch (error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export { AccountMailController };
