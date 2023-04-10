const validate = (user, errorsState) => {
    const errors = { ...errorsState };

    if (!user.name) errors.name = "falta email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.name))
    errors.name = "email inválido";
    else errors.name = "";
    
    if (!user.password) errors.password = "campo obligatorio";
    else if(!user.password.match(/\d/)) errors.password = "debe contener un numero";
    else if(user.password.length < 6 || user.password.length > 10) 
    errors.password = 'debe tener entre 6 y 10 caracteres'
    else errors.password = '';

    return errors;
  };
  export default validate;