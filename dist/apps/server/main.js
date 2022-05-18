/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/server/src/assets/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const neo4j_module_1 = __webpack_require__("./apps/server/src/assets/neo4j/neo4j.module.ts");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const apollo_1 = __webpack_require__("@nestjs/apollo");
const path_1 = __webpack_require__("path");
const neo4j_service_1 = __webpack_require__("./apps/server/src/assets/neo4j/neo4j.service.ts");
const apollo_server_core_1 = __webpack_require__("apollo-server-core");
const query_module_1 = __webpack_require__("./apps/server/src/assets/query/query.module.ts");
const nodes_module_1 = __webpack_require__("./apps/server/src/assets/graph/nodes/nodes.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            neo4j_module_1.Neo4jModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            query_module_1.QueryModule,
            query_module_1.QueryModule,
            nodes_module_1.NodesModule,
        ],
        providers: [neo4j_service_1.Neo4j],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/server/src/assets/graph/nodes/nodes.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodesModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const nodes_service_1 = __webpack_require__("./apps/server/src/assets/graph/nodes/nodes.service.ts");
const nodes_resolver_1 = __webpack_require__("./apps/server/src/assets/graph/nodes/nodes.resolver.ts");
const query_service_1 = __webpack_require__("./apps/server/src/assets/query/query.service.ts");
const neo4j_service_1 = __webpack_require__("./apps/server/src/assets/neo4j/neo4j.service.ts");
let NodesModule = class NodesModule {
};
NodesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [nodes_service_1.NodesService, nodes_resolver_1.NodesResolver, neo4j_service_1.Neo4j, query_service_1.QueryService],
    })
], NodesModule);
exports.NodesModule = NodesModule;


/***/ }),

/***/ "./apps/server/src/assets/graph/nodes/nodes.resolver.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodesResolver = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
const nodes_service_1 = __webpack_require__("./apps/server/src/assets/graph/nodes/nodes.service.ts");
const types_1 = __webpack_require__("./apps/server/src/assets/graph/nodes/types/index.ts");
let NodesResolver = class NodesResolver {
    constructor(service) {
        this.service = service;
    }
    findNodesOnLevel(level) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.findNodesOnLevel(level);
        });
    }
    createNode(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.service.createNode(node);
                console.log({ response });
                return response;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    createEdge(edge) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.createEdge(edge);
        });
    }
    deleteNode(nodeID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.deleteNode(nodeID);
        });
    }
    deleteEdge(edge) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.deleteEdge(edge);
        });
    }
};
tslib_1.__decorate([
    (0, graphql_1.Query)(() => types_1.Node),
    tslib_1.__param(0, (0, graphql_1.Args)('level')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NodesResolver.prototype, "findNodesOnLevel", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => types_1.Node),
    tslib_1.__param(0, (0, graphql_1.Args)('node')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof types_1.UserNode !== "undefined" && types_1.UserNode) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], NodesResolver.prototype, "createNode", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => [String, String]),
    tslib_1.__param(0, (0, graphql_1.Args)('edge')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof types_1.Edge !== "undefined" && types_1.Edge) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], NodesResolver.prototype, "createEdge", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => String, {
        nullable: true,
    }),
    tslib_1.__param(0, (0, graphql_1.Args)('nodeID')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], NodesResolver.prototype, "deleteNode", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => types_1.Edge, {
        nullable: true,
    }),
    tslib_1.__param(0, (0, graphql_1.Args)('edge')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof types_1.Edge !== "undefined" && types_1.Edge) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], NodesResolver.prototype, "deleteEdge", null);
NodesResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof nodes_service_1.NodesService !== "undefined" && nodes_service_1.NodesService) === "function" ? _h : Object])
], NodesResolver);
exports.NodesResolver = NodesResolver;


/***/ }),

/***/ "./apps/server/src/assets/graph/nodes/nodes.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodesService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const query_service_1 = __webpack_require__("./apps/server/src/assets/query/query.service.ts");
let NodesService = class NodesService {
    constructor(query) {
        this.query = query;
    }
    findNodesOnLevel(level) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { nodes } = yield this.query.result(` MATCH (nodes: Card)
        WHERE nodes.level = "${level}"
        RETURN nodes`, 'nodes');
            return nodes.properties;
        });
    }
    createNode(node) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { nodes } = yield this.query.result(` 
        CREATE (nodes: Card {
                date: apoc.date.toISO8601(datetime().epochMillis, "ms"),
                description: "${node.description}", 
                id: "${node.id}", 
                level: "${node.level}", 
                progress: 0, 
                title: "${node.title}"
            }) 
        RETURN nodes`, 'nodes');
            console.log(nodes);
            return nodes.properties;
        });
    }
    createEdge(edge) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { from, to } = edge;
            this.query.raw(`MATCH (from: Card), (to: Card) WHERE from.id = "${from}" AND to.id = "${to}" CREATE (from) -[connection:DIRECT_CONNECTION]-> (to)`);
            return [from, to];
        });
    }
    deleteNode(nodeID) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.query.raw(`MATCH(node:Card {id: "${nodeID}"}) DETACH DELETE (node)`);
                return nodeID;
            }
            catch (err) {
                console.error(err);
                return new Error(`${nodeID} does not appear to exist in the database`);
            }
        });
    }
    deleteEdge(edge) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.query.raw(`
      MATCH (:Card {id: "${edge.from}"}) -[connection]-> (:Card {id: "${edge.to}"})
      DELETE connection
      `);
                return edge;
            }
            catch (err) {
                console.error(err);
                return new Error(`We could not delete the edge between ${edge.from} ${edge.to}`);
            }
        });
    }
};
NodesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof query_service_1.QueryService !== "undefined" && query_service_1.QueryService) === "function" ? _a : Object])
], NodesService);
exports.NodesService = NodesService;


