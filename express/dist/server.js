/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../clients/awsAxios.client.ts":
/*!****************************************!*\
  !*** ../../clients/awsAxios.client.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awsAxiosClient": () => (/* binding */ awsAxiosClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "../../env.ts");


const awsAxiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _env__WEBPACK_IMPORTED_MODULE_1__.API_GATEWAY
});


/***/ }),

/***/ "../../env.ts":
/*!********************!*\
  !*** ../../env.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODE_ENV": () => (/* binding */ NODE_ENV),
/* harmony export */   "POSTGRES_HOST": () => (/* binding */ POSTGRES_HOST),
/* harmony export */   "POSTGRES_USER": () => (/* binding */ POSTGRES_USER),
/* harmony export */   "POSTGRES_PORT": () => (/* binding */ POSTGRES_PORT),
/* harmony export */   "POSTGRES_PASSWORD": () => (/* binding */ POSTGRES_PASSWORD),
/* harmony export */   "POSTGRES_DB": () => (/* binding */ POSTGRES_DB),
/* harmony export */   "DATABASE_URL_DEVELOPMENT": () => (/* binding */ DATABASE_URL_DEVELOPMENT),
/* harmony export */   "DATABASE_URL_PRODUCTION": () => (/* binding */ DATABASE_URL_PRODUCTION),
/* harmony export */   "DATABASE_URL_TEST": () => (/* binding */ DATABASE_URL_TEST),
/* harmony export */   "WIDESCREEN_WALLPAPERS": () => (/* binding */ WIDESCREEN_WALLPAPERS),
/* harmony export */   "WALLPAPER_PLAY": () => (/* binding */ WALLPAPER_PLAY),
/* harmony export */   "WALLHAVEN": () => (/* binding */ WALLHAVEN),
/* harmony export */   "ALPHA_CODERS": () => (/* binding */ ALPHA_CODERS),
/* harmony export */   "EXPRESS": () => (/* binding */ EXPRESS),
/* harmony export */   "IMAGES_DIR": () => (/* binding */ IMAGES_DIR),
/* harmony export */   "MOVIES_DIR": () => (/* binding */ MOVIES_DIR),
/* harmony export */   "TV_DIR": () => (/* binding */ TV_DIR),
/* harmony export */   "MUSIC_DIR": () => (/* binding */ MUSIC_DIR),
/* harmony export */   "TMDB_API_KEY": () => (/* binding */ TMDB_API_KEY),
/* harmony export */   "HTTP_PORT": () => (/* binding */ HTTP_PORT),
/* harmony export */   "API_GATEWAY": () => (/* binding */ API_GATEWAY)
/* harmony export */ });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)({
    path: `./.env`
});
const NODE_ENV = "development";
const POSTGRES_HOST = process.env.POSTGRES_HOST;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PORT = process.env.POSTGRES_PORT;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;
const DATABASE_URL_DEVELOPMENT = process.env.DATABASE_URL_DEVELOPMENT;
const DATABASE_URL_PRODUCTION = process.env.DATABASE_URL_PRODUCTION;
const DATABASE_URL_TEST = process.env.DATABASE_URL_TEST;
const WIDESCREEN_WALLPAPERS = process.env.WIDESCREEN_WALLPAPERS;
const WALLPAPER_PLAY = process.env.WALLPAPER_PLAY;
const WALLHAVEN = process.env.WALLHAVEN;
const ALPHA_CODERS = process.env.ALPHA_CODERS;
const EXPRESS = process.env.EXPRESS;
const IMAGES_DIR = process.env.IMAGES_DIR;
const MOVIES_DIR = process.env.MOVIES_DIR;
const TV_DIR = process.env.TV_DIR;
const MUSIC_DIR = process.env.MUSIC_DIR;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const HTTP_PORT = process.env.HTTP_PORT;
const API_GATEWAY = process.env.API_GATEWAY;


/***/ }),

/***/ "../../graphql/resolvers/image.resolvers.ts":
/*!**************************************************!*\
  !*** ../../graphql/resolvers/image.resolvers.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageResolvers": () => (/* binding */ imageResolvers)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env */ "../../env.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
