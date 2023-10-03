import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'calculator';
  fun: any = 'noFunction';
  funVal: string = '';
  userInput: string = '';
  res: number = 0;
  calNum: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;
  isFunTemp: number = 0;

  constructor(private title: Title) {
    this.title.setTitle(this.pageTitle);
  }

  ngOnInit() {}

  onClickValue(val: string, type: any) {
    debugger;
    if (val != '=') {
      this.userInput += val;
    }

    if (val != 'C') {
      if (type == 'number') {
        this.CalNumber(val);
      } else if (type == 'function') {
        this.fun = type;
        if (val != '=') {
          this.isFunTemp++;
          this.funVal = val;
        }
        this.callFunction(val, type);
      }
    } else {
      this.ClearFun();
    }
  }

  CalNumber(val: string) {
    if (this.calNum != 'noValue') {
      this.calNum = this.calNum + val;
    } else {
      this.calNum = val;
    }
    this.res = parseFloat(this.calNum);
  }

  callFunction(val: string, type: string) {
    if (type == 'function' && val != '=' && this.isFunTemp == 1) {
      this.firstNumber = this.res;
      this.calNum = 'noValue';
      this.res = 0;
      this.fun = val;
    } else {
      debugger;
      this.secondNumber = this.res;
      this.calculator(val);
    }
  }

  calculator(val: string) {
    if (this.funVal == '+') {
      const result = this.firstNumber + this.secondNumber;
      this.res = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun = val;
      if (val == '=') {
        this.EqualFun();
      }
    }
    if (this.funVal == '-') {
      const result = this.firstNumber - this.secondNumber;
      this.res = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun = val;
      if (val == '=') {
        this.EqualFun();
      }
    }
    if (this.funVal == '*') {
      const result = this.firstNumber * this.secondNumber;
      this.res = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun = val;
      if (val == '=') {
        this.EqualFun();
      }
    }
    if (this.funVal == '/') {
      const result = this.firstNumber / this.secondNumber;
      this.res = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun = val;
      if (val == '=') {
        this.EqualFun();
      }
    }
    if (this.funVal == '%') {
      const result = this.firstNumber % this.secondNumber;
      this.res = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNum = 'noValue';
      this.fun = val;
      if (val == '=') {
        this.EqualFun();
      }
    }
  }

  EqualFun() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNum = 'noValue';
    this.fun = 'nofunction';
    this.isFunTemp = 0;
    this.funVal = '';
  }
  ClearFun() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calNum = 'noValue';
    this.fun = 'nofunction';
    this.res = 0;
    this.userInput = '';
    this.funVal = '';
    this.isFunTemp = 0;
  }
}
