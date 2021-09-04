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
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");







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
            total: 0
        };
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
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
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.COLLECTIONS
            });
            collections = dbCollections;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
                total
            });
        } catch (knexError) {
            console.error(knexError);
            collections = [];
        }
        console.log(pagination);
        return {
            collections,
            pagination
        };
    }),
    getCollection: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let collection;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.COLLECTIONS).where({
                id
            }).then((dbCollection)=>{
                collection = dbCollection[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return collection;
    }),
    searchCollectionsByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let collections;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__.serverErrorReducer)([
            (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
                offset,
                amount
            }),
            (yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
                searchInput,
                db,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.COLLECTIONS
            })), 
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbCollections] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.COLLECTIONS,
                searchKey,
                value
            });
            collections = dbCollections;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
    })
};


/***/ }),

/***/ "../../graphql/resolvers/genres.resolvers.ts":
/*!***************************************************!*\
  !*** ../../graphql/resolvers/genres.resolvers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genresResolvers": () => (/* binding */ genresResolvers)
/* harmony export */ });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");







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
const genresResolvers = {
    getGenres: _asyncToGenerator(function*(_, { paginationInput  }, { db  }) {
        let genres;
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
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
            const [total, dbGenres] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.GENRES
            });
            genres = dbGenres;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
                total
            });
        } catch (knexError) {
            console.error(knexError);
            genres = [];
        }
        return {
            genres,
            pagination
        };
    }),
    getGenre: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let genre;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.GENRES).where({
                id
            }).then((dbGenre)=>{
                genre = dbGenre[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return genre;
    }),
    searchGenresByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let genres;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const validPagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
            offset,
            amount
        });
        const validSearchParams = yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
            searchInput,
            db,
            table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.GENRES
        });
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__.serverErrorReducer)([
            validPagination,
            validSearchParams
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbGenres] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.GENRES,
                searchKey,
                value
            });
            genres = dbGenres;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
                total
            });
        } catch (knexError) {
            console.error(knexError);
            genres = [];
        }
        return {
            genres,
            pagination
        };
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
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");








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
    }),
    searchPostgresMoviesByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let postgresMovies;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const validPagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.validatePagination)({
            offset,
            amount
        });
        const validSearchParams = yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
            searchInput,
            db,
            table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.MOVIES
        });
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_6__.serverErrorReducer)([
            validPagination,
            validSearchParams
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbPostgresMovies] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_7__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.MOVIES,
                searchKey,
                value
            });
            postgresMovies = dbPostgresMovies;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_2__.repaginate)({
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
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");







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
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
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
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.MOVIE_TRAILERS
            });
            movieTrailers = dbMovieTrailers;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.MOVIE_TRAILERS).where({
                id
            }).then((dbMovieTrailer)=>{
                movieTrailer = dbMovieTrailer[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return movieTrailer;
    }),
    searchMovieTrailersByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let movieTrailers;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const validPagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
            offset,
            amount
        });
        const validSearchParams = yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
            searchInput,
            db,
            table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.MOVIE_TRAILERS
        });
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__.serverErrorReducer)([
            validPagination,
            validSearchParams
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbMovieTrailers] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.MOVIE_TRAILERS,
                searchKey,
                value
            });
            movieTrailers = dbMovieTrailers;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/paginatedDbGET.lib */ "../../lib/paginatedDbGET.lib.ts");
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");







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
        let pagination = {
            total: NaN
        };
        const offset = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset;
        const amount = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount;
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
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
            const [total, dbProductionCompanies] = yield (0,_lib_paginatedDbGET_lib__WEBPACK_IMPORTED_MODULE_1__.paginatedDbGET)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.MOVIES
            });
            productionCompanies = dbProductionCompanies;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
                total
            });
        } catch (knexError) {
            console.error(knexError);
            productionCompanies = [];
        }
        return {
            productionCompanies,
            pagination
        };
    }),
    getProductionCompany: _asyncToGenerator(function*(_, { id  }, { db  }) {
        let company;
        try {
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COMPANIES).where({
                id
            }).then((dbCompany)=>{
                company = dbCompany[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return company;
    }),
    searchProductionCompaniesByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let productionCompanies;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const validPagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
            offset,
            amount
        });
        const validSearchParams = yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
            searchInput,
            db,
            table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COMPANIES
        });
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__.serverErrorReducer)([
            validPagination,
            validSearchParams
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbProductionCompanies] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COMPANIES,
                searchKey,
                value
            });
            productionCompanies = dbProductionCompanies;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
                total
            });
        } catch (knexError) {
            console.error(knexError);
            productionCompanies = [];
        }
        return {
            productionCompanies,
            pagination
        };
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
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");







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
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
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
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COUNTRIES
            });
            productionCountries = dbProductionCountries;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COUNTRIES).where({
                id
            }).then((dbCountry)=>{
                country = dbCountry[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return country;
    }),
    searchProductionCountriesByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let productionCountries;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const validPagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
            offset,
            amount
        });
        const validSearchParams = yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
            searchInput,
            db,
            table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COUNTRIES
        });
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__.serverErrorReducer)([
            validPagination,
            validSearchParams
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbProductionCountries] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.PRODUCTION_COUNTRIES,
                searchKey,
                value
            });
            productionCountries = dbProductionCountries;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
