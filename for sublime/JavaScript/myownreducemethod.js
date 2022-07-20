 //build my own [educe method

// Array.prototype.myreduce = function(callback, result/*vi bien tich tru(initial value) sau
// 	khi lap di lap lai thi se return ra result*/) {
// 	// body...
// 	let i = 0
// 	if (arguments.length < 2) {
// 		i = 1
// 		result = this[0]
// 	}
// 	for (; i < this.length; i++ ) {
// 		result = callback(result, this[i], i, this)//callback chinh la func doi so dc dua vao
// 	}
// 	return result
// };



// const myAr = [1,2,3,4,5]

// const myresult = myAr.myreduce(function the_result(total, currentnum) {
// 	return total + currentnum
// }, 10)



// console.log(myresult)


//find

// Array.prototype.find2 = function(callback) {
// 	for (var i in this) {
// 		if (this.hasOwnProperty(i)) {
// 			if (callback(this[i], i, this)) {
// 				result = this[i];
// 				return result;
// 			};
// 		};
// 	};
// 	return null;

// }

// {
// myAr = [
// 	language: 'PHP',
// 	coin: 180
// },
// {
// 	language: 'Python1',
// 	coin: 200
// },
// {
// 	language:'JS',
// 	coin:100
// },
// {
// 	language: 'Python',
// 	coin: 2010
// },]

// var newAR = myAr.find(function the_result2(value) {
// 	return value.language === 'P'
// })

// console.log(newAR)


//forEach

// Array.prototype.forEach2 = function(callback) {

// 	for (var index in this) {

// 		if(this.hasOwnProperty(index)) {
// 			callback(this[index], index, this)
// 		}



// 	}



// }

// myAr = ['PHP', 'Python', 'CSS']

// myAr.forEach2(function myFunction(value, index, array) {
// 	console.log(value, index, array)
// })


// Array.prototype.filter2 = function(callback) {

// 	arraylength = this.length
// 	console.log(arraylength)
// 	result_array = []
// 	for (var value in this) {
// 		console.log(value)//number
// 		 var result = callback(this[value], value, this)
// 		 console.log(result)//output: true & false
// 		if (result == true) {
// 			result_array.push(this[value])


// 		}
// 	}
// 	return result_array
// }


// myAr = [1,2,3,4,5,6,54];

// var newAr = myAr.filter2(function(value) {
// 	return value < 53
// })

// console.log(newAr)

// some
// Array.prototype.some2 = function(callback) {
// 	for (var i in this) {
// 		if (this.hasOwnProperty(i)) {
// 			result = callback(this[i], i, this)
// 			//console.log(result)
// 			if (result) {
// 				return true;
// 			}

// 			}

// 		}
// 		return false;

// 	}


// const array = [6, 2, 6, 5, 10];


// const even = (element) => element % 2 !== 0;// tim so le

// console.log(array.some2(even));


//every

 // Array.prototype.every2 = function(callback) {
 	// var output = true;
 	// for (var index in this) {
 	// 	if (this.hasOwnProperty(index)) {
 	// 		var result = callback(this[index], index, this)
 	// 		console.log(result)
 	// 		if (!result) {
 	// 			output = false;
 	// 			break;
 	// 		};
 	// 	};
 	// };
 	// return output;
 // }

 // myAr = [20,2,3,4,5];

// var newAR = (value) => {return value > 1}
 // console.log(myAr.every2(newAR))

// reduce with for ins
// var result = 1
// function factorials(number) {
//   for (var i = 1;i <= number;i++ ) {
//   		console.log(i);
//   	  result *= i
//   	  console.log(`this is ${result}`);
//   }
//   return result
// }
// console.log(factorials(6))


//tinh giai thua
/**
  * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
  */


//sử dụng vòng lặp for in để in ra một mảng gồm các key của obj mẹ cho trước, mảng bao gồm cả key của nested object(object lồng object)

//==>// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     },

//   }
// };



//  var resultArr = [];
//  function getObjectKey(obj, keys) {
//  	for(var key in obj) {
//  		console.log(`this is the key: ${key}`)
//  		console.log('this is value:', obj[key]);
//  		console.log('this is the type:', typeof obj[key]);
//  		resultArr[pus[tke[)[
//  		if (typeof obj[key] === 'object') {	//diem dung kiem tra value
//  			return getObjectKey(obj[key])
//  		}
//  	}
//  	return resultArr
//  }

//  console.log(getObjectKey(apartment))


