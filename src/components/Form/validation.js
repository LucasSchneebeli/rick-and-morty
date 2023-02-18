export default function validate (inputs){
    let errors = {};
    if(!inputs.username || !/\S+@\S.\S+/.test(inputs.username) || inputs.username.length >= 35) errors.username = 'Comprobar de haber escrito un mail con menos de 35 caracteres'
    if(!inputs.password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(inputs.password)) errors.password= 'La contrasenia debe tener entre 6 y 10 caracteres, y un numero'
    return errors;
}