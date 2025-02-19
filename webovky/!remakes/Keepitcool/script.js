const phoneInput = document.querySelector("#phone");
window.intlTelInput(phoneInput, {
    initialCountry: "us",
    separateDialCode: true
});

function CopyToClipboard() {
    const text = "wanna@keepitcool.life";

    const tempInput = document.createElement('input');
    tempInput.value = text;
    
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Email "wanna@keepitcool.life" has been copied to your clipboard, you can simply paste it now.');}