import React, { useRef, useEffect, useState, useMap } from "react";
import service from './services';
import { EditControl } from "react-leaflet-draw";
import LayersControl2, { ControlledLayerItem } from "./LayerControl2";
// import "./assets/leaflet.css"
// import "./assets/leaflet.draw.css"
import {
  Map, TileLayer, FeatureGroup, useLeaflet, LayersControl, Marker, Polygon,
  Popup, LayerGroup, Circle, GeoJSON,CircleMarker
} from "react-leaflet";
import Control from 'react-leaflet-control';

import L, { circleMarker, tooltip } from "leaflet";

import { CardBody, Card, Breadcrumb, BreadcrumbItem, ButtonGroup, ButtonToolbar, Form, FormGroup, Label, Input, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap';
// Material components
import { makeStyles, Button } from "@material-ui/core";
import { set } from "mongoose";
import "semantic-ui-css/semantic.min.css";
import Tooltip from "@material-ui/core/Tooltip";
import {v4 as uuidv4} from 'uuid';

let addFloorCounter = 0;


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

const modalStyles = {
  width   :    500,
  height  :    500
}




const EditBuilding = (props) => {
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
  const [blockDescription, setBlockDescription] = useState(false);
  const [draftBlock, setDraftBlock] = useState('');
 
  // const [addCounter,setAddCounter] = React.useState(0);


  //const purpleOptions = { color: 'purple' }
  const mapRef = useRef();
  const fgRef = useRef();
  const refno = window.location.pathname.replace('/ViewBuilding/', '');
  const leaflet = useLeaflet();
  const [blockName, setBlockName] = useState('')
  const [FloorIdx, setFloorIdx] = useState(0)
  const [buildingCenter, setBuildingCenter] = useState({lat:null,lng:null})

  let FloorId = uuidv4();

  const polygon = [

  ]
  const center = [51.505, -0.09]
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

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

    function onEditPath(e) {


      const layerObj = e.layers._layers;

      const layer = layerObj[Object.keys(layerObj)[0]];
      const center = [layer._bounds.getCenter()];
      if (layer !== undefined && layer !== null) {
        const props = layer.feature.properties;
        if (props.hasOwnProperty('id') && props.hasOwnProperty('ground')) {
          const polygonId = props.id;
          const floorIndex = props.ground;
          let latlngs = layer.getLatLngs();
          latlngs = latlngs.length > 0 ? latlngs[0] : latlngs;
          crupdateLayer2ActiveFloor(latlngs, polygonId, floorIndex,center)

        }
      }



    }
    function onPolygonDeleted(e) {
      console.log(e);

      const {
        layers: { _layers },
      } = e;

      Object.values(_layers).map(({ _leaflet_id }) => {
        //setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
      });

    }

  
  
    
   
    
    

  
    function onPolygonCreated(e) {
      
      // toggleBlockDescription();
      debugger;

      //addFloorCounter++;
     
      setDraftBlock(e.layer);
      toggleBlockDescription();

      // if (addFloorCounter === activeFloor.blocks.length) {
        
        debugger;
      //}
     

    }

    function onDeleted() {

    }
    


    return (
      <div>
        <FeatureGroup ref={editLayerRef}>
          <EditControl
            position="topright"
            onMounted={onMounted}
            onCreated={onPolygonCreated}
            onEdited={onEditPath}
            onDeleted={onPolygonDeleted}
            draw={{
              polygon: true,
              circle: false,
              polyline: false,
              marker: false,
              rectangle: false,
              circlemarker: false
            }}


            {...props}
          />
          {/* <Polygon positions={activeFloorBoundary} onClick={handleLayerClick}> </Polygon> */}
          <Marker 
                      position={[60.21846434365596, 24.811831922452843]}
                      
                    >
                      {/* <renderPopup item={item}></renderPopup> */}

                     

                    </Marker>
        </FeatureGroup>
      </div>
    );
  }

  function EditableGroup(props) {
    const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

    function handleLayerClick(e, drawControl) {
      setSelectedLayerIndex(e.target.feature.properties.editLayerId);
    }
    debugger;
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
<div>

        {layers.map((layer, i) => {
          return (
            <EditableLayer
              key={i}
              layer={layer}
              showDrawControl={i === selectedLayerIndex}
              onLayerClicked={handleLayerClick}
            >
                  

            </EditableLayer>
          );
          

        })}
        
      </div>

      <div>


      </div>
      </div>
    );
  }



  const updateFloor = {
    id:FloorIdx.length+1,

    // floorno: markers.length + 1,
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

    setDrawing(false)

    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

    }

    const mar = markers;

    for (var k = 0; k < mar.length; k++) {

      let boundary_id = boundaryid;

      boundary_id = layer._leaflet_id;


      setBoundaryid(boundary_id);
      console.log(boundaryid);



    }







    // e.layer.on('click', () => {
    //     
    //     setDrawing(layer);
    //     //setSelectedLayerIndex(e.target.boundaryid);
    //     console.log(selectedLayerIndex);
    //     
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


    const { layerType, layer } = e;
    if (layerType === "polygon") {
      const { _leaflet_id } = layer;

    }

    let drawingLcl = drawing;
    drawingLcl = layer;
    setDrawing(drawingLcl);
    //   setSelectedLayerIndex(e.target.boundaryid);
    //     console.log(selectedLayerIndex);






    //editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()

  }

  //   e.layer.on('click', () => {
  //     
  //     setSelectedLayerIndex(e.target.boundaryid);
  //     console.log(selectedLayerIndex);
  //     
  //   editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
  // })
  function crupdateLayer2ActiveFloor(latlngs, polygonId, floorIndex,center) {
  
    let coordinates = []
    for (let latlngsIdx = 0; latlngsIdx < latlngs.length; latlngsIdx++) {

      const latlng = latlngs[latlngsIdx];
      let coor1 = []
      const lat = latlng.hasOwnProperty('lat') ? latlng.lat : false;
      const lng = latlng.hasOwnProperty('lng') ? latlng.lng : false;

      if (!(lat === false || lng === false)) {

        coor1.push(lat);
        coor1.push(lng);
        coordinates.push(coor1);

      }
    }
    debugger;
    let activeFloor4crup = activeFloor;
    if (polygonId === null) {
      toggleBlockDescription();
      //console.log(blockName);
      debugger;
      

      //  toggleBlockDescription()
      //ask description
      //const blName = blockName;

      activeFloor4crup.blocks.push({  blockId: new Date().getTime().toString(), text: blockName, bounds: coordinates,centre: center });
      debugger;

    } else {
      for (let flindex = 0; flindex < activeFloor4crup.blocks.length; flindex++) {
        const block = activeFloor4crup.blocks[flindex];
        if (block.blockId === polygonId) {

          activeFloor4crup.blocks[flindex].bounds = coordinates
          // toggleBlockDescription()
        }

      }
    }
    updateBuildingFromActiveFloor(floorIndex)


  }
  function updateBuildingFromActiveFloor(floorIndex) {

    let detailsLocal = details;
    let markerLcl = markers;
    if (markerLcl !== undefined && markerLcl !== null) {
      if (markers.length >= 1 && floorIndex >= 0) {
        markerLcl[floorIndex] = activeFloor;
        detailsLocal.floors = markerLcl;
        setDetails(detailsLocal);
      }
    }

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


  const ondetailChange = (e) => {
    debugger;
    let detailLcl = details;
    const value = e.target.value;
    const property = e.target.getAttribute('property');
    if (property !== undefined && property !== null && property !== '') {
      detailLcl[property] = value;
      setDetails(detailLcl);


    }


  }
  const handleSaveFloor = (e, polygonId) => {
    debugger;
    let detailsLocal = details;
    const markersLocal = markers;
    details.floors = markersLocal

    service
      .updateBuilding(details.id, details)
      window.location.reload();

  }
  
  
  function block2Layer(iBlock, floorIndex, floorColor) {


    return {
      "type": "Feature",
      "properties": {
        "id": iBlock.blockId,
        "text": blockName,
        "ground": floorIndex,

      },
      "geometry": {
        "type": "Polygon",
        "color": floorColor,
        "coordinates": [reverseCoordinate(iBlock.bounds)]
      }
    }



  }

  

  function toggleBlockDescription () {
    setBlockDescription(!blockDescription)
  }
  const onChangeIndex = e => {
    e.preventDefault();
    setFloorIdx(e.target.value);
    
  };
  const onChangeName = e => {
    e.preventDefault();
    setBlockName(e.target.value);
    
  };

  function onFloorSelect(e, data) {
    debugger;
   
    const index = e.target.value;
    let selectedFloorPolygonLayers = [];
    let activeFloorSel = markers[index];
    const floorColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

    for (let blockIdx = 0; blockIdx < activeFloorSel.blocks.length; blockIdx++) {
      const blockPolygon = activeFloorSel.blocks[blockIdx];
      //const center = [activeFloorSel.blocks.bounds.getCenter()];
     
      const geoJsonObj = block2Layer(blockPolygon, index, floorColor);
     
  
      // blockPolygon.push({centre: center});
      selectedFloorPolygonLayers.push(geoJsonObj);
      if(blockPolygon.centre!==undefined){
        
        // label = String(feature.properties.name) 
        let pointLayer = { "type": "Feature", "properties": { "name": blockPolygon.text  }, 
        "geometry": { "type": "Point", 
        "coordinates": [blockPolygon.centre[0].lng ,blockPolygon.centre[0].lat  ] } ,
        
        
      };
     
        selectedFloorPolygonLayers.push(pointLayer)
        
        
      }
      
      // create layer for marker 

    }
    // var data_points = {
    //   "type": "FeatureCollection",
    //   "name": "test-points-short-named",
    //   "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    //   "features": [
    //   { "type": "Feature", "properties": { "name": "1" }, "geometry": { "type": "Point", "coordinates": [ -135.02507178240552, 60.672508785052223 ] } },
    //   { "type": "Feature", "properties": { "name": "6"}, "geometry": { "type": "Point", "coordinates": [ -135.02480935075292, 60.672888247036376 ] } },
    //   { "type": "Feature", "properties": { "name": "12"}, "geometry": { "type": "Point", "coordinates": [ -135.02449372349508, 60.672615176262731 ] } },
    //   { "type": "Feature", "properties": { "name": "25"}, "geometry": { "type": "Point", "coordinates": [ -135.0240752514004, 60.673313811878423 ] } }
    //   ]};
    // var pointLayer = L.geoJSON(null, {
    //   pointToLayer: function(feature,latlng){
    //     label = String(feature.properties.name) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
    //     return new L.CircleMarker(latlng, {
    //       radius: 1,
    //     }).bindTooltip(label, {permanent: true, opacity: 0.7}).openTooltip();
    //     }
    //   });

    // pointLayer.addData(data_points);
    const featureCollection = {
      "type": "FeatureCollection",
      "name": "",
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

        setMarkers(selBuilding[0].floors);
        if (selBuilding[0].floors.length > 0) {
          setActiveFloor(selBuilding[0].floors[0]);
        } else {
          setActiveFloor(
            {
              "id":FloorId,
              // "floorno": "1",
              "description": "",
              "color": "#f18d00",
              "blocks": []
            }

          );
        }



        setDetails(selBuilding[0]);
        
       
        
        const buildingLatLng = {
          lat: selBuilding[0].latitude,
          lng: selBuilding[0].longitude,
        }
        setBuildingCenter(buildingLatLng)
      console.log(buildingCenter)

        //mapRef.current.leafletElement.flyTo([selBuilding[0].latitude, selBuilding[0].longitude], 16)

        // setBoundary(selBuilding[0].boundary.geometry.coordinates[0]);

        let ml = mapLayers;




      })

  }, [])

  function toggle() {
    setAddFloor(!addFloor);
  }
  

  const moveActiveFloor = () => {
    const markersLcl = markers;

    if (activeFloor !== undefined && activeFloor !== null) {
      for (let i = 0; i < markersLcl.length; i++) {

        if (activeFloor.id === markersLcl[i].id) {
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


  const _onEdited = (e) => {

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

  // const deleteBuildingConfirm = (e) => {

  //   debugger;
  //   const bid = delBuildingId;
  //   service.deletion(bid);
  //   window.location.reload();


  // }

  const deleteActiveFloor = () => {
    debugger;
    const activeFloorLocal = activeFloor;
    const markersL = markers;
    const markersAfterDeletion = [];
    for (let j = 0; j < markersL.length; j++) {
      const marker = markersL[j];
      if (marker.id !== activeFloorLocal.id) {
        markersAfterDeletion.push(marker);
        
      }

    }

    setMarkers(markersAfterDeletion);
    // setActiveFloorPolygons(markersAfterDeletion[0].blocks);
    // setActiveFloorBoundary(markersAfterDeletion[0].boundaries);
    // setActiveFloor(markersAfterDeletion[0]);
    // for (let y = 0; y < markersAfterDeletion.length; y++) {
    if (markersAfterDeletion.length > 0) {
      setActiveFloor(markersAfterDeletion);
    } else {
      setActiveFloor(
        {
          "id": FloorId,
          // "floorno": "1",
          "description": "",
          "color": "#f18d00",
          "blocks": []
        }

      );
    }
  //}
  }

  const createBlockWithDesc = () => {
    
    const draftBlockLocal = draftBlock;
    const markersL1 =markers;
    let floorIndex = null;
    debugger;
    for (var x=0; x<markersL1.length; x++){
      if (activeFloor.id === markersL1[x].id){
        floorIndex = x;
        break;
      }
    }
    
    let latlngs =draftBlockLocal.getLatLngs();
    let center = [draftBlockLocal._bounds.getCenter()];
         latlngs = latlngs.length > 0 ? latlngs[0] : latlngs;
      
      
       
       debugger;
        crupdateLayer2ActiveFloor(latlngs, null, floorIndex,center)

        
        
        updateBuildingFromActiveFloor()

    debugger;
  }


  const handleAddFloor = () => {
    debugger;

    const newFloor = {
"id":FloorId,
      // "floorno": markers.length + 1,
      "description": newDesc,
      "color": "#f18d00",
      "blocks": [[0,0],[0,0],[0,0]]
     
    }
    setActiveFloor(newFloor);
    setActiveFloorBoundary(newFloor.boundaries);
    setActiveFloorPolygons(newFloor.blocks);
    const markersLocal = markers;
    markersLocal.splice(FloorIdx-1, 0, newFloor )
  //  markersLocal.push(newFloor);
    setMarkers(markersLocal);

    setNewDesc("");
    handleSaveFloor();
    //window.location.reload();
  }


  const changeHandlerDesc = (event) => setNewDesc(event.target.value);
  const updateIsEdit = (e, value) => setIsEdit(value);



  const handleEditPolygonClick = (e) => {
    const drawingLocal = drawing;


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

      <Card className="iq-card">
          <CardBody className="iq-card-body">

      <div>
        



        <div className="row" style={{ margin: ".6%" }}>

          <div className="col-lg-4">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height bg-transparent">

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Building Id</Label>
                <Input type="text" className="form-control"
                  defaultValue={details.id} disabled />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Building Name</Label>
                <Input type="text" className="form-control"
                  defaultValue={details.name} property="name" onChange={ondetailChange} />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Street</Label>
                <Input type="text" className="form-control"
                  defaultValue={details.street} property="street" onChange={ondetailChange} />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Apartment</Label>
                <Input type="text" className="form-control" property="Apartment" onChange={ondetailChange}
                  defaultValue={details.Apartment} />
              </FormGroup>


              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Doornum</Label>
                <Input type="text" className="form-control" property="doornum" onChange={ondetailChange}
                  defaultValue={details.doornum} />
              </FormGroup>


              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Region</Label>
                <Input type="text" className="form-control" property="region" onChange={ondetailChange}
                  defaultValue={details.region} />
              </FormGroup>

              <FormGroup className="form-group">
                <Label htmlFor="exampleInputReadonly">Country</Label>
                <Input type="text" className="form-control" property="country" onChange={ondetailChange}
                  defaultValue={details.country} />

              </FormGroup>

              <Button className="btn btn-primary"
                style={{ "font-size": "1.0rem", "margin-left": ".05rem", "margin-right": ".05rem" }} color="primary" onClick={handleSaveFloor}> SaveBuilding </Button>

            </div>
          </div>


          <div className="col-lg-8">
            <div className="iq-card overflow-hidden">
              <h1 className="display-4">{activeFloor.description}</h1>

              <div id="home-chart-02">
              {buildingCenter.lat && buildingCenter.lng && <Map center={buildingCenter} zoom={16} ref={mapRef} >
                {/* <Map center={[details.latitude, details.longitude]} zoom={19} ref={mapRef} > */}
                  <Control position="topright">
                    {/* <button class="primary" onClick={handleDrawPolygonClick} value="BO"
                    style={{ "font-size": "1.5rem", "margin-left": ".05rem" ,"margin-right": ".05rem" }}>
                    Add Floor
                        </button> */}



                    <Button className="btn btn-primary" color="primary" onClick={() => toggle("addFloor")}> AddFloor </Button>{' '}


                    <Modal isOpen={addFloor} toggle={() => toggle("addFloor")} className="modal-sm">
                      <ModalHeader className="btn btn-primary" toggle={() => toggle("addFloor")}>Add Floor</ModalHeader>
                      <ModalBody>


                        {/* <p>Floor: {markers.length + 1}</p> */}
                        <p>Index:</p> <input
            onChange={onChangeIndex}
            value={FloorIdx}
            type="number"
          
          />

                        <p>Enter Floor Description</p>
                        <input type="text" onChange={changeHandlerDesc} value={newDesc}
                          lur={updateIsEdit} />

                      </ModalBody>
                      <ModalFooter>

                        <Button color="btn btn-primary" onClick={() => {
                          toggle("addFloor");
                          // handleAddFloor(); 
                          handleAddFloor();

                        }}>OK</Button>{' '}
                        <Button color="btn btn-primary" onClick={() => toggle("addFloor")}>Cancel</Button>
                      </ModalFooter>
                    </Modal>

                    <Button class="btn btn-primary" onClick={deleteActiveFloor} value="BO"
                    >
                      Delete Floor
                        </Button>
                    {/* <button class="btn btn-primary" onClick={handleDrawPolygonClick} value="BO"
                    style={{ "font-size": "1.0rem", "margin-left": ".05rem", "margin-right": ".05rem" }}>
                    Manage Boundary
                        </button> */}

                    <button class="btn btn-primary" onClick={handleDrawPolygonClick} value="BL"
                      style={{ "font-size": "1.0rem", "margin-left": ".05rem" }}>
                      AddBlock
                        </button>
                    {/* 
                  <button class="btn btn-primary" onClick={handleEditPolygonClick}
                    style={{ "font-size": "1.0rem", "margin-left": ".05rem" }}>
                    EditBlock
                        </button> */}
                  </Control>
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

                  <EditableGroup data={selectedFloorGeoData} >
                    {/* {
                      markers.map((marker, ind) => (
                        marker.blocks.map((block, ind) => (

                        <Marker position={block.centre}>

                       
           <Tooltip permanent direction="center"> {block.text}</Tooltip> </Marker>

)) ))
                    } */}
                  
                  {/* <Tooltip
                            style={{fontSize:"20px"}}
                         title=   {<h3 style={{ color: "lightblue" }}>{mLr.description}</h3>}
       
        placement="left"
      >
      </Tooltip> */}

                  </EditableGroup>

                  <div>
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
                    {/* Description: <input
            onChange={onChangeDesc}
            value={blockDesc}
            type="text"
          
          /><br/>
                    icon: <input
            onChange={onChangeIcon}
            value={icon}
            type="url"
          
          /><br/> */}
                    </form>
                   
                    </CardBody>
                    </Card>
  
                  </ModalBody>
                  <ModalFooter>
                 {/* <Button color="primary" >submit</Button>  */}
                  <Button color="secondary" onClick={createBlockWithDesc}>Ok</Button>
                  </ModalFooter>
                  
                  
                  </Modal>
                  </div>


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
                    
                  ))}*/}
                  {/* <Polygon positions={activeFloorBoundary} onClick={handleLayerClick}> </Polygon> */}



                  {/* </FeatureGroup>  */}
                  {/* import React from "react";

import "semantic-ui-css/semantic.min.css";

import { Button, Popup } from "semantic-ui-react";

export default function App() {
  return (
    <div className="App">
      <Popup
        trigger={<Button>Register</Button>}
        position="top center"
      >
        Tooltip for the register button
      </Popup>
    </div>
  );
} */}


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
                  {/* {if(details!==undefined&&details.boundaries.length>0)
                    <Polygon positions={details.boundaries} ></Polygon>
                  } */}

                  <Boundary></Boundary>


                </Map>}
              </div>
            </div>
          </div>
          
        </div>
        




      </div>
      
      </CardBody>
      </Card>
      
    </div>
  )
}


export default EditBuilding;