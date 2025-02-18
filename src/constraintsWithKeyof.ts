{
    const getKeyValue = <X, Y extends keyof X>(obj: X, key: Y) =>{
        return obj[key];
    }

    const user = {
        id: 1,
        name: "Habib",
        age: 23
    }

    const value = getKeyValue(user, "age");
    console.log(value)
}