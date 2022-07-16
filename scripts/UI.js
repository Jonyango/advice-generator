class UI{
  constructor(){
    // this.id=document.getElementById('advice-id')
    this.advice= document.getElementById('advice');
  }

  displayContent(results){
    const{id,advice}=results.slip;
    // this.id.textContent=`Advice #${id}`
    this.advice.textContent=`"${advice}"`;
  }
}