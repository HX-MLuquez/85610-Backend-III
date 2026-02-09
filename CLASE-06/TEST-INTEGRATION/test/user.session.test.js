import { expect } from "chai";
import { describe, it, before, after } from "mocha";

import supertest from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";

mongoose.set("strictQuery", true);
const MONGO_URI =
  "mongodb://localhost:27017/integration_testing?directConnection=true";

//   _____________________________________
//* |         *** CODE AQUI ***           |
//  |_____________________________________|

// Instancia de supertest apuntando a tu servidor
// const request = supertest("http://localhost:8080");
const request = supertest(app);

//* request {} <- es nuestro Servidor Test <---- request===appServerTest

describe("Testing users Api", function () {
  //   _____________________________________
  //* |         *** CODE AQUI ***           |
  //  |_____________________________________|
  // Aumenta el timeout por si la conexión es lenta
  this.timeout(6000);

  before(async function () {
    // Conexión a MongoDB antes de correr los tests
    await mongoose
      .connect(MONGO_URI)
      .then(() => {
        console.log("Connected to MongoDB for testing");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB for testing:", err);
      });
    // Usuario de prueba
    this.mockUser = {
      first_name: "Usuario de prueba 2",
      last_name: "Apellido de prueba 2",
      email: "correodeprueba2@gmail.com",
      password: "123456",
    };
    this.cookie = null;
  });
  after(async function () {
    // Limpia la colección de usuarios después de correr los tests
    await mongoose.connection.collection("users").deleteMany({
      email: this.mockUser.email,
    });

    // Cierra la conexión a MongoDB después de correr todos los tests
    await mongoose.connection.close();
  });

  // Test 01 - Registro de un User
  it("Test Registro Usuario: Debe poder registrar correctamente un usuario", async function () {
    // const result = await request
    //   .post("/api/sessions/register") // método HTTP y ruta a testear
    //   .send(this.mockUser); // data que se envía en el body de la petición
    //   console.log("result: ", result); //  { status: 'success', payload: '6989f18956ab25abd1f5dc1b' }
    const { statusCode } = await request
      .post("/api/sessions/register")
      .send(this.mockUser);

    expect(statusCode).to.eql(200);
    console.log("Usuario registrado correctamente", statusCode);
  });

  // Test 02 - Login de un User
  it("Test Login Usuario: Debe poder hacer login correctamente con el usuario registrado previamente y obtener la cookie", async function () {
    const mockLogin = {
      email: this.mockUser.email,
      password: this.mockUser.password,
    };

    const result = await request.post("/api/sessions/login").send(mockLogin);

    // console.log("result: ", result.header)
    /*
    {
    'x-powered-by': 'Express',
    'set-cookie': [
        'coderCookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXN1YXJpbyBkZSBwcnVlYmEgMiBBcGVsbGlkbyBkZSBwcnVlYmEgMiIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJjb3JyZW9kZXBydWViYTJAZ21haWwuY29tIiwiaWF0IjoxNzU1NjQ3NTc0LCJleHAiOjE3NTU2NTExNzR9.g3zlzjtMAC6Iif46E_6lu6JcVCikIMWIO_qLmQe1tWE; Max-Age=3600; Path=/; Expires=Wed, 20 Aug 2025 00:52:54 GMT'
    ],
    'content-type': 'application/json; charset=utf-8',
    'content-length': '42',
    etag: 'W/"2a-+4Ut8N7VOzSapTSdfsMKnJhY+do"',
    date: 'Tue, 19 Aug 2025 23:52:54 GMT',
    connection: 'close'
    }
    date: 'Tue, 19 Aug 2025 23:52:54 GMT',
    connection: 'close'
    }
    */
    const cookieResult = result.header["set-cookie"][0];
    const cookieData = cookieResult.split("=");

    this.cookie = {
      name: cookieData[0], // -> 'coderCookie'
      value: cookieData[1].split(";")[0],
    };
    expect(this.cookie.name).to.eql("coderCookie");
    expect(this.cookie.value).to.be.ok;
  });

  it("Test Cookie Auth: Debe permitir acceso a ruta protegida enviando la cookie", async function () {
    const result = await request
      .get("/api/sessions/current") 
      .set("Cookie", `${this.cookie.name}=${this.cookie.value}`);

    expect(result.status).to.eql(200);
    // expect(result.body).to.have.property("email", this.mockUser.email);
  });

  it("Test Upload Pet con imagen: Debe crear una mascota y guardar la imagen correctamente", async function () {
    // Mock de mascota a crear
    const mockPet = {
      name: "Nemo",
      specie: "Pez",
      birthDate: "10-11-2022",
    };

    // Realiza la petición POST con campos y archivo adjunto
    const result = await request
      .post("/api/pets/withimage")
      .field("name", mockPet.name)
      .field("specie", mockPet.specie)
      .field("birthDate", mockPet.birthDate)
      .attach("image", "./test/files/coderDog.jpg");

    // Corroboramos que la petición haya resultado en OK
    expect(result.status).to.be.eql(200);
    // Corroboramos que el payload tenga un _id, indicando que se guardó en la BD
    expect(result.body.payload).to.have.property("_id");
    // Finalmente, corroboramos que la mascota guardada también tenga el campo image definido
    expect(result.body.payload.image).to.be.ok;
  });
});

