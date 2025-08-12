System.register(["jimu-core","jimu-arcgis","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/person-standing.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/person-standing.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ PersonStanding)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
];
const PersonStanding = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("person-standing", __iconNode);


//# sourceMappingURL=person-standing.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/streetviewclick/src/runtime/widget.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/person-standing.js");



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        // Handle toggle of the Street View feature
        this.toggleStreetView = () => {
            this.setState(prevState => ({
                isStreetViewActive: !prevState.isStreetViewActive
            }), () => {
                if (this.state.isStreetViewActive) {
                    this.activateStreetView();
                }
                else {
                    this.deactivateStreetView();
                }
            });
        };
        // Attach the click handler to enable Street View
        this.activateStreetView = () => {
            if (this.jimuMapView && this.jimuMapView.view && !this.jimuMapView.view._clickListener) {
                this.jimuMapView.view._clickListener = this.jimuMapView.view.on('click', this.handleMapClick);
                document.body.style.cursor = 'url("https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png") 12 41, auto';
            }
        };
        // Detach the click handler to disable Street View
        this.deactivateStreetView = () => {
            if (this.jimuMapView && this.jimuMapView.view && this.jimuMapView.view._clickListener) {
                this.jimuMapView.view._clickListener.remove();
                this.jimuMapView.view._clickListener = null;
                document.body.style.cursor = 'default';
            }
        };
        // Handle map click to open Google Street View
        this.handleMapClick = (event) => {
            const { latitude, longitude } = event.mapPoint;
            const gsvUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${latitude},${longitude}`;
            window.open(gsvUrl, '_blank');
        };
        // This gets called when the map view changes (important for active map state)
        this.onActiveViewChange = (jimuMapView) => {
            this.jimuMapView = jimuMapView;
            // If Street View is active, ensure the click event handler is attached
            if (this.state.isStreetViewActive) {
                this.activateStreetView();
            }
        };
        this.state = {
            isStreetViewActive: false, // Initially, Street View is not active
        };
    }
    render() {
        const { useMapWidgetId } = this.props.config;
        const { isStreetViewActive } = this.state;
        const widgetStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
        const buttonStyle = {
            padding: '8px 12px',
            backgroundColor: isStreetViewActive ? '#228B22' : '#CE2029',
            color: 'white',
            border: '#000000 2px solid',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '10px'
        };
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-streetviewclick", style: widgetStyle },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: buttonStyle, title: "Toggle Street View click mode", onClick: this.toggleStreetView },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], { size: 30, color: "white" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetId, onActiveViewChange: this.onActiveViewChange })));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zdHJlZXR2aWV3Y2xpY2svZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0Q7QUFDSztBQUNXOztBQUVsRSxhQUFhLGlEQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsVUFBVSxvREFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZEQUFpQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrRUFBWTtBQUM3Qix1QkFBdUIsaUVBQVcsWUFBWSx1QkFBdUI7QUFDckU7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3Q0FBd0Msb0RBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRTJCO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0Q7QUFDOEI7QUFDbkQ7O0FBRTdCO0FBQ0Esb0JBQW9CLGlEQUFVO0FBQzlCLE9BQU8scUJBQXFCLFVBQVUsb0RBQWEsQ0FBQyxnREFBSTtBQUN4RDtBQUNBO0FBQ0EsaUJBQWlCLGtFQUFZO0FBQzdCLGtCQUFrQixpRUFBVyxDQUFDLGtFQUFZLFlBQVk7QUFDdEQsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGtFQUFZO0FBQ3RDO0FBQ0E7O0FBRXVDO0FBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3QztBQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0Q7O0FBRXREO0FB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QUFLO1lBQ25CLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUM7UUFFRixPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBRSxXQUFXO1lBQ3hELHVFQUNFLEtBQUssRUFBRSxXQUFXLEVBQ2xCLEtBQUssRUFBQywrQkFBK0IsRUFDckMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBRTlCLDJEQUFDLG9EQUFjLElBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsT0FBTyxHQUFHLENBQ25DO1lBRVQsMkRBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxjQUFjLEVBQzlCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsR0FDM0MsQ0FDRSxDQUNQLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL0ljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vY3JlYXRlTHVjaWRlSWNvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9kZWZhdWx0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9wZXJzb24tc3RhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vc2hhcmVkL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc3RyZWV0dmlld2NsaWNrL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTI1LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcy5qcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMsIGhhc0ExMXlQcm9wIH0gZnJvbSAnLi9zaGFyZWQvc3JjL3V0aWxzLmpzJztcblxuY29uc3QgSWNvbiA9IGZvcndhcmRSZWYoXG4gICh7XG4gICAgY29sb3IgPSBcImN1cnJlbnRDb2xvclwiLFxuICAgIHNpemUgPSAyNCxcbiAgICBzdHJva2VXaWR0aCA9IDIsXG4gICAgYWJzb2x1dGVTdHJva2VXaWR0aCxcbiAgICBjbGFzc05hbWUgPSBcIlwiLFxuICAgIGNoaWxkcmVuLFxuICAgIGljb25Ob2RlLFxuICAgIC4uLnJlc3RcbiAgfSwgcmVmKSA9PiBjcmVhdGVFbGVtZW50KFxuICAgIFwic3ZnXCIsXG4gICAge1xuICAgICAgcmVmLFxuICAgICAgLi4uZGVmYXVsdEF0dHJpYnV0ZXMsXG4gICAgICB3aWR0aDogc2l6ZSxcbiAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICBzdHJva2VXaWR0aDogYWJzb2x1dGVTdHJva2VXaWR0aCA/IE51bWJlcihzdHJva2VXaWR0aCkgKiAyNCAvIE51bWJlcihzaXplKSA6IHN0cm9rZVdpZHRoLFxuICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzZXMoXCJsdWNpZGVcIiwgY2xhc3NOYW1lKSxcbiAgICAgIC4uLiFjaGlsZHJlbiAmJiAhaGFzQTExeVByb3AocmVzdCkgJiYgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAuLi5yZXN0XG4gICAgfSxcbiAgICBbXG4gICAgICAuLi5pY29uTm9kZS5tYXAoKFt0YWcsIGF0dHJzXSkgPT4gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzKSksXG4gICAgICAuLi5BcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxuICAgIF1cbiAgKVxuKTtcblxuZXhwb3J0IHsgSWNvbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JY29uLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTI1LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMsIHRvS2ViYWJDYXNlLCB0b1Bhc2NhbENhc2UgfSBmcm9tICcuL3NoYXJlZC9zcmMvdXRpbHMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uLmpzJztcblxuY29uc3QgY3JlYXRlTHVjaWRlSWNvbiA9IChpY29uTmFtZSwgaWNvbk5vZGUpID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gZm9yd2FyZFJlZihcbiAgICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgICByZWYsXG4gICAgICBpY29uTm9kZSxcbiAgICAgIGNsYXNzTmFtZTogbWVyZ2VDbGFzc2VzKFxuICAgICAgICBgbHVjaWRlLSR7dG9LZWJhYkNhc2UodG9QYXNjYWxDYXNlKGljb25OYW1lKSl9YCxcbiAgICAgICAgYGx1Y2lkZS0ke2ljb25OYW1lfWAsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSlcbiAgKTtcbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gdG9QYXNjYWxDYXNlKGljb25OYW1lKTtcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUx1Y2lkZUljb24gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlTHVjaWRlSWNvbi5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjUyNS4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgZGVmYXVsdEF0dHJpYnV0ZXMgPSB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiAyNCxcbiAgaGVpZ2h0OiAyNCxcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgZmlsbDogXCJub25lXCIsXG4gIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIixcbiAgc3Ryb2tlV2lkdGg6IDIsXG4gIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgc3Ryb2tlTGluZWpvaW46IFwicm91bmRcIlxufTtcblxuZXhwb3J0IHsgZGVmYXVsdEF0dHJpYnV0ZXMgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdEF0dHJpYnV0ZXMuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC41MjUuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjEyXCIsIGN5OiBcIjVcIiwgcjogXCIxXCIsIGtleTogXCJneGVvYjlcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTkgMjAgMy02IDMgNlwiLCBrZXk6IFwic2Uya294XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm02IDggNiAyIDYtMlwiLCBrZXk6IFwiNG8zdXM0XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAxMHY0XCIsIGtleTogXCIxa2pweGNcIiB9XVxuXTtcbmNvbnN0IFBlcnNvblN0YW5kaW5nID0gY3JlYXRlTHVjaWRlSWNvbihcInBlcnNvbi1zdGFuZGluZ1wiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgUGVyc29uU3RhbmRpbmcgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGVyc29uLXN0YW5kaW5nLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTI1LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmNvbnN0IHRvS2ViYWJDYXNlID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbmNvbnN0IHRvQ2FtZWxDYXNlID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoXG4gIC9eKFtBLVpdKXxbXFxzLV9dKyhcXHcpL2csXG4gIChtYXRjaCwgcDEsIHAyKSA9PiBwMiA/IHAyLnRvVXBwZXJDYXNlKCkgOiBwMS50b0xvd2VyQ2FzZSgpXG4pO1xuY29uc3QgdG9QYXNjYWxDYXNlID0gKHN0cmluZykgPT4ge1xuICBjb25zdCBjYW1lbENhc2UgPSB0b0NhbWVsQ2FzZShzdHJpbmcpO1xuICByZXR1cm4gY2FtZWxDYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxDYXNlLnNsaWNlKDEpO1xufTtcbmNvbnN0IG1lcmdlQ2xhc3NlcyA9ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcigoY2xhc3NOYW1lLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgcmV0dXJuIEJvb2xlYW4oY2xhc3NOYW1lKSAmJiBjbGFzc05hbWUudHJpbSgpICE9PSBcIlwiICYmIGFycmF5LmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gaW5kZXg7XG59KS5qb2luKFwiIFwiKS50cmltKCk7XG5jb25zdCBoYXNBMTF5UHJvcCA9IChwcm9wcykgPT4ge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcbiAgICBpZiAocHJvcC5zdGFydHNXaXRoKFwiYXJpYS1cIikgfHwgcHJvcCA9PT0gXCJyb2xlXCIgfHwgcHJvcCA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IGhhc0ExMXlQcm9wLCBtZXJnZUNsYXNzZXMsIHRvQ2FtZWxDYXNlLCB0b0tlYmFiQ2FzZSwgdG9QYXNjYWxDYXNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IHsgUGVyc29uU3RhbmRpbmcgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LCBhbnk+IHtcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc1N0cmVldFZpZXdBY3RpdmU6IGZhbHNlLCAgLy8gSW5pdGlhbGx5LCBTdHJlZXQgVmlldyBpcyBub3QgYWN0aXZlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gSGFuZGxlIHRvZ2dsZSBvZiB0aGUgU3RyZWV0IFZpZXcgZmVhdHVyZVxyXG4gIHRvZ2dsZVN0cmVldFZpZXcgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICBpc1N0cmVldFZpZXdBY3RpdmU6ICFwcmV2U3RhdGUuaXNTdHJlZXRWaWV3QWN0aXZlXHJcbiAgICB9KSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc1N0cmVldFZpZXdBY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlU3RyZWV0VmlldygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVN0cmVldFZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQXR0YWNoIHRoZSBjbGljayBoYW5kbGVyIHRvIGVuYWJsZSBTdHJlZXQgVmlld1xyXG4gIGFjdGl2YXRlU3RyZWV0VmlldyA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmppbXVNYXBWaWV3ICYmIHRoaXMuamltdU1hcFZpZXcudmlldyAmJiAhdGhpcy5qaW11TWFwVmlldy52aWV3Ll9jbGlja0xpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuamltdU1hcFZpZXcudmlldy5fY2xpY2tMaXN0ZW5lciA9IHRoaXMuamltdU1hcFZpZXcudmlldy5vbignY2xpY2snLCB0aGlzLmhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAndXJsKFwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjkuMy9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmdcIikgMTIgNDEsIGF1dG8nO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIERldGFjaCB0aGUgY2xpY2sgaGFuZGxlciB0byBkaXNhYmxlIFN0cmVldCBWaWV3XHJcbiAgZGVhY3RpdmF0ZVN0cmVldFZpZXcgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5qaW11TWFwVmlldyAmJiB0aGlzLmppbXVNYXBWaWV3LnZpZXcgJiYgdGhpcy5qaW11TWFwVmlldy52aWV3Ll9jbGlja0xpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuamltdU1hcFZpZXcudmlldy5fY2xpY2tMaXN0ZW5lci5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5qaW11TWFwVmlldy52aWV3Ll9jbGlja0xpc3RlbmVyID0gbnVsbDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIG1hcCBjbGljayB0byBvcGVuIEdvb2dsZSBTdHJlZXQgVmlld1xyXG4gIGhhbmRsZU1hcENsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IGV2ZW50Lm1hcFBvaW50O1xyXG4gICAgY29uc3QgZ3N2VXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9AP2FwaT0xJm1hcF9hY3Rpb249cGFubyZ2aWV3cG9pbnQ9JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuICAgIHdpbmRvdy5vcGVuKGdzdlVybCwgJ19ibGFuaycpO1xyXG4gIH07XHJcblxyXG4gIC8vIFRoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgbWFwIHZpZXcgY2hhbmdlcyAoaW1wb3J0YW50IGZvciBhY3RpdmUgbWFwIHN0YXRlKVxyXG4gIG9uQWN0aXZlVmlld0NoYW5nZSA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHRoaXMuamltdU1hcFZpZXcgPSBqaW11TWFwVmlldztcclxuXHJcbiAgICAvLyBJZiBTdHJlZXQgVmlldyBpcyBhY3RpdmUsIGVuc3VyZSB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlciBpcyBhdHRhY2hlZFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNTdHJlZXRWaWV3QWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVTdHJlZXRWaWV3KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VNYXBXaWRnZXRJZCB9ID0gdGhpcy5wcm9wcy5jb25maWc7XHJcbiAgICBjb25zdCB7IGlzU3RyZWV0Vmlld0FjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCB3aWRnZXRTdHlsZSA9IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcclxuICAgICAgcGFkZGluZzogJzhweCAxMnB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBpc1N0cmVldFZpZXdBY3RpdmUgPyAnIzIyOEIyMicgOiAnI0NFMjAyOScsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3JkZXI6ICcjMDAwMDAwIDJweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zdHJlZXR2aWV3Y2xpY2tcIiBzdHlsZT17d2lkZ2V0U3R5bGV9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgIHRpdGxlPVwiVG9nZ2xlIFN0cmVldCBWaWV3IGNsaWNrIG1vZGVcIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVTdHJlZXRWaWV3fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQZXJzb25TdGFuZGluZyBzaXplPXszMH0gY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3VzZU1hcFdpZGdldElkfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=