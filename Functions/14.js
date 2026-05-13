//Count the vowels
function countVowels(text){
    let count=0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < text.length; i++){
        if (vowels.includes(text[i].toLowerCase())){
            count++;
            
        }
    }
    console.log(count);
}
countVowels('i am a gal');