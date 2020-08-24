import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
Geocode.setApiKey(process.env.GOOGLEMAPS_API);
Geocode.enableDebug();

class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formatedAddress: '',
			address: '',
			street: '', 
			city: '',
			county: '',
			state: '',
			zipCode: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
	}

	componentDidMount() {
		Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
			response => {
				console.log(response.results[0].address_components);
				const formatedAddress = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					address = addressArray[0].short_name,
					street = addressArray[1],
					city = addressArray[3],
					county = addressArray[4],
					state = addressArray[5],
					zipCode = addressArray[7];

				console.log('city', city, county, state);

				this.setState({
					formatedAddress: (formatedAddress) ? address : '',
					address: (address) ? address : '',
					street: (street) ? street : '',
					city: (city) ? city : '',
					county: (county) ? county : '',
					state: (state) ? state : '',
					zipCode: (zipCode) ? zipCode : ''
				})
			},
			error => {
				console.error(error);
			}
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.county !== nextState.county ||
			this.state.state !== nextState.state
		) {
			return true
		} else if (this.props.center.lat === nextProps.center.lat) {
			return false
		}
	}

	//  * And function for city,state and address input
	//  * @param event
	//  *
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
  };
  
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = (event) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then(
			response => {
				const formatedAddress = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					address = addressArray[0].short_name,
					street = addressArray[1].short_name,
					city = addressArray[3].short_name,
					county = addressArray[4].short_name,
					state = addressArray[5].long_name,
					zipCode = addressArray[7].long_name;
				this.setState({
					formatedAddress: formatedAddress,
					address: address,
					street: street,
					city: city,
					county: county,
					state: state,
					zipCode: zipCode,
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				})
			},
			error => {
				console.error(error);
			}
		);
	};

	onPlaceSelected = (place) => {
		console.log('plc', place);
		const formatedAddress = (place.formatted_address) ? place.formatted_address: this.state.formatedAddress;
		const addressArray = (place.address_components) ? place.address_components : [];
			const address = (addressArray[0]) ? addressArray[0].short_name: this.state.address;
			const street = (addressArray[1]) ? addressArray[1].short_name: this.state.street;
			const city = (addressArray[3]) ? addressArray[3].short_name: this.state.city;
			const county = (addressArray[4]) ? addressArray[4].short_name: this.state.county;
			const state = (addressArray[5]) ? addressArray[5].short_name: this.state.state;
			const zipCode = (addressArray[7]) ? addressArray[7].short_name: this.state.zipCode;
			const latValue = (place.geometry) ? place.geometry.location.lat() : this.state.markerPosition.lat;
			const lngValue = (place.geometry) ? place.geometry.location.lng() : this.state.markerPosition.lng;



			//make an api call to get more information
			//let url = `https://rws.capitol.texas.gov/api/MatchAddress?Address=${address}%20${street}&City=${city}&Zip=${zipCode}&DistType=A`;
			
			// push it up our database


		// Set these values in the state.
		this.setState({
			formatedAddress: (formatedAddress) ? formatedAddress : '',
			address: (address) ? address : '',
			street: (street) ? street : '',
			city: (city) ? city : '',
			county: (county) ? county : '',
			state: (state) ? state : '',
			zipCode: (zipCode) ? zipCode : '',
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})
	};

	onSubmit = (event) => {
		event.preventDefault();
	};


	render() {
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={this.props.google}
						defaultZoom={this.props.zoom}
						defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{this.state.formatedAddress}</span>
							</div>
						</InfoWindow>
						{/* Marker */}
						<Marker google={this.props.google}
							name={'Dolores park'}
							draggable={true}
							onDragEnd={this.onMarkerDragEnd}
							position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />

						{/* For Auto complete Search Box */}
						<Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '20px',
								marginBottom: '500px'
							}}
							onSubmit={this.onSubmit}
							onPlaceSelected={this.onPlaceSelected}
							types={['address']}
						/>
					</GoogleMap>
				)
			)
		);


		let map;
		if (this.props.center.lat !== undefined) {
			map = <div>

				<AsyncMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLEMAPS_API}&libraries=places`}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			
				<div style={{ marginTop: '75px' }}>
					<div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.address + ' ' + this.state.street} />
					</div>
					<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.city} />
					</div>
					<div className="form-group">
						<label htmlFor="">County</label>
						<input type="text" name="area" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.county} />
					</div>
					<div className="form-group">
						<label htmlFor="">State</label>
						<input type="text" name="state" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.state} />
					</div>

					<button>Sign me up</button>

				</div>
			</div>
		} else {
			map = <div style={{ height: this.props.height }} />
		}
		return (map)
	}
}
export default Map;
