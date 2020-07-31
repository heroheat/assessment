var age = 16;
var isMember = false;
var result = null;
if (age <= 15){
    result = 'チケットの値段は800円です';
} else if (isMember) {
    result = 'チケットの値段は1000円です';
} else {
    result = 'チケットの値段は1800円です';
}
document.write(result);