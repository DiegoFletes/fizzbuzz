class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }
    static filterByStack(explorers, mission){
        const explorersByStack = explorers.filter((explorer) => explorer.stack == mission);
        const explorersstack = explorersByStack.map((explorer) => explorer.githubUsername);
        return explorersByStack;
    }


}

module.exports = ExplorerService;
