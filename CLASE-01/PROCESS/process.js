//! ╔══════════════════════════════════════════════════╗
//* ║═════════════════                ═════════════════║
//* ║   >>>   🔵🟢🔵   CODIGO AQUÍ   🔵🟢🔵   <<<   ║
//* ║═════════════════                ═════════════════║
//! ╚══════════════════════════════════════════════════╝


// console.log("00 process", process);
console.log("01 cwd", process.cwd()); // current working directory - la ubicación desde donde se ejecuta el comando
// 01 cwd C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\85610 BACK-III LUNES 10-12\85610 Back-III CLASE\CLASE-01\PROCESS

console.log("02 ID", process.pid); // 02 ID 18876 <-> process ID - Identificador del proceso en el SO

console.log("03 argv", process.argv);
/*
03 argv [
  'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v24.8.0\\node.exe',
  'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Back-III CLASE\\CLASE-01\\PROCESS\\process.js',     
  'hola',
  'mundo'
]
  * Nos brinda una lista con todo lo que escribimos por consola
*/

//* Catch MODE
console.log("03 MODE", process.argv[3]);
let mode = "dev"
mode = process.argv[3] ? process.argv[3] : "dev"
if(mode === "prod"){
  console.log("Vamos a buscar las VAR entorno en .env.prod")
} else {
  console.log("Vamos a buscar las VAR entorno en .env.dev")
}

/*
[
  'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v20.17.0\\node.exe',
  'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\[ 85610 BACK-III SAB 11-30 ]\\[ 85610 Back-III CLASE ]\\
CLASE-01\\PROCESS\\process.js',
  'hola',
  'mundo'
]
*/

