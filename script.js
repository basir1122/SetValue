function set(){
let zibCode = +document.getElementById('zibCode').value;
let area = document.getElementById('area')

if(zibCode === 2345){
    area.value = "Peshawar"
}
else if(zibCode === 2346){
    area.value = "Kohat"
}
else if(zibCode === 2347){
    area.value = "Hangu"
}
else if(zibCode === 2348){
    area.value = "Thall"
}
else if(zibCode === 2349){
    area.value = "Doaba"
}
else{
    alert("invide")
}

}