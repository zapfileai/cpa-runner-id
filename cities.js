const idahoCities = [
  "Aberdeen", "American Falls", "Arbon", "Ashton", "Athol",
  "Bellevue", "Bern", "Blackfoot", "Bliss", "Bloomington",
  "Boise", "Bonners Ferry", "Bruneau", "Buhl", "Burley",
  "Caldwell", "Cambridge", "Careywood", "Cascade", "Castleford",
  "Cataldo", "Challis", "Clark Fork", "Coeur D'Alene", "Coolin",
  "Corral", "Cottonwood", "Council", "Declo", "Dietrich",
  "Donnelly", "Dover", "Downey", "Driggs", "Eagle",
  "Eden", "Emmett", "Fernwood", "Filer", "Firth",
  "Fruitland", "Garden City", "Garden Valley", "Genesee", "Glenns Ferry",
  "Gooding", "Grangeville", "Greencreek", "Hagerman", "Hailey",
  "Hammett", "Hayden", "Hazelton", "Homedale", "Hope",
  "Horseshoe Bend", "Idaho Falls", "Iona", "Irwin", "Island Park",
  "Jerome", "Kamiah", "Kellogg", "Kendrick", "Ketchum",
  "Kimberly", "Kuna", "Laclede", "Letha", "Lewiston",
  "Lewisville", "Malad City", "Mccall", "Melba", "Menan",
  "Meridian", "Middleton", "Montpelier", "Moscow", "Mountain Home",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < idahoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(idahoCities[i]);
}

module.exports = { batches };
