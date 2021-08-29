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

/***/ "../../graphql/resolvers/collections.resolvers.ts":
/*!********************************************************!*\
  !*** ../../graphql/resolvers/collections.resolvers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectionResolvers": () => (/* binding */ collectionResolvers)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");




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
const collectionResolvers = {
    getCollections: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let collections;
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.validatePagination)({
            offset,
            amount
        });
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbCollections] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.COLLECTIONS
            });
            collections = dbCollections;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.repaginate)({
                paginationInput,
                total
            });
        } catch (knexError) {
            console.error(knexError);
            collections = [];
        }
        return {
            collections,
            pagination
        };
    }),
    getCollection: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let collection;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.COLLECTIONS).where({
                id
            }).then((dbCollection)=>{
                collection = dbCollection[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return collection;
    })
};


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
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");





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
    getPostgresMovies: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let postgresMovies;
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.validatePagination)({
            offset,
            amount
        });
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbMovies] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_4__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.MOVIES
            });
            postgresMovies = dbMovies;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.repaginate)({
                paginationInput,
                total
            });
        } catch (knexError) {
            console.error(knexError);
            postgresMovies = [];
        }
        return {
            postgresMovies,
            pagination
        };
    }),
    getPostgresMovie: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let movie;
        try {
            yield db.select().from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.MOVIES).where({
                id
            }).then((dbMovie)=>{
                movie = dbMovie[0];
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

/***/ "../../graphql/resolvers/movieTrailers.resolvers.ts":
/*!**********************************************************!*\
  !*** ../../graphql/resolvers/movieTrailers.resolvers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movieTrailerResolvers": () => (/* binding */ movieTrailerResolvers)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");




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
const movieTrailerResolvers = {
    getMovieTrailers: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let movieTrailers;
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.validatePagination)({
            offset,
            amount
        });
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbMovieTrailers] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.MOVIE_TRAILERS
            });
            movieTrailers = dbMovieTrailers;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.repaginate)({
                paginationInput,
                total
            });
        } catch (knexError) {
            console.error(knexError);
            movieTrailers = [];
        }
        return {
            movieTrailers,
            pagination
        };
    }),
    getMovieTrailer: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let movieTrailer;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.MOVIE_TRAILERS).where({
                id
            }).then((dbMovieTrailer)=>{
                movieTrailer = dbMovieTrailer[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return movieTrailer;
    })
};


/***/ }),

/***/ "../../graphql/resolvers/productionCompanies.resolvers.ts":
/*!****************************************************************!*\
  !*** ../../graphql/resolvers/productionCompanies.resolvers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productionCompanyResolvers": () => (/* binding */ productionCompanyResolvers)
/* harmony export */ });
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");

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
const productionCompanyResolvers = {
    getProductionCompanies: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let productionCompanies;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.PRODUCTION_COMPANIES).then((dbProductionCompanies)=>{
                productionCompanies = dbProductionCompanies;
            });
        } catch (knexError) {
            console.error(knexError);
            productionCompanies = [];
        }
        return productionCompanies;
    }),
    getProductionCompany: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let company;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.PRODUCTION_COMPANIES).where({
                id
            }).then((dbCompany)=>{
                company = dbCompany[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return company;
    })
};


/***/ }),

/***/ "../../graphql/resolvers/productionCountries.resolvers.ts":
/*!****************************************************************!*\
  !*** ../../graphql/resolvers/productionCountries.resolvers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productionCountryResolvers": () => (/* binding */ productionCountryResolvers)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");




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
const productionCountryResolvers = {
    getProductionCountries: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let productionCountries;
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.validatePagination)({
            offset,
            amount
        });
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbProductionCountries] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.PRODUCTION_COUNTRIES
            });
            productionCountries = dbProductionCountries;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.repaginate)({
                paginationInput,
                total
            });
        } catch (knexError) {
            console.error(knexError);
            productionCountries = [];
        }
        return {
            productionCountries,
            pagination
        };
    }),
    getProductionCountry: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let country;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.PRODUCTION_COUNTRIES).where({
                id
            }).then((dbCountry)=>{
                country = dbCountry[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return country;
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
/* harmony import */ var _collections_resolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections.resolvers */ "../../graphql/resolvers/collections.resolvers.ts");
/* harmony import */ var _image_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.resolvers */ "../../graphql/resolvers/image.resolvers.ts");
/* harmony import */ var _movie_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.resolvers */ "../../graphql/resolvers/movie.resolvers.ts");
/* harmony import */ var _movieTrailers_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movieTrailers.resolvers */ "../../graphql/resolvers/movieTrailers.resolvers.ts");
/* harmony import */ var _productionCompanies_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productionCompanies.resolvers */ "../../graphql/resolvers/productionCompanies.resolvers.ts");
/* harmony import */ var _productionCountries_resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productionCountries.resolvers */ "../../graphql/resolvers/productionCountries.resolvers.ts");
/* harmony import */ var _spokenLanguageResolvers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spokenLanguageResolvers */ "../../graphql/resolvers/spokenLanguageResolvers.ts");







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
    }, _collections_resolvers__WEBPACK_IMPORTED_MODULE_0__.collectionResolvers, _image_resolvers__WEBPACK_IMPORTED_MODULE_1__.imageResolvers, _movie_resolvers__WEBPACK_IMPORTED_MODULE_2__.movieResolvers, _movieTrailers_resolvers__WEBPACK_IMPORTED_MODULE_3__.movieTrailerResolvers, _productionCompanies_resolvers__WEBPACK_IMPORTED_MODULE_4__.productionCompanyResolvers, _productionCountries_resolvers__WEBPACK_IMPORTED_MODULE_5__.productionCountryResolvers, _spokenLanguageResolvers__WEBPACK_IMPORTED_MODULE_6__.spokenLangaugeResolvers)
};


