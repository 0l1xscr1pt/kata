function lowercaseCount(string){
    let result = string.match(/[a-z]/g);
    let count = result.length;
    
    console.log(result, count);
}



lowercaseCount("abc")//, 3);
lowercaseCount("abcABC123")//, 3);
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")//, 3);
// lowercaseCount("")//, 0)
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")//, 0)