const VERSION='plant-reproduction-v1.1.4';
const ASSETS=["./", "./grape1.webp", "./grape2.webp", "./hl1.webp", "./hl2.webp", "./hl3.webp", "./icon-192.png", "./icon-512.png", "./icon-192.webp", "./icon-512.webp", "./index.html", "./manifest.webmanifest", "./mt01.webp", "./mt02.webp", "./mt03.webp", "./mt04.webp", "./mt05.webp", "./mt06.webp", "./mt07.webp", "./mt08.webp", "./mt09.webp", "./mt10.webp", "./mt11.webp", "./mt12.webp", "./mt13.webp", "./mt14.webp", "./mt15.webp", "./mt16.webp", "./p01.webp", "./p02.webp", "./p03-f.webp", "./p03-m.webp", "./p03.webp", "./p05.webp", "./p06.webp", "./p07.webp", "./p08.webp", "./p09.webp", "./p10.webp", "./p11.webp", "./p12.webp", "./p13.webp", "./p14.webp", "./p15.webp", "./p16.webp", "./pea_aborted.webp", "./pea_seed.webp", "./pea_seed2.webp", "./site_shell.css", "./site_shell.js", "./stage4_gene.html", "./stage4_pea.html", "./stage4_quiz.html", "./strawberry1.webp", "./strawberry2.webp", "./strawberry3.webp", "./sunflower1.webp", "./sunflower2.webp", "./sunflower3.webp", "./sw.js", "./tailwind-local.css"];
const CORE=["./", "./index.html", "./stage4_pea.html", "./stage4_quiz.html", "./stage4_gene.html", "./site_shell.css", "./site_shell.js", "./tailwind-local.css", "./manifest.webmanifest", "./mt01.webp", "./p01.webp", "./p03-f.webp", "./p03-m.webp", "./icon-192.webp"];
// 首頁載入後才註冊 SW。依序小批快取所有模式及圖，避免一次 50 個請求阻塞首屏。
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
    const cache=await caches.open(VERSION);
    await Promise.all(CORE.map(async path=>{try{await cache.add(new URL(path,self.registration.scope).href)}catch(e){console.warn('core cache',path,e)}}));
    await self.skipWaiting();
    const rest=ASSETS.filter(x=>!CORE.includes(x));
    for(let i=0;i<rest.length;i+=4){
      await Promise.all(rest.slice(i,i+4).map(async path=>{try{await cache.add(new URL(path,self.registration.scope).href)}catch(e){console.warn('optional cache',path,e)}}));
    }
 })());
});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([
 caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('plant-reproduction-')&&k!==VERSION).map(k=>caches.delete(k)))),self.clients.claim()
])));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
   if(response.ok && (url.pathname.endsWith('.webp')||url.pathname.endsWith('.html'))){const copy=response.clone();caches.open(VERSION).then(c=>c.put(event.request,copy)).catch(()=>{});}
   return response;
 })));
});
