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
    getPostgresMovies: _asyncToGenerator(function*(_, { paginationInput  }, { db , redis  }) {
        console.log(redis);
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
/* harmony import */ var _users_resolvers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.resolvers */ "../../graphql/resolvers/users.resolvers.ts");









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
    }, _collections_resolvers__WEBPACK_IMPORTED_MODULE_0__.collectionResolvers, _image_resolvers__WEBPACK_IMPORTED_MODULE_2__.imageResolvers, _genres_resolvers__WEBPACK_IMPORTED_MODULE_1__.genresResolvers, _movie_resolvers__WEBPACK_IMPORTED_MODULE_3__.movieResolvers, _movieTrailers_resolvers__WEBPACK_IMPORTED_MODULE_4__.movieTrailerResolvers, _productionCompanies_resolvers__WEBPACK_IMPORTED_MODULE_5__.productionCompanyResolvers, _productionCountries_resolvers__WEBPACK_IMPORTED_MODULE_6__.productionCountryResolvers, _spokenLanguageResolvers__WEBPACK_IMPORTED_MODULE_7__.spokenLangaugeResolvers),
    Mutation: _objectSpread({
    }, _users_resolvers__WEBPACK_IMPORTED_MODULE_8__.userMutations)
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

/***/ "../../graphql/resolvers/users.resolvers.ts":
/*!**************************************************!*\
  !*** ../../graphql/resolvers/users.resolvers.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userMutations": () => (/* binding */ userMutations)
/* harmony export */ });
/* harmony import */ var apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-errors */ "apollo-server-errors");
/* harmony import */ var apollo_server_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_tables_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/tables.enum */ "../../types/tables.enum.ts");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _validators_login_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/login.validator */ "../../validators/login.validator.ts");





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
const userMutations = {
    registerUser: _asyncToGenerator(function*(_, { user  }, { db , request  }) {
        const postgresUser = yield db.select(`*`).from(_types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.USERS).where({
            email: user.email
        });
        if (postgresUser === null || postgresUser === void 0 ? void 0 : postgresUser[0]) {
            return new apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`User with that email already exists`);
        }
        const saltRounds = 10;
        const hash = yield bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(user.password, saltRounds);
        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)();
        Object.assign(request.session, {
            userId: id
        });
        const newUser = {
            id,
            email: user.email,
            hash,
            name: user.name
        };
        try {
            yield db.table(_types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.USERS).insert(newUser);
        } catch (error) {
            console.error(error);
        }
        return {
            id,
            email: user.email,
            name: user.name
        };
    }),
    login: _asyncToGenerator(function*(_, { user  }, { request , db  }) {
        const validForm = yield _validators_login_validator__WEBPACK_IMPORTED_MODULE_4__.loginValidator.isValid(user);
        if (!validForm) {
            return new apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`Invalid attempt`);
        }
        const postgresUser = yield db.table(_types_tables_enum__WEBPACK_IMPORTED_MODULE_1__.Tables.USERS).where({
            email: user.email
        });
        const validUser = postgresUser === null || postgresUser === void 0 ? void 0 : postgresUser[0];
        if (!validUser) {
            return new apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`Invalid email or password`);
        }
        const validPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(user.password, postgresUser[0].hash);
        if (!validPassword) {
            return new apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__.UserInputError(`Invalid email or password`);
        }
        Object.assign(request.session, {
            userId: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()
        });
        return {
            id: validUser.id,
            email: validUser.email,
            name: validUser.name
        };
    }),
    logout: _asyncToGenerator(function*(_, __, { request , response , redis  }) {
        return new Promise((resolve)=>{
            redis.del(request.sessionID);
            response.clearCookie(`qid`, {
                path: `/`,
                domain: `localhost`
            });
            return resolve({
                message: `Logged Out`
            });
        });
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
  input RegisterUserInput {
    email: String!
    password: String!
    name: String!
  }

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

  input LoginInput {
    email: String!
    password: String!
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

  type User {
    email: String!
    hash: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
    id: String!
    name: String!
  }

  type RegisterUserResponse {
    email: String!
    id: String!
    name: String!
  }

  type LogoutResponse {
    message: String!
  }

  type LoginResponse {
    id: String!
    name: String!
    email: String!
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

  type Mutation {
    registerUser(user: RegisterUserInput!): RegisterUserResponse
    logout: LogoutResponse
    login(user: LoginInput): LoginResponse
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
    Tables1["USERS"] = 'users';
})(Tables || (Tables = {
}));


/***/ }),

/***/ "../../validators/login.validator.ts":
/*!*******************************************!*\
  !*** ../../validators/login.validator.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorMessages": () => (/* binding */ errorMessages),
/* harmony export */   "loginValidator": () => (/* binding */ loginValidator)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const errorMessages = {
    noEmail: `An email is required`,
    invalidEmail: `This is an invalid email`,
    noPassword: `A password is required`,
    invalidPassword: `A valid password must be at least 6 characters`
};
const loginValidator = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email(errorMessages.invalidEmail).required(errorMessages.noEmail),
    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, errorMessages.invalidPassword).required(errorMessages.noPassword)
});


