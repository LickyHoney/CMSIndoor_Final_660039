import Routing from 'leaflet-routing-machine';
import {MapContainer} from 'react-leaflet';

export default class RoutingMachine extends MapContainer {
  componentWillMount() {
    super.componentWillMount();
    const {map, from, to} = this.props;
    this.leafletElement = Routing.control({
      waypoints: [
        this.leafletElement.latLng(from[0], from[1]),
        this.leafletElement.latLng(to[0], to[1]),
      ],
    }).addTo(map);
  }

  render() {
    return null;
  }
}