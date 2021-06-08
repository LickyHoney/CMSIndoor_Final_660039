import { CardBody,Card,ButtonGroup, ButtonToolbar,Form,FormGroup,Label,Input, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap';
import React, { useRef, useEffect, useState, useMap} from "react";
import { Col, Row } from "reactstrap";
import { EditControl } from "react-leaflet-draw";
// import "./assets/leaflet.css"
// import "./assets/leaflet.draw.css"
import {  Map, TileLayer, FeatureGroup, Marker,Polyline, Popup, Polygon, Tooltip, Rectangle,  LayersControl, LayerGroup,useMapEvents,useLeaflet} from 'react-leaflet';
import service from './services';
import { makeStyles, Button } from "@material-ui/core";
import { popup } from 'leaflet';
import { text } from 'body-parser';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from "react-dom/server";


const useStyles = makeStyles(theme => ({
  map: ({
      height: `calc(90vh - 90px)`,
      width: '60%',
      zIndex: 0
  }),
  buttonWrapper: {
      zIndex: 1,
      position: "absolute",
      bottom: theme.spacing(2),
      marginLeft: "30%",
      marginBottom: "8%",
      transform: "translateX(-50%)",
  },
  buttonStyle: {
    margin:"10px",
    
  },
  headerWrapper: {
      zIndex: 1,
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(1),
  }
}));

const modalStyles = {
  width   :    500,
  height  :    500
}


const EditFloorMap = (props) => 
{
  const [addFloor, setAddFloor] = useState(false);
  //const mapGlobal = useMap();
  const classes = useStyles(props)
  const editRef = useRef();
  const [markers, setMarkers] = useState([])
  const [newPosition, setNewPosition] = useState([])
  //const [markers1, setMarkers1] = useState([]);
  const [position, setPosition] = useState([]);
  const [mapLayers, setMapLayers] = useState([]);
  const [ newDesc, setNewDesc ] = useState('')
  const [isEdit, setIsEdit] = useState('')
  const [floors, setFloors ] = useState('')
  const [blocks, setBlocks] = useState('')
  const [newText, setNewText] = useState('')
  const [drawing, setDrawing] = useState(false);
  const [showDrawBlock, setShowDrawBlock] = useState(false);
  const [polyFlag, setPolyFlag] = useState('');
  const [activeFloor, setActiveFloor] = useState('')
  const [buildingId, setBuildingId] =  useState('')
  //const editRef = useRef();
  //const [map, setMap] = useState(null);
  const [editBoundaries, setEditBoundaries] = useState(false);
  const [editBlock, setEditBlock] = useState(false);
  const [blockDescription,setBlockDescription] = useState(false);
  const [deleteFloor, setDeleteFloor] = useState(false);
  const [blockName, setBlockName] = useState('')
  const [blockDesc, setBlockDesc] = useState('')
  const [icon, setIcon] = useState('')
  const [activeLayer, setActiveLayer] = useState('')
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  //const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  const leaflet = useLeaflet();
  const editLayerRef = React.useRef();
  let drawControlRef = React.useRef();
  let {map} = leaflet;
  
 
  

  const updateFloor = {

    floorno: 0,
    description: "newDesc",
    color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
    blocks: [],
    boundaries: []
  }
  
  function toggle() {
    setAddFloor(!addFloor);
  }
  function toggleBlock() {
    setEditBlock(!editBlock);
  }
  
  function toggleBoundaries() {
    setEditBoundaries(!editBoundaries);
  }

  function toggleBlockDescription() {
    setBlockDescription(!blockDescription);
  }

  function toggleDeleteFloor() {
    setDeleteFloor(!deleteFloor);
  }

  const onChangeName = e => {
    e.preventDefault();
    setBlockName(e.target.value);
    
  };
  const onChangeDesc = e => {
    e.preventDefault();
    
    setBlockDesc(e.target.value);
    

  };
  const onChangeIcon = e => {
    e.preventDefault();
    
    setIcon(e.target.value);

  };
  //const polygonCenter = markers[0].floors[0].blocks[0]._bounds.getCenter();

  // const onSubmit = e => {
  //   e.preventDefault();

  //   const newUser = {
  //     name: blockName,
  //     description: blockDesc,
  //     icon: icon
      
  //   };
  // }
  // function submitHandler(e) {
  //   e.preventDefault();
  //   setBlockName(e.target.value);
  //   setBlockDesc(e.target.value);
  //   setIcon(e.target.value);
  // }

  function GlobalMapComponent() {
    const mapGlobal = useMap()
    mapGlobal.on( 'baselayerchange', function (e) {
      console.log('Layer name -> ', e.name);
      //console.log('Layer URL -> ', e.layer.options.url);
      //console.log('Layer attribution -> ', e.layer.options.attribution);
  });
    console.log('map center:', mapGlobal.getCenter())
    return null
  }
   
  
const handleEditFloor = (e) => {
  setBuildingId(e.target.value)
  setDrawing(true)
  const { layerType, layer } = e;
  debugger;
  //  if (layerType === "polygon") {
  //     const { _leaflet_id } = layer;
  //     setMapLayers((layers) => [
  //       ...layers,
  //   { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },

  //     // [ id: _leaflet_id, latlng:layer.getLatLngs()[0] ]  ,
  //     ]);
  //   }
    if (buildingId===markers[0].floors[0].boundaryLeaflet_id){
    if (drawing) {
            //editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
           editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
      
        } else {
          editRef.current.leafletElement._toolbars.edit._modes.edit.handler.save() 
           editRef.current.leafletElement._toolbars.edit._modes.edit.handler.disable()
        }
      }
//     console.log(layer)
// console.log(mapLayers)
//         e.layer.on('click', () => {
//           debugger;
//             editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
//         })
//         e.layer.on('contextmenu', () => {
//             //do some contextmenu action here
//         })
//         e.layer.bindTooltip("Text", 
//             {
//               className: 'leaflet-draw-tooltip:before leaflet-draw-tooltip leaflet-draw-tooltip-visible',
//               sticky: true,
//               direction: 'right'
//             }
//         );
}

const handleReset = (e) => {
  debugger;
  
  
  for (var i = 0; i < markers[0].floors.length; i++) { 
    if(markers[0].floors[i].description===activeFloor.name){
    
      
        markers[0].floors[i].boundaries= markers[0].floors[i].boundaries_backup;
        markers[0].floors[i].boundaries_backup = [];
        break;
}
}
}
// const handleFloorReset = (e) => {
//   debugger;
//   if(polyFlag==='B')
//   for (var i = 0; i < markers[0].floors.length; i++) { 
//     if(markers[0].floors[i].description===activeFloor.name){
    
      
//         markers[0].floors[i].blocks[i].bounds= markers[0].floors[i].blocks[i].bounds_backup;
//         markers[0].floors[i].blocks[i].bounds_backup = [];
//         break;
// }
// }
// }
const handleBlock = (e) => {
  setPolyFlag('L');
  debugger;
  for (var i = 0; i < markers[0].floors.length; i++) { 
    if(markers[0].floors[i].description===activeFloor.name){
    
      if(markers[0].floors[i].boundaries.length>0) {
        


        markers[0].floors[i].blocks[i].bound_backup = markers[0].floors[i].blocks[i].bounds;
        markers[0].floors[i].blocks[i].bounds = [];
        
      }
break;
}
}
//toggleBlockDescription();
//toggleBlockDescription();
if (!drawing) {
  editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
} else {
  editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
  editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
}

setDrawing(!drawing)
}

const handleBoundaries = (e) => {
  debugger;
  for (var i = 0; i < markers[0].floors.length; i++) { 
    if(markers[0].floors[i].description===activeFloor.name){
    
      if(markers[0].floors[i].boundaries.length>0) {

        markers[0].floors[i].boundaries_backup = markers[0].floors[i].boundaries;
        markers[0].floors[i].boundaries = [];
        }
break;
}
}
if (!drawing) {
  editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
} else {
  editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
  editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
}

setDrawing(!drawing)

}

const handleManageBoundaries = (e) => {
    debugger;
    console.log(activeFloor);
    console.log(markers);
    setPolyFlag('B')
    for (var i = 0; i < markers[0].floors.length; i++) { 
      if(markers[0].floors[i].description===activeFloor.name){
        debugger;
        if(markers[0].floors[i].boundaries.length>0) {
          debugger;
          toggleBoundaries();
         }

     else {
        const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;
      setMapLayers((layers) => [
        ...layers,
    { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },

      // [ id: _leaflet_id, latlng:layer.getLatLngs()[0] ]  ,
      ]);
    }
    debugger;


    if (!drawing) {
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
  } else {
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
  }

  setDrawing(!drawing)

      }
      }
}
    
  
    
debugger;
  }
   
  const handleClick = () => {

        
    //Edit this method to perform other actions

    if (!drawing) {
        editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
    } else {
        editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
        editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
    }
    setDrawing(!drawing)
}

const handleAddFloor = () => {
  debugger;
}


const handleClickFloor = () => {
  debugger;
   service
   .getBuilding(refno)
   .then(building => {
    console.log("returning", building)
   updateFloor.description=newDesc
  building[0].floors.push(updateFloor)

  setMarkers(building)

  


})
}

const addBoundaries = (e) =>{
  console.log(e);

  const { layerType, layer } = e;
  if (layerType === "polygon") {
    const { _leaflet_id } = layer;
    setMapLayers((layers) => [
         ...layers,
        {  latlngs: layer.getLatLngs()[0] },
       ]);

    // setMapLayers((layers) => [
    //   ...layers,
    //   { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
    // ]);
  }
  setDrawing(false)

  e.layer.on('click', () => {
      editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
  })
  e.layer.on('contextmenu', () => {
      //do some contextmenu action here
  })
  e.layer.bindTooltip("Text", 
      {
        className: 'leaflet-draw-tooltip:before leaflet-draw-tooltip leaflet-draw-tooltip-visiblecg4',
        sticky: true, 
        direction: 'right'
      }
  );



}

const handleMap = (e) =>
{
  debugger;
  const map = editRef.current.leafletElement._map;
  

    
  
  map.on("baselayerchange", (activeFloor, activeLayer) => {
//     //do whatever
debugger;

    console.log(activeFloor);
    
    
   
   
     setActiveFloor(activeFloor);
     
console.log(map);

})
}




const addPolygon = (e) =>{
  console.log(e);

  const { layerType, layer } = e;
  if (layerType === "polygon") {
    const { _leaflet_id } = layer;
    setMapLayers((layers) => [
         ...layers,
        {  latlngs: layer.getLatLngs()[0] },
       ]);

    
  }
  setDrawing(false)

  
 



}
function handleLayerClick(e) {
  setSelectedLayerIndex(e.target.activeFloor._leaflet_id);
}



const onBlockDrawn = (e) => {
  debugger;
  setPolyFlag('L')
  
  console.log(e);

  const { layerType, layer } = e;
  toggleBlockDescription();

  for (var j = 0; j < markers[0].floors.length; j++) { 
      if(markers[0].floors[j].description===activeFloor.name){
        
        if(markers[0].floors[j].boundaries.length>0) {
          debugger;
          
          

          if (!drawing) {
            editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
        } else {
            editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
            editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
        }

      
        setDrawing(!drawing)
          
           
           }
          //   else {
          //    debugger;
          //    toggleBlock();
          //  }
          //  else{
          //    <popup>Please add boundaries before adding blocks</popup>
          //  }
      }
}
  
}








const onShapeDrawn = (e) => {
  debugger;
  
  console.log(e);

  const { layerType, layer } = e;
  if (layerType === "polygon") {
    const { _leaflet_id } = layer;
    for (var j = 0; j < markers[0].floors.length; j++) { 
      if(markers[0].floors[j].description===activeFloor.name){
        if(polyFlag==='B'){
          // if(markers[0].floors[j].boundaries.length>0) {
          //         debugger;
          
          //       }
          
          //    else{
               
               markers[0].floors[j].boundaries=[];
               debugger;
               for (var k=0; k < layer._latlngs[0].length; k++ )
               
               {

                 
                 var point = [layer._latlngs[0][k].lat, layer._latlngs[0][k].lng];
                markers[0].floors[j].boundaries.push(point);
                
                //markers[0].floors[j].boundaryCenter.push(boundCenter);
               }
               //markers[0].floors[j].boundaries= layer._latlngs
               markers[0].floors[j].boundaryLeaflet_id = layer._leaflet_id;
               markers[0].floors[j].boundaryCenter = [layer._bounds.getCenter()];
             //}
        }
         else if(polyFlag==='L'){
          var tempArray = [];
          //var tempCenter = [];

          for (var n=0; n < layer._latlngs[0].length; n++){
            
            var pointBlock = [layer._latlngs[0][n].lat, layer._latlngs[0][n].lng];
            
            tempArray.push(pointBlock);
            //tempCenter.push(polygonCenter);
          }
          var polygonCenter = [layer._bounds.getCenter()];
          var polygonId = layer._leaflet_id;
         
          debugger;

          var blockObj = {id:polygonId,name:blockName,description:blockDesc,icon:icon,bounds:tempArray,center:polygonCenter}
       
          markers[0].floors[j].blocks.push(blockObj);
          
          blockObj = {};
          debugger;

          editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()

        }
      //}
          
       
    }
  }
    // setMapLayers((layers) => [
    //   ...layers,
    //   [  _leaflet_id,  layer.getLatLngs()[0] ],
    //   // { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
    //  //[ layer.getLatLngs()[0] ]  ,
    // ]);

    // 
   
   
    return (
    
      <div>
        {markers.map((name) => (
          <p>{name.description}{polyFlag}
         <GlobalMapComponent />
         </p>
        ))}
      </div>
    )
     
  }
  setDrawing(false)

  e.layer.on('click', () => {
      editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
  })
 
  e.layer.on('contextmenu', () => {
      //do some contextmenu action here
  })
  e.layer.bindTooltip("Text", 
      {
        className: 'leaflet-draw-tooltip:before leaflet-draw-tooltip leaflet-draw-tooltip-visible',
        sticky: true,
        direction: 'right'
      }
  );
}
function onMounted(ctl) {
  drawControlRef.current = ctl;
}



  useEffect(()=>{
    debugger;
  
    service
    .getBuilding(refno)
    .then(latlng =>{
      //console.log(LayersControl.getActiveBaseLayer().name)
      console.log("returning", latlng)
      debugger;
      updateFloor.floorno = latlng[0].floors.length+1;
      //setMarkers(...markers, latlng)
      setMarkers(latlng)
      debugger;
    })
    console.log(mapLayers)

  },[])
  
  const refno=window.location.pathname.replace('/EditFloorMap/','');

  const handleSaveFloor = (e) => {
    e.preventDefault()
    debugger;

    service
    .updateBuilding(markers[0].id, markers[0])
    
  }
  const handleDeleteFloor = (e) => {
    e.preventDefault()
    debugger;

  }

  function handleLayerClick(e) {
    setSelectedLayerIndex(e.target.markers.floors.blocks.id);
  }

const _onCreate = (e) => {
  console.log(e);

  const { layerType, layer } = e;
  if (layerType === "polygon") {
    const { _leaflet_id } = layer;

    setMapLayers((layers) => [
      ...layers,
      { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
    ]);
  }
};


const _onEdited = (e) => {
  console.log(e);
  const {
    layers: { _layers },
  } = e;

  Object.values(_layers).map(({ _leaflet_id, editing }) => {
    setMapLayers((layers) =>
      layers.map((l) =>
        l.id === _leaflet_id
          ? { ...l, latlngs: { ...editing.latlngs[0] } }
          : l
      )
    );
  });
};

const _onDeleted = (e) => {
  console.log(e);
  const {
    layers: { _layers },
  } = e;

  Object.values(_layers).map(({ _leaflet_id }) => {
    setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
  });
};

const changeHandlerDesc = (event) => setNewDesc(event.target.value)
const updateIsEdit = (e, value) => setIsEdit(value);
const changeHandlerText = (event) => setNewText(event.target.value)

// const iconMarkup = renderToStaticMarkup(
//   markers[0].floors[0].blocks[0].description
//  );


// const textDesc = divIcon  ({
//   html: iconMarkup
// });
 

  return ( 
    
          <div id="container">
                          
<Card id="container">
  <CardBody>
    
                   {
                     
                   markers.filter(item => item.id===refno).map(filteredName => (
                        <div>
                          <Row className="iq-example-row" id="container">
                        <Row className="row">
                        <Col className="col-4">
                                              
                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Building Id</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.id} disabled/>
                                              </FormGroup>
                                             
                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Building Name</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.description} />
                                              </FormGroup>
                                            
                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Street</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.street} />
                                              </FormGroup>

                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Apartment</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.Apartment} />
                                              </FormGroup>


                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Doornum</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.doornum} />
                                              </FormGroup>


                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Region</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.region} />
                                              </FormGroup>

                                              <FormGroup className="form-group">
                                              <Label htmlFor="exampleInputReadonly">Country</Label>
                                              <Input type="text" className="form-control" id="exampleInputReadonly"
                                              readOnly="" defaultValue={filteredName.country} />


