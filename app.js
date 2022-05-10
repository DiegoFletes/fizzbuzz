const ExplorerService = require("./lib/services/ExplorerService");
const Reader = require("./lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json");
console.log(ExplorerService.filterByStack(explorers,"node"))