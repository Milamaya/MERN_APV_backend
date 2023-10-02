import  nodemailer from 'nodemailer';
import dotenv from 'dotenv';
 
const emailRegistro = async (datos)  => {
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
        subject:'Comprueba tu cuenta en APV',
        text: 'Comprueba tu cuenta en APV',
        html: `<p>Hola ${nombre}, comprueba tu cuenta en APV.</p>
              <p>Tu cuenta ya esta lista, solo debes comprobar el siguiente enlace:
              <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>

              <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        
        `,
      });

      console.log('Mensaje enviado: %s', info.messageId);
};
 




export default emailRegistro;