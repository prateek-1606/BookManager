import axios from 'axios';
const URL = 'https://bookmanagerapi.herokuapp.com'

export const login = async (data) => {
    try {
        const res = await axios.post(`${URL}/signin`, {
            email: data.email,
            password: data.password
        })

        return res;
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const register = async (data) => {
    try {
        const res = await axios.post(`${URL}/signup`, {
            email: data.email,
            password: data.password,
            name: data.name
        })

        console.log(res);
        return res;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export const getbook = async () => {
    try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const res = await axios.get(`${URL}/book`, { headers: { "Authorization": `Bearer ${token}` } })

        return res;
    }
    catch (error) {
        console.log(error)
    }
}

export const addbook = async (data) => {
    try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const res = await axios.post(`${URL}/book`, {
            Authorname: data.Authorname,
            YearOfPublication: data.YearOfPublication,
            NoOfCopies: data.NoOfCopies
        }, { headers: { "Authorization": `Bearer ${token}` } })

        return res;
    }
    catch (error) {
        console.log(error)
    }
}

export const Increment = async (id) => {
    try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const res = await axios.put(`${URL}/book/increment/${id}`, {}, { headers: { "Authorization": `Bearer ${token}` } })

        return res;
    }
    catch (error) {
        console.log(error)
    }
}

export const Decrement = async (id) => {
    try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const res = await axios.put(`${URL}/book/decrement/${id}`, { headers: { "Authorization": `Bearer ${token}` } })

        return res;
    }
    catch (error) {
        console.log(error)
    }
}
