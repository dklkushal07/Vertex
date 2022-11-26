import React,{useState,useEffect} from 'react'
import { Navigation ,Footer} from '../../Components'
import { TableContainer,Paper,Table,TableBody,TableCell,TableHead,TableRow } from './table'
import "./Profile.css"
const Profile = ({consumer,producer}) => {

    const [rows,setRows] = useState([{}]);

    const createRows = (id,weight,status,date) => {
        const obj = {id,weight,status,date}
        setRows(prevRow => [...prevRow,obj])
        console.log(1);
    }
    useEffect(() => {
            createRows(1,10,"Ordered","2022-11-11")
            createRows(2,13,"Delivered","2022-11-15")
            createRows(3,11,"Ordered","2022-11-19")
            createRows(4,8,"On Way","2022-11-21")

    },[])

    
  return (
    <>
    <Navigation/>
    {
        consumer && (
            <>
            <div className='app__profile-container section__padding'>
            <TableContainer component={Paper}>
                    <Table sx={{minWidth:650}} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>S.N</TableCell>
                                <TableCell>Potatoes (in kilos)</TableCell>
                                <TableCell align='right'>Status</TableCell>
                                <TableCell align='right'>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                console.log(rows)
                            }
                            {
                                rows.map((row,index) => {
                                    return(
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>
                                                {row.weight}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {row.status}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.date}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                        
                    </Table>
                </TableContainer>
            </div>
            </>
        )
    }
    {
        producer && (
            <>
            <div className='app__profile-container'>

            </div>
            </>
        )
    }
    </>
  )
}

export default Profile