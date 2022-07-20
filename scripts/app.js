const advice = new AdviceApi();
const ui = new UI();

const tabContainer=document.querySelector('.tabs');
const tabs =document.querySelectorAll('.tab-links');
const contents = document.querySelectorAll('.tabs-content');
const bookMarkBtn = document.getElementById('bookmark');
const share =document.getElementById('share');
const titleId=document.querySelector('.advice-title');
const adviceText= document.querySelector('.advice-text');
const bookContainer =document.getElementById('bookmarked');
const shared = document.getElementById('shared');
const diceBtn = document.querySelector('.dice-icon');
const empty = document.querySelector('#empty');




//fetch the advice when the DOM content is loaded
document.addEventListener('DOMContentLoaded',function(){

  // hide the content of the other tabs when page content loads;
  bookContainer.style.display='none';
  shared.style.display='none';
 

  // fetch the random advice
 getRandomAdvice();

 //fetch bookmarked quotes if there is any
//  getBookMarked();

 //fetch shared quotes.

});

//display and hide content accordingly;

tabContainer.addEventListener('click',function(e){
  
  if(e.target.className==='tab-links'){
    //hide all the contents of the tab
    contents.forEach(function(content){
        content.style.display='none';
    })

    //remove the class active on every tab button
    tabs.forEach(function(tab){
      tab.className = tab.className.replace(' active','');

    })

    //show current tab and the add the active class to the current tab
    if(e.target.textContent === 'advice'){
      document.getElementById(e.target.textContent).style.display="flex";
    }else{
      document.getElementById(e.target.textContent).style.display="grid";
    }
    
    e.target.className += " active";

    if(e.target.textContent === 'bookmarked'){
      getBookMarked();
        empty.firstElementChild.style.display='flex';
        diceBtn.style.display='none';
      
      

    }else{
      empty.style.display='none';
      diceBtn.style.display='flex';
    }
  }

})

//add the current quote to storage when book mark icon is clickked
bookMarkBtn.addEventListener('click',function(){
  if(bookMarkBtn.getAttribute('name') !== 'bookmark'){
    Store.setBookMarkedQuotes(adviceText.textContent, titleId.textContent);
    bookMarkBtn.setAttribute('name','bookmark');
    bookMarkBtn.style.color='hsl(150, 100%, 66%)';
    

  }else{
    alert('It has alredy been added to bookmark');
  }  

});

//get random advice on when the button is clicked
diceBtn.addEventListener('click',function(){
  if(bookMarkBtn.getAttribute('name') === 'bookmark'){
    bookMarkBtn.setAttribute('name','bookmark-outline');
    bookMarkBtn.style.color='hsl(193, 38%, 86%)';
  }
  getRandomAdvice();
});

//delete a bookmark.
bookContainer.addEventListener('click',function(e){
  if(e.target.className ==='delete md hydrated'){
    ui.removeBookMarked(e.target);
    let elementId =e.target.parentElement.parentElement.firstElementChild.textContent;
    Store.removeBookmarkedQuotes(elementId);
  }

});



function getBookMarked(){
  const bookmarks=Store.getBookMarkedQuotes();
  ui.displayBookMarked(bookmarks);
}

function getRandomAdvice(){
  advice.getRandomAdvice()
  .then(results=>{ui.displayContent(results)})
  .catch(e=>console.log(e));
}

