import React, { useEffect, useRef, useState } from "react";

import { Container, Table, Row, Col, Card, CardTitle, CardBody, Modal, ModalHeader, Button, ModalFooter, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';

import {v4 as uuidv4} from 'uuid';
import DisplayEntries from "./DisplayEntries"
import service from "./services.js";
// import { CardBody, Card } from 'reactstrap';
import L from 'leaflet';
import { EditControl } from "react-leaflet-draw";
import { Polygon, Popup, Rectangle, Marker, TileLayer, FeatureGroup } from "react-leaflet";
import { Link } from "react-router-dom";
// import { Table, Container, Col, Row, PopUp, Button } from "reactstrap";
import { Map } from "react-leaflet";

// import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Tabs from "./Tabs";
import PropTypes from "prop-types";
import DashBoard from "./Dashboard";
//import icon from "./icon_building.png";
import { Icon, marker } from "leaflet";
import { SelectionState } from "@devexpress/dx-react-grid";
//import EditFloormap from "./EditFloormap";
import history from "./history"
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
// import '../../../node_modules/leaflet/dist/leaflet.css';
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import { makeStyles } from "@material-ui/core";

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



const Map1 = (props) => {


  let mapRef = useRef();
  const [markers, setMarkers] = useState([])
  const [newLat, setNewLat] = useState('')
  const [newLng, setNewLng] = useState('')
  const [newName, setNewName] = useState('')
  const [delBuildingId, setDelBuildingId] = useState('')
  const [addBBuildingId, setAddBBuildingId] = useState('')

  const [displayPolygonControl, setdisplayPolygonControl] = useState(false);



  const [mapLayers, setMapLayers] = useState([]);
  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/marker-icon.png',
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });
  // delete start
  const [modalDelete, setModalDelete] = useState(false);
  const classes = useStyles(props)
  const editRef = useRef();
  const editRefPoly = useRef();

  const [modalBoundaryError, setmodalBoundaryError] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [drawing, setDrawing] = useState(false);

  const handleBoundary = () => {

    //Edit this method to perform other actions

    if (!drawing) {
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable()
    } else {
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.completeShape()
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable()
    }
    setDrawing(!drawing)
  }

  const handleManageBoundaries = (e) => {

    const bId = e.target.getAttribute('value');

    debugger;
    editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.enable();
    setAddBBuildingId(bId);

  }



  const onShapeDrawn = (e) => {
    let boundaries = [];
    const bId = addBBuildingId;
    const { layerType, layer } = e;
    let markersLcl = markers;

    if (bId === "" && layerType === "polygon") {
      editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable();
      debugger;
      editRef.current.leafletElement._toolbars.edit.options.featureGroup.removeLayer(layer);
      toggleModalBoundaryError();

    } else {
      if (layerType === "polygon") {
        const { _leaflet_id } = layer;
        editRef.current.leafletElement._toolbars.draw._modes.polygon.handler.disable();
        for (var j = 0; j < markersLcl.length; j++) {
          if (bId === markersLcl[j].id) {
            for (var k = 0; k < layer._latlngs[0].length; k++) {
              var point = [layer._latlngs[0][k].lat, layer._latlngs[0][k].lng];
              boundaries.push(point);
            }
            markersLcl[j].boundaries = boundaries;
            setMarkers(markersLcl);
            service.updateBuilding(markersLcl[j].id,markersLcl[j]);
          }

        }
        debugger;
      } else if (layerType === "marker") {
        setNewLat(layer.getLatLng().lat);
        setNewLng(layer.getLatLng().lng);
        toggleModal();
      }
    }


    // e.layer.on('click', () => {
    //   editRef.current.leafletElement._toolbars.edit._modes.edit.handler.enable()
    // })
    // e.layer.on('contextmenu', () => {
    //   //do some contextmenu action here
    // })
    // e.layer.bindTooltip("Text",
    //   {
    //     className: 'leaflet-draw-tooltip:before leaflet-draw-tooltip leaflet-draw-tooltip-visible',
    //     sticky: true,
    //     direction: 'right'
    //   }
    // );
  }

  const [defaultBoard] = useState(
    {
      id: 0,
      title: '',
      color: '',
      list: [

      ]
    },
  );
  const [defaultTask] = useState(
    {
      id: 0,
      name: '',
      description: '',
      status: 0
    }
  );
  const [boards] = useState([
    {
      id: 1,
      title: 'Todo',
      color: 'bg-primary',
      list: [
        { id: 1, name: 'John', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s', status: 0, date: '2020-01-1' },
      ]
    },
    {
      id: 2,
      title: 'Planing',
      color: 'bg-success',
      list: [
        { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 1, date: '2020-01-5' }
      ]
    },
    {
      id: 3,
      title: 'Working',
      color: 'bg-info',
      list: [
        { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-6' },
      ]
    },
    {
      id: 4,
      title: 'Testing',
      color: 'bg-warning',
      list: [
        { id: 1, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '2020-01-8' }

      ]
    },
    {
      id: 5,
      title: 'Complete',
      color: 'bg-danger',
      list: [
        { id: 5, name: 'Juan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', status: 0, date: '02 jan 2020' }
      ]
    }
  ]);
  const [colors] = useState([
    'bg-primary',
    'bg-success',
    'bg-warning',
    'bg-info',
    'bg-danger'
  ]);


  const toggleModal = () => setModal(!modal);
  const toggleModalBoundaryError = () => setmodalBoundaryError(!modalBoundaryError);
  
  const toggleModalDelete = () => setModalDelete(!modalDelete);

  const toggleModal1 = () => setModal1(!modal1);

  const newNameChange = (e) => {
    if (e.target.value.length < 20) {
      setNewName(e.target.value);
    }
  };
  const saveBoard = (item) => {
    // window.location.reload();
    const newBName = newName;
    const newBLat = newLat;
    const newBLng = newLng;
    debugger;
    if (newName === "") {
      // toggleModal();
    } else {
      //const id = "B-" + new Date().getTime().toString();
      let id = uuidv4();
      const emptyBuilding = {
        "link": "/ViewBuilding/" + id,
        "id": id,
        "name": newBName,
        "description": newBName,
        "street": "",
        "Apartment": "",
        "doornum": "",
        "pincode": "",
        "region": "",
        "country": "",
        "latitude": newBLat,
        "longitude": newBLng,
        "floors": [],
        "boundaries":[]
      };
      setNewName("");
      setNewLat(0.0);
      setNewLng(0.0);
      // const markersLocal = markers;
      // markers.push(emptyBuilding);
      service.update(emptyBuilding);
      window.location.reload();
    }
  };
  const saveTask = (item) => {
    // let index = boards.list.findIndex(task => task.id === item.id)
    // if (index !== -1) {
    //   boards.list[index] = item
    // } else {
    //     boards.list.push(item)
    // }

  };
  const deleteBuilding = (e) => {

    const id = e.target.getAttribute('value');
    if (id !== null && id !== undefined && id !== "") {
      setDelBuildingId(id);
      toggleModalDelete();
    }


  }

  const deleteBuildingConfirm = (e) => {

    debugger;
    const bid = delBuildingId;
    service.deletion(bid);
    window.location.reload();


  }
  // delete end

  useEffect(() => {


    service
      .getAll()
      .then(allEntries => {
        console.log("returning", allEntries)

        setMarkers(allEntries)
        debugger;

      })
  }, [])



  // const changeHandler = (event) => setNewLat(event.target.value)
  // const changeHandler1 = (event) => setNewLng(event.target.value)
  // const changeHandler2 = (event) => setNewName(event.target.value)
  //const changeHandlerFilter = (event) => setNewFilter(event.target.value)



  const position = [60.21749913, 24.938379];
  const position1 = [60.21749913, 24.806496774]
  console.log(position)




  const [searchTerm, setSearchTerm] = useState("");
  //const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // const results = markers.filter(marker =>
    // (marker.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())


    // )
    // );

    const results = markers.filter(marker =>
      (JSON.stringify(marker).toLowerCase().includes(searchTerm.toLocaleLowerCase())
  
  
      )
      );
    setMarkers(results);
    if (searchTerm === "") {
      service
        .getAll()
        .then(allEntries => {
          console.log("returning", allEntries)

          setMarkers(allEntries)
        })
    }

    console.log(results)
  }, [searchTerm]);

  // this.setState({
  //   searchValue: search,
  //   filteredPeople: this.state.people.filter(
  //    item =>
  //     (item.lastname && item.lastname.toLowerCase().includes(search)) ||
  //     (item.name && item.name.toLowerCase().includes(search))
  //   )
  //  });
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });


  const flyToMarker = (e) => {

    const idx = e.target.getAttribute('value');
    const markersLcl = markers;
    const itemLcl = markersLcl[idx];





    mapRef.current.leafletElement.flyTo([itemLcl.latitude, itemLcl.longitude], 16)
  }
  const handleDelete = (id, nameToBeDeleted, e) => {
    if (window.confirm(`Delete ${nameToBeDeleted}?`)) {
      service
        .deletion(id)
        .then(() => {
          setMarkers(markers.filter(marker => marker.id !== id));
          window.confirm(`Deleted ${nameToBeDeleted}`);
        })
        .catch(() => {
          window.confirm(`Error: ${nameToBeDeleted} already deleted`, 'red');
          setMarkers(markers.filter((marker) => marker.id !== id));
        });
    }
  }

  const handleUpdate = (id, nameToBeDeleted, e) => {

  }

  function renderPopup (item){
  
    return (
      
      <Popup >
        {item.description}
     
         
        {/* <Link  to={"/ViewBuilding/" + item.id} >{item.description}</Link> */}
      </Popup>
      
    );
  }



  const handleClick = (e) => {
    e.latlng()
  }






  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const iconMarkup = renderToStaticMarkup(
    <i class="fas fa-building" />

  );
  const customMarkerIcon = divIcon({
    html: iconMarkup
  });

  const _onCreate = (e) => {
    let latlng = {}
    if (e.layer !== undefined && e.layer !== null) {
      latlng = e.layer.getLatLng();
      setNewLat(latlng.lat);
      setNewLng(latlng.lng);
    }
    if (isOpen === false) {

      toggleModal();
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
  

  const onChangeSearch = (e) => {

    const val = e.target.value;

    setSearchTerm(val);

  }

  return (



    <div id="container" >
      <Card className="iq-card mb-4" >
        <Input type="text" name="title" id="exampleEmail"
          placeholder="Search building by name"
          className="form-control mb-8 font-weight-bold " value={searchTerm} onChange={onChangeSearch} style={{ margin: "1rem" }}
        />
      </Card>

      {/* edit start */}
      <Row>
        <Col sm="12">
          <Card className="iq-card">
            {/* <div className="iq-card-header d-flex justify-content-between">
              <CardTitle className="iq-header-title">
                Map
               
              </CardTitle>
            </div> */}
            <CardBody className="iq-card-body">
              <p></p>
              <Map ref={mapRef}
                style={{ height: "500px", width: "100%" }}

                center={[60.21679719545689, 24.810291821854594]} zoom={16} maxZoom={100}

              >

                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {
                  markers.map((item, index) => (

                    <Marker key={item.id}
                      position={[item.latitude, item.longitude]}
                      onMouseOver={(e) => {
                        e.target.openPopup();
                      }}
                      onMouseOut={(e) => {
                        e.target.closePopup();
                      }}
                    >
                      {/* <renderPopup item={item}></renderPopup> */}

                      {renderPopup(item) }

                    </Marker>
                  ))
                }


                <FeatureGroup tyle={{ display: displayPolygonControl ? "block" : "none" }}>
                  <EditControl
                    ref={editRef}
                    position="topright"
                    onCreated={onShapeDrawn}
                    onEdited={_onEdited}
                    // onDeleted={_onDeleted}
                    draw={{
                      rectangle: false,
                      polyline: false,
                      circle: false,
                      circlemarker: false,
                      polygon: true,
                    }}
                  >
                    
                      

                  </EditControl>
                 
                  {/* <EditControl
                  ref = {editRefPoly}
                    position="topright"
                    onCreated={onShapeDrawn}
                    // onEdited={_onEdited}
                    // onDeleted={_onDeleted}
                    showDrawControl="{displayPolygonControl}"
                    draw={{
                      rectangle: false,
                      polyline: false,
                      circle: false,
                      circlemarker: false,
                      marker: false,
                    }}
                  /> */}
                </FeatureGroup>
                {
                      markers.map((markerx,iidx)=>(
                        <Polygon positions={markerx.boundaries}></Polygon>
                        
                      ))
                    }

              </Map>
            </CardBody>
          </Card>
        </Col>
      </Row>


      <Container fluid={true}>
        <Row>
          <Col md={12}>
            <Row>
              <div className="col-12 text-right">
                {/* onSubmit={saveBoard(defaultBoard)} */}
                <Form >
                  <Modal isOpen={modal} fade={false} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal} className={"border-0"}>
                      <h5 className={"text-primary card-title"}>
                        New Building
                                                    </h5>
                    </ModalHeader>
                    <ModalBody>
                      <Label>Please provide a name..</Label>
                      <Input type="text" name="title" value={newName} onChange={newNameChange} />
                    </ModalBody>
                    <ModalFooter>
                      {/* <Button color="secondary" onClick={toggleModal}>
                        Cancel
                                                </Button> */}
                      <Button color="primary" onClick={saveBoard} active="false">
                        Save
                                                </Button>
                    </ModalFooter>
                  </Modal>
                </Form>
              </div>

            </Row>

           
                <Row>
                  <div className="col-12 text-right">
                    {/* onSubmit={saveBoard(defaultBoard)} */}
                    <Form >
                      <Modal isOpen={modalBoundaryError} fade={false} toggle={toggleModalBoundaryError}>
                        <ModalHeader toggle={toggleModalBoundaryError} className={"border-0"}>
                          <h5 className={"text-primary card-title"}>
                           Use differentOption
                                                    </h5>
                        </ModalHeader>
                        <ModalBody>
                          <Label>Please use Manage Boundaries Option.</Label>
                          
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={toggleModalBoundaryError}>
                        ok
                                                </Button>
                        
                        </ModalFooter>
                      </Modal>
                    </Form>
                  </div>

                </Row>


                <Row>
                  <div className="col-12 text-right ">
                    {/* onSubmit={saveBoard(defaultBoard)} */}
                    <Form >
                      <Modal isOpen={modalDelete} fade={false} toggle={toggleModalDelete}>
                        <ModalHeader toggle={toggleModalDelete} className={"border-0"}>
                          <h5 className={"text-primary card-title"}>
                            Confirm Delete
                                                    </h5>
                        </ModalHeader>
                        <ModalBody>
                          <Label>Are you sure you want to dete Building?</Label>
                          {/* <Input type="text" name="title" value={newName} onChange={newNameChange} /> */}
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={toggleModalDelete}>
                            Cancel
                                                </Button>
                          <Button color="primary" onClick={deleteBuildingConfirm}>
                            Delete
                                                </Button>
                        </ModalFooter>
                      </Modal>
                    </Form>
                  </div>

                </Row>


                <Row>
                  <Col md={12} className="track">
                    {
                      markers.map((item, index) => (
                        <Card className="bg-transparent shadow-none mr-3 w-25 iq-card" >
                          <div className={"iq-card-header d-flex justify-content-between bg-primary"}>
                            <div className="iq-header-title">
                              <h3 className="text-white"><Link to={"/ViewBuilding/" + item.id} onMouseEnter={flyToMarker} value={index} className="nav-link font-weight-bold ">{item.name} </Link>
                              </h3>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">

                              <i className="ri-delete-bin-fill mr-0 font-size-28" role="button" tabIndex="0" onClick={deleteBuilding} value={item.id}>

                              </i>

                            </div>
                          </div>
                          <CardBody className="card-body iq-card-body pro-bg-card">
                            <div>


                              <Card className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between pro-task-bg-card">
                                  <div className="iq-header-title">
                                    {/* <Link to={item.link} onMouseEnter={flyToMarker} value={index} className="nav-link font-weight-bold ">{item.description} </Link> */}
                                    <h3 className="text-blue"><Link to={"/ViewBuilding/" + item.id} onMouseEnter={flyToMarker} value={index} className="nav-link font-weight-bold font-black">{item.street}   {item.Apartment} {item.doornum} {item.region} {item.country} </Link>
                                    </h3>


                                  </div>
                                  <div className="iq-card-header-toolbar d-flex align-items-center">


                                  </div>
                                </div>
                                <CardBody className="card-body iq-card-body pro-task-bg-card">
                                  <Link to={"/EditBuilding/" + item.id}>
                                    <a className="badge iq-bg-primary mr-2 p-2 font-size-18">Edit</a>
                                  </Link>

                                  <Link >
                                    <a className="badge iq-bg-primary mr-2 p-2 font-size-18" type="button" value={item.id}
                                      onClick={handleManageBoundaries}>Manage Boundary</a>
                                  </Link>
                                  {/* <Button
                                    className="badge iq-bg-primary mr-2 p-2 font-size-18"
                                    onClick={handleManageBoundaries} value={item.id}>

                                    Manage Boundary
                               </Button> */}

                                  {/* <p className="font-size-12">{item.description}</p> */}
                                  {/* <div className="d-flex justify-content-between">
                                <div>

                                  <i className="ri-ball-pen-line font-size-18" role="button" tabIndex="0"></i>
                                  <i className="ri-attachment-line font-size-18 ml-2"></i>
                                  <i className="ri-eye-line font-size-18 ml-2"></i>
                                  <span>
                                    <small>54</small>
                                  </span>
                                  <i className="ri-chat-4-line font-size-18 ml-2"></i>
                                  <span>
                                    <small>36</small>
                                  </span>
                                  <i className="ri-close-circle-line font-size-18 ml-2"></i>
                                </div>
                              </div> */}
                                  <div className="mt-2 progress" style={{ "height": "4px" }}>
                                    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" className="progress-bar iq-border-radius-10 bg-success" style={{ "width": "40%" }}>
                                      <span> </span>
                                    </div>
                                    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" className="progress-bar iq-border-radius-10 bg-warning" style={{ "width": "80%" }}>
                                      <span> </span>
                                    </div>
                                    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" className="progress-bar iq-border-radius-10 bg-danger" style={{ "width": "50%" }}>
                                      <span> </span>
                                    </div>
                                  </div>
                                </CardBody>
                              </Card>



                            </div>
                            {/* <Button color="primary" className="btn btn-lg btn-block"  onClick={toggleModal1}>
                                                        Add Item
                                                    </Button> */}
                          </CardBody>

                        </Card>
                      ))
                    }

                  </Col>
                </Row>
              </Col>
            </Row>
            <Form onSubmit={saveTask(defaultTask)}>
              <Modal isOpen={modal1} fade={false} toggle={toggleModal1}>
                <ModalHeader toggle={toggleModal1} className={"border-0"}>
                  <h5 className={"text-primary card-title"}>
                    New Task
                                    </h5>
                </ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Description</Label>
                    <Input type="text" name="password" id="examplePassword" placeholder="password placeholder" />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                                                Go
                                        </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                                           High
                                        </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                                           Critical
                                        </Label>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggleModal1}>
                    Close
                                </Button>
                  <Button color="primary" >
                    Save Changes
                                </Button>
                </ModalFooter>
              </Modal>
            </Form>
      </Container>
          {/* edit end */}
          {/* <Container fluid={true}>
        <div className="row">
          <div className="col-12">
            <div className="iq-card ">
              <div className="row d-flex align-items-center mb-2">
                <div className="col-md-9"><div className="d-flex align-items-center">
                  <h4 className="mb-0 p-3 ml-2">Buildings</h4>

                </div>
                </div>
                <div className="text-right col-md-3">

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}



          {/* <Container fluid={true}>
        <div className="row">
          <div className="col-12">
            <div className="iq-card ">
              <div className="row d-flex align-items-center mb-2">
                <div className="col-md-9"><div className="d-flex align-items-center">
                  <Card style={{ margin: ".1%" }}>
                    <CardBody>

                      <Table className="table" items={markers}>

                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>

                          </tr>
                        </thead>
                        <tbody>

                          {

                            markers.map((item, index) => (

                              <tr key={index}>
                                <th>{item.id} </th>
                                <td> <Link to={item.link} onMouseEnter={flyToMarker} value={index} className="nav-link font-weight-bold ">{item.description} </Link></td>
                                <td >{item.street}   {item.Apartment} {item.doornum} {item.region} {item.country}</td>
                                <td><button type="button"
                                  onClick={() => handleDelete(item.id, item.description)}
                                > Delete </button></td>

                                <td><Link to="/EditBuilding/1" className="nav-link font-weight-bold ">edit</Link></td>


                                {<Link onClick={(e) => handleDelete(item.refnum, item.description, e)} className="nav-link font-weight-bold ">Delete</Link> }

                              </tr>
                            ))
                          }



                        </tbody>
                      </Table>

                    </CardBody>
                  </Card>

                </div>
                </div>
                <div className="text-right col-md-3">

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}






















    </div>
  );
}




export default Map1

