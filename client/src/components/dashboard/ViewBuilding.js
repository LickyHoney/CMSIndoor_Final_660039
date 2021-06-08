import React, { useRef, useEffect, useState, useMap } from "react";
import service from './services';
import { EditControl } from "react-leaflet-draw";
import LayersControl2, { ControlledLayerItem } from "./LayerControl2";
// import "./assets/leaflet.css"
// import "./assets/leaflet.draw.css"
import {
  Map, TileLayer, FeatureGroup, useLeaflet, LayersControl, Marker, Polygon,
  Popup, LayerGroup, Circle, GeoJSON
} from "react-leaflet";
import Control from 'react-leaflet-control';

import L from "leaflet";

import { CardBody, Card,Breadcrumb, BreadcrumbItem, ButtonGroup, ButtonToolbar, Form, FormGroup, Label, Input, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap';
// Material components
import { makeStyles, Button } from "@material-ui/core";
import { set } from "mongoose";
import Tooltip from "@material-ui/core/Tooltip";
import ReactTooltip from "react-tooltip";



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
  headerWrapper: {
    zIndex: 1,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
  }
}));


function EditableLayer(props) {
  const leaflet = useLeaflet();
  const editLayerRef = React.useRef();
  let drawControlRef = React.useRef();
  let { map } = leaflet;

  useEffect(() => {

    if (!props.showDrawControl) {
      map.removeControl(drawControlRef.current);
    } else {
      map.addControl(drawControlRef.current);
    }

    editLayerRef.current.leafletElement.clearLayers();

    editLayerRef.current.leafletElement.addLayer(props.layer);
    props.layer.on("click", function (e) {
      props.onLayerClicked(e, drawControlRef.current);
    });
  }, [props, map]);

  function onMounted(ctl) {
    drawControlRef.current = ctl;
  }

  return (
    <div>
      <FeatureGroup ref={editLayerRef}>
        <EditControl
          position="topright"
          onMounted={onMounted}
          {...props}
        />
      </FeatureGroup>
    </div>
  );
}

function EditableGroup(props) {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  function handleLayerClick(e, drawControl) {
    setSelectedLayerIndex(e.target.feature.properties.editLayerId);
  }

  let dataLayer = new L.GeoJSON(props.data);
  let layers = [];
  let i = 0;
  dataLayer.eachLayer((layer) => {
    layer.feature.properties.editLayerId = i;
    if(layer.feature.properties.name!==undefined){
      layer.bindTooltip(layer.feature.properties.name, {permanent: true, opacity: 0.7, direction:"center"}).openTooltip();
    }
    layers.push(layer);
    i++;
  });

  return (
    <div>
      {layers.map((layer, i) => {
        return (
          <EditableLayer
            key={i}
            layer={layer}

            onLayerClicked={handleLayerClick}
          />
        );
      })}
    </div>
  );
}

