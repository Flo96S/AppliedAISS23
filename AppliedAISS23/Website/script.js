//window.onload = clear_values();

function clear_values(){
   try{
      let img = document.getElementById('img');
      let form = document.getElementById('form');
      let answer = document.getElementById('answer');
      img.src = "";
      answer.innerText = '-';
      form.reset();
   } catch {
      console.log("clear value error")
   }
}

function showLoading(){
   var div = document.createElement("div");
   div.innerHTML = "this is a div element";
   document.body.appendChild(div);
}

function show_upload_img(){
   let data = document.getElementById('file').files[0];
   let im = document.getElementById('img');
   const reader = new FileReader();
   reader.addEventListener("load", function(){
      im.src = reader.result;
   });
   reader.readAsDataURL(data);
}

async function uploadImage(){
   let file = document.getElementById('file').files[0];
   const formData = new FormData();
   formData.append('file', file);
   
      await fetch('http://185.15.244.250:5000/postimg', {
      method: 'POST',
      body: formData
   })
   .then(response => {
      if(!response.ok ){
         alert('error');
      }
      return response.json();
   })
   .then(data => {
      let rec = document.getElementById('answer');
      rec.innerText = data;
   })
}