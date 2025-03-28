
document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form Submitted");
    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('eml').value;
    const password = document.getElementById('pswd').value;
    const state = document.getElementById('stt').value;
    
    if (!fullname || !email) {
        alert("You need a name and email");
        return;
    }
    if (password.length <8) {
        alert("You need a password that is at least 8 characters!")
        return;
    }
    const formData = {
        name: fullname,
        email: email,
        password: password,
        state: state
    };
    
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
            alert("Form Submitted.");
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.')
        }
    };
    xhr.send(JSON.stringify(formData));
});