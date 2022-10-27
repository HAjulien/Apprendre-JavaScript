const form = document.querySelector('form'),
fileInput = form.querySelector('.file-input'),
progressArea = document.querySelector('.progress-area'),
uploadedArea = document.querySelector('.uploaded-area')

form.addEventListener('click', function (){
  fileInput.click()
});

function uploadFile (name) {
  let xhr = new XMLHttpRequest()
  xhr.open("POST", "php/upload.php")
  xhr.upload.addEventListener('progress', e =>{
    console.log(e);
  });
  let formData = new FormData(form)
  xhr.send(formData)
}

fileInput.addEventListener('change', ({target}) =>{
  let file = target.files[0]
  if(!file) return null
  let fileName = file.name
  uploadFile(fileName)

});

