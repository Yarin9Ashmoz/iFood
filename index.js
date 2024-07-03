var randomNumber = Math.floor(Math.random()*10 + 1);

var idOffood = document.getElementById(id="next"); 

idOffood.href="./index1.html".innerHTML = "./index"+(randomNumber)+".html";



var myList = [];

function function1() {
    var add = (prompt('add: '));
    myList.push(add);
  }


var s = ""

function function2(){
for (let i=0 ; i<myList.length ; i++){
    if(!s.includes(myList[i])){
        s += myList[i]+',\n';    
    }
    
    }
    showCustomAlert();
  }



  function showCustomAlert() {
    // Create a custom alert box with SweetAlert
    Swal.fire({
        title: 'List of ingredients: ',
        text: s,
        confirmButtonText: 'OK'
    });
}

function openWebCam(){
    document.addEventListener("DOMContentLoaded", () => {
        let but = document.getElementById("but");
        let video = document.getElementById("vid");
        let mediaDevices = navigator.mediaDevices;
        vid.muted = true;
        but.addEventListener("click", () => {
 
            // Accessing the user camera and video.
            mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    // Changing the source of video to current stream.
                    video.srcObject = stream;
                    video.addEventListener("loadedmetadata", () => {
                        video.play();
                    });
                })
                .catch(alert);
        });
    }); 
}