/***/ }),

/***/ "./apps/server/src/assets/graph/nodes/types/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./apps/server/src/assets/graph/nodes/types/node.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./apps/server/src/assets/graph/nodes/types/nodes.input.ts"), exports);


/***/ }),

/***/ "./apps/server/src/assets/graph/nodes/types/node.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeResponse = exports.UserNode = exports.Node = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let Node = class Node {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], Node.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], Node.prototype, "title", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], Node.prototype, "description", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], Node.prototype, "level", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {
        defaultValue: 0,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Node.prototype, "progress", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, {
        nullable: true,
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Node.prototype, "uploadDate", void 0);
Node = tslib_1.__decorate([
    (0, graphql_1.ObjectType)()
], Node);
exports.Node = Node;
let UserNode = class UserNode {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], UserNode.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], UserNode.prototype, "title", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], UserNode.prototype, "description", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], UserNode.prototype, "level", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {
        defaultValue: 0,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Number)
], UserNode.prototype, "progress", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime, {
        nullable: true,
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserNode.prototype, "uploadDate", void 0);
UserNode = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UserNode);
exports.UserNode = UserNode;
class NodeResponse {
}
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], NodeResponse.prototype, "identity", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => [String]),
    tslib_1.__metadata("design:type", Array)
], NodeResponse.prototype, "labels", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Node),
    tslib_1.__metadata("design:type", Node)
], NodeResponse.prototype, "proprieties", void 0);
exports.NodeResponse = NodeResponse;


/***/ }),

/***/ "./apps/server/src/assets/graph/nodes/types/nodes.input.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Edge = void 0;
const tslib_1 = __webpack_require__("tslib");
const graphql_1 = __webpack_require__("@nestjs/graphql");
let Edge = class Edge {
};
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Edge.prototype, "from", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, {
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Edge.prototype, "to", void 0);
Edge = tslib_1.__decorate([
    (0, graphql_1.InputType)('Edge'),
    (0, graphql_1.ObjectType)('ResponseEdge')
], Edge);
exports.Edge = Edge;


/***/ }),

/***/ "./apps/server/src/assets/neo4j/neo4j.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var Neo4jModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const cypher_query_builder_1 = __webpack_require__("cypher-query-builder");
const neo4j_service_1 = __webpack_require__("./apps/server/src/assets/neo4j/neo4j.service.ts");
let Neo4jModule = Neo4jModule_1 = class Neo4jModule {
    static forRoot() {
        return {
            module: Neo4jModule_1,
            imports: [config_1.ConfigModule],
            global: true,
            exports: ['NEO4J_CONNECTION'],
            providers: [
                {
                    provide: 'NEO4J_CONFIG',
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        host: configService.get('DATABASE_HOST'),
                        password: configService.get('DATABASE_PASSWORD'),
                        port: configService.get('DATABASE_PORT'),
                        scheme: configService.get('DATABASE_SCHEME'),
                        username: configService.get('DATABASE_USERNAME'),
                    }),
                },
                {
                    provide: 'NEO4J_CONNECTION',
                    inject: ['NEO4J_CONFIG'],
                    useFactory: (neo4jConfig) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const { password, username } = neo4jConfig;
                        const connection = new cypher_query_builder_1.Connection(`neo4j+s://6168ca73.databases.neo4j.io`, {
                            password,
                            username,
                        });
                        try {
                            yield connection.driver.verifyConnectivity();
                            return connection;
                        }
                        catch (e) {
                            throw new Error('NO CONNECTION AVAILABLE');
                        }
                    }),
                },
            ],
        };
    }
};
Neo4jModule = Neo4jModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [neo4j_service_1.Neo4j],
    })
], Neo4jModule);
exports.Neo4jModule = Neo4jModule;


/***/ }),

/***/ "./apps/server/src/assets/neo4j/neo4j.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4j = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const cypher_query_builder_1 = __webpack_require__("cypher-query-builder");
let Neo4j = class Neo4j {
    constructor(connection) {
        this.connection = connection;
    }
    query() {
        return this.connection.query();
    }
};
Neo4j = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)('NEO4J_CONNECTION')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cypher_query_builder_1.Connection !== "undefined" && cypher_query_builder_1.Connection) === "function" ? _a : Object])
], Neo4j);
exports.Neo4j = Neo4j;


/***/ }),

/***/ "./apps/server/src/assets/query/query.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const neo4j_service_1 = __webpack_require__("./apps/server/src/assets/neo4j/neo4j.service.ts");
const query_service_1 = __webpack_require__("./apps/server/src/assets/query/query.service.ts");
let QueryModule = class QueryModule {
};
QueryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [query_service_1.QueryService, neo4j_service_1.Neo4j],
        exports: [query_service_1.QueryService],
    })
], QueryModule);
exports.QueryModule = QueryModule;


/***/ }),

/***/ "./apps/server/src/assets/query/query.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const neo4j_service_1 = __webpack_require__("./apps/server/src/assets/neo4j/neo4j.service.ts");
let QueryService = class QueryService {
    constructor(neo4j) {
        this.neo4j = neo4j;
    }
    result(clause, result) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.neo4j.query().raw(clause).run()[0][result];
            return data;
        });
    }
    raw(clause) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.neo4j.query().raw(clause).run();
        });
    }
};
QueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof neo4j_service_1.Neo4j !== "undefined" && neo4j_service_1.Neo4j) === "function" ? _a : Object])
], QueryService);
exports.QueryService = QueryService;


/***/ }),

/***/ "@nestjs/apollo":
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "apollo-server-core":
/***/ ((module) => {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "cypher-query-builder":
/***/ ((module) => {

module.exports = require("cypher-query-builder");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./apps/server/src/assets/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        yield app.listen(5000);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map