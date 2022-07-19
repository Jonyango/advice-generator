class Store{
 
  static getBookMarkedQuotes(){
    let bookmarks;
    if(localStorage.getItem('bookMarked') === null){
      bookmarks = [];
    }else{
      bookmarks =JSON.parse(localStorage.getItem('bookMarked'));
    }

    return bookmarks;

  }

  static setBookMarkedQuotes(adviceText, Id){
    let bookMarks;

    if(localStorage.getItem('bookMarked') === null){
      bookMarks=[];
    }else{
      bookMarks =JSON.parse(localStorage.getItem('bookMarked'));
    }

    bookMarks.push({text:adviceText, id:Id});

    localStorage.setItem('bookMarked', JSON.stringify(bookMarks));
  }

  static getSharedQuotes(){
    let sharedQuotes;
    if(localStorage.getItem('shared') === null){
      sharedQuotes = [];
    }else{
      sharedQuotes =JSON.parse(localStorage.getItem('shared'));
    }

    return sharedQuotes;

  }
  static setSharedQuotes(adviceText, Id){
    let sharedQuotes;

    if(localStorage.getItem('shared') === null){
      sharedQuotes=[];
    }else{
      sharedQuotes =JSON.parse(localStorage.getItem('shared'));
    }

    sharedQuotes.push({text:adviceText, id:Id});

    localStorage.setItem('shared', JSON.stringify(sharedQuotes));

  }

  static removeBookmarkedQuotes(target){
    const bookmarks = Store.getBookMarkedQuotes();
    console.log(bookmarks);

    bookmarks.forEach(function(bookmark, index){
      if(bookmark.id === target){
        console.log('true')
        bookmarks.splice(index,1);
      }
    });
    localStorage.setItem('bookMarked',JSON.stringify(bookmarks));

  }
}