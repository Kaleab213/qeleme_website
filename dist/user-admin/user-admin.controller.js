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
exports.UserAdminController = void 0;
const common_1 = require("@nestjs/common");
const user_admin_service_1 = require("./user-admin.service");
const user_update_dto_1 = require("./admin.dto/user.update.dto");
const userDecorator_id_1 = require("../user/decorators/userDecorator.id");
const at_guard_1 = require("../user/guard/at.guard");
let UserAdminController = class UserAdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    getUser(username) {
        console.log(username);
        return username;
    }
    updateUser(userId, updateDto) {
        return this.adminService.userUpdate(userId, updateDto);
    }
};
__decorate([
    (0, common_1.UseGuards)(at_guard_1.AtGuards),
    (0, common_1.Get)('me'),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, userDecorator_id_1.UserDecoratorId)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_update_dto_1.UserUpdate]),
    __metadata("design:returntype", void 0)
], UserAdminController.prototype, "updateUser", null);
UserAdminController = __decorate([
    (0, common_1.Controller)('user-admin'),
    __metadata("design:paramtypes", [user_admin_service_1.UserAdminService])
], UserAdminController);
exports.UserAdminController = UserAdminController;
//# sourceMappingURL=user-admin.controller.js.map