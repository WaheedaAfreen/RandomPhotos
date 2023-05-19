const  image =document.querySelector(".image");
const btn =document.querySelector(".btn");



btn.addEventListener("click",() =>{
      imageNum = 10;
  addNewImages()
});


function  addNewImages(){

    for (let index = 0; index <imageNum; index++) {


        const newImage = document.createElement("img");

        newImage.src= `https://picsum.photos/300?random=
        ${Math.floor(Math.random()*2000)}`;

        image.appendChild(newImage);
    }
    

}