const advice = new AdviceApi();
const ui = new UI();

const tabContainer=document.querySelector('.tabs');
const tabs =document.querySelectorAll('.tab-links');
const contents = document.querySelectorAll('.tabs-content');

//fetch the advice when the DOM content is loaded
document.addEventListener('DOMContentLoaded',function(){
  advice.getRandomAdvice()
  .then(results=>{ui.displayContent(results)})
  .catch(e=>console.log(e));
});



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
    document.getElementById(e.target.textContent).style.display="block"
    console.log(e.target.textContent)
    e.target.className += " active";
  }

})