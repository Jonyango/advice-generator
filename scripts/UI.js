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
    bookmarks.forEach(function(bookmark){
      that.bookTitle.textContent=`${bookmark.id}`
      that.bookText.textContent=`"${bookmark.text}"`;
      

    })

  }
}