"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDecoratorId = void 0;
const common_1 = require("@nestjs/common");
exports.UserDecoratorId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (data) {
        return request.user[data];
    }
    return request.user;
});
//# sourceMappingURL=userDecorator.id.js.map