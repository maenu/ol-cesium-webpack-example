require('cesium/Widgets/widgets.css')
require('./css/main.css')

import Cesium from 'cesium/Cesium'
window.Cesium = Cesium

import OLCesium from 'olcs/OLCesium'

import olMap from 'ol/Map.js'
import olView from 'ol/View.js'
import * as olProj from 'ol/proj.js'
import olLayerTile from 'ol/layer/Tile.js'
import olSourceStamen from 'ol/source/Stamen.js'
import olStyleText from 'ol/style/Text.js'
import olStyleStyle from 'ol/style/Style.js'
import olGeomPoint from 'ol/geom/Point.js'
import olFeature from 'ol/Feature.js'
import olStyleFill from 'ol/style/Fill.js'
import olGeomCircle from 'ol/geom/Circle.js'
import olStyleCircle from 'ol/style/Circle.js'
import olSourceVector from 'ol/source/Vector.js'
import olLayerVector from 'ol/layer/Vector.js'

let createFeature = (text, radius, olCoordinates) => {
	olCoordinates = olProj.fromLonLat(olCoordinates)
	const feature = new olFeature({
		geometry: new olGeomPoint(olCoordinates)
	})
	const style = [new olStyleStyle({
		text: new olStyleText({
			text: text,
			font: '5em sans-serif',
			textAlign: 'center',
			textBaseline: 'middle',
			fill: new olStyleFill({
				color: 'rgba(0, 0, 0, 0.9)'
			})
		})
	}), new olStyleStyle({
		geometry: new olGeomCircle(olCoordinates, radius),
		fill: new olStyleFill({
			color: 'rgba(255, 0, 0, 0.3)'
		})
	})]
	feature.setStyle(style)
	return feature
}

const SOLOTHURN = {
	feature: createFeature('Solothurn', 1e2, [7.5322909999999865, 47.2088348]),
	flyTo: {
		destination: new Cesium.Cartesian3(4305877.4497946715, 570878.8924526325, 4657357.815395062),
		orientation: {
			direction: new Cesium.Cartesian3(-0.8110022745845021, -0.5697544738504208, 0.13287268397301974),
			up: new Cesium.Cartesian3(0.3108562712171607, -0.22725293708160801, 0.9228892031185248)
		}
	}
}
const GROSSHOCHSTETTEN = {
	feature: createFeature('Grosshöchstetten', 1e2, [7.638021999999978, 46.90670249999999]),
	flyTo: {
		destination: new Cesium.Cartesian3(4328984.384029111, 579749.2356020015, 4634880.664951307),
		orientation: {
			direction: new Cesium.Cartesian3(-0.9774952590123558, 0.18640254281393343, 0.09877808785792136),
			up: new Cesium.Cartesian3(0.14320995880230197, 0.24252835807714945, 0.9595159734096379)
		}
	}
}
const BURGDORF = {
	feature: createFeature('Burgdorf', 1e2, [7.627224299999966, 47.0559357]),
	flyTo: {
		destination: new Cesium.Cartesian3(4316541.439687318, 578160.3112848722, 4646083.445367282),
		orientation: {
			direction: new Cesium.Cartesian3(-0.9520949061743215, -0.24715517335956902, 0.18008223099048767),
			up: new Cesium.Cartesian3(0.19801501115421027, -0.0495155666891596, 0.9789475287333073)
		}
	}
}
const BERN = {
	feature: createFeature('Bern', 1e2, [7.447446799999966, 46.9479739]),
	flyTo: {
		destination: new Cesium.Cartesian3(4325421.789874649, 566969.4302730401, 4640793.334586862),
		orientation: {
			direction: new Cesium.Cartesian3(0.028975518746800828, -0.48008231016537134, -0.8767447717435413),
			up: new Cesium.Cartesian3(0.9315239007556051, -0.3051391116987475, 0.1978720415641407)
		}
	}
}
const FRIBOURG = {
	feature: createFeature('Fribourg', 1e2, [7.161971900000026, 46.8064773]),
	flyTo: {
		destination: new Cesium.Cartesian3(4340140.411975827, 547699.0980531395, 4629590.2637987565),
		orientation: {
			direction: new Cesium.Cartesian3(-0.1680504943375809, -0.6983474641657448, -0.695751285048162),
			up: new Cesium.Cartesian3(0.7736762482737365, -0.5308135858855988, 0.3459219563663861)
		}
	}
}
const NEUCHATEL = {
	feature: createFeature('Neuchâtel', 1e2, [6.9292732000000115, 46.9899874]),
	flyTo: {
		destination: new Cesium.Cartesian3(4330994.706214172, 525231.4612516261, 4640154.020972635),
		orientation: {
			direction: new Cesium.Cartesian3(-0.9678480858880787, 0.15369566623750985, 0.19911736444265793),
			up: new Cesium.Cartesian3(0.22602938980364923, 0.18408182029484868, 0.9565691811792418)
		}
	}
}
const MADRID = {
	feature: createFeature('Madrid', 1e5, [-3.7037901999999576, 40.4167754]),
	flyTo: {
		destination: new Cesium.Cartesian3(5196833.095374121, 526435.7991801985, 5024241.107712613),
		orientation: {
			direction: new Cesium.Cartesian3(-0.3992619532756594, -0.5328963807288749, -0.7460638981163551),
			up: new Cesium.Cartesian3(0.705236867660123, -0.6984835376542852, 0.12149777001613352)
		}
	}
}
const MARIBOR = {
	feature: createFeature('Maribor', 1e5, [15.645881199999963, 46.5546503]),
	flyTo: {
		destination: new Cesium.Cartesian3(5501088.582945007, 1639130.765327577, 4819992.906463367),
		orientation: {
			direction: new Cesium.Cartesian3(-0.9288555881848899, -0.3057186266520443, -0.20919707841098123),
			up: new Cesium.Cartesian3(-0.18543448950142305, -0.10515129288720106, 0.9770144603369476)
		}
	}
}
const SHANGHAI = {
	feature: createFeature('Shanghai', 2e5, [121.47370209999997, 31.2303904]),
	flyTo: {
		destination: new Cesium.Cartesian3(-3101213.8626872385, 7437135.4453494465, 6079473.611640211),
		orientation: {
			direction: new Cesium.Cartesian3(0.06759159488488803, -0.7518878171852501, -0.6558171137362284),
			up: new Cesium.Cartesian3(-0.9904882502577982, 0.028392538023595287, -0.13463613885515363)
		}
	}
}

