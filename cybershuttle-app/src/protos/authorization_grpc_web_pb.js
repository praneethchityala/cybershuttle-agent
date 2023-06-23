/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.2
// source: authorization.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./authorization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateUserRequest,
 *   !proto.CreateUserResponse>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.CreateUserRequest,
  proto.CreateUserResponse,
  /**
   * @param {!proto.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateUserResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetUserRequest,
 *   !proto.GetUserResponse>}
 */
const methodDescriptor_UserService_GetUser = new grpc.web.MethodDescriptor(
  '/UserService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.GetUserRequest,
  proto.GetUserResponse,
  /**
   * @param {!proto.GetUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser,
      callback);
};


/**
 * @param {!proto.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetUserResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateTokenRequest,
 *   !proto.CreateTokenResponse>}
 */
const methodDescriptor_UserService_CreateToken = new grpc.web.MethodDescriptor(
  '/UserService/CreateToken',
  grpc.web.MethodType.UNARY,
  proto.CreateTokenRequest,
  proto.CreateTokenResponse,
  /**
   * @param {!proto.CreateTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateTokenResponse.deserializeBinary
);


/**
 * @param {!proto.CreateTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CreateTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.createToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/CreateToken',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateToken,
      callback);
};


/**
 * @param {!proto.CreateTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateTokenResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.createToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/CreateToken',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.IsAuthenticatedRequest,
 *   !proto.IsAuthenticatedResponse>}
 */
const methodDescriptor_UserService_IsAuthenticated = new grpc.web.MethodDescriptor(
  '/UserService/IsAuthenticated',
  grpc.web.MethodType.UNARY,
  proto.IsAuthenticatedRequest,
  proto.IsAuthenticatedResponse,
  /**
   * @param {!proto.IsAuthenticatedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.IsAuthenticatedResponse.deserializeBinary
);


/**
 * @param {!proto.IsAuthenticatedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.IsAuthenticatedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.IsAuthenticatedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.isAuthenticated =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/IsAuthenticated',
      request,
      metadata || {},
      methodDescriptor_UserService_IsAuthenticated,
      callback);
};


/**
 * @param {!proto.IsAuthenticatedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.IsAuthenticatedResponse>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.isAuthenticated =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/IsAuthenticated',
      request,
      metadata || {},
      methodDescriptor_UserService_IsAuthenticated);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.HelloRequest,
 *   !proto.HelloReply>}
 */
const methodDescriptor_UserService_SayHello = new grpc.web.MethodDescriptor(
  '/UserService/SayHello',
  grpc.web.MethodType.UNARY,
  proto.HelloRequest,
  proto.HelloReply,
  /**
   * @param {!proto.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.HelloReply.deserializeBinary
);


/**
 * @param {!proto.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/SayHello',
      request,
      metadata || {},
      methodDescriptor_UserService_SayHello,
      callback);
};


/**
 * @param {!proto.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.HelloReply>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/SayHello',
      request,
      metadata || {},
      methodDescriptor_UserService_SayHello);
};


module.exports = proto;