{/* {filteredName.floors.map((floor) => (
  <div>
  <h4>Description:</h4>
  <input onChange={changeHandlerDesc}
  value={floor.newDesc}
  /><br/>
   
  <button onClick={handleClickFloor}>AddFloor</button>




  {floor.blocks.map((block) => (
    <div>
      <h4>Text:</h4>
      <input onChange={changeHandlerText}
  value={block.newText}
  /><br/>
  <button onClick= {handleClick}>AddPolygon</button><br/>
  

    </div>
    

    
  ))} 
  
  </div>
  

))} */}




                                              </FormGroup>
                                              

                                              </Col>
                        <Col className="col-8">
                        <Col lg={4}>
                        <Button className="btn btn-success" color="primary" onClick={() => toggle("addFloor")}> AddFloor </Button>{' '}

                        {/*Modal*/}
                        <Modal isOpen={addFloor} toggle={() => toggle("addFloor")} className="modal-sm">
                        <ModalHeader className="btn btn-primary" toggle={() => toggle("addFloor")}>Add Floor</ModalHeader>
                        <ModalBody>
                        
                          
                          <p>Floor: {filteredName.floors.length+1}</p>
                          
                            <p>Enter Floor Description</p>
                            <input type="text" onChange={changeHandlerDesc} value={newDesc} 
                            lur={updateIsEdit}/>

                        </ModalBody>
                        <ModalFooter>

                        <Button color="primary" onClick={() => {
                          toggle("addFloor");
                          // handleAddFloor(); 
                          handleClickFloor();
                      
                      }}>OK</Button>{' '}
                        <Button color="secondary" onClick={() => toggle("addFloor")}>Cancel</Button>
                        </ModalFooter>
                        </Modal>
           <Button className="btn btn-success" color="primary" onClick={handleSaveFloor}> SaveFloor </Button>
           <Button className="btn btn-success" color="primary" onClick={() => toggleDeleteFloor("deleteFloor")}> DeleteFloor </Button>{' '}

