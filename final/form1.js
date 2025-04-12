
document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    
    
    if (!name || !rating) {
        alert("You need a name and you need to rate!");
        return;
    }
    
    const formData = {
        name: name,
        rating: rating,
    };
    
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submitted.json", true);
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