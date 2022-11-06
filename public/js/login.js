const loginFormHandler = async (e) => {
    e.preventDefault();

    const userName = $("#user-login").value.trim();
    const password = $("#password-login").value.trim();

    if (userName && password) {
        const response = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'content-type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in!');
        }
    }
};

const signupFormHandler = async (e) => {
    e.preventDefault();

    const userName = $("#username-signup").value.trim();
    // const email = $("#email-signup").value.trim();
    const password = $("#password-signup").value.trim();

    if (userName && password) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'content-type' : 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Fail to sign up!');
        }
    }
};

