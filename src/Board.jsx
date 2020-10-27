import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Board() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyData = async () => {
          const result = await axios(
            'http://localhost:3030/board',
          );
          setData(result.data.data);
        };
        fetchMyData();
      }, []);
    return (
        <ul class="list-group">
          {data.map(item => (
            <li class='list-group-item'>
              {'id: '+item.id+' Username: '+item.username+' Name: '+item.name}
            </li>
          ))}
        </ul>
    );
}

export default Board;