/***/ }),

/***/ "../../graphql/resolvers/spokenLanguageResolvers.ts":
/*!**********************************************************!*\
  !*** ../../graphql/resolvers/spokenLanguageResolvers.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spokenLangaugeResolvers": () => (/* binding */ spokenLangaugeResolvers)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");




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
const spokenLangaugeResolvers = {
    getSpokenLanguages: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let spokenLanguages;
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.validatePagination)({
            offset,
            amount
        });
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbMovieTrailers] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.MOVIE_TRAILERS
            });
            spokenLanguages = dbMovieTrailers;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.repaginate)({
                paginationInput,
                total
            });
        } catch (knexError) {
            console.error(knexError);
            spokenLanguages = [];
        }
        return {
            spokenLanguages,
            pagination
        };
    }),
    getSpokenLanguage: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let language;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_3__.Tables.SPOKEN_LANGUAGES).where({
                id
            }).then((dbLanguage)=>{
                language = dbLanguage[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return language;
    })
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
  type Pagination {
    total: Int!
  }

  input PaginationInput {
    offset: Int
    amount: Int
  }

  type Collection {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    name: String!
    tmdbId: String!
    overview: String!
    posterPath: String
    backdropPath: String
    parts: [String]!
  }

  type GetCollectionsResponse {
    collections: [Collection]
    pagination: Pagination
  }

  type DynamoMovie {
    title: String!
    tmdbId: String!
    id: String!
    mediaType: String!
  }

  type Image {
    name: String!
  }

  type Genre {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    tmdbId: String!
    name: String!
  }

  type GetGenresResponse {
    genres: [Genre]
    pagination: Pagination
  }

  type GetGenresResponse {
    genres: [Genre]
    pagination: Pagination
  }

  type MovieTrailer {
    id: String!
    createdAt: String!
    updatedAt: String!
    iso_639_1: Timestamp
    iso_3166_1: Timestamp
    name: String
    key: String
    site: String
    size: Int
    type: String
    official: Boolean
    publishedAt: Timestamp
    tmdbId: String!
  }

  type GetMovieTrailersReponse {
    movieTrailers: [MovieTrailer]
    pagination: Pagination
  }

  type PostgresMovie {
    adult: Boolean!
    backdropPath: String
    collection: String
    budget: BigInt!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    fileName: String!
    genres: [String]
    homepage: String
    id: String!
    tmdbId: String!
    imdbId: String
    originalLanguage: String!
    originalTitle: String!
    overview: String
    popularity: Float
    posterPath: String
    productionCompanies: [String]
    productionCountries: [String]
    releaseDate: String!
    revenue: BigInt!
    runtime: Int
    spokenLanguages: [String]
    status: String!
    tagline: String
    title: String!
    trailers: [String]
    video: Boolean!
    voteAverage: Float!
    voteCount: Int!
  }

  type GetPostgresMoviesResponse {
    postgresMovies: [PostgresMovie]
    pagination: Pagination
  }

  type ProductionCompany {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    name: String!
    tmdbId: String!
    logoPath: String
    originCountry: String!
  }

  type GetProductionCompaniesResponse {
    productionCompanies: [ProductionCompany]
    pagination: Pagination
  }

  type ProductionCountry {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    iso_3166_1: String!
    name: String!
  }

  type GetProductionCountriesResponse {
    productionCountries: [ProductionCountry]
    pagination: Pagination
  }

  type SpokenLanguage {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    iso_639_1: String!
    name: String
    englishName: String
  }

  type GetSpokenLanguageResponse {
    spokenLanguages: [SpokenLanguage]
    pagination: Pagination
  }

  type Query {
    getCollection(id: String!): Collection
    getCollections(paginationInput: PaginationInput): GetCollectionsResponse

    getImages(page: Int!): [Image]

    getDynamoMovies: [DynamoMovie]

    getGenre(id: String!): Genre
    getGenres(paginationInput: PaginationInput): GetGenresResponse

    getMovieTrailer(id: String!): MovieTrailer
    getMovieTrailers(paginationInput: PaginationInput): GetMovieTrailersReponse

    getPostgresMovie(id: String!): PostgresMovie
    getPostgresMovies(paginationInput: PaginationInput): GetPostgresMoviesResponse

    getProductionCompany(id: String!): ProductionCompany
    getProductionCompanies(paginationInput: PaginationInput): GetProductionCompaniesResponse

    getProductionCountry(id: String!): ProductionCountry
    getProductionCountries(paginationInput: PaginationInput): GetProductionCountriesResponse

    getSpokenLanguage(id: String!): SpokenLanguage
    getSpokenLanguages(paginationInput: PaginationInput): GetSpokenLanguageResponse
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

/***/ "../../lib/paginatedDbGET.lib.ts":
/*!***************************************!*\
  !*** ../../lib/paginatedDbGET.lib.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginatedDbGET": () => (/* binding */ paginatedDbGET)
/* harmony export */ });
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
const paginatedDbGET = _asyncToGenerator(function*({ db , offset , amount , table  }) {
    let get;
    if (!Number.isNaN(offset) && !Number.isNaN(amount)) {
        get = yield Promise.all([
            db.count(`* as count`).from(table).first(),
            db.select(`*`).from(table).offset(offset !== null && offset !== void 0 ? offset : NaN).limit(amount), 
        ]);
    } else {
        get = yield Promise.all([
            db.count(`* as count`).from(table).first(),
            db.select(`*`).from(table)
        ]);
    }
    return get;
});


