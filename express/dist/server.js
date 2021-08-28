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
const collectionResolvers = {
    getCollections: _asyncToGenerator(function*(_, __, { db  }) {
        let collections;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.COLLECTIONS).then((dbCollections)=>{
                collections = dbCollections;
            });
        } catch (knexError) {
            console.error(knexError);
            collections = [];
        }
        return collections;
    }),
    getCollection: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let collection;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.COLLECTIONS).where({
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
const movieTrailerResolvers = {
    getMovieTrailers: _asyncToGenerator(function*(_, __, { db  }) {
        let movieTrailers;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.MOVIE_TRAILERS).then((dbMovieTrailers)=>{
                movieTrailers = dbMovieTrailers;
            });
        } catch (knexError) {
            console.error(knexError);
            movieTrailers = [];
        }
        return movieTrailers;
    }),
    getMovieTrailer: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let movieTrailer;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.MOVIE_TRAILERS).where({
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
    getProductionCompanies: _asyncToGenerator(function*(_, __, { db  }) {
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
const productionCountryResolvers = {
    getProductionCountries: _asyncToGenerator(function*(_, __, { db  }) {
        let countries;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.PRODUCTION_COUNTRIES).then((dbCountries)=>{
                countries = dbCountries;
            });
        } catch (knexError) {
            console.error(knexError);
            countries = [];
        }
        return countries;
    }),
    getProductionCountry: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let country;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.PRODUCTION_COUNTRIES).where({
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
const spokenLangaugeResolvers = {
    getSpokenLanguages: _asyncToGenerator(function*(_, __, { db  }) {
        let languages;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.SPOKEN_LANGUAGES).then((dbLanguages)=>{
                languages = dbLanguages;
            });
        } catch (knexError) {
            console.error(knexError);
            languages = [];
        }
        return languages;
    }),
    getSpokenLanguage: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let language;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_0__.Tables.SPOKEN_LANGUAGES).where({
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

  type ProductionCompany {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    name: String!
    tmdbId: String!
    logoPath: String
    originCountry: String!
  }

  type ProductionCountry {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    iso_3166_1: String!
    name: String!
  }

  type SpokenLanguage {
    id: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    iso_639_1: String!
    name: String
    englishName: String
  }

  type Query {
    getCollection(id: String!): Collection
    getCollections: [Collection]
    getImages(page: Int!): [Image]
    getDynamoMovies: [DynamoMovie]
    getGenres: [Genre]
    getGenre(id: String!): Genre
    getMovieTrailer(id: String!): MovieTrailer
    getMovieTrailers: [MovieTrailer]
    getPostgresMovies: [PostgresMovie]
    getPostgresMovie(id: String!): PostgresMovie!
    getProductionCompany(id: String!): ProductionCompany
    getProductionCompanies: [ProductionCompany]
    getProductionCountries: [ProductionCountry]
    getProductionCountry(id: String!): ProductionCountry
    getSpokenLanguages: [SpokenLanguage]
    getSpokenLanguage(id: String!): SpokenLanguage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTt1QkFBTSxxREFBYztvQkFBRSxnRUFBUTs7Z0JBQ3RDLFNBQVM7bUJBQU8sc0RBQWUsRUFBSyxtRUFBUzs7WUFFL0MsT0FBTztvQkFDTCxFQUFFLEVBQUUsbURBQUk7OztRQUlaLEdBQUcsQ0FBQyxHQUFHLENBQUMsNkNBQU0sRUFBRSw2REFBNkQ7UUFDN0UsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQ0FBSSxDQUFDLFdBQVc7Y0FFbEIsTUFBTSxDQUFDLEtBQUs7UUFDbEIsTUFBTSxDQUFDLGVBQWU7WUFBRyxHQUFHO1lBQUUsSUFBSSxHQUFHLFlBQVk7O1FBQ2pELEdBQUcsQ0FBQyxNQUFNO1lBQUcsSUFBSSxFQUFFLDJDQUFTO2VBQVUsT0FBTyxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSwyQ0FBUzs7UUFDdkYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxREFBYyxDQUFDLG1EQUFZLENBQUMsU0FBUyxHQUFHLFVBQVU7WUFBTSxVQUFVO2lCQUFJLElBQUk7OztJQUNwRixDQUFDO1dBbkJjLFlBQVc7O1NBQVgsV0FBVztXQUFYLFlBQVc7O0lBcUJ0QixDQUFDO0lBQ0gsV0FBVztBQUNiLENBQUMsUUFBUSxXQUFXLEVBQUUsQ0FBQztJQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVc7QUFDM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi9jbGllbnRzL2F3c0F4aW9zLmNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZW52LnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9jb2xsZWN0aW9ucy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL2ltYWdlLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvbW92aWUucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9tb3ZpZVRyYWlsZXJzLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcHJvZHVjdGlvbkNvbXBhbmllcy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Byb2R1Y3Rpb25Db3VudHJpZXMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Nwb2tlbkxhbmd1YWdlUmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3R5cGVEZWZzL3R5cGVEZWZzLnRzIiwid2VicGFjazovLy8uLi8uLi9rbmV4ZmlsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcG9zdGdyZXMva25leC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vdHlwZXMvdGFibGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC1zY2FsYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uLy4uL2V4cHJlc3Mvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBUElfR0FURVdBWSB9IGZyb20gJy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBhd3NBeGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEFQSV9HQVRFV0FZLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5jb25maWcoeyBwYXRoOiBgLi8uZW52YCB9KTtcblxuZXhwb3J0IGNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbmV4cG9ydCBjb25zdCBQT1NUR1JFU19IT1NUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19VU0VSID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUjtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QT1JUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QQVNTV09SRCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JEO1xuZXhwb3J0IGNvbnN0IFBPU1RHUkVTX0RCID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREI7XG5cbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQ7XG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfUFJPRFVDVElPTjtcbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfVEVTVCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTF9URVNUO1xuXG5leHBvcnQgY29uc3QgV0lERVNDUkVFTl9XQUxMUEFQRVJTID0gcHJvY2Vzcy5lbnYuV0lERVNDUkVFTl9XQUxMUEFQRVJTO1xuZXhwb3J0IGNvbnN0IFdBTExQQVBFUl9QTEFZID0gcHJvY2Vzcy5lbnYuV0FMTFBBUEVSX1BMQVk7XG5leHBvcnQgY29uc3QgV0FMTEhBVkVOID0gcHJvY2Vzcy5lbnYuV0FMTEhBVkVOO1xuXG5leHBvcnQgY29uc3QgQUxQSEFfQ09ERVJTID0gcHJvY2Vzcy5lbnYuQUxQSEFfQ09ERVJTO1xuZXhwb3J0IGNvbnN0IEVYUFJFU1MgPSBwcm9jZXNzLmVudi5FWFBSRVNTO1xuXG5leHBvcnQgY29uc3QgSU1BR0VTX0RJUiA9IHByb2Nlc3MuZW52LklNQUdFU19ESVI7XG5leHBvcnQgY29uc3QgTU9WSUVTX0RJUiA9IHByb2Nlc3MuZW52Lk1PVklFU19ESVI7XG5leHBvcnQgY29uc3QgVFZfRElSID0gcHJvY2Vzcy5lbnYuVFZfRElSO1xuZXhwb3J0IGNvbnN0IE1VU0lDX0RJUiA9IHByb2Nlc3MuZW52Lk1VU0lDX0RJUjtcblxuZXhwb3J0IGNvbnN0IFRNREJfQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWTtcblxuZXhwb3J0IGNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LkhUVFBfUE9SVDtcblxuZXhwb3J0IGNvbnN0IEFQSV9HQVRFV0FZID0gcHJvY2Vzcy5lbnYuQVBJX0dBVEVXQVk7XG4iLCJpbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgY29sbGVjdGlvblJlc29sdmVycyA9IHtcbiAgZ2V0Q29sbGVjdGlvbnM6IGFzeW5jIChfOiBhbnksIF9fOiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb25zO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuQ09MTEVDVElPTlMpXG4gICAgICAgIC50aGVuKChkYkNvbGxlY3Rpb25zKSA9PiB7XG4gICAgICAgICAgY29sbGVjdGlvbnMgPSBkYkNvbGxlY3Rpb25zO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGNvbGxlY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25zO1xuICB9LFxuXG4gIGdldENvbGxlY3Rpb246IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb2xsZWN0aW9uO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuQ09MTEVDVElPTlMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbGxlY3Rpb24pID0+IHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZGJDb2xsZWN0aW9uWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBwcm9taXNlcyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IElNQUdFU19ESVIgfSBmcm9tICcuLi8uLi9lbnYnO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VSZXNvbHZlcnMgPSB7XG4gIGdldEltYWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdlIH06IHsgcGFnZTogbnVtYmVyIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgcHJvbWlzZXMucmVhZGRpcihJTUFHRVNfRElSPy50b1N0cmluZygpID8/IGBgKTtcbiAgICAgIHJldHVybiBpbWFnZXMuc2xpY2UocGFnZSAqIDIwIC0gMjAsIHBhZ2UgKiAyMCk7XG4gICAgfSBjYXRjaCAoaW1hZ2VFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihpbWFnZUVycm9yKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgYXdzQXhpb3NDbGllbnQgfSBmcm9tICcuLi8uLi9jbGllbnRzL2F3c0F4aW9zLmNsaWVudCc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuaW1wb3J0IHsgUG9zdGdyZXNNb3ZpZSwgUXVlcnlHZXRQb3N0Z3Jlc01vdmllQXJncyB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZVJlc29sdmVycyA9IHtcbiAgZ2V0RHluYW1vTW92aWVzOiBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGR5bmFtb01vdmllcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhd3NBeGlvc0NsaWVudCh7XG4gICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgIHVybDogYC9tb3ZpZXNgLFxuICAgICAgfSk7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBkYXRhO1xuICAgIH0gY2F0Y2ggKG1vdmllRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobW92aWVFcnJvcik7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGR5bmFtb01vdmllcztcbiAgfSxcblxuICBnZXRQb3N0Z3Jlc01vdmllczogYXN5bmMgKF86IGFueSwgX186IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVzO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFUylcbiAgICAgICAgLnRoZW4oKGRiTW92aWVzKSA9PiB7XG4gICAgICAgICAgbW92aWVzID0gZGJNb3ZpZXM7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgbW92aWVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBtb3ZpZXM7XG4gIH0sXG5cbiAgZ2V0UG9zdGdyZXNNb3ZpZTogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBRdWVyeUdldFBvc3RncmVzTW92aWVBcmdzLCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBtb3ZpZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5mcm9tKFRhYmxlcy5NT1ZJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYk1vdmllKSA9PiB7XG4gICAgICAgICAgbW92aWUgPSBkYk1vdmllWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIG1vdmllID0ge307XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG1vdmllKTtcbiAgICByZXR1cm4gbW92aWU7XG4gIH0sXG59O1xuIiwiaW1wb3J0ICogYXMgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxuZXhwb3J0IGNvbnN0IG1vdmllVHJhaWxlclJlc29sdmVycyA9IHtcbiAgZ2V0TW92aWVUcmFpbGVyczogYXN5bmMgKF86IGFueSwgX186IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVUcmFpbGVycztcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFX1RSQUlMRVJTKVxuICAgICAgICAudGhlbigoZGJNb3ZpZVRyYWlsZXJzKSA9PiB7XG4gICAgICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllVHJhaWxlcnM7XG4gIH0sXG5cbiAgZ2V0TW92aWVUcmFpbGVyOiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVUcmFpbGVyO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuTU9WSUVfVFJBSUxFUlMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYk1vdmllVHJhaWxlcikgPT4ge1xuICAgICAgICAgIG1vdmllVHJhaWxlciA9IGRiTW92aWVUcmFpbGVyWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92aWVUcmFpbGVyO1xuICB9LFxufTtcbiIsImltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyA9IHtcbiAgZ2V0UHJvZHVjdGlvbkNvbXBhbmllczogYXN5bmMgKF86IGFueSwgX186IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcHJvZHVjdGlvbkNvbXBhbmllcztcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTKVxuICAgICAgICAudGhlbigoZGJQcm9kdWN0aW9uQ29tcGFuaWVzKSA9PiB7XG4gICAgICAgICAgcHJvZHVjdGlvbkNvbXBhbmllcyA9IGRiUHJvZHVjdGlvbkNvbXBhbmllcztcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25Db21wYW5pZXM7XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvbXBhbnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb21wYW55O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT01QQU5JRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbXBhbnkpID0+IHtcbiAgICAgICAgICBjb21wYW55ID0gZGJDb21wYW55WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFueTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdGlvbkNvdW50cnlSZXNvbHZlcnMgPSB7XG4gIGdldFByb2R1Y3Rpb25Db3VudHJpZXM6IGFzeW5jIChfOiBhbnksIF9fOiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvdW50cmllcztcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTKVxuICAgICAgICAudGhlbigoZGJDb3VudHJpZXMpID0+IHtcbiAgICAgICAgICBjb3VudHJpZXMgPSBkYkNvdW50cmllcztcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBjb3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRyaWVzO1xuICB9LFxuXG4gIGdldFByb2R1Y3Rpb25Db3VudHJ5OiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgY291bnRyeTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJDb3VudHJ5KSA9PiB7XG4gICAgICAgICAgY291bnRyeSA9IGRiQ291bnRyeVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50cnk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY29sbGVjdGlvblJlc29sdmVycyB9IGZyb20gJy4vY29sbGVjdGlvbnMucmVzb2x2ZXJzJztcbmltcG9ydCB7IGltYWdlUmVzb2x2ZXJzIH0gZnJvbSAnLi9pbWFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgbW92aWVSZXNvbHZlcnMgfSBmcm9tICcuL21vdmllLnJlc29sdmVycyc7XG5pbXBvcnQgeyBtb3ZpZVRyYWlsZXJSZXNvbHZlcnMgfSBmcm9tICcuL21vdmllVHJhaWxlcnMucmVzb2x2ZXJzJztcbmltcG9ydCB7IHByb2R1Y3Rpb25Db21wYW55UmVzb2x2ZXJzIH0gZnJvbSAnLi9wcm9kdWN0aW9uQ29tcGFuaWVzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBwcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyB9IGZyb20gJy4vcHJvZHVjdGlvbkNvdW50cmllcy5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMgfSBmcm9tICcuL3Nwb2tlbkxhbmd1YWdlUmVzb2x2ZXJzJztcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICAuLi5jb2xsZWN0aW9uUmVzb2x2ZXJzLFxuICAgIC4uLmltYWdlUmVzb2x2ZXJzLFxuICAgIC4uLm1vdmllUmVzb2x2ZXJzLFxuICAgIC4uLm1vdmllVHJhaWxlclJlc29sdmVycyxcbiAgICAuLi5wcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyxcbiAgICAuLi5wcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyxcbiAgICAuLi5zcG9rZW5MYW5nYXVnZVJlc29sdmVycyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3Qgc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMgPSB7XG4gIGdldFNwb2tlbkxhbmd1YWdlczogYXN5bmMgKF86IGFueSwgX186IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbGFuZ3VhZ2VzO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuU1BPS0VOX0xBTkdVQUdFUylcbiAgICAgICAgLnRoZW4oKGRiTGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgICAgbGFuZ3VhZ2VzID0gZGJMYW5ndWFnZXM7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgbGFuZ3VhZ2VzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmd1YWdlcztcbiAgfSxcblxuICBnZXRTcG9rZW5MYW5ndWFnZTogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGxhbmd1YWdlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuU1BPS0VOX0xBTkdVQUdFUylcbiAgICAgICAgLndoZXJlKHsgaWQgfSlcbiAgICAgICAgLnRoZW4oKGRiTGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICBsYW5ndWFnZSA9IGRiTGFuZ3VhZ2VbMF07XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBsYW5ndWFnZTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgQ29sbGVjdGlvbiB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgb3ZlcnZpZXc6IFN0cmluZyFcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIHBhcnRzOiBbU3RyaW5nXSFcbiAgfVxuXG4gIHR5cGUgRHluYW1vTW92aWUge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgaWQ6IFN0cmluZyFcbiAgICBtZWRpYVR5cGU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgSW1hZ2Uge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2VucmUge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBNb3ZpZVRyYWlsZXIge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBTdHJpbmchXG4gICAgdXBkYXRlZEF0OiBTdHJpbmchXG4gICAgaXNvXzYzOV8xOiBUaW1lc3RhbXBcbiAgICBpc29fMzE2Nl8xOiBUaW1lc3RhbXBcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBrZXk6IFN0cmluZ1xuICAgIHNpdGU6IFN0cmluZ1xuICAgIHNpemU6IEludFxuICAgIHR5cGU6IFN0cmluZ1xuICAgIG9mZmljaWFsOiBCb29sZWFuXG4gICAgcHVibGlzaGVkQXQ6IFRpbWVzdGFtcFxuICAgIHRtZGJJZDogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBQb3N0Z3Jlc01vdmllIHtcbiAgICBhZHVsdDogQm9vbGVhbiFcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIGNvbGxlY3Rpb246IFN0cmluZ1xuICAgIGJ1ZGdldDogQmlnSW50IVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGZpbGVOYW1lOiBTdHJpbmchXG4gICAgZ2VucmVzOiBbU3RyaW5nXVxuICAgIGhvbWVwYWdlOiBTdHJpbmdcbiAgICBpZDogU3RyaW5nIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIGltZGJJZDogU3RyaW5nXG4gICAgb3JpZ2luYWxMYW5ndWFnZTogU3RyaW5nIVxuICAgIG9yaWdpbmFsVGl0bGU6IFN0cmluZyFcbiAgICBvdmVydmlldzogU3RyaW5nXG4gICAgcG9wdWxhcml0eTogRmxvYXRcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBwcm9kdWN0aW9uQ29tcGFuaWVzOiBbU3RyaW5nXVxuICAgIHByb2R1Y3Rpb25Db3VudHJpZXM6IFtTdHJpbmddXG4gICAgcmVsZWFzZURhdGU6IFN0cmluZyFcbiAgICByZXZlbnVlOiBCaWdJbnQhXG4gICAgcnVudGltZTogSW50XG4gICAgc3Bva2VuTGFuZ3VhZ2VzOiBbU3RyaW5nXVxuICAgIHN0YXR1czogU3RyaW5nIVxuICAgIHRhZ2xpbmU6IFN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdHJhaWxlcnM6IFtTdHJpbmddXG4gICAgdmlkZW86IEJvb2xlYW4hXG4gICAgdm90ZUF2ZXJhZ2U6IEZsb2F0IVxuICAgIHZvdGVDb3VudDogSW50IVxuICB9XG5cbiAgdHlwZSBQcm9kdWN0aW9uQ29tcGFueSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbG9nb1BhdGg6IFN0cmluZ1xuICAgIG9yaWdpbkNvdW50cnk6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgUHJvZHVjdGlvbkNvdW50cnkge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgaXNvXzMxNjZfMTogU3RyaW5nIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgU3Bva2VuTGFuZ3VhZ2Uge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgaXNvXzYzOV8xOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW5nbGlzaE5hbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgZ2V0Q29sbGVjdGlvbihpZDogU3RyaW5nISk6IENvbGxlY3Rpb25cbiAgICBnZXRDb2xsZWN0aW9uczogW0NvbGxlY3Rpb25dXG4gICAgZ2V0SW1hZ2VzKHBhZ2U6IEludCEpOiBbSW1hZ2VdXG4gICAgZ2V0RHluYW1vTW92aWVzOiBbRHluYW1vTW92aWVdXG4gICAgZ2V0R2VucmVzOiBbR2VucmVdXG4gICAgZ2V0R2VucmUoaWQ6IFN0cmluZyEpOiBHZW5yZVxuICAgIGdldE1vdmllVHJhaWxlcihpZDogU3RyaW5nISk6IE1vdmllVHJhaWxlclxuICAgIGdldE1vdmllVHJhaWxlcnM6IFtNb3ZpZVRyYWlsZXJdXG4gICAgZ2V0UG9zdGdyZXNNb3ZpZXM6IFtQb3N0Z3Jlc01vdmllXVxuICAgIGdldFBvc3RncmVzTW92aWUoaWQ6IFN0cmluZyEpOiBQb3N0Z3Jlc01vdmllIVxuICAgIGdldFByb2R1Y3Rpb25Db21wYW55KGlkOiBTdHJpbmchKTogUHJvZHVjdGlvbkNvbXBhbnlcbiAgICBnZXRQcm9kdWN0aW9uQ29tcGFuaWVzOiBbUHJvZHVjdGlvbkNvbXBhbnldXG4gICAgZ2V0UHJvZHVjdGlvbkNvdW50cmllczogW1Byb2R1Y3Rpb25Db3VudHJ5XVxuICAgIGdldFByb2R1Y3Rpb25Db3VudHJ5KGlkOiBTdHJpbmchKTogUHJvZHVjdGlvbkNvdW50cnlcbiAgICBnZXRTcG9rZW5MYW5ndWFnZXM6IFtTcG9rZW5MYW5ndWFnZV1cbiAgICBnZXRTcG9rZW5MYW5ndWFnZShpZDogU3RyaW5nISk6IFNwb2tlbkxhbmd1YWdlXG4gIH1cbmA7XG4iLCJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgUE9TVEdSRVNfVVNFUiwgUE9TVEdSRVNfUEFTU1dPUkQsIERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OLCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQsIE5PREVfRU5WIH0gZnJvbSAnLi9lbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICBjbGllbnQ6IGBwZ2AsXG4gIGNvbm5lY3Rpb246IHtcbiAgICBjb25uZWN0aW9uU3RyaW5nOiBOT0RFX0VOViA9PT0gYHByb2R1Y3Rpb25gID8gREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gOiBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQsXG4gICAgdXNlcjogUE9TVEdSRVNfVVNFUixcbiAgICBwYXNzd29yZDogUE9TVEdSRVNfUEFTU1dPUkQsXG4gIH0sXG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBkaXJlY3Rvcnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL3Bvc3RncmVzL21pZ3JhdGlvbnNgKSxcbiAgICBleHRlbnNpb246IGB0c2AsXG4gIH0sXG4gIHNlZWRzOiB7XG4gICAgZGlyZWN0b3J5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wb3N0Z3Jlcy9zZWVkcycpLFxuICAgIGV4dGVuc2lvbjogYHRzYCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IGtuZXhmaWxlIGZyb20gJy4uL2tuZXhmaWxlJztcblxuZXhwb3J0IGRlZmF1bHQgS25leChrbmV4ZmlsZSk7XG4iLCJleHBvcnQgZW51bSBUYWJsZXMge1xuICBNT1ZJRVMgPSAnbW92aWVzJyxcbiAgU1BPS0VOX0xBTkdVQUdFUyA9ICdzcG9rZW5fbGFuZ3VhZ2VzJyxcbiAgR0VOUkVTID0gJ2dlbnJlcycsXG4gIFBST0RVQ1RJT05fQ09VTlRSSUVTID0gJ3Byb2R1Y3Rpb25fY291bnRyaWVzJyxcbiAgUFJPRFVDVElPTl9DT01QQU5JRVMgPSAncHJvZHVjdGlvbl9jb21wYW5pZXMnLFxuICBDT0xMRUNUSU9OUyA9ICdjb2xsZWN0aW9ucycsXG4gIE1PVklFX1RSQUlMRVJTID0gJ21vdmllX3RyYWlsZXJzJyxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXNjYWxhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia25leFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyB0eXBlRGVmcyB9IGZyb20gJy4uL2dyYXBocWwvdHlwZURlZnMvdHlwZURlZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZXJzIH0gZnJvbSAnLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcmVzb2x2ZXJzJztcbmltcG9ydCB7IEhUVFBfUE9SVCB9IGZyb20gJy4uL2Vudic7XG5pbXBvcnQgS25leCBmcm9tICcuLi9wb3N0Z3Jlcy9rbmV4JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgdHlwZURlZnMgYXMgc2NhbGFyVHlwZURlZnMsIHJlc29sdmVycyBhcyBzY2FsYXJSZXNvbHZlcnMgfSBmcm9tICdncmFwaHFsLXNjYWxhcnMnO1xuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdAZ3JhcGhxbC10b29scy9zY2hlbWEnO1xuXG5jb25zdCBjb3JzT3B0aW9ucyA9IHtcbiAgb3JpZ2luOiBgKmAsXG59O1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICBjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcbiAgICAgIHR5cGVEZWZzOiBbLi4uc2NhbGFyVHlwZURlZnMsIHR5cGVEZWZzXSxcbiAgICAgIHJlc29sdmVyczogeyAuLi5zY2FsYXJSZXNvbHZlcnMsIC4uLnJlc29sdmVycyB9LFxuICAgIH0pLFxuICAgIGNvbnRleHQ6ICgpID0+ICh7XG4gICAgICBkYjogS25leCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgYXBwLnVzZShtb3JnYW4oYDptZXRob2QgOnVybCA6c3RhdHVzIDpyZXNbY29udGVudC1sZW5ndGhdIC0gOnJlc3BvbnNlLXRpbWUgbXNgKSk7XG4gIGFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xuXG4gIGF3YWl0IHNlcnZlci5zdGFydCgpO1xuICBzZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwLCBwYXRoOiBgL2FwaS9ncmFwaHFsYCB9KTtcbiAgYXBwLmxpc3Rlbih7IHBvcnQ6IEhUVFBfUE9SVCB9LCAoKSA9PiBjb25zb2xlLmxvZyhgQXBwIGlzIGxpc3RlbmluZyBvbiBQb3J0ICR7SFRUUF9QT1JUfWApKTtcbiAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi4vLi4vaHRtbGApLCB7IGV4dGVuc2lvbnM6IFtgaHRtbGBdIH0pKTtcbn1cblxudHJ5IHtcbiAgc3RhcnRTZXJ2ZXIoKTtcbn0gY2F0Y2ggKHNlcnZlckVycm9yKSB7XG4gIGNvbnNvbGUuZXJyb3Ioc2VydmVyRXJyb3IpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9