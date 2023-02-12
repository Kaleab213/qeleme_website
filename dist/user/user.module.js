"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const prisma_module_1 = require("../prisma/prisma.module");
const Strategies_1 = require("./Strategies");
const rt_strategy_1 = require("./Strategies/rt.strategy");
const dist_1 = require("@nestjs/jwt/dist");
const dist_2 = require("@nestjs/config/dist");
const user_controller_1 = require("./user.controller");
let UserAuthModule = class UserAuthModule {
};
UserAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [dist_2.ConfigModule.forRoot({ isGlobal: true, }), dist_1.JwtModule.register({}), prisma_module_1.PrismaModule],
        controllers: [user_controller_1.UserAuthController],
        providers: [user_service_1.UserAuthService, Strategies_1.AtStrategy, rt_strategy_1.RtStrategy, dist_2.ConfigService]
    })
], UserAuthModule);
exports.UserAuthModule = UserAuthModule;
//# sourceMappingURL=user.module.js.map