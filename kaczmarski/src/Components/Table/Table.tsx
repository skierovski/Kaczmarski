import React, { useEffect, useState } from "react";
import './Table.scss'


interface Provider {
    Id: number;
    Name: string;
    NIP: string;
    Value: number;
    Date: string;
  }

const Table: React.FC = () => {
    const [data, setData] = useState<Provider[]>([])
    useEffect(() => {
        fetch('	https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts')
        .then(response => response.json())
        .then(data => setData(data))
        
    }, [])
    return (
        <div className="Table_Container">
            <table className="Table_Box">
                <thead>
                    <tr className="Table_Header">
                        <th>
                            <span>DŁUŻNIK</span>
                            <button>🔼</button>
                            <button>🔽</button>
                            </th>
                            <th>
                            <span>NIP</span>
                            <button>🔼</button>
                            <button>🔽</button>
                            </th>
                            <th>
                            <span>KWOTA ZADŁUŻENIA</span>
                            <button>🔼</button>
                            <button>🔽</button>
                            </th>
                            <th>
                            <span>DATA POWSTANIA ZADŁUŻENIA</span>
                            <button>🔼</button>
                            <button>🔽</button>
                            </th>
                    </tr>
                </thead>
                <tbody className="Table_Body">
                    
                        {data ? data.map((record) => (
                            <tr key={record.Id}>
                            <td>{record.Name}</td>
                            <td>{record.NIP}</td>
                            <td>{record.Value}</td>
                            <td>{record.Date.split('T')[0]}</td>
                            </tr>
                        )):
                        <div></div>}
                </tbody>
            </table>
        </div>
    )
}

export default Table;