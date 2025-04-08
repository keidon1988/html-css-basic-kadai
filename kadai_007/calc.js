let num = Math.floor(Math.random() * 16);

console.log(num);

// 変数numの値によって出力する文字列を切り替える
switch (num) {
  case 3,6,9:
    console.log('3の倍数です')
    break;
  case 5,10:
    console.log('5の倍数です')
    break;
  case 15:
    console.log('3と5の倍数です')
    break;
}