/* harmony import */ var _genres_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genres.resolvers */ "../../graphql/resolvers/genres.resolvers.ts");
/* harmony import */ var _image_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.resolvers */ "../../graphql/resolvers/image.resolvers.ts");
/* harmony import */ var _movie_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie.resolvers */ "../../graphql/resolvers/movie.resolvers.ts");
/* harmony import */ var _movieTrailers_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movieTrailers.resolvers */ "../../graphql/resolvers/movieTrailers.resolvers.ts");
/* harmony import */ var _productionCompanies_resolvers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productionCompanies.resolvers */ "../../graphql/resolvers/productionCompanies.resolvers.ts");
/* harmony import */ var _productionCountries_resolvers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productionCountries.resolvers */ "../../graphql/resolvers/productionCountries.resolvers.ts");
/* harmony import */ var _spokenLanguageResolvers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spokenLanguageResolvers */ "../../graphql/resolvers/spokenLanguageResolvers.ts");








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
    }, _collections_resolvers__WEBPACK_IMPORTED_MODULE_0__.collectionResolvers, _image_resolvers__WEBPACK_IMPORTED_MODULE_2__.imageResolvers, _genres_resolvers__WEBPACK_IMPORTED_MODULE_1__.genresResolvers, _movie_resolvers__WEBPACK_IMPORTED_MODULE_3__.movieResolvers, _movieTrailers_resolvers__WEBPACK_IMPORTED_MODULE_4__.movieTrailerResolvers, _productionCompanies_resolvers__WEBPACK_IMPORTED_MODULE_5__.productionCompanyResolvers, _productionCountries_resolvers__WEBPACK_IMPORTED_MODULE_6__.productionCountryResolvers, _spokenLanguageResolvers__WEBPACK_IMPORTED_MODULE_7__.spokenLangaugeResolvers)
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
/* harmony import */ var _lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/paginatedDbSEARCH.lib */ "../../lib/paginatedDbSEARCH.lib.ts");
/* harmony import */ var _lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/serverErrorReducer.lib */ "../../lib/serverErrorReducer.lib.ts");
/* harmony import */ var _lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/serverPagination.lib */ "../../lib/serverPagination.lib.ts");
/* harmony import */ var _lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/serverSearch */ "../../lib/serverSearch.ts");
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");







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
        const { valid , errors , messages  } = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
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
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.MOVIE_TRAILERS
            });
            spokenLanguages = dbMovieTrailers;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
            yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.SPOKEN_LANGUAGES).where({
                id
            }).then((dbLanguage)=>{
                language = dbLanguage[0];
            });
        } catch (knexError) {
            console.error(knexError);
        }
        return language;
    }),
    searchSpokenLanguagesByKeyValue: _asyncToGenerator(function*(_, { searchInput  }, { db  }) {
        let spokenLanguages;
        let pagination = {
            total: NaN
        };
        const paginationInput = searchInput === null || searchInput === void 0 ? void 0 : searchInput.paginationInput;
        var ref;
        const offset = (ref = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.offset) !== null && ref !== void 0 ? ref : NaN;
        var ref1;
        const amount = (ref1 = paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.amount) !== null && ref1 !== void 0 ? ref1 : NaN;
        const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
        const value = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
        const validPagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.validatePagination)({
            offset,
            amount
        });
        const validSearchParams = yield (0,_lib_serverSearch__WEBPACK_IMPORTED_MODULE_5__.validateSearchParams)({
            searchInput,
            db,
            table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.SPOKEN_LANGUAGES
        });
        const { valid , errors , messages  } = (0,_lib_serverErrorReducer_lib__WEBPACK_IMPORTED_MODULE_3__.serverErrorReducer)([
            validPagination,
            validSearchParams
        ]);
        if (!valid) {
            throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`${errors} errors`, {
                errors,
                messages
            });
        }
        try {
            const [total, dbSpokenLanguages] = yield (0,_lib_paginatedDbSEARCH_lib__WEBPACK_IMPORTED_MODULE_2__.paginatedDbSEARCH)({
                db,
                offset,
                amount,
                table: _types_tables_enum__WEBPACK_IMPORTED_MODULE_6__.Tables.SPOKEN_LANGUAGES,
                searchKey,
                value
            });
            spokenLanguages = dbSpokenLanguages;
            pagination = (0,_lib_serverPagination_lib__WEBPACK_IMPORTED_MODULE_4__.repaginate)({
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
  input SearchInput {
    searchKey: String
    value: String
    paginationInput: PaginationInput
  }

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

  type SearchCollectionsResponse {
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

  type SearchGenresResponse {
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
    movieId: String!
  }

  type GetMovieTrailersReponse {
    movieTrailers: [MovieTrailer]
    pagination: Pagination
  }

  type SearchMovieTrailersResponse {
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

  type SearchPostgresMoviesResponse {
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

  type SearchProductionCompaniesResponse {
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

  type SearchProductionCountriesResponse {
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

  type SearchSpokenLanguagesResponse {
    spokenLanguages: [SpokenLanguage]
    pagination: Pagination
  }

  type Query {
    getCollection(id: String!): Collection
    getCollections(paginationInput: PaginationInput): GetCollectionsResponse
    searchCollectionsByKeyValue(searchInput: SearchInput): SearchCollectionsResponse

    getImages(page: Int!): [Image]

    getDynamoMovies: [DynamoMovie]

    getGenre(id: String!): Genre
    getGenres(paginationInput: PaginationInput): GetGenresResponse
    searchGenresByKeyValue(searchInput: SearchInput): SearchGenresResponse

    getMovieTrailer(id: String!): MovieTrailer
    getMovieTrailers(paginationInput: PaginationInput): GetMovieTrailersReponse
    searchMovieTrailersByKeyValue(searchInput: SearchInput): SearchMovieTrailersResponse

    getPostgresMovie(id: String!): PostgresMovie
    getPostgresMovies(paginationInput: PaginationInput): GetPostgresMoviesResponse
    searchPostgresMoviesByKeyValue(searchInput: SearchInput): SearchPostgresMoviesResponse

    getProductionCompany(id: String!): ProductionCompany
    getProductionCompanies(paginationInput: PaginationInput): GetProductionCompaniesResponse
    searchProductionCompaniesByKeyValue(searchInput: SearchInput): SearchProductionCompaniesResponse

    getProductionCountry(id: String!): ProductionCountry
    getProductionCountries(paginationInput: PaginationInput): GetProductionCountriesResponse
    searchProductionCountriesByKeyValue(searchInput: SearchInput): SearchProductionCountriesResponse

    getSpokenLanguage(id: String!): SpokenLanguage
    getSpokenLanguages(paginationInput: PaginationInput): GetSpokenLanguageResponse
    searchSpokenLanguagesByKeyValue(searchInput: SearchInput): SearchSpokenLanguagesResponse
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

/***/ "../../lib/paginatedDbSEARCH.lib.ts":
/*!******************************************!*\
  !*** ../../lib/paginatedDbSEARCH.lib.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginatedDbSEARCH": () => (/* binding */ paginatedDbSEARCH)
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
const paginatedDbSEARCH = _asyncToGenerator(function*({ db , offset , amount , table , searchKey , value  }) {
    let get;
    const isArrayQuery = Array.isArray(value);
    console.log(isArrayQuery);
    if (!Number.isNaN(offset) && !Number.isNaN(amount)) {
        get = yield Promise.all(isArrayQuery ? [
            db.count(`* as count`).from(table).whereIn(searchKey, value).first(),
            db.select(`*`).from(table).whereIn(searchKey, value).offset(offset !== null && offset !== void 0 ? offset : NaN).limit(amount), 
        ] : [
            db.count(`* as count`).from(table).where({
                [searchKey]: value
            }).orWhere(searchKey, `ILIKE`, `%${value}%`).first(),
            db.select(`*`).from(table).where({
                [searchKey]: value
            }).orWhere(searchKey, `ILIKE`, `%${value}%`).offset(offset !== null && offset !== void 0 ? offset : NaN).limit(amount), 
        ]);
    } else {
        get = yield Promise.all(isArrayQuery ? [
            db.count(`* as count`).from(table).whereIn(searchKey, value).first(),
            db.select(`*`).from(table).whereIn(searchKey, value), 
        ] : [
            db.count(`* as count`).from(table).where({
                [searchKey]: value
            }).orWhere(searchKey, `ILIKE`, `%${value}%`).first(),
            db.select(`*`).from(table).where({
                [searchKey]: value
            }).orWhere(searchKey, `ILIKE`, `%${value}%`), 
        ]);
    }
    return get;
});


/***/ }),

/***/ "../../lib/serverErrorReducer.lib.ts":
/*!*******************************************!*\
  !*** ../../lib/serverErrorReducer.lib.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverErrorReducer": () => (/* binding */ serverErrorReducer)
/* harmony export */ });
const serverErrorReducer = (validations)=>{
    const { valid , errors , messages  } = validations.reduce((all, current)=>{
        if (!current.valid && !!all.valid) {
            Object.assign(all, {
                valid: false
            });
        }
        all.errors += current.errors;
        all.messages.concat(current.messages);
        return all;
    }, {
        valid: true,
        errors: 0,
        messages: []
    });
    return {
        valid,
        errors,
        messages
    };
};


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
const repaginate = ({ total  })=>{
    return {
        total: Number((ref = total === null || total === void 0 ? void 0 : total.count) !== null && ref !== void 0 ? ref : 0)
    };
};


/***/ }),

/***/ "../../lib/serverSearch.ts":
/*!*********************************!*\
  !*** ../../lib/serverSearch.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateSearchParams": () => (/* binding */ validateSearchParams)
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
const validateSearchParams = _asyncToGenerator(function*({ searchInput , db , table  }) {
    const searchKey = searchInput === null || searchInput === void 0 ? void 0 : searchInput.searchKey;
    let valid = true;
    let errors = 0;
    let messages = [];
    if (searchKey) {
        const isValid = yield db.schema.hasColumn(table, searchKey);
        if (!isValid) {
            valid = false;
            errors += 1;
            messages.push(`${searchKey} is not a column on ${table} and cannot be searched`);
        }
    }
    return {
        valid,
        errors,
        messages
    };
});


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
console.log(`hello?`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFdBQVc7QUFDM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi9jbGllbnRzL2F3c0F4aW9zLmNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZW52LnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9jb2xsZWN0aW9ucy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL2dlbnJlcy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL2ltYWdlLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvbW92aWUucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9tb3ZpZVRyYWlsZXJzLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcHJvZHVjdGlvbkNvbXBhbmllcy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Byb2R1Y3Rpb25Db3VudHJpZXMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Nwb2tlbkxhbmd1YWdlUmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3R5cGVEZWZzL3R5cGVEZWZzLnRzIiwid2VicGFjazovLy8uLi8uLi9rbmV4ZmlsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3NlcnZlckVycm9yUmVkdWNlci5saWIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3NlcnZlclNlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcG9zdGdyZXMva25leC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vdHlwZXMvdGFibGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC1zY2FsYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwia25leFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uLy4uL2V4cHJlc3Mvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBUElfR0FURVdBWSB9IGZyb20gJy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBhd3NBeGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEFQSV9HQVRFV0FZLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5jb25maWcoeyBwYXRoOiBgLi8uZW52YCB9KTtcblxuZXhwb3J0IGNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbmV4cG9ydCBjb25zdCBQT1NUR1JFU19IT1NUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19VU0VSID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUjtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QT1JUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QQVNTV09SRCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JEO1xuZXhwb3J0IGNvbnN0IFBPU1RHUkVTX0RCID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREI7XG5cbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQ7XG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfUFJPRFVDVElPTjtcbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfVEVTVCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTF9URVNUO1xuXG5leHBvcnQgY29uc3QgV0lERVNDUkVFTl9XQUxMUEFQRVJTID0gcHJvY2Vzcy5lbnYuV0lERVNDUkVFTl9XQUxMUEFQRVJTO1xuZXhwb3J0IGNvbnN0IFdBTExQQVBFUl9QTEFZID0gcHJvY2Vzcy5lbnYuV0FMTFBBUEVSX1BMQVk7XG5leHBvcnQgY29uc3QgV0FMTEhBVkVOID0gcHJvY2Vzcy5lbnYuV0FMTEhBVkVOO1xuXG5leHBvcnQgY29uc3QgQUxQSEFfQ09ERVJTID0gcHJvY2Vzcy5lbnYuQUxQSEFfQ09ERVJTO1xuZXhwb3J0IGNvbnN0IEVYUFJFU1MgPSBwcm9jZXNzLmVudi5FWFBSRVNTO1xuXG5leHBvcnQgY29uc3QgSU1BR0VTX0RJUiA9IHByb2Nlc3MuZW52LklNQUdFU19ESVI7XG5leHBvcnQgY29uc3QgTU9WSUVTX0RJUiA9IHByb2Nlc3MuZW52Lk1PVklFU19ESVI7XG5leHBvcnQgY29uc3QgVFZfRElSID0gcHJvY2Vzcy5lbnYuVFZfRElSO1xuZXhwb3J0IGNvbnN0IE1VU0lDX0RJUiA9IHByb2Nlc3MuZW52Lk1VU0lDX0RJUjtcblxuZXhwb3J0IGNvbnN0IFRNREJfQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWTtcblxuZXhwb3J0IGNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LkhUVFBfUE9SVDtcblxuZXhwb3J0IGNvbnN0IEFQSV9HQVRFV0FZID0gcHJvY2Vzcy5lbnYuQVBJX0dBVEVXQVk7XG4iLCJpbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHBhZ2luYXRlZERiU0VBUkNIIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYic7XG5pbXBvcnQgeyBzZXJ2ZXJFcnJvclJlZHVjZXIgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyRXJyb3JSZWR1Y2VyLmxpYic7XG5pbXBvcnQgeyByZXBhZ2luYXRlLCB2YWxpZGF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9saWIvc2VydmVyUGFnaW5hdGlvbi5saWInO1xuaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyU2VhcmNoJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEdldENvbGxlY3Rpb25zUmVzcG9uc2UsIFBhZ2luYXRpb24sIFBhZ2luYXRpb25JbnB1dCB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uUmVzb2x2ZXJzID0ge1xuICBnZXRDb2xsZWN0aW9uczogYXN5bmMgKFxuICAgIF86IGFueSxcbiAgICB7IHBhZ2luYXRpb25JbnB1dCB9OiB7IHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0IH0sXG4gICAgeyBkYiB9OiB7IGRiOiBLbmV4IH1cbiAgKTogUHJvbWlzZTxHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlPiA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb25zITogQ29sbGVjdGlvbltdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IDAsXG4gICAgfTtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYkNvbGxlY3Rpb25zXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPENvbGxlY3Rpb24+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLkNPTExFQ1RJT05TLFxuICAgICAgfSk7XG4gICAgICBjb2xsZWN0aW9ucyA9IGRiQ29sbGVjdGlvbnM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgY29sbGVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhwYWdpbmF0aW9uKTtcblxuICAgIHJldHVybiB7IGNvbGxlY3Rpb25zLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0Q29sbGVjdGlvbjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb247XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5DT0xMRUNUSU9OUylcbiAgICAgICAgLndoZXJlKHsgaWQgfSlcbiAgICAgICAgLnRoZW4oKGRiQ29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbGxlY3Rpb24gPSBkYkNvbGxlY3Rpb25bMF07XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9LFxuXG4gIHNlYXJjaENvbGxlY3Rpb25zQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgY29sbGVjdGlvbnMhOiBDb2xsZWN0aW9uW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBwYWdpbmF0aW9uSW5wdXQgPSBzZWFyY2hJbnB1dD8ucGFnaW5hdGlvbklucHV0O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0Py52YWx1ZTtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHNlcnZlckVycm9yUmVkdWNlcihbXG4gICAgICB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KSxcbiAgICAgIGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLkNPTExFQ1RJT05TIH0pLFxuICAgIF0pO1xuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJDb2xsZWN0aW9uc10gPSBhd2FpdCBwYWdpbmF0ZWREYlNFQVJDSDxDb2xsZWN0aW9uPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5DT0xMRUNUSU9OUyxcbiAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgY29sbGVjdGlvbnMgPSBkYkNvbGxlY3Rpb25zO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGNvbGxlY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29sbGVjdGlvbnMsIHBhZ2luYXRpb24gfTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHBhZ2luYXRlZERiU0VBUkNIIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYic7XG5pbXBvcnQgeyBzZXJ2ZXJFcnJvclJlZHVjZXIgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyRXJyb3JSZWR1Y2VyLmxpYic7XG5pbXBvcnQgeyByZXBhZ2luYXRlLCB2YWxpZGF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9saWIvc2VydmVyUGFnaW5hdGlvbi5saWInO1xuaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyU2VhcmNoJztcbmltcG9ydCB7IEdlbnJlLCBHZXRHZW5yZXNSZXNwb25zZSwgUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBnZW5yZXNSZXNvbHZlcnMgPSB7XG4gIGdldEdlbnJlczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSk6IFByb21pc2U8R2V0R2VucmVzUmVzcG9uc2U+ID0+IHtcbiAgICBsZXQgZ2VucmVzITogR2VucmVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiR2VucmVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPEdlbnJlPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5HRU5SRVMsXG4gICAgICB9KTtcbiAgICAgIGdlbnJlcyA9IGRiR2VucmVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGdlbnJlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbnJlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldEdlbnJlOiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgZ2VucmU7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5HRU5SRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkdlbnJlKSA9PiB7XG4gICAgICAgICAgZ2VucmUgPSBkYkdlbnJlWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VucmU7XG4gIH0sXG5cbiAgc2VhcmNoR2VucmVzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgZ2VucmVzOiBHZW5yZVtdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuICAgIGNvbnN0IHBhZ2luYXRpb25JbnB1dCA9IHNlYXJjaElucHV0Py5wYWdpbmF0aW9uSW5wdXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQgPz8gTmFOO1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50ID8/IE5hTjtcbiAgICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQ/LnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRQYWdpbmF0aW9uID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgY29uc3QgdmFsaWRTZWFyY2hQYXJhbXMgPSBhd2FpdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyh7IHNlYXJjaElucHV0LCBkYiwgdGFibGU6IFRhYmxlcy5HRU5SRVMgfSk7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSBzZXJ2ZXJFcnJvclJlZHVjZXIoW3ZhbGlkUGFnaW5hdGlvbiwgdmFsaWRTZWFyY2hQYXJhbXNdKTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiR2VucmVzXSA9IGF3YWl0IHBhZ2luYXRlZERiU0VBUkNIPEdlbnJlPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5HRU5SRVMsXG4gICAgICAgIHNlYXJjaEtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIGdlbnJlcyA9IGRiR2VucmVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGdlbnJlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbnJlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IHByb21pc2VzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgSU1BR0VTX0RJUiB9IGZyb20gJy4uLy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVJlc29sdmVycyA9IHtcbiAgZ2V0SW1hZ2VzOiBhc3luYyAoXzogYW55LCB7IHBhZ2UgfTogeyBwYWdlOiBudW1iZXIgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBwcm9taXNlcy5yZWFkZGlyKElNQUdFU19ESVI/LnRvU3RyaW5nKCkgPz8gYGApO1xuICAgICAgcmV0dXJuIGltYWdlcy5zbGljZShwYWdlICogMjAgLSAyMCwgcGFnZSAqIDIwKTtcbiAgICB9IGNhdGNoIChpbWFnZUVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGltYWdlRXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBhd3NBeGlvc0NsaWVudCB9IGZyb20gJy4uLy4uL2NsaWVudHMvYXdzQXhpb3MuY2xpZW50JztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQb3N0Z3Jlc01vdmllLCBRdWVyeUdldFBvc3RncmVzTW92aWVBcmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyU2VhcmNoJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHBhZ2luYXRlZERiU0VBUkNIIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYic7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZVJlc29sdmVycyA9IHtcbiAgZ2V0RHluYW1vTW92aWVzOiBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGR5bmFtb01vdmllcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhd3NBeGlvc0NsaWVudCh7XG4gICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgIHVybDogYC9tb3ZpZXNgLFxuICAgICAgfSk7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBkYXRhO1xuICAgIH0gY2F0Y2ggKG1vdmllRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobW92aWVFcnJvcik7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGR5bmFtb01vdmllcztcbiAgfSxcblxuICBnZXRQb3N0Z3Jlc01vdmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBwb3N0Z3Jlc01vdmllcyE6IFBvc3RncmVzTW92aWVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJNb3ZpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJHRVQ8UG9zdGdyZXNNb3ZpZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVTLFxuICAgICAgfSk7XG5cbiAgICAgIHBvc3RncmVzTW92aWVzID0gZGJNb3ZpZXM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcG9zdGdyZXNNb3ZpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0Z3Jlc01vdmllcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldFBvc3RncmVzTW92aWU6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogUXVlcnlHZXRQb3N0Z3Jlc01vdmllQXJncywgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoKVxuICAgICAgICAuZnJvbShUYWJsZXMuTU9WSUVTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJNb3ZpZSkgPT4ge1xuICAgICAgICAgIG1vdmllID0gZGJNb3ZpZVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZSA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XG4gICAgcmV0dXJuIG1vdmllO1xuICB9LFxuXG4gIHNlYXJjaFBvc3RncmVzTW92aWVzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcG9zdGdyZXNNb3ZpZXM6IFBvc3RncmVzTW92aWVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IHBhZ2luYXRpb25JbnB1dCA9IHNlYXJjaElucHV0Py5wYWdpbmF0aW9uSW5wdXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQgPz8gTmFOO1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50ID8/IE5hTjtcbiAgICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQ/LnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRQYWdpbmF0aW9uID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgY29uc3QgdmFsaWRTZWFyY2hQYXJhbXMgPSBhd2FpdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyh7IHNlYXJjaElucHV0LCBkYiwgdGFibGU6IFRhYmxlcy5NT1ZJRVMgfSk7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSBzZXJ2ZXJFcnJvclJlZHVjZXIoW3ZhbGlkUGFnaW5hdGlvbiwgdmFsaWRTZWFyY2hQYXJhbXNdKTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiUG9zdGdyZXNNb3ZpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UG9zdGdyZXNNb3ZpZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwb3N0Z3Jlc01vdmllcyA9IGRiUG9zdGdyZXNNb3ZpZXM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcG9zdGdyZXNNb3ZpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0Z3Jlc01vdmllcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgTW92aWVUcmFpbGVyLCBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxuZXhwb3J0IGNvbnN0IG1vdmllVHJhaWxlclJlc29sdmVycyA9IHtcbiAgZ2V0TW92aWVUcmFpbGVyczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBtb3ZpZVRyYWlsZXJzOiBNb3ZpZVRyYWlsZXJbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJNb3ZpZVRyYWlsZXJzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPE1vdmllVHJhaWxlcj4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldE1vdmllVHJhaWxlcjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IG1vdmllVHJhaWxlcjtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFX1RSQUlMRVJTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJNb3ZpZVRyYWlsZXIpID0+IHtcbiAgICAgICAgICBtb3ZpZVRyYWlsZXIgPSBkYk1vdmllVHJhaWxlclswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllVHJhaWxlcjtcbiAgfSxcblxuICBzZWFyY2hNb3ZpZVRyYWlsZXJzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVUcmFpbGVyczogTW92aWVUcmFpbGVyW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLk1PVklFX1RSQUlMRVJTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYk1vdmllVHJhaWxlcnNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8TW92aWVUcmFpbGVyPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5NT1ZJRV9UUkFJTEVSUyxcbiAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUHJvZHVjdGlvbkNvbXBhbnkgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdGlvbkNvbXBhbnlSZXNvbHZlcnMgPSB7XG4gIGdldFByb2R1Y3Rpb25Db21wYW5pZXM6IGFzeW5jIChfOiBhbnksIHsgcGFnaW5hdGlvbklucHV0IH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcHJvZHVjdGlvbkNvbXBhbmllcyE6IFByb2R1Y3Rpb25Db21wYW55W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db21wYW5pZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJHRVQ8UHJvZHVjdGlvbkNvbXBhbnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLk1PVklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gZGJQcm9kdWN0aW9uQ29tcGFuaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db21wYW5pZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ29tcGFuaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvbXBhbnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb21wYW55O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT01QQU5JRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbXBhbnkpID0+IHtcbiAgICAgICAgICBjb21wYW55ID0gZGJDb21wYW55WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFueTtcbiAgfSxcbiAgc2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHByb2R1Y3Rpb25Db21wYW5pZXM6IFByb2R1Y3Rpb25Db21wYW55W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db21wYW5pZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UHJvZHVjdGlvbkNvbXBhbnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gZGJQcm9kdWN0aW9uQ29tcGFuaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db21wYW5pZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ29tcGFuaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXNlcklucHV0RXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0ICogYXMgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IHBhZ2luYXRlZERiR0VUIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYic7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYlNFQVJDSCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYlNFQVJDSC5saWInO1xuaW1wb3J0IHsgc2VydmVyRXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlckVycm9yUmVkdWNlci5saWInO1xuaW1wb3J0IHsgcmVwYWdpbmF0ZSwgdmFsaWRhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclBhZ2luYXRpb24ubGliJztcbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclNlYXJjaCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQcm9kdWN0aW9uQ291bnRyeSB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyA9IHtcbiAgZ2V0UHJvZHVjdGlvbkNvdW50cmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBwcm9kdWN0aW9uQ291bnRyaWVzOiBQcm9kdWN0aW9uQ291bnRyeVtdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQ7XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQ7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJQcm9kdWN0aW9uQ291bnRyaWVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPFByb2R1Y3Rpb25Db3VudHJ5Pih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5QUk9EVUNUSU9OX0NPVU5UUklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ291bnRyaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvdW50cnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb3VudHJ5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT1VOVFJJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvdW50cnkpID0+IHtcbiAgICAgICAgICBjb3VudHJ5ID0gZGJDb3VudHJ5WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRyeTtcbiAgfSxcbiAgc2VhcmNoUHJvZHVjdGlvbkNvdW50cmllc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHByb2R1Y3Rpb25Db3VudHJpZXM6IFByb2R1Y3Rpb25Db3VudHJ5W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db3VudHJpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UHJvZHVjdGlvbkNvdW50cnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ291bnRyaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY29sbGVjdGlvblJlc29sdmVycyB9IGZyb20gJy4vY29sbGVjdGlvbnMucmVzb2x2ZXJzJztcbmltcG9ydCB7IGdlbnJlc1Jlc29sdmVycyB9IGZyb20gJy4vZ2VucmVzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBpbWFnZVJlc29sdmVycyB9IGZyb20gJy4vaW1hZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IG1vdmllUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgbW92aWVUcmFpbGVyUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZVRyYWlsZXJzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBwcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyB9IGZyb20gJy4vcHJvZHVjdGlvbkNvbXBhbmllcy5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgcHJvZHVjdGlvbkNvdW50cnlSZXNvbHZlcnMgfSBmcm9tICcuL3Byb2R1Y3Rpb25Db3VudHJpZXMucmVzb2x2ZXJzJztcbmltcG9ydCB7IHNwb2tlbkxhbmdhdWdlUmVzb2x2ZXJzIH0gZnJvbSAnLi9zcG9rZW5MYW5ndWFnZVJlc29sdmVycyc7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgLi4uY29sbGVjdGlvblJlc29sdmVycyxcbiAgICAuLi5pbWFnZVJlc29sdmVycyxcbiAgICAuLi5nZW5yZXNSZXNvbHZlcnMsXG4gICAgLi4ubW92aWVSZXNvbHZlcnMsXG4gICAgLi4ubW92aWVUcmFpbGVyUmVzb2x2ZXJzLFxuICAgIC4uLnByb2R1Y3Rpb25Db21wYW55UmVzb2x2ZXJzLFxuICAgIC4uLnByb2R1Y3Rpb25Db3VudHJ5UmVzb2x2ZXJzLFxuICAgIC4uLnNwb2tlbkxhbmdhdWdlUmVzb2x2ZXJzLFxuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgU3Bva2VuTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3Qgc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMgPSB7XG4gIGdldFNwb2tlbkxhbmd1YWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBzcG9rZW5MYW5ndWFnZXM6IFNwb2tlbkxhbmd1YWdlW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVUcmFpbGVyc10gPSBhd2FpdCBwYWdpbmF0ZWREYkdFVDxTcG9rZW5MYW5ndWFnZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgc3Bva2VuTGFuZ3VhZ2VzID0gZGJNb3ZpZVRyYWlsZXJzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNwb2tlbkxhbmd1YWdlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldFNwb2tlbkxhbmd1YWdlOiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbGFuZ3VhZ2U7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5TUE9LRU5fTEFOR1VBR0VTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJMYW5ndWFnZSkgPT4ge1xuICAgICAgICAgIGxhbmd1YWdlID0gZGJMYW5ndWFnZVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xuICB9LFxuXG4gIHNlYXJjaFNwb2tlbkxhbmd1YWdlc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHNwb2tlbkxhbmd1YWdlczogU3Bva2VuTGFuZ3VhZ2VbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcbiAgICBjb25zdCBwYWdpbmF0aW9uSW5wdXQgPSBzZWFyY2hJbnB1dD8ucGFnaW5hdGlvbklucHV0O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0Py52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkUGFnaW5hdGlvbiA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGNvbnN0IHZhbGlkU2VhcmNoUGFyYW1zID0gYXdhaXQgdmFsaWRhdGVTZWFyY2hQYXJhbXMoeyBzZWFyY2hJbnB1dCwgZGIsIHRhYmxlOiBUYWJsZXMuU1BPS0VOX0xBTkdVQUdFUyB9KTtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHNlcnZlckVycm9yUmVkdWNlcihbdmFsaWRQYWdpbmF0aW9uLCB2YWxpZFNlYXJjaFBhcmFtc10pO1xuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJTcG9rZW5MYW5ndWFnZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8U3Bva2VuTGFuZ3VhZ2U+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlNQT0tFTl9MQU5HVUFHRVMsXG4gICAgICAgIHNlYXJjaEtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IGRiU3Bva2VuTGFuZ3VhZ2VzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNwb2tlbkxhbmd1YWdlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgaW5wdXQgU2VhcmNoSW5wdXQge1xuICAgIHNlYXJjaEtleTogU3RyaW5nXG4gICAgdmFsdWU6IFN0cmluZ1xuICAgIHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0XG4gIH1cblxuICB0eXBlIFBhZ2luYXRpb24ge1xuICAgIHRvdGFsOiBJbnQhXG4gIH1cblxuICBpbnB1dCBQYWdpbmF0aW9uSW5wdXQge1xuICAgIG9mZnNldDogSW50XG4gICAgYW1vdW50OiBJbnRcbiAgfVxuXG4gIHR5cGUgQ29sbGVjdGlvbiB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgb3ZlcnZpZXc6IFN0cmluZyFcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIHBhcnRzOiBbU3RyaW5nXSFcbiAgfVxuXG4gIHR5cGUgR2V0Q29sbGVjdGlvbnNSZXNwb25zZSB7XG4gICAgY29sbGVjdGlvbnM6IFtDb2xsZWN0aW9uXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoQ29sbGVjdGlvbnNSZXNwb25zZSB7XG4gICAgY29sbGVjdGlvbnM6IFtDb2xsZWN0aW9uXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgRHluYW1vTW92aWUge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgaWQ6IFN0cmluZyFcbiAgICBtZWRpYVR5cGU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgSW1hZ2Uge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2VucmUge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBHZXRHZW5yZXNSZXNwb25zZSB7XG4gICAgZ2VucmVzOiBbR2VucmVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hHZW5yZXNSZXNwb25zZSB7XG4gICAgZ2VucmVzOiBbR2VucmVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBNb3ZpZVRyYWlsZXIge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBTdHJpbmchXG4gICAgdXBkYXRlZEF0OiBTdHJpbmchXG4gICAgaXNvXzYzOV8xOiBUaW1lc3RhbXBcbiAgICBpc29fMzE2Nl8xOiBUaW1lc3RhbXBcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBrZXk6IFN0cmluZ1xuICAgIHNpdGU6IFN0cmluZ1xuICAgIHNpemU6IEludFxuICAgIHR5cGU6IFN0cmluZ1xuICAgIG9mZmljaWFsOiBCb29sZWFuXG4gICAgcHVibGlzaGVkQXQ6IFRpbWVzdGFtcFxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIG1vdmllSWQ6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2V0TW92aWVUcmFpbGVyc1JlcG9uc2Uge1xuICAgIG1vdmllVHJhaWxlcnM6IFtNb3ZpZVRyYWlsZXJdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hNb3ZpZVRyYWlsZXJzUmVzcG9uc2Uge1xuICAgIG1vdmllVHJhaWxlcnM6IFtNb3ZpZVRyYWlsZXJdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBQb3N0Z3Jlc01vdmllIHtcbiAgICBhZHVsdDogQm9vbGVhbiFcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIGNvbGxlY3Rpb246IFN0cmluZ1xuICAgIGJ1ZGdldDogQmlnSW50IVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGZpbGVOYW1lOiBTdHJpbmchXG4gICAgZ2VucmVzOiBbU3RyaW5nXVxuICAgIGhvbWVwYWdlOiBTdHJpbmdcbiAgICBpZDogU3RyaW5nIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIGltZGJJZDogU3RyaW5nXG4gICAgb3JpZ2luYWxMYW5ndWFnZTogU3RyaW5nIVxuICAgIG9yaWdpbmFsVGl0bGU6IFN0cmluZyFcbiAgICBvdmVydmlldzogU3RyaW5nXG4gICAgcG9wdWxhcml0eTogRmxvYXRcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBwcm9kdWN0aW9uQ29tcGFuaWVzOiBbU3RyaW5nXVxuICAgIHByb2R1Y3Rpb25Db3VudHJpZXM6IFtTdHJpbmddXG4gICAgcmVsZWFzZURhdGU6IFN0cmluZyFcbiAgICByZXZlbnVlOiBCaWdJbnQhXG4gICAgcnVudGltZTogSW50XG4gICAgc3Bva2VuTGFuZ3VhZ2VzOiBbU3RyaW5nXVxuICAgIHN0YXR1czogU3RyaW5nIVxuICAgIHRhZ2xpbmU6IFN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdHJhaWxlcnM6IFtTdHJpbmddXG4gICAgdmlkZW86IEJvb2xlYW4hXG4gICAgdm90ZUF2ZXJhZ2U6IEZsb2F0IVxuICAgIHZvdGVDb3VudDogSW50IVxuICB9XG5cbiAgdHlwZSBHZXRQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlIHtcbiAgICBwb3N0Z3Jlc01vdmllczogW1Bvc3RncmVzTW92aWVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlIHtcbiAgICBwb3N0Z3Jlc01vdmllczogW1Bvc3RncmVzTW92aWVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBQcm9kdWN0aW9uQ29tcGFueSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbG9nb1BhdGg6IFN0cmluZ1xuICAgIG9yaWdpbkNvdW50cnk6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2V0UHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlIHtcbiAgICBwcm9kdWN0aW9uQ29tcGFuaWVzOiBbUHJvZHVjdGlvbkNvbXBhbnldXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hQcm9kdWN0aW9uQ29tcGFuaWVzUmVzcG9uc2Uge1xuICAgIHByb2R1Y3Rpb25Db21wYW5pZXM6IFtQcm9kdWN0aW9uQ29tcGFueV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFByb2R1Y3Rpb25Db3VudHJ5IHtcbiAgICBpZDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGlzb18zMTY2XzE6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEdldFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZSB7XG4gICAgcHJvZHVjdGlvbkNvdW50cmllczogW1Byb2R1Y3Rpb25Db3VudHJ5XVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoUHJvZHVjdGlvbkNvdW50cmllc1Jlc3BvbnNlIHtcbiAgICBwcm9kdWN0aW9uQ291bnRyaWVzOiBbUHJvZHVjdGlvbkNvdW50cnldXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTcG9rZW5MYW5ndWFnZSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBpc29fNjM5XzE6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbmdsaXNoTmFtZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIEdldFNwb2tlbkxhbmd1YWdlUmVzcG9uc2Uge1xuICAgIHNwb2tlbkxhbmd1YWdlczogW1Nwb2tlbkxhbmd1YWdlXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoU3Bva2VuTGFuZ3VhZ2VzUmVzcG9uc2Uge1xuICAgIHNwb2tlbkxhbmd1YWdlczogW1Nwb2tlbkxhbmd1YWdlXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGdldENvbGxlY3Rpb24oaWQ6IFN0cmluZyEpOiBDb2xsZWN0aW9uXG4gICAgZ2V0Q29sbGVjdGlvbnMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlXG4gICAgc2VhcmNoQ29sbGVjdGlvbnNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaENvbGxlY3Rpb25zUmVzcG9uc2VcblxuICAgIGdldEltYWdlcyhwYWdlOiBJbnQhKTogW0ltYWdlXVxuXG4gICAgZ2V0RHluYW1vTW92aWVzOiBbRHluYW1vTW92aWVdXG5cbiAgICBnZXRHZW5yZShpZDogU3RyaW5nISk6IEdlbnJlXG4gICAgZ2V0R2VucmVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0R2VucmVzUmVzcG9uc2VcbiAgICBzZWFyY2hHZW5yZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaEdlbnJlc1Jlc3BvbnNlXG5cbiAgICBnZXRNb3ZpZVRyYWlsZXIoaWQ6IFN0cmluZyEpOiBNb3ZpZVRyYWlsZXJcbiAgICBnZXRNb3ZpZVRyYWlsZXJzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0TW92aWVUcmFpbGVyc1JlcG9uc2VcbiAgICBzZWFyY2hNb3ZpZVRyYWlsZXJzQnlLZXlWYWx1ZShzZWFyY2hJbnB1dDogU2VhcmNoSW5wdXQpOiBTZWFyY2hNb3ZpZVRyYWlsZXJzUmVzcG9uc2VcblxuICAgIGdldFBvc3RncmVzTW92aWUoaWQ6IFN0cmluZyEpOiBQb3N0Z3Jlc01vdmllXG4gICAgZ2V0UG9zdGdyZXNNb3ZpZXMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlXG4gICAgc2VhcmNoUG9zdGdyZXNNb3ZpZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFBvc3RncmVzTW92aWVzUmVzcG9uc2VcblxuICAgIGdldFByb2R1Y3Rpb25Db21wYW55KGlkOiBTdHJpbmchKTogUHJvZHVjdGlvbkNvbXBhbnlcbiAgICBnZXRQcm9kdWN0aW9uQ29tcGFuaWVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0UHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlXG4gICAgc2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc0J5S2V5VmFsdWUoc2VhcmNoSW5wdXQ6IFNlYXJjaElucHV0KTogU2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlXG5cbiAgICBnZXRQcm9kdWN0aW9uQ291bnRyeShpZDogU3RyaW5nISk6IFByb2R1Y3Rpb25Db3VudHJ5XG4gICAgZ2V0UHJvZHVjdGlvbkNvdW50cmllcyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZVxuICAgIHNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZVxuXG4gICAgZ2V0U3Bva2VuTGFuZ3VhZ2UoaWQ6IFN0cmluZyEpOiBTcG9rZW5MYW5ndWFnZVxuICAgIGdldFNwb2tlbkxhbmd1YWdlcyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldFNwb2tlbkxhbmd1YWdlUmVzcG9uc2VcbiAgICBzZWFyY2hTcG9rZW5MYW5ndWFnZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFNwb2tlbkxhbmd1YWdlc1Jlc3BvbnNlXG4gIH1cbmA7XG4iLCJpbXBvcnQgdHlwZSB7IENvbmZpZyB9IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgUE9TVEdSRVNfVVNFUiwgUE9TVEdSRVNfUEFTU1dPUkQsIERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OLCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQsIE5PREVfRU5WIH0gZnJvbSAnLi9lbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICBjbGllbnQ6IGBwZ2AsXG4gIGNvbm5lY3Rpb246IHtcbiAgICBjb25uZWN0aW9uU3RyaW5nOiBOT0RFX0VOViA9PT0gYHByb2R1Y3Rpb25gID8gREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gOiBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQsXG4gICAgdXNlcjogUE9TVEdSRVNfVVNFUixcbiAgICBwYXNzd29yZDogUE9TVEdSRVNfUEFTU1dPUkQsXG4gIH0sXG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBkaXJlY3Rvcnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL3Bvc3RncmVzL21pZ3JhdGlvbnNgKSxcbiAgICBleHRlbnNpb246IGB0c2AsXG4gIH0sXG4gIHNlZWRzOiB7XG4gICAgZGlyZWN0b3J5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wb3N0Z3Jlcy9zZWVkcycpLFxuICAgIGV4dGVuc2lvbjogYHRzYCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG50eXBlIFByb3BzID0ge1xuICBkYjogS25leDtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdGFibGU6IFRhYmxlcztcbn07XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0ZWREYkdFVCA9IGFzeW5jIDxUPih7IGRiLCBvZmZzZXQsIGFtb3VudCwgdGFibGUgfTogUHJvcHMpOiBQcm9taXNlPFt7IGNvdW50OiBzdHJpbmcgfSwgVFtdXT4gPT4ge1xuICBsZXQgZ2V0OiBhbnk7XG5cbiAgaWYgKCFOdW1iZXIuaXNOYU4ob2Zmc2V0KSAmJiAhTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcbiAgICBnZXQgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBkYi5jb3VudChgKiBhcyBjb3VudGApLmZyb20odGFibGUpLmZpcnN0KCksXG4gICAgICBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgIC5vZmZzZXQob2Zmc2V0ID8/IE5hTilcbiAgICAgICAgLmxpbWl0KGFtb3VudCksXG4gICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0ID0gYXdhaXQgUHJvbWlzZS5hbGwoW2RiLmNvdW50KGAqIGFzIGNvdW50YCkuZnJvbSh0YWJsZSkuZmlyc3QoKSwgZGIuc2VsZWN0KGAqYCkuZnJvbSh0YWJsZSldKTtcbiAgfVxuXG4gIHJldHVybiBnZXQ7XG59O1xuIiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRiOiBLbmV4O1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGFtb3VudDogbnVtYmVyO1xuICB0YWJsZTogVGFibGVzO1xuICBzZWFyY2hLZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0ZWREYlNFQVJDSCA9IGFzeW5jIDxUPih7XG4gIGRiLFxuICBvZmZzZXQsXG4gIGFtb3VudCxcbiAgdGFibGUsXG4gIHNlYXJjaEtleSxcbiAgdmFsdWUsXG59OiBQcm9wcyk6IFByb21pc2U8W3sgY291bnQ6IHN0cmluZyB9LCBUW11dPiA9PiB7XG4gIGxldCBnZXQ6IGFueTtcblxuICBjb25zdCBpc0FycmF5UXVlcnkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcblxuICBjb25zb2xlLmxvZyhpc0FycmF5UXVlcnkpO1xuXG4gIGlmICghTnVtYmVyLmlzTmFOKG9mZnNldCkgJiYgIU51bWJlci5pc05hTihhbW91bnQpKSB7XG4gICAgZ2V0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBpc0FycmF5UXVlcnlcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBkYi5jb3VudChgKiBhcyBjb3VudGApLmZyb20odGFibGUpLndoZXJlSW4oc2VhcmNoS2V5LCB2YWx1ZSkuZmlyc3QoKSxcbiAgICAgICAgICAgIGRiXG4gICAgICAgICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAgICAgICAuZnJvbSh0YWJsZSlcbiAgICAgICAgICAgICAgLndoZXJlSW4oc2VhcmNoS2V5LCB2YWx1ZSlcbiAgICAgICAgICAgICAgLm9mZnNldChvZmZzZXQgPz8gTmFOKVxuICAgICAgICAgICAgICAubGltaXQoYW1vdW50KSxcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgZGJcbiAgICAgICAgICAgICAgLmNvdW50KGAqIGFzIGNvdW50YClcbiAgICAgICAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgICAgICAgIC53aGVyZSh7IFtzZWFyY2hLZXldOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAub3JXaGVyZShzZWFyY2hLZXksIGBJTElLRWAsIGAlJHt2YWx1ZX0lYClcbiAgICAgICAgICAgICAgLmZpcnN0KCksXG4gICAgICAgICAgICBkYlxuICAgICAgICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgICAgICAgIC53aGVyZSh7IFtzZWFyY2hLZXldOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAub3JXaGVyZShzZWFyY2hLZXksIGBJTElLRWAsIGAlJHt2YWx1ZX0lYClcbiAgICAgICAgICAgICAgLm9mZnNldChvZmZzZXQgPz8gTmFOKVxuICAgICAgICAgICAgICAubGltaXQoYW1vdW50KSxcbiAgICAgICAgICBdXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBnZXQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGlzQXJyYXlRdWVyeVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGRiLmNvdW50KGAqIGFzIGNvdW50YCkuZnJvbSh0YWJsZSkud2hlcmVJbihzZWFyY2hLZXksIHZhbHVlKS5maXJzdCgpLFxuICAgICAgICAgICAgZGIuc2VsZWN0KGAqYCkuZnJvbSh0YWJsZSkud2hlcmVJbihzZWFyY2hLZXksIHZhbHVlKSxcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgZGJcbiAgICAgICAgICAgICAgLmNvdW50KGAqIGFzIGNvdW50YClcbiAgICAgICAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgICAgICAgIC53aGVyZSh7IFtzZWFyY2hLZXldOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAub3JXaGVyZShzZWFyY2hLZXksIGBJTElLRWAsIGAlJHt2YWx1ZX0lYClcbiAgICAgICAgICAgICAgLmZpcnN0KCksXG4gICAgICAgICAgICBkYlxuICAgICAgICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgICAgICAgIC53aGVyZSh7IFtzZWFyY2hLZXldOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAub3JXaGVyZShzZWFyY2hLZXksIGBJTElLRWAsIGAlJHt2YWx1ZX0lYCksXG4gICAgICAgICAgXVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZ2V0O1xufTtcbiIsImltcG9ydCB7IFNlcnZlclZhbGlkYXRpb24gfSBmcm9tICcuLi90eXBlcy9zZXJ2ZXJWYWxpZGF0aW9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlckVycm9yUmVkdWNlciA9ICh2YWxpZGF0aW9uczogU2VydmVyVmFsaWRhdGlvbltdKSA9PiB7XG4gIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRpb25zLnJlZHVjZShcbiAgICAoYWxsOiBTZXJ2ZXJWYWxpZGF0aW9uLCBjdXJyZW50OiBTZXJ2ZXJWYWxpZGF0aW9uKTogU2VydmVyVmFsaWRhdGlvbiA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnQudmFsaWQgJiYgISFhbGwudmFsaWQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhbGwsIHsgdmFsaWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuXG4gICAgICBhbGwuZXJyb3JzICs9IGN1cnJlbnQuZXJyb3JzO1xuXG4gICAgICBhbGwubWVzc2FnZXMuY29uY2F0KGN1cnJlbnQubWVzc2FnZXMpO1xuXG4gICAgICByZXR1cm4gYWxsO1xuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICBlcnJvcnM6IDAsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXJyb3JzLFxuICAgIG1lc3NhZ2VzLFxuICB9O1xufTtcbiIsImltcG9ydCB7IFBhZ2luYXRpb25JbnB1dCB9IGZyb20gJy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBTZXJ2ZXJWYWxpZGF0aW9uIH0gZnJvbSAnLi4vdHlwZXMvc2VydmVyVmFsaWRhdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhZ2luYXRpb24gPSAoeyBvZmZzZXQsIGFtb3VudCB9OiBQYWdpbmF0aW9uSW5wdXQpOiBTZXJ2ZXJWYWxpZGF0aW9uID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgbGV0IGVycm9ycyA9IDA7XG4gIGxldCBtZXNzYWdlcyA9IFtdO1xuXG4gIGlmICgoTnVtYmVyLmlzTmFOKG9mZnNldCkgJiYgIU51bWJlci5pc05hTihhbW91bnQpKSB8fCAoTnVtYmVyLmlzTmFOKGFtb3VudCkgJiYgIU51bWJlci5pc05hTihvZmZzZXQpKSkge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gICAgbWVzc2FnZXMucHVzaChcbiAgICAgIGBFaXRoZXIgYm90aCBhbW91bnQgYW5kIG9mZnNldCBuZWVkIHRvIGJlIHByb3ZpZGVkIG9yIG5laXRoZXIsICR7b2Zmc2V0fSB3YXMgcHJvdmlkZWQgZm9yIG9mZnNldCBhbmQgJHthbW91bnR9IHdhcyBwcm92aWRlZCBmb3IgYW1vdW50LmBcbiAgICApO1xuICAgIGVycm9ycyArPSAxO1xuICB9XG5cbiAgaWYgKCghIW9mZnNldCAmJiBvZmZzZXQgPCAwKSB8fCAoISFhbW91bnQgJiYgYW1vdW50IDwgMCkpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICAgIG1lc3NhZ2VzLnB1c2goXG4gICAgICBgTmVpdGhlciBvZmZzZXQgbm9yIGFtb3VudCBjYW4gYmUgYSBuZWdhdGl2ZSBpbnRlZ2VyLCAke29mZnNldH0gd2FzIHByb3ZpZGVkIGZvciBvZmZzZXQgYW5kICR7YW1vdW50fSB3YXMgcHJvdmlkZWQgZm9yIGFtb3VudC5gXG4gICAgKTtcbiAgICBlcnJvcnMgKz0gMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXJyb3JzLFxuICAgIG1lc3NhZ2VzLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcGFnaW5hdGUgPSAoeyB0b3RhbCB9OiB7IHRvdGFsOiB7IGNvdW50OiBzdHJpbmcgfSB9KSA9PiAoe1xuICB0b3RhbDogTnVtYmVyKHRvdGFsPy5jb3VudCA/PyAwKSxcbn0pO1xuIiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBTZXJ2ZXJWYWxpZGF0aW9uIH0gZnJvbSAnLi4vdHlwZXMvc2VydmVyVmFsaWRhdGlvbi50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlYXJjaElucHV0OiBhbnk7XG4gIGRiOiBLbmV4O1xuICB0YWJsZTogVGFibGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUGFyYW1zID0gYXN5bmMgKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZSB9OiBQcm9wcyk6IFByb21pc2U8U2VydmVyVmFsaWRhdGlvbj4gPT4ge1xuICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuXG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGxldCBlcnJvcnMgPSAwO1xuICBsZXQgbWVzc2FnZXMgPSBbXTtcblxuICBpZiAoc2VhcmNoS2V5KSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGRiLnNjaGVtYS5oYXNDb2x1bW4odGFibGUsIHNlYXJjaEtleSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBlcnJvcnMgKz0gMTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goYCR7c2VhcmNoS2V5fSBpcyBub3QgYSBjb2x1bW4gb24gJHt0YWJsZX0gYW5kIGNhbm5vdCBiZSBzZWFyY2hlZGApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXJyb3JzLFxuICAgIG1lc3NhZ2VzLFxuICB9O1xufTtcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IGtuZXhmaWxlIGZyb20gJy4uL2tuZXhmaWxlJztcblxuZXhwb3J0IGRlZmF1bHQgS25leChrbmV4ZmlsZSk7XG4iLCJleHBvcnQgZW51bSBUYWJsZXMge1xuICBNT1ZJRVMgPSAnbW92aWVzJyxcbiAgU1BPS0VOX0xBTkdVQUdFUyA9ICdzcG9rZW5fbGFuZ3VhZ2VzJyxcbiAgR0VOUkVTID0gJ2dlbnJlcycsXG4gIFBST0RVQ1RJT05fQ09VTlRSSUVTID0gJ3Byb2R1Y3Rpb25fY291bnRyaWVzJyxcbiAgUFJPRFVDVElPTl9DT01QQU5JRVMgPSAncHJvZHVjdGlvbl9jb21wYW5pZXMnLFxuICBDT0xMRUNUSU9OUyA9ICdjb2xsZWN0aW9ucycsXG4gIE1PVklFX1RSQUlMRVJTID0gJ21vdmllX3RyYWlsZXJzJyxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXNjYWxhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia25leFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyB0eXBlRGVmcyB9IGZyb20gJy4uL2dyYXBocWwvdHlwZURlZnMvdHlwZURlZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZXJzIH0gZnJvbSAnLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcmVzb2x2ZXJzJztcbmltcG9ydCB7IEhUVFBfUE9SVCB9IGZyb20gJy4uL2Vudic7XG5pbXBvcnQgS25leCBmcm9tICcuLi9wb3N0Z3Jlcy9rbmV4JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgdHlwZURlZnMgYXMgc2NhbGFyVHlwZURlZnMsIHJlc29sdmVycyBhcyBzY2FsYXJSZXNvbHZlcnMgfSBmcm9tICdncmFwaHFsLXNjYWxhcnMnO1xuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdAZ3JhcGhxbC10b29scy9zY2hlbWEnO1xuXG5jb25zdCBjb3JzT3B0aW9ucyA9IHtcbiAgb3JpZ2luOiBgKmAsXG59O1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFNlcnZlcigpIHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuICBjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcbiAgICAgIHR5cGVEZWZzOiBbLi4uc2NhbGFyVHlwZURlZnMsIHR5cGVEZWZzXSxcbiAgICAgIHJlc29sdmVyczogeyAuLi5zY2FsYXJSZXNvbHZlcnMsIC4uLnJlc29sdmVycyB9LFxuICAgIH0pLFxuICAgIGNvbnRleHQ6ICgpID0+ICh7XG4gICAgICBkYjogS25leCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgYXBwLnVzZShtb3JnYW4oYDptZXRob2QgOnVybCA6c3RhdHVzIDpyZXNbY29udGVudC1sZW5ndGhdIC0gOnJlc3BvbnNlLXRpbWUgbXNgKSk7XG4gIGFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xuXG4gIGF3YWl0IHNlcnZlci5zdGFydCgpO1xuICBzZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwLCBwYXRoOiBgL2FwaS9ncmFwaHFsYCB9KTtcbiAgYXBwLmxpc3Rlbih7IHBvcnQ6IEhUVFBfUE9SVCB9LCAoKSA9PiBjb25zb2xlLmxvZyhgQXBwIGlzIGxpc3RlbmluZyBvbiBQb3J0ICR7SFRUUF9QT1JUfWApKTtcbiAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi4vLi4vaHRtbGApLCB7IGV4dGVuc2lvbnM6IFtgaHRtbGBdIH0pKTtcbn1cblxuY29uc29sZS5sb2coYGhlbGxvP2ApO1xuXG50cnkge1xuICBzdGFydFNlcnZlcigpO1xufSBjYXRjaCAoc2VydmVyRXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihzZXJ2ZXJFcnJvcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=