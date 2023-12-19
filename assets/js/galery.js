document.addEventListener('DOMContentLoaded', () => {
    const allImages = Array.prototype.slice.call(document.querySelectorAll('#galery #images img'), 0);
    
    const imageContainer = document.querySelector('#galery #current-image')

    selectedImageIndex = 0;
    imageContainer.appendChild(allImages[0])

    document.querySelector('#galery #left').addEventListener('click', () => {
        selectedImageIndex = setImage(imageContainer, selectedImageIndex, allImages, (imageIndex) => {
            imageIndex--;
            if (imageIndex < 0) {
                imageIndex = allImages.length - 1
            }
            return imageIndex
        })
    });

    document.querySelector('#galery #right').addEventListener('click', () => {
        selectedImageIndex = setImage(imageContainer, selectedImageIndex, allImages, (imageIndex) => {
            imageIndex++;
            if (imageIndex > allImages.length - 1) {
                imageIndex = 0
            }
            return imageIndex
        })
    });
});

function setImage(imageContainer, oldImageIndex, allImages, indexCalculator) {
    imageContainer.removeChild(allImages[oldImageIndex]);
    const newImageIndex = indexCalculator(oldImageIndex);
    imageContainer.appendChild(allImages[newImageIndex])
    return newImageIndex;
}