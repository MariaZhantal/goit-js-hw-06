const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { elements: { email, password }} = event.currentTarget;
  console.dir(event.currentTarget);

  if (email.value === '' || password.value === '') {
    return console.log('Please fill in all the fields!');
  }
  
  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
}
