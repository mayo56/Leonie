"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommandMixin = void 0;
class ApplicationCommandMixin {
    command;
    instance;
    constructor(command, instance) {
        this.command = command;
        this.instance = instance;
        // empty constructor
    }
    get name() {
        return this.command.name;
    }
    get description() {
        return this.command.description;
    }
}
exports.ApplicationCommandMixin = ApplicationCommandMixin;
//# sourceMappingURL=ApplicationCommandMixin.js.map