{
    type Alphanumeric = string | number;
    type GetSum = (a: Alphanumeric, b: Alphanumeric) => number | undefined;
    const getSum: GetSum = (a, b) => {
        if(typeof a === "number" && typeof b === "number"){
            return a + b; 
        }
        if(typeof a === "number" && typeof b === "string"){
            return a + Number(b)
        }
        if(typeof a === "string" && typeof b === "number"){
            return Number(a) + b;
        }
        if(typeof a === "string" && typeof b === "string"){
            return Number(a) + Number(b);
        }
    }

    const sum1 = getSum(2, 10);
    const sum2 = getSum("6", 3);
    const sum3 = getSum(3, "9");
    const sum4 = getSum("5", "8");
    
    const sum5 = getSum("a", 4);

    console.log({sum1, sum2, sum3, sum4, sum5})
}