require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/__mocks__/mockResolver.ts":
/*!***************************************!*\
  !*** ./src/__mocks__/mockResolver.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = __webpack_require__(/*! ../libs/token */ "./src/libs/token.ts");
var mocks_1 = __webpack_require__(/*! ./mocks */ "./src/__mocks__/mocks.ts");
var sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
var MOCK_DATA_DELAY = 300;
var QUACKS_LIMIT = 20;
var QUACK_TEXT_LIMIT = 250;
function getAuthUser(dbUser) {
    return {
        id: dbUser.id,
        name: dbUser.name,
        userName: dbUser.userName,
        profileImageUrl: dbUser.profileImageUrl,
    };
}
exports.default = {
    Query: {
        users: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sleep(MOCK_DATA_DELAY)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, mocks_1.users];
                    }
                });
            });
        },
        user: function (_, _a) {
            var userName = _a.userName;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, sleep(MOCK_DATA_DELAY)];
                        case 1:
                            _b.sent();
                            return [2 /*return*/, mocks_1.users.find(function (user) { return user.userName === userName; })];
                    }
                });
            });
        },
        quacks: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sleep(MOCK_DATA_DELAY)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, mocks_1.quacks.slice(0, QUACKS_LIMIT)];
                    }
                });
            });
        },
    },
    Mutation: {
        signin: function () {
            return __awaiter(this, void 0, void 0, function () {
                var user, token;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sleep(MOCK_DATA_DELAY)];
                        case 1:
                            _a.sent();
                            user = getAuthUser(mocks_1.users[0]);
                            token = (0, token_1.createToken)(user);
                            return [2 /*return*/, {
                                    user: user,
                                    token: token,
                                }];
                    }
                });
            });
        },
        signup: function (_, _a) {
            var email = _a.email, password = _a.password, name = _a.name, userName = _a.userName;
            return __awaiter(this, void 0, void 0, function () {
                var id, profileImageUrl, dbUser, user, token;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, sleep(MOCK_DATA_DELAY)];
                        case 1:
                            _b.sent();
                            if (mocks_1.users.find(function (user) {
                                return user.userName.toLowerCase() === userName.trim().toLowerCase();
                            })) {
                                throw Error('This username is already taken');
                            }
                            if (mocks_1.users.find(function (user) { return user.email.toLowerCase() === email.trim().toLowerCase(); })) {
                                throw Error('User with this email is already registered');
                            }
                            id = mocks_1.users.length + 1;
                            profileImageUrl = "https://eu.ui-avatars.com/api/?size=128&name=".concat(encodeURIComponent(name.trim()));
                            dbUser = {
                                id: id,
                                name: name.trim(),
                                userName: userName.trim(),
                                email: email.trim(),
                                profileImageUrl: profileImageUrl,
                            };
                            user = getAuthUser(dbUser);
                            token = (0, token_1.createToken)(user);
                            mocks_1.users.push(dbUser);
                            return [2 /*return*/, { user: user, token: token }];
                    }
                });
            });
        },
        addQuack: function (_, _a) {
            var userId = _a.userId, text = _a.text;
            return __awaiter(this, void 0, void 0, function () {
                var user, quack;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, sleep(MOCK_DATA_DELAY)];
                        case 1:
                            _b.sent();
                            if (!(text || '').trim()) {
                                throw Error('No text provided');
                            }
                            if (text.trim().length > QUACK_TEXT_LIMIT) {
                                throw Error('Text is too long');
                            }
                            user = mocks_1.users.find(function (user) { return user.id === userId; });
                            if (!user) {
                                throw Error('User not found');
                            }
                            quack = {
                                id: mocks_1.quacks.length + 1,
                                createdAt: new Date().toISOString(),
                                userId: userId,
                                text: text,
                            };
                            mocks_1.quacks.splice(0, 0, quack);
                            return [2 /*return*/, quack];
                    }
                });
            });
        },
    },
    User: {
        quacks: function (_a) {
            var id = _a.id;
            return mocks_1.quacks
                .filter(function (quack) { return quack.userId === id; })
                .slice(0, QUACKS_LIMIT);
        },
    },
    Quack: {
        user: function (_a) {
            var userId = _a.userId;
            return mocks_1.users.find(function (user) { return user.id === userId; });
        },
    },
};


/***/ }),

