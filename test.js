const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
const password = 'Juana123456@';
if (!passwordRegex.test(password)) {
  // Código para manejar la situación en la que la contraseña no cumple los requisitos
  console.log("no ingreso ", passwordRegex.test(password));
  return;
}
console.log("ingreso: ",  passwordRegex.test(password))
