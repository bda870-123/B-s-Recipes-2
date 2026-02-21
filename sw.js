self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("recipe-cache").then(cache=>{
      return cache.addAll(["index.html"]);
    })
  );
});