/***/ "./src/__mocks__/mocks.ts":
/*!********************************!*\
  !*** ./src/__mocks__/mocks.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mocks = exports.quacks = exports.users = void 0;
exports.users = [
    {
        id: 1,
        name: 'Tommy Toe',
        userName: 'tt123',
        email: 'tt123@bliss.se',
        profileImageUrl: 'http://mrmrs.github.io/photos/p/1.jpg',
    },
    {
        id: 2,
        name: 'John Doe',
        userName: 'johndoe',
        email: 'jd@bliss.se',
        profileImageUrl: 'http://mrmrs.github.io/photos/p/2.jpg',
    },
];
exports.quacks = [
    {
        id: 3,
        createdAt: '2019-08-08T05:43:18.023Z',
        userId: 2,
        text: 'Hello, People of the World!',
    },
    {
        id: 2,
        createdAt: '2019-08-06T14:10:51.023Z',
        userId: 1,
        text: 'Como setas?',
    },
    {
        id: 1,
        createdAt: '2019-08-03T09:09:34.023Z',
        userId: 2,
        text: 'Hello, People of the World! Hello, People of the World! Hello, People of the World! Hello, People of the World! Hello,\n\nWorld!',
    },
];
exports.mocks = {
    users: exports.users,
    quacks: exports.quacks,
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_flow_1 = __importDefault(__webpack_require__(/*! dotenv-flow */ "dotenv-flow"));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
var apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
var apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");
var connection_1 = __webpack_require__(/*! ./libs/connection */ "./src/libs/connection.ts");
var rootResolver_1 = __importDefault(__webpack_require__(/*! ./modules/rootResolver */ "./src/modules/rootResolver.ts"));
var mockResolver_1 = __importDefault(__webpack_require__(/*! ./__mocks__/mockResolver */ "./src/__mocks__/mockResolver.ts"));
dotenv_flow_1.default.config();
var MOCKS = process.env.MOCKS === 'true';
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: Int!\n    name: String!\n    userName: String!\n    profileImageUrl: String\n    quacks: [Quack!]!\n  }\n\n  type Quack {\n    id: Int!\n    createdAt: String!\n    user: User!\n    userId: Int!\n    text: String!\n  }\n\n  type AuthUser {\n    id: Int!\n    name: String!\n    userName: String!\n    profileImageUrl: String\n  }\n\n  type AuthInfo {\n    user: AuthUser!\n    token: String!\n  }\n\n  type Query {\n    users: [User!]!\n    user(userName: String!): User\n    quacks: [Quack!]!\n  }\n\n  type Mutation {\n    signin(email: String!, password: String!): AuthInfo!\n\n    signup(\n      email: String!\n      password: String!\n      name: String!\n      userName: String!\n      profileImageUrl: String\n    ): AuthInfo!\n\n    addQuack(userId: Int!, text: String!): Quack!\n  }\n"], ["\n  type User {\n    id: Int!\n    name: String!\n    userName: String!\n    profileImageUrl: String\n    quacks: [Quack!]!\n  }\n\n  type Quack {\n    id: Int!\n    createdAt: String!\n    user: User!\n    userId: Int!\n    text: String!\n  }\n\n  type AuthUser {\n    id: Int!\n    name: String!\n    userName: String!\n    profileImageUrl: String\n  }\n\n  type AuthInfo {\n    user: AuthUser!\n    token: String!\n  }\n\n  type Query {\n    users: [User!]!\n    user(userName: String!): User\n    quacks: [Quack!]!\n  }\n\n  type Mutation {\n    signin(email: String!, password: String!): AuthInfo!\n\n    signup(\n      email: String!\n      password: String!\n      name: String!\n      userName: String!\n      profileImageUrl: String\n    ): AuthInfo!\n\n    addQuack(userId: Int!, text: String!): Quack!\n  }\n"])));
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, dbConnection, _a, apolloServer, port;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                app = (0, express_1.default)();
                app.disable('x-powered-by');
                app.use((0, cors_1.default)());
                if (!MOCKS) return [3 /*break*/, 1];
                _a = null;
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, (0, connection_1.getConnection)()];
            case 2:
                _a = _b.sent();
                _b.label = 3;
            case 3:
                dbConnection = _a;
                apolloServer = new apollo_server_express_1.ApolloServer({
                    typeDefs: typeDefs,
                    resolvers: MOCKS ? mockResolver_1.default : rootResolver_1.default,
                    context: function (_a) {
                        var req = _a.req, res = _a.res;
                        return __awaiter(void 0, void 0, void 0, function () {
                            var auth;
                            return __generator(this, function (_b) {
                                auth = req.headers.Authorization || '';
                                return [2 /*return*/, {
                                        req: req,
                                        res: res,
                                        dbConnection: dbConnection,
                                        auth: auth,
                                    }];
                            });
                        });
                    },
                    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
                });
                return [4 /*yield*/, apolloServer.start()];
            case 4:
                _b.sent();
                apolloServer.applyMiddleware({ app: app, cors: false });
                port = process.env.PORT || 4000;
                app.get('/', function (_, res) { return res.redirect('/graphql'); });
                app.listen(port, function () {
                    console.info("Server started at http://localhost:".concat(port, "/graphql"));
                });
                return [2 /*return*/];
        }
    });
}); };
main();
var templateObject_1;


