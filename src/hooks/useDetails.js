import { useState } from "react";

export const useDetails = () => {
     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const [size, setSize] = useState('');
     const [error, setError] = useState(false);
     const [user, setUser] = useState('');

     

     return{ name, setName, description, setDescription, size, setSize, error, setError, user, setUser };
}