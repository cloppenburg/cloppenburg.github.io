document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#galery')) {
        const allImages = Array.prototype.slice.call(document.querySelectorAll('#galery #images img'), 0);
        
        const imageContainer = document.querySelector('#galery #current-image')

        selectedImageIndex = 0;
        imageContainer.appendChild(allImages[0])

        document.querySelector('#galery #current-image').addEventListener('click', () => {
            const wall = document.createElement('div');
            wall.id = 'wall'
            wall.style.width = `${document.body.clientWidth}px`;
            wall.style.height = `${document.body.clientHeight}px`;

            const bigImageContainer = document.createElement('div');
            bigImageContainer.id = 'big-image';
            bigImageContainer.style.width = `${document.body.clientWidth-40}px`;
            //bigImageContainer.style.height = `${document.body.clientHeight-20}px`;

            bigImageContainer.appendChild(allImages[selectedImageIndex])
            
            document.body.appendChild(wall);
            document.body.appendChild(bigImageContainer);

            const closeListener = () => {
                wall.removeEventListener('click', closeListener);
                document.querySelector('#big-image img').removeEventListener('click', closeListener);

                document.body.removeChild(bigImageContainer);
                document.body.removeChild(wall);
                imageContainer.appendChild(allImages[selectedImageIndex])
            }

            wall.addEventListener('click', closeListener);
            document.querySelector('#big-image img').addEventListener('click', closeListener);
        });

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
    }
});

function setImage(imageContainer, oldImageIndex, allImages, indexCalculator) {
    imageContainer.removeChild(allImages[oldImageIndex]);
    const newImageIndex = indexCalculator(oldImageIndex);
    imageContainer.appendChild(allImages[newImageIndex])
    return newImageIndex;
}