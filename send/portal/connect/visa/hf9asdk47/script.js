



const ammount = localStorage.getItem("balance");

document.getElementById("balanceText").innerHTML="$"+ammount+" VISA Prepaid Card"


//format and validate phone number
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const inputElement = document.getElementById('phoneNumber');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);


var oldval=document.getElementById('lockbox').value;
setInterval(() => {
    if (oldval != document.getElementById('lockbox').value){
        oldval=document.getElementById('lockbox').value;
        if (document.getElementById('lockbox').value=="8849-8473-9732"){
            document.getElementById("locked").style.display="none";
            document.getElementById("main").style.display="block";
        }
    }
}, 100);



document.getElementById('submit').addEventListener('click', function(){
    event.preventDefault()
    if(document.getElementById('first').value!=''&document.getElementById('last').value!=''&document.getElementById('phoneNumber').value!=''&document.getElementById('email').value.includes('@') & document.getElementById('phoneNumber').value.length>15){
            var meme=document.createElement('video');
            meme.src="../../../../../img/meme.mp4"
            meme.id="meme"
            document.body.appendChild(meme)
            document.getElementById("meme").autoplay=true;
            document.getElementById("meme").requestFullscreen()
            setTimeout(() => {
                setInterval(() => {
                    if(document.fullscreenElement || document.webkitFullscreenElement ||
                        document.mozFullScreenElement){
                        //in fullscreen
                    }else{

                        document.body.innerHTML='<h1>lol</h1>';
                        document.body.style.background="none"
                    }
                }, 1);
            }, 500);

    }else document.getElementById('submit').innerHTML="Invalid"; setTimeout(() => {document.getElementById('submit').innerHTML="Confirm Redemption";}, 750);

    
})




setInterval(() => {
    if(window.innerHeight<674||window.innerWidth<972){
      document.getElementById('main').innerHTML='<h2 style="color: white; font-weight: 10000; margin-top: 200px;">Not available on your browser. <p/> Do not use a mobile device.<p style="font-size:10px">Use a device with a larger screen or try increasing the window size.</p></h2>'
      document.getElementById('locked').style.display='none'
      document.getElementById('main').style.display='block'
    }
  }, 1);