/*
node index.js --mode dev 
node index.js -m dev 

node index.js --mode prod 
node index.js -m prod 


node utils.js -> esto se interpreta y listo termina -> nace y muere el process {...}

node server.js -> nace el process {...} con el Server levantado, y muere cuando se cáe el server


global {...data, métodos}

process {...data, métodos, eventos}
vive en Server 

express - frameWork (Entorno de trabajo) - módulo externo - dependencia
const app = express()
app {...data, métodos} <<< potencial server -> app.listen <<< ya es un Server


---


node process.js
00 process process {
  version: 'v20.17.0',
  versions: {
    node: '20.17.0',
    acorn: '8.11.3',
    ada: '2.9.0',
    ares: '1.32.3',
    base64: '0.5.2',
    brotli: '1.1.0',
    cjs_module_lexer: '1.2.2',
    cldr: '45.0',
    icu: '75.1',
    llhttp: '8.1.2',
    modules: '115',
    napi: '9',
    nghttp2: '1.61.0',
    nghttp3: '0.7.0',
    ngtcp2: '1.1.0',
    openssl: '3.0.13+quic',
    simdutf: '5.3.0',
    tz: '2024a',
    undici: '6.19.2',
    unicode: '15.1',
    uv: '1.46.0',
    uvwasi: '0.0.21',
    v8: '11.3.244.8-node.23',
    zlib: '1.3.0.1-motley-209717d'
  },
  arch: 'x64',
  platform: 'win32',
  release: {
    name: 'node',
    lts: 'Iron',
    sourceUrl: 'https://nodejs.org/download/release/v20.17.0/node-v20.17.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v20.17.0/node-v20.17.0-headers.tar.gz',      
    libUrl: 'https://nodejs.org/download/release/v20.17.0/win-x64/node.lib'
  },
  ETC ... ... ...


  00 process process {
  version: 'v24.8.0',
  versions: {
    node: '24.8.0',
    acorn: '8.15.0',
    ada: '3.2.7',
    amaro: '1.1.2',
    ares: '1.34.5',
    brotli: '1.1.0',
    cjs_module_lexer: '2.1.0',
    cldr: '47.0',
    icu: '77.1',
    llhttp: '9.3.0',
    modules: '137',
    napi: '10',
    nbytes: '0.1.1',
    ncrypto: '0.0.1',
    nghttp2: '1.66.0',
    openssl: '3.5.2',
    simdjson: '3.13.0',
    simdutf: '6.4.0',
    sqlite: '3.50.4',
    tz: '2025b',
    undici: '7.14.0',
    unicode: '16.0',
    uv: '1.51.0',
    uvwasi: '0.0.23',
    v8: '13.6.233.10-node.27',
    zlib: '1.3.1-470d3a2',
    zstd: '1.5.7'
  },
  arch: 'x64',
  platform: 'win32',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v24.8.0/node-v24.8.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v24.8.0/node-v24.8.0-headers.tar.gz',
    libUrl: 'https://nodejs.org/download/release/v24.8.0/win-x64/node.lib'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding builtins',
    'Internal Binding module_wrap',
    'Internal Binding errors',
    'NativeModule internal/assert',
    'Internal Binding util',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding timers',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'Internal Binding symbols',
    'NativeModule internal/async_hooks',
    'Internal Binding constants',
    'Internal Binding types',
    'Internal Binding options',
    'NativeModule internal/options',
    'Internal Binding string_decoder',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/validators',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule internal/constants',
    'Internal Binding trace_events',
    'NativeModule internal/util/debuglog',
    'Internal Binding async_context_frame',
    'NativeModule internal/async_context_frame',
    'NativeModule internal/timers',
    'NativeModule internal/events/abort_listener',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding mksnapshot',
    'NativeModule internal/v8/startup_snapshot',
    'NativeModule internal/buffer',
    'NativeModule buffer',
    'NativeModule internal/webidl',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule diagnostics_channel',
    'Internal Binding process_methods',
    'NativeModule internal/process/per_thread',
    'Internal Binding credentials',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule async_hooks',
    'NativeModule internal/process/task_queues',
    'NativeModule timers',
    'NativeModule path',
    'Internal Binding url_pattern',
    'NativeModule internal/querystring',
    'NativeModule internal/mime',
    'NativeModule internal/data_url',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'Internal Binding modules',
    'NativeModule internal/modules/typescript',
    'Internal Binding contextify',
    'NativeModule internal/vm',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'NativeModule internal/source_map/source_map_cache',
    'Internal Binding fs',
    'Internal Binding blob',
    'Internal Binding encoding_binding',
    'NativeModule internal/encoding',
    'NativeModule internal/blob',
    'NativeModule internal/fs/utils',
    'Internal Binding permission',
    'NativeModule internal/process/permission',
    'NativeModule fs',
    'NativeModule internal/modules/helpers',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule internal/streams/utils',
    'NativeModule util',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'Internal Binding wasm_web_api',
    'NativeModule internal/process/signal',
    'NativeModule url',
    'NativeModule internal/modules/customization_hooks',
    'NativeModule internal/modules/package_json_reader',
    'NativeModule internal/modules/cjs/loader',
    'NativeModule internal/process/pre_execution',
    'NativeModule internal/modules/esm/utils',
    'NativeModule internal/inspector_async_hook',
    'Internal Binding worker',
    'NativeModule internal/modules/run_main',
    'NativeModule internal/net',
    'NativeModule internal/dns/utils',
    'NativeModule vm',
    'NativeModule internal/abort_controller',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/destroy',
    ... 32 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [ [Function (anonymous)], [Function: startListeningIfSignal] ],
    removeListener: [ [Function (anonymous)], [Function: stopListeningIfSignal] ],
    warning: [Function: onWarning],
    SIGWINCH: [
      [Function: refreshStdoutOnSigWinch],
      [Function: refreshStderrOnSigWinch]
    ]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: {
    target_defaults: {
      cflags: [],
      configurations: [Object],
      default_configuration: 'Release',
      defines: [Array],
      include_dirs: [],
      libraries: []
    },
    variables: {
      asan: 0,
      clang: 1,
      control_flow_guard: false,
      coverage: false,
      dcheck_always_on: 0,
      debug_nghttp2: false,
      debug_node: false,
      enable_lto: false,
      enable_pgo_generate: false,
      enable_pgo_use: false,
      error_on_warn: false,
      force_dynamic_crt: 0,
      host_arch: 'x64',
      icu_data_in: '..\\..\\deps\\icu-tmp\\icudt77l.dat',
      icu_endianness: 'l',
      icu_gyp_path: 'tools/icu/icu-generic.gyp',
      icu_path: 'deps/icu-small',
      icu_small: false,
      icu_ver_major: '77',
      libdir: 'lib',
      llvm_version: '19.1.5',
      napi_build_version: '10',
      nasm_version: '2.16',
      node_builtin_shareable_builtins: [Array],
      node_byteorder: 'little',
      node_cctest_sources: [Array],
      node_debug_lib: false,
      node_enable_d8: false,
      node_enable_v8_vtunejit: false,
      node_enable_v8windbg: false,
      node_fipsinstall: false,
      node_install_corepack: true,
      node_install_npm: true,
      node_library_files: [Array],
      node_module_version: 137,
      node_no_browser_globals: false,
      node_prefix: '\\usr\\local',
      node_quic: false,
      node_release_urlbase: 'https://nodejs.org/download/release/',
      node_shared: false,
      node_shared_ada: false,
      node_shared_brotli: false,
      node_shared_cares: false,
      node_shared_http_parser: false,
      node_shared_libuv: false,
      node_shared_nghttp2: false,
      node_shared_nghttp3: false,
      node_shared_ngtcp2: false,
      node_shared_openssl: false,
      node_shared_simdjson: false,
      node_shared_simdutf: false,
      node_shared_sqlite: false,
      node_shared_uvwasi: false,
      node_shared_zlib: false,
      node_shared_zstd: false,
      node_tag: '',
      node_target_type: 'executable',
      node_use_amaro: true,
      node_use_bundled_v8: true,
      node_use_node_code_cache: true,
      node_use_node_snapshot: true,
      node_use_openssl: true,
      node_use_sqlite: true,
      node_use_v8_platform: true,
      node_with_ltcg: true,
      node_without_node_options: false,
      node_write_snapshot_as_array_literals: true,
      openssl_is_fips: false,
      openssl_quic: false,
      ossfuzz: false,
      shlib_suffix: 'so.137',
      single_executable_application: true,
      suppress_all_error_on_warn: false,
      target_arch: 'x64',
      ubsan: 0,
      use_ccache_win: 0,
      use_prefix_to_find_headers: false,
      v8_enable_31bit_smis_on_64bit_arch: 0,
      v8_enable_extensible_ro_snapshot: 0,
      v8_enable_external_code_space: 0,
      v8_enable_gdbjit: 0,
      v8_enable_hugepage: 0,
      v8_enable_i18n_support: 1,
      v8_enable_inspector: 1,
      v8_enable_javascript_promise_hooks: 1,
      v8_enable_lite_mode: 0,
      v8_enable_maglev: 1,
      v8_enable_object_print: 1,
      v8_enable_pointer_compression: 0,
      v8_enable_pointer_compression_shared_cage: 0,
      v8_enable_sandbox: 0,
      v8_enable_short_builtin_calls: 1,
      v8_enable_wasm_simd256_revec: 1,
      v8_enable_webassembly: 1,
      v8_optimized_debug: 1,
      v8_promise_internal_field_count: 1,
      v8_random_seed: 0,
      v8_trace_maps: 0,
      v8_use_siphash: 1,
      want_separate_host_toolset: 0
    }
  },
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  loadEnvFile: [Function: loadEnvFile],
  cpuUsage: [Function: cpuUsage],
  threadCpuUsage: [Function: threadCpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  constrainedMemory: [Function: constrainedMemory],
  availableMemory: [Function: availableMemory],
  kill: [Function: kill],
  exit: [Function: exit],
  execve: [Function: execve],
  ref: [Function: ref],
  unref: [Function: unref],
  finalization: [Getter/Setter],
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  openStdin: [Function (anonymous)],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    openssl_is_boringssl: false,
    cached_builtins: [Getter],
    require_module: [Getter],
    typescript: [Getter]
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  sourceMapsEnabled: [Getter],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  getBuiltinModule: [Function: getBuiltinModule],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  env: {
    ACLOCAL_PATH: '/mingw64/share/aclocal:/usr/share/aclocal',
    ALLUSERSPROFILE: 'C:\\ProgramData',
    ANDROID_HOME: 'C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk',
    ANDROID_SDK_ROOT: 'C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk',
    APPDATA: 'C:\\Users\\mauuu\\AppData\\Roaming',
    ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
    ChocolateyLastPathUpdate: '133773660353215518',
    CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_13864_BMFVDXRTSZBJWHET',
    COLORTERM: 'truecolor',
    COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
    'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
    CommonProgramW6432: 'C:\\Program Files\\Common Files',
    COMPUTERNAME: 'DESKTOP-G2ENJKE',
    COMSPEC: 'C:\\WINDOWS\\system32\\cmd.exe',
    CONFIG_SITE: '/etc/config.site',
    DISPLAY: 'needs-to-be-defined',
    DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
    EFC_19140: '1',
    EXEPATH: 'C:\\Program Files\\Git\\bin',
    FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
    FPS_BROWSER_USER_PROFILE_STRING: 'Default',
    GIT_ASKPASS: 'c:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensi
ons\\git\\dist\\askpass.sh',
    HOME: 'C:\\Users\\mauuu',
    HOMEDRIVE: 'C:',
    HOMEPATH: '\\Users\\mauuu',
    HOSTNAME: 'DESKTOP-G2ENJKE',
    INFOPATH: '/usr/local/info:/usr/share/info:/usr/info:/share/info',
    LANG: 'en_US.UTF-8',
    LOCALAPPDATA: 'C:\\Users\\mauuu\\AppData\\Local',
    LOGONSERVER: '\\\\DESKTOP-G2ENJKE',
    MANPATH: '/mingw64/local/man:/mingw64/share/man:/usr/local/man:/usr/share/man:/usr/man:/share/man', 
    MINGW_CHOST: 'x86_64-w64-mingw32',
    MINGW_PACKAGE_PREFIX: 'mingw-w64-x86_64',
    MINGW_PREFIX: '/mingw64',
    MSYSTEM: 'MINGW64',
    MSYSTEM_CARCH: 'x86_64',
    MSYSTEM_CHOST: 'x86_64-w64-mingw32',
    MSYSTEM_PREFIX: '/mingw64',
    NUMBER_OF_PROCESSORS: '8',
    NVM_HOME: 'C:\\Users\\mauuu\\AppData\\Roaming\\nvm',
    NVM_SYMLINK: 'C:\\Program Files\\nodejs',
    OneDrive: 'C:\\Users\\mauuu\\OneDrive',
    OPENSSL_CONF: 'C:\\Program Files\\OpenSSL-Win64\\bin\\openssl.cfg',
    ORIGINAL_PATH: 'C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\mau
uu\\bin;C:\\Users\\mauuu\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand
;C:\\Users\\mauuu\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilotCli;C:\\Prog
ram Files\\Eclipse Adoptium\\jdk-8.0.472.8-hotspot\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\j
avapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowe
rShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files\\PostgreSQL\\1
4\\bin;C:\\Users\\mauuu\\AppData\\Local\\Android\\Sdk\\platform-tools;C:\\Program Files\\dotnet;C:\\User
s\\mauuu\\AppData\\Roaming\\npm;C:\\Program Files\\MongoDB\\Server\\7.0\\bin;C:\\Program Files\\MongoDB\
\Server\\7.0\\data;C:\\Users\\mauuu\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\ProgramData\\ch
ocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\Users\\pandoc-3.6.4\\pandoc.exe;C:\\Program Files\
\Docker\\Docker\\resources\\bin;C:\\Program Files\\Kubernetes\\Minikube;C:\\Program Files\\Kubernetes\\M
inikube;C:\\Program Files\\ffmpeg-2025-04-23-git-25b0a8e295-essentials_build\\bin;C:\\Program Files\\PuT
TY;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Python\\Python312\\Scripts;C:\\Users\\mauuu\\AppData\\Loc
al\\Programs\\Python\\Python312;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Python\\Launcher;C:\\Program
 Files\\sqlite3;C:\\Users\\mauuu\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\mauuu\\AppData\\Local\\P
rograms\\mongosh;C:\\Users\\mauuu\\AppData\\Roaming\\npm;C:\\Users\\mauuu\\AppData\\Roaming\\nvm;C:\\Pro
gram Files\\nodejs;C:\\Program Files\\OpenSSL-Win64\\bin;C:\\Users\\mauuu\\AppData\\Local\\Programs\\MiK
TeX\\miktex\\bin\\x64;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\bin',
    ORIGINAL_TEMP: '/tmp',
    ORIGINAL_TMP: '/tmp',
    OS: 'Windows_NT',
    PATH: 'C:\\Users\\mauuu\\bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\local
\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\mingw64\
\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\mauuu\\bin;C:\\Users\\mauuu\\AppData\\Roaming\\Code\\Us
er\\globalStorage\\github.copilot-chat\\debugCommand;C:\\Users\\mauuu\\AppData\\Roaming\\Code\\User\\glo
balStorage\\github.copilot-chat\\copilotCli;C:\\Program Files\\Eclipse Adoptium\\jdk-8.0.472.8-hotspot\\
bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOW
S\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Prog
ram Files\\Git\\cmd;C:\\Program Files\\PostgreSQL\\14\\bin;C:\\Users\\mauuu\\AppData\\Local\\Android\\Sd
k\\platform-tools;C:\\Program Files\\dotnet;C:\\Users\\mauuu\\AppData\\Roaming\\npm;C:\\Program Files\\M
ongoDB\\Server\\7.0\\bin;C:\\Program Files\\MongoDB\\Server\\7.0\\data;C:\\Users\\mauuu\\AppData\\Roamin
g\\nvm;C:\\Program Files\\nodejs;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:
\\Users\\pandoc-3.6.4\\pandoc.exe;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\K
ubernetes\\Minikube;C:\\Program Files\\Kubernetes\\Minikube;C:\\Program Files\\ffmpeg-2025-04-23-git-25b
0a8e295-essentials_build\\bin;C:\\Program Files\\PuTTY;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Pytho
n\\Python312\\Scripts;C:\\Users\\mauuu\\AppData\\Local\\Programs\\Python\\Python312;C:\\Users\\mauuu\\Ap
pData\\Local\\Programs\\Python\\Launcher;C:\\Program Files\\sqlite3;C:\\Users\\mauuu\\AppData\\Local\\Gi
tHubDesktop\\bin;C:\\Users\\mauuu\\AppData\\Local\\Programs\\mongosh;C:\\Users\\mauuu\\AppData\\Roaming\
\npm;C:\\Users\\mauuu\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\OpenSSL-Win64\
\bin;C:\\Users\\mauuu\\AppData\\Local\\Programs\\MiKTeX\\miktex\\bin\\x64;C:\\Users\\mauuu\\AppData\\Loc
al\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\Git\\usr\\bin\\vendor_perl;C:\\Program Files\\Gi
t\\usr\\bin\\core_perl',
    PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
    PKG_CONFIG_PATH: '/mingw64/lib/pkgconfig:/mingw64/share/pkgconfig',
    PLINK_PROTOCOL: 'ssh',
    PROCESSOR_ARCHITECTURE: 'AMD64',
    PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 140 Stepping 1, GenuineIntel',
    PROCESSOR_LEVEL: '6',
    PROCESSOR_REVISION: '8c01',
    ProgramData: 'C:\\ProgramData',
    PROGRAMFILES: 'C:\\Program Files',
    'ProgramFiles(x86)': 'C:\\Program Files (x86)',
    ProgramW6432: 'C:\\Program Files',
    PS1: '\\[\\033]0;$TITLEPREFIX:$PWD\\007\\]\\n\\[\\033[32m\\]\\u@\\h \\[\\033[35m\\]$MSYSTEM \\[\\033
[33m\\]\\w\\[\\033[36m\\]`__git_ps1`\\[\\033[0m\\]\\n$ ',
    PSModulePath: 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShel
l\\v1.0\\Modules',
    PUBLIC: 'C:\\Users\\Public',
    PWD: '/c/Users/mauuu/OneDrive/Escritorio/CODERHOUSE/85610 BACK-III LUNES 10-12/85610 Back-III CLASE/
CLASE-01/PROCESS',
    SESSIONNAME: 'Console',
    SHELL: 'C:\\Program Files\\Git\\usr\\bin\\bash.exe',
    SHLVL: '1',
    SSH_ASKPASS: '/mingw64/bin/git-askpass.exe',
    SYSTEMDRIVE: 'C:',
    SYSTEMROOT: 'C:\\WINDOWS',
    TEMP: 'C:\\Users\\mauuu\\AppData\\Local\\Temp',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.107.1',
    TMP: 'C:\\Users\\mauuu\\AppData\\Local\\Temp',
    TMPDIR: 'C:\\Users\\mauuu\\AppData\\Local\\Temp',
    USERDOMAIN: 'DESKTOP-G2ENJKE',
    USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-G2ENJKE',
    USERNAME: 'mauuu',
    USERPROFILE: 'C:\\Users\\mauuu',
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: '',
    VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\
app\\extensions\\git\\dist\\askpass-main.js',
    VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\mauuu\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe', 
    VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-9ca1d844df-sock',
    VSCODE_NONCE: 'a36b1144-969e-4b23-9266-1691906b9c7a',
    WINDIR: 'C:\\WINDOWS',
    ZES_ENABLE_SYSMAN: '1',
    _: '/usr/bin/winpty'
  },
  title: ' ',
  argv: [
    'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v24.8.0\\node.exe',
    'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Back-III CLAS
E\\CLASE-01\\PROCESS\\process.js'
  ],
  execArgv: [],
  pid: 6724,
  ppid: 21732,
  execPath: 'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v24.8.0\\node.exe',
  debugPort: 9229,
  argv0: 'C:/Users/mauuu/AppData/Roaming/nvm/v24.8.0/node.exe',
  _preload_modules: [],
  report: [Getter],
  mainModule: {
    id: '.',
    path: 'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Back-II
I CLASE\\CLASE-01\\PROCESS',
    exports: {},
    filename: 'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Bac
k-III CLASE\\CLASE-01\\PROCESS\\process.js',
    loaded: false,
    children: [],
    paths: [
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Back-III CL
ASE\\CLASE-01\\PROCESS\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Back-III CL
ASE\\CLASE-01\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\85610 Back-III CL
ASE\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\85610 BACK-III LUNES 10-12\\node_modules',   
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\Escritorio\\node_modules',
      'C:\\Users\\mauuu\\OneDrive\\node_modules',
      'C:\\Users\\mauuu\\node_modules',
      'C:\\Users\\node_modules',
      'C:\\node_modules'
    ],
    Symbol(kIsMainSymbol): true,
    Symbol(kIsCachedByESMLoader): false,
    Symbol(kURL): undefined,
    Symbol(kFormat): undefined,
    Symbol(kIsExecuting): true
  },
  Symbol(shapeMode): false,
  Symbol(kCapture): false
}
*/