{/*Modal*/}
<Modal isOpen={deleteFloor} toggle={() => toggleDeleteFloor("deleteFloor")} className="modal-sm">
                    <ModalHeader className="btn btn-primary" toggle={() => toggleDeleteFloor("deleteFloor")}>Delete Floor</ModalHeader>
<ModalBody>
                    <h5> Are you sure you want to delete the {activeFloor.name} floor?</h5>
</ModalBody>
<ModalFooter>

<Button color="primary" onClick={() => {
  toggleDeleteFloor("deleteFloor");
  // handleAddFloor(); 
  handleDeleteFloor();

}}>OK</Button>{' '}
<Button color="secondary" onClick={() => toggle("addFloor")}>Cancel</Button>
</ModalFooter>
</Modal>
                        
            <Button className="btn btn-success" color="primary" onClick={handleReset}> reset </Button> 

                                                {/* < ModalTemplate /> */}
                        {/* <Card className="card iq-mb-3">
                           
                            <CardBody className="card-body">
                                <Button onClick={handleClickFloor} color={"primary"}>AddFloor</Button>
                            </CardBody>
                            
                        </Card> */}
                    </Col>
                                              <Map 
                                              style={ { height: "auto%", width: "auto"}}
            center={[filteredName.latitude, filteredName.longitude]} zoom={17.5} maxZoom={100}

            zoomControl={true}  
            className={classes.map} 
            ref={editRef}
            onClick={handleMap}>




