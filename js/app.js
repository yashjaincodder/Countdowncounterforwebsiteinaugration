const endDate="21 March 2024 10:00 PM"
document.getElementById("end-date").innerText=endDate
const inputs=Array.from(document.querySelectorAll("input"))
const clock=()=>{
    const end=new Date(endDate)
    const now=new Date()
  const diff=(end-now)/1000;//it give ans in second
  if(diff<0){
    return;
  }
  inputs[0].value=Math.floor(diff/3600/24)  //it give days
  inputs[1].value=(Math.floor(diff/3600)%24)//it give remaining hours
  inputs[2].value=(Math.floor(diff/60)%60)//it give remaining minutes
  inputs[3].value=(Math.floor(diff)%60)//it give remaining seconds
}
clock() 
setInterval(()=>{
clock()
},1000)