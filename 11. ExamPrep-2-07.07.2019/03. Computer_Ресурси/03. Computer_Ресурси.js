class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }
    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error("There is not enough space on the hard drive");
        }
        const program = {
            name: name,
            requiredSpace: requiredSpace
        }
        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;

        return program;
    }
    uninstallAProgram(name) {
        const program = this.installedPrograms.find(x => x.name === name);
        if (!program) {
            throw new Error("Control panel is not responding");
        }
        this.installedPrograms = this.installedPrograms.filter(x => x.name !== program.name);
        this.hddMemory += program.requiredSpace;
        return this.installedPrograms;
    }
    openAProgram(name) {
        let program = this.installedPrograms.find(x=>x.name === name);
        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }
        const openedProgram = this.taskManager.find(x=>x.name === program.name);
        if (openedProgram) {
            throw new Error(`The ${name} is already open`);
        }
        // let programIndex = this.installedPrograms.findIndex(x => x.name === name);
        // if (programIndex === -1) {
        //     throw new Error(`The ${name} is not recognized`);
        // }
        // let openedProgramIndex = this.taskManager.findIndex(x => x.name === name);
        // if (openedProgramIndex > -1) {
        //     throw new Error(`The ${name} is already open`);
        // }
        // let programRequiredSpace = this.installedPrograms[programIndex].requiredSpace;
        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        if ((this.totalRAMUsage + ramUsage) >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }
        if ((this.totalCPUUsage + cpuUsage) >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        program = {
            name: name,
            ramUsage: ramUsage,
            cpuUsage: cpuUsage
        }

        this.taskManager.push(program);
        return program;
    }
    taskManagerView() {
        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }
        return this.taskManager
            .map(p => `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`)
            .join('\n');
    }

    get totalRAMUsage() {
        return this.taskManager.reduce((acc, pr) => acc += pr.ramUsage, 0);
    }
    get totalCPUUsage() {
        return this.taskManager.reduce((acc, pr) => acc += pr.cpuUsage, 0);
    }
}


let test = new Computer(5, 5, 5);
console.log(test.installAProgram('a', 3));
console.log(test.installAProgram('b', 2));
console.log(test.uninstallAProgram('a'));
console.log(test.openAProgram('b'));