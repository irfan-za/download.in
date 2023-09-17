const downloadForm = document.getElementById('downloadForm');
const downloadMessage = document.getElementById("downloadMessage");
const downloadButton = document.getElementById("downloadButton");

downloadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  downloadButton.disabled=true;
  const videoURL = document.getElementById("videoURL").value;
  const resolution = document.getElementById("resolution").value;
  const response = await fetch("https://ytdownloader-pi.vercel.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoURL, resolution }),
  })
  .then(async(response)=>{
    if(response.ok){
    const data = await response.json();
    downloadMessage.innerHTML = `<div class="mt-4 text-lg px-4 py-1 rounded-md bg-slate-100 dark:bg-white font-medium inline-block"><p class='text-green-500'>${data.message}</p></div>`;
    }
    else {
      const data = await response.json();
      downloadMessage.innerHTML = `<div class="mt-4 text-lg px-4 py-1 rounded-md bg-slate-100 dark:bg-white font-medium inline-block"><p class='text-red-500 font-medium'>Error :${data.error } <br> Silahkan coba Url berbeda atau coba beberapa saat lagi.</p></div>`;
    }
  })
  .finally(()=>{
    downloadButton.disabled=false
  });


});

