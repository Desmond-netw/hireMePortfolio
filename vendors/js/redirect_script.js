    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = event.target;
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        }).then(() => {
            // Redirect to a thank-you page or show a confirmation message
            window.location.href = "../redirects/thank-you.html"; // Replace with your thank-you page URL
        }).catch((error) => {
            console.error('Error submitting the form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        });
    }
