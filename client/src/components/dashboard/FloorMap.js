/* eslint-disable jsx-a11y/anchor-is-valid */
 //import React from 'react';
 //import { LayersControl as BaseLayersControl } from 'react-leaflet';
 import { CardBody,Card,ButtonGroup, Button,ButtonToolbar, Label } from 'reactstrap';
 import React, { useEffect, useState } from "react";
 
 import {Tooltip, Polygon, Popup, Rectangle, Marker, TileLayer , Map,LayersControl, LayerGroup} from 'react-leaflet';
import service from './services';
import Map1 from './Map1';
import { Link } from "react-router-dom";
import SlickSliderStyle1 from "./SlickSliderStyle1";


const FloorMap  = () => {
  
    

    const [markers, setMarkers] = useState([])
   

      useEffect(()=>{
        service
        .getAll()
        .then(latlng =>{
          console.log("returning", latlng)
          setMarkers(latlng)
        })
      },[])



     const refno=window.location.pathname.replace('/FloorMap/','');
      
     const handleClick = (e) => {
       console.log(e.target.value)
      debugger;
    }

  return (

    <Card >
    <CardBody>

<div>


{/* <div> <Link to="/Map1" className="btn btn-primary"><p class="ri-home-4-line"> Home </p></Link></div> */}





                        {markers.filter(item => item.id===refno).map(filteredName => (
                            <div>
                              
                             {/* <h1 className="display-7">#{filteredName.id}-{filteredName.description}</h1> */}
                             <h1 className="display-9">{filteredName.street}   {filteredName.Apartment} {filteredName.doornum} {filteredName.region} {filteredName.country}</h1>
                             {/* <ButtonToolbar className="mt-3">
                             <ButtonGroup className="mr-2">
                                 {filteredName.floors.map((item2, index) => (
                                       
                                      <Button color="secondary" data-key={index}
                                      
                                      onClick={handleClick}> {item2.description}</Button>

  
                                   ))}
                                   </ButtonGroup></ButtonToolbar> */}
                             </div>




                        ))}
                        
                        
                        </div>
                        <div>
                        
                        {markers.filter(item => item.id===refno).map(filteredName => (
                            <div>

                         <Map
                                    style={ { height: "500px", width: "100%"}}
                                    
                                    center={[filteredName.latitude, filteredName.longitude]} zoom={16} maxZoom={17}
                                    
                                >
                                  

                                        {/* <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    /> */}

<LayersControl position="topright">
<LayersControl.BaseLayer checked name={filteredName.name}>
  
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {filteredName.floors.map((floor, index) => (
        <LayersControl.Overlay checked name={floor.description}>
        <LayerGroup>
          <Polygon positions={floor.boundaries} color={floor.color}
                             />
        </LayerGroup>
        </LayersControl.Overlay>
      
      ))} */}
       
         {/* <Polygon positions={floor.boundaries} color={floor.color}
                             />  */}
      </LayersControl.BaseLayer>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredName.floors.map((floor, index) => (
        <LayersControl.BaseLayer checked name={floor.description}>
        <LayerGroup>
          <Polygon positions={floor.boundaries} color={floor.color}
                             />
{
  floor.blocks.map((block, ind) => (
    <Polygon positions={block.bounds}>
          {/* <Tooltip sticky>        {block.text}</Tooltip> */}
      {/* <Popup direction="center" >
        {block.text}
      </Popup> */
      
      <Marker position={block.marker}>
              <Popup>
                    <span>{block.text}</span>
                    {/* <div className="iq-card-body" id={'post-slider'}>
                              <SlickSliderStyle1 slidesToShow={2}>
                              <li className="d-flex align-items-center">
                                {block.images.map((img, idx) => (
                                  <div>
                                  <div className="post-image">
                                  <a href="#">
                                      <img src={img} alt="post-image" className="img-fluid rounded" />
                                  </a>
                                  </div>
                                  <div className="post-content pl-3">

                                  <div className="text-center d-flex align-items-center justify-content-between">
                                      
                                  </div>
                                  </div>
                                  </div>
                                ))}
                                   
                                 </li>
                                 </SlickSliderStyle1>
                                 </div> */}
              </Popup>
              
      </Marker>

      }
    </Polygon> 
                             
                             

  ))
}

        </LayerGroup>
        </LayersControl.BaseLayer>
      
      ))}


     
      
      
      
      
{/* {filteredName.floors.map((floor, index) => (
      
))} */}
      
      </LayersControl>

                                    {/* {filteredName.floors.map((floor, index) => (
                            //           <Polygon positions={floor.boundaries} color={floor.color}
                            //  /> 
                            <LayersControl.Overlay name={floor.description} id={floor.floorno}>
                            <LayerGroup>
                            <Polygon positions={floor.boundaries} color={floor.color}
                              /> 
                            </LayerGroup>
                          </LayersControl.Overlay>

                                    ))} */}



                             </Map> 
                             </div>
                        ))
                        }
                        </div>
    </CardBody>
    </Card>  

  );
}

export default FloorMap;