const ViewBuilding = (props) => {
  const editRef = useRef();
  const [drawing, setDrawing] = useState(false);
  const [markers, setMarkers] = useState([])
  const [details, setDetails] = useState('')
  const [boundary, setBoundary] = useState([]);
  const [newPosition, setNewPosition] = useState([])

  const [mapLayers, setMapLayers] = useState('');
  const [customLayer, setCustomLayer] = useState([]);

  const [activeFloorPolygons, setActiveFloorPolygons] = useState([]);
  const [activeFloorBoundary, setActiveFloorBoundary] = useState([]);
  const [activeFloor, setActiveFloor] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [isEdit, setIsEdit] = useState('');
  const [boundaryid, setBoundaryid] = useState(0);
  const [selectedFloorGeoData, setselectedFloorGeoData] = useState('');


  //const purpleOptions = { color: 'purple' }
  const mapRef = useRef();
  const fgRef = useRef();
  const refno = window.location.pathname.replace('/ViewBuilding/', '');
  const leaflet = useLeaflet();
  const [buildingCenter, setBuildingCenter] = useState({lat:null,lng:null})




  const polygon = [

  ]
  const center = [51.505, -0.09]
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);





  const updateFloor = {

    floorno: markers.length + 1,
    description: "newDesc",
    color: '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6),
    blocks: [],
    boundaries: []
  }

  //const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [addFloor, setAddFloor] = useState(false);

  const _onFeatureGroupReady = (ref) => {
    if (ref !== undefined && ref !== null) {
      let leafletFG = ref.leafletElement;
      if (customLayer.length > 0) {
        customLayer.eachLayer(layer => leafletFG.addLayer(layer));
      }
    }
  }
  const handleDrawPolygonClick = (e) => {
    const activeFloorLcl = activeFloor;
    const polygonType = e.target.value;
    debugger;
    switch (polygonType) {
      case "BO":

        break;

      case "BL":

        break;

      default:
        break;
    }
    if (activeFloorLcl !== undefined && activeFloorLcl !== null) {
      if (activeFloorLcl.boundaries.length > 3) {
        const { layerType, layer } = e;
        if (layerType === "polygon") {
          const { _leaflet_id } = layer;
          setMapLayers((layers) => [
            ...layers,
            { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },

            // [ id: _leaflet_id, latlng:layer.getLatLngs()[0] ]  ,
          ]);
        }
        //Edit this method to perform other actions

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
  //let dataLayer = new L.GeoJSON(props.data);



  const onShapeDrawn = (e) => {
    debugger;
    setDrawing(false)
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

    }
    debugger;

    const mar = markers;

    for (var k = 0; k < mar.length; k++) {

      let boundary_id = boundaryid;

      boundary_id = layer._leaflet_id;


      setBoundaryid(boundary_id);
      console.log(boundaryid);


      debugger;
    }







    // e.layer.on('click', () => {
    //     debugger;
    //     setDrawing(layer);
    //     //setSelectedLayerIndex(e.target.boundaryid);
    //     console.log(selectedLayerIndex);
    //     debugger;
    //   editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
    // })
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
  function handleLayerClick(e, drawControl) {

    debugger;
    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

    }

    let drawingLcl = drawing;
    drawingLcl = layer;
    setDrawing(drawingLcl);
    //   setSelectedLayerIndex(e.target.boundaryid);
    //     console.log(selectedLayerIndex);





    debugger;
    //editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()

  }

  //   e.layer.on('click', () => {
  //     debugger;
  //     setSelectedLayerIndex(e.target.boundaryid);
  //     console.log(selectedLayerIndex);
  //     debugger;
  //   editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
  // })

  function onEditPath() {
    debugger;
  }
  function onCreate() {
    debugger;
  }

  function onDeleted() {
    debugger;
  }
  function reverseCoordinate(coor) {
    let retCoor = [];
    if (coor !== undefined && coor !== null) {
      if (coor.length > 0) {
        for (let coorIdx = 0; coorIdx < coor.length; coorIdx++) {
          const bound = coor[coorIdx];
          let row = [];
          if (bound.length === 2) {
            row.push(bound[1]);
            row.push(bound[0]);
            retCoor.push(row);
          }
        }

      }
    }
    return retCoor;
  }
  function block2Layer(iBlock, floorIndex, floorColor) {


    return {
      "type": "Feature",
      "properties": {
        "id": iBlock.blockId,
        "ground": floorIndex,

      },
      "geometry": {
        "type": "Polygon",
        "color": floorColor,
        "coordinates": [reverseCoordinate(iBlock.bounds)]
      }
    }



  }

  function onFloorSelect(e, data) {
    const index = e.target.value;
    let selectedFloorPolygonLayers = [];
    let activeFloorSel = markers[index];
    const floorColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

    for (let blockIdx = 0; blockIdx < activeFloorSel.blocks.length; blockIdx++) {
      const blockPolygon = activeFloorSel.blocks[blockIdx];
      const geoJsonObj = block2Layer(blockPolygon, index, floorColor);


      selectedFloorPolygonLayers.push(geoJsonObj);
      if(blockPolygon.centre!==undefined){
        
        // label = String(feature.properties.name) 
        let pointLayer = { "type": "Feature", "properties": { "name": blockPolygon.text  }, 
        "geometry": { "type": "Point", 
        "coordinates": [blockPolygon.centre[0].lng ,blockPolygon.centre[0].lat  ] } ,
        
        
      };
     
        selectedFloorPolygonLayers.push(pointLayer)
        
        
      }
      

    }
    debugger;
    const featureCollection = {
      "type": "FeatureCollection",
      "name": activeFloorSel.description,
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      "features": selectedFloorPolygonLayers
    };
    // const floorLayers = new L.GeoJSON(featureCollection);

    // setActiveFloorPolygons(floorLayers.getLayers());
    setselectedFloorGeoData(featureCollection);
    setActiveFloorBoundary(activeFloorSel.boundaries);
    setActiveFloor(activeFloorSel);

  }



  const addressCardStyle = {
    backgroundImage: `url(${require('./33.png')})`,

    backgroundSize: 'cover',

    height: "423px",

  }

  let floor = {};
  useEffect(() => {

    var refTemp = refno.replace("/EditBuilding/", "");
    service
      .getBuilding(refTemp)
      .then(selBuilding => {
        console.log("returning", selBuilding)

        debugger;
        setMarkers(selBuilding[0].floors);
        const emptyFloor = {
          "floorno": "1",
          "description": "",
          "color": "#f18d00",
          "blocks": [],
          "boundaries": []
        };
        if (selBuilding[0].floors.length > 0) {
          setActiveFloor(selBuilding[0].floors[0]);
          setActiveFloorBoundary(selBuilding[0].floors[0].boundaries);
          setActiveFloorPolygons(selBuilding[0].floors[0].blocks);

        } else {

          setActiveFloor(emptyFloor);
          setActiveFloorBoundary(emptyFloor.boundaries);
          setActiveFloorPolygons(emptyFloor.blocks);


        }

        //mapRef.current.leafletElement.flyTo([selBuilding[0].latitude, selBuilding[0].longitude], 16)
        setDetails(selBuilding[0]);
        // setBoundary(selBuilding[0].boundary.geometry.coordinates[0]);
        const buildingLatLng = {
          lat: selBuilding[0].latitude,
          lng: selBuilding[0].longitude,
        }
        setBuildingCenter(buildingLatLng)
        let ml = mapLayers;




      })

  }, [])

  function toggle() {
    setAddFloor(!addFloor);
  }

  const moveActiveFloor = () => {
    const markersLcl = markers;
    debugger;
    if (activeFloor !== undefined && activeFloor !== null) {
      for (let i = 0; i < markersLcl.length; i++) {

        if (activeFloor.floorno === markersLcl[i].floorno) {
          markersLcl[i].description = activeFloor.description;
          markersLcl[i].blocks = activeFloor.blocks;
          markersLcl[i].boundaries = activeFloor.boundaries;

        }
      }
      setMarkers(markersLcl);
    }

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

  function Boundary() {
    const detailLcl = details;
    if (details !== null && details !== undefined && details !== "") {
      if (details.boundaries !== null && details.boundaries !== undefined
        && details.boundaries !== "") {
        if (details.boundaries.length > 0) {
            return(<Polygon positions={details.boundaries}></Polygon>);
        } else {
          return (<div></div>)
        }
      } else {
        return (<div></div>)
      }

    } else {
      return (<div></div>)
    }



  }

  const _onEdited = (e) => {
    debugger;
    // console.log(e);
    // const {
    //   layers: { _layers },
    // } = e;

    // Object.values(_layers).map(({ _leaflet_id, editing }) => {
    //   setMapLayers((layers) =>
    //     layers.map((l) =>
    //       l.id === _leaflet_id
    //         ? { ...l, latlngs: { ...editing.latlngs[0] } }
    //         : l
    //     )
    //   );
    // });
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

  const deleteActiveFloor = () => {
    debugger;
    const activeFloorLocal = activeFloor;
    const markersL = markers;
    const markersAfterDeletion = [];
    for (let j = 0; j < markersL.length; j++) {
      const marker = markersL[j];
      if (marker.floorno !== activeFloorLocal.floorno) {
        markersAfterDeletion.push(marker);
      }

    }
    setMarkers(markersAfterDeletion);
    setActiveFloorPolygons(markersAfterDeletion[0].blocks);
    setActiveFloorBoundary(markersAfterDeletion[0].boundaries);
    setActiveFloor(markersAfterDeletion[0]);

  }


  const handleAddFloor = () => {
    debugger;
    const newFloor = {
      "floorno": markers.length + 1,
      "description": newDesc,
      "color": "#f18d00",
      "blocks": [],
      "boundaries": []
    }
    setActiveFloor(newFloor);
    setActiveFloorBoundary(newFloor.boundaries);
    setActiveFloorPolygons(newFloor.blocks);
    const markersLocal = markers;
    markersLocal.push(newFloor);
    setMarkers(markersLocal);

    setNewDesc("");
  }


  const changeHandlerDesc = (event) => setNewDesc(event.target.value);
  const updateIsEdit = (e, value) => setIsEdit(value);

  const handleSaveFloor = (e) => {
    e.preventDefault()
    debugger;

    service
      .updateBuilding(markers[0].id, markers[0])

  }

  const handleEditPolygonClick = (e) => {
    const drawingLocal = drawing;
    debugger;

  }



  return (

    <div>
      
     
        <div class="row">
          <Breadcrumb class="mb-4">
            <BreadcrumbItem><a href="/map1"><i
              className="ri-home-4-line mr-1 float-left" />Home</a></BreadcrumbItem>
            <BreadcrumbItem active>{details.name}</BreadcrumbItem>
          </Breadcrumb>

        </div>

        <div></div>
        <Card className="iq-card">
          <CardBody className="iq-card-body">
         <div className="row" style={{ margin: ".6%" }}>
         <div className="col-lg-4">
          <div className="iq-card iq-card-block iq-card-stretch iq-card-height bg-transparent">
            <div className="iq-card-body rounded p-0" style={addressCardStyle} >
              <div className="iq-caption">
                <h1>{details.name}</h1>
                <h3>{details.description}</h3>
                <h3>{details.Apartment} {markers.street}</h3>
                <h3>{details.region} {markers.pincode}</h3>
                <h3>{details.country}</h3>
              </div>
            </div>
          </div>
        </div>

          {/*<div className="col-lg-4">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height bg-transparent">

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Building Id</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.id} disabled />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Building Name</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.description} />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Street</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.street} />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Apartment</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.Apartment} />
              </FormGroup>


              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Doornum</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.doornum} />
              </FormGroup>


              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Region</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.region} />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Country</Label>
                <Input type="text" className="form-control" id="exampleInputReadonly"
                  readOnly="" defaultValue={details.country} />

              </FormGroup>

            </div> */}
          {/* </div> */}


          <div className="col-lg-8">
            <div className="iq-card overflow-hidden" >
              <h6 className="display-4" >{activeFloor.description}</h6>

              <div id="home-chart-02">
              {/* {details.map((building) => ( */}
                {buildingCenter.lat && buildingCenter.lng && <Map center={buildingCenter} zoom={16} ref={mapRef} >
                  {/* <Control position="topright">
                    <button class="primary" onClick={handleDrawPolygonClick} value="BO"
                    style={{ "font-size": "1.5rem", "margin-left": ".05rem" ,"margin-right": ".05rem" }}>
                    Add Floor
                        </button>
                    <Button className="btn btn-primary"
                      style={{ "font-size": "1.0rem", "margin-left": ".05rem", "margin-right": ".05rem" }} color="primary" onClick={handleSaveFloor}> SaveBuilding </Button>


                    <Button className="btn btn-primary" style={{ "font-size": "1.0rem", "margin-left": ".05rem", "margin-right": ".05rem" }} color="primary" onClick={() => toggle("addFloor")}> AddFloor </Button>{' '}


                    <Modal isOpen={addFloor} toggle={() => toggle("addFloor")} className="modal-sm">
                      <ModalHeader className="btn btn-primary" toggle={() => toggle("addFloor")}>Add Floor</ModalHeader>
                      <ModalBody>


                        <p>Floor: {markers.length + 1}</p>

                        <p>Enter Floor Description</p>
                        <input type="text" onChange={changeHandlerDesc} value={newDesc}
                          lur={updateIsEdit} />

                      </ModalBody>
                      <ModalFooter>

                        <Button color="primary" onClick={() => {
                          toggle("addFloor");
                          // handleAddFloor(); 
                          handleAddFloor();

                        }}>OK</Button>{' '}
                        <Button color="secondary" onClick={() => toggle("addFloor")}>Cancel</Button>
                      </ModalFooter>
                    </Modal>

                    <button class="btn btn-primary" onClick={deleteActiveFloor} value="BO"
                      style={{ "font-size": "1.0rem", "margin-left": ".05rem", "margin-right": ".05rem" }}>
                      Delete Floor
                        </button>
                    <button class="btn btn-primary" onClick={handleDrawPolygonClick} value="BO"
                      style={{ "font-size": "1.0rem", "margin-left": ".05rem", "margin-right": ".05rem" }}>
                      Manage Boundary
                        </button>

                    <button class="btn btn-primary" onClick={handleDrawPolygonClick} value="BL"
                      style={{ "font-size": "1.0rem", "margin-left": ".05rem" }}>
                      AddBlock
                        </button>

                    <button class="btn btn-primary" onClick={handleEditPolygonClick}
                      style={{ "font-size": "1.0rem", "margin-left": ".05rem" }}>
                      EditBlock
                        </button>
                  </Control> */}
                  <LayersControl position="topright">
                    <LayersControl.BaseLayer
                      checked={false}
                      name="Esri WorldImagery"
                      group="BaseLayers"
                    >
                      <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
                        attribution='&copy; <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'
                      />
                    </LayersControl.BaseLayer >
                    <LayersControl.BaseLayer
                      checked={true}
                      name="OpenStreetMap"
                      group="BaseLayers"
                    >
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                    </LayersControl.BaseLayer >

                  </LayersControl>

                  <EditableGroup data={selectedFloorGeoData} />


                  {/* <FeatureGroup>
                  
                  {activeFloorPolygons.map((polygonObjLayer,polyIdx)=>(
                      <div>
                      <EditControl
                      layer={polygonObjLayer}
                      position='topleft'
                      onCreated={onShapeDrawn}
                      onEdited = {_onEdited}
                      onDeleted = {_onDeleted}
                      
                      
                      
                      //here you can specify your shape options and which handler you want to enable
                      draw={{
                        rectangle: false,
                        polygon: true,
                        circle: false,
                        polyline: false,
                        circlemarker: false,
                        marker: false
  
                      }}

                    >
  
  
  
  
                    </EditControl>

                    <Polygon positions={polygonObj.bounds} ></Polygon>
                    </div>
                    
                  ))}
                <Polygon positions={activeFloorBoundary} onClick={handleLayerClick}> </Polygon>

                

                </FeatureGroup> */}

{/* <div className="App">
      <button data-tip data-for="registerTip">
        Register
      </button>

      <ReactTooltip id="registerTip" place="top" effect="solid">
        Tooltip for the register button
      </ReactTooltip>
    </div> */}

                  <Control position="topright" >
                    <div>
                      {
                        markers.map((mLr, didx) => (



                          <div>
                            {/* <Tooltip
                            style={{fontSize:"20px"}}
                         title=   {<h3 style={{ color: "lightblue" }}>{mLr.description}</h3>}
       
        placement="left"
      > */}

                            <button variant="contained" class="primary" value={didx} onClick={onFloorSelect} style={{ "font-size": "1.5rem", "margin-left": ".05rem" }}>
                              {mLr.description}
                            </button>
                            {/* </Tooltip> */}
                            {/* <ReactTooltip id="registerTip" place="top" effect="solid">
        {mLr.description}
      </ReactTooltip> */}


                          </div>
                        ))

                      }

                    </div>
                  </Control>


                  <Boundary></Boundary>



                </Map>
}
              {/* ))} */}
              </div>
            </div>
          </div>
        </div>
        </CardBody>
        </Card>




      </div>
  )
}


export default ViewBuilding;