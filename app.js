const menu = [
  {
    id: 1,
    title: "Cake Item",
    category: "Cake",
    price: 15.99,
    img: "img/cake-1.jpeg",
  },
  {
    id:2 ,
    title: "Cake Item",
    category: "Cake",
    price: 15.99,
    img: "img/cake-2.jpeg",
  },
  {
    id: 3,
    title: "Cake Item",
    category: "Cake",
    price: 15.99,
    img: "img/cake-3.jpeg",
  },
  {
    id: 4,
    title: "Cupcake Item",
    category: "Cupcake",
    price: 15.99,
    img: "img/cupcake-1.jpeg",
  },
  {
    id: 5,
    title: "Cupcake Item",
    category: "Cupcake",
    price: 15.99,
    img: "img/cupcake-2.jpeg",
  },
  {
    id: 6,
    title: "Cupcake Item",
    category: "Cupcake",
    price: 15.99,
    img: "img/cupcake-3.jpeg",
  },
  
  {
    id: 7,
    title: "Doughnut Item",
    category: "Doughnut",
    price: 15.99,
    img: "img/doughnut-1.jpeg",
  },
  {
    id: 8,
    title: "Doughnut Item",
    category: "Doughnut",
    price: 15.99,
    img: "img/doughnut-2.jpeg",
  },
  {
    id: 9,
    title: "Doughnut Item",
    category: "Doughnut",
    price: 15.99,
    img: "img/doughnut-3.jpeg",
  }
  

];

const itemsContainer = document.querySelector(".items-container");
const buttonContainer = document.querySelector(".button-container");
const modalContainer = document.querySelector(".modal-center");
const imageCon = modalContainer.querySelector("img");
const closeIcon = document.querySelector(".close")
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
    


window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
     displayMenuButtons();
    });
    
   


function displayMenuItems(menuItems){
     let displayMenu = menuItems.map(function(item){
        return `<div class="single-item">
                <div class="image">
                    <img class="zoom modal" src=${item.img} alt=${item.title}>
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="text">
                    <h3>${item.title}</h3>
                    <p>$${item.price}</p>
                </div>
            </div>`;
    });
     displayMenu = displayMenu.join("");
    //  console.log(menuItems);
     itemsContainer.innerHTML = displayMenu;
}




function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
    );
    const categoryBtns = categories
    .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    }).join("");
    
    buttonContainer.innerHTML = categoryBtns;
     const filterBtns = buttonContainer.querySelectorAll(".filter-btn"); 

     
     
     filterBtns.forEach(function(btn){
       btn.addEventListener("click", function(e){

         
         const category = e.currentTarget.dataset.id;
         const menuCategory = menu.filter(function(menuItem){
           if( menuItem.category === category){
             return menuItem;
            }
            // console.log(menuItem);
          });
          
          if( category === "all"){
            displayMenuItems(menu);
          }else{
            displayMenuItems(menuCategory);
          }

      // .....................MODAL.....................

          

            let modal = document.getElementsByClassName("modal");
            var modalImages = [].slice.call(modal);

            let imageList = [];
            // let counter = 0;

            modalImages.forEach(function(image){

              imageList.push(image.src);

              image.addEventListener("click", function(e){
                // console.log(image);
                // console.log(imageList);
  
                let target = e.currentTarget.src;
                    imageCon.src = target;
                modalContainer.classList.add("show-modal");
                // console.log(target);
              })
            })
            
            // close modal
            closeIcon.addEventListener("click", function(){
              modalContainer.classList.remove("show-modal");
            })
            
            
          })
          
        })
        
      }
      
      
      
    //   // buttons
    // rightBtn.addEventListener("click", function(){
    //     counter++;
    //     if (counter >= imageList.length){
    //       Counter = 0;
    //     }
    //     imageCon.src = imageList[counter];
    //     console.log(imageList);
    //   })

    //   leftBtn.addEventListener("click", function(){
    //     counter--;
    //     if (counter = 0){
    //       Counter = imageList.length - 1;
    //     }
    //     imageCon.src = imageList[counter];
    //     console.log(imageList);
    //   })
          