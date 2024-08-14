interface IMango {
    name: string
    age: number
    email: string
    address: {
        city: string
        country: string
    }
}

type Mango = {
    name: string
    age: number
    email: string
    address: {
        city: string
        country: string
    }
}

const mango: IMango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    },
};




interface IPoly {
    name: string;
    age: number;
    email: string;
}

type Poly = {
    name: string;
    age: number;
    email: string;
}

const poly: Poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};


export {}