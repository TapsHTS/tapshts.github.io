var createImage = true
window.addEventListener("message", (event) => {
    if (event && event.data && event.data.sender === 'take-print-screen' && createImage) {
        createImage = false
        html2canvas(document.body).then(canvas => {
            createImage = true
                // document.body.appendChild(canvas)
            let imageBase64 = canvas.toDataURL()

            var myCustomData = {
                imageBase64
            }
            var event = new CustomEvent('image-base-64', {
                detail: myCustomData
            })
            window.parent.document.dispatchEvent(event) //send an event to the parent with the image base64
        });
    }
}, false);