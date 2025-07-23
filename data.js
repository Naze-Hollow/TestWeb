const name = "nazephyrus";
let age = 69;

function generatebiodata() {
    if (age > 10 && age < 18) {
        console.log('youre still a teenager');
    }
    else if (age > 1 && age < 10 ) {
        console.log('youre a kids');
    }    
    else if (age > 18 && age < 30 ) {
        console.log('youre an adult');
    }
    else if (age > 30) {
        console.log('youre so old');
    } 
    else {
        console.log('youre a baby')
    }
}

generatebiodata();