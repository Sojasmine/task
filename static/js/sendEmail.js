function sendMail(contactForm) {
    emailjs.send("service_uc0udzj", "template_0togleb",{
        from_name: contactForm.name.value,
        message: contactForm.message.value,
        from_email: contactForm.emailaddress.value,
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
        return false;  // To block from loading a new page
}