/***/ }),

/***/ "../../lib/serverPagination.lib.ts":
/*!*****************************************!*\
  !*** ../../lib/serverPagination.lib.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validatePagination": () => (/* binding */ validatePagination),
/* harmony export */   "repaginate": () => (/* binding */ repaginate)
/* harmony export */ });
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
const validatePagination = ({ offset , amount  })=>{
    let valid = true;
    let errors = 0;
    let messages = [];
    if (Number.isNaN(offset) && !Number.isNaN(amount) || Number.isNaN(amount) && !Number.isNaN(offset)) {
        valid = false;
        messages.push(`Either both amount and offset need to be provided or neither, ${offset} was provided for offset and ${amount} was provided for amount.`);
        errors += 1;
    }
    if (!!offset && offset < 0 || !!amount && amount < 0) {
        valid = false;
        messages.push(`Neither offset nor amount can be a negative integer, ${offset} was provided for offset and ${amount} was provided for amount.`);
        errors += 1;
    }
    return {
        valid,
        errors,
        messages
    };
};
var ref;
const repaginate = ({ paginationInput , total  })=>{
    return _objectSpread({
    }, paginationInput, {
        total: Number((ref = total === null || total === void 0 ? void 0 : total.count) !== null && ref !== void 0 ? ref : NaN)
    });
};


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
    Tables1["SPOKEN_LANGUAGES"] = 'spoken_languages';
    Tables1["GENRES"] = 'genres';
    Tables1["PRODUCTION_COUNTRIES"] = 'production_countries';
    Tables1["PRODUCTION_COMPANIES"] = 'production_companies';
    Tables1["COLLECTIONS"] = 'collections';
    Tables1["MOVIE_TRAILERS"] = 'movie_trailers';
})(Tables || (Tables = {
}));


/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/schema");

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

