require('cesium/Widgets/widgets.css')
require('./css/main.css')

import Cesium from 'cesium/Cesium'
window.Cesium = Cesium
import OLCesium from 'olcs/OLCesium'
import core from 'olcs/core'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import * as proj from 'ol/proj.js'
import TileLayer from 'ol/layer/Tile.js'
import Stamen from 'ol/source/Stamen.js'

const SOLOTHURN = {
	destination: new Cesium.Cartesian3(4305877.4497946715, 570878.8924526325, 4657357.815395062),
	orientation: {
		direction: new Cesium.Cartesian3(-0.8110022745845021, -0.5697544738504208, 0.13287268397301974),
		up: new Cesium.Cartesian3(0.3108562712171607, -0.22725293708160801, 0.9228892031185248)
	}
}
const GROSSHOCHSTETTEN = {
	destination: new Cesium.Cartesian3(4328984.384029111, 579749.2356020015, 4634880.664951307),
	orientation: {
		direction: new Cesium.Cartesian3(-0.9774952590123558, 0.18640254281393343, 0.09877808785792136),
		up: new Cesium.Cartesian3(0.14320995880230197, 0.24252835807714945, 0.9595159734096379)
	}
}
const BURGDORF = {
	destination: new Cesium.Cartesian3(4316097.009629531, 576891.3198516676, 4646632.946977612),
	orientation: {
		direction: new Cesium.Cartesian3(-0.8474541670733944, 0.5297164433799465, -0.034956034140610465),
		up: new Cesium.Cartesian3(0.2518984416838627, 0.45920836895404915, 0.85186551107543)
	}
}
const BERN = {
	destination: new Cesium.Cartesian3(4327580.426142101, 566638.5222751156, 4638518.890336925),
	orientation: {
		direction: new Cesium.Cartesian3(-0.8597510734520366, -0.46159402812260547, -0.21853842888521488),
		up: new Cesium.Cartesian3(0.008190394394159363, -0.440315068780615, 0.8978059688175338)
	}
}
const NEUCHATEL = {
	destination: new Cesium.Cartesian3(4328024.324538709, 526244.239571324, 4641193.704714465),
	orientation: {
		direction: new Cesium.Cartesian3(-0.9709539801144114, -0.07014251177826682, 0.22875400879857616),
		up: new Cesium.Cartesian3(0.22520786793685732, 0.05497324183448217, 0.972758633424316)
	}
}
const FRIBOURG = {
	destination: new Cesium.Cartesian3(4341279.369223136, 545940.4146227916, 4627264.74589159),
	orientation: {
		direction: new Cesium.Cartesian3(-0.6831916828692814, -0.7301082853002537, -0.01382086083290671),
		up: new Cesium.Cartesian3(0.37247457166022513, -0.36469385523073045, 0.8533821450109434)
	}
}
const MADRID = {
	destination: new Cesium.Cartesian3(4858238.188838587, -313203.5057947239, 4112911.596772732),
	orientation: {
		direction: new Cesium.Cartesian3(-0.972453506278253, -0.20513798293174845, 0.11069140023427981),
		up: new Cesium.Cartesian3(0.16060884015583843, -0.24551335640729005, 0.9559958118576793)
	}
}
const MARIBOR = {
	destination: new Cesium.Cartesian3(4233170.001101817, 1182466.7867577937, 4608877.722935428),
	orientation: {
		direction: new Cesium.Cartesian3(-0.7772288292884106, 0.517594133777199, -0.35778717081862765),
		up: new Cesium.Cartesian3(0.18618502084857963, 0.7323409469457338, 0.6549899811739414)
	}
}
const SHANGHAI = {
	destination: new Cesium.Cartesian3(-2851744.926157732, 4659842.972179966, 3284380.871618134),
	orientation: {
		direction: new Cesium.Cartesian3(0.015062528898830252, -0.7966826938049401, 0.6042100674557451),
		up: new Cesium.Cartesian3(-0.4613468130990927, 0.5305741134827735, 0.7110908719321883)
	}
}

const DESTINATIONS = [
	GROSSHOCHSTETTEN,
	BURGDORF,
	BERN,
	NEUCHATEL,
	FRIBOURG,
	MADRID,
	MARIBOR,
	SHANGHAI,
	SOLOTHURN
]

let view = new View({
	center: proj.fromLonLat([0, 0]),
	zoom: 1
})
let map = new Map({
	target: 'map',
	projection: 'EPSG:3857',
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
	view: view
})

const ol3d = new OLCesium({
	map: map
}); // map is the ol.Map instance
ol3d.setEnabled(true)
window.ol3d = ol3d; // temporary hack for easy console debugging

let scene = ol3d.getCesiumScene()
scene.skyAtmosphere = undefined
scene.backgroundColor = Cesium.Color.WHITE
scene.terrainProvider = Cesium.createWorldTerrain()
scene.globe.tileCacheSize = 100000

let i = -1
let STATES = [{
	destination: GROSSHOCHSTETTEN
}, {
	slide: 0
}, {
	destination: BURGDORF
}, {
	slide: 1
}, {
	destination: BERN
}, {
	slide: 2
}, {
	destination: NEUCHATEL
}, {
	slide: 3
}, {
	destination: FRIBOURG
}, {
	slide: 4
}, {
	destination: MADRID
}, {
	slide: 5
}, {
	destination: MARIBOR
}, {
	slide: 6
}, {
	destination: SHANGHAI
}, {
	slide: 7
}, {
	destination: SOLOTHURN
}, {
	slide: 8
}]
let next = () => {
	goTo((i + 1 + STATES.length) % STATES.length)
}
let previous = () => {
	goTo((i - 1 + STATES.length) % STATES.length)
}
let goTo = (j) => {
	i = j
	let state = STATES[i]
	document.querySelector('#map').style.filter = `saturate(${100 * i / (STATES.length - 1)}%)`
	document.querySelectorAll('#slides .current').forEach((e) => {
		e.classList.remove('current')
	})
	if (state.destination) {
		scene.camera.flyTo(Object.assign({}, state.destination, {
			duration: 10,
			pitchAdjustHeight: 0,
			easingFunction: Cesium.EasingFunction.SINUSOIDAL_IN_OUT
		}))
	} else {
		document.querySelector(`#slides #slide-${state.slide}`).classList.add('current')
	}
}

window.addEventListener('keydown', (event) => {
	if (event.key == 'ArrowRight' || event.key == 'PageDown'){
		next()
	} else if (event.key == 'ArrowLeft' || event.key == 'PageUp'){
		previous()
	} else if (event.key == 'ArrowDown'){
		let position = scene.camera.position
		let direction = scene.camera.direction
		let up = scene.camera.up
		console.log(`{
	destination: new Cesium.Cartesian3(${position.x}, ${position.y}, ${position.z}),
	orientation: {
		direction: new Cesium.Cartesian3(${direction.x}, ${direction.y}, ${direction.z}),
		up: new Cesium.Cartesian3(${up.x}, ${up.y}, ${up.z})
	}
}`)
	}
})
