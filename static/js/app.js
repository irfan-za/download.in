const downloadForm = document.getElementById('downloadForm');
const downloadMessage = document.getElementById("downloadMessage");
const downloadButton = document.getElementById("downloadButton");

downloadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  downloadButton.dosabled=true;
  const videoURL = document.getElementById("videoURL").value;
  const resolution = document.getElementById("resolution").value;
  const response = await fetch("https://irfan12.pythonanywhere.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoURL, resolution }),
  })
  .then(async(response)=>{
    if(response.ok){
    const data = await response.json();
    downloadMessage.innerHTML = `<p class='text-green-500'>${data.message}</p>`;
    }
    else {
      const data = await response.json();
      downloadMessage.innerHTML = `<p class='text-red-500 font-medium'>Error :${data.error } <br> Silahkan coba Url berbeda atau coba beberapa saat lagi.</p>`;
    }
  })
  .finally(()=>{
    downloadButton.disabled=false
  });


});

