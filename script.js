setInterval(()=>{

    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    
    let year = document.getElementById("d-m-y");

    let date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

hour.innerHTML= (date.getHours()); 
min.innerHTML= (date.getMinutes()); 
sec.innerHTML= (date.getSeconds()); 
year.innerHTML= (date.getDate()+ "<span id='th'>th</span> "+ monthNames[date.getMonth()] +" " + date.getFullYear()); 
},500)

let timeClick = 1;


btn.onclick = ()=>{
    let t= timeClick++;
    if(t%2==1){
        btn.innerHTML ="Pause";
        let sound = document.getElementById("sound");
        function playAudio(){
            sound.play();
        }
        playAudio();
    }
    else{
        btn.innerHTML ="Play";
        let sound = document.getElementById("sound");
        function pauseAudio(){
            sound.pause();
        }
        pauseAudio();
    }
}
