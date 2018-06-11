import Cesium from 'cesium/Cesium';
window.Cesium = Cesium; // expose Cesium to the OL-Cesium library
require('cesium/Widgets/widgets.css');
import OlCesium from 'ol-cesium';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import * as proj from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile.js';
import Stamen from 'ol/source/Stamen.js';

var map = new Map({
	layers: [
		new TileLayer({
			source: new Stamen({
				layer: 'watercolor'
			})
		}),
		new TileLayer({
			source: new Stamen({
				layer: 'terrain-labels'
			})
		})
	],
	target: 'map',
	view: new View({
		center: proj.transform([-122.416667, 37.783333], 'EPSG:4326', 'EPSG:3857'),
		zoom: 12
	})
});

const ol3d = new OlCesium({map: map}); // map is the ol.Map instance
ol3d.setEnabled(true);
window.ol3d = ol3d; // temporary hack for easy console debugging

var scene = ol3d.getCesiumScene();
scene.skyAtmosphere = undefined;
scene.backgroundColor = Cesium.Color.WHITE;
scene.terrainProvider = Cesium.createWorldTerrain();

var camera = ol3d.getCamera();
camera.setPosition([692797.1165423753, 8972045.4344847]);
camera.setAltitude(300);
camera.setDistance(2000);
camera.setHeading(1.8);
camera.setTilt(1);