const fileToUpload = document.getElementById('fileToUpload') as HTMLInputElement;
const button = document.getElementById('button');
const message = document.getElementById('message');

button.addEventListener('click', async () => {
    const formData = new FormData()

    formData.append('fileToUpload', fileToUpload.files[0])

    const result = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
    })
    message.innerHTML = await result.text()
})

