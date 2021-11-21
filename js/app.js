

let img = document.getElementById("img");
let inputImg = document.getElementById("input-img");

function readImg(input){
if(input.files){
    let reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload=(event)=>{
        img.src = event.target.result;
    }
}
}

function displayImg(){
  window.alert("“The Picture has been posted successfully”")
}


function remove(){
  img.src=""; 
   inputImg.value=''; 
}