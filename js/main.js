var imgUpload = document.getElementById('upload_imgs')
, imgPreview = document.getElementById('img_preview')
, imgUploadForm = document.getElementById('img-upload-form')
, totalFiles
, previewTitle
, previewTitleText
, img;

imgUpload.addEventListener('change', previewImgs, false);
function previewImgs(event) {
totalFiles = imgUpload.files.length;

for(var i = 0; i < totalFiles; i++) {
  img = document.createElement('img');
  img.src = URL.createObjectURL(event.target.files[i]);
  img.classList.add('img-preview-thumb');
  imgPreview.appendChild(img);
}
}


