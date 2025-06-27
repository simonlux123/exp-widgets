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

/***/ "./node_modules/lucide-react/dist/esm/icons/earth.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/earth.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Earth)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Earth = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("earth", __iconNode);


//# sourceMappingURL=earth.js.map


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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/googleearthclick/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/earth.js");



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleGoogleEarth = () => {
            this.setState(prevState => ({
                isGoogleEarthActive: !prevState.isGoogleEarthActive
            }), () => {
                if (this.state.isGoogleEarthActive) {
                    this.activateGoogleEarth();
                }
                else {
                    this.deactivateGoogleEarth();
                }
            });
        };
        this.activateGoogleEarth = () => {
            var _a;
            if (((_a = this.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) && !this.jimuMapView.view._clickListener) {
                this.jimuMapView.view._clickListener = this.jimuMapView.view.on('click', this.handleMapClick);
                document.body.style.cursor = 'url("https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png") 12 41, auto';
            }
        };
        this.deactivateGoogleEarth = () => {
            var _a;
            if (((_a = this.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) && this.jimuMapView.view._clickListener) {
                this.jimuMapView.view._clickListener.remove();
                this.jimuMapView.view._clickListener = null;
                document.body.style.cursor = 'default';
            }
        };
        this.handleMapClick = (event) => {
            const { latitude, longitude } = event.mapPoint;
            const earthUrl = `https://earth.google.com/web/search/${latitude},${longitude}/@${latitude},${longitude},10000a,0d,0y,0h,0t,0r`;
            window.open(earthUrl, '_blank');
        };
        this.onActiveViewChange = (jimuMapView) => {
            this.jimuMapView = jimuMapView;
            if (this.state.isGoogleEarthActive) {
                this.activateGoogleEarth();
            }
        };
        this.state = {
            isGoogleEarthActive: false,
        };
    }
    render() {
        const { useMapWidgetId } = this.props.config;
        const { isGoogleEarthActive } = this.state;
        const widgetStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
        const buttonStyle = {
            padding: '8px 12px',
            backgroundColor: isGoogleEarthActive ? '#007BFF' : '#CE2029',
            color: 'white',
            border: '#000000 2px solid',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '10px'
        };
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-googleearthclick", style: widgetStyle },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { style: buttonStyle, title: "Toggle Google Earth click mode", onClick: this.toggleGoogleEarth },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nb29nbGVlYXJ0aGNsaWNrL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEO0FBQ0s7QUFDVzs7QUFFbEUsYUFBYSxpREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVUsb0RBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2REFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQVk7QUFDN0IsdUJBQXVCLGlFQUFXLFlBQVksdUJBQXVCO0FBQ3JFO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLG9EQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEO0FBQzhCO0FBQ25EOztBQUU3QjtBQUNBLG9CQUFvQixpREFBVTtBQUM5QixPQUFPLHFCQUFxQixVQUFVLG9EQUFhLENBQUMsZ0RBQUk7QUFDeEQ7QUFDQTtBQUNBLGlCQUFpQixrRUFBWTtBQUM3QixrQkFBa0IsaUVBQVcsQ0FBQyxrRUFBWSxZQUFZO0FBQ3RELGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrRUFBWTtBQUN0QztBQUNBOztBQUV1QztBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNEOztBQUV0RDtB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Q0FDTCxvRUFBSyxTQUFTLEVBQUMseUJBQXlCLEVBQUMsS0FBSyxFQUFFLFdBQVc7WUFDekQsdUVBQ0UsS0FBSyxFQUFFLFdBQVcsRUFDbEIsS0FBSyxFQUFDLGdDQUFnQyxFQUN0QyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFFL0IsMkRBQUMsb0RBQUssSUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxPQUFPLEdBQUcsQ0FDMUI7WUFFVCwyREFBQyw2REFBb0IsSUFDbkIsY0FBYyxFQUFFLGNBQWMsRUFDOUIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixHQUMzQyxDQUNFLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vSWNvbi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9jcmVhdGVMdWNpZGVJY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2RlZmF1bHRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2VhcnRoLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL3NoYXJlZC9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2dvb2dsZWVhcnRoY2xpY2svc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC41MjUuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHsgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0QXR0cmlidXRlcyBmcm9tICcuL2RlZmF1bHRBdHRyaWJ1dGVzLmpzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgaGFzQTExeVByb3AgfSBmcm9tICcuL3NoYXJlZC9zcmMvdXRpbHMuanMnO1xuXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZihcbiAgKHtcbiAgICBjb2xvciA9IFwiY3VycmVudENvbG9yXCIsXG4gICAgc2l6ZSA9IDI0LFxuICAgIHN0cm9rZVdpZHRoID0gMixcbiAgICBhYnNvbHV0ZVN0cm9rZVdpZHRoLFxuICAgIGNsYXNzTmFtZSA9IFwiXCIsXG4gICAgY2hpbGRyZW4sXG4gICAgaWNvbk5vZGUsXG4gICAgLi4ucmVzdFxuICB9LCByZWYpID0+IGNyZWF0ZUVsZW1lbnQoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICByZWYsXG4gICAgICAuLi5kZWZhdWx0QXR0cmlidXRlcyxcbiAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgIHN0cm9rZVdpZHRoOiBhYnNvbHV0ZVN0cm9rZVdpZHRoID8gTnVtYmVyKHN0cm9rZVdpZHRoKSAqIDI0IC8gTnVtYmVyKHNpemUpIDogc3Ryb2tlV2lkdGgsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcyhcImx1Y2lkZVwiLCBjbGFzc05hbWUpLFxuICAgICAgLi4uIWNoaWxkcmVuICYmICFoYXNBMTF5UHJvcChyZXN0KSAmJiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgIC4uLnJlc3RcbiAgICB9LFxuICAgIFtcbiAgICAgIC4uLmljb25Ob2RlLm1hcCgoW3RhZywgYXR0cnNdKSA9PiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cnMpKSxcbiAgICAgIC4uLkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dXG4gICAgXVxuICApXG4pO1xuXG5leHBvcnQgeyBJY29uIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUljb24uanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC41MjUuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IHsgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcywgdG9LZWJhYkNhc2UsIHRvUGFzY2FsQ2FzZSB9IGZyb20gJy4vc2hhcmVkL3NyYy91dGlscy5qcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24uanMnO1xuXG5jb25zdCBjcmVhdGVMdWNpZGVJY29uID0gKGljb25OYW1lLCBpY29uTm9kZSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBmb3J3YXJkUmVmKFxuICAgICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiBjcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgIHJlZixcbiAgICAgIGljb25Ob2RlLFxuICAgICAgY2xhc3NOYW1lOiBtZXJnZUNsYXNzZXMoXG4gICAgICAgIGBsdWNpZGUtJHt0b0tlYmFiQ2FzZSh0b1Bhc2NhbENhc2UoaWNvbk5hbWUpKX1gLFxuICAgICAgICBgbHVjaWRlLSR7aWNvbk5hbWV9YCxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KVxuICApO1xuICBDb21wb25lbnQuZGlzcGxheU5hbWUgPSB0b1Bhc2NhbENhc2UoaWNvbk5hbWUpO1xuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTHVjaWRlSWNvbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVMdWNpZGVJY29uLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTI1LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBkZWZhdWx0QXR0cmlidXRlcyA9IHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IDI0LFxuICBoZWlnaHQ6IDI0LFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICBzdHJva2VXaWR0aDogMixcbiAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0QXR0cmlidXRlcyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0QXR0cmlidXRlcy5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjUyNS4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTIxLjU0IDE1SDE3YTIgMiAwIDAgMC0yIDJ2NC41NFwiLCBrZXk6IFwiMWRqd28wXCIgfV0sXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIk03IDMuMzRWNWEzIDMgMCAwIDAgMyAzYTIgMiAwIDAgMSAyIDJjMCAxLjEuOSAyIDIgMmEyIDIgMCAwIDAgMi0yYzAtMS4xLjktMiAyLTJoMy4xN1wiLFxuICAgICAga2V5OiBcIjF0emtmYVwiXG4gICAgfVxuICBdLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTEgMjEuOTVWMThhMiAyIDAgMCAwLTItMmEyIDIgMCAwIDEtMi0ydi0xYTIgMiAwIDAgMC0yLTJIMi4wNVwiLCBrZXk6IFwiMTRwYjVqXCIgfV0sXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjEyXCIsIGN5OiBcIjEyXCIsIHI6IFwiMTBcIiwga2V5OiBcIjFtZ2xheVwiIH1dXG5dO1xuY29uc3QgRWFydGggPSBjcmVhdGVMdWNpZGVJY29uKFwiZWFydGhcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIEVhcnRoIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVhcnRoLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTI1LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmNvbnN0IHRvS2ViYWJDYXNlID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbmNvbnN0IHRvQ2FtZWxDYXNlID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoXG4gIC9eKFtBLVpdKXxbXFxzLV9dKyhcXHcpL2csXG4gIChtYXRjaCwgcDEsIHAyKSA9PiBwMiA/IHAyLnRvVXBwZXJDYXNlKCkgOiBwMS50b0xvd2VyQ2FzZSgpXG4pO1xuY29uc3QgdG9QYXNjYWxDYXNlID0gKHN0cmluZykgPT4ge1xuICBjb25zdCBjYW1lbENhc2UgPSB0b0NhbWVsQ2FzZShzdHJpbmcpO1xuICByZXR1cm4gY2FtZWxDYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxDYXNlLnNsaWNlKDEpO1xufTtcbmNvbnN0IG1lcmdlQ2xhc3NlcyA9ICguLi5jbGFzc2VzKSA9PiBjbGFzc2VzLmZpbHRlcigoY2xhc3NOYW1lLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgcmV0dXJuIEJvb2xlYW4oY2xhc3NOYW1lKSAmJiBjbGFzc05hbWUudHJpbSgpICE9PSBcIlwiICYmIGFycmF5LmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gaW5kZXg7XG59KS5qb2luKFwiIFwiKS50cmltKCk7XG5jb25zdCBoYXNBMTF5UHJvcCA9IChwcm9wcykgPT4ge1xuICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcbiAgICBpZiAocHJvcC5zdGFydHNXaXRoKFwiYXJpYS1cIikgfHwgcHJvcCA9PT0gXCJyb2xlXCIgfHwgcHJvcCA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IGhhc0ExMXlQcm9wLCBtZXJnZUNsYXNzZXMsIHRvQ2FtZWxDYXNlLCB0b0tlYmFiQ2FzZSwgdG9QYXNjYWxDYXNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IHsgRWFydGggfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LCBhbnk+IHtcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0dvb2dsZUVhcnRoQWN0aXZlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGVHb29nbGVFYXJ0aCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIGlzR29vZ2xlRWFydGhBY3RpdmU6ICFwcmV2U3RhdGUuaXNHb29nbGVFYXJ0aEFjdGl2ZVxyXG4gICAgfSksICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNHb29nbGVFYXJ0aEFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVHb29nbGVFYXJ0aCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZUdvb2dsZUVhcnRoKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFjdGl2YXRlR29vZ2xlRWFydGggPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5qaW11TWFwVmlldz8udmlldyAmJiAhdGhpcy5qaW11TWFwVmlldy52aWV3Ll9jbGlja0xpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuamltdU1hcFZpZXcudmlldy5fY2xpY2tMaXN0ZW5lciA9IHRoaXMuamltdU1hcFZpZXcudmlldy5vbignY2xpY2snLCB0aGlzLmhhbmRsZU1hcENsaWNrKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAndXJsKFwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjkuMy9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmdcIikgMTIgNDEsIGF1dG8nO1xyXG5cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBkZWFjdGl2YXRlR29vZ2xlRWFydGggPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5qaW11TWFwVmlldz8udmlldyAmJiB0aGlzLmppbXVNYXBWaWV3LnZpZXcuX2NsaWNrTGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5qaW11TWFwVmlldy52aWV3Ll9jbGlja0xpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLmppbXVNYXBWaWV3LnZpZXcuX2NsaWNrTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVNYXBDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBldmVudC5tYXBQb2ludDtcclxuICAgIGNvbnN0IGVhcnRoVXJsID0gYGh0dHBzOi8vZWFydGguZ29vZ2xlLmNvbS93ZWIvc2VhcmNoLyR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfS9AJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9LDEwMDAwYSwwZCwweSwwaCwwdCwwcmA7XHJcbiAgICB3aW5kb3cub3BlbihlYXJ0aFVybCwgJ19ibGFuaycpO1xyXG4gIH07XHJcblxyXG4gIG9uQWN0aXZlVmlld0NoYW5nZSA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHRoaXMuamltdU1hcFZpZXcgPSBqaW11TWFwVmlldztcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzR29vZ2xlRWFydGhBY3RpdmUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZUdvb2dsZUVhcnRoKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VNYXBXaWRnZXRJZCB9ID0gdGhpcy5wcm9wcy5jb25maWc7XHJcbiAgICBjb25zdCB7IGlzR29vZ2xlRWFydGhBY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3Qgd2lkZ2V0U3R5bGUgPSB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaXNHb29nbGVFYXJ0aEFjdGl2ZSA/ICcjMDA3QkZGJyA6ICcjQ0UyMDI5JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJvcmRlcjogJyMwMDAwMDAgMnB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWdvb2dsZWVhcnRoY2xpY2tcIiBzdHlsZT17d2lkZ2V0U3R5bGV9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cclxuICAgICAgICAgIHRpdGxlPVwiVG9nZ2xlIEdvb2dsZSBFYXJ0aCBjbGljayBtb2RlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlR29vZ2xlRWFydGh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEVhcnRoIHNpemU9ezMwfSBjb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dXNlTWFwV2lkZ2V0SWR9XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==