<LayersControl position="topright">
<LayersControl.BaseLayer checked={true} name={filteredName.name}>
  
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
         
      </LayersControl.BaseLayer>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
                <FeatureGroup ref={editRef}>
                    <EditControl
                    ref={editRef}
                    position='bottomright'
                   onCreated={onShapeDrawn}
                   onMounted={onMounted}
                    //onCreated={_onCreate}
                  onEdited={_onEdited}
                  onDeleted={_onDeleted}
                  
                    //here you can specify your shape options and which handler you want to enable
                    draw={{
                        rectangle: false,
                        circle: false,
                        polyline: false,
                        circlemarker: false,
                        marker: false,
                        polygon:  {
                             allowIntersection: false,
                            shapeOptions: {
                                color: "#ff0000"
                            },
                         }
                    }}
                    />
                     
                </FeatureGroup>
                {filteredName.floors.map((floor, index) => (
                 
        <LayersControl.BaseLayer checked={false} name={floor.description}>

        <LayerGroup>
          <Polygon positions={floor.boundaries} color={floor.color} 
                             />
{
   floor.blocks.map((block, ind) => (
    <Polygon positions={block.bounds}>
    
        <label position={block.center}>
           <Tooltip permanent direction="center" class="labelText"> {block.description}</Tooltip> </label>
       <Popup direction="center" >
       <Button
                
                className="btn btn-primary"
                onClick={() => toggleBlock("editBlock")}

                >
                     Edit
                </Button>
                
                <Modal isOpen={editBlock} toggle={() => toggleBlock("editBlock")} className="modal-sm">
                        <ModalHeader className="btn btn-primary" toggle={() => toggleBlock("editBlock")}>Are you sure you want to edit the block</ModalHeader>
                        <ModalBody>
                        <Button color="primary" onClick={handleBlock}>Yes</Button>
                        <Button color="secondary" onClick={() => toggleBlock("editBlock")}>Cancel</Button>
                        </ModalBody>
                        
                        </Modal>
      </Popup>
      
     

      
    </Polygon> 
    
                             
                             

  ))
}

        </LayerGroup>
        </LayersControl.BaseLayer>
             ))}
              </LayersControl>
                
                
            </Map>
            <ButtonGroup className="btn-group">
           <div className={classes.buttonStyle}>
           
                <Button 
                className="btn btn-primary"
                
                    // disabled={filteredName.floors.length>2}
                    variant="contained"
                    onClick={onBlockDrawn}>
                    
                    AddBlock
                </Button>
                {/* <div className={classes.buttonWrapper}> */}
                <Modal isOpen={blockDescription} toggle={() => toggleBlockDescription("blockDescription")} className="modal-sm" style={modalStyles}>
                
                        <ModalHeader className="btn btn-primary" toggle={() => toggleBlockDescription("blockDescription")}>Enter the block details</ModalHeader>
                        <ModalBody>
                        <Card className="iq-card">
                    <CardBody className="iq-card-body">
                    <form>
                   
                          Name: <input
                  onChange={onChangeName}
                  value={blockName}
                  type="text"
                
                /><br/>
                          Description: <input
                  onChange={onChangeDesc}
                  value={blockDesc}
                  type="text"
                
                /><br/>
                          icon: <input
                  onChange={onChangeIcon}
                  value={icon}
                  type="url"
                
                /><br/>
                          </form>
                         
                          </CardBody>
                          </Card>

                        </ModalBody>
                        <ModalFooter>
                       {/* <Button color="primary" >submit</Button>  */}
                        <Button color="secondary" onClick={() => toggleBlockDescription("blockDescription")}>Ok</Button>
                        </ModalFooter>
                        
                        
                        </Modal>

                <Button
                
                className="btn btn-primary"
                onClick={handleManageBoundaries}

                >
                      Manage Boundaries
                </Button>
                <Modal isOpen={editBoundaries} toggle={() => toggleBoundaries("editBoundaries")} className="modal-sm">
                        <ModalHeader className="btn btn-primary" toggle={() => toggleBoundaries("editBoundaries")}>Are you sure you want to edit the Boundaries</ModalHeader>
                        <ModalBody>
                        <Button color="primary" onClick={handleBoundaries}>Yes</Button>
                        <Button color="secondary" onClick={() => toggleBoundaries("editBoundaries")}>Cancel</Button>
                        </ModalBody>
                        
                        </Modal>
                 </div> 
                 </ButtonGroup>
                 
            {/* </div> */}
            {/* <div classname={classes.buttonWrapper}>
              <Button
                   >Save</Button>

            </div> */}
            {/* <pre className="text-left">



              { 
              
              JSON.stringify(mapLayers, 0, 2)}</pre> */}
            
                             </Col> 
                             
                             </Row>
                             </Row>
                             





                                      </div>
                                      
  
                  ))} 
                  
                  
                  </CardBody>

</Card>
                   
                   </div>)
}


export default EditFloorMap;