/*
requestSupertestServerCloneMoreTest {
  métodos
  routes de nuestra app
}

describe{

    conectado a la base de datos
    mockUser {}
    cookie null 
}




npm test 

describe {


}
before -> conectar a la base de datos
describe {
mockUser: {
      first_name: "Usuario de prueba 2",
      last_name: "Apellido de prueba 2",
      email: "correodeprueba2@gmail.com",
      password: "123456",
    };
cookie: null;
}


* SERVER 
app {
get /api/sessions/register  
post /api/sessions/login
post /api/pets/withimage
get: function(){...} 
use: function(){...}
listen: function(){...}
...
}

---> requestSUPERTEST 
requestSupertestServerCloneMoreTest {
get /api/sessions/register  
post /api/sessions/login
post /api/pets/withimage
get: function(){...} 
use: function(){...}
listen: function(){...}
...
+ métodos para testear que implementa supertest
+ - .get()
+ - .post()
+ - .put()
+ - .delete()
+ - .set()
+ - .expect()
+ - .send()
+ - .attach()
...
}


---


result:  <ref *2> Response {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  res: <ref *1> IncomingMessage {
    _events: {
      close: [Function: bound emit],
      error: [Array],
      data: [Array],
      end: [Array],
      readable: undefined
    },
    _readableState: ReadableState {
      highWaterMark: 16384,
      buffer: [],
      bufferIndex: 0,
      length: 0,
      pipes: [],
      awaitDrainWriters: null,
      Symbol(kState): 201070460,
      Symbol(kDecoderValue): [StringDecoder],
      Symbol(kEncodingValue): 'utf8'
    },
    _maxListeners: undefined,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _events: [Object],
      _readableState: [ReadableState],
      _writableState: [WritableState],
      allowHalfOpen: false,
      _maxListeners: undefined,
      _eventsCount: 7,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      Symbol(async_id_symbol): 433,
      Symbol(kHandle): [TCP],
      Symbol(lastWriteQueueSize): 0,
      Symbol(timeout): null,
      Symbol(kBuffer): null,
      Symbol(kBufferCb): null,
      Symbol(kBufferGen): null,
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kSetNoDelay): true,
      Symbol(kSetKeepAlive): false,
      Symbol(kSetKeepAliveInitialDelay): 0,
      Symbol(kBytesRead): 0,
      Symbol(kBytesWritten): 0
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    rawHeaders: [
      'X-Powered-By',
      'Express',
      'Content-Type',
      'application/json; charset=utf-8',
      'Content-Length',
      '57',
      'ETag',
      'W/"39-zyfictPtHmWJdCmOq+XcGDo/hWw"',
      'Date',
      'Mon, 09 Feb 2026 14:43:29 GMT',
      'Connection',
      'close'
    ],
    rawTrailers: [],
    joinDuplicateHeaders: undefined,
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _events: [Object],
      _readableState: [ReadableState],
      _writableState: [WritableState],
      allowHalfOpen: false,
      _maxListeners: undefined,
      _eventsCount: 7,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      Symbol(async_id_symbol): 433,
      Symbol(kHandle): [TCP],
      Symbol(lastWriteQueueSize): 0,
      Symbol(timeout): null,
      Symbol(kBuffer): null,
      Symbol(kBufferCb): null,
      Symbol(kBufferGen): null,
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kSetNoDelay): true,
      Symbol(kSetKeepAlive): false,
      Symbol(kSetKeepAliveInitialDelay): 0,
      Symbol(kBytesRead): 0,
      Symbol(kBytesWritten): 0
    },
    _consuming: false,
    _dumped: false,
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 127,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      _header: 'POST /api/sessions/register HTTP/1.1\r\n' +
        'Host: 127.0.0.1:53814\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 127\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/api/sessions/register',
      _ended: true,
      res: [Circular *1],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: '127.0.0.1',
      protocol: 'http:',
      Symbol(shapeMode): false,
      Symbol(kCapture): false,
      Symbol(kBytesWritten): 0,
      Symbol(kNeedDrain): false,
      Symbol(corked): 0,
      Symbol(kChunkedBuffer): [],
      Symbol(kChunkedLength): 0,
      Symbol(kSocket): [Socket],
      Symbol(kOutHeaders): [Object: null prototype],
      Symbol(errored): null,
      Symbol(kHighWaterMark): 16384,
      Symbol(kRejectNonStandardBodyWrites): false,
      Symbol(kUniqueHeaders): null
    },
    _eventsCount: 4,
    text: '{"status":"success","payload":"6989f2911fde70b0557160f2"}',
    Symbol(shapeMode): true,
    Symbol(kCapture): false,
    Symbol(kHeaders): {
      'x-powered-by': 'Express',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '57',
      etag: 'W/"39-zyfictPtHmWJdCmOq+XcGDo/hWw"',
      date: 'Mon, 09 Feb 2026 14:43:29 GMT',
      connection: 'close'
    },
    Symbol(kHeadersCount): 12,
    Symbol(kTrailers): null,
    Symbol(kTrailersCount): 0
  },
  request: Test {
    _events: [Object: null prototype] { abort: [Function (anonymous)] },
    _eventsCount: 1,
    _maxListeners: undefined,
    _enableHttp2: false,
    _agent: false,
    _formData: null,
    method: 'POST',
    url: 'http://127.0.0.1:53814/api/sessions/register',
    _header: { 'content-type': 'application/json' },
    header: { 'Content-Type': 'application/json' },
    writable: true,
    _redirects: 0,
    _maxRedirects: 0,
    cookies: '',
    qs: {},
    _query: [],
    qsRaw: [],
    _redirectList: [],
    _streamRequest: false,
    _lookup: undefined,
    _buffer: true,
    app: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      keepAliveTimeoutBuffer: 1000,
      connectionsCheckingInterval: 30000,
      requireHostHeader: true,
      joinDuplicateHeaders: undefined,
      rejectNonStandardBodyWrites: false,
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      _connections: 0,
      _handle: null,
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      _listeningId: 3,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      highWaterMark: 16384,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::0',
      Symbol(IncomingMessage): [Function: IncomingMessage],
      Symbol(ServerResponse): [Function: ServerResponse],
      Symbol(shapeMode): false,
      Symbol(kCapture): false,
      Symbol(async_id_symbol): 429,
      Symbol(kUniqueHeaders): null,
      Symbol(http.server.connections): ConnectionsList {},
      Symbol(http.server.connectionsCheckingInterval): Timeout {
        _idleTimeout: -1,
        _idlePrev: null,
        _idleNext: null,
        _idleStart: 1263,
        _onTimeout: null,
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: true,
        Symbol(refed): false,
        Symbol(kHasPrimitive): false,
        Symbol(asyncId): 432,
        Symbol(triggerId): 430,
        Symbol(kAsyncContextFrame): undefined
      }
    },
    _asserts: [],
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      keepAliveTimeoutBuffer: 1000,
      connectionsCheckingInterval: 30000,
      requireHostHeader: true,
      joinDuplicateHeaders: undefined,
      rejectNonStandardBodyWrites: false,
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      _connections: 0,
      _handle: null,
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      _listeningId: 3,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      highWaterMark: 16384,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::0',
      Symbol(IncomingMessage): [Function: IncomingMessage],
      Symbol(ServerResponse): [Function: ServerResponse],
      Symbol(shapeMode): false,
      Symbol(kCapture): false,
      Symbol(async_id_symbol): 429,
      Symbol(kUniqueHeaders): null,
      Symbol(http.server.connections): ConnectionsList {},
      Symbol(http.server.connectionsCheckingInterval): Timeout {
        _idleTimeout: -1,
        _idlePrev: null,
        _idleNext: null,
        _idleStart: 1263,
        _onTimeout: null,
        _timerArgs: undefined,
        _repeat: 30000,
        _destroyed: true,
        Symbol(refed): false,
        Symbol(kHasPrimitive): false,
        Symbol(asyncId): 432,
        Symbol(triggerId): 430,
        Symbol(kAsyncContextFrame): undefined
      }
    },
    _data: {
      first_name: 'Usuario de prueba 2',
      last_name: 'Apellido de prueba 2',
      email: 'correodeprueba2@gmail.com',
      password: '123456'
    },
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 127,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      _header: 'POST /api/sessions/register HTTP/1.1\r\n' +
        'Host: 127.0.0.1:53814\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 127\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/api/sessions/register',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: '127.0.0.1',
      protocol: 'http:',
      Symbol(shapeMode): false,
      Symbol(kCapture): false,
      Symbol(kBytesWritten): 0,
      Symbol(kNeedDrain): false,
      Symbol(corked): 0,
      Symbol(kChunkedBuffer): [],
      Symbol(kChunkedLength): 0,
      Symbol(kSocket): [Socket],
      Symbol(kOutHeaders): [Object: null prototype],
      Symbol(errored): null,
      Symbol(kHighWaterMark): 16384,
      Symbol(kRejectNonStandardBodyWrites): false,
      Symbol(kUniqueHeaders): null
    },
    protocol: 'http:',
    host: '127.0.0.1:53814',
    _endCalled: true,
    _callback: [Function (anonymous)],
    _fullfilledPromise: Promise { [Circular *2] },
    res: <ref *1> IncomingMessage {
      _events: [Object],
      _readableState: [ReadableState],
      _maxListeners: undefined,
      socket: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      joinDuplicateHeaders: undefined,
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [ClientRequest],
      _eventsCount: 4,
      text: '{"status":"success","payload":"6989f2911fde70b0557160f2"}',
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kHeaders): [Object],
      Symbol(kHeadersCount): 12,
      Symbol(kTrailers): null,
      Symbol(kTrailersCount): 0
    },
    _resBuffered: true,
    response: [Circular *2],
    called: true,
    Symbol(shapeMode): false,
    Symbol(kCapture): false
  },
  req: <ref *3> ClientRequest {
    _events: [Object: null prototype] {
      drain: [Function],
      error: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 127,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: false,
    _header: 'POST /api/sessions/register HTTP/1.1\r\n' +
      'Host: 127.0.0.1:53814\r\n' +
      'Accept-Encoding: gzip, deflate\r\n' +
      'Content-Type: application/json\r\n' +
      'Content-Length: 127\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      options: [Object: null prototype],
      defaultPort: 80,
      protocol: 'http:',
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype],
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      agentKeepAliveTimeoutBuffer: 1000,
      Symbol(shapeMode): false,
      Symbol(kCapture): false
    },
    socketPath: undefined,
    method: 'POST',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    joinDuplicateHeaders: undefined,
    path: '/api/sessions/register',
    _ended: true,
    res: <ref *1> IncomingMessage {
      _events: [Object],
      _readableState: [ReadableState],
      _maxListeners: undefined,
      socket: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      joinDuplicateHeaders: undefined,
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [Circular *3],
      _eventsCount: 4,
      text: '{"status":"success","payload":"6989f2911fde70b0557160f2"}',
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kHeaders): [Object],
      Symbol(kHeadersCount): 12,
      Symbol(kTrailers): null,
      Symbol(kTrailersCount): 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: '127.0.0.1',
    protocol: 'http:',
    Symbol(shapeMode): false,
    Symbol(kCapture): false,
    Symbol(kBytesWritten): 0,
    Symbol(kNeedDrain): false,
    Symbol(corked): 0,
    Symbol(kChunkedBuffer): [],
    Symbol(kChunkedLength): 0,
    Symbol(kSocket): Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _events: [Object],
      _readableState: [ReadableState],
      _writableState: [WritableState],
      allowHalfOpen: false,
      _maxListeners: undefined,
      _eventsCount: 7,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [Circular *3],
      Symbol(async_id_symbol): 433,
      Symbol(kHandle): [TCP],
      Symbol(lastWriteQueueSize): 0,
      Symbol(timeout): null,
      Symbol(kBuffer): null,
      Symbol(kBufferCb): null,
      Symbol(kBufferGen): null,
      Symbol(shapeMode): true,
      Symbol(kCapture): false,
      Symbol(kSetNoDelay): true,
      Symbol(kSetKeepAlive): false,
      Symbol(kSetKeepAliveInitialDelay): 0,
      Symbol(kBytesRead): 0,
      Symbol(kBytesWritten): 0
    },
    Symbol(kOutHeaders): [Object: null prototype] {
      host: [Array],
      'accept-encoding': [Array],
      'content-type': [Array],
      'content-length': [Array]
    },
    Symbol(errored): null,
    Symbol(kHighWaterMark): 16384,
    Symbol(kRejectNonStandardBodyWrites): false,
    Symbol(kUniqueHeaders): null
  },
  text: '{"status":"success","payload":"6989f2911fde70b0557160f2"}',
  files: undefined,
  buffered: true,
  headers: {
    'x-powered-by': 'Express',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '57',
    etag: 'W/"39-zyfictPtHmWJdCmOq+XcGDo/hWw"',
    date: 'Mon, 09 Feb 2026 14:43:29 GMT',
    connection: 'close'
  },
  header: {
    'x-powered-by': 'Express',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '57',
    etag: 'W/"39-zyfictPtHmWJdCmOq+XcGDo/hWw"',
    date: 'Mon, 09 Feb 2026 14:43:29 GMT',
    connection: 'close'
  },
  statusCode: 200,
  status: 200,
  statusType: 2,
  info: false,
  ok: true,
  redirect: false,
  clientError: false,
  serverError: false,
  error: false,
  created: false,
  accepted: false,
  noContent: false,
  badRequest: false,
  unauthorized: false,
  notAcceptable: false,
  forbidden: false,
  notFound: false,
  unprocessableEntity: false,
  type: 'application/json',
  charset: 'utf-8',
  links: {},
  setEncoding: [Function: bound ],
  redirects: [],
  _body: { status: 'success', payload: '6989f2911fde70b0557160f2' },
  pipe: [Function (anonymous)],
  Symbol(shapeMode): false,
  Symbol(kCapture): false
}
*/
