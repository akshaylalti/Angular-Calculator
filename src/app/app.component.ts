import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  fun:any='noFunction';
  input:number=0;
  calNum:string='noValue';
  firstNumber:number = 0;
  secondNumber:number = 0;
  onClickValue(val:string,type:any){
    if( type == 'number'){
      this.CalNumber( val);
    }
    else if (type == 'function'){
      this.callFunction(val);
    }
  }

  CalNumber( val:string){
    if(this.calNum != 'noValue'){
      this.calNum = this.calNum + val;
    }else{
      this.calNum = val;
    }
    this.input = parseFloat(this.calNum);
  }

  callFunction( val:string){
    if( this.fun == 'C'){
      this.ClearFun();
    }
    else if( this.fun == 'noFunction'){
      this.firstNumber = this.input;
      this.calNum = 'noValue';
      this.input = 0;
      this.fun = val;
    }
    else if(this.fun != 'noFunction'){
      this.secondNumber = this.input;
      this.calculator(val);
    }
  }

  calculator(val : string)
  {
    if(this.fun == '+'){
      const result = this.firstNumber + this.secondNumber;
      this.input = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun =  val;
      if( val == '='){
        this.EqualFun();
      }
    }
    if(this.fun == '-'){
      const result = this.firstNumber - this.secondNumber;
      this.input = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun =  val;
      if( val == '='){
        this.EqualFun();
      }
    }
    if(this.fun == '*'){
      const result= this.firstNumber * this.secondNumber;
      this.input = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun =  val;
      if( val == '='){
        this.EqualFun();
      }
    }
    if(this.fun == '/'){
      const result= this.firstNumber / this.secondNumber;
      this.input = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun =  val;
      if( val == '='){
        this.EqualFun();
      }
    }
    if(this.fun == '%'){
      const result = this.firstNumber % this.secondNumber;
      this.input = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun =  val;
      if( val == '='){
        this.EqualFun();
      }
    }
  }


  EqualFun(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNum = 'noValue';
    this.fun = 'nofunction';
  }
  ClearFun(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNum = 'noValue';
    this.fun = 'nofunction';
    this.input = 0;
  }
}
