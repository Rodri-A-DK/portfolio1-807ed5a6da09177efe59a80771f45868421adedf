import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_BcspQKrc.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CcVGD43E.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/","cacheDir":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/node_modules/.astro/","outDir":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/dist/","srcDir":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/","publicDir":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/public/","buildClientDir":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/dist/client/","buildServerDir":"file:///E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.VUMGxczn.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CMFqLWsp.mjs","\u0000@astrojs-manifest":"manifest_CJHu4jJ6.mjs","E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.su7TkLX-.js","E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Proyectos.astro?astro&type=script&index=0&lang.ts":"_astro/Proyectos.astro_astro_type_script_index_0_lang.fsvyauCg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"background\");let t=window.innerWidth,e=window.innerHeight;n.width=t;n.height=e;"],["E:/portfolio1-807ed5a6da09177efe59a80771f45868421adedf/src/components/Proyectos.astro?astro&type=script&index=0&lang.ts","const l=[{images:[\"/projects/proyecto3.webp\",\"/projects/proyecto3-2.webp\",\"/projects/proyecto3-3.webp\",\"/projects/proyecto3-4.webp\",\"/projects/proyecto3-5.webp\",\"/projects/proyecto3-6.webp\",\"/projects/proyecto3-7.webp\",\"/projects/proyecto3-8.webp\"]},{images:[\"/projects/proyecto1.webp\",\"/projects/proyecto1-2.webp\",\"/projects/proyecto1-3.webp\",\"/projects/proyecto1-4.webp\",\"/projects/proyecto1-5.webp\",\"/projects/proyecto1-6.webp\"]},{images:[\"/projects/proyecto2.webp\",\"/projects/proyecto2-2.webp\",\"/projects/proyecto2-3.webp\",\"/projects/proyecto2-4.webp\",\"/projects/proyecto2-5.webp\"]},{images:[\"/projects/proyecto4.webp\",\"/projects/proyecto4-2.webp\",\"/projects/proyecto4-3.webp\",\"/projects/proyecto4-4.webp\",\"/projects/proyecto4-5.webp\",\"/projects/proyecto4-6.webp\",\"/projects/proyecto4-7.webp\",\"/projects/proyecto4-8.webp\"]}];function m(){document.querySelectorAll('[id^=\"carousel-\"]').forEach((e,t)=>{const c=e.querySelector(`#slider-${t}`),s=e.querySelector(`#prev-${t}`),p=e.querySelector(`#next-${t}`),o=e.querySelectorAll('.dot-indicator[data-project=\"'+t+'\"]');let n=0;const i=o.length;function a(r){c&&(n=r,c.style.transform=`translateX(-${n*100}%)`,o.forEach((d,w)=>{w===n?(d.classList.add(\"bg-white\"),d.classList.remove(\"bg-white/50\")):(d.classList.remove(\"bg-white\"),d.classList.add(\"bg-white/50\"))}))}s?.addEventListener(\"click\",()=>{const r=n===0?i-1:n-1;a(r)}),p?.addEventListener(\"click\",()=>{const r=n===i-1?0:n+1;a(r)}),o.forEach(r=>{r.addEventListener(\"click\",()=>{const d=parseInt(r.dataset.index||\"0\");a(d)})}),o.length>0&&(o[0].classList.add(\"bg-white\"),o[0].classList.remove(\"bg-white/50\"))})}function g(e){if(!e)return;const t=e.dataset.projectIndex,c=parseInt(e.dataset.imageIndex),s=l[t].images,p=c===0?s.length-1:c-1,o=`modal-${t}-${p}`;e.classList.add(\"hidden\"),document.getElementById(o)?.classList.remove(\"hidden\"),document.getElementById(o)?.classList.add(\"flex\")}function u(e){if(!e)return;const t=e.dataset.projectIndex,c=parseInt(e.dataset.imageIndex),s=l[t].images,p=c===s.length-1?0:c+1,o=`modal-${t}-${p}`;e.classList.add(\"hidden\"),document.getElementById(o)?.classList.remove(\"hidden\"),document.getElementById(o)?.classList.add(\"flex\")}function b(){document.querySelectorAll(\"img[data-modal-target]\").forEach(e=>{e.addEventListener(\"click\",t=>{const c=t.currentTarget.dataset.modalTarget,s=document.getElementById(c);s&&(s.classList.remove(\"hidden\"),s.classList.add(\"flex\"),t.stopPropagation())})}),document.querySelectorAll(\"[id^=modal-]\").forEach(e=>{e.addEventListener(\"click\",t=>{t.target===e&&(e.classList.add(\"hidden\"),e.classList.remove(\"flex\"))})}),document.addEventListener(\"keydown\",e=>{const t=document.querySelector(\"[id^=modal-]:not(.hidden)\");t&&(e.key===\"Escape\"?(t.classList.add(\"hidden\"),t.classList.remove(\"flex\")):e.key===\"ArrowLeft\"?g(t):e.key===\"ArrowRight\"&&u(t))})}function y(){m(),b()}y();document.addEventListener(\"astro:page-load\",y);"]],"assets":["/_astro/source-code-pro-cyrillic-ext-wght-normal.DBsY_gco.woff2","/_astro/source-code-pro-cyrillic-wght-normal.CDFoT8Zy.woff2","/_astro/source-code-pro-vietnamese-wght-normal.DavMBZpE.woff2","/_astro/source-code-pro-greek-wght-normal.CVFU5kBX.woff2","/_astro/source-code-pro-latin-ext-wght-normal.DyxEnqz4.woff2","/_astro/source-code-pro-latin-wght-normal.C54hYqvT.woff2","/_astro/index.VUMGxczn.css","/favicon.svg","/projects/fotoperfilabajo.png","/projects/fotoperfilabajo.webp","/projects/fotoperfilarriba.png","/projects/fotoperfilarriba.webp","/projects/proyecto1-2.webp","/projects/proyecto1-3.webp","/projects/proyecto1-4.webp","/projects/proyecto1-5.webp","/projects/proyecto1-6.webp","/projects/proyecto1.webp","/projects/proyecto2-2.webp","/projects/proyecto2-3.webp","/projects/proyecto2-4.webp","/projects/proyecto2-5.webp","/projects/proyecto2.webp","/projects/proyecto3-2.webp","/projects/proyecto3-3.webp","/projects/proyecto3-4.webp","/projects/proyecto3-5.webp","/projects/proyecto3-6.webp","/projects/proyecto3-7.webp","/projects/proyecto3-8.webp","/projects/proyecto3.webp","/projects/proyecto4-2.webp","/projects/proyecto4-3.webp","/projects/proyecto4-4.webp","/projects/proyecto4-5.webp","/projects/proyecto4-6.webp","/projects/proyecto4-7.webp","/projects/proyecto4-8.webp","/projects/proyecto4.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"/bC3VMdnl7QGo8ARyh2KuDw8VfkCM/K7queuYx6ELBY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
