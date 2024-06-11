import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
     
    email: Yup.string().email().required('El correo electrónico no es válido'),
    nombre: Yup.string().required('El nombre es obligatorio'),
    apellidos: Yup.string().required('El apellido es obligatorio'),
    direccion: Yup.string().required('La direccion es obligatoria'),
    direccion2: Yup.string().required('La direccion es obligatoria'),
    cp: Yup.string().required('El código postal es obligatorio').matches(/^[0-9]+$/, "Deben ser solo números").min(5, 'Deben ser 5 números').max(5, 'Deben ser solo 5 números'),
    ciudad: Yup.string().required('La direccion es obligatoria'),
    checkboxfac: Yup.boolean().oneOf([true], 'Activa la casilla para continuar'),
    titular: Yup.string().required('El nombre del titular es obligatorio'),
    noTarjeta: Yup.string().required('El número de la tarjeta es obligatorio').matches(/^[0-9]+$/, "Deben ser solo números").min(16, 'Deben ser 16 números').max(16, 'Deben ser solo 16 números'),
    venc: Yup.string().required('Indica la fecha de caducidad').matches(/^[0-9]+$/, "Deben ser solo números").min(4, 'Deben ser 4 números').max(4, 'Deben ser solo 4 números'),
    cvv: Yup.string().required('El número de seguridad es obligatorio').matches(/^[0-9]+$/, "Deben ser solo números").min(3, 'Deben ser 3 números').max(3, 'Deben ser solo 3 números'),
  });


export default validationSchema

