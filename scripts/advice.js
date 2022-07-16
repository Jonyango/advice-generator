class AdviceApi{

  constructor(){
    this.baseUrl='https://api.adviceslip.com/advice';
  }

  async getRandomAdvice(){
    const response = await fetch(`${this.baseUrl}`);

    const responseData = await response.json();

    return responseData

  }
}