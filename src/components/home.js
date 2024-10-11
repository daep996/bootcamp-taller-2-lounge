import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../store/dataSlice'


const Home = () => {

    const data = useSelector((state) => state.dataFetch.data);
    const dispatch = useDispatch();
    const url = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((dataAPI) => {
                console.log('results: ', dataAPI)
                dispatch(setData(dataAPI))
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>
            {data.length > 0 && data.map((producto) => {
                return (
                    <p key={producto.id}>{producto.id} - {producto.title}</p>
                )
            })}
            </p>
        </div>
    )
}

export default Home;