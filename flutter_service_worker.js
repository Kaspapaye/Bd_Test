'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dd076a7ffe5264e4ded1122ebd679f37",
".git/config": "97998d5317ac30c8b554ab3f62151ff4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e0f3eda554b10da7b93ab2b2bb28f61",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4d7cce5d3e34200b21772ea30b29d22e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d289a2a20e994ab00e283e8d8a109e2",
".git/logs/refs/heads/main": "cb58f7ef52ba7c028a92d81f0ecd4169",
".git/logs/refs/remotes/origin/main": "26320b16a7b08829fc2e5e0cf450c732",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/15/5a6056ba16ef319d1bd451dcd7d0799723553b": "9d0439b36831454e9ce1c7669606b1a5",
".git/objects/17/8a06463ce2572efa9f2f5dcbe1ba2bc3ea4371": "bc5d0d54800340a5196d6a17136ee007",
".git/objects/25/8d184e87dc0c9ff9116de4e324dd9e853656eb": "5e8596b07e35783e0f2a3391ff874355",
".git/objects/29/38479ed9fcb78f11ac1ff520b77de95994c8e2": "ed6a8a80f50440b7824f9bf6f0edc5dd",
".git/objects/30/5259f30a31cffb5b782c013bfa4967ea264bd3": "c3da28c1785c82a107b72e75ba391972",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/7cf19b0398bd1cd1b2b6cfd4c2b4e52562fdfd": "9756dfb6825441d7ac260e3f884c70b6",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/fefde1446f21c0cfaba22e4c735b46cd5dbbd6": "e440442a3c5ef3dce47025ef60cdd8d7",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/35e236e251b1e60e78e137228dbfe5a6e402b8": "9a0e435d5181c1d6aa18f34570502d84",
".git/objects/4d/5ed4e8a6c27e905358dea21ba490524dc06af3": "f367b32eaa2e93e18b513d761e1d9385",
".git/objects/4d/688cc69220f2db244df9486c161534d42f30d2": "0ef92158331c6af710f7beb1a73c8b30",
".git/objects/53/d0cfd746966439c8adda5bf2fa465929364bbe": "8b3ffb80f5be6b0e7bdbc8c49e52767e",
".git/objects/59/45ef5f63ac6ac3973a9af151e81dca8c202583": "3e13d7acaaf1ffae8a5969597d6d6660",
".git/objects/5a/32c297e35238507086054a8bf142305fc12d51": "2994c70b83fc5c9756c675446c52c6a5",
".git/objects/63/603473687e99a163fe99a553d63153021cb317": "00c90aae741089fd7789e442180b0cca",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/e8c42e28f33ce5a95e2796f5ee4da4c0a849dc": "feccaac73804f35f87c9a398a2dee97d",
".git/objects/7e/bfe4c4cb478c6244e232c9b2736ba4f33e201f": "12c00eed0f356cff6de8b607ce0f209c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/10c33cb3d40d3e92696429cda3c1b00da8d514": "8419498f41161f702ce5660439309290",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/5f7b9f5051ef0842fea5fc91dff796d6d07764": "fce58859e689ebecb64e7fe422435e4a",
".git/objects/9e/50581f9250837de6b58f18c84d4993499b1a93": "90573ffcab1919dc79a18253c03bbac7",
".git/objects/a3/e82d2d5f56cc16b25ee739601078268e2fcd86": "730ced79500b185a3c74d575ce32cfcd",
".git/objects/a8/2996e5aa60fd09ba976f0e6aeb9a107ba69d38": "e6c94db80b433fb190558fefb3bf7a35",
".git/objects/ac/31cf01ac6a145b901abba43075f3c6efac92c9": "8eb16e3c9bc8301d967acdefe0d927ac",
".git/objects/af/cc3f3dd75ad118779b29887e551359efb95efb": "44796e59a3405a002059c85efcdb8cc3",
".git/objects/b0/6ae101b9dbd67d4cb799337485c6e01960c0bb": "12a5c031605b151f09a5b2840aad373f",
".git/objects/b0/86630ce554a451b85fcabdc09beb8e84ed5a63": "63b17d78fa3a3025ca24d0e0a3635bd4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5dfcd848ac29bac47708731ab341d1d85b8fe8": "d19a2efdfa06a1d2efba46ed92c42744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/bf0e7d85902cce6d1494bdf0258bbb7583f4f8": "a85669483773d70b14513cb013b379fd",
".git/objects/bc/a4b8bbd660771ee5f3b712b2f6ee9b8d5126ab": "5f0077f3bd2538d90fc6710fc083ce19",
".git/objects/c6/561cb7baf32ebcd3b4711782ec2bed842baed4": "c71c0380f701e0fb99fb72b31d0eb2a7",
".git/objects/c7/3d75089591f154583aa2d209cb082e266237eb": "487d0c127cd70d4f52bfa03c174ad12c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8565e23bee6a9b186d82774fa814f0bb7977d7": "0d082d6ec5cf2c417835a865eae05e83",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/1051600910d7d9fd9dccb39b40ccf37fddb817": "872d54b5318e636b1ba8403a0f616f4c",
".git/objects/e1/46bcf493857842e49faa58d2f368aa9da5e9fe": "2b8896c81df298e5fa8c614fecea0e46",
".git/objects/ea/ad114911d0b7b840d6c848d6d27dc25538f50a": "0a09d4f16fbaccc84d7e2954cd995162",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ce23d2a1e349a21235cdc272d49b7aaf3731a3": "d43d7b2ce817544635ec880407b7bc69",
".git/objects/f7/862d9bfb3980a3b5c452523fffca6f3258203a": "ff5d6c82b56964fcbb65e671b6816075",
".git/objects/fb/6262d37f06331695518094883044d1a6028910": "af375e1651af5089e2191c5fb42ddfbf",
".git/refs/heads/main": "8d5a0697776cf7006268dc88d5aff96f",
".git/refs/remotes/origin/main": "8d5a0697776cf7006268dc88d5aff96f",
"assets/AssetManifest.bin": "cdfd0ce1eb3ee896d752a274a6034fff",
"assets/AssetManifest.bin.json": "41ad5c7e91f32513d82461197cd6de7b",
"assets/AssetManifest.json": "b95062993332c8134760733211dd138d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a3e0d65b41683d1cbd31b11af652e9c3",
"assets/lib/assets/1erPlan.png": "25a3969ad37d966c0290a725bcdfbdc7",
"assets/lib/assets/3emePlan.png": "9a9ccd80597a1484e275ef606bcfd170",
"assets/lib/assets/brume.gif": "7f93df93b346ce03852685ef09c8c1d9",
"assets/lib/assets/Brume.png": "6681f9b94fa585a7bdb3dc372c529ae6",
"assets/lib/assets/Carte.png": "4ad77eeb197e06033f588624ca8ca8c4",
"assets/lib/assets/Ciel.png": "8cb4fc1a0a89402a3d8dcb390b094554",
"assets/lib/assets/flamme.gif": "2da2478e34418ffe95d801eb8efc413b",
"assets/lib/assets/Fond.png": "5cb5fcb06013cc42c05075b6a4bac84c",
"assets/lib/assets/Fond2.png": "c94374fdf362c566414bcc52396f86aa",
"assets/lib/assets/light.png": "5fb380e186a6bc85b43b86e6a0abb541",
"assets/lib/assets/Missive.png": "53e0e69275bbe941676012d0cbac50f1",
"assets/lib/assets/Missive_Pli.png": "b47486dd0070bb273cdc3c280f8d5d2a",
"assets/lib/assets/Nuit.png": "8cb4fc1a0a89402a3d8dcb390b094554",
"assets/lib/assets/Paves.png": "575d748cf84df4cd096007cae6fc9af9",
"assets/lib/assets/rouleau_mini.png": "9372fd61b6219e82a50a97b5ab4e7361",
"assets/lib/assets/ScdPlan.png": "8bd2302c836b96045bb1118ee89507b3",
"assets/lib/assets/Sujet.png": "27fe203c9b71822fde88a46876058886",
"assets/lib/assets/torche1.png": "2b695efa21962d325cb86e4c41fa4d70",
"assets/lib/assets/torche2.png": "9d168b4ef324ffe8256b7d7e06e045ba",
"assets/lib/assets/torche3.png": "4cf8299a81cc40d39d02b65aa2260969",
"assets/lib/assets/torche4.png": "a52ab55025e6ff49312b5df611e52a45",
"assets/NOTICES": "7fb36b759ba3ed701b8200de2ba89f48",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4d0c5f19e002beeac8e49cc5b258d8c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e701c8cde3bd18190d5c019e3fb0ffa7",
"/": "e701c8cde3bd18190d5c019e3fb0ffa7",
"main.dart.js": "766435a7806ba508b29907fd2f03a7a0",
"manifest.json": "4a9395dbdaf36e51d047131f62e7a2e9",
"version.json": "77f352f204ac647d97a0ffe49dba64a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
