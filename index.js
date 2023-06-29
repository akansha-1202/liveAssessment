let btn = document.getElementById("touch_btn");
btn.addEventListener("click",bgcolorChange);
function bgcolorChange(){
    document.getElementById("section2").style.backgroundColor="skyblue"
}
 
let project = document.getElementById("projects");
project.addEventListener('mouseover', underLine);
function underLine() {
    project.style.textDecoration='underline';

    let heading = document.getElementsByTagName("h3")

    for(let i=0;i<heading.length;i++){
    heading[i].style.textDecoration="underline";
    }

    let paragraph = document.getElementsByClassName("para")
    for(let i=0;i<paragraph.length;i++){
        paragraph[i].style.textDecoration="underline";
        }
}
