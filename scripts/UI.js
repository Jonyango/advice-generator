class UI{
  constructor(){
    this.titleId=document.getElementById('advice-title')
    this.advice= document.getElementById('advice-text');
  }

  displayContent(results){
    const{id,advice}=results.slip;
    this.titleId.textContent=`ADVICE  #${id}`
    this.advice.textContent=`"${advice}"`;
  }
}