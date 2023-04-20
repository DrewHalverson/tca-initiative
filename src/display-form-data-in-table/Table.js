import '../App.css';

const Table = ({tableData}) => {
    return(

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Modifier</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableData.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.playerName}</td>
                                    <td>{data.roll}</td>
                                    <td>{data.modifier}</td>
                                    <td>{data.total}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

    )
}

export default Table;