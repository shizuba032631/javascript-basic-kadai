var now = new Date();
function LoadProc() {
  var Year = now.getFullYear();
  var Month = now.getMonth() + 1;
  var Day = now.getDate(); 
  const dateText = `${Year}年${Month}月${Day}日`; 
  console.log(dateText);
}
LoadProc();