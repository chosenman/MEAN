var myNum: number = 5;
var myString: string = "hello universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: { name: string } = { name: "Bill" };
var anyghingVariable: any = "Hey";
anyghingVariable = 25;
var arrayOne: Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
var myObj2: { x: number, y: number} = {x: 5, y: 10}
// object constructor
class MyNode {
	val: number;
	_priv: number;
    constructor(val: number) {
    this.val = 0;
		this.val = val;
	}
	doSomething(){
		this._priv = 10;
	}
}
var myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);

function myFunction():void {

	console.log("hello world")
	return;
}

function sendingErrors():never {
	throw new Error('Error message')
}
