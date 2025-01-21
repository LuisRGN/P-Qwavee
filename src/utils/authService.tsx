export const loginUser = async (email: string, password: string, rememberMe: boolean) => {
    const formData = { email, password };

    try {
        const response = await fetch('https://run.mocky.io/v3/9bd9774c-cc1b-471c-8aec-f6b2b524912f', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();

        if (data.email === email && data.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            if (rememberMe) {
                localStorage.setItem('userEmail', email);
            }

            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.error('Error during login:', error);
        return false;
    }
};