/***/ "graphql-scalars":
/*!**********************************!*\
  !*** external "graphql-scalars" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-scalars");

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
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_10__);











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
const corsOptions = {
    origin: `*`
};
function _startServer() {
    _startServer = _asyncToGenerator(function*() {
        const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
        const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.ApolloServer({
            schema: (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_10__.makeExecutableSchema)({
                typeDefs: [
                    ...graphql_scalars__WEBPACK_IMPORTED_MODULE_9__.typeDefs,
                    _graphql_typeDefs_typeDefs__WEBPACK_IMPORTED_MODULE_4__.typeDefs
                ],
                resolvers: _objectSpread({
                }, graphql_scalars__WEBPACK_IMPORTED_MODULE_9__.resolvers, _graphql_resolvers_resolvers__WEBPACK_IMPORTED_MODULE_5__.resolvers)
            }),
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
        app.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_8___default().resolve(__dirname, `../../html`), {
            extensions: [
                `html`
            ]
        }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFFBQVEsV0FBVyxFQUFFLENBQUM7SUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXO0FBQzNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50cy9hd3NBeGlvcy5jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Vudi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvY29sbGVjdGlvbnMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9pbWFnZS5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL21vdmllLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvbW92aWVUcmFpbGVycy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Byb2R1Y3Rpb25Db21wYW5pZXMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9wcm9kdWN0aW9uQ291bnRyaWVzLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9zcG9rZW5MYW5ndWFnZVJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC90eXBlRGVmcy90eXBlRGVmcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4va25leGZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcG9zdGdyZXMva25leC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vdHlwZXMvdGFibGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC1zY2FsYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uLy4uL2V4cHJlc3Mvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBUElfR0FURVdBWSB9IGZyb20gJy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBhd3NBeGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEFQSV9HQVRFV0FZLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5jb25maWcoeyBwYXRoOiBgLi8uZW52YCB9KTtcblxuZXhwb3J0IGNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbmV4cG9ydCBjb25zdCBQT1NUR1JFU19IT1NUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19VU0VSID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUjtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QT1JUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QQVNTV09SRCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JEO1xuZXhwb3J0IGNvbnN0IFBPU1RHUkVTX0RCID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREI7XG5cbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQ7XG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfUFJPRFVDVElPTjtcbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfVEVTVCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTF9URVNUO1xuXG5leHBvcnQgY29uc3QgV0lERVNDUkVFTl9XQUxMUEFQRVJTID0gcHJvY2Vzcy5lbnYuV0lERVNDUkVFTl9XQUxMUEFQRVJTO1xuZXhwb3J0IGNvbnN0IFdBTExQQVBFUl9QTEFZID0gcHJvY2Vzcy5lbnYuV0FMTFBBUEVSX1BMQVk7XG5leHBvcnQgY29uc3QgV0FMTEhBVkVOID0gcHJvY2Vzcy5lbnYuV0FMTEhBVkVOO1xuXG5leHBvcnQgY29uc3QgQUxQSEFfQ09ERVJTID0gcHJvY2Vzcy5lbnYuQUxQSEFfQ09ERVJTO1xuZXhwb3J0IGNvbnN0IEVYUFJFU1MgPSBwcm9jZXNzLmVudi5FWFBSRVNTO1xuXG5leHBvcnQgY29uc3QgSU1BR0VTX0RJUiA9IHByb2Nlc3MuZW52LklNQUdFU19ESVI7XG5leHBvcnQgY29uc3QgTU9WSUVTX0RJUiA9IHByb2Nlc3MuZW52Lk1PVklFU19ESVI7XG5leHBvcnQgY29uc3QgVFZfRElSID0gcHJvY2Vzcy5lbnYuVFZfRElSO1xuZXhwb3J0IGNvbnN0IE1VU0lDX0RJUiA9IHByb2Nlc3MuZW52Lk1VU0lDX0RJUjtcblxuZXhwb3J0IGNvbnN0IFRNREJfQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWTtcblxuZXhwb3J0IGNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LkhUVFBfUE9SVDtcblxuZXhwb3J0IGNvbnN0IEFQSV9HQVRFV0FZID0gcHJvY2Vzcy5lbnYuQVBJX0dBVEVXQVk7XG4iLCJpbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlLCBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25SZXNvbHZlcnMgPSB7XG4gIGdldENvbGxlY3Rpb25zOiBhc3luYyAoXzogYW55LCB7IHBhZ2luYXRpb25JbnB1dCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KTogUHJvbWlzZTxHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlPiA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb25zITogQ29sbGVjdGlvbltdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYkNvbGxlY3Rpb25zXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPENvbGxlY3Rpb24+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLkNPTExFQ1RJT05TLFxuICAgICAgfSk7XG4gICAgICBjb2xsZWN0aW9ucyA9IGRiQ29sbGVjdGlvbnM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHBhZ2luYXRpb25JbnB1dCwgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbGxlY3Rpb25zLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0Q29sbGVjdGlvbjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb247XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5DT0xMRUNUSU9OUylcbiAgICAgICAgLndoZXJlKHsgaWQgfSlcbiAgICAgICAgLnRoZW4oKGRiQ29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbGxlY3Rpb24gPSBkYkNvbGxlY3Rpb25bMF07XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9LFxufTtcbiIsImltcG9ydCB7IHByb21pc2VzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgSU1BR0VTX0RJUiB9IGZyb20gJy4uLy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVJlc29sdmVycyA9IHtcbiAgZ2V0SW1hZ2VzOiBhc3luYyAoXzogYW55LCB7IHBhZ2UgfTogeyBwYWdlOiBudW1iZXIgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBwcm9taXNlcy5yZWFkZGlyKElNQUdFU19ESVI/LnRvU3RyaW5nKCkgPz8gYGApO1xuICAgICAgcmV0dXJuIGltYWdlcy5zbGljZShwYWdlICogMjAgLSAyMCwgcGFnZSAqIDIwKTtcbiAgICB9IGNhdGNoIChpbWFnZUVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGltYWdlRXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBhd3NBeGlvc0NsaWVudCB9IGZyb20gJy4uLy4uL2NsaWVudHMvYXdzQXhpb3MuY2xpZW50JztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQb3N0Z3Jlc01vdmllLCBRdWVyeUdldFBvc3RncmVzTW92aWVBcmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuXG5leHBvcnQgY29uc3QgbW92aWVSZXNvbHZlcnMgPSB7XG4gIGdldER5bmFtb01vdmllczogYXN5bmMgKCkgPT4ge1xuICAgIGxldCBkeW5hbW9Nb3ZpZXM7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXdzQXhpb3NDbGllbnQoe1xuICAgICAgICBtZXRob2Q6IGBHRVRgLFxuICAgICAgICB1cmw6IGAvbW92aWVzYCxcbiAgICAgIH0pO1xuICAgICAgZHluYW1vTW92aWVzID0gZGF0YTtcbiAgICB9IGNhdGNoIChtb3ZpZUVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1vdmllRXJyb3IpO1xuICAgICAgZHluYW1vTW92aWVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBkeW5hbW9Nb3ZpZXM7XG4gIH0sXG5cbiAgZ2V0UG9zdGdyZXNNb3ZpZXM6IGFzeW5jIChfOiBhbnksIHsgcGFnaW5hdGlvbklucHV0IH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcG9zdGdyZXNNb3ZpZXMhOiBQb3N0Z3Jlc01vdmllW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPFBvc3RncmVzTW92aWU+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLk1PVklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwb3N0Z3Jlc01vdmllcyA9IGRiTW92aWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyBwYWdpbmF0aW9uSW5wdXQsIHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcG9zdGdyZXNNb3ZpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0Z3Jlc01vdmllcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldFBvc3RncmVzTW92aWU6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogUXVlcnlHZXRQb3N0Z3Jlc01vdmllQXJncywgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoKVxuICAgICAgICAuZnJvbShUYWJsZXMuTU9WSUVTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJNb3ZpZSkgPT4ge1xuICAgICAgICAgIG1vdmllID0gZGJNb3ZpZVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZSA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XG4gICAgcmV0dXJuIG1vdmllO1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcmVwYWdpbmF0ZSwgdmFsaWRhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclBhZ2luYXRpb24ubGliJztcbmltcG9ydCB7IE1vdmllVHJhaWxlciwgUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZVRyYWlsZXJSZXNvbHZlcnMgPSB7XG4gIGdldE1vdmllVHJhaWxlcnM6IGFzeW5jIChfOiBhbnksIHsgcGFnaW5hdGlvbklucHV0IH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVUcmFpbGVyczogTW92aWVUcmFpbGVyW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVUcmFpbGVyc10gPSBhd2FpdCBwYWdpbmF0ZWREYkdFVDxNb3ZpZVRyYWlsZXI+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLk1PVklFX1RSQUlMRVJTLFxuICAgICAgfSk7XG5cbiAgICAgIG1vdmllVHJhaWxlcnMgPSBkYk1vdmllVHJhaWxlcnM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHBhZ2luYXRpb25JbnB1dCwgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldE1vdmllVHJhaWxlcjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IG1vdmllVHJhaWxlcjtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFX1RSQUlMRVJTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJNb3ZpZVRyYWlsZXIpID0+IHtcbiAgICAgICAgICBtb3ZpZVRyYWlsZXIgPSBkYk1vdmllVHJhaWxlclswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllVHJhaWxlcjtcbiAgfSxcbn07XG4iLCJpbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdGlvbkNvbXBhbnlSZXNvbHZlcnMgPSB7XG4gIGdldFByb2R1Y3Rpb25Db21wYW5pZXM6IGFzeW5jIChcbiAgICBfOiBhbnksXG4gICAgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LFxuICAgIHsgZGIgfTogeyBkYjogS25leCB9XG4gICk6IFByb21pc2U8R2V0R2VucmVzUmVzcG9uc2U+ID0+IHtcbiAgICBsZXQgcHJvZHVjdGlvbkNvbXBhbmllcztcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTKVxuICAgICAgICAudGhlbigoZGJQcm9kdWN0aW9uQ29tcGFuaWVzKSA9PiB7XG4gICAgICAgICAgcHJvZHVjdGlvbkNvbXBhbmllcyA9IGRiUHJvZHVjdGlvbkNvbXBhbmllcztcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25Db21wYW5pZXM7XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvbXBhbnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb21wYW55O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT01QQU5JRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbXBhbnkpID0+IHtcbiAgICAgICAgICBjb21wYW55ID0gZGJDb21wYW55WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFueTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQcm9kdWN0aW9uQ291bnRyeSB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyA9IHtcbiAgZ2V0UHJvZHVjdGlvbkNvdW50cmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBwcm9kdWN0aW9uQ291bnRyaWVzOiBQcm9kdWN0aW9uQ291bnRyeVtdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQ7XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQ7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJQcm9kdWN0aW9uQ291bnRyaWVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPFByb2R1Y3Rpb25Db3VudHJ5Pih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5QUk9EVUNUSU9OX0NPVU5UUklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyBwYWdpbmF0aW9uSW5wdXQsIHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcHJvZHVjdGlvbkNvdW50cmllcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHByb2R1Y3Rpb25Db3VudHJpZXMsIHBhZ2luYXRpb24gfTtcbiAgfSxcblxuICBnZXRQcm9kdWN0aW9uQ291bnRyeTogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvdW50cnk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5QUk9EVUNUSU9OX0NPVU5UUklFUylcbiAgICAgICAgLndoZXJlKHsgaWQgfSlcbiAgICAgICAgLnRoZW4oKGRiQ291bnRyeSkgPT4ge1xuICAgICAgICAgIGNvdW50cnkgPSBkYkNvdW50cnlbMF07XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudHJ5O1xuICB9LFxufTtcbiIsImltcG9ydCB7IGNvbGxlY3Rpb25SZXNvbHZlcnMgfSBmcm9tICcuL2NvbGxlY3Rpb25zLnJlc29sdmVycyc7XG5pbXBvcnQgeyBpbWFnZVJlc29sdmVycyB9IGZyb20gJy4vaW1hZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IG1vdmllUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgbW92aWVUcmFpbGVyUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZVRyYWlsZXJzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBwcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyB9IGZyb20gJy4vcHJvZHVjdGlvbkNvbXBhbmllcy5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgcHJvZHVjdGlvbkNvdW50cnlSZXNvbHZlcnMgfSBmcm9tICcuL3Byb2R1Y3Rpb25Db3VudHJpZXMucmVzb2x2ZXJzJztcbmltcG9ydCB7IHNwb2tlbkxhbmdhdWdlUmVzb2x2ZXJzIH0gZnJvbSAnLi9zcG9rZW5MYW5ndWFnZVJlc29sdmVycyc7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgLi4uY29sbGVjdGlvblJlc29sdmVycyxcbiAgICAuLi5pbWFnZVJlc29sdmVycyxcbiAgICAuLi5tb3ZpZVJlc29sdmVycyxcbiAgICAuLi5tb3ZpZVRyYWlsZXJSZXNvbHZlcnMsXG4gICAgLi4ucHJvZHVjdGlvbkNvbXBhbnlSZXNvbHZlcnMsXG4gICAgLi4ucHJvZHVjdGlvbkNvdW50cnlSZXNvbHZlcnMsXG4gICAgLi4uc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXNlcklucHV0RXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0ICogYXMgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IHBhZ2luYXRlZERiR0VUIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYic7XG5pbXBvcnQgeyByZXBhZ2luYXRlLCB2YWxpZGF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9saWIvc2VydmVyUGFnaW5hdGlvbi5saWInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgU3Bva2VuTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3Qgc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMgPSB7XG4gIGdldFNwb2tlbkxhbmd1YWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBzcG9rZW5MYW5ndWFnZXM6IFNwb2tlbkxhbmd1YWdlW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVUcmFpbGVyc10gPSBhd2FpdCBwYWdpbmF0ZWREYkdFVDxTcG9rZW5MYW5ndWFnZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgc3Bva2VuTGFuZ3VhZ2VzID0gZGJNb3ZpZVRyYWlsZXJzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyBwYWdpbmF0aW9uSW5wdXQsIHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgc3Bva2VuTGFuZ3VhZ2VzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3Bva2VuTGFuZ3VhZ2VzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0U3Bva2VuTGFuZ3VhZ2U6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBsYW5ndWFnZTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLlNQT0tFTl9MQU5HVUFHRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkxhbmd1YWdlKSA9PiB7XG4gICAgICAgICAgbGFuZ3VhZ2UgPSBkYkxhbmd1YWdlWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICB0eXBlIFBhZ2luYXRpb24ge1xuICAgIHRvdGFsOiBJbnQhXG4gIH1cblxuICBpbnB1dCBQYWdpbmF0aW9uSW5wdXQge1xuICAgIG9mZnNldDogSW50XG4gICAgYW1vdW50OiBJbnRcbiAgfVxuXG4gIHR5cGUgQ29sbGVjdGlvbiB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgb3ZlcnZpZXc6IFN0cmluZyFcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIHBhcnRzOiBbU3RyaW5nXSFcbiAgfVxuXG4gIHR5cGUgR2V0Q29sbGVjdGlvbnNSZXNwb25zZSB7XG4gICAgY29sbGVjdGlvbnM6IFtDb2xsZWN0aW9uXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgRHluYW1vTW92aWUge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgaWQ6IFN0cmluZyFcbiAgICBtZWRpYVR5cGU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgSW1hZ2Uge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2VucmUge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBHZXRHZW5yZXNSZXNwb25zZSB7XG4gICAgZ2VucmVzOiBbR2VucmVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBHZXRHZW5yZXNSZXNwb25zZSB7XG4gICAgZ2VucmVzOiBbR2VucmVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBNb3ZpZVRyYWlsZXIge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBTdHJpbmchXG4gICAgdXBkYXRlZEF0OiBTdHJpbmchXG4gICAgaXNvXzYzOV8xOiBUaW1lc3RhbXBcbiAgICBpc29fMzE2Nl8xOiBUaW1lc3RhbXBcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBrZXk6IFN0cmluZ1xuICAgIHNpdGU6IFN0cmluZ1xuICAgIHNpemU6IEludFxuICAgIHR5cGU6IFN0cmluZ1xuICAgIG9mZmljaWFsOiBCb29sZWFuXG4gICAgcHVibGlzaGVkQXQ6IFRpbWVzdGFtcFxuICAgIHRtZGJJZDogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBHZXRNb3ZpZVRyYWlsZXJzUmVwb25zZSB7XG4gICAgbW92aWVUcmFpbGVyczogW01vdmllVHJhaWxlcl1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFBvc3RncmVzTW92aWUge1xuICAgIGFkdWx0OiBCb29sZWFuIVxuICAgIGJhY2tkcm9wUGF0aDogU3RyaW5nXG4gICAgY29sbGVjdGlvbjogU3RyaW5nXG4gICAgYnVkZ2V0OiBCaWdJbnQhXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgZmlsZU5hbWU6IFN0cmluZyFcbiAgICBnZW5yZXM6IFtTdHJpbmddXG4gICAgaG9tZXBhZ2U6IFN0cmluZ1xuICAgIGlkOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgaW1kYklkOiBTdHJpbmdcbiAgICBvcmlnaW5hbExhbmd1YWdlOiBTdHJpbmchXG4gICAgb3JpZ2luYWxUaXRsZTogU3RyaW5nIVxuICAgIG92ZXJ2aWV3OiBTdHJpbmdcbiAgICBwb3B1bGFyaXR5OiBGbG9hdFxuICAgIHBvc3RlclBhdGg6IFN0cmluZ1xuICAgIHByb2R1Y3Rpb25Db21wYW5pZXM6IFtTdHJpbmddXG4gICAgcHJvZHVjdGlvbkNvdW50cmllczogW1N0cmluZ11cbiAgICByZWxlYXNlRGF0ZTogU3RyaW5nIVxuICAgIHJldmVudWU6IEJpZ0ludCFcbiAgICBydW50aW1lOiBJbnRcbiAgICBzcG9rZW5MYW5ndWFnZXM6IFtTdHJpbmddXG4gICAgc3RhdHVzOiBTdHJpbmchXG4gICAgdGFnbGluZTogU3RyaW5nXG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICB0cmFpbGVyczogW1N0cmluZ11cbiAgICB2aWRlbzogQm9vbGVhbiFcbiAgICB2b3RlQXZlcmFnZTogRmxvYXQhXG4gICAgdm90ZUNvdW50OiBJbnQhXG4gIH1cblxuICB0eXBlIEdldFBvc3RncmVzTW92aWVzUmVzcG9uc2Uge1xuICAgIHBvc3RncmVzTW92aWVzOiBbUG9zdGdyZXNNb3ZpZV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFByb2R1Y3Rpb25Db21wYW55IHtcbiAgICBpZDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgICB0bWRiSWQ6IFN0cmluZyFcbiAgICBsb2dvUGF0aDogU3RyaW5nXG4gICAgb3JpZ2luQ291bnRyeTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBHZXRQcm9kdWN0aW9uQ29tcGFuaWVzUmVzcG9uc2Uge1xuICAgIHByb2R1Y3Rpb25Db21wYW5pZXM6IFtQcm9kdWN0aW9uQ29tcGFueV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFByb2R1Y3Rpb25Db3VudHJ5IHtcbiAgICBpZDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGlzb18zMTY2XzE6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEdldFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZSB7XG4gICAgcHJvZHVjdGlvbkNvdW50cmllczogW1Byb2R1Y3Rpb25Db3VudHJ5XVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU3Bva2VuTGFuZ3VhZ2Uge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgaXNvXzYzOV8xOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW5nbGlzaE5hbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBHZXRTcG9rZW5MYW5ndWFnZVJlc3BvbnNlIHtcbiAgICBzcG9rZW5MYW5ndWFnZXM6IFtTcG9rZW5MYW5ndWFnZV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBnZXRDb2xsZWN0aW9uKGlkOiBTdHJpbmchKTogQ29sbGVjdGlvblxuICAgIGdldENvbGxlY3Rpb25zKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0Q29sbGVjdGlvbnNSZXNwb25zZVxuXG4gICAgZ2V0SW1hZ2VzKHBhZ2U6IEludCEpOiBbSW1hZ2VdXG5cbiAgICBnZXREeW5hbW9Nb3ZpZXM6IFtEeW5hbW9Nb3ZpZV1cblxuICAgIGdldEdlbnJlKGlkOiBTdHJpbmchKTogR2VucmVcbiAgICBnZXRHZW5yZXMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRHZW5yZXNSZXNwb25zZVxuXG4gICAgZ2V0TW92aWVUcmFpbGVyKGlkOiBTdHJpbmchKTogTW92aWVUcmFpbGVyXG4gICAgZ2V0TW92aWVUcmFpbGVycyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldE1vdmllVHJhaWxlcnNSZXBvbnNlXG5cbiAgICBnZXRQb3N0Z3Jlc01vdmllKGlkOiBTdHJpbmchKTogUG9zdGdyZXNNb3ZpZVxuICAgIGdldFBvc3RncmVzTW92aWVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0UG9zdGdyZXNNb3ZpZXNSZXNwb25zZVxuXG4gICAgZ2V0UHJvZHVjdGlvbkNvbXBhbnkoaWQ6IFN0cmluZyEpOiBQcm9kdWN0aW9uQ29tcGFueVxuICAgIGdldFByb2R1Y3Rpb25Db21wYW5pZXMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRQcm9kdWN0aW9uQ29tcGFuaWVzUmVzcG9uc2VcblxuICAgIGdldFByb2R1Y3Rpb25Db3VudHJ5KGlkOiBTdHJpbmchKTogUHJvZHVjdGlvbkNvdW50cnlcbiAgICBnZXRQcm9kdWN0aW9uQ291bnRyaWVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0UHJvZHVjdGlvbkNvdW50cmllc1Jlc3BvbnNlXG5cbiAgICBnZXRTcG9rZW5MYW5ndWFnZShpZDogU3RyaW5nISk6IFNwb2tlbkxhbmd1YWdlXG4gICAgZ2V0U3Bva2VuTGFuZ3VhZ2VzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0U3Bva2VuTGFuZ3VhZ2VSZXNwb25zZVxuICB9XG5gO1xuIiwiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICdrbmV4JztcbmltcG9ydCB7IFBPU1RHUkVTX1VTRVIsIFBPU1RHUkVTX1BBU1NXT1JELCBEQVRBQkFTRV9VUkxfUFJPRFVDVElPTiwgREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5ULCBOT0RFX0VOViB9IGZyb20gJy4vZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgY2xpZW50OiBgcGdgLFxuICBjb25uZWN0aW9uOiB7XG4gICAgY29ubmVjdGlvblN0cmluZzogTk9ERV9FTlYgPT09IGBwcm9kdWN0aW9uYCA/IERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OIDogREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5ULFxuICAgIHVzZXI6IFBPU1RHUkVTX1VTRVIsXG4gICAgcGFzc3dvcmQ6IFBPU1RHUkVTX1BBU1NXT1JELFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgZGlyZWN0b3J5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9wb3N0Z3Jlcy9taWdyYXRpb25zYCksXG4gICAgZXh0ZW5zaW9uOiBgdHNgLFxuICB9LFxuICBzZWVkczoge1xuICAgIGRpcmVjdG9yeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcG9zdGdyZXMvc2VlZHMnKSxcbiAgICBleHRlbnNpb246IGB0c2AsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGI6IEtuZXg7XG4gIG9mZnNldD86IG51bWJlcjtcbiAgYW1vdW50OiBudW1iZXI7XG4gIHRhYmxlOiBUYWJsZXM7XG59O1xuXG5leHBvcnQgY29uc3QgcGFnaW5hdGVkRGJHRVQgPSBhc3luYyA8VD4oeyBkYiwgb2Zmc2V0LCBhbW91bnQsIHRhYmxlIH06IFByb3BzKTogUHJvbWlzZTxbeyBjb3VudDogbnVtYmVyIH0sIFRbXV0+ID0+IHtcbiAgbGV0IGdldDtcblxuICBpZiAoIU51bWJlci5pc05hTihvZmZzZXQpICYmICFOdW1iZXIuaXNOYU4oYW1vdW50KSkge1xuICAgIGdldCA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGRiLmNvdW50KGAqIGFzIGNvdW50YCkuZnJvbSh0YWJsZSkuZmlyc3QoKSxcbiAgICAgIGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbSh0YWJsZSlcbiAgICAgICAgLm9mZnNldChvZmZzZXQgPz8gTmFOKVxuICAgICAgICAubGltaXQoYW1vdW50KSxcbiAgICBdKTtcbiAgfSBlbHNlIHtcbiAgICBnZXQgPSBhd2FpdCBQcm9taXNlLmFsbChbZGIuY291bnQoYCogYXMgY291bnRgKS5mcm9tKHRhYmxlKS5maXJzdCgpLCBkYi5zZWxlY3QoYCpgKS5mcm9tKHRhYmxlKV0pO1xuICB9XG5cbiAgcmV0dXJuIGdldDtcbn07XG4iLCJpbXBvcnQgeyBQYWdpbmF0aW9uLCBQYWdpbmF0aW9uSW5wdXQgfSBmcm9tICcuLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVQYWdpbmF0aW9uID0gKHsgb2Zmc2V0LCBhbW91bnQgfTogUGFnaW5hdGlvbklucHV0KSA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGxldCBlcnJvcnMgPSAwO1xuICBsZXQgbWVzc2FnZXMgPSBbXTtcblxuICBpZiAoKE51bWJlci5pc05hTihvZmZzZXQpICYmICFOdW1iZXIuaXNOYU4oYW1vdW50KSkgfHwgKE51bWJlci5pc05hTihhbW91bnQpICYmICFOdW1iZXIuaXNOYU4ob2Zmc2V0KSkpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICAgIG1lc3NhZ2VzLnB1c2goXG4gICAgICBgRWl0aGVyIGJvdGggYW1vdW50IGFuZCBvZmZzZXQgbmVlZCB0byBiZSBwcm92aWRlZCBvciBuZWl0aGVyLCAke29mZnNldH0gd2FzIHByb3ZpZGVkIGZvciBvZmZzZXQgYW5kICR7YW1vdW50fSB3YXMgcHJvdmlkZWQgZm9yIGFtb3VudC5gXG4gICAgKTtcbiAgICBlcnJvcnMgKz0gMTtcbiAgfVxuXG4gIGlmICgoISFvZmZzZXQgJiYgb2Zmc2V0IDwgMCkgfHwgKCEhYW1vdW50ICYmIGFtb3VudCA8IDApKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlcy5wdXNoKFxuICAgICAgYE5laXRoZXIgb2Zmc2V0IG5vciBhbW91bnQgY2FuIGJlIGEgbmVnYXRpdmUgaW50ZWdlciwgJHtvZmZzZXR9IHdhcyBwcm92aWRlZCBmb3Igb2Zmc2V0IGFuZCAke2Ftb3VudH0gd2FzIHByb3ZpZGVkIGZvciBhbW91bnQuYFxuICAgICk7XG4gICAgZXJyb3JzICs9IDE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbGlkLFxuICAgIGVycm9ycyxcbiAgICBtZXNzYWdlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBhZ2luYXRlID0gKHsgcGFnaW5hdGlvbklucHV0LCB0b3RhbCB9OiB7IHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbjsgdG90YWw6IHsgY291bnQ6IG51bWJlciB9IH0pID0+ICh7XG4gIC4uLnBhZ2luYXRpb25JbnB1dCxcbiAgdG90YWw6IE51bWJlcih0b3RhbD8uY291bnQgPz8gTmFOKSxcbn0pO1xuIiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQga25leGZpbGUgZnJvbSAnLi4va25leGZpbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBLbmV4KGtuZXhmaWxlKTtcbiIsImV4cG9ydCBlbnVtIFRhYmxlcyB7XG4gIE1PVklFUyA9ICdtb3ZpZXMnLFxuICBTUE9LRU5fTEFOR1VBR0VTID0gJ3Nwb2tlbl9sYW5ndWFnZXMnLFxuICBHRU5SRVMgPSAnZ2VucmVzJyxcbiAgUFJPRFVDVElPTl9DT1VOVFJJRVMgPSAncHJvZHVjdGlvbl9jb3VudHJpZXMnLFxuICBQUk9EVUNUSU9OX0NPTVBBTklFUyA9ICdwcm9kdWN0aW9uX2NvbXBhbmllcycsXG4gIENPTExFQ1RJT05TID0gJ2NvbGxlY3Rpb25zJyxcbiAgTU9WSUVfVFJBSUxFUlMgPSAnbW92aWVfdHJhaWxlcnMnLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtc2NhbGFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbmV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi4vZ3JhcGhxbC90eXBlRGVmcy90eXBlRGVmcyc7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuLi9ncmFwaHFsL3Jlc29sdmVycy9yZXNvbHZlcnMnO1xuaW1wb3J0IHsgSFRUUF9QT1JUIH0gZnJvbSAnLi4vZW52JztcbmltcG9ydCBLbmV4IGZyb20gJy4uL3Bvc3RncmVzL2tuZXgnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB0eXBlRGVmcyBhcyBzY2FsYXJUeXBlRGVmcywgcmVzb2x2ZXJzIGFzIHNjYWxhclJlc29sdmVycyB9IGZyb20gJ2dyYXBocWwtc2NhbGFycyc7XG5pbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ0BncmFwaHFsLXRvb2xzL3NjaGVtYSc7XG5cbmNvbnN0IGNvcnNPcHRpb25zID0ge1xuICBvcmlnaW46IGAqYCxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHNjaGVtYTogbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xuICAgICAgdHlwZURlZnM6IFsuLi5zY2FsYXJUeXBlRGVmcywgdHlwZURlZnNdLFxuICAgICAgcmVzb2x2ZXJzOiB7IC4uLnNjYWxhclJlc29sdmVycywgLi4ucmVzb2x2ZXJzIH0sXG4gICAgfSksXG4gICAgY29udGV4dDogKCkgPT4gKHtcbiAgICAgIGRiOiBLbmV4LFxuICAgIH0pLFxuICB9KTtcblxuICBhcHAudXNlKG1vcmdhbihgOm1ldGhvZCA6dXJsIDpzdGF0dXMgOnJlc1tjb250ZW50LWxlbmd0aF0gLSA6cmVzcG9uc2UtdGltZSBtc2ApKTtcbiAgYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5cbiAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XG4gIHNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAsIHBhdGg6IGAvYXBpL2dyYXBocWxgIH0pO1xuICBhcHAubGlzdGVuKHsgcG9ydDogSFRUUF9QT1JUIH0sICgpID0+IGNvbnNvbGUubG9nKGBBcHAgaXMgbGlzdGVuaW5nIG9uIFBvcnQgJHtIVFRQX1BPUlR9YCkpO1xuICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuLi8uLi9odG1sYCksIHsgZXh0ZW5zaW9uczogW2BodG1sYF0gfSkpO1xufVxuXG50cnkge1xuICBzdGFydFNlcnZlcigpO1xufSBjYXRjaCAoc2VydmVyRXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihzZXJ2ZXJFcnJvcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=