var moji = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (i = 0; i < moji.length; i++) {
    for (j = 0; j < moji.length; j++) {
        document.write('<p>' + moji[i] + moji[j] + '</p>');
    }
}