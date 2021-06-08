/*import React from "react"

const DisplayEntry = ({ name }) => {
    return(
        <div>
            {name} 
        </div>
    )
}

const DisplayEntries = ({ names, regVal }) => {
    const regExp = new RegExp(regVal, "i")
    const filteredArray = names.filter((entry) => regExp.test(entry.name))
    const namesArray = filteredArray.map((entry) => <DisplayEntry key={entry.id} name={entry.name} />)
    return(
    <div>
        {namesArray}
    </div>
    )
}

export default DisplayEntries*/

import React, {useState, useEffect} from "react"
import service from "./services.js"
import {Row, Col, Table, Card, CardBody} from 'reactstrap';
import { Grid,  TableHeaderRow, TableEditColumn, TableInlineCellEditing } from '@devexpress/dx-react-grid-bootstrap4';
import { Link } from "react-router-dom";
const getRowId = row => row.id;

const DisplayEntry = ({ name, street, apartment,doorno, region, country, id }) => {
    const [ name1, setName ] = useState(name)
    const [ street1, setStreet] = useState(street)
    const [ apartment1, setApartment] = useState(apartment)
    const [ doorno1, setDoorno] = useState(doorno)
    const [ region1, setRegion] = useState(region)
    const [ country1, setCountry] = useState(country)
  //  const [ newNumber, setNumber ] = useState(number)
    const [ buttonVal, setButtonVal ] = useState("")
    const [markers, setMarkers] = useState([])
   

      useEffect(()=>{
        service
        .getAll()
        .then(latlng =>{
          console.log("returning", latlng)
          setMarkers(latlng)
        })
      },[])

    // const [columns] = useState([
    //     {
    //         title: "Name",
    //         name: "name",
    //     },
    //     {
    //         title: "Lat",
    //         name: "lat",
    //         sortable: true,
    //     },
    //     {
    //         title: "Lng",
    //         name: "lng",
    //         sortable: true,
    //     },
    // ]);
    // const [rows, setRows] = useState([
    //     {newName},
    //     {newLat},
    //     {newLng}
        
    // ]);
    // const [editingCells, setEditingCells] = useState([]);

    // const deleteHandler = (id) =>{
    //     const handler = () =>{
    //         if(window.confirm(`Do you really want to delete ${name}\'s Building details?`)){
    //             service.deletion(id)
    //             .then(response => {
                    
    //                 setName("")
    //                 setStreet("")
    //                 setApartment("")
    //               setDoorno("")
    //               setRegion("")
    //               setCountry("")
    //             setButtonVal("")
    //             })
    //         }
    //     }
    //     return handler
    // }
    const deleteHandler = (id) => {
        const handler = () =>{
                   if(window.confirm(`Do you really want to delete ${name}\'s Building details?`)){
  
        service
        .deletion(id)
          .then(response => {
            setName("")
                    setStreet("")
                    setApartment("")
                  setDoorno("")
                  setRegion("")
                   setCountry("")
                setButtonVal("")
          })
        }
    }
    return handler
          
      };

    useEffect(()=>{
        setButtonVal(<button onClick={deleteHandler(id)}>delete</button>)
    },
    [])

    return(
       
        <div>
            <Table hover className="table" items={markers}>
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">Address</th>
         <th scope="col">Delete</th>
         
      </tr>
   </thead>
   <tbody>
     
                                {
                                    markers.map((item, index) => (
                                       
                                        <tr key={index}>
                                            <td >{item.id} </td>
                                           <td> <Link   to={item.link} className="nav-link font-weight-bold ">{name1} </Link></td>
                                            <td >{street1}   {apartment1} {doorno1} {region1} {country1}</td>
                                            {buttonVal} 

                                        </tr>
                                    ))
                                }


   </tbody>
   </Table>
            {/* {newName}
            {newLat}
            {newLng}
            {buttonVal} */}
           

            {/* <Table className="table" items={{DisplayEntries}}>   
      <thead>
    
    <th>Name</th>
    <th>Lat</th>
    <th>Lng</th>
  
          </thead>          
 
<tbody>
 
  <tr>
    
  </tr>
  </tbody>
  </Table> */}

        </div> 
    )
}

const DisplayEntries = ({ names, regVal }) => {
    const regExp = new RegExp(regVal, "i")
    const filteredArray = names.filter((entry) => regExp.test(entry.name))
    const namesArray = filteredArray.map((entry) => <DisplayEntry key={entry.id} name={entry.description} street={entry.street} apartment={entry.Apartment} doorno={entry.doornum} region={entry.region} country={entry.country} id={entry.id} />)
    
    return(
    <div>
        {namesArray}
    </div>
    )
}

export default DisplayEntries