const imageResolvers = {
    getImages: _asyncToGenerator(function*(_, { page  }) {
        try {
            var ref;
            const images = yield fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir((ref = _env__WEBPACK_IMPORTED_MODULE_1__.IMAGES_DIR === null || _env__WEBPACK_IMPORTED_MODULE_1__.IMAGES_DIR === void 0 ? void 0 : _env__WEBPACK_IMPORTED_MODULE_1__.IMAGES_DIR.toString()) !== null && ref !== void 0 ? ref : ``);
            return images.slice(page * 20 - 20, page * 20);
        } catch (imageError) {
            console.error(imageError);
        }
    })
};


/***/ }),

/***/ "../../graphql/resolvers/movie.resolvers.ts":
/*!**************************************************!*\
  !*** ../../graphql/resolvers/movie.resolvers.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movieResolvers": () => (/* binding */ movieResolvers)
/* harmony export */ });
/* harmony import */ var _clients_awsAxios_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clients/awsAxios.client */ "../../clients/awsAxios.client.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
const movieResolvers = {
    getDynamoMovies: _asyncToGenerator(function*() {
        let dynamoMovies;
        try {
            const { data  } = yield (0,_clients_awsAxios_client__WEBPACK_IMPORTED_MODULE_0__.awsAxiosClient)({
                method: `GET`,
                url: `/movies`
            });
            dynamoMovies = data;
        } catch (movieError) {
            console.error(movieError);
            dynamoMovies = [];
        }
        return dynamoMovies;
    }),
    getPostgresMovies: _asyncToGenerator(function*(_, __, { db  }) {
        let movies;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.MOVIES).then((dbMovies)=>{
                movies = dbMovies;
            });
        } catch (knexError) {
            console.error(knexError);
            movies = [];
        }
        return movies;
    }),
    getPostgresMovie: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let movie;
        try {
            yield db.select().from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.MOVIES).where({
                id
            }).then((dbMovie)=>{
                var ref;
                movie = (ref = dbMovie === null || dbMovie === void 0 ? void 0 : dbMovie[0]) !== null && ref !== void 0 ? ref : {
                };
            });
        } catch (knexError) {
            console.error(knexError);
            movie = {
            };
        }
        console.log(movie);
        return movie;
    })
};


/***/ }),

/***/ "../../graphql/resolvers/resolvers.ts":
/*!********************************************!*\
  !*** ../../graphql/resolvers/resolvers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers)
/* harmony export */ });
/* harmony import */ var _image_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.resolvers */ "../../graphql/resolvers/image.resolvers.ts");
/* harmony import */ var _movie_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.resolvers */ "../../graphql/resolvers/movie.resolvers.ts");


function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
const resolvers = {
    Query: _objectSpread({
    }, _image_resolvers__WEBPACK_IMPORTED_MODULE_0__.imageResolvers, _movie_resolvers__WEBPACK_IMPORTED_MODULE_1__.movieResolvers)
};


/***/ }),

/***/ "../../graphql/typeDefs/typeDefs.ts":
/*!******************************************!*\
  !*** ../../graphql/typeDefs/typeDefs.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Image {
    name: String!
  }

  type DynamoMovie {
    title: String!
    tmdbId: String!
    id: String!
    mediaType: String!
  }
  type PostgresMovie {
    title: String!
    tmdbId: String!
    id: String!
    mediaType: String!
  }

  type Query {
    getImages(page: Int!): [Image]
    getDynamoMovies: [DynamoMovie]
    getPostgresMovies: [PostgresMovie]
    getPostgresMovie(id: String!): PostgresMovie!
  }
`;


/***/ }),

/***/ "../../knexfile.ts":
/*!*************************!*\
  !*** ../../knexfile.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "../../env.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const config = {
    client: `pg`,
    connection: {
        connectionString: _env__WEBPACK_IMPORTED_MODULE_0__.NODE_ENV === `production` ? _env__WEBPACK_IMPORTED_MODULE_0__.DATABASE_URL_PRODUCTION : _env__WEBPACK_IMPORTED_MODULE_0__.DATABASE_URL_DEVELOPMENT,
        user: _env__WEBPACK_IMPORTED_MODULE_0__.POSTGRES_USER,
        password: _env__WEBPACK_IMPORTED_MODULE_0__.POSTGRES_PASSWORD
    },
    migrations: {
        directory: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, `./postgres/migrations`),
        extension: `ts`
    },
    seeds: {
        directory: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, './postgres/seeds'),
        extension: `ts`
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "../../postgres/knex.ts":
/*!******************************!*\
  !*** ../../postgres/knex.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knex */ "knex");
