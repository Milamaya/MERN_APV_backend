import  nodemailer from 'nodemailer';
import dotenv from 'dotenv';
 
const emailOlvidePassword = async (datos)  => {
  const { email, nombre, token } =  datos;

  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",    
    port: 2525,    
    auth: {    
    user: "f1892c943c3a9b",    
    pass: "66b020625058a6" }    
    });              
    
      //Enviar el email
    const info = await transport.sendMail({
      from: '"APV - Administrador Pacientes Veterinaria" <apv@correo.com>', 
      to: email,
      subject:'Reestablece tu Password',
      text: 'Reestablece tu Password',
      html: `<p>Hola ${nombre}, has solicitado reestablece tu password.</p>

            <p>Sigue el siguiente enlace para generar un nuevo password:

            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password </a></p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        
        `,
    });

      console.log('Mensaje enviado: %s', info.messageId);
};
 
export default emailOlvidePassword;