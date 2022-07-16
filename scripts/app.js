const tabContainer=document.querySelector('.tabs');
const tabs =document.querySelectorAll('.tab-links');
const contents = document.querySelectorAll('.tabs-content');
console.log(tabs)

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
    e.target.className += " active";
  }

})