var personName=document.getElementById('name');
var personNumber=document.getElementById('number');
var addPerson=document.getElementById('addPerson');
const mainList = document.getElementById("main-list");
const search=document.getElementById("search");
let n="";
let edit;
const contactInfo=[];

addPerson.addEventListener('click',function(){
   if(personName.value.length !=0 && personNumber.value.length !=0){
    contactInfo.forEach((item,index) => {
    if(Number(n) == item.number){
      edit = true;
      let obj = {};
      obj.name = personName.value;
      obj.number = Number(personNumber.value);
      contactInfo[index] = obj ;
      }
    })
    renderList();
    
    if(!edit){
     let obj = {};
     obj.name = personName.value;
      obj.number = Number(personNumber.value);
      contactInfo.push(obj);
      renderList();
     
    }
   }else{
    alert("Please add info");
  }
  


         personName.value="";
         personNumber.value="";
        
         
      
})
 
         search.addEventListener("keyup",function(){
  const keyword = search.value.toLowerCase()
  mainList.childNodes.forEach(node => {
    if(node.innerText.toLowerCase().indexOf(keyword) < 0){
      node.style.display = "none";
    }else{
      node.style.display = "block";
    }
  })
})

function renderList(){
   mainList.innerHTML = "";
   contactInfo.forEach((item,index) => {
    const div = document.createElement("div");
    div.setAttribute("id","wrap");
    div.setAttribute("class","border p-3");  
    const heading = document.createElement("h5");
    heading.innerText = `${item.name} ${item.number}`
    const span = document.createElement("span");
    span.setAttribute("class","float-right");
    const idel = document.createElement("i");
    idel.setAttribute("class","icon fa fa-trash-o text-danger");
    idel.addEventListener("click",deleteContact);
    const iedit = document.createElement("i");
    iedit.addEventListener("click",editContact);
    iedit.setAttribute("class","icon fa fa-edit");
    span.appendChild(idel);
    span.appendChild(iedit);
    heading.appendChild(span);
    div.appendChild(heading);
    mainList.appendChild(div);
   })
}


function deleteContact(e){
   console.log(e);
  const numLength = (e.path[2].innerText).split(" ").length;
  console.log(numLength);
  const num = (e.path[2].innerText).split(" ")[numLength-1]
  console.log(num)
  contactInfo.forEach((item,index) => {
    if(item.number == num){
      contactInfo.splice(index,1)
    }
  })
  renderList()
}
function editContact(e){
   const popUp=document.getElementById('myModal');
   popUp.style.display="block";
   const addDismiss=document.getElementById('addPerson');
  const nodeInfo = e.target.parentNode.parentNode.innerText;
  addDismiss.addEventListener('click',()=>{
    popUp.style.display="none";});
  n = nodeInfo.split(" ")[1];
  personName.value = nodeInfo.split(" ")[0];
  personNumber.value = n;
}


 