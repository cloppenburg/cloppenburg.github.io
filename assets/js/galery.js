document.addEventListener('DOMContentLoaded', () => {
    const allImages = Array.prototype.slice.call(document.querySelectorAll('#galery #images img'), 0);
    // console.debug('children:', allImages);
    
    const imageContainer = document.querySelector('#galery #current-image')

    selectedImageIndex = 0;
    imageContainer.appendChild(allImages[0])

    document.querySelector('#galery #left').addEventListener('click', () => {
        imageContainer.removeChild(allImages[selectedImageIndex])
        // console.debug("oldIndex:", selectedImageIndex)
        selectedImageIndex--;
        if (selectedImageIndex < 0) {
            selectedImageIndex = allImages.length - 1
        }
        // console.debug("newIndex:", selectedImageIndex)
        imageContainer.appendChild(allImages[selectedImageIndex])
    });

    document.querySelector('#galery #right').addEventListener('click', () => {
        imageContainer.removeChild(allImages[selectedImageIndex])
        // console.debug("oldIndex:", selectedImageIndex)
        selectedImageIndex++;
        if (selectedImageIndex > allImages.length - 1) {
            selectedImageIndex = 0
        }
        // console.debug("newIndex:", selectedImageIndex)
        imageContainer.appendChild(allImages[selectedImageIndex])
    });
});