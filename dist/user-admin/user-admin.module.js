"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminModule = void 0;
const common_1 = require("@nestjs/common");
const user_admin_service_1 = require("./user-admin.service");
const user_admin_controller_1 = require("./user-admin.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const dist_1 = require("@nestjs/config/dist");
const user_module_1 = require("../user/user.module");
let UserAdminModule = class UserAdminModule {
};
UserAdminModule = __decorate([
    (0, common_1.Module)({
        imports: [dist_1.ConfigModule.forRoot({ isGlobal: true, }), prisma_module_1.PrismaModule, user_module_1.UserAuthModule],
        providers: [user_admin_service_1.UserAdminService],
        controllers: [user_admin_controller_1.UserAdminController]
    })
], UserAdminModule);
exports.UserAdminModule = UserAdminModule;
//# sourceMappingURL=user-admin.module.js.map