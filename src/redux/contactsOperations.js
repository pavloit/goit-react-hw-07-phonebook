import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://65b406d0770d43aba47ad797.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    return await axios.get('').data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    return await axios.post('', contact)
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    await axios.delete('', id);
    return id;
});

// {
//     "id": 1706375073791,
//         "name": "hello",
//             "number": "343-44-44"
// }