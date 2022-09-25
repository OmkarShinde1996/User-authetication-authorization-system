form.addEventListener('submit', () => {
    const register = {
        email: email.value,
        password: password.value
    }
    fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(register),
        headers:{
            'content-type': 'application/json'
        }
    }).then(resp => resp.json())
    .then(data => {
        if(data.status == 'error'){
            success.style.display = 'none'
            error.style.display = 'block'
            error.innerText = data.error
        }else{
            error.style.display = 'none'
            success.style.display = 'block'
            success.innerText = data.success
        }
    })
})