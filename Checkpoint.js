var ch
ch=prompt('Entrer une phrase: ')
var longch=ch.length
var v=0
var w=1
for (let i=0; i<longch; i++) {
    var c=ch[i].toUpperCase()
    if (c=="A" || c=="U" || c=="I" || c=="O" || c=="E" || c=="Y") {
        v=v+1        
    }
    if (ch[i].charCodeAt()==32) {
        w=w+1 
    }
}
console.log('Le nombre des voyelles: ',v)
console.log('the number of words:' ,w)
console.log('the length of the phrase:' ,longch)