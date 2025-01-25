/**
 * 1. `i` is odd set pre-fix as "  "
 * 2. `i` is even set pre-fix as ""
 * 3. print i rows and j cols
 */

function brickwall(n) {
    for(let i=0; i<n; i++) {
        let brickrow = (i%2) ? "  " : "";

        for(let j=0; j<n;j++){
            brickrow += "[] ";
        }
        console.log(brickrow);
    }
}

brickwall(5)