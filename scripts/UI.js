class UI{
  constructor(){
    this.titleId=document.querySelector('.advice-title');
    this.advice= document.querySelector('.advice-text');
    this.bookText=document.getElementById('book-text');
    this.bookTitle=document.getElementById('book-id');
  }

  displayContent(results){
    const{id,advice}=results.slip;
    this.titleId.textContent=`ADVICE  #${id}`
    this.advice.textContent=`"${advice}"`;
  }

  displayBookMarked(bookmarks){
    let that =this;
    if (bookmarks.length === 0){  
      const overallContainer = document.getElementById('bookmarked')
      const div = document.createElement('div');
      div.className='marked-container';
      div.textContent=`You haven't BookMarked any quotes yet! `;
      div.style.background= 'transparent';
      overallContainer.appendChild(div);

    }
    bookmarks.forEach(function(bookmark){
    const overallContainer = document.getElementById('bookmarked')
      const div = document.createElement('div');
      div.className='marked-container';
      div.innerHTML=`
          <h4 id="book-id"   class="advice-title" >${bookmark.id}</h4>
          <p  id="book-text" class="advice-text" >${bookmark.text}</p>
          <div class="dividers">
            <img src="images/pattern-divider-desktop.svg" alt="pattern-divider-desktop" class='img-divider'>
          </div>
          <div>
    <ion-icon name="trash-outline" class="delete"></ion-icon>
  </div>
          `
          

          overallContainer.appendChild(div);
            
    })

  }

  removeBookMarked(target){
    if(target.className === 'delete md hydrated'){
      target.parentElement.parentElement.remove();
    }
  }
}