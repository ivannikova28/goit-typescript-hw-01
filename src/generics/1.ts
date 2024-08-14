import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

// fetchData<Todo[]>("https://jsonplaceholder.typicode.com/todos")
// .then(data => {
//     console.log(data)
//     data.map(item => console.log(item.id, item.title))
// })


// fetchData<User[]>("https://jsonplaceholder.typicode.com/users")
// .then(data => {
//     console.log(data)
//     data.map(item => console.log(item.id, item.name))
// })

export {}