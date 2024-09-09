// faq part  
// for each is low performac, node list er upor map run kore nah. so er convert node to arry
// node browser amader jonno j akaekta jinis ake aagula sob gulai ak akta
 
const faqs = Array.from(document.querySelectorAll('.faq'));

const faqToggle = (event) => {
    // console.log(event.currentTarget); /* Firstly we catch actual element whice is wee need to add one active clas  */
    const faq = event.currentTarget;
    if(faq.classList.contains('active')){  /* cotains it firstly check it has any class name active? if yes  */
        faqs.map((faq) => faq.classList.remove("active")); /* when its true then he remove all active class */
    }else{
        faqs.map((faq) => faq.classList.remove("active")); /* when its false then he remove all active class and */
        faq.classList.add('active') /* at last he added one calss of terget element */
    }

}

faqs.map((faq) => faq.addEventListener('click', faqToggle));


// pop gallery main code

const galleryimages = Array.from(document.querySelectorAll('.galimg'));
const popupgalary = document.querySelector('.popupimg');
const popupimg = popupgalary.querySelector('img');

let curentposition = 0;


const openGalary = (event, index) => {
    curentposition = index; /*for shifting left or right side in popup we catch where we stay . when someone click then hepen a event and also we catch this index value.. after that we will do incriment 1 with this index . is it finished? no when we cacth the next index value then we pass here this index src for that we find next img */
   const image = event.currentTarget.src; /* firstlyy we catch which img we came in popuop. we catch a sinle img at a time */
    popupimg.src = image;  /* we replace the actual catching img on popup img */
    popupgalary.classList.add('active'); /* we add that calss  which is we design in css for  use  after clicking  */
}

galleryimages.map((gallimg,index) => {
  
    gallimg.addEventListener('click', () => openGalary(event, index))
});

// pop gallery main code end

// cencle js code start 
const cencle = document.querySelector('.cencle');
const closepopgalary = () => {
    popupgalary.classList.remove('active');
}
cencle.addEventListener('click', closepopgalary);
// cencle js code end


// right arrow 
const rightarw = document.querySelector('.rarrow');
const popimgnext = () => {
    // curentposition += 1;
    // console.log(galleryimages[curentposition].src;); here we catch index valu e which we click on right arrow and aslo catch his src 
    if(curentposition == (galleryimages.length - 1)){  /* remamber that our array lenth is 4 index value is 3 so we for  geting last value we - 1 form our galimg lenth. or aray lenth. and when  its gone last position or  == . then its go first position means 0 index src */
        curentposition = 0;
    }else{
        curentposition += 1;
    }

    popupimg.src = galleryimages[curentposition].src; /* here we replace that index value's src with popup img srsc*/
}
rightarw.addEventListener('click', popimgnext);



// left arrow cod4e


const leftarw = document.querySelector('.larrow');
const popimgprev = () => {
  

  if(curentposition == 0){
    curentposition = galleryimages.length - 1;
  }else{
    curentposition -= 1;
  }
  popupimg.src = galleryimages[curentposition].src;
}
leftarw.addEventListener('click', popimgprev);





// why we use event . and how to catch index value
