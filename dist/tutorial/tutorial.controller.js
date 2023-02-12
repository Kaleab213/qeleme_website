"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialController = void 0;
const common_1 = require("@nestjs/common");
const tutorial_service_1 = require("./tutorial.service");
const userDecorator_id_1 = require("../user/decorators/userDecorator.id");
const create_tutorial_dto_1 = require("./dto/create-tutorial.dto");
const update_tutorial_dto_1 = require("./dto/update-tutorial.dto");
const at_guard_1 = require("../user/guard/at.guard");
let TutorialController = class TutorialController {
    constructor(tutorialService) {
        this.tutorialService = tutorialService;
    }
    getTutorial(userId) {
        return this.tutorialService.getTutorial(userId);
    }
    getTutorialById(userId, tutorId) {
        return this.tutorialService.getTutorialById(userId, tutorId);
    }
    createTutor(userId, dto) {
        return this.tutorialService.createTutor(userId, dto);
    }
    Updatetutor(userId, tutorId, dto) {
        return this.tutorialService.Updatetutor(userId, tutorId, dto);
    }
    deletetutor(userId, tutorId) {
        return this.tutorialService.deletetutor(userId, tutorId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TutorialController.prototype, "getTutorial", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TutorialController.prototype, "getTutorialById", null);
__decorate([
    (0, common_1.UseGuards)(at_guard_1.AtGuards),
    (0, common_1.Post)(),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_tutorial_dto_1.CreateTutorialDto]),
    __metadata("design:returntype", void 0)
], TutorialController.prototype, "createTutor", null);
__decorate([
    (0, common_1.UseGuards)(at_guard_1.AtGuards),
    (0, common_1.Patch)(':id'),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_tutorial_dto_1.UpdateTutorialDto]),
    __metadata("design:returntype", void 0)
], TutorialController.prototype, "Updatetutor", null);
__decorate([
    (0, common_1.UseGuards)(at_guard_1.AtGuards),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TutorialController.prototype, "deletetutor", null);
TutorialController = __decorate([
    (0, common_1.Controller)('tutorial'),
    __metadata("design:paramtypes", [tutorial_service_1.TutorialService])
], TutorialController);
exports.TutorialController = TutorialController;
//# sourceMappingURL=tutorial.controller.js.map