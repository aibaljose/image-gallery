const mainImage = document.querySelector('.main-img');
const thumbnailContainer = document.querySelector('.thumbnail-bar');
const galleryImages = document.querySelectorAll('.thumbnail-bar img')

const toggleBtn = document.querySelector('button');
const shadingOverlay = document.querySelector('.image-overlay');

/* Declaring the array of image filenames */
const imgFiles = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const imgAltText = ['photo1','photo2','photo3','photo4','photo5'];
const imgCount = imgFiles.length;

/* Looping through images */
for (let i = 0; i < imgCount; i++) {
    const thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', imgFiles[i]);
    thumbImage.setAttribute('alt', imgAltText[i]);
    thumbnailContainer.appendChild(thumbImage);
    thumbImage.addEventListener('click', function(e){
        mainImage.setAttribute('src', e.target.src);
    })
}

galleryImages.forEach(img => {
    img.addEventListener('click', function(){
        mainImage.setAttribute('src', img.src);
    })
})

/* Wiring up the Darken/Lighten button */
toggleBtn.addEventListener('click', () => {
    const btnState = toggleBtn.getAttribute('class');
    if (btnState === 'dark-mode') {
      toggleBtn.setAttribute('class','light-mode');
      toggleBtn.textContent = 'Lighten';
      shadingOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      toggleBtn.setAttribute('class','dark-mode');
      toggleBtn.textContent = 'Darken';
      shadingOverlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