/***/ }),

/***/ "./src/libs/connection.ts":
/*!********************************!*\
  !*** ./src/libs/connection.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
var mariadb_1 = __importDefault(__webpack_require__(/*! mariadb */ "mariadb"));
var getConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
    var conn, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                conn = void 0;
                if (!!conn) return [3 /*break*/, 2];
                return [4 /*yield*/, mariadb_1.default.createConnection({
                        host: process.env.DB_HOST,
                        port: parseInt(process.env.DB_PORT, 10),
                        user: process.env.DB_USER,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_NAME,
                    })];
            case 1:
                conn = _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, conn];
            case 3:
                err_1 = _a.sent();
                console.log('err', err_1);
                throw err_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getConnection = getConnection;


/***/ }),

/***/ "./src/libs/token.ts":
/*!***************************!*\
  !*** ./src/libs/token.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
var jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
function createToken(content) {
    return jsonwebtoken_1.default.sign(content, process.env.JWT_SECRET);
}
exports.createToken = createToken;
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
}
exports.verifyToken = verifyToken;


/***/ }),

/***/ "./src/modules/quack/index.ts":
/*!************************************!*\
  !*** ./src/modules/quack/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = exports.mutations = void 0;
var mutations = __importStar(__webpack_require__(/*! ./mutation */ "./src/modules/quack/mutation.ts"));
exports.mutations = mutations;
var queries = __importStar(__webpack_require__(/*! ./query */ "./src/modules/quack/query.ts"));
exports.queries = queries;


/***/ }),

/***/ "./src/modules/quack/mutation.ts":
/*!***************************************!*\
  !*** ./src/modules/quack/mutation.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQuack = void 0;
var addQuack = function (_, _a, _b) {
    var userId = _a.userId, text = _a.text;
    var dbConnection = _b.dbConnection;
    return __awaiter(void 0, void 0, void 0, function () {
        var createdAt, dbResponse, quack;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    createdAt = new Date().toISOString();
                    return [4 /*yield*/, dbConnection.query("INSERT INTO quack (id, createdAt, userId, text) \n    VALUES (NULL, ?, ?, ?);", [createdAt, userId, text])];
                case 1:
                    dbResponse = _c.sent();
                    return [4 /*yield*/, dbConnection.query("SELECT * FROM quack WHERE id = ?", [
                            dbResponse.insertId,
                        ])];
                case 2:
                    quack = (_c.sent())[0];
                    return [2 /*return*/, quack];
            }
        });
    });
};
exports.addQuack = addQuack;


/***/ }),

/***/ "./src/modules/quack/query.ts":
/*!************************************!*\
  !*** ./src/modules/quack/query.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quacks = void 0;
var quacks = function (_, __, _a) {
    var dbConnection = _a.dbConnection;
    return __awaiter(void 0, void 0, void 0, function () {
        var quacks;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, dbConnection.query("SELECT * FROM quack")];
                case 1:
                    quacks = _b.sent();
                    return [2 /*return*/, quacks];
            }
        });
    });
};
exports.quacks = quacks;


/***/ }),

/***/ "./src/modules/rootResolver.ts":
/*!*************************************!*\
  !*** ./src/modules/rootResolver.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var quack_1 = __webpack_require__(/*! ./quack */ "./src/modules/quack/index.ts");
var user_1 = __webpack_require__(/*! ./user */ "./src/modules/user/index.ts");
exports.default = {
    Query: __assign(__assign({}, quack_1.queries), user_1.queries),
    Mutation: __assign(__assign({}, quack_1.mutations), user_1.mutations),
    User: {
        quacks: function (parent, _, _a) {
            var dbConnection = _a.dbConnection;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, dbConnection.query("SELECT * FROM quack WHERE userId = ?", [
                                parent.id,
                            ])];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
    },
    Quack: {
        user: function (parent, _, _a) {
            var dbConnection = _a.dbConnection;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, dbConnection.query("SELECT * FROM user WHERE id = ?", [
                                parent.userId,
                            ])];
                        case 1: return [2 /*return*/, (_b.sent())[0]];
                    }
                });
            });
        },
    },
};