/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../knexfile */ "../../knexfile.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knex__WEBPACK_IMPORTED_MODULE_0___default()(_knexfile__WEBPACK_IMPORTED_MODULE_1__.default));


/***/ }),

/***/ "../../types/tables.enum.ts":
/*!**********************************!*\
  !*** ../../types/tables.enum.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tables": () => (/* binding */ Tables)
/* harmony export */ });
var Tables;
(function(Tables1) {
    Tables1["MOVIES"] = 'movies';
})(Tables || (Tables = {
}));


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ../../express/server.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql_typeDefs_typeDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/typeDefs/typeDefs */ "../../graphql/typeDefs/typeDefs.ts");
/* harmony import */ var _graphql_resolvers_resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/resolvers/resolvers */ "../../graphql/resolvers/resolvers.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env */ "../../env.ts");
/* harmony import */ var _postgres_knex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../postgres/knex */ "../../postgres/knex.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
const corsOptions = {
    origin: `*`
};
function _startServer() {
    _startServer = _asyncToGenerator(function*() {
        const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
        const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.ApolloServer({
            typeDefs: _graphql_typeDefs_typeDefs__WEBPACK_IMPORTED_MODULE_4__.typeDefs,
            resolvers: _graphql_resolvers_resolvers__WEBPACK_IMPORTED_MODULE_5__.resolvers,
            context: ()=>({
                    db: _postgres_knex__WEBPACK_IMPORTED_MODULE_7__.default
                })
        });
        app.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()(`:method :url :status :res[content-length] - :response-time ms`));
        app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(corsOptions));
        yield server.start();
        server.applyMiddleware({
            app,
            path: `/api/graphql`
        });
        app.listen({
            port: _env__WEBPACK_IMPORTED_MODULE_6__.HTTP_PORT
        }, ()=>console.log(`App is listening on Port ${_env__WEBPACK_IMPORTED_MODULE_6__.HTTP_PORT}`)
        );
        app.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_8___default().resolve(__dirname, `../../html`)));
    });
    return _startServer.apply(this, arguments);
}
function startServer() {
    return _startServer.apply(this, arguments);
}
try {
    startServer();
} catch (serverError) {
    console.error(serverError);
}

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1RCxDQUFDO1dBakJjLFlBQVc7O1NBQVgsV0FBVztXQUFYLFlBQVc7O0lBbUJ0QixDQUFDO0lBQ0gsV0FBVztBQUNiLENBQUMsUUFBUSxXQUFXLEVBQUUsQ0FBQztJQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVc7QUFDM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi9jbGllbnRzL2F3c0F4aW9zLmNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZW52LnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9pbWFnZS5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL21vdmllLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3R5cGVEZWZzL3R5cGVEZWZzLnRzIiwid2VicGFjazovLy8uLi8uLi9rbmV4ZmlsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcG9zdGdyZXMva25leC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vdHlwZXMvdGFibGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uLy4uL2V4cHJlc3Mvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBUElfR0FURVdBWSB9IGZyb20gJy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBhd3NBeGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEFQSV9HQVRFV0FZLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5jb25maWcoeyBwYXRoOiBgLi8uZW52YCB9KTtcblxuZXhwb3J0IGNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbmV4cG9ydCBjb25zdCBQT1NUR1JFU19IT1NUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19VU0VSID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUjtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QT1JUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QQVNTV09SRCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JEO1xuZXhwb3J0IGNvbnN0IFBPU1RHUkVTX0RCID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREI7XG5cbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQ7XG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfUFJPRFVDVElPTjtcbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfVEVTVCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTF9URVNUO1xuXG5leHBvcnQgY29uc3QgV0lERVNDUkVFTl9XQUxMUEFQRVJTID0gcHJvY2Vzcy5lbnYuV0lERVNDUkVFTl9XQUxMUEFQRVJTO1xuZXhwb3J0IGNvbnN0IFdBTExQQVBFUl9QTEFZID0gcHJvY2Vzcy5lbnYuV0FMTFBBUEVSX1BMQVk7XG5leHBvcnQgY29uc3QgV0FMTEhBVkVOID0gcHJvY2Vzcy5lbnYuV0FMTEhBVkVOO1xuXG5leHBvcnQgY29uc3QgQUxQSEFfQ09ERVJTID0gcHJvY2Vzcy5lbnYuQUxQSEFfQ09ERVJTO1xuZXhwb3J0IGNvbnN0IEVYUFJFU1MgPSBwcm9jZXNzLmVudi5FWFBSRVNTO1xuXG5leHBvcnQgY29uc3QgSU1BR0VTX0RJUiA9IHByb2Nlc3MuZW52LklNQUdFU19ESVI7XG5leHBvcnQgY29uc3QgTU9WSUVTX0RJUiA9IHByb2Nlc3MuZW52Lk1PVklFU19ESVI7XG5leHBvcnQgY29uc3QgVFZfRElSID0gcHJvY2Vzcy5lbnYuVFZfRElSO1xuZXhwb3J0IGNvbnN0IE1VU0lDX0RJUiA9IHByb2Nlc3MuZW52Lk1VU0lDX0RJUjtcblxuZXhwb3J0IGNvbnN0IFRNREJfQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWTtcblxuZXhwb3J0IGNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LkhUVFBfUE9SVDtcblxuZXhwb3J0IGNvbnN0IEFQSV9HQVRFV0FZID0gcHJvY2Vzcy5lbnYuQVBJX0dBVEVXQVk7XG4iLCJpbXBvcnQgeyBwcm9taXNlcyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IElNQUdFU19ESVIgfSBmcm9tICcuLi8uLi9lbnYnO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VSZXNvbHZlcnMgPSB7XG4gIGdldEltYWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdlIH06IHsgcGFnZTogbnVtYmVyIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgcHJvbWlzZXMucmVhZGRpcihJTUFHRVNfRElSPy50b1N0cmluZygpID8/IGBgKTtcbiAgICAgIHJldHVybiBpbWFnZXMuc2xpY2UocGFnZSAqIDIwIC0gMjAsIHBhZ2UgKiAyMCk7XG4gICAgfSBjYXRjaCAoaW1hZ2VFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihpbWFnZUVycm9yKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgYXdzQXhpb3NDbGllbnQgfSBmcm9tICcuLi8uLi9jbGllbnRzL2F3c0F4aW9zLmNsaWVudCc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuaW1wb3J0IHsgUG9zdGdyZXNNb3ZpZSwgUXVlcnlHZXRQb3N0Z3Jlc01vdmllQXJncyB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZVJlc29sdmVycyA9IHtcbiAgZ2V0RHluYW1vTW92aWVzOiBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGR5bmFtb01vdmllcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhd3NBeGlvc0NsaWVudCh7XG4gICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgIHVybDogYC9tb3ZpZXNgLFxuICAgICAgfSk7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBkYXRhO1xuICAgIH0gY2F0Y2ggKG1vdmllRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobW92aWVFcnJvcik7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGR5bmFtb01vdmllcztcbiAgfSxcblxuICBnZXRQb3N0Z3Jlc01vdmllczogYXN5bmMgKF86IGFueSwgX186IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVzO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFUylcbiAgICAgICAgLnRoZW4oKGRiTW92aWVzKSA9PiB7XG4gICAgICAgICAgbW92aWVzID0gZGJNb3ZpZXM7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgbW92aWVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBtb3ZpZXM7XG4gIH0sXG5cbiAgZ2V0UG9zdGdyZXNNb3ZpZTogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBRdWVyeUdldFBvc3RncmVzTW92aWVBcmdzLCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBtb3ZpZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5mcm9tKFRhYmxlcy5NT1ZJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYk1vdmllKSA9PiB7XG4gICAgICAgICAgbW92aWUgPSBkYk1vdmllPy5bMF0gPz8ge307XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgbW92aWUgPSB7fTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobW92aWUpO1xuICAgIHJldHVybiBtb3ZpZTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBpbWFnZVJlc29sdmVycyB9IGZyb20gJy4vaW1hZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IG1vdmllUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZS5yZXNvbHZlcnMnO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIC4uLmltYWdlUmVzb2x2ZXJzLFxuICAgIC4uLm1vdmllUmVzb2x2ZXJzLFxuICB9LFxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgdHlwZSBJbWFnZSB7XG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBEeW5hbW9Nb3ZpZSB7XG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICB0bWRiSWQ6IFN0cmluZyFcbiAgICBpZDogU3RyaW5nIVxuICAgIG1lZGlhVHlwZTogU3RyaW5nIVxuICB9XG4gIHR5cGUgUG9zdGdyZXNNb3ZpZSB7XG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICB0bWRiSWQ6IFN0cmluZyFcbiAgICBpZDogU3RyaW5nIVxuICAgIG1lZGlhVHlwZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgZ2V0SW1hZ2VzKHBhZ2U6IEludCEpOiBbSW1hZ2VdXG4gICAgZ2V0RHluYW1vTW92aWVzOiBbRHluYW1vTW92aWVdXG4gICAgZ2V0UG9zdGdyZXNNb3ZpZXM6IFtQb3N0Z3Jlc01vdmllXVxuICAgIGdldFBvc3RncmVzTW92aWUoaWQ6IFN0cmluZyEpOiBQb3N0Z3Jlc01vdmllIVxuICB9XG5gO1xuIiwiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICdrbmV4JztcbmltcG9ydCB7IFBPU1RHUkVTX1VTRVIsIFBPU1RHUkVTX1BBU1NXT1JELCBEQVRBQkFTRV9VUkxfUFJPRFVDVElPTiwgREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5ULCBOT0RFX0VOViB9IGZyb20gJy4vZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgY2xpZW50OiBgcGdgLFxuICBjb25uZWN0aW9uOiB7XG4gICAgY29ubmVjdGlvblN0cmluZzogTk9ERV9FTlYgPT09IGBwcm9kdWN0aW9uYCA/IERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OIDogREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5ULFxuICAgIHVzZXI6IFBPU1RHUkVTX1VTRVIsXG4gICAgcGFzc3dvcmQ6IFBPU1RHUkVTX1BBU1NXT1JELFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgZGlyZWN0b3J5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9wb3N0Z3Jlcy9taWdyYXRpb25zYCksXG4gICAgZXh0ZW5zaW9uOiBgdHNgLFxuICB9LFxuICBzZWVkczoge1xuICAgIGRpcmVjdG9yeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcG9zdGdyZXMvc2VlZHMnKSxcbiAgICBleHRlbnNpb246IGB0c2AsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCBrbmV4ZmlsZSBmcm9tICcuLi9rbmV4ZmlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IEtuZXgoa25leGZpbGUpO1xuIiwiZXhwb3J0IGVudW0gVGFibGVzIHtcbiAgTU9WSUVTID0gJ21vdmllcycsXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbmV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi4vZ3JhcGhxbC90eXBlRGVmcy90eXBlRGVmcyc7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuLi9ncmFwaHFsL3Jlc29sdmVycy9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgSFRUUF9QT1JUIH0gZnJvbSAnLi4vZW52JztcbmltcG9ydCBLbmV4IGZyb20gJy4uL3Bvc3RncmVzL2tuZXgnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGNvcnNPcHRpb25zID0ge1xuICBvcmlnaW46IGAqYCxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHR5cGVEZWZzLFxuICAgIHJlc29sdmVycyxcbiAgICBjb250ZXh0OiAoKSA9PiAoe1xuICAgICAgZGI6IEtuZXgsXG4gICAgfSksXG4gIH0pO1xuXG4gIGFwcC51c2UobW9yZ2FuKGA6bWV0aG9kIDp1cmwgOnN0YXR1cyA6cmVzW2NvbnRlbnQtbGVuZ3RoXSAtIDpyZXNwb25zZS10aW1lIG1zYCkpO1xuICBhcHAudXNlKGNvcnMoY29yc09wdGlvbnMpKTtcblxuICBhd2FpdCBzZXJ2ZXIuc3RhcnQoKTtcbiAgc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCwgcGF0aDogYC9hcGkvZ3JhcGhxbGAgfSk7XG4gIGFwcC5saXN0ZW4oeyBwb3J0OiBIVFRQX1BPUlQgfSwgKCkgPT4gY29uc29sZS5sb2coYEFwcCBpcyBsaXN0ZW5pbmcgb24gUG9ydCAke0hUVFBfUE9SVH1gKSk7XG4gIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4uLy4uL2h0bWxgKSkpO1xufVxuXG50cnkge1xuICBzdGFydFNlcnZlcigpO1xufSBjYXRjaCAoc2VydmVyRXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihzZXJ2ZXJFcnJvcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=