/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ "apollo-server-errors":
/*!***************************************!*\
  !*** external "apollo-server-errors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-errors");

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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-redis");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("yup");

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
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_typeDefs_typeDefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/typeDefs/typeDefs */ "../../graphql/typeDefs/typeDefs.ts");
/* harmony import */ var _graphql_resolvers_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/resolvers/resolvers */ "../../graphql/resolvers/resolvers.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env */ "../../env.ts");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _postgres_knex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../postgres/knex */ "../../postgres/knex.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-scalars */ "graphql-scalars");
/* harmony import */ var graphql_scalars__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_scalars__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
/* harmony import */ var _graphql_tools_schema__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _handlers_streamMovie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handlers/streamMovie */ "../../express/handlers/streamMovie.ts");
/* harmony import */ var _types_serverRoutes_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../types/serverRoutes.enum */ "../../types/serverRoutes.enum.ts");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! connect-redis */ "connect-redis");
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(connect_redis__WEBPACK_IMPORTED_MODULE_15__);
















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
    origin: `http://localhost:3000`,
    credentials: true
};
const key = fs__WEBPACK_IMPORTED_MODULE_5___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_9___default().resolve(__dirname + './../selfsigned.key'));
const cert = fs__WEBPACK_IMPORTED_MODULE_5___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_9___default().resolve(__dirname + './../selfsigned.crt'));
const RedisStore = connect_redis__WEBPACK_IMPORTED_MODULE_15___default()((express_session__WEBPACK_IMPORTED_MODULE_7___default()));
var ref;
const redisClient = redis__WEBPACK_IMPORTED_MODULE_14___default().createClient({
    host: `redis`,
    port: (ref = Number(_env__WEBPACK_IMPORTED_MODULE_6__.REDIS_PORT)) !== null && ref !== void 0 ? ref : NaN
});
function _startServer() {
    _startServer = _asyncToGenerator(function*() {
        const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
        app.set('trust proxy', 1); // nginx or something gets in the mix
        app.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(`:method :url :status :res[content-length] - :response-time ms`));
        app.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_9___default().resolve(__dirname, `../../html`), {
            extensions: [
                `html`
            ]
        }));
        app.use(express_session__WEBPACK_IMPORTED_MODULE_7___default()({
            name: `qid`,
            store: new RedisStore({
                client: redisClient,
                disableTouch: true
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                secure: false
            },
            saveUninitialized: false,
            secret: _env__WEBPACK_IMPORTED_MODULE_6__.APPLICATION_SECRET !== null && _env__WEBPACK_IMPORTED_MODULE_6__.APPLICATION_SECRET !== void 0 ? _env__WEBPACK_IMPORTED_MODULE_6__.APPLICATION_SECRET : ``,
            resave: false
        }));
        app.get(_types_serverRoutes_enum__WEBPACK_IMPORTED_MODULE_13__.ServerRoutes.STREAM_MOVIE, _handlers_streamMovie__WEBPACK_IMPORTED_MODULE_12__.streamMovieHandler);
        const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__.ApolloServer({
            schema: (0,_graphql_tools_schema__WEBPACK_IMPORTED_MODULE_11__.makeExecutableSchema)({
                typeDefs: [
                    ...graphql_scalars__WEBPACK_IMPORTED_MODULE_10__.typeDefs,
                    _graphql_typeDefs_typeDefs__WEBPACK_IMPORTED_MODULE_3__.typeDefs
                ],
                resolvers: _objectSpread({
                }, graphql_scalars__WEBPACK_IMPORTED_MODULE_10__.resolvers, _graphql_resolvers_resolvers__WEBPACK_IMPORTED_MODULE_4__.resolvers)
            }),
            context: ({ req , res  })=>({
                    db: _postgres_knex__WEBPACK_IMPORTED_MODULE_8__.default,
                    redis: redisClient,
                    request: req,
                    response: res
                })
        });
        yield server.start();
        server.applyMiddleware({
            app,
            path: `/api/graphql`,
            cors: corsOptions
        });
        app.use((req, res, next)=>{
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', `http://localhost:3000`); // TODO: what about prod?
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // Pass to next layer of middleware
            res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
            next();
        });
        app.listen({
            port: _env__WEBPACK_IMPORTED_MODULE_6__.HTTP_PORT
        }, ()=>console.log(`App is listening on Port ${_env__WEBPACK_IMPORTED_MODULE_6__.HTTP_PORT}`)
        );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxnQ0FBa0MsSUFBRSxJQUFNO1lBQ3hELEVBQW1DO1lBQ25DLEdBQUcsQ0FBQyxTQUFTLEVBQUMsNkJBQStCLElBQUUsVUFBWTtZQUMzRCxJQUFJO1FBQ04sQ0FBQztRQUVELEdBQUcsQ0FBQyxNQUFNO1lBQUcsSUFBSSxFQUFFLDJDQUFTO2VBQVUsT0FBTyxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSwyQ0FBUzs7SUFDekYsQ0FBQztXQTdEYyxZQUFXOztTQUFYLFdBQVc7V0FBWCxZQUFXOztJQStEdEIsQ0FBQztJQUNILFdBQVc7QUFDYixDQUFDLFFBQVEsV0FBVyxFQUFFLENBQUM7SUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXO0FBQzNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50cy9hd3NBeGlvcy5jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2Vudi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZXhwcmVzcy9oYW5kbGVycy9zdHJlYW1Nb3ZpZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvY29sbGVjdGlvbnMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9nZW5yZXMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9pbWFnZS5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL21vdmllLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvbW92aWVUcmFpbGVycy5yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Byb2R1Y3Rpb25Db21wYW5pZXMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9wcm9kdWN0aW9uQ291bnRyaWVzLnJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3Jlc29sdmVycy9zcG9rZW5MYW5ndWFnZVJlc29sdmVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnMvdXNlcnMucmVzb2x2ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi9ncmFwaHFsL3R5cGVEZWZzL3R5cGVEZWZzLnRzIiwid2VicGFjazovLy8uLi8uLi9rbmV4ZmlsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3NlcnZlckVycm9yUmVkdWNlci5saWIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vbGliL3NlcnZlclNlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcG9zdGdyZXMva25leC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vdHlwZXMvc2VydmVyUm91dGVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtLnRzIiwid2VicGFjazovLy8uLi8uLi92YWxpZGF0b3JzL2xvZ2luLnZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWVycm9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdC1yZWRpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtc2NhbGFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImtuZXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uLi8uLi9leHByZXNzL3NlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQVBJX0dBVEVXQVkgfSBmcm9tICcuLi9lbnYnO1xuXG5leHBvcnQgY29uc3QgYXdzQXhpb3NDbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBBUElfR0FURVdBWSxcbn0pO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnZG90ZW52JztcblxuY29uZmlnKHsgcGF0aDogYC4vLmVudmAgfSk7XG5cbmV4cG9ydCBjb25zdCBOT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuXG5leHBvcnQgY29uc3QgUE9TVEdSRVNfSE9TVCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX0hPU1Q7XG5leHBvcnQgY29uc3QgUE9TVEdSRVNfVVNFUiA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVI7XG5leHBvcnQgY29uc3QgUE9TVEdSRVNfUE9SVCA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BPUlQ7XG5leHBvcnQgY29uc3QgUE9TVEdSRVNfUEFTU1dPUkQgPSBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRDtcbmV4cG9ydCBjb25zdCBQT1NUR1JFU19EQiA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCO1xuXG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5UID0gcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMX0RFVkVMT1BNRU5UO1xuZXhwb3J0IGNvbnN0IERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMX1BST0RVQ1RJT047XG5leHBvcnQgY29uc3QgREFUQUJBU0VfVVJMX1RFU1QgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxfVEVTVDtcblxuZXhwb3J0IGNvbnN0IFdJREVTQ1JFRU5fV0FMTFBBUEVSUyA9IHByb2Nlc3MuZW52LldJREVTQ1JFRU5fV0FMTFBBUEVSUztcbmV4cG9ydCBjb25zdCBXQUxMUEFQRVJfUExBWSA9IHByb2Nlc3MuZW52LldBTExQQVBFUl9QTEFZO1xuZXhwb3J0IGNvbnN0IFdBTExIQVZFTiA9IHByb2Nlc3MuZW52LldBTExIQVZFTjtcblxuZXhwb3J0IGNvbnN0IEFMUEhBX0NPREVSUyA9IHByb2Nlc3MuZW52LkFMUEhBX0NPREVSUztcbmV4cG9ydCBjb25zdCBFWFBSRVNTID0gcHJvY2Vzcy5lbnYuRVhQUkVTUztcblxuZXhwb3J0IGNvbnN0IElNQUdFU19ESVIgPSBwcm9jZXNzLmVudi5JTUFHRVNfRElSO1xuZXhwb3J0IGNvbnN0IE1PVklFU19ESVIgPSBwcm9jZXNzLmVudi5NT1ZJRVNfRElSO1xuZXhwb3J0IGNvbnN0IFRWX0RJUiA9IHByb2Nlc3MuZW52LlRWX0RJUjtcbmV4cG9ydCBjb25zdCBNVVNJQ19ESVIgPSBwcm9jZXNzLmVudi5NVVNJQ19ESVI7XG5cbmV4cG9ydCBjb25zdCBUTURCX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5UTURCX0FQSV9LRVk7XG5cbmV4cG9ydCBjb25zdCBIVFRQX1BPUlQgPSBwcm9jZXNzLmVudi5IVFRQX1BPUlQ7XG5cbmV4cG9ydCBjb25zdCBBUElfR0FURVdBWSA9IHByb2Nlc3MuZW52LkFQSV9HQVRFV0FZO1xuXG5leHBvcnQgY29uc3QgUkVESVNfUE9SVCA9IHByb2Nlc3MuZW52LlJFRElTX1BPUlQ7XG5cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9TRUNSRVQgPSBwcm9jZXNzLmVudi5BUFBMSUNBVElPTl9TRUNSRVQ7XG4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgTU9WSUVTX0RJUiB9IGZyb20gJy4uLy4uL2Vudic7XG5cbmV4cG9ydCBjb25zdCBzdHJlYW1Nb3ZpZUhhbmRsZXIgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHJhbmdlID0gcmVxLmhlYWRlcnMucmFuZ2U7XG5cbiAgaWYgKCFyYW5nZSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChgUmVxdWlyZXMgUmFuZ2UgSGVhZGVyYCk7XG4gIH1cblxuICBjb25zdCB2aWRlb1BhdGggPSBwYXRoLmpvaW4oTU9WSUVTX0RJUiA/PyBgYCwgcmVxLnBhcmFtcy5maWxlTmFtZSk7XG4gIGxldCB2aWRlb1NpemU7XG4gIHRyeSB7XG4gICAgdmlkZW9TaXplID0gZnM/LnN0YXRTeW5jPy4odmlkZW9QYXRoKT8uc2l6ZTtcbiAgfSBjYXRjaCAoZnNFcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZnNFcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGBWaWRlbyBub3QgZm91bmRgKTtcbiAgfVxuXG4gIGlmICghdmlkZW9TaXplKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGBWaWRlbyBub3QgZm91bmRgKTtcbiAgfVxuXG4gIGNvbnN0IENIVU5LX1NJWkUgPSAxMCAqKiA2O1xuICBjb25zdCBzdGFydCA9IE51bWJlcihyYW5nZT8ucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gIGNvbnN0IGVuZCA9IE1hdGgubWluKHN0YXJ0ICsgQ0hVTktfU0laRSwgdmlkZW9TaXplIC0gMSk7XG5cbiAgY29uc3QgY29udGVudExlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMTtcbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAnQ29udGVudC1SYW5nZSc6IGBieXRlcyAke3N0YXJ0fS0ke2VuZH0vJHt2aWRlb1NpemV9YCxcbiAgICAnQWNjZXB0LVJhbmdlcyc6ICdieXRlcycsXG4gICAgJ0NvbnRlbnQtTGVuZ3RoJzogY29udGVudExlbmd0aCxcbiAgICAnQ29udGVudC1UeXBlJzogJ3ZpZGVvL21wNCcsXG4gIH07XG5cbiAgcmVzLndyaXRlSGVhZCgyMDYsIGhlYWRlcnMpO1xuICBjb25zdCB2aWRlb1N0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odmlkZW9QYXRoLCB7IHN0YXJ0LCBlbmQgfSk7XG5cbiAgcmV0dXJuIHZpZGVvU3RyZWFtLnBpcGUocmVzKTtcbn07XG4iLCJpbXBvcnQgeyBVc2VySW5wdXRFcnJvciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHBhZ2luYXRlZERiU0VBUkNIIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiU0VBUkNILmxpYic7XG5pbXBvcnQgeyBzZXJ2ZXJFcnJvclJlZHVjZXIgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyRXJyb3JSZWR1Y2VyLmxpYic7XG5pbXBvcnQgeyByZXBhZ2luYXRlLCB2YWxpZGF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9saWIvc2VydmVyUGFnaW5hdGlvbi5saWInO1xuaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyU2VhcmNoJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIEdldENvbGxlY3Rpb25zUmVzcG9uc2UsIFBhZ2luYXRpb24sIFBhZ2luYXRpb25JbnB1dCB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uUmVzb2x2ZXJzID0ge1xuICBnZXRDb2xsZWN0aW9uczogYXN5bmMgKFxuICAgIF86IGFueSxcbiAgICB7IHBhZ2luYXRpb25JbnB1dCB9OiB7IHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0IH0sXG4gICAgeyBkYiB9OiB7IGRiOiBLbmV4IH1cbiAgKTogUHJvbWlzZTxHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlPiA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb25zITogQ29sbGVjdGlvbltdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IDAsXG4gICAgfTtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYkNvbGxlY3Rpb25zXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPENvbGxlY3Rpb24+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLkNPTExFQ1RJT05TLFxuICAgICAgfSk7XG4gICAgICBjb2xsZWN0aW9ucyA9IGRiQ29sbGVjdGlvbnM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgY29sbGVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjb2xsZWN0aW9ucywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldENvbGxlY3Rpb246IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb2xsZWN0aW9uO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuQ09MTEVDVElPTlMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbGxlY3Rpb24pID0+IHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZGJDb2xsZWN0aW9uWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfSxcblxuICBzZWFyY2hDb2xsZWN0aW9uc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGNvbGxlY3Rpb25zITogQ29sbGVjdGlvbltdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuXG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSBzZXJ2ZXJFcnJvclJlZHVjZXIoW1xuICAgICAgdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSksXG4gICAgICBhd2FpdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyh7IHNlYXJjaElucHV0LCBkYiwgdGFibGU6IFRhYmxlcy5DT0xMRUNUSU9OUyB9KSxcbiAgICBdKTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiQ29sbGVjdGlvbnNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8Q29sbGVjdGlvbj4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuQ09MTEVDVElPTlMsXG4gICAgICAgIHNlYXJjaEtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIGNvbGxlY3Rpb25zID0gZGJDb2xsZWN0aW9ucztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBjb2xsZWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbGxlY3Rpb25zLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXNlcklucHV0RXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0ICogYXMgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IHBhZ2luYXRlZERiR0VUIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYic7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYlNFQVJDSCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYlNFQVJDSC5saWInO1xuaW1wb3J0IHsgc2VydmVyRXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlckVycm9yUmVkdWNlci5saWInO1xuaW1wb3J0IHsgcmVwYWdpbmF0ZSwgdmFsaWRhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclBhZ2luYXRpb24ubGliJztcbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclNlYXJjaCc7XG5pbXBvcnQgeyBHZW5yZSwgR2V0R2VucmVzUmVzcG9uc2UsIFBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgZ2VucmVzUmVzb2x2ZXJzID0ge1xuICBnZXRHZW5yZXM6IGFzeW5jIChfOiBhbnksIHsgcGFnaW5hdGlvbklucHV0IH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pOiBQcm9taXNlPEdldEdlbnJlc1Jlc3BvbnNlPiA9PiB7XG4gICAgbGV0IGdlbnJlcyE6IEdlbnJlW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYkdlbnJlc10gPSBhd2FpdCBwYWdpbmF0ZWREYkdFVDxHZW5yZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuR0VOUkVTLFxuICAgICAgfSk7XG4gICAgICBnZW5yZXMgPSBkYkdlbnJlcztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBnZW5yZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZW5yZXMsIHBhZ2luYXRpb24gfTtcbiAgfSxcblxuICBnZXRHZW5yZTogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGdlbnJlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuR0VOUkVTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJHZW5yZSkgPT4ge1xuICAgICAgICAgIGdlbnJlID0gZGJHZW5yZVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdlbnJlO1xuICB9LFxuXG4gIHNlYXJjaEdlbnJlc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IGdlbnJlczogR2VucmVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcbiAgICBjb25zdCBwYWdpbmF0aW9uSW5wdXQgPSBzZWFyY2hJbnB1dD8ucGFnaW5hdGlvbklucHV0O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0Py52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkUGFnaW5hdGlvbiA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGNvbnN0IHZhbGlkU2VhcmNoUGFyYW1zID0gYXdhaXQgdmFsaWRhdGVTZWFyY2hQYXJhbXMoeyBzZWFyY2hJbnB1dCwgZGIsIHRhYmxlOiBUYWJsZXMuR0VOUkVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYkdlbnJlc10gPSBhd2FpdCBwYWdpbmF0ZWREYlNFQVJDSDxHZW5yZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuR0VOUkVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBnZW5yZXMgPSBkYkdlbnJlcztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBnZW5yZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZW5yZXMsIHBhZ2luYXRpb24gfTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBwcm9taXNlcyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IElNQUdFU19ESVIgfSBmcm9tICcuLi8uLi9lbnYnO1xuXG5leHBvcnQgY29uc3QgaW1hZ2VSZXNvbHZlcnMgPSB7XG4gIGdldEltYWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdlIH06IHsgcGFnZTogbnVtYmVyIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgcHJvbWlzZXMucmVhZGRpcihJTUFHRVNfRElSPy50b1N0cmluZygpID8/IGBgKTtcbiAgICAgIHJldHVybiBpbWFnZXMuc2xpY2UocGFnZSAqIDIwIC0gMjAsIHBhZ2UgKiAyMCk7XG4gICAgfSBjYXRjaCAoaW1hZ2VFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihpbWFnZUVycm9yKTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgYXdzQXhpb3NDbGllbnQgfSBmcm9tICcuLi8uLi9jbGllbnRzL2F3c0F4aW9zLmNsaWVudCc7XG5pbXBvcnQgKiBhcyBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUG9zdGdyZXNNb3ZpZSwgUXVlcnlHZXRQb3N0Z3Jlc01vdmllQXJncyB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyByZXBhZ2luYXRlLCB2YWxpZGF0ZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9saWIvc2VydmVyUGFnaW5hdGlvbi5saWInO1xuaW1wb3J0IHsgVXNlcklucHV0RXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJHRVQgfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJHRVQubGliJztcbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclNlYXJjaCc7XG5pbXBvcnQgeyBzZXJ2ZXJFcnJvclJlZHVjZXIgfSBmcm9tICcuLi8uLi9saWIvc2VydmVyRXJyb3JSZWR1Y2VyLmxpYic7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYlNFQVJDSCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYlNFQVJDSC5saWInO1xuaW1wb3J0IHsgR3JhcGhRTENvbnRleHQgfSBmcm9tICcuLi8uLi90eXBlcy9ncmFwaHFsQ29udGV4dC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZVJlc29sdmVycyA9IHtcbiAgZ2V0RHluYW1vTW92aWVzOiBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGR5bmFtb01vdmllcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhd3NBeGlvc0NsaWVudCh7XG4gICAgICAgIG1ldGhvZDogYEdFVGAsXG4gICAgICAgIHVybDogYC9tb3ZpZXNgLFxuICAgICAgfSk7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBkYXRhO1xuICAgIH0gY2F0Y2ggKG1vdmllRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobW92aWVFcnJvcik7XG4gICAgICBkeW5hbW9Nb3ZpZXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGR5bmFtb01vdmllcztcbiAgfSxcblxuICBnZXRQb3N0Z3Jlc01vdmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiLCByZWRpcyB9OiBHcmFwaFFMQ29udGV4dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlZGlzKTtcbiAgICBsZXQgcG9zdGdyZXNNb3ZpZXMhOiBQb3N0Z3Jlc01vdmllW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPFBvc3RncmVzTW92aWU+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLk1PVklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwb3N0Z3Jlc01vdmllcyA9IGRiTW92aWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHBvc3RncmVzTW92aWVzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcG9zdGdyZXNNb3ZpZXMsIHBhZ2luYXRpb24gfTtcbiAgfSxcblxuICBnZXRQb3N0Z3Jlc01vdmllOiBhc3luYyAoXzogYW55LCB7IGlkIH06IFF1ZXJ5R2V0UG9zdGdyZXNNb3ZpZUFyZ3MsIHsgZGIsIHJlZGlzIH06IEdyYXBoUUxDb250ZXh0KSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVkaXMpO1xuICAgIGxldCBtb3ZpZTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdCgpXG4gICAgICAgIC5mcm9tKFRhYmxlcy5NT1ZJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYk1vdmllKSA9PiB7XG4gICAgICAgICAgbW92aWUgPSBkYk1vdmllWzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIG1vdmllID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllO1xuICB9LFxuXG4gIHNlYXJjaFBvc3RncmVzTW92aWVzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcG9zdGdyZXNNb3ZpZXM6IFBvc3RncmVzTW92aWVbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IHBhZ2luYXRpb25JbnB1dCA9IHNlYXJjaElucHV0Py5wYWdpbmF0aW9uSW5wdXQ7XG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQgPz8gTmFOO1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50ID8/IE5hTjtcbiAgICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQ/LnZhbHVlO1xuXG4gICAgY29uc3QgdmFsaWRQYWdpbmF0aW9uID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgY29uc3QgdmFsaWRTZWFyY2hQYXJhbXMgPSBhd2FpdCB2YWxpZGF0ZVNlYXJjaFBhcmFtcyh7IHNlYXJjaElucHV0LCBkYiwgdGFibGU6IFRhYmxlcy5NT1ZJRVMgfSk7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSBzZXJ2ZXJFcnJvclJlZHVjZXIoW3ZhbGlkUGFnaW5hdGlvbiwgdmFsaWRTZWFyY2hQYXJhbXNdKTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiUG9zdGdyZXNNb3ZpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UG9zdGdyZXNNb3ZpZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwb3N0Z3Jlc01vdmllcyA9IGRiUG9zdGdyZXNNb3ZpZXM7XG4gICAgICBwYWdpbmF0aW9uID0gcmVwYWdpbmF0ZSh7IHRvdGFsIH0pO1xuICAgIH0gY2F0Y2ggKGtuZXhFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihrbmV4RXJyb3IpO1xuICAgICAgcG9zdGdyZXNNb3ZpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0Z3Jlc01vdmllcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgTW92aWVUcmFpbGVyLCBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvZ2VuZXJhdGVkLnR5cGVzJztcbmltcG9ydCB7IFRhYmxlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlcy5lbnVtJztcblxuZXhwb3J0IGNvbnN0IG1vdmllVHJhaWxlclJlc29sdmVycyA9IHtcbiAgZ2V0TW92aWVUcmFpbGVyczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBtb3ZpZVRyYWlsZXJzOiBNb3ZpZVRyYWlsZXJbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcblxuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0O1xuICAgIGNvbnN0IGFtb3VudCA9IHBhZ2luYXRpb25JbnB1dD8uYW1vdW50O1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gdmFsaWRhdGVQYWdpbmF0aW9uKHsgb2Zmc2V0LCBhbW91bnQgfSk7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJNb3ZpZVRyYWlsZXJzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPE1vdmllVHJhaWxlcj4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldE1vdmllVHJhaWxlcjogYXN5bmMgKF86IGFueSwgeyBpZCB9OiBhbnksIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IG1vdmllVHJhaWxlcjtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20oVGFibGVzLk1PVklFX1RSQUlMRVJTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJNb3ZpZVRyYWlsZXIpID0+IHtcbiAgICAgICAgICBtb3ZpZVRyYWlsZXIgPSBkYk1vdmllVHJhaWxlclswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmllVHJhaWxlcjtcbiAgfSxcblxuICBzZWFyY2hNb3ZpZVRyYWlsZXJzQnlLZXlWYWx1ZTogYXN5bmMgKF86IGFueSwgeyBzZWFyY2hJbnB1dCB9OiB7IHNlYXJjaElucHV0OiBhbnkgfSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbW92aWVUcmFpbGVyczogTW92aWVUcmFpbGVyW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLk1PVklFX1RSQUlMRVJTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYk1vdmllVHJhaWxlcnNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8TW92aWVUcmFpbGVyPih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5NT1ZJRV9UUkFJTEVSUyxcbiAgICAgICAgc2VhcmNoS2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgbW92aWVUcmFpbGVycyA9IGRiTW92aWVUcmFpbGVycztcbiAgICAgIHBhZ2luYXRpb24gPSByZXBhZ2luYXRlKHsgdG90YWwgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgICBtb3ZpZVRyYWlsZXJzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbW92aWVUcmFpbGVycywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgUHJvZHVjdGlvbkNvbXBhbnkgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdGlvbkNvbXBhbnlSZXNvbHZlcnMgPSB7XG4gIGdldFByb2R1Y3Rpb25Db21wYW5pZXM6IGFzeW5jIChfOiBhbnksIHsgcGFnaW5hdGlvbklucHV0IH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgcHJvZHVjdGlvbkNvbXBhbmllcyE6IFByb2R1Y3Rpb25Db21wYW55W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db21wYW5pZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJHRVQ8UHJvZHVjdGlvbkNvbXBhbnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLk1PVklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gZGJQcm9kdWN0aW9uQ29tcGFuaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db21wYW5pZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ29tcGFuaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvbXBhbnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb21wYW55O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT01QQU5JRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvbXBhbnkpID0+IHtcbiAgICAgICAgICBjb21wYW55ID0gZGJDb21wYW55WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFueTtcbiAgfSxcbiAgc2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHByb2R1Y3Rpb25Db21wYW5pZXM6IFByb2R1Y3Rpb25Db21wYW55W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db21wYW5pZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UHJvZHVjdGlvbkNvbXBhbnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09NUEFOSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwcm9kdWN0aW9uQ29tcGFuaWVzID0gZGJQcm9kdWN0aW9uQ29tcGFuaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db21wYW5pZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ29tcGFuaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgVXNlcklucHV0RXJyb3IgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0ICogYXMgS25leCBmcm9tICdrbmV4JztcbmltcG9ydCB7IHBhZ2luYXRlZERiR0VUIH0gZnJvbSAnLi4vLi4vbGliL3BhZ2luYXRlZERiR0VULmxpYic7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYlNFQVJDSCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYlNFQVJDSC5saWInO1xuaW1wb3J0IHsgc2VydmVyRXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlckVycm9yUmVkdWNlci5saWInO1xuaW1wb3J0IHsgcmVwYWdpbmF0ZSwgdmFsaWRhdGVQYWdpbmF0aW9uIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclBhZ2luYXRpb24ubGliJztcbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vbGliL3NlcnZlclNlYXJjaCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBQcm9kdWN0aW9uQ291bnRyeSB9IGZyb20gJy4uLy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyA9IHtcbiAgZ2V0UHJvZHVjdGlvbkNvdW50cmllczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBwcm9kdWN0aW9uQ291bnRyaWVzOiBQcm9kdWN0aW9uQ291bnRyeVtdO1xuICAgIGxldCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uID0ge1xuICAgICAgdG90YWw6IE5hTixcbiAgICB9O1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFnaW5hdGlvbklucHV0Py5vZmZzZXQ7XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQ7XG5cbiAgICBjb25zdCB7IHZhbGlkLCBlcnJvcnMsIG1lc3NhZ2VzIH0gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJQcm9kdWN0aW9uQ291bnRyaWVzXSA9IGF3YWl0IHBhZ2luYXRlZERiR0VUPFByb2R1Y3Rpb25Db3VudHJ5Pih7XG4gICAgICAgIGRiLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgdGFibGU6IFRhYmxlcy5QUk9EVUNUSU9OX0NPVU5UUklFUyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ291bnRyaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG5cbiAgZ2V0UHJvZHVjdGlvbkNvdW50cnk6IGFzeW5jIChfOiBhbnksIHsgaWQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBjb3VudHJ5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRiXG4gICAgICAgIC5zZWxlY3QoYCpgKVxuICAgICAgICAuZnJvbShUYWJsZXMuUFJPRFVDVElPTl9DT1VOVFJJRVMpXG4gICAgICAgIC53aGVyZSh7IGlkIH0pXG4gICAgICAgIC50aGVuKChkYkNvdW50cnkpID0+IHtcbiAgICAgICAgICBjb3VudHJ5ID0gZGJDb3VudHJ5WzBdO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY291bnRyeTtcbiAgfSxcbiAgc2VhcmNoUHJvZHVjdGlvbkNvdW50cmllc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHByb2R1Y3Rpb25Db3VudHJpZXM6IFByb2R1Y3Rpb25Db3VudHJ5W107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG4gICAgY29uc3QgcGFnaW5hdGlvbklucHV0ID0gc2VhcmNoSW5wdXQ/LnBhZ2luYXRpb25JbnB1dDtcbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldCA/PyBOYU47XG4gICAgY29uc3QgYW1vdW50ID0gcGFnaW5hdGlvbklucHV0Py5hbW91bnQgPz8gTmFOO1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IHNlYXJjaElucHV0Py5zZWFyY2hLZXk7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dD8udmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZFBhZ2luYXRpb24gPSB2YWxpZGF0ZVBhZ2luYXRpb24oeyBvZmZzZXQsIGFtb3VudCB9KTtcbiAgICBjb25zdCB2YWxpZFNlYXJjaFBhcmFtcyA9IGF3YWl0IHZhbGlkYXRlU2VhcmNoUGFyYW1zKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTIH0pO1xuXG4gICAgY29uc3QgeyB2YWxpZCwgZXJyb3JzLCBtZXNzYWdlcyB9ID0gc2VydmVyRXJyb3JSZWR1Y2VyKFt2YWxpZFBhZ2luYXRpb24sIHZhbGlkU2VhcmNoUGFyYW1zXSk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgVXNlcklucHV0RXJyb3IoYCR7ZXJyb3JzfSBlcnJvcnNgLCB7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgW3RvdGFsLCBkYlByb2R1Y3Rpb25Db3VudHJpZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8UHJvZHVjdGlvbkNvdW50cnk+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlBST0RVQ1RJT05fQ09VTlRSSUVTLFxuICAgICAgICBzZWFyY2hLZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgfSk7XG4gICAgICBwcm9kdWN0aW9uQ291bnRyaWVzID0gZGJQcm9kdWN0aW9uQ291bnRyaWVzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHByb2R1Y3Rpb25Db3VudHJpZXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9kdWN0aW9uQ291bnRyaWVzLCBwYWdpbmF0aW9uIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY29sbGVjdGlvblJlc29sdmVycyB9IGZyb20gJy4vY29sbGVjdGlvbnMucmVzb2x2ZXJzJztcbmltcG9ydCB7IGdlbnJlc1Jlc29sdmVycyB9IGZyb20gJy4vZ2VucmVzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBpbWFnZVJlc29sdmVycyB9IGZyb20gJy4vaW1hZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IG1vdmllUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgbW92aWVUcmFpbGVyUmVzb2x2ZXJzIH0gZnJvbSAnLi9tb3ZpZVRyYWlsZXJzLnJlc29sdmVycyc7XG5pbXBvcnQgeyBwcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyB9IGZyb20gJy4vcHJvZHVjdGlvbkNvbXBhbmllcy5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgcHJvZHVjdGlvbkNvdW50cnlSZXNvbHZlcnMgfSBmcm9tICcuL3Byb2R1Y3Rpb25Db3VudHJpZXMucmVzb2x2ZXJzJztcbmltcG9ydCB7IHNwb2tlbkxhbmdhdWdlUmVzb2x2ZXJzIH0gZnJvbSAnLi9zcG9rZW5MYW5ndWFnZVJlc29sdmVycyc7XG5pbXBvcnQgeyB1c2VyTXV0YXRpb25zIH0gZnJvbSAnLi91c2Vycy5yZXNvbHZlcnMnO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIC4uLmNvbGxlY3Rpb25SZXNvbHZlcnMsXG4gICAgLi4uaW1hZ2VSZXNvbHZlcnMsXG4gICAgLi4uZ2VucmVzUmVzb2x2ZXJzLFxuICAgIC4uLm1vdmllUmVzb2x2ZXJzLFxuICAgIC4uLm1vdmllVHJhaWxlclJlc29sdmVycyxcbiAgICAuLi5wcm9kdWN0aW9uQ29tcGFueVJlc29sdmVycyxcbiAgICAuLi5wcm9kdWN0aW9uQ291bnRyeVJlc29sdmVycyxcbiAgICAuLi5zcG9rZW5MYW5nYXVnZVJlc29sdmVycyxcbiAgfSxcbiAgTXV0YXRpb246IHtcbiAgICAuLi51c2VyTXV0YXRpb25zLFxuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcbmltcG9ydCAqIGFzIEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBwYWdpbmF0ZWREYkdFVCB9IGZyb20gJy4uLy4uL2xpYi9wYWdpbmF0ZWREYkdFVC5saWInO1xuaW1wb3J0IHsgcGFnaW5hdGVkRGJTRUFSQ0ggfSBmcm9tICcuLi8uLi9saWIvcGFnaW5hdGVkRGJTRUFSQ0gubGliJztcbmltcG9ydCB7IHNlcnZlckVycm9yUmVkdWNlciB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJFcnJvclJlZHVjZXIubGliJztcbmltcG9ydCB7IHJlcGFnaW5hdGUsIHZhbGlkYXRlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJQYWdpbmF0aW9uLmxpYic7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2xpYi9zZXJ2ZXJTZWFyY2gnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgU3Bva2VuTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi90eXBlcy9nZW5lcmF0ZWQudHlwZXMnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG5leHBvcnQgY29uc3Qgc3Bva2VuTGFuZ2F1Z2VSZXNvbHZlcnMgPSB7XG4gIGdldFNwb2tlbkxhbmd1YWdlczogYXN5bmMgKF86IGFueSwgeyBwYWdpbmF0aW9uSW5wdXQgfTogYW55LCB7IGRiIH06IHsgZGI6IEtuZXggfSkgPT4ge1xuICAgIGxldCBzcG9rZW5MYW5ndWFnZXM6IFNwb2tlbkxhbmd1YWdlW107XG4gICAgbGV0IHBhZ2luYXRpb246IFBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogTmFOLFxuICAgIH07XG5cbiAgICBjb25zdCBvZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQ/Lm9mZnNldDtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudDtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihgJHtlcnJvcnN9IGVycm9yc2AsIHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBbdG90YWwsIGRiTW92aWVUcmFpbGVyc10gPSBhd2FpdCBwYWdpbmF0ZWREYkdFVDxTcG9rZW5MYW5ndWFnZT4oe1xuICAgICAgICBkYixcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHRhYmxlOiBUYWJsZXMuTU9WSUVfVFJBSUxFUlMsXG4gICAgICB9KTtcblxuICAgICAgc3Bva2VuTGFuZ3VhZ2VzID0gZGJNb3ZpZVRyYWlsZXJzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNwb2tlbkxhbmd1YWdlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxuXG4gIGdldFNwb2tlbkxhbmd1YWdlOiBhc3luYyAoXzogYW55LCB7IGlkIH06IGFueSwgeyBkYiB9OiB7IGRiOiBLbmV4IH0pID0+IHtcbiAgICBsZXQgbGFuZ3VhZ2U7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKFRhYmxlcy5TUE9LRU5fTEFOR1VBR0VTKVxuICAgICAgICAud2hlcmUoeyBpZCB9KVxuICAgICAgICAudGhlbigoZGJMYW5ndWFnZSkgPT4ge1xuICAgICAgICAgIGxhbmd1YWdlID0gZGJMYW5ndWFnZVswXTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoa25leEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGtuZXhFcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xuICB9LFxuXG4gIHNlYXJjaFNwb2tlbkxhbmd1YWdlc0J5S2V5VmFsdWU6IGFzeW5jIChfOiBhbnksIHsgc2VhcmNoSW5wdXQgfTogeyBzZWFyY2hJbnB1dDogYW55IH0sIHsgZGIgfTogeyBkYjogS25leCB9KSA9PiB7XG4gICAgbGV0IHNwb2tlbkxhbmd1YWdlczogU3Bva2VuTGFuZ3VhZ2VbXTtcbiAgICBsZXQgcGFnaW5hdGlvbjogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHRvdGFsOiBOYU4sXG4gICAgfTtcbiAgICBjb25zdCBwYWdpbmF0aW9uSW5wdXQgPSBzZWFyY2hJbnB1dD8ucGFnaW5hdGlvbklucHV0O1xuICAgIGNvbnN0IG9mZnNldCA9IHBhZ2luYXRpb25JbnB1dD8ub2Zmc2V0ID8/IE5hTjtcbiAgICBjb25zdCBhbW91bnQgPSBwYWdpbmF0aW9uSW5wdXQ/LmFtb3VudCA/PyBOYU47XG4gICAgY29uc3Qgc2VhcmNoS2V5ID0gc2VhcmNoSW5wdXQ/LnNlYXJjaEtleTtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0Py52YWx1ZTtcblxuICAgIGNvbnN0IHZhbGlkUGFnaW5hdGlvbiA9IHZhbGlkYXRlUGFnaW5hdGlvbih7IG9mZnNldCwgYW1vdW50IH0pO1xuICAgIGNvbnN0IHZhbGlkU2VhcmNoUGFyYW1zID0gYXdhaXQgdmFsaWRhdGVTZWFyY2hQYXJhbXMoeyBzZWFyY2hJbnB1dCwgZGIsIHRhYmxlOiBUYWJsZXMuU1BPS0VOX0xBTkdVQUdFUyB9KTtcblxuICAgIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHNlcnZlckVycm9yUmVkdWNlcihbdmFsaWRQYWdpbmF0aW9uLCB2YWxpZFNlYXJjaFBhcmFtc10pO1xuXG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IFVzZXJJbnB1dEVycm9yKGAke2Vycm9yc30gZXJyb3JzYCwge1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIG1lc3NhZ2VzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt0b3RhbCwgZGJTcG9rZW5MYW5ndWFnZXNdID0gYXdhaXQgcGFnaW5hdGVkRGJTRUFSQ0g8U3Bva2VuTGFuZ3VhZ2U+KHtcbiAgICAgICAgZGIsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICB0YWJsZTogVGFibGVzLlNQT0tFTl9MQU5HVUFHRVMsXG4gICAgICAgIHNlYXJjaEtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IGRiU3Bva2VuTGFuZ3VhZ2VzO1xuICAgICAgcGFnaW5hdGlvbiA9IHJlcGFnaW5hdGUoeyB0b3RhbCB9KTtcbiAgICB9IGNhdGNoIChrbmV4RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioa25leEVycm9yKTtcbiAgICAgIHNwb2tlbkxhbmd1YWdlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNwb2tlbkxhbmd1YWdlcywgcGFnaW5hdGlvbiB9O1xuICB9LFxufTtcbiIsImltcG9ydCB7IFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1lcnJvcnMnO1xuaW1wb3J0IHsgR3JhcGhRTENvbnRleHQgfSBmcm9tICcuLi8uLi90eXBlcy9ncmFwaHFsQ29udGV4dC50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZXMuZW51bSc7XG5pbXBvcnQgeyBDcmVhdGVBY2NvdW50RHRvIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycy9jcmVhdGVBY2Nvb3VudC52YWxpZGF0b3InO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHR5cGUgeyBMb2dpbkR0byB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMvbG9naW4udmFsaWRhdG9yJztcbmltcG9ydCB7IGxvZ2luVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycy9sb2dpbi52YWxpZGF0b3InO1xuZXhwb3J0IGNvbnN0IHVzZXJNdXRhdGlvbnMgPSB7XG4gIHJlZ2lzdGVyVXNlcjogYXN5bmMgKF86IGFueSwgeyB1c2VyIH06IHsgdXNlcjogQ3JlYXRlQWNjb3VudER0byB9LCB7IGRiLCByZXF1ZXN0IH06IEdyYXBoUUxDb250ZXh0KSA9PiB7XG4gICAgY29uc3QgcG9zdGdyZXNVc2VyID0gYXdhaXQgZGIuc2VsZWN0KGAqYCkuZnJvbShUYWJsZXMuVVNFUlMpLndoZXJlKHsgZW1haWw6IHVzZXIuZW1haWwgfSk7XG5cbiAgICBpZiAocG9zdGdyZXNVc2VyPy5bMF0pIHtcbiAgICAgIHJldHVybiBuZXcgVXNlcklucHV0RXJyb3IoYFVzZXIgd2l0aCB0aGF0IGVtYWlsIGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaCh1c2VyLnBhc3N3b3JkLCBzYWx0Um91bmRzKTtcbiAgICBjb25zdCBpZCA9IHV1aWQoKTtcbiAgICBPYmplY3QuYXNzaWduKHJlcXVlc3Quc2Vzc2lvbiwgeyB1c2VySWQ6IGlkIH0pO1xuXG4gICAgY29uc3QgbmV3VXNlciA9IHtcbiAgICAgIGlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBoYXNoLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGIudGFibGUoVGFibGVzLlVTRVJTKS5pbnNlcnQobmV3VXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgIH07XG4gIH0sXG5cbiAgbG9naW46IGFzeW5jIChfOiBhbnksIHsgdXNlciB9OiB7IHVzZXI6IExvZ2luRHRvIH0sIHsgcmVxdWVzdCwgZGIgfTogR3JhcGhRTENvbnRleHQpID0+IHtcbiAgICBjb25zdCB2YWxpZEZvcm0gPSBhd2FpdCBsb2dpblZhbGlkYXRvci5pc1ZhbGlkKHVzZXIpO1xuICAgIGlmICghdmFsaWRGb3JtKSB7XG4gICAgICByZXR1cm4gbmV3IFVzZXJJbnB1dEVycm9yKGBJbnZhbGlkIGF0dGVtcHRgKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3N0Z3Jlc1VzZXIgPSBhd2FpdCBkYi50YWJsZShUYWJsZXMuVVNFUlMpLndoZXJlKHsgZW1haWw6IHVzZXIuZW1haWwgfSk7XG4gICAgY29uc3QgdmFsaWRVc2VyID0gcG9zdGdyZXNVc2VyPy5bMF07XG4gICAgaWYgKCF2YWxpZFVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVXNlcklucHV0RXJyb3IoYEludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRgKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUodXNlci5wYXNzd29yZCwgcG9zdGdyZXNVc2VyWzBdLmhhc2gpO1xuICAgIGlmICghdmFsaWRQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIG5ldyBVc2VySW5wdXRFcnJvcihgSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZGApO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24ocmVxdWVzdC5zZXNzaW9uLCB7IHVzZXJJZDogdXVpZCgpIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB2YWxpZFVzZXIuaWQsXG4gICAgICBlbWFpbDogdmFsaWRVc2VyLmVtYWlsLFxuICAgICAgbmFtZTogdmFsaWRVc2VyLm5hbWUsXG4gICAgfTtcbiAgfSxcblxuICBsb2dvdXQ6IGFzeW5jIChfOiBhbnksIF9fOiBhbnksIHsgcmVxdWVzdCwgcmVzcG9uc2UsIHJlZGlzIH06IEdyYXBoUUxDb250ZXh0KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZWRpcy5kZWwocmVxdWVzdC5zZXNzaW9uSUQpO1xuICAgICAgcmVzcG9uc2UuY2xlYXJDb29raWUoYHFpZGAsIHsgcGF0aDogYC9gLCBkb21haW46IGBsb2NhbGhvc3RgIH0pO1xuICAgICAgcmV0dXJuIHJlc29sdmUoeyBtZXNzYWdlOiBgTG9nZ2VkIE91dGAgfSk7XG4gICAgfSksXG59O1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJztcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICBpbnB1dCBSZWdpc3RlclVzZXJJbnB1dCB7XG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwYXNzd29yZDogU3RyaW5nIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIGlucHV0IFNlYXJjaElucHV0IHtcbiAgICBzZWFyY2hLZXk6IFN0cmluZ1xuICAgIHZhbHVlOiBTdHJpbmdcbiAgICBwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dFxuICB9XG5cbiAgdHlwZSBQYWdpbmF0aW9uIHtcbiAgICB0b3RhbDogSW50IVxuICB9XG5cbiAgaW5wdXQgUGFnaW5hdGlvbklucHV0IHtcbiAgICBvZmZzZXQ6IEludFxuICAgIGFtb3VudDogSW50XG4gIH1cblxuICBpbnB1dCBMb2dpbklucHV0IHtcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgIHBhc3N3b3JkOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIENvbGxlY3Rpb24ge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIG92ZXJ2aWV3OiBTdHJpbmchXG4gICAgcG9zdGVyUGF0aDogU3RyaW5nXG4gICAgYmFja2Ryb3BQYXRoOiBTdHJpbmdcbiAgICBwYXJ0czogW1N0cmluZ10hXG4gIH1cblxuICB0eXBlIEdldENvbGxlY3Rpb25zUmVzcG9uc2Uge1xuICAgIGNvbGxlY3Rpb25zOiBbQ29sbGVjdGlvbl1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFNlYXJjaENvbGxlY3Rpb25zUmVzcG9uc2Uge1xuICAgIGNvbGxlY3Rpb25zOiBbQ29sbGVjdGlvbl1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIER5bmFtb01vdmllIHtcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIGlkOiBTdHJpbmchXG4gICAgbWVkaWFUeXBlOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEltYWdlIHtcbiAgICBuYW1lOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEdlbnJlIHtcbiAgICBpZDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgR2V0R2VucmVzUmVzcG9uc2Uge1xuICAgIGdlbnJlczogW0dlbnJlXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoR2VucmVzUmVzcG9uc2Uge1xuICAgIGdlbnJlczogW0dlbnJlXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgTW92aWVUcmFpbGVyIHtcbiAgICBpZDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogU3RyaW5nIVxuICAgIHVwZGF0ZWRBdDogU3RyaW5nIVxuICAgIGlzb182MzlfMTogVGltZXN0YW1wXG4gICAgaXNvXzMxNjZfMTogVGltZXN0YW1wXG4gICAgbmFtZTogU3RyaW5nXG4gICAga2V5OiBTdHJpbmdcbiAgICBzaXRlOiBTdHJpbmdcbiAgICBzaXplOiBJbnRcbiAgICB0eXBlOiBTdHJpbmdcbiAgICBvZmZpY2lhbDogQm9vbGVhblxuICAgIHB1Ymxpc2hlZEF0OiBUaW1lc3RhbXBcbiAgICB0bWRiSWQ6IFN0cmluZyFcbiAgICBtb3ZpZUlkOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEdldE1vdmllVHJhaWxlcnNSZXBvbnNlIHtcbiAgICBtb3ZpZVRyYWlsZXJzOiBbTW92aWVUcmFpbGVyXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoTW92aWVUcmFpbGVyc1Jlc3BvbnNlIHtcbiAgICBtb3ZpZVRyYWlsZXJzOiBbTW92aWVUcmFpbGVyXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgUG9zdGdyZXNNb3ZpZSB7XG4gICAgYWR1bHQ6IEJvb2xlYW4hXG4gICAgYmFja2Ryb3BQYXRoOiBTdHJpbmdcbiAgICBjb2xsZWN0aW9uOiBTdHJpbmdcbiAgICBidWRnZXQ6IEJpZ0ludCFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBmaWxlTmFtZTogU3RyaW5nIVxuICAgIGdlbnJlczogW1N0cmluZ11cbiAgICBob21lcGFnZTogU3RyaW5nXG4gICAgaWQ6IFN0cmluZyFcbiAgICB0bWRiSWQ6IFN0cmluZyFcbiAgICBpbWRiSWQ6IFN0cmluZ1xuICAgIG9yaWdpbmFsTGFuZ3VhZ2U6IFN0cmluZyFcbiAgICBvcmlnaW5hbFRpdGxlOiBTdHJpbmchXG4gICAgb3ZlcnZpZXc6IFN0cmluZ1xuICAgIHBvcHVsYXJpdHk6IEZsb2F0XG4gICAgcG9zdGVyUGF0aDogU3RyaW5nXG4gICAgcHJvZHVjdGlvbkNvbXBhbmllczogW1N0cmluZ11cbiAgICBwcm9kdWN0aW9uQ291bnRyaWVzOiBbU3RyaW5nXVxuICAgIHJlbGVhc2VEYXRlOiBTdHJpbmchXG4gICAgcmV2ZW51ZTogQmlnSW50IVxuICAgIHJ1bnRpbWU6IEludFxuICAgIHNwb2tlbkxhbmd1YWdlczogW1N0cmluZ11cbiAgICBzdGF0dXM6IFN0cmluZyFcbiAgICB0YWdsaW5lOiBTdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIHRyYWlsZXJzOiBbU3RyaW5nXVxuICAgIHZpZGVvOiBCb29sZWFuIVxuICAgIHZvdGVBdmVyYWdlOiBGbG9hdCFcbiAgICB2b3RlQ291bnQ6IEludCFcbiAgfVxuXG4gIHR5cGUgR2V0UG9zdGdyZXNNb3ZpZXNSZXNwb25zZSB7XG4gICAgcG9zdGdyZXNNb3ZpZXM6IFtQb3N0Z3Jlc01vdmllXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoUG9zdGdyZXNNb3ZpZXNSZXNwb25zZSB7XG4gICAgcG9zdGdyZXNNb3ZpZXM6IFtQb3N0Z3Jlc01vdmllXVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgUHJvZHVjdGlvbkNvbXBhbnkge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIHRtZGJJZDogU3RyaW5nIVxuICAgIGxvZ29QYXRoOiBTdHJpbmdcbiAgICBvcmlnaW5Db3VudHJ5OiBTdHJpbmchXG4gIH1cblxuICB0eXBlIEdldFByb2R1Y3Rpb25Db21wYW5pZXNSZXNwb25zZSB7XG4gICAgcHJvZHVjdGlvbkNvbXBhbmllczogW1Byb2R1Y3Rpb25Db21wYW55XVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlIHtcbiAgICBwcm9kdWN0aW9uQ29tcGFuaWVzOiBbUHJvZHVjdGlvbkNvbXBhbnldXG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvblxuICB9XG5cbiAgdHlwZSBQcm9kdWN0aW9uQ291bnRyeSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICB1cGRhdGVkQXQ6IFRpbWVzdGFtcCFcbiAgICBpc29fMzE2Nl8xOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBHZXRQcm9kdWN0aW9uQ291bnRyaWVzUmVzcG9uc2Uge1xuICAgIHByb2R1Y3Rpb25Db3VudHJpZXM6IFtQcm9kdWN0aW9uQ291bnRyeV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZSB7XG4gICAgcHJvZHVjdGlvbkNvdW50cmllczogW1Byb2R1Y3Rpb25Db3VudHJ5XVxuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25cbiAgfVxuXG4gIHR5cGUgU3Bva2VuTGFuZ3VhZ2Uge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgdXBkYXRlZEF0OiBUaW1lc3RhbXAhXG4gICAgaXNvXzYzOV8xOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW5nbGlzaE5hbWU6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBHZXRTcG9rZW5MYW5ndWFnZVJlc3BvbnNlIHtcbiAgICBzcG9rZW5MYW5ndWFnZXM6IFtTcG9rZW5MYW5ndWFnZV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFNlYXJjaFNwb2tlbkxhbmd1YWdlc1Jlc3BvbnNlIHtcbiAgICBzcG9rZW5MYW5ndWFnZXM6IFtTcG9rZW5MYW5ndWFnZV1cbiAgICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uXG4gIH1cblxuICB0eXBlIFVzZXIge1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgaGFzaDogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogVGltZXN0YW1wIVxuICAgIHVwZGF0ZWRBdDogVGltZXN0YW1wIVxuICAgIGlkOiBTdHJpbmchXG4gICAgbmFtZTogU3RyaW5nIVxuICB9XG5cbiAgdHlwZSBSZWdpc3RlclVzZXJSZXNwb25zZSB7XG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBpZDogU3RyaW5nIVxuICAgIG5hbWU6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgTG9nb3V0UmVzcG9uc2Uge1xuICAgIG1lc3NhZ2U6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgTG9naW5SZXNwb25zZSB7XG4gICAgaWQ6IFN0cmluZyFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIGdldENvbGxlY3Rpb24oaWQ6IFN0cmluZyEpOiBDb2xsZWN0aW9uXG4gICAgZ2V0Q29sbGVjdGlvbnMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRDb2xsZWN0aW9uc1Jlc3BvbnNlXG4gICAgc2VhcmNoQ29sbGVjdGlvbnNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaENvbGxlY3Rpb25zUmVzcG9uc2VcblxuICAgIGdldEltYWdlcyhwYWdlOiBJbnQhKTogW0ltYWdlXVxuXG4gICAgZ2V0RHluYW1vTW92aWVzOiBbRHluYW1vTW92aWVdXG5cbiAgICBnZXRHZW5yZShpZDogU3RyaW5nISk6IEdlbnJlXG4gICAgZ2V0R2VucmVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0R2VucmVzUmVzcG9uc2VcbiAgICBzZWFyY2hHZW5yZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaEdlbnJlc1Jlc3BvbnNlXG5cbiAgICBnZXRNb3ZpZVRyYWlsZXIoaWQ6IFN0cmluZyEpOiBNb3ZpZVRyYWlsZXJcbiAgICBnZXRNb3ZpZVRyYWlsZXJzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0TW92aWVUcmFpbGVyc1JlcG9uc2VcbiAgICBzZWFyY2hNb3ZpZVRyYWlsZXJzQnlLZXlWYWx1ZShzZWFyY2hJbnB1dDogU2VhcmNoSW5wdXQpOiBTZWFyY2hNb3ZpZVRyYWlsZXJzUmVzcG9uc2VcblxuICAgIGdldFBvc3RncmVzTW92aWUoaWQ6IFN0cmluZyEpOiBQb3N0Z3Jlc01vdmllXG4gICAgZ2V0UG9zdGdyZXNNb3ZpZXMocGFnaW5hdGlvbklucHV0OiBQYWdpbmF0aW9uSW5wdXQpOiBHZXRQb3N0Z3Jlc01vdmllc1Jlc3BvbnNlXG4gICAgc2VhcmNoUG9zdGdyZXNNb3ZpZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFBvc3RncmVzTW92aWVzUmVzcG9uc2VcblxuICAgIGdldFByb2R1Y3Rpb25Db21wYW55KGlkOiBTdHJpbmchKTogUHJvZHVjdGlvbkNvbXBhbnlcbiAgICBnZXRQcm9kdWN0aW9uQ29tcGFuaWVzKHBhZ2luYXRpb25JbnB1dDogUGFnaW5hdGlvbklucHV0KTogR2V0UHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlXG4gICAgc2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc0J5S2V5VmFsdWUoc2VhcmNoSW5wdXQ6IFNlYXJjaElucHV0KTogU2VhcmNoUHJvZHVjdGlvbkNvbXBhbmllc1Jlc3BvbnNlXG5cbiAgICBnZXRQcm9kdWN0aW9uQ291bnRyeShpZDogU3RyaW5nISk6IFByb2R1Y3Rpb25Db3VudHJ5XG4gICAgZ2V0UHJvZHVjdGlvbkNvdW50cmllcyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZVxuICAgIHNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFByb2R1Y3Rpb25Db3VudHJpZXNSZXNwb25zZVxuXG4gICAgZ2V0U3Bva2VuTGFuZ3VhZ2UoaWQ6IFN0cmluZyEpOiBTcG9rZW5MYW5ndWFnZVxuICAgIGdldFNwb2tlbkxhbmd1YWdlcyhwYWdpbmF0aW9uSW5wdXQ6IFBhZ2luYXRpb25JbnB1dCk6IEdldFNwb2tlbkxhbmd1YWdlUmVzcG9uc2VcbiAgICBzZWFyY2hTcG9rZW5MYW5ndWFnZXNCeUtleVZhbHVlKHNlYXJjaElucHV0OiBTZWFyY2hJbnB1dCk6IFNlYXJjaFNwb2tlbkxhbmd1YWdlc1Jlc3BvbnNlXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICByZWdpc3RlclVzZXIodXNlcjogUmVnaXN0ZXJVc2VySW5wdXQhKTogUmVnaXN0ZXJVc2VyUmVzcG9uc2VcbiAgICBsb2dvdXQ6IExvZ291dFJlc3BvbnNlXG4gICAgbG9naW4odXNlcjogTG9naW5JbnB1dCk6IExvZ2luUmVzcG9uc2VcbiAgfVxuYDtcbiIsImltcG9ydCB7IENvbmZpZyB9IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgUE9TVEdSRVNfVVNFUiwgUE9TVEdSRVNfUEFTU1dPUkQsIERBVEFCQVNFX1VSTF9QUk9EVUNUSU9OLCBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQsIE5PREVfRU5WIH0gZnJvbSAnLi9lbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICBjbGllbnQ6IGBwZ2AsXG4gIGNvbm5lY3Rpb246IHtcbiAgICBjb25uZWN0aW9uU3RyaW5nOiBOT0RFX0VOViA9PT0gYHByb2R1Y3Rpb25gID8gREFUQUJBU0VfVVJMX1BST0RVQ1RJT04gOiBEQVRBQkFTRV9VUkxfREVWRUxPUE1FTlQsXG4gICAgdXNlcjogUE9TVEdSRVNfVVNFUixcbiAgICBwYXNzd29yZDogUE9TVEdSRVNfUEFTU1dPUkQsXG4gIH0sXG4gIG1pZ3JhdGlvbnM6IHtcbiAgICBkaXJlY3Rvcnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIGAuL3Bvc3RncmVzL21pZ3JhdGlvbnNgKSxcbiAgICBleHRlbnNpb246IGB0c2AsXG4gIH0sXG4gIHNlZWRzOiB7XG4gICAgZGlyZWN0b3J5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9wb3N0Z3Jlcy9zZWVkcycpLFxuICAgIGV4dGVuc2lvbjogYHRzYCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IHsgVGFibGVzIH0gZnJvbSAnLi4vdHlwZXMvdGFibGVzLmVudW0nO1xuXG50eXBlIFByb3BzID0ge1xuICBkYjogS25leDtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdGFibGU6IFRhYmxlcztcbn07XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0ZWREYkdFVCA9IGFzeW5jIDxUPih7IGRiLCBvZmZzZXQsIGFtb3VudCwgdGFibGUgfTogUHJvcHMpOiBQcm9taXNlPFt7IGNvdW50OiBzdHJpbmcgfSwgVFtdXT4gPT4ge1xuICBsZXQgZ2V0OiBhbnk7XG5cbiAgaWYgKCFOdW1iZXIuaXNOYU4ob2Zmc2V0KSAmJiAhTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcbiAgICBnZXQgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBkYi5jb3VudChgKiBhcyBjb3VudGApLmZyb20odGFibGUpLmZpcnN0KCksXG4gICAgICBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgIC5vZmZzZXQob2Zmc2V0ID8/IE5hTilcbiAgICAgICAgLmxpbWl0KGFtb3VudCksXG4gICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0ID0gYXdhaXQgUHJvbWlzZS5hbGwoW2RiLmNvdW50KGAqIGFzIGNvdW50YCkuZnJvbSh0YWJsZSkuZmlyc3QoKSwgZGIuc2VsZWN0KGAqYCkuZnJvbSh0YWJsZSldKTtcbiAgfVxuXG4gIHJldHVybiBnZXQ7XG59O1xuIiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRiOiBLbmV4O1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIGFtb3VudDogbnVtYmVyO1xuICB0YWJsZTogVGFibGVzO1xuICBzZWFyY2hLZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBwYWdpbmF0ZWREYlNFQVJDSCA9IGFzeW5jIDxUPih7XG4gIGRiLFxuICBvZmZzZXQsXG4gIGFtb3VudCxcbiAgdGFibGUsXG4gIHNlYXJjaEtleSxcbiAgdmFsdWUsXG59OiBQcm9wcyk6IFByb21pc2U8W3sgY291bnQ6IHN0cmluZyB9LCBUW11dPiA9PiB7XG4gIGxldCBnZXQ6IGFueTtcblxuICBpZiAoIU51bWJlci5pc05hTihvZmZzZXQpICYmICFOdW1iZXIuaXNOYU4oYW1vdW50KSkge1xuICAgIGdldCA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGRiXG4gICAgICAgIC5jb3VudChgKiBhcyBjb3VudGApXG4gICAgICAgIC5mcm9tKHRhYmxlKVxuICAgICAgICAud2hlcmUoeyBbc2VhcmNoS2V5XTogdmFsdWUgfSlcbiAgICAgICAgLm9yV2hlcmUoc2VhcmNoS2V5LCBgSUxJS0VgLCBgJSR7dmFsdWV9JWApXG4gICAgICAgIC5maXJzdCgpLFxuICAgICAgZGJcbiAgICAgICAgLnNlbGVjdChgKmApXG4gICAgICAgIC5mcm9tKHRhYmxlKVxuICAgICAgICAud2hlcmUoeyBbc2VhcmNoS2V5XTogdmFsdWUgfSlcbiAgICAgICAgLm9yV2hlcmUoc2VhcmNoS2V5LCBgSUxJS0VgLCBgJSR7dmFsdWV9JWApXG4gICAgICAgIC5vZmZzZXQob2Zmc2V0ID8/IE5hTilcbiAgICAgICAgLmxpbWl0KGFtb3VudCksXG4gICAgXSk7XG4gIH0gZWxzZSB7XG4gICAgZ2V0ID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZGJcbiAgICAgICAgLmNvdW50KGAqIGFzIGNvdW50YClcbiAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgIC53aGVyZSh7IFtzZWFyY2hLZXldOiB2YWx1ZSB9KVxuICAgICAgICAub3JXaGVyZShzZWFyY2hLZXksIGBJTElLRWAsIGAlJHt2YWx1ZX0lYClcbiAgICAgICAgLmZpcnN0KCksXG4gICAgICBkYlxuICAgICAgICAuc2VsZWN0KGAqYClcbiAgICAgICAgLmZyb20odGFibGUpXG4gICAgICAgIC53aGVyZSh7IFtzZWFyY2hLZXldOiB2YWx1ZSB9KVxuICAgICAgICAub3JXaGVyZShzZWFyY2hLZXksIGBJTElLRWAsIGAlJHt2YWx1ZX0lYCksXG4gICAgXSk7XG4gIH1cblxuICByZXR1cm4gZ2V0O1xufTtcbiIsImltcG9ydCB7IFNlcnZlclZhbGlkYXRpb24gfSBmcm9tICcuLi90eXBlcy9zZXJ2ZXJWYWxpZGF0aW9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNlcnZlckVycm9yUmVkdWNlciA9ICh2YWxpZGF0aW9uczogU2VydmVyVmFsaWRhdGlvbltdKSA9PiB7XG4gIGNvbnN0IHsgdmFsaWQsIGVycm9ycywgbWVzc2FnZXMgfSA9IHZhbGlkYXRpb25zLnJlZHVjZShcbiAgICAoYWxsOiBTZXJ2ZXJWYWxpZGF0aW9uLCBjdXJyZW50OiBTZXJ2ZXJWYWxpZGF0aW9uKTogU2VydmVyVmFsaWRhdGlvbiA9PiB7XG4gICAgICBpZiAoIWN1cnJlbnQudmFsaWQgJiYgISFhbGwudmFsaWQpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhbGwsIHsgdmFsaWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuXG4gICAgICBhbGwuZXJyb3JzICs9IGN1cnJlbnQuZXJyb3JzO1xuXG4gICAgICBhbGwubWVzc2FnZXMuY29uY2F0KGN1cnJlbnQubWVzc2FnZXMpO1xuXG4gICAgICByZXR1cm4gYWxsO1xuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICBlcnJvcnM6IDAsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXJyb3JzLFxuICAgIG1lc3NhZ2VzLFxuICB9O1xufTtcbiIsImltcG9ydCB7IFBhZ2luYXRpb25JbnB1dCB9IGZyb20gJy4uL3R5cGVzL2dlbmVyYXRlZC50eXBlcyc7XG5pbXBvcnQgeyBTZXJ2ZXJWYWxpZGF0aW9uIH0gZnJvbSAnLi4vdHlwZXMvc2VydmVyVmFsaWRhdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhZ2luYXRpb24gPSAoeyBvZmZzZXQsIGFtb3VudCB9OiBQYWdpbmF0aW9uSW5wdXQpOiBTZXJ2ZXJWYWxpZGF0aW9uID0+IHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgbGV0IGVycm9ycyA9IDA7XG4gIGxldCBtZXNzYWdlcyA9IFtdO1xuXG4gIGlmICgoTnVtYmVyLmlzTmFOKG9mZnNldCkgJiYgIU51bWJlci5pc05hTihhbW91bnQpKSB8fCAoTnVtYmVyLmlzTmFOKGFtb3VudCkgJiYgIU51bWJlci5pc05hTihvZmZzZXQpKSkge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gICAgbWVzc2FnZXMucHVzaChcbiAgICAgIGBFaXRoZXIgYm90aCBhbW91bnQgYW5kIG9mZnNldCBuZWVkIHRvIGJlIHByb3ZpZGVkIG9yIG5laXRoZXIsICR7b2Zmc2V0fSB3YXMgcHJvdmlkZWQgZm9yIG9mZnNldCBhbmQgJHthbW91bnR9IHdhcyBwcm92aWRlZCBmb3IgYW1vdW50LmBcbiAgICApO1xuICAgIGVycm9ycyArPSAxO1xuICB9XG5cbiAgaWYgKCghIW9mZnNldCAmJiBvZmZzZXQgPCAwKSB8fCAoISFhbW91bnQgJiYgYW1vdW50IDwgMCkpIHtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICAgIG1lc3NhZ2VzLnB1c2goXG4gICAgICBgTmVpdGhlciBvZmZzZXQgbm9yIGFtb3VudCBjYW4gYmUgYSBuZWdhdGl2ZSBpbnRlZ2VyLCAke29mZnNldH0gd2FzIHByb3ZpZGVkIGZvciBvZmZzZXQgYW5kICR7YW1vdW50fSB3YXMgcHJvdmlkZWQgZm9yIGFtb3VudC5gXG4gICAgKTtcbiAgICBlcnJvcnMgKz0gMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXJyb3JzLFxuICAgIG1lc3NhZ2VzLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlcGFnaW5hdGUgPSAoeyB0b3RhbCB9OiB7IHRvdGFsOiB7IGNvdW50OiBzdHJpbmcgfSB9KSA9PiAoe1xuICB0b3RhbDogTnVtYmVyKHRvdGFsPy5jb3VudCA/PyAwKSxcbn0pO1xuIiwiaW1wb3J0IEtuZXggZnJvbSAna25leCc7XG5pbXBvcnQgeyBTZXJ2ZXJWYWxpZGF0aW9uIH0gZnJvbSAnLi4vdHlwZXMvc2VydmVyVmFsaWRhdGlvbi50eXBlcyc7XG5pbXBvcnQgeyBUYWJsZXMgfSBmcm9tICcuLi90eXBlcy90YWJsZXMuZW51bSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlYXJjaElucHV0OiBhbnk7XG4gIGRiOiBLbmV4O1xuICB0YWJsZTogVGFibGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUGFyYW1zID0gYXN5bmMgKHsgc2VhcmNoSW5wdXQsIGRiLCB0YWJsZSB9OiBQcm9wcyk6IFByb21pc2U8U2VydmVyVmFsaWRhdGlvbj4gPT4ge1xuICBjb25zdCBzZWFyY2hLZXkgPSBzZWFyY2hJbnB1dD8uc2VhcmNoS2V5O1xuXG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGxldCBlcnJvcnMgPSAwO1xuICBsZXQgbWVzc2FnZXMgPSBbXTtcblxuICBpZiAoc2VhcmNoS2V5KSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGRiLnNjaGVtYS5oYXNDb2x1bW4odGFibGUsIHNlYXJjaEtleSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICBlcnJvcnMgKz0gMTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goYCR7c2VhcmNoS2V5fSBpcyBub3QgYSBjb2x1bW4gb24gJHt0YWJsZX0gYW5kIGNhbm5vdCBiZSBzZWFyY2hlZGApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsaWQsXG4gICAgZXJyb3JzLFxuICAgIG1lc3NhZ2VzLFxuICB9O1xufTtcbiIsImltcG9ydCBLbmV4IGZyb20gJ2tuZXgnO1xuaW1wb3J0IGtuZXhmaWxlIGZyb20gJy4uL2tuZXhmaWxlJztcblxuZXhwb3J0IGRlZmF1bHQgS25leChrbmV4ZmlsZSk7XG4iLCJleHBvcnQgZW51bSBTZXJ2ZXJSb3V0ZXMge1xuICBTVFJFQU1fTU9WSUUgPSBgL3N0cmVhbS9tb3ZpZS86ZmlsZU5hbWVgLFxufVxuIiwiZXhwb3J0IGVudW0gVGFibGVzIHtcbiAgTU9WSUVTID0gJ21vdmllcycsXG4gIFNQT0tFTl9MQU5HVUFHRVMgPSAnc3Bva2VuX2xhbmd1YWdlcycsXG4gIEdFTlJFUyA9ICdnZW5yZXMnLFxuICBQUk9EVUNUSU9OX0NPVU5UUklFUyA9ICdwcm9kdWN0aW9uX2NvdW50cmllcycsXG4gIFBST0RVQ1RJT05fQ09NUEFOSUVTID0gJ3Byb2R1Y3Rpb25fY29tcGFuaWVzJyxcbiAgQ09MTEVDVElPTlMgPSAnY29sbGVjdGlvbnMnLFxuICBNT1ZJRV9UUkFJTEVSUyA9ICdtb3ZpZV90cmFpbGVycycsXG4gIFVTRVJTID0gJ3VzZXJzJyxcbn1cbiIsImltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xuXG5leHBvcnQgdHlwZSBMb2dpbkR0byA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIExvZ2luRm9ybVR5cGUgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgbm9FbWFpbDogYEFuIGVtYWlsIGlzIHJlcXVpcmVkYCxcbiAgaW52YWxpZEVtYWlsOiBgVGhpcyBpcyBhbiBpbnZhbGlkIGVtYWlsYCxcbiAgbm9QYXNzd29yZDogYEEgcGFzc3dvcmQgaXMgcmVxdWlyZWRgLFxuICBpbnZhbGlkUGFzc3dvcmQ6IGBBIHZhbGlkIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzYCxcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpblZhbGlkYXRvcjogeXVwLlNjaGVtYU9mPExvZ2luRHRvPiA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoZXJyb3JNZXNzYWdlcy5pbnZhbGlkRW1haWwpLnJlcXVpcmVkKGVycm9yTWVzc2FnZXMubm9FbWFpbCksXG4gIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkubWluKDYsIGVycm9yTWVzc2FnZXMuaW52YWxpZFBhc3N3b3JkKS5yZXF1aXJlZChlcnJvck1lc3NhZ2VzLm5vUGFzc3dvcmQpLFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0LXJlZGlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXNjYWxhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia25leFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWRpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCB7IEFwb2xsb1NlcnZlciwgRXhwcmVzc0NvbnRleHQgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xuaW1wb3J0IHsgdHlwZURlZnMgfSBmcm9tICcuLi9ncmFwaHFsL3R5cGVEZWZzL3R5cGVEZWZzJztcbmltcG9ydCB7IHJlc29sdmVycyB9IGZyb20gJy4uL2dyYXBocWwvcmVzb2x2ZXJzL3Jlc29sdmVycyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fU0VDUkVULCBIVFRQX1BPUlQsIFJFRElTX1BPUlQgfSBmcm9tICcuLi9lbnYnO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XG5pbXBvcnQgS25leCBmcm9tICcuLi9wb3N0Z3Jlcy9rbmV4JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgdHlwZURlZnMgYXMgc2NhbGFyVHlwZURlZnMsIHJlc29sdmVycyBhcyBzY2FsYXJSZXNvbHZlcnMgfSBmcm9tICdncmFwaHFsLXNjYWxhcnMnO1xuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdAZ3JhcGhxbC10b29scy9zY2hlbWEnO1xuaW1wb3J0IHsgc3RyZWFtTW92aWVIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9zdHJlYW1Nb3ZpZSc7XG5pbXBvcnQgeyBTZXJ2ZXJSb3V0ZXMgfSBmcm9tICcuLi90eXBlcy9zZXJ2ZXJSb3V0ZXMuZW51bSc7XG5pbXBvcnQgcmVkaXMgZnJvbSAncmVkaXMnO1xuaW1wb3J0IGNvbm5lY3RSZWRpcyBmcm9tICdjb25uZWN0LXJlZGlzJztcbmltcG9ydCB7IEdyYXBoUUxDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMvZ3JhcGhxbENvbnRleHQudHlwZXMnO1xuXG5jb25zdCBjb3JzT3B0aW9ucyA9IHtcbiAgb3JpZ2luOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwYCwgLy8gVE9ETzogd2hhdCBhYm91dCBwcm9kP1xuICBjcmVkZW50aWFsczogdHJ1ZSxcbn07XG5cbmNvbnN0IGtleSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lICsgJy4vLi4vc2VsZnNpZ25lZC5rZXknKSk7XG5jb25zdCBjZXJ0ID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUgKyAnLi8uLi9zZWxmc2lnbmVkLmNydCcpKTtcblxuY29uc3QgUmVkaXNTdG9yZSA9IGNvbm5lY3RSZWRpcyhzZXNzaW9uKTtcblxuY29uc3QgcmVkaXNDbGllbnQgPSByZWRpcy5jcmVhdGVDbGllbnQoe1xuICBob3N0OiBgcmVkaXNgLFxuICBwb3J0OiBOdW1iZXIoUkVESVNfUE9SVCkgPz8gTmFOLFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VydmVyKCkge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbiAgYXBwLnNldCgndHJ1c3QgcHJveHknLCAxKTsgLy8gbmdpbnggb3Igc29tZXRoaW5nIGdldHMgaW4gdGhlIG1peFxuICBhcHAudXNlKG1vcmdhbihgOm1ldGhvZCA6dXJsIDpzdGF0dXMgOnJlc1tjb250ZW50LWxlbmd0aF0gLSA6cmVzcG9uc2UtdGltZSBtc2ApKTtcbiAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgLi4vLi4vaHRtbGApLCB7IGV4dGVuc2lvbnM6IFtgaHRtbGBdIH0pKTtcblxuICBhcHAudXNlKFxuICAgIHNlc3Npb24oe1xuICAgICAgbmFtZTogYHFpZGAsXG4gICAgICBzdG9yZTogbmV3IFJlZGlzU3RvcmUoe1xuICAgICAgICBjbGllbnQ6IHJlZGlzQ2xpZW50LFxuICAgICAgICBkaXNhYmxlVG91Y2g6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIGNvb2tpZToge1xuICAgICAgICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCAvLyA3IGRheXNcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNlY3VyZTogZmFsc2UsIC8vIFRPRE86IENoYW5nZSB0aGlzIHdoZW4gaHR0cHMgaXMgY29uZmlndXJlZCBmb3IgcHJvZFxuICAgICAgICAvLyBzYW1lU2l0ZTogYG5vbmVgLFxuICAgICAgfSxcbiAgICAgIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgIHNlY3JldDogQVBQTElDQVRJT05fU0VDUkVUID8/IGBgLFxuICAgICAgcmVzYXZlOiBmYWxzZSxcbiAgICB9KVxuICApO1xuXG4gIGFwcC5nZXQoU2VydmVyUm91dGVzLlNUUkVBTV9NT1ZJRSwgc3RyZWFtTW92aWVIYW5kbGVyKTtcblxuICBjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcbiAgICAgIHR5cGVEZWZzOiBbLi4uc2NhbGFyVHlwZURlZnMsIHR5cGVEZWZzXSxcbiAgICAgIHJlc29sdmVyczogeyAuLi5zY2FsYXJSZXNvbHZlcnMsIC4uLnJlc29sdmVycyB9LFxuICAgIH0pLFxuICAgIGNvbnRleHQ6ICh7IHJlcSwgcmVzIH06IEV4cHJlc3NDb250ZXh0KTogR3JhcGhRTENvbnRleHQgPT4gKHtcbiAgICAgIGRiOiBLbmV4LFxuICAgICAgcmVkaXM6IHJlZGlzQ2xpZW50LFxuICAgICAgcmVxdWVzdDogcmVxLFxuICAgICAgcmVzcG9uc2U6IHJlcyxcbiAgICB9KSxcbiAgfSk7XG5cbiAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XG5cbiAgc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCwgcGF0aDogYC9hcGkvZ3JhcGhxbGAsIGNvcnM6IGNvcnNPcHRpb25zIH0pO1xuXG4gIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8gV2Vic2l0ZSB5b3Ugd2lzaCB0byBhbGxvdyB0byBjb25uZWN0XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMGApOyAvLyBUT0RPOiB3aGF0IGFib3V0IHByb2Q/XG4gICAgLy8gUmVxdWVzdCBtZXRob2RzIHlvdSB3aXNoIHRvIGFsbG93XG4gICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QsIFBVVCwgUEFUQ0gsIERFTEVURScpO1xuICAgIC8vIFJlcXVlc3QgaGVhZGVycyB5b3Ugd2lzaCB0byBhbGxvd1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnWC1SZXF1ZXN0ZWQtV2l0aCxjb250ZW50LXR5cGUsIEF1dGhvcml6YXRpb24nKTtcbiAgICAvLyBTZXQgdG8gdHJ1ZSBpZiB5b3UgbmVlZCB0aGUgd2Vic2l0ZSB0byBpbmNsdWRlIGNvb2tpZXMgaW4gdGhlIHJlcXVlc3RzIHNlbnRcbiAgICAvLyB0byB0aGUgQVBJIChlLmcuIGluIGNhc2UgeW91IHVzZSBzZXNzaW9ucylcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgLy8gUGFzcyB0byBuZXh0IGxheWVyIG9mIG1pZGRsZXdhcmVcbiAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1FeHBvc2UtSGVhZGVycycsICdTZXQtQ29va2llJyk7XG4gICAgbmV4dCgpO1xuICB9KTtcblxuICBhcHAubGlzdGVuKHsgcG9ydDogSFRUUF9QT1JUIH0sICgpID0+IGNvbnNvbGUubG9nKGBBcHAgaXMgbGlzdGVuaW5nIG9uIFBvcnQgJHtIVFRQX1BPUlR9YCkpO1xufVxuXG50cnkge1xuICBzdGFydFNlcnZlcigpO1xufSBjYXRjaCAoc2VydmVyRXJyb3IpIHtcbiAgY29uc29sZS5lcnJvcihzZXJ2ZXJFcnJvcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=