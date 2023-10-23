
setInterval(() => {
  if(window.innerHeight<674||window.innerWidth<972){
    document.getElementById('main').innerHTML='<h2 style="color: white; font-weight: 10000; margin-top: 200px;">Not available on your browser. <p/> Do not use a mobile device.<p style="font-size:10px">Use a device with a larger screen or try increasing the window size.</p></h2>'
  }
}, 1);


function myFunction(copyText) {
  // Get the text field

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  document.getElementById('submit').innerHTML="Copied";
  setTimeout(() => {
    document.getElementById('submit').innerHTML="Create Card";
  }, 500);
  // Alert the copied text
  //alert("Copied the text: " + copyText.value);
}