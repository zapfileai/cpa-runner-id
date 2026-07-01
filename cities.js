const idahoCities = [
  "Murphy", "Murtaugh", "Nampa", "New Meadows", "New Plymouth",
  "Newdale", "Nezperce", "Orofino", "Osburn", "Parma",
  "Paul", "Payette", "Pinehurst", "Pocatello", "Ponderay",
  "Post Falls", "Potlatch", "Preston", "Priest River", "Princeton",
  "Rathdrum", "Reubens", "Rexburg", "Rigby", "Ririe",
  "Rupert", "Sagle", "Saint Anthony", "Saint Maries", "Salmon",
  "Sandpoint", "Shelley", "Silverton", "Soda Springs", "Spirit Lake",
  "Star", "Stites", "Sugar City", "Sun Valley", "Swan Valley",
  "Tetonia", "Troy", "Twin Falls", "Victor", "Viola",
  "Wallace", "Weippe", "Weiser", "Wendell", "Weston",
  "Wilder", "Winchester",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < idahoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(idahoCities[i]);
}

module.exports = { batches };
