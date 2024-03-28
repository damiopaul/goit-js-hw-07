const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formValues = {};
    const formData = new FormData(event.currentTarget);
    

    formData.forEach ((value, key) => {
        formValues[key] = value.trim();
    });

    const isFormFilled = Object.values(formValues).every(value => value !=='');

    if (!isFormFilled) {
        alert('All form fields must be filled in');
        return
    }
    console.log(formValues);

    event.currentTarget.reset();
})

