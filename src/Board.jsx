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
        <ul className="list-group">
            Danh sách các Board của người dùng
          <br/><br/>
          {data.map(item => (
            <li className='list-group-item'>
              {'id: '+item.id+' Username: '+item.username+' Name: '+item.name}
            </li>
          ))}
        </ul>
    );
}

export default Board;
