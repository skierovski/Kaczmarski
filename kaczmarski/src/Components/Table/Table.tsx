import React, { useEffect, useState } from "react";
import './Table.scss'


interface DataType {
    Id: number;
    Name: string;
    NIP: string;
    Value: number;
    Date: string;
  }

const Table: React.FC = () => {
    const [data, setData] = useState<DataType[]>([])
    const [order, setOrder] = useState("ASC")
    useEffect(() => {
        fetch('	https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
    console.log(data)



    function Sort(SortBy: string) {
        let SortedData = [];
        if(SortBy === "Name" || SortBy === "NIP"){
            SortedData  = data.sort((a, b) => 
                order === "ASC"? a[SortBy].localeCompare(b[SortBy]):
                b[SortBy].localeCompare(a[SortBy])
            )
            setData(SortedData)
        }
        else if(SortBy === "Value"){
            SortedData  = data.sort((a, b) => 
                order === "ASC"? a[SortBy] -(b[SortBy]):
                b[SortBy] -(a[SortBy])
            )
            setData(SortedData)
        }
        else if(SortBy === "Date"){
            SortedData  = data.sort((a, b) => 
                order === "ASC"? +new Date(a[SortBy]) - +new Date(b[SortBy]):
                +new Date(b[SortBy]) - +new Date(a[SortBy])
            )
            setData(SortedData)
        }        
        order === "ASC"? setOrder("DSC"): setOrder("ASC")
    }


    return (
        <div className="Table_Container">
            <table className="Table_Box">
                <thead>
                    <tr className="Table_Header">
                        <th onClick={() => Sort("Name")}>DŁUŻNIK</th>
                        <th onClick={() => Sort("NIP")}>NIP</th>
                        <th onClick={() => Sort("Value")}>KWOTA ZADŁUŻENIA</th>
                        <th onClick={() => Sort("Date")}>DATA POWSTANIA ZADŁUŻENIA</th>
                    </tr>
                </thead>
                <tbody className="Table_Body">
                    
                        {data.length > 1 ? data.map((record) => (
                            <tr key={record.Id}>
                            <td>{record.Name}</td>
                            <td>{record.NIP}</td>
                            <td>{record.Value}</td>
                            <td>{record.Date.split('T')[0]}</td>
                            </tr>
                        )):
                        <div>Data Loading ...</div>}
                </tbody>
            </table>
        </div>
    )
}

export default Table;