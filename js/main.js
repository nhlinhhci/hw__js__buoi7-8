function getEle(id) {
  return document.getElementById(id);
}

var array = [];

function appendArray(event) {
  event.preventDefault();

  var number = getEle("number").value;
  if (number == "") {
    alert("Hãy nhập giá trị vào");
    return;
  } else {
    number = parseInt(number);
    array.push(number);
    getEle("show__array").innerHTML = "array = [" + array + "]";
    console.log(array);
  }
  getEle("number__form").reset();

  return array;
}

getEle("positiveSum").addEventListener("click", function () {
  var positiveSum = 0;
  getEle("positive__sum__result").innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveSum += array[i];
    }
  }
  getEle("positive__sum__result").innerHTML = " = " + positiveSum;
});

getEle("positiveCount").addEventListener("click", function () {
  var positiveCount = 0;
  getEle("positive__count__result").innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount++;
    }
  }
  getEle("positive__count__result").innerHTML = " = " + positiveCount;
});

getEle("smallestNumber").addEventListener("click", function () {
  var smallest = 0;
  smallest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] <= smallest) {
      smallest = array[i];
    }
  }
  getEle("smallest__number__result").innerHTML = " = " + smallest;
});

getEle("smallestPosNumber").addEventListener("click", function () {
  var smallestPositive = 0;
  smallestPositive = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] <= smallestPositive && array[i] >= 0) {
      smallestPositive = array[i];
    }
  }
  getEle("smallest__pos__number__result").innerHTML = " = " + smallestPositive;
});

getEle("lastEvenNumber").addEventListener("click", function () {
  var lastEvenNumber = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      lastEvenNumber = array[i];
    }
  }
  getEle("last__even__number__result").innerHTML = " = " + lastEvenNumber;
});

getEle("swapNumberPosition").addEventListener("click", function () {
  var numberPosition1 = parseInt(getEle("number__1__position").value);
  var numberPosition2 = parseInt(getEle("number__2__position").value);

  getEle("array__1").innerHTML = "array = <br /> [" + array + "]";

  var temp = array[numberPosition2];
  array[numberPosition2] = array[numberPosition1];
  array[numberPosition1] = temp;
  getEle("swapped__array__1").innerHTML = "new array = <br /> [" + array + "]";
});

getEle("sortArray").addEventListener("click", function () {
  var isSwap;
  var n = array.length - 1;
  var a = array;

  do {
    isSwap = false;
    for (var i = 0; i < n; i++) {
      if (a[i + 1] < a[i]) {
        var temp = a[i + 1];
        a[i + 1] = a[i];
        a[i] = temp;
        isSwap = true;
        console.log(a);
      }
    }
    n--;
  } while (isSwap);

  getEle("sorted__array").innerHTML = "sorted array = <br /> [" + a + "]";
});
