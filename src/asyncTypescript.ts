{
    type ToDo = {
        userId: number
        id: number
        title: string
        completed: boolean
    }
    const getData = async(): Promise<ToDo> =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data)
        return data;
    }

    getData();
}