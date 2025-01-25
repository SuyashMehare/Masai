function pinetree(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = n - i;
        let res = "";

        for(let j=1; j<= spaces+(i*2 - 1); j++) {
            if(j <= spaces) res += " ";
            else res +="*";
        }

        console.log(res)
    }
    
    let bar = "";
    for(let i=1; i<n; i++) bar += " ";
    bar += "|";
    console.log(bar);
}

pinetree(5)