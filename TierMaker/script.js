const tierInput = document.getElementById("tier");

let currentDraggItem;

console.log(tierInput.value);

// const tierlist = document.querySelector('.tier-list');

const containerItems = document.getElementsByClassName('item-container');
for(const containerItem of containerItems){
    setUpContainerItemDrag(containerItem);
}
const btn = document.getElementById("submit");
btn.addEventListener("click", (event) => {
  console.log("Button is cicked");
  event.preventDefault();
  const target = event.target;
  if (tierInput.value == "") {
    alert("please enter the name");
    return;
  }
  createTierList(tierInput.value);
  tierInput.value = "";
});

function createTierList(listname) {

  
  const newTierList = document.createElement("div");
  newTierList.classList.add("tier-list");
  const heading = document.createElement("div");
  heading.classList.add("heading");
  const textContainer =document.createElement("div");
  textContainer.textContent=listname;
  heading.appendChild(textContainer);

  const newTierListItem = document.createElement("div");
  newTierListItem.classList.add("tier-list-item");

  newTierList.appendChild(heading);
  newTierList.appendChild(newTierListItem);
  setUpDropZone(newTierListItem);
 

  const tierSection = document.getElementById("tier-list-section");
  tierSection.appendChild(newTierList);

}

const submitbtn = document.getElementById("submitImage");
const imageForm = document.getElementById("imageform");
imageForm.addEventListener("submit", (event) => {
  console.log("Event occurredd");
  event.preventDefault();

  const formData = new FormData(imageForm);
  console.log(formData);

  const imageItemInput = document.getElementById("image-url");
  const imgUrl = imageItemInput.value;
  if (imageItemInput.value == "") {
    alert("Please enter valid url..");
    return;
  }
  console.log(imgUrl);
  createTierItem(imgUrl);
});
function createTierItem(imageUrl) {
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute('draggable','true');
  imgDiv.classList.add("item-container");

  const img = document.createElement("img");
  img.src = imageUrl;

  imgDiv.appendChild(img);
  setUpContainerItemDrag(imgDiv);
  const nonTierSectoin = document.getElementById("non-tier-section");
  nonTierSectoin.appendChild(imgDiv);
}


function setUpContainerItemDrag(containerItem){
  containerItem.setAttribute('draggable', 'true'); // Ensure the item is draggable

  containerItem.addEventListener('dragstart', (event) => {
      currentDraggItem = event.target.parentNode; // Store the dragged item
      
  });

 containerItem.addEventListener('dblclick',(event)=>{
  const parentNode =event.target.parentNode;
  const nonTierSectoin=document.getElementById('non-tier-section');
  nonTierSectoin.appendChild(parentNode);
 }

 );
}

function setUpDropZone(newTierListItem){
  newTierListItem.addEventListener('dragover', function (event) {

    // console.log(event.target);
    // event.target.appendChild(currentDraggItem);
    // console.log("event coming up", event);
    if(this !== currentDraggItem.parentNode) {
    this.appendChild(currentDraggItem);
      console.log("Draggged Successfully");
    }
    });
    newTierListItem.addEventListener('drop', (event) => {
      event.preventDefault(); // stops the default behaviour of
      
      // the event which is to not allow drop
      
      });;
}