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
/* harmony export */   "API_GATEWAY": () => (/* binding */ API_GATEWAY),
/* harmony export */   "REDIS_PORT": () => (/* binding */ REDIS_PORT),
/* harmony export */   "APPLICATION_SECRET": () => (/* binding */ APPLICATION_SECRET)
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
const REDIS_PORT = process.env.REDIS_PORT;
const APPLICATION_SECRET = process.env.APPLICATION_SECRET;


/***/ }),

/***/ "../../express/handlers/streamMovie.ts":
/*!*********************************************!*\
  !*** ../../express/handlers/streamMovie.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "streamMovieHandler": () => (/* binding */ streamMovieHandler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../env */ "../../env.ts");



const streamMovieHandler = (req, res)=>{
    const range = req.headers.range;
    if (!range) {
        return res.status(400).send(`Requires Range Header`);
    }
    const videoPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(_env__WEBPACK_IMPORTED_MODULE_2__.MOVIES_DIR !== null && _env__WEBPACK_IMPORTED_MODULE_2__.MOVIES_DIR !== void 0 ? _env__WEBPACK_IMPORTED_MODULE_2__.MOVIES_DIR : ``, req.params.fileName);
    let videoSize;
    try {
        var ref, ref1;
        videoSize = (fs__WEBPACK_IMPORTED_MODULE_0___default()) === null || (fs__WEBPACK_IMPORTED_MODULE_0___default()) === void 0 ? void 0 : (ref = (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync)) === null || ref === void 0 ? void 0 : (ref1 = ref.call((fs__WEBPACK_IMPORTED_MODULE_0___default()), videoPath)) === null || ref1 === void 0 ? void 0 : ref1.size;
    } catch (fsError) {
        console.error(fsError);
        return res.status(404).send(`Video not found`);
    }
    if (!videoSize) {
        return res.status(404).send(`Video not found`);
    }
    const CHUNK_SIZE = Math.pow(10, 6);
    const start = Number(range === null || range === void 0 ? void 0 : range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        'Content-Range': `bytes ${start}-${end}/${videoSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength,
        'Content-Type': 'video/mp4'
    };
    res.writeHead(206, headers);
    const videoStream = fs__WEBPACK_IMPORTED_MODULE_0___default().createReadStream(videoPath, {
        start,
        end
    });
    return videoStream.pipe(res);
};


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
    getPostgresMovie: _asyncToGenerator(function*(_, { id  }, { db , redis  }) {
        console.log(redis);
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
    if (!Number.isNaN(offset) && !Number.isNaN(amount)) {
        get = yield Promise.all([
            db.count(`* as count`).from(table).where({
                [searchKey]: value
            }).orWhere(searchKey, `ILIKE`, `%${value}%`).first(),
            db.select(`*`).from(table).where({
                [searchKey]: value
            }).orWhere(searchKey, `ILIKE`, `%${value}%`).offset(offset !== null && offset !== void 0 ? offset : NaN).limit(amount), 
        ]);
    } else {
        get = yield Promise.all([
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

/***/ "../../types/serverRoutes.enum.ts":
/*!****************************************!*\
  !*** ../../types/serverRoutes.enum.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerRoutes": () => (/* binding */ ServerRoutes)
/* harmony export */ });
var ServerRoutes;
(function(ServerRoutes1) {
    ServerRoutes1["STREAM_MOVIE"] = `/stream/movie/:fileName`;
})(ServerRoutes || (ServerRoutes = {
}));


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

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-redis");

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

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

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

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");

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
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../env */ "../../env.ts");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _postgres_knex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../postgres/knex */ "../../postgres/knex.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _handlers_streamMovie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./handlers/streamMovie */ "../../express/handlers/streamMovie.ts");
/* harmony import */ var _types_serverRoutes_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../types/serverRoutes.enum */ "../../types/serverRoutes.enum.ts");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! connect-redis */ "connect-redis");
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(connect_redis__WEBPACK_IMPORTED_MODULE_16__);

















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
const key = fs__WEBPACK_IMPORTED_MODULE_6___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_10___default().resolve(__dirname + './../selfsigned.key'));
const cert = fs__WEBPACK_IMPORTED_MODULE_6___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_10___default().resolve(__dirname + './../selfsigned.crt'));
const RedisStore = connect_redis__WEBPACK_IMPORTED_MODULE_16___default()((express_session__WEBPACK_IMPORTED_MODULE_8___default()));
var ref;
const redisClient = redis__WEBPACK_IMPORTED_MODULE_15___default().createClient({
    host: `redis`,
    port: (ref = Number(_env__WEBPACK_IMPORTED_MODULE_7__.REDIS_PORT)) !== null && ref !== void 0 ? ref : NaN
});
function _startServer() {
    _startServer = _asyncToGenerator(function*() {
        const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
        const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.ApolloServer({
            schema: (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_12__.makeExecutableSchema)({
                typeDefs: [
                    ...graphql_scalars__WEBPACK_IMPORTED_MODULE_11__.typeDefs,
                    _graphql_typeDefs_typeDefs__WEBPACK_IMPORTED_MODULE_4__.typeDefs
                ],
                resolvers: _objectSpread({
                }, graphql_scalars__WEBPACK_IMPORTED_MODULE_11__.resolvers, _graphql_resolvers_resolvers__WEBPACK_IMPORTED_MODULE_5__.resolvers)
            }),
            context: ()=>({
                    db: _postgres_knex__WEBPACK_IMPORTED_MODULE_9__.default,
                    redis: redisClient
                })
        });
        app.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()(`:method :url :status :res[content-length] - :response-time ms`));
        app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(corsOptions));
        app.get(_types_serverRoutes_enum__WEBPACK_IMPORTED_MODULE_14__.ServerRoutes.STREAM_MOVIE, _handlers_streamMovie__WEBPACK_IMPORTED_MODULE_13__.streamMovieHandler);
        yield server.start();
        server.applyMiddleware({
            app,
            path: `/api/graphql`
        });
        app.listen({
            port: _env__WEBPACK_IMPORTED_MODULE_7__.HTTP_PORT
        }, ()=>console.log(`App is listening on Port ${_env__WEBPACK_IMPORTED_MODULE_7__.HTTP_PORT}`)
        );
        app.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_10___default().resolve(__dirname, `../../html`), {
            extensions: [
                `html`
            ]
        }));
        app.use(express_session__WEBPACK_IMPORTED_MODULE_8___default()({
            name: `nas_media_explorer`,
            store: new RedisStore({
                client: redisClient,
                disableTouch: true
            }),
            cookie: {
                maxAge: 1000000000,
                httpOnly: true,
                secure: false,
                sameSite: `lax`
            },
            saveUninitialized: false,
            secret: _env__WEBPACK_IMPORTED_MODULE_7__.APPLICATION_SECRET !== null && _env__WEBPACK_IMPORTED_MODULE_7__.APPLICATION_SECRET !== void 0 ? _env__WEBPACK_IMPORTED_MODULE_7__.APPLICATION_SECRET : ``,
            resave: false
        }));
        app.set('trust proxy', 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2IsQ0FBQyxRQUFRLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVztBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudHMvYXdzQXhpb3MuY2xpZW50LnRzIiwid2VicGFjazovLy8uLi8uLi9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2V4cHJlc3MvaGFuZGxlcnMvc3RyZWFtTW92aWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL2NvbGxlY3Rpb25zLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvZ2VucmVzLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvaW1hZ2UucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9tb3ZpZS5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL21vdmllVHJhaWxlcnMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9wcm9kdWN0aW9uQ29tcGFuaWVzLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcHJvZHVjdGlvbkNvdW50cmllcy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Jlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvc3Bva2VuTGFuZ3VhZ2VSZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvdHlwZURlZnMvdHlwZURlZnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2tuZXhmaWxlLnRzIiwid2VicGFjazovLy8uLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliLnRzIiwid2VicGFjazovLy8uLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliLnRzIiwid2VicGFjazovLy8uLi8uLi9saWIvc2VydmVyRXJyb3JSZWR1Y2VyLmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3NlcnZlclBhZ2luYXRpb24ubGliLnRzIiwid2VicGFjazovLy8uLi8uLi9saWIvc2VydmVyU2VhcmNoLnRzIiwid2VicGFjazovLy8uLi8uLi9wb3N0Z3Jlcy9rbmV4LnRzIiwid2VicGFjazovLy8uLi8uLi90eXBlcy9zZXJ2ZXJSb3V0ZXMuZW51bS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vdHlwZXMvdGFibGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0LXJlZGlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtc2NhbGFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtuZXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkaXNcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4uLy4uL2V4cHJlc3Mvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBBUElfR0FURVdBWSB9IGZyb20gJy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBhd3NBeGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEFQSV9HQVRFV0FZLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdkb3RlbnYnO1xuXG5jb25maWcoeyBwYXRoOiBgLi8uZW52YCB9KTtcblxuZXhwb3J0IGNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG5cbmV4cG9ydCBjb25zdCBQT1NUR1JFU19IT1NUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19VU0VSID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUjtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QT1JUID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19QQVNTV09SRCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JEO1xuZXhwb3J0IGNvbnN0IFBPU1RHUkVTX0RCID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREI7XG5cbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQ7XG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfUFJPRFVDVElPTjtcbmV4cG9ydCBjb25zdCBEQVRBQkFTRV9VUkxfVEVTVCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTF9URVNUO1xuXG5leHBvcnQgY29uc3QgV0lERVNDUkVFTl9XQUxMUEFQRVJTID0gcHJvY2Vzcy5lbnYuV0lERVNDUkVFTl9XQUxMUEFQRVJTO1xuZXhwb3J0IGNvbnN0IFdBTExQQVBFUl9QTEFZID0gcHJvY2Vzcy5lbnYuV0FMTFBBUEVSX1BMQVk7XG5leHBvcnQgY29uc3QgV0FMTEhBVkVOID0gcHJvY2Vzcy5lbnYuV0FMTEhBVkVOO1xuXG5leHBvcnQgY29uc3QgQUxQSEFfQ09ERVJTID0gcHJvY2Vzcy5lbnYuQUxQSEFfQ09ERVJTO1xuZXhwb3J0IGNvbnN0IEVYUFJFU1MgPSBwcm9jZXNzLmVudi5FWFBSRVNTO1xuXG5leHBvcnQgY29uc3QgSU1BR0VTX0RJUiA9IHByb2Nlc3MuZW52LklNQUdFU19ESVI7XG5leHBvcnQgY29uc3QgTU9WSUVTX0RJUiA9IHByb2Nlc3MuZW52Lk1PVklFU19ESVI7XG5leHBvcnQgY29uc3QgVFZfRElSID0gcHJvY2Vzcy5lbnYuVFZfRElSO1xuZXhwb3J0IGNvbnN0IE1VU0lDX0RJUiA9IHByb2Nlc3MuZW52Lk1VU0lDX0RJUjtcblxuZXhwb3J0IGNvbnN0IFRNREJfQVBJX0tFWSA9IHByb2Nlc3MuZW52LlRNREJfQVBJX0tFWTtcblxuZXhwb3J0IGNvbnN0IEhUVFBfUE9SVCA9IHByb2Nlc3MuZW52LkhUVFBfUE9SVDtcblxuZXhwb3J0IGNvbnN0IEFQSV9HQVRFV0FZID0gcHJvY2Vzcy5lbnYuQVBJX0dBVEVXQVk7XG5cbmV4cG9ydCBjb25zdCBSRURJU19QT1JUID0gcHJvY2Vzcy5lbnYuUkVESVNfUE9SVDtcblxuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkFQUExJQ0FUSU9OX1NFQ1JFVDtcbiIsImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBNT1ZJRVNfRElSIH0gZnJvbSAnLi4vLi4vZW52JztcblxuZXhwb3J0IGNvbnN0IHN0cmVhbU1vdmllSGFuZGxlciA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgcmFuZ2UgPSByZXEuaGVhZGVycy5yYW5nZTtcblxuICBpZiAoIXJhbmdlKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBSZXF1aXJlcyBSYW5nZSBIZWFkZXJgKTtcbiAgfVxuXG4gIGNvbnN0IHZpZGVvUGF0aCA9IHBhdGguam9pbihNT1ZJRVNfRElSID8/IGBgLCByZXEucGFyYW1zLmZpbGVOYW1lKTtcbiAgbGV0IHZpZGVvU2l6ZTtcbiAgdHJ5IHtcbiAgICB2aWRlb1NpemUgPSBmcz8uc3RhdFN5bmM/Lih2aWRlb1BhdGgpPy5zaXplO1xuICB9IGNhdGNoIChmc0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihmc0Vycm9yKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoYFZpZGVvIG5vdCBmb3VuZGApO1xuICB9XG5cbiAgaWYgKCF2aWRlb1NpemUpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoYFZpZGVvIG5vdCBmb3VuZGApO1xuICB9XG5cbiAgY29uc3QgQ0hVTktfU0laRSA9IDEwICoqIDY7XG4gIGNvbnN0IHN0YXJ0ID0gTnVtYmVyKHJhbmdlPy5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgY29uc3QgZW5kID0gTWF0aC5taW4oc3RhcnQgKyBDSFVOS19TSVpFLCB2aWRlb1NpemUgLSAxKTtcblxuICBjb25zdCBjb250ZW50TGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxO1xuICBjb25zdCBoZWFkZXJzID0ge1xuICAgICdDb250ZW50LVJhbmdlJzogYGJ5dGVzICR7c3RhcnR9LSR7ZW5kfS8ke3ZpZGVvU2l6ZX1gLFxuICAgICdBY2NlcHQtUmFuZ2VzJzogJ2J5dGVzJyxcbiAgICAnQ29udGVudC1MZW5ndGgnOiBjb250ZW50TGVuZ3RoLFxuICAgICdDb250ZW50LVR5cGUnOiAndmlkZW8vbXA0JyxcbiAgfTtcblxuICByZXMud3JpdGVIZWFkKDIwNiwgaGVhZGVycyk7XG4gIGNvbnN0IHZpZGVvU3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbSh2aWRlb1BhdGgsIHsgc3RhcnQsIGVuZCB9KTtcblxuICByZXR1cm4gdmlkZW9TdHJlYW0ucGlwZShyZXMpO1xufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgR2V0Q29sbGVjdGlvbnNSZXNwb25zZSwgUGFnaW5hdGlvbiwgUGFnaW5hdGlvbklucHV0IH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25SZXNvbHZlcnMgPSB7XG4gIGdldENvbGxlY3Rpb25zOiBhc3luYyAoXG4gICAgXzogYW55LFxuICAgIHsgcGFnaW5hdGlvbklucHV0IH06IHsgcGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQgfSxcbiAgICB7IGRiIH06IHsgZGI6IEtuZXggfVxuICApOiBQcm9taXNlPEdldENvbGxlY3Rpb25zUmVzcG9uc2U+ID0+IHtcbiAgICBsZXQgY29sbGVjdGlvbnMhOiBDb2xsZWN0aW9uW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogMCxcbiAgICB9O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiQ29sbGVjdGlvbnNdID0gYXdhaXQgcGFnaW5hdGVkRGJHRVQ8Q29sbGVjdGlvbj4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuQ09MTEVDVElPTlMsXG4gICAgICB9KTtcbiAgICAgIGNvbGxlY3Rpb25zID0gZGJDb2xsZWN0aW9ucztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbGxlY3Rpb25zLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0Q29sbGVjdGlvbjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb247XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5DT0xMRUNUSU9OUylcbiAgICAgICAgLndoZXJlKHsgaWQgfSlcbiAgICAgICAgLnRoZW4oKGRiQ29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbGxlY3Rpb24gPSBkYkNvbGxlY3Rpb25bMF07XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9LFxuXG4gIHNlYXJjaENvbGxlY3Rpb25zQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgY29sbGVjdGlvbnMhOiBDb2xsZWN0aW9uW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBwYWdpbmF0aW9uSW5wdXQgPSBzZWFyY2hJbnB1dD8ucGFnaW5hdGlvbklucHV0O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0Py52YWx1ZTtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHNlcnZlckVycm9yUmVkdWNlcihbXG4gICAgICB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KSxcbiAgICAgIGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLkNPTExFQ1RJT05TIH0pLFxuICAgIF0pO1xuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJDb2xsZWN0aW9uc10gPSBhd2FpdCBwYWdpbmF0ZWREYlNFQVJDSDxDb2xsZWN0aW9uPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5DT0xMRUNUSU9OUyxcbiAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgY29sbGVjdGlvbnMgPSBkYkNvbGxlY3Rpb25zO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGNvbGxlY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29sbGVjdGlvbnMsIHBhZ2luYXRpb24gfTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHBhZ2luYXRlZERiU0VBUkNIIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYic7XG5pbXBvcnQgeyBzZXJ2ZXJFcnJvclJlZHVjZXIgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyRXJyb3JSZWR1Y2VyLmxpYic7XG5pbXBvcnQgeyByZXBhZ2luYXRlLCB2YWxpZGF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9saWIvc2VydmVyUGFnaW5hdGlvbi5saWInO1xuaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyU2VhcmNoJztcbmltcG9ydCB7IEdlbnJlLCBHZXRHZW5yZXNSZXNwb25zZSwgUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBnZW5yZXNSZXNvbHZlcnMgPSB7XG4gIGdldEdlbnJlczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSk6IFByb21pc2U8R2V0R2VucmVzUmVzcG9uc2U+ID0+IHtcbiAgICBsZXQgZ2VucmVzITogR2VucmVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiR2VucmVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPEdlbnJlPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5HRU5SRVMsXG4gICAgICB9KTtcbiAgICAgIGdlbnJlcyA9IGRiR2VucmVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGdlbnJlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbnJlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldEdlbnJlOiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgZ2VucmU7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5HRU5SRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkdlbnJlKSA9PiB7XG4gICAgICAgICAgZ2VucmUgPSBkYkdlbnJlWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VucmU7XG4gIH0sXG5cbiAgc2VhcmNoR2VucmVzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgZ2VucmVzOiBHZW5yZVtdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuICAgIGNvbnN0IHBhZ2luYXRpb25JbnB1dCA9IHNlYXJjaElucHV0Py5wYWdpbmF0aW9uSW5wdXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQgPz8gTmFOO1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50ID8/IE5hTjtcbiAgICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQ/LnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRQYWdpbmF0aW9uID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgY29uc3QgdmFsaWRTZWFyY2hQYXJhbXMgPSBhd2FpdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyh7IHNlYXJjaElucHV0LCBkYiwgdGFibGU6IFRhYmxlcy5HRU5SRVMgfSk7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSBzZXJ2ZXJFcnJvclJlZHVjZXIoW3ZhbGlkUGFnaW5hdGlvbiwgdmFsaWRTZWFyY2hQYXJhbXNdKTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiR2VucmVzXSA9IGF3YWl0IHBhZ2luYXRlZERiU0VBUkNIPEdlbnJlPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5HRU5SRVMsXG4gICAgICAgIHNlYXJjaEtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIGdlbnJlcyA9IGRiR2VucmVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIGdlbnJlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdlbnJlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IHByb21pc2VzIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgSU1BR0VTX0RJUiB9IGZyb20gJy4uLy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBpbWFnZVJlc29sdmVycyA9IHtcbiAgZ2V0SW1hZ2VzOiBhc3luYyAoXzogYW55LCB7IHBhZ2UgfTogeyBwYWdlOiBudW1iZXIgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBwcm9taXNlcy5yZWFkZGlyKElNQUdFU19ESVI/LnRvU3RyaW5nKCkgPz8gYGApO1xuICAgICAgcmV0dXJuIGltYWdlcy5zbGljZShwYWdlICogMjAgLSAyMCwgcGFnZSAqIDIwKTtcbiAgICB9IGNhdGNoIChpbWFnZUVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGltYWdlRXJyb3IpO1xuICAgIH1cbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBhd3NBeGlvc0NsaWVudCB9IGZyb20gJy4uLy4uL2NsaWVudHMvYXdzQXhpb3MuY2xpZW50JztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQb3N0Z3Jlc01vdmllLCBRdWVyeUdldFBvc3RncmVzTW92aWVBcmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyU2VhcmNoJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHBhZ2luYXRlZERiU0VBUkNIIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYic7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZVJlc29sdmVycyA9IHtcbiAgZ2V0RHluYW1vTW92aWVzOiBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGR5bmFtb01vdmllcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhd3NBeGlvc0NsaWVudCh7XG4gICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgIHVybDogYC9tb3ZpZXNgLFxuICAgICAgfSk7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBkYXRhO1xuICAgIH0gY2F0Y2ggKG1vdmllRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobW92aWVFcnJvcik7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGR5bmFtb01vdmllcztcbiAgfSxcblxuICBnZXRQb3N0Z3Jlc01vdmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBwb3N0Z3Jlc01vdmllcyE6IFBvc3RncmVzTW92aWVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJNb3ZpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJHRVQ8UG9zdGdyZXNNb3ZpZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVTLFxuICAgICAgfSk7XG5cbiAgICAgIHBvc3RncmVzTW92aWVzID0gZGJNb3ZpZXM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcG9zdGdyZXNNb3ZpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0Z3Jlc01vdmllcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldFBvc3RncmVzTW92aWU6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogUXVlcnlHZXRQb3N0Z3Jlc01vdmllQXJncywgeyBkYiwgcmVkaXMgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVkaXMpO1xuICAgIGxldCBtb3ZpZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5mcm9tKFRhYmxlcy5NT1ZJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYk1vdmllKSA9PiB7XG4gICAgICAgICAgbW92aWUgPSBkYk1vdmllWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIG1vdmllID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllO1xuICB9LFxuXG4gIHNlYXJjaFBvc3RncmVzTW92aWVzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcG9zdGdyZXNNb3ZpZXM6IFBvc3RncmVzTW92aWVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IHBhZ2luYXRpb25JbnB1dCA9IHNlYXJjaElucHV0Py5wYWdpbmF0aW9uSW5wdXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQgPz8gTmFOO1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50ID8/IE5hTjtcbiAgICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQ/LnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRQYWdpbmF0aW9uID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgY29uc3QgdmFsaWRTZWFyY2hQYXJhbXMgPSBhd2FpdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyh7IHNlYXJjaElucHV0LCBkYiwgdGFibGU6IFRhYmxlcy5NT1ZJRVMgfSk7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSBzZXJ2ZXJFcnJvclJlZHVjZXIoW3ZhbGlkUGFnaW5hdGlvbiwgdmFsaWRTZWFyY2hQYXJhbXNdKTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiUG9zdGdyZXNNb3ZpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UG9zdGdyZXNNb3ZpZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwb3N0Z3Jlc01vdmllcyA9IGRiUG9zdGdyZXNNb3ZpZXM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcG9zdGdyZXNNb3ZpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0Z3Jlc01vdmllcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgTW92aWVUcmFpbGVyLCBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxuZXhwb3J0IGNvbnN0IG1vdmllVHJhaWxlclJlc29sdmVycyA9IHtcbiAgZ2V0TW92aWVUcmFpbGVyczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBtb3ZpZVRyYWlsZXJzOiBNb3ZpZVRyYWlsZXJbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJNb3ZpZVRyYWlsZXJzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPE1vdmllVHJhaWxlcj4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldE1vdmllVHJhaWxlcjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IG1vdmllVHJhaWxlcjtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFX1RSQUlMRVJTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJNb3ZpZVRyYWlsZXIpID0+IHtcbiAgICAgICAgICBtb3ZpZVRyYWlsZXIgPSBkYk1vdmllVHJhaWxlclswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllVHJhaWxlcjtcbiAgfSxcblxuICBzZWFyY2hNb3ZpZVRyYWlsZXJzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVUcmFpbGVyczogTW92aWVUcmFpbGVyW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLk1PVklFX1RSQUlMRVJTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYk1vdmllVHJhaWxlcnNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8TW92aWVUcmFpbGVyPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5NT1ZJRV9UUkFJTEVSUyxcbiAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUHJvZHVjdGlvbkNvbXBhbnkgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdGlvbkNvbXBhbnlSZXNvbHZlcnMgPSB7XG4gIGdldFByb2R1Y3Rpb25Db21wYW5pZXM6IGFzeW5jIChfOiBhbnksIHsgcGFnaW5hdGlvbklucHV0IH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcHJvZHVjdGlvbkNvbXBhbmllcyE6IFByb2R1Y3Rpb25Db21wYW55W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db21wYW5pZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJHRVQ8UHJvZHVjdGlvbkNvbXBhbnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLk1PVklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gZGJQcm9kdWN0aW9uQ29tcGFuaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db21wYW5pZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ29tcGFuaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvbXBhbnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb21wYW55O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT01QQU5JRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbXBhbnkpID0+IHtcbiAgICAgICAgICBjb21wYW55ID0gZGJDb21wYW55WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFueTtcbiAgfSxcbiAgc2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHByb2R1Y3Rpb25Db21wYW5pZXM6IFByb2R1Y3Rpb25Db21wYW55W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db21wYW5pZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UHJvZHVjdGlvbkNvbXBhbnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gZGJQcm9kdWN0aW9uQ29tcGFuaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db21wYW5pZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ29tcGFuaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXNlcklucHV0RXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0ICogYXMgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IHBhZ2luYXRlZERiR0VUIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYic7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYlNFQVJDSCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYlNFQVJDSC5saWInO1xuaW1wb3J0IHsgc2VydmVyRXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlckVycm9yUmVkdWNlci5saWInO1xuaW1wb3J0IHsgcmVwYWdpbmF0ZSwgdmFsaWRhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclBhZ2luYXRpb24ubGliJztcbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclNlYXJjaCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQcm9kdWN0aW9uQ291bnRyeSB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyA9IHtcbiAgZ2V0UHJvZHVjdGlvbkNvdW50cmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBwcm9kdWN0aW9uQ291bnRyaWVzOiBQcm9kdWN0aW9uQ291bnRyeVtdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQ7XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQ7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJQcm9kdWN0aW9uQ291bnRyaWVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPFByb2R1Y3Rpb25Db3VudHJ5Pih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5QUk9EVUNUSU9OX0NPVU5UUklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ291bnRyaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvdW50cnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb3VudHJ5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT1VOVFJJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvdW50cnkpID0+IHtcbiAgICAgICAgICBjb3VudHJ5ID0gZGJDb3VudHJ5WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRyeTtcbiAgfSxcbiAgc2VhcmNoUHJvZHVjdGlvbkNvdW50cmllc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHByb2R1Y3Rpb25Db3VudHJpZXM6IFByb2R1Y3Rpb25Db3VudHJ5W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db3VudHJpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UHJvZHVjdGlvbkNvdW50cnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ291bnRyaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY29sbGVjdGlvblJlc29sdmVycyB9IGZyb20gJy4vY29sbGVjdGlvbnMucmVzb2x2ZXJzJztcbmltcG9ydCB7IGdlbnJlc1Jlc29sdmVycyB9IGZyb20gJy4vZ2VucmVzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBpbWFnZVJlc29sdmVycyB9IGZyb20gJy4vaW1hZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IG1vdmllUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgbW92aWVUcmFpbGVyUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZVRyYWlsZXJzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBwcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyB9IGZyb20gJy4vcHJvZHVjdGlvbkNvbXBhbmllcy5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgcHJvZHVjdGlvbkNvdW50cnlSZXNvbHZlcnMgfSBmcm9tICcuL3Byb2R1Y3Rpb25Db3VudHJpZXMucmVzb2x2ZXJzJztcbmltcG9ydCB7IHNwb2tlbkxhbmdhdWdlUmVzb2x2ZXJzIH0gZnJvbSAnLi9zcG9rZW5MYW5ndWFnZVJlc29sdmVycyc7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgLi4uY29sbGVjdGlvblJlc29sdmVycyxcbiAgICAuLi5pbWFnZVJlc29sdmVycyxcbiAgICAuLi5nZW5yZXNSZXNvbHZlcnMsXG4gICAgLi4ubW92aWVSZXNvbHZlcnMsXG4gICAgLi4ubW92aWVUcmFpbGVyUmVzb2x2ZXJzLFxuICAgIC4uLnByb2R1Y3Rpb25Db21wYW55UmVzb2x2ZXJzLFxuICAgIC4uLnByb2R1Y3Rpb25Db3VudHJ5UmVzb2x2ZXJzLFxuICAgIC4uLnNwb2tlbkxhbmdhdWdlUmVzb2x2ZXJzLFxuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgU3Bva2VuTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3Qgc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMgPSB7XG4gIGdldFNwb2tlbkxhbmd1YWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBzcG9rZW5MYW5ndWFnZXM6IFNwb2tlbkxhbmd1YWdlW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVUcmFpbGVyc10gPSBhd2FpdCBwYWdpbmF0ZWREYkdFVDxTcG9rZW5MYW5ndWFnZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgc3Bva2VuTGFuZ3VhZ2VzID0gZGJNb3ZpZVRyYWlsZXJzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNwb2tlbkxhbmd1YWdlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldFNwb2tlbkxhbmd1YWdlOiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbGFuZ3VhZ2U7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5TUE9LRU5fTEFOR1VBR0VTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJMYW5ndWFnZSkgPT4ge1xuICAgICAgICAgIGxhbmd1YWdlID0gZGJMYW5ndWFnZVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xuICB9LFxuXG4gIHNlYXJjaFNwb2tlbkxhbmd1YWdlc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHNwb2tlbkxhbmd1YWdlczogU3Bva2VuTGFuZ3VhZ2VbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcbiAgICBjb25zdCBwYWdpbmF0aW9uSW5wdXQgPSBzZWFyY2hJbnB1dD8ucGFnaW5hdGlvbklucHV0O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0Py52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkUGFnaW5hdGlvbiA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGNvbnN0IHZhbGlkU2VhcmNoUGFyYW1zID0gYXdhaXQgdmFsaWRhdGVTZWFyY2hQYXJhbXMoeyBzZWFyY2hJbnB1dCwgZGIsIHRhYmxlOiBUYWJsZXMuU1BPS0VOX0xBTkdVQUdFUyB9KTtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHNlcnZlckVycm9yUmVkdWNlcihbdmFsaWRQYWdpbmF0aW9uLCB2YWxpZFNlYXJjaFBhcmFtc10pO1xuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJTcG9rZW5MYW5ndWFnZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8U3Bva2VuTGFuZ3VhZ2U+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlNQT0tFTl9MQU5HVUFHRVMsXG4gICAgICAgIHNlYXJjaEtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IGRiU3Bva2VuTGFuZ3VhZ2VzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNwb2tlbkxhbmd1YWdlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgaW5wdXQgU2VhcmNoSW5wdXQge1xuICAgIHNlYXJjaEtleTogU3RyaW5nXG4gICAgdmFsdWU6IFN0cmluZ1xuICAgIHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0XG4gIH1cblxuICB0eXBlIFBhZ2luYXRpb24ge1xuICAgIHRvdGFsOiBJbnQhXG4gIH1cblxuICBpbnB1dCBQYWdpbmF0aW9uSW5wdXQge1xuICAgIG9mZnNldDogSW50XG4gICAgYW1vdW50OiBJbnRcbiAgfVxuXG4gIHR5cGUgQ29sbGVjdGlvbiB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgb3ZlcnZpZXc6IFN0cmluZyFcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIHBhcnRzOiBbU3RyaW5nXSFcbiAgfVxuXG4gIHR5cGUgR2V0Q29sbGVjdGlvbnNSZXNwb25zZSB7XG4gICAgY29sbGVjdGlvbnM6IFtDb2xsZWN0aW9uXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoQ29sbGVjdGlvbnNSZXNwb25zZSB7XG4gICAgY29sbGVjdGlvbnM6IFtDb2xsZWN0aW9uXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgRHluYW1vTW92aWUge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgaWQ6IFN0cmluZyFcbiAgICBtZWRpYVR5cGU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgSW1hZ2Uge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2VucmUge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBHZXRHZW5yZXNSZXNwb25zZSB7XG4gICAgZ2VucmVzOiBbR2VucmVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hHZW5yZXNSZXNwb25zZSB7XG4gICAgZ2VucmVzOiBbR2VucmVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBNb3ZpZVRyYWlsZXIge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBTdHJpbmchXG4gICAgdXBkYXRlZEF0OiBTdHJpbmchXG4gICAgaXNvXzYzOV8xOiBUaW1lc3RhbXBcbiAgICBpc29fMzE2Nl8xOiBUaW1lc3RhbXBcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBrZXk6IFN0cmluZ1xuICAgIHNpdGU6IFN0cmluZ1xuICAgIHNpemU6IEludFxuICAgIHR5cGU6IFN0cmluZ1xuICAgIG9mZmljaWFsOiBCb29sZWFuXG4gICAgcHVibGlzaGVkQXQ6IFRpbWVzdGFtcFxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIG1vdmllSWQ6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2V0TW92aWVUcmFpbGVyc1JlcG9uc2Uge1xuICAgIG1vdmllVHJhaWxlcnM6IFtNb3ZpZVRyYWlsZXJdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hNb3ZpZVRyYWlsZXJzUmVzcG9uc2Uge1xuICAgIG1vdmllVHJhaWxlcnM6IFtNb3ZpZVRyYWlsZXJdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBQb3N0Z3Jlc01vdmllIHtcbiAgICBhZHVsdDogQm9vbGVhbiFcbiAgICBiYWNrZHJvcFBhdGg6IFN0cmluZ1xuICAgIGNvbGxlY3Rpb246IFN0cmluZ1xuICAgIGJ1ZGdldDogQmlnSW50IVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGZpbGVOYW1lOiBTdHJpbmchXG4gICAgZ2VucmVzOiBbU3RyaW5nXVxuICAgIGhvbWVwYWdlOiBTdHJpbmdcbiAgICBpZDogU3RyaW5nIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIGltZGJJZDogU3RyaW5nXG4gICAgb3JpZ2luYWxMYW5ndWFnZTogU3RyaW5nIVxuICAgIG9yaWdpbmFsVGl0bGU6IFN0cmluZyFcbiAgICBvdmVydmlldzogU3RyaW5nXG4gICAgcG9wdWxhcml0eTogRmxvYXRcbiAgICBwb3N0ZXJQYXRoOiBTdHJpbmdcbiAgICBwcm9kdWN0aW9uQ29tcGFuaWVzOiBbU3RyaW5nXVxuICAgIHByb2R1Y3Rpb25Db3VudHJpZXM6IFtTdHJpbmddXG4gICAgcmVsZWFzZURhdGU6IFN0cmluZyFcbiAgICByZXZlbnVlOiBCaWdJbnQhXG4gICAgcnVudGltZTogSW50XG4gICAgc3Bva2VuTGFuZ3VhZ2VzOiBbU3RyaW5nXVxuICAgIHN0YXR1czogU3RyaW5nIVxuICAgIHRhZ2xpbmU6IFN0cmluZ1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgdHJhaWxlcnM6IFtTdHJpbmddXG4gICAgdmlkZW86IEJvb2xlYW4hXG4gICAgdm90ZUF2ZXJhZ2U6IEZsb2F0IVxuICAgIHZvdGVDb3VudDogSW50IVxuICB9XG5cbiAgdHlwZSBHZXRQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlIHtcbiAgICBwb3N0Z3Jlc01vdmllczogW1Bvc3RncmVzTW92aWVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlIHtcbiAgICBwb3N0Z3Jlc01vdmllczogW1Bvc3RncmVzTW92aWVdXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBQcm9kdWN0aW9uQ29tcGFueSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgdG1kYklkOiBTdHJpbmchXG4gICAgbG9nb1BhdGg6IFN0cmluZ1xuICAgIG9yaWdpbkNvdW50cnk6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2V0UHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlIHtcbiAgICBwcm9kdWN0aW9uQ29tcGFuaWVzOiBbUHJvZHVjdGlvbkNvbXBhbnldXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTZWFyY2hQcm9kdWN0aW9uQ29tcGFuaWVzUmVzcG9uc2Uge1xuICAgIHByb2R1Y3Rpb25Db21wYW5pZXM6IFtQcm9kdWN0aW9uQ29tcGFueV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFByb2R1Y3Rpb25Db3VudHJ5IHtcbiAgICBpZDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGlzb18zMTY2XzE6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEdldFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZSB7XG4gICAgcHJvZHVjdGlvbkNvdW50cmllczogW1Byb2R1Y3Rpb25Db3VudHJ5XVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoUHJvZHVjdGlvbkNvdW50cmllc1Jlc3BvbnNlIHtcbiAgICBwcm9kdWN0aW9uQ291bnRyaWVzOiBbUHJvZHVjdGlvbkNvdW50cnldXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBTcG9rZW5MYW5ndWFnZSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBpc29fNjM5XzE6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbmdsaXNoTmFtZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIEdldFNwb2tlbkxhbmd1YWdlUmVzcG9uc2Uge1xuICAgIHNwb2tlbkxhbmd1YWdlczogW1Nwb2tlbkxhbmd1YWdlXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoU3Bva2VuTGFuZ3VhZ2VzUmVzcG9uc2Uge1xuICAgIHNwb2tlbkxhbmd1YWdlczogW1Nwb2tlbkxhbmd1YWdlXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGdldENvbGxlY3Rpb24oaWQ6IFN0cmluZyEpOiBDb2xsZWN0aW9uXG4gICAgZ2V0Q29sbGVjdGlvbnMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlXG4gICAgc2VhcmNoQ29sbGVjdGlvbnNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaENvbGxlY3Rpb25zUmVzcG9uc2VcblxuICAgIGdldEltYWdlcyhwYWdlOiBJbnQhKTogW0ltYWdlXVxuXG4gICAgZ2V0RHluYW1vTW92aWVzOiBbRHluYW1vTW92aWVdXG5cbiAgICBnZXRHZW5yZShpZDogU3RyaW5nISk6IEdlbnJlXG4gICAgZ2V0R2VucmVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0R2VucmVzUmVzcG9uc2VcbiAgICBzZWFyY2hHZW5yZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaEdlbnJlc1Jlc3BvbnNlXG5cbiAgICBnZXRNb3ZpZVRyYWlsZXIoaWQ6IFN0cmluZyEpOiBNb3ZpZVRyYWlsZXJcbiAgICBnZXRNb3ZpZVRyYWlsZXJzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0TW92aWVUcmFpbGVyc1JlcG9uc2VcbiAgICBzZWFyY2hNb3ZpZVRyYWlsZXJzQnlLZXlWYWx1ZShzZWFyY2hJbnB1dDogU2VhcmNoSW5wdXQpOiBTZWFyY2hNb3ZpZVRyYWlsZXJzUmVzcG9uc2VcblxuICAgIGdldFBvc3RncmVzTW92aWUoaWQ6IFN0cmluZyEpOiBQb3N0Z3Jlc01vdmllXG4gICAgZ2V0UG9zdGdyZXNNb3ZpZXMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlXG4gICAgc2VhcmNoUG9zdGdyZXNNb3ZpZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFBvc3RncmVzTW92aWVzUmVzcG9uc2VcblxuICAgIGdldFByb2R1Y3Rpb25Db21wYW55KGlkOiBTdHJpbmchKTogUHJvZHVjdGlvbkNvbXBhbnlcbiAgICBnZXRQcm9kdWN0aW9uQ29tcGFuaWVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0UHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlXG4gICAgc2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc0J5S2V5VmFsdWUoc2VhcmNoSW5wdXQ6IFNlYXJjaElucHV0KTogU2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlXG5cbiAgICBnZXRQcm9kdWN0aW9uQ291bnRyeShpZDogU3RyaW5nISk6IFByb2R1Y3Rpb25Db3VudHJ5XG4gICAgZ2V0UHJvZHVjdGlvbkNvdW50cmllcyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZVxuICAgIHNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZVxuXG4gICAgZ2V0U3Bva2VuTGFuZ3VhZ2UoaWQ6IFN0cmluZyEpOiBTcG9rZW5MYW5ndWFnZVxuICAgIGdldFNwb2tlbkxhbmd1YWdlcyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldFNwb2tlbkxhbmd1YWdlUmVzcG9uc2VcbiAgICBzZWFyY2hTcG9rZW5MYW5ndWFnZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFNwb2tlbkxhbmd1YWdlc1Jlc3BvbnNlXG4gIH1cbmA7XG4iLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tICdrbmV4JztcbmltcG9ydCB7IFBPU1RHUkVTX1VTRVIsIFBPU1RHUkVTX1BBU1NXT1JELCBEQVRBQkFTRV9VUkxfUFJPRFVDVElPTiwgREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5ULCBOT0RFX0VOViB9IGZyb20gJy4vZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgY2xpZW50OiBgcGdgLFxuICBjb25uZWN0aW9uOiB7XG4gICAgY29ubmVjdGlvblN0cmluZzogTk9ERV9FTlYgPT09IGBwcm9kdWN0aW9uYCA/IERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OIDogREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5ULFxuICAgIHVzZXI6IFBPU1RHUkVTX1VTRVIsXG4gICAgcGFzc3dvcmQ6IFBPU1RHUkVTX1BBU1NXT1JELFxuICB9LFxuICBtaWdyYXRpb25zOiB7XG4gICAgZGlyZWN0b3J5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi9wb3N0Z3Jlcy9taWdyYXRpb25zYCksXG4gICAgZXh0ZW5zaW9uOiBgdHNgLFxuICB9LFxuICBzZWVkczoge1xuICAgIGRpcmVjdG9yeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vcG9zdGdyZXMvc2VlZHMnKSxcbiAgICBleHRlbnNpb246IGB0c2AsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGI6IEtuZXg7XG4gIG9mZnNldD86IG51bWJlcjtcbiAgYW1vdW50OiBudW1iZXI7XG4gIHRhYmxlOiBUYWJsZXM7XG59O1xuXG5leHBvcnQgY29uc3QgcGFnaW5hdGVkRGJHRVQgPSBhc3luYyA8VD4oeyBkYiwgb2Zmc2V0LCBhbW91bnQsIHRhYmxlIH06IFByb3BzKTogUHJvbWlzZTxbeyBjb3VudDogc3RyaW5nIH0sIFRbXV0+ID0+IHtcbiAgbGV0IGdldDogYW55O1xuXG4gIGlmICghTnVtYmVyLmlzTmFOKG9mZnNldCkgJiYgIU51bWJlci5pc05hTihhbW91bnQpKSB7XG4gICAgZ2V0ID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZGIuY291bnQoYCogYXMgY291bnRgKS5mcm9tKHRhYmxlKS5maXJzdCgpLFxuICAgICAgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKHRhYmxlKVxuICAgICAgICAub2Zmc2V0KG9mZnNldCA/PyBOYU4pXG4gICAgICAgIC5saW1pdChhbW91bnQpLFxuICAgIF0pO1xuICB9IGVsc2Uge1xuICAgIGdldCA9IGF3YWl0IFByb21pc2UuYWxsKFtkYi5jb3VudChgKiBhcyBjb3VudGApLmZyb20odGFibGUpLmZpcnN0KCksIGRiLnNlbGVjdChgKmApLmZyb20odGFibGUpXSk7XG4gIH1cblxuICByZXR1cm4gZ2V0O1xufTtcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG50eXBlIFByb3BzID0ge1xuICBkYjogS25leDtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdGFibGU6IFRhYmxlcztcbiAgc2VhcmNoS2V5OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgcGFnaW5hdGVkRGJTRUFSQ0ggPSBhc3luYyA8VD4oe1xuICBkYixcbiAgb2Zmc2V0LFxuICBhbW91bnQsXG4gIHRhYmxlLFxuICBzZWFyY2hLZXksXG4gIHZhbHVlLFxufTogUHJvcHMpOiBQcm9taXNlPFt7IGNvdW50OiBzdHJpbmcgfSwgVFtdXT4gPT4ge1xuICBsZXQgZ2V0OiBhbnk7XG5cbiAgaWYgKCFOdW1iZXIuaXNOYU4ob2Zmc2V0KSAmJiAhTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcbiAgICBnZXQgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBkYlxuICAgICAgICAuY291bnQoYCogYXMgY291bnRgKVxuICAgICAgICAuZnJvbSh0YWJsZSlcbiAgICAgICAgLndoZXJlKHsgW3NlYXJjaEtleV06IHZhbHVlIH0pXG4gICAgICAgIC5vcldoZXJlKHNlYXJjaEtleSwgYElMSUtFYCwgYCUke3ZhbHVlfSVgKVxuICAgICAgICAuZmlyc3QoKSxcbiAgICAgIGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbSh0YWJsZSlcbiAgICAgICAgLndoZXJlKHsgW3NlYXJjaEtleV06IHZhbHVlIH0pXG4gICAgICAgIC5vcldoZXJlKHNlYXJjaEtleSwgYElMSUtFYCwgYCUke3ZhbHVlfSVgKVxuICAgICAgICAub2Zmc2V0KG9mZnNldCA/PyBOYU4pXG4gICAgICAgIC5saW1pdChhbW91bnQpLFxuICAgIF0pO1xuICB9IGVsc2Uge1xuICAgIGdldCA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGRiXG4gICAgICAgIC5jb3VudChgKiBhcyBjb3VudGApXG4gICAgICAgIC5mcm9tKHRhYmxlKVxuICAgICAgICAud2hlcmUoeyBbc2VhcmNoS2V5XTogdmFsdWUgfSlcbiAgICAgICAgLm9yV2hlcmUoc2VhcmNoS2V5LCBgSUxJS0VgLCBgJSR7dmFsdWV9JWApXG4gICAgICAgIC5maXJzdCgpLFxuICAgICAgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKHRhYmxlKVxuICAgICAgICAud2hlcmUoeyBbc2VhcmNoS2V5XTogdmFsdWUgfSlcbiAgICAgICAgLm9yV2hlcmUoc2VhcmNoS2V5LCBgSUxJS0VgLCBgJSR7dmFsdWV9JWApLFxuICAgIF0pO1xuICB9XG5cbiAgcmV0dXJuIGdldDtcbn07XG4iLCJpbXBvcnQgeyBTZXJ2ZXJWYWxpZGF0aW9uIH0gZnJvbSAnLi4vdHlwZXMvc2VydmVyVmFsaWRhdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJFcnJvclJlZHVjZXIgPSAodmFsaWRhdGlvbnM6IFNlcnZlclZhbGlkYXRpb25bXSkgPT4ge1xuICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSB2YWxpZGF0aW9ucy5yZWR1Y2UoXG4gICAgKGFsbDogU2VydmVyVmFsaWRhdGlvbiwgY3VycmVudDogU2VydmVyVmFsaWRhdGlvbik6IFNlcnZlclZhbGlkYXRpb24gPT4ge1xuICAgICAgaWYgKCFjdXJyZW50LnZhbGlkICYmICEhYWxsLnZhbGlkKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYWxsLCB7IHZhbGlkOiBmYWxzZSB9KTtcbiAgICAgIH1cblxuICAgICAgYWxsLmVycm9ycyArPSBjdXJyZW50LmVycm9ycztcblxuICAgICAgYWxsLm1lc3NhZ2VzLmNvbmNhdChjdXJyZW50Lm1lc3NhZ2VzKTtcblxuICAgICAgcmV0dXJuIGFsbDtcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgZXJyb3JzOiAwLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHZhbGlkLFxuICAgIGVycm9ycyxcbiAgICBtZXNzYWdlcyxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBQYWdpbmF0aW9uSW5wdXQgfSBmcm9tICcuLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgU2VydmVyVmFsaWRhdGlvbiB9IGZyb20gJy4uL3R5cGVzL3NlcnZlclZhbGlkYXRpb24udHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVQYWdpbmF0aW9uID0gKHsgb2Zmc2V0LCBhbW91bnQgfTogUGFnaW5hdGlvbklucHV0KTogU2VydmVyVmFsaWRhdGlvbiA9PiB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGxldCBlcnJvcnMgPSAwO1xuICBsZXQgbWVzc2FnZXMgPSBbXTtcblxuICBpZiAoKE51bWJlci5pc05hTihvZmZzZXQpICYmICFOdW1iZXIuaXNOYU4oYW1vdW50KSkgfHwgKE51bWJlci5pc05hTihhbW91bnQpICYmICFOdW1iZXIuaXNOYU4ob2Zmc2V0KSkpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICAgIG1lc3NhZ2VzLnB1c2goXG4gICAgICBgRWl0aGVyIGJvdGggYW1vdW50IGFuZCBvZmZzZXQgbmVlZCB0byBiZSBwcm92aWRlZCBvciBuZWl0aGVyLCAke29mZnNldH0gd2FzIHByb3ZpZGVkIGZvciBvZmZzZXQgYW5kICR7YW1vdW50fSB3YXMgcHJvdmlkZWQgZm9yIGFtb3VudC5gXG4gICAgKTtcbiAgICBlcnJvcnMgKz0gMTtcbiAgfVxuXG4gIGlmICgoISFvZmZzZXQgJiYgb2Zmc2V0IDwgMCkgfHwgKCEhYW1vdW50ICYmIGFtb3VudCA8IDApKSB7XG4gICAgdmFsaWQgPSBmYWxzZTtcbiAgICBtZXNzYWdlcy5wdXNoKFxuICAgICAgYE5laXRoZXIgb2Zmc2V0IG5vciBhbW91bnQgY2FuIGJlIGEgbmVnYXRpdmUgaW50ZWdlciwgJHtvZmZzZXR9IHdhcyBwcm92aWRlZCBmb3Igb2Zmc2V0IGFuZCAke2Ftb3VudH0gd2FzIHByb3ZpZGVkIGZvciBhbW91bnQuYFxuICAgICk7XG4gICAgZXJyb3JzICs9IDE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbGlkLFxuICAgIGVycm9ycyxcbiAgICBtZXNzYWdlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBhZ2luYXRlID0gKHsgdG90YWwgfTogeyB0b3RhbDogeyBjb3VudDogc3RyaW5nIH0gfSkgPT4gKHtcbiAgdG90YWw6IE51bWJlcih0b3RhbD8uY291bnQgPz8gMCksXG59KTtcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgU2VydmVyVmFsaWRhdGlvbiB9IGZyb20gJy4uL3R5cGVzL3NlcnZlclZhbGlkYXRpb24udHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG50eXBlIFByb3BzID0ge1xuICBzZWFyY2hJbnB1dDogYW55O1xuICBkYjogS25leDtcbiAgdGFibGU6IFRhYmxlcztcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyA9IGFzeW5jICh7IHNlYXJjaElucHV0LCBkYiwgdGFibGUgfTogUHJvcHMpOiBQcm9taXNlPFNlcnZlclZhbGlkYXRpb24+ID0+IHtcbiAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcblxuICBsZXQgdmFsaWQgPSB0cnVlO1xuICBsZXQgZXJyb3JzID0gMDtcbiAgbGV0IG1lc3NhZ2VzID0gW107XG5cbiAgaWYgKHNlYXJjaEtleSkge1xuICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBkYi5zY2hlbWEuaGFzQ29sdW1uKHRhYmxlLCBzZWFyY2hLZXkpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgZXJyb3JzICs9IDE7XG4gICAgICBtZXNzYWdlcy5wdXNoKGAke3NlYXJjaEtleX0gaXMgbm90IGEgY29sdW1uIG9uICR7dGFibGV9IGFuZCBjYW5ub3QgYmUgc2VhcmNoZWRgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbGlkLFxuICAgIGVycm9ycyxcbiAgICBtZXNzYWdlcyxcbiAgfTtcbn07XG4iLCJpbXBvcnQgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCBrbmV4ZmlsZSBmcm9tICcuLi9rbmV4ZmlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IEtuZXgoa25leGZpbGUpO1xuIiwiZXhwb3J0IGVudW0gU2VydmVyUm91dGVzIHtcbiAgU1RSRUFNX01PVklFID0gYC9zdHJlYW0vbW92aWUvOmZpbGVOYW1lYCxcbn1cbiIsImV4cG9ydCBlbnVtIFRhYmxlcyB7XG4gIE1PVklFUyA9ICdtb3ZpZXMnLFxuICBTUE9LRU5fTEFOR1VBR0VTID0gJ3Nwb2tlbl9sYW5ndWFnZXMnLFxuICBHRU5SRVMgPSAnZ2VucmVzJyxcbiAgUFJPRFVDVElPTl9DT1VOVFJJRVMgPSAncHJvZHVjdGlvbl9jb3VudHJpZXMnLFxuICBQUk9EVUNUSU9OX0NPTVBBTklFUyA9ICdwcm9kdWN0aW9uX2NvbXBhbmllcycsXG4gIENPTExFQ1RJT05TID0gJ2NvbGxlY3Rpb25zJyxcbiAgTU9WSUVfVFJBSUxFUlMgPSAnbW92aWVfdHJhaWxlcnMnLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0LXJlZGlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtc2NhbGFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbmV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZGlzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi4vZ3JhcGhxbC90eXBlRGVmcy90eXBlRGVmcyc7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuLi9ncmFwaHFsL3Jlc29sdmVycy9yZXNvbHZlcnMnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IEFQUExJQ0FUSU9OX1NFQ1JFVCwgSFRUUF9QT1JULCBSRURJU19QT1JUIH0gZnJvbSAnLi4vZW52JztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0IEtuZXggZnJvbSAnLi4vcG9zdGdyZXMva25leCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IHR5cGVEZWZzIGFzIHNjYWxhclR5cGVEZWZzLCByZXNvbHZlcnMgYXMgc2NhbGFyUmVzb2x2ZXJzIH0gZnJvbSAnZ3JhcGhxbC1zY2FsYXJzJztcbmltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnQGdyYXBocWwtdG9vbHMvc2NoZW1hJztcbmltcG9ydCB7IHN0cmVhbU1vdmllSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvc3RyZWFtTW92aWUnO1xuaW1wb3J0IHsgU2VydmVyUm91dGVzIH0gZnJvbSAnLi4vdHlwZXMvc2VydmVyUm91dGVzLmVudW0nO1xuaW1wb3J0IHJlZGlzIGZyb20gJ3JlZGlzJztcbmltcG9ydCBjb25uZWN0UmVkaXMgZnJvbSAnY29ubmVjdC1yZWRpcyc7XG5cbmNvbnN0IGNvcnNPcHRpb25zID0ge1xuICBvcmlnaW46IGAqYCxcbn07XG5cbmNvbnN0IGtleSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lICsgJy4vLi4vc2VsZnNpZ25lZC5rZXknKSk7XG5jb25zdCBjZXJ0ID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUgKyAnLi8uLi9zZWxmc2lnbmVkLmNydCcpKTtcblxuY29uc3QgUmVkaXNTdG9yZSA9IGNvbm5lY3RSZWRpcyhzZXNzaW9uKTtcblxuY29uc3QgcmVkaXNDbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQoe1xuICBob3N0OiBgcmVkaXNgLFxuICBwb3J0OiBOdW1iZXIoUkVESVNfUE9SVCkgPz8gTmFOLFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG4gIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHNjaGVtYTogbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xuICAgICAgdHlwZURlZnM6IFsuLi5zY2FsYXJUeXBlRGVmcywgdHlwZURlZnNdLFxuICAgICAgcmVzb2x2ZXJzOiB7IC4uLnNjYWxhclJlc29sdmVycywgLi4ucmVzb2x2ZXJzIH0sXG4gICAgfSksXG4gICAgY29udGV4dDogKCkgPT4gKHtcbiAgICAgIGRiOiBLbmV4LFxuICAgICAgcmVkaXM6IHJlZGlzQ2xpZW50LFxuICAgIH0pLFxuICB9KTtcblxuICBhcHAudXNlKG1vcmdhbihgOm1ldGhvZCA6dXJsIDpzdGF0dXMgOnJlc1tjb250ZW50LWxlbmd0aF0gLSA6cmVzcG9uc2UtdGltZSBtc2ApKTtcbiAgYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5cbiAgYXBwLmdldChTZXJ2ZXJSb3V0ZXMuU1RSRUFNX01PVklFLCBzdHJlYW1Nb3ZpZUhhbmRsZXIpO1xuXG4gIGF3YWl0IHNlcnZlci5zdGFydCgpO1xuXG4gIHNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAsIHBhdGg6IGAvYXBpL2dyYXBocWxgIH0pO1xuICBhcHAubGlzdGVuKHsgcG9ydDogSFRUUF9QT1JUIH0sICgpID0+IGNvbnNvbGUubG9nKGBBcHAgaXMgbGlzdGVuaW5nIG9uIFBvcnQgJHtIVFRQX1BPUlR9YCkpO1xuICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuLi8uLi9odG1sYCksIHsgZXh0ZW5zaW9uczogW2BodG1sYF0gfSkpO1xuXG4gIGFwcC51c2UoXG4gICAgc2Vzc2lvbih7XG4gICAgICBuYW1lOiBgbmFzX21lZGlhX2V4cGxvcmVyYCxcbiAgICAgIHN0b3JlOiBuZXcgUmVkaXNTdG9yZSh7XG4gICAgICAgIGNsaWVudDogcmVkaXNDbGllbnQsXG4gICAgICAgIGRpc2FibGVUb3VjaDogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgY29va2llOiB7XG4gICAgICAgIG1heEFnZTogMTAwMDAwMDAwMCxcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsIC8vIENoYW5nZSB0aGlzIGJhY2sgd2hlbiBodHRwcyBpcyBjb25maWd1cmVkXG4gICAgICAgIHNhbWVTaXRlOiBgbGF4YCxcbiAgICAgIH0sXG4gICAgICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBzZWNyZXQ6IEFQUExJQ0FUSU9OX1NFQ1JFVCA/PyBgYCxcbiAgICAgIHJlc2F2ZTogZmFsc2UsXG4gICAgfSlcbiAgKTtcblxuICBhcHAuc2V0KCd0cnVzdCBwcm94eScsIDEpO1xufVxuXG50cnkge1xuICBzdGFydFNlcnZlcigpO1xufSBjYXRjaCAoc2VydmVyRXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihzZXJ2ZXJFcnJvcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=