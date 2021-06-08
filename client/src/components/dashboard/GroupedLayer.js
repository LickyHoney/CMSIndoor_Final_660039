import React, { Children, cloneElement } from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Control, DomUtil, DomEvent } from "leaflet";
import { withLeaflet, MapControl, LayersControl } from "react-leaflet";
import { IconButton } from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers";

const { ControlledLayer, BaseLayer } = LayersControl;

export class ControlledBaseLayer extends BaseLayer {
  constructor(props, context) {
    super(props);
    this.contextValue = {
      ...props.leaflet,
      layerContainer: {
        addLayer: this.addLayer.bind(this),
        removeLayer: this.removeLayer.bind(this)
      }
    };
  }

  addLayer = layer => {
    this.layer = layer; // Keep layer reference to handle dynamic changes of props
    const { addBaseLayer, checked, name } = this.props;
    addBaseLayer(layer, name, checked);
  };

  removeLayer = layer => {
    const { removeLayer, name } = this.props;
    removeLayer(layer, name);
  };
}

class GroupedLayer extends MapControl {
  constructor(props, context) {
    super(props);
    this.controlProps = {
      addBaseLayer: this.addBaseLayer.bind(this),
      leaflet: props.leaflet
    };
  }

  state = {
    menuOpen: false,
    baseLayers: []
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };
  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  addBaseLayer(layer, name, checked = false) {
    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }
    this.setState({
      baseLayers: [...this.state.baseLayers, { layer, name, checked }]
    });
  }

  removeLayer(layer, name) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }

    let layersToKeep = this.state.baseLayers.filter(x => x.name !== name);
    this.setState({
      baseLayers: layersToKeep
    });
  }
  //create and return a leaflet object you want to extend
  createLeafletElement(props) {
    // extend control from leaflet
    const MyControl = Control.extend({
      // there are only two options we can have here for extending a control
      // https://leafletjs.com/reference-1.5.0.html#control

      // Should return the container DOM element for the control and add listeners on relevant map events
      onAdd: map => {
        this.container = DomUtil.create("div");
        this.map = map;
        this.map.on("baselayerchange", e => {
          console.log(e);
        });
        DomEvent.disableClickPropagation(this.container);
        return this.container;
      },
      // this one is optional
      onRemove: map => {}
    });

    // return new instance of our control and pass it all the props
    return new MyControl(props);
  }

  updateLeafletElement(fromProps, toProps) {
    // render react component
  }

  componentDidMount(props) {
    super.componentDidMount();
    this.forceUpdate();
    // render react component
  }

  activateLayer = baseLayer => {
    console.log("removing base layer");
    this.props.leaflet.map.removeLayer(baseLayer.id);
  };

  render() {
    if (!this.leafletElement || !this.leafletElement.getContainer()) {
      return null;
    }
    console.log(this.state.baseLayers);
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Paper
            onMouseEnter={this.openMenu}
            onMouseLeave={this.closeMenu}
            {...this.props}
          >
            {this.state.menuOpen && (
              <div style={{ padding: 10 }}>
                {this.state.baseLayers.map(baseLayer => {
                  return (
                    <Typography onClick={() => console.log("layer clicked")}>
                      {baseLayer.name}
                    </Typography>
                  );
                })}
              </div>
            )}
            {!this.state.menuOpen && (
              <IconButton>
                <LayerIcon />
              </IconButton>
            )}
          </Paper>,
          this.leafletElement.getContainer()
        )}
        {Children.map(this.props.children, child => {
          return child && child.props.checked
            ? cloneElement(child, this.controlProps)
            : null;
        })}
      </React.Fragment>
    );
  }
}

export default withLeaflet(GroupedLayer);
