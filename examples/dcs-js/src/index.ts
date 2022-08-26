(async () => {
  const docs = await fetch(
    "https://git.door43.org/swagger.catalog.json"
  ).then((data) => data.json());

  const paths = Object.keys(docs.paths);
  const names = paths.reduce((names, path) => {
    const group = docs.paths[path];
    const endpoints = Object.keys(group);
    for (let endpoint of endpoints) {
      const operationId = group[endpoint].operationId;
      names[operationId] = operationId;
    }
    return names;
  }, {});
  console.log(names);
  document.getElementById("app").innerHTML = JSON.stringify(names, null, 2);
})();
