if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>i(e,r),d={module:{uri:r},exports:o,require:c};a[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-6bdf25cb5c9e1e33.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/175-9fd120127d92ec90.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/348-d0db07240576b48d.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/545f34e4-a4d12148f41ccd90.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/618-f768735fc3837ed0.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/639-f8979871d80dbd78.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/682-ca97f414db002a78.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/718-9697710e01c9d8bd.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/721-7e755adcc64b949c.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/789-c86222a7554c8e5f.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/880-107c47303ff59ef8.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/main-ac2e80b86bbc5c80.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/_app-dda5d940ce074d08.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/auth/register-108aa5eb59f36045.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/auth/signin-87c12b08bc21acf2.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/dashboard-cc81c55437a65b7f.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/event/%5Bslug%5D-3d56e28bc0cba12f.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/event/%5Bslug%5D/link/%5Bcode%5D-e0c6905c1c05b89e.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/index-16a4326010885cb5.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/settings-2ef34f0b4280fe9b.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/pages/user/%5Bid%5D-a7579f8eac3382b6.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/chunks/webpack-f8fe1f0eb2299c5d.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/eaaFlOx24K3PGnKkszy3y/_buildManifest.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/eaaFlOx24K3PGnKkszy3y/_middlewareManifest.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/_next/static/eaaFlOx24K3PGnKkszy3y/_ssgManifest.js",revision:"eaaFlOx24K3PGnKkszy3y"},{url:"/android/android-launchericon-144-144.png",revision:"e8a7ad064f2070d1f03b523e1022ab93"},{url:"/android/android-launchericon-192-192.png",revision:"1216f9448f9793bd1120642553940ef0"},{url:"/android/android-launchericon-48-48.png",revision:"6858b5fead0a654c576844c6c2fef6eb"},{url:"/android/android-launchericon-512-512.png",revision:"9cded1bd4da63333474f211c12f3c22a"},{url:"/android/android-launchericon-72-72.png",revision:"ec01304f320cde7263c1c70e9a02b473"},{url:"/android/android-launchericon-96-96.png",revision:"1f16764e53c43e2abf0f0fdcb3fd0966"},{url:"/favicon/android-chrome-192x192.png",revision:"50adf7ebf3cbfc57141d40cde20f8b17"},{url:"/favicon/android-chrome-512x512.png",revision:"3589c325d0ddb8c5c537fd5920b9e3ad"},{url:"/favicon/apple-touch-icon.png",revision:"e2f80f5dd7aef8c54496604d609fc9c0"},{url:"/favicon/favicon-16x16.png",revision:"eefdfc27ba16343d76553170b133fc91"},{url:"/favicon/favicon-32x32.png",revision:"bb1ea3829961cef38131e6ca13cf1b2a"},{url:"/favicon/favicon.ico",revision:"e0d3b9260aacec164d2e76646a882900"},{url:"/favicon/mstile-150x150.png",revision:"0b3059039036aee2582c4adbafc91fd7"},{url:"/favicon/safari-pinned-tab.svg",revision:"4d99b99aa514000978d0c651123aa0e0"},{url:"/frown-face.png",revision:"8b4d2d0d96a55a7195ecb650487bd268"},{url:"/ios/100.png",revision:"0f425fd626283d827f84951c4a606f1b"},{url:"/ios/1024.png",revision:"97150a4a0aa0c5d553eec849cb2be405"},{url:"/ios/114.png",revision:"f60234f3059d65323b3f92ebf52620b7"},{url:"/ios/120.png",revision:"0042eb9af8859a249264f2fd750942f1"},{url:"/ios/128.png",revision:"afc9d91dabe99fecc417aaa9d2169772"},{url:"/ios/144.png",revision:"e8a7ad064f2070d1f03b523e1022ab93"},{url:"/ios/152.png",revision:"0a53892f2e816b7c0d8d0a2fffb53fb6"},{url:"/ios/16.png",revision:"37c628de2d64af41362d89e1ab3d9670"},{url:"/ios/167.png",revision:"0758a0e41d45eaea756708b856ec0fd0"},{url:"/ios/180.png",revision:"c6a8e4149495269e7c3ed69c7721025d"},{url:"/ios/192.png",revision:"1216f9448f9793bd1120642553940ef0"},{url:"/ios/20.png",revision:"eaca7edd4847009174d49d2276e0181a"},{url:"/ios/256.png",revision:"c60b3ab9f9c871c62bba97a8c0faa927"},{url:"/ios/29.png",revision:"ecb0ba399b90a15372d6713319c2288a"},{url:"/ios/32.png",revision:"c89b62dd666318b1dd57cdf0e23bc74a"},{url:"/ios/40.png",revision:"4b5e43f87cb5230a9cb4df393993e117"},{url:"/ios/50.png",revision:"8828d185187c65ce0d523a91edddfc39"},{url:"/ios/512.png",revision:"9cded1bd4da63333474f211c12f3c22a"},{url:"/ios/57.png",revision:"01d8d06ea4821857abc13f01318d12bc"},{url:"/ios/58.png",revision:"3b47c7f646c3384ab466b3b05a60ea67"},{url:"/ios/60.png",revision:"3541216af36e57761a9fb50181114961"},{url:"/ios/64.png",revision:"d2bedbcd445b328806374985902487a7"},{url:"/ios/72.png",revision:"ec01304f320cde7263c1c70e9a02b473"},{url:"/ios/76.png",revision:"bd9837a4298f34e5beb09f250e2272d2"},{url:"/ios/80.png",revision:"d605a16811cffe994cf0c1bb838b3db9"},{url:"/ios/87.png",revision:"7693b1186e1c4b683fce2dc4bc9a2722"},{url:"/logo.svg",revision:"2d962bbedaf7f546a69c37a40176f5d2"},{url:"/manifest.json",revision:"c27458dbfe26072d5b0ace3bd6b83f33"},{url:"/party-face.png",revision:"7b438ed5f712df747a8209e6a2e697fe"},{url:"/windows11/LargeTile.scale-100.png",revision:"e0caf823ff1e1960c6986c48e686cd11"},{url:"/windows11/LargeTile.scale-125.png",revision:"81fc8945f4dbaa8f723cc58dbf9a84c0"},{url:"/windows11/LargeTile.scale-150.png",revision:"4f7b8da3895ab769469850d3a1fed204"},{url:"/windows11/LargeTile.scale-200.png",revision:"aa390cace3caa99c7bc2c7ad744c1f62"},{url:"/windows11/LargeTile.scale-400.png",revision:"6d11812bb09cf71f9ab5b07ac08d1cd6"},{url:"/windows11/SmallTile.scale-100.png",revision:"603b141e775e82f546a1308de7df15b1"},{url:"/windows11/SmallTile.scale-125.png",revision:"79f44a3919a5636df3144cbc87f25b28"},{url:"/windows11/SmallTile.scale-150.png",revision:"4f443d9af41facdd66ba364a5c6b2e80"},{url:"/windows11/SmallTile.scale-200.png",revision:"c2ae4d41652e5deb84b303b07bd3c833"},{url:"/windows11/SmallTile.scale-400.png",revision:"08f7408816e86ea8d06a10756a793a52"},{url:"/windows11/SplashScreen.scale-100.png",revision:"b753be47bddbbfbfc9b3877269ac2262"},{url:"/windows11/SplashScreen.scale-125.png",revision:"1b9705d17742ba4673e8ed8c45581a5c"},{url:"/windows11/SplashScreen.scale-150.png",revision:"939e4d2225216ccaa943d9f39b15807d"},{url:"/windows11/SplashScreen.scale-200.png",revision:"e4955ced2358893e892696765af0b14a"},{url:"/windows11/SplashScreen.scale-400.png",revision:"e109af796419ff4f43f2e361ca51d0fa"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"78ca135b64dbdaca2a318fb3830f0f8c"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"42f23a00ef9aab6f146dc8d72cf9ada0"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"7cb73b8e51cc0c6a6272ad8a7f861a0f"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"36dcf9ed64a3d66cc15c959ba9fbed51"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"aac9bb94427558e5fec89bfb3edd9e62"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"d3912324fd23b5277170ba445e3b4f64"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"7fd1f1f5c75ecd7d45c0da5a82f93fc4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"74a480ff7b7c04c08f26e7756afae954"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"22076a85ff72a65277c528b5fb6a241e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"d2e460aa35b7c2ed4c352c3545fdf3d6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"762ac55504b7a91bbc00c3d398b247ad"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"4241e97a5501c833ecb798a776eb6e54"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"a9aaad75c6140bd4cfab137d9b9e4869"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"bf385617a057a75f0ebddd0ad91b43cb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"e014ef42c525cac5895460d143693730"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"be124a2a3a5e9d46051b53d7cd9f8239"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"66389ced172e1530218f8d2b8c1f0eb7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"8cb68121038c2e90369e9d2a9e8a041e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"8c39462a67ac0f39b14bc26de8d0de67"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ed94817968ecc5b7cc8462928eb3e209"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"d3912324fd23b5277170ba445e3b4f64"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"7fd1f1f5c75ecd7d45c0da5a82f93fc4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"74a480ff7b7c04c08f26e7756afae954"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"22076a85ff72a65277c528b5fb6a241e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"d2e460aa35b7c2ed4c352c3545fdf3d6"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"762ac55504b7a91bbc00c3d398b247ad"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"4241e97a5501c833ecb798a776eb6e54"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"a9aaad75c6140bd4cfab137d9b9e4869"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"bf385617a057a75f0ebddd0ad91b43cb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"e014ef42c525cac5895460d143693730"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"be124a2a3a5e9d46051b53d7cd9f8239"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"66389ced172e1530218f8d2b8c1f0eb7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"8cb68121038c2e90369e9d2a9e8a041e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"8c39462a67ac0f39b14bc26de8d0de67"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ed94817968ecc5b7cc8462928eb3e209"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"bf385617a057a75f0ebddd0ad91b43cb"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"cb75738d3d86ab8de13fd06a173d6cee"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"52e61f7b8f2be2da07bf16729d4f51a5"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"694d52597b4c1cad647666b6db134aa5"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"5ccf18bb49a1b23c257c2b6ece60698c"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"d3912324fd23b5277170ba445e3b4f64"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"7fd1f1f5c75ecd7d45c0da5a82f93fc4"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"74a480ff7b7c04c08f26e7756afae954"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"22076a85ff72a65277c528b5fb6a241e"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"d2e460aa35b7c2ed4c352c3545fdf3d6"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"762ac55504b7a91bbc00c3d398b247ad"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"4241e97a5501c833ecb798a776eb6e54"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"a9aaad75c6140bd4cfab137d9b9e4869"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"bf385617a057a75f0ebddd0ad91b43cb"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"e014ef42c525cac5895460d143693730"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"be124a2a3a5e9d46051b53d7cd9f8239"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"66389ced172e1530218f8d2b8c1f0eb7"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"8cb68121038c2e90369e9d2a9e8a041e"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"8c39462a67ac0f39b14bc26de8d0de67"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"ed94817968ecc5b7cc8462928eb3e209"},{url:"/windows11/StoreLogo.scale-100.png",revision:"8828d185187c65ce0d523a91edddfc39"},{url:"/windows11/StoreLogo.scale-125.png",revision:"4acd6730740a3ddc72bc2ca44429c977"},{url:"/windows11/StoreLogo.scale-150.png",revision:"64c721371059316afc75dbc564baae02"},{url:"/windows11/StoreLogo.scale-200.png",revision:"0f425fd626283d827f84951c4a606f1b"},{url:"/windows11/StoreLogo.scale-400.png",revision:"77e933fd82272bc4eff64ce8b9416633"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"07855bf1256abb760b3a20e8b6b3555f"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"80b0761355ffd987ab83c600c9b25aeb"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"a72c866b5b52d0c18e40ff01d304f32e"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"b753be47bddbbfbfc9b3877269ac2262"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"e4955ced2358893e892696765af0b14a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