/***/ }),

/***/ "./src/modules/user/index.ts":
/*!***********************************!*\
  !*** ./src/modules/user/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = exports.mutations = void 0;
var mutations = __importStar(__webpack_require__(/*! ./mutation */ "./src/modules/user/mutation.ts"));
exports.mutations = mutations;
var queries = __importStar(__webpack_require__(/*! ./query */ "./src/modules/user/query.ts"));
exports.queries = queries;


/***/ }),

/***/ "./src/modules/user/mutation.ts":
/*!**************************************!*\
  !*** ./src/modules/user/mutation.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.signin = void 0;
var argon2 = __importStar(__webpack_require__(/*! argon2 */ "argon2"));
var token_1 = __webpack_require__(/*! ../../libs/token */ "./src/libs/token.ts");
var signin = function (_, _a, _b) {
    var email = _a.email, password = _a.password;
    var dbConnection = _b.dbConnection;
    return __awaiter(void 0, void 0, void 0, function () {
        var dbResponse, user, token;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, dbConnection.query("SELECT * FROM user WHERE email = ?", [email])];
                case 1:
                    dbResponse = _c.sent();
                    user = dbResponse[0];
                    return [4 /*yield*/, argon2.verify(user.password, password)];
                case 2:
                    if (_c.sent()) {
                        token = (0, token_1.createToken)({ id: user.id });
                        return [2 /*return*/, {
                                user: __assign({}, user),
                                token: token,
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.signin = signin;
var signup = function (_, _a, _b) {
    var email = _a.email, password = _a.password, name = _a.name, userName = _a.userName, _c = _a.profileImageUrl, profileImageUrl = _c === void 0 ? 'http://mrmrs.github.io/photos/p/1.jpg' : _c;
    var dbConnection = _b.dbConnection;
    return __awaiter(void 0, void 0, void 0, function () {
        var userByUserName, userByEmail, passwordHash, dbResponse, token, userObject;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, dbConnection.query("SELECT * FROM user WHERE userName = ?", [
                        userName,
                    ])];
                case 1:
                    userByUserName = (_d.sent())[0];
                    if (userByUserName) {
                        throw new Error('Username already taken');
                    }
                    return [4 /*yield*/, dbConnection.query("SELECT * FROM user WHERE email = ?", [email])];
                case 2:
                    userByEmail = (_d.sent())[0];
                    if (userByEmail) {
                        throw new Error('Email already registered');
                    }
                    return [4 /*yield*/, argon2.hash(password)];
                case 3:
                    passwordHash = _d.sent();
                    return [4 /*yield*/, dbConnection.query("INSERT INTO user (id, email, password, name, userName, profileImageUrl) \n    VALUES (NULL, ?, ?, ?, ?, ?);", [email, passwordHash, name, userName, profileImageUrl])];
                case 4:
                    dbResponse = _d.sent();
                    token = (0, token_1.createToken)({ id: dbResponse.insertId });
                    userObject = {
                        id: dbResponse.insertId,
                        email: email,
                        name: name,
                        userName: userName,
                        profileImageUrl: profileImageUrl,
                    };
                    return [2 /*return*/, { user: userObject, token: token }];
            }
        });
    });
};
exports.signup = signup;


/***/ }),

/***/ "./src/modules/user/query.ts":
/*!***********************************!*\
  !*** ./src/modules/user/query.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.users = void 0;
var users = function (_, __, _a) {
    var dbConnection = _a.dbConnection;
    return __awaiter(void 0, void 0, void 0, function () {
        var users;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, dbConnection.query('SELECT * FROM user')];
                case 1:
                    users = _b.sent();
                    return [2 /*return*/, users];
            }
        });
    });
};
exports.users = users;
var user = function (_, _a, _b) {
    var userName = _a.userName;
    var dbConnection = _b.dbConnection;
    return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, dbConnection.query("SELECT * FROM user WHERE userName = ?", [
                        userName,
                    ])];
                case 1:
                    user = (_c.sent())[0];
                    if (!user) {
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, user];
            }
        });
    });
};
exports.user = user;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("argon2");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv-flow":
/*!******************************!*\
  !*** external "dotenv-flow" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv-flow");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mariadb":
/*!**************************!*\
  !*** external "mariadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mariadb");

/***/ })

/******/ });
//# sourceMappingURL=main.map