const DESTINATIONS = [
	GROSSHOCHSTETTEN,
	BURGDORF,
	BERN,
	FRIBOURG,
	NEUCHATEL,
	MADRID,
	MARIBOR,
	SHANGHAI,
	SOLOTHURN
]

const labelSource = new olSourceVector()
const labelLayer = new olLayerVector({
	source: labelSource,
	altitudeMode: 'clampToGround'
})

let view = new olView({
	center: olProj.fromLonLat([0, 0]),
	zoom: 3
})
let map = new olMap({
	target: 'map',
	projection: 'EPSG:3857',
	layers: [
		new olLayerTile({
			source: new olSourceStamen({
				layer: 'watercolor'
			})
		}),
		labelLayer
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
	flyTo: GROSSHOCHSTETTEN.flyTo,
	features: [GROSSHOCHSTETTEN.feature],
	filter: 'sepia(80%) contrast(110%) saturate(50%) blur(2px)'
}, {
	slide: 0
}, {
	slide: 1
}, {
	enter: () => {
		document.querySelectorAll('#slide-1 *').forEach((e) => {
			e.style.display = 'none'
		})
		document.querySelector('#slide-1 #mac-se30').style.display = 'block'
	}
}, {
	enter: () => {
		document.querySelector('#slide-1 #mac-startup').play()
	}
}, {
	enter: () => {
		document.querySelector('#slide-1 #mac-error').play()
	}
}, {
	enter: () => {
		let ball = document.querySelector('#slide-1 #football-tricolore')
		ball.style.display = 'block'
		setTimeout(() => {
			ball.style.left = '50%'
		}, 1000)
	}
}, {
	enter: () => {
		document.querySelector('#slide-1 #football-tricolore').style.left = '100%'
		document.querySelector('#slide-1 #guitar-spanish').style.display = 'block'
	}
}, {
	enter: () => {
		document.querySelector('#slide-1 #comics').style.display = 'block'
	}
}, {
	enter: () => {
		document.querySelectorAll('#slide-1 *').forEach((e) => {
			e.style.display = 'none'
		})
		document.querySelector('#slide-1 #win95-screen').style.display = 'block'
		document.querySelector('#slide-1 #win95-startup').play()
	}
}, {
	enter: () => {
		document.querySelectorAll('#slide-1 *').forEach((e) => {
			e.style.display = 'none'
		})
		document.querySelector('#slide-1 #win95-bsod').style.display = 'block'
	}
}, {
	enter: () => {
		document.querySelectorAll('#slide-1 *').forEach((e) => {
			e.style.display = 'none'
		})
		document.querySelector('#slide-1 #yahoo-1997').style.display = 'block'
		document.querySelector('#slide-1 #internet-dial-up').play()
		let overlay = document.querySelector('#slide-1 #overlay')
		overlay.style.display = 'block'
		setTimeout(() => {
			overlay.style.top = '100%'
		}, 1000)
	}
}, {
	enter: () => {
		document.querySelector('#slide-1 #overlay').style.top = '100%'
	},
	flyTo: BURGDORF.flyTo,
	features: [BURGDORF.feature],
	filter: 'sepia(50%) contrast(103%) saturate(70%) blur(1.4px)'
}, {
	slide: 2
}, {
	slide: 3
}, {
	flyTo: BERN.flyTo,
	features: [BERN.feature],
	filter: 'sepia(20%) contrast(101%) saturate(90%) blur(1.1px)'
}, {
	slide: 4
}, {
	flyTo: {
		destination: new Cesium.Cartesian3(4373502.432575947, 576401.6483197737, 4634934.781734697),
		orientation: {
			direction: new Cesium.Cartesian3(-0.8538266450277979, -0.5202633899293546, -0.017494723198469665),
			up: new Cesium.Cartesian3(0.17412462513507732, -0.31711242296526815, 0.9322662313538261)
		}
	},
	features: [
		createFeature('Bern', 3e3, [7.447446799999966, 46.9479739]),
		createFeature('Fribourg', 3e3, [7.161971900000026, 46.8064773]),
		createFeature('Neuchâtel', 3e3, [6.9292732000000115, 46.9899874])
	],
	filter: 'sepia(10%) saturate(95%)'
}, {
	slide: 5
}, {
	flyTo: {
		destination: new Cesium.Cartesian3(6673109.653503922, 777835.7824100128, 5352723.393619237),
		orientation: {
			direction: new Cesium.Cartesian3(-0.8949117153238542, -0.14385773934470406, -0.4224191906231869),
			up: new Cesium.Cartesian3(-0.3914523263324362, -0.20138726279775276, 0.8978909992820692)
		}
	},
	features: [
		MARIBOR.feature,
		MADRID.feature
	],
	filter: ''
}, {
	flyTo: {
		destination: new Cesium.Cartesian3(4269481.213477779, 8584386.51263794, 12575324.66690254),
		orientation: {
			direction: new Cesium.Cartesian3(-0.2812709054399874, -0.5621696730295537, -0.7777222746448852),
			up: new Cesium.Cartesian3(-0.3912946021060922, -0.6728185372261446, 0.6278564727129173)
		}
	},
	features: [
		MARIBOR.feature,
		MADRID.feature,
		SHANGHAI.feature
	],
	filter: ''
}, {
	slide: 6
}, {
	flyTo: SOLOTHURN.flyTo,
	features: [SOLOTHURN.feature],
	filter: ''
}, {
	slide: 7
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
	if (state.flyTo != undefined || state.slide != undefined) {
		document.querySelectorAll('#slides .current').forEach((e) => {
			e.classList.remove('current')
		})
	}
	if (state.enter != undefined) {
		state.enter()
	}
	if (state.slide != undefined) {
		document.querySelector(`#slides #slide-${state.slide}`).classList.add('current')
	}
	if (state.flyTo != undefined) {
		scene.camera.lookAt
		scene.camera.flyTo(state.flyTo)
	}
	if (state.features != undefined) {
		labelSource.clear()
		labelSource.addFeatures(state.features)
	}
	if (state.filter != undefined) {
		document.querySelector('#map').style.filter = state.filter
	}
}

labelSource.addFeatures([SOLOTHURN.feature])
scene.camera.flyTo(Object.assign({}, SOLOTHURN.flyTo, {
	duration: 10,
	pitchAdjustHeight: 0,
	easingFunction: Cesium.EasingFunction.SINUSOIDAL_IN_OUT
}))

window.addEventListener('keydown', (event) => {
	if (event.key == 'PageDown') {
		next()
	} else if (event.key == 'PageUp') {
		previous()
	} else if (event.key == 'Home') {
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
