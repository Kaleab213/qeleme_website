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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TutorialService = class TutorialService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getTutorial(userId) {
        return this.prisma.tutorial.findMany({
            where: {
                userId,
            },
        });
    }
    getTutorialById(userId, tutorId) {
        return this.prisma.tutorial.findFirst({
            where: {
                id: tutorId,
                userId,
            },
        });
    }
    async createTutor(userId, dto) {
        const tutorial = await this.prisma.tutorial.create({
            data: Object.assign({ userId }, dto),
        });
        return tutorial;
    }
    async Updatetutor(userId, tutorId, dto) {
        const tutorial = await this.prisma.tutorial.findUnique({
            where: {
                id: tutorId,
            },
        });
        if (!tutorial || tutorial.userId !== userId)
            throw new common_1.ForbiddenException('Access to resources denied');
        return this.prisma.tutorial.update({
            where: {
                id: tutorId,
            },
            data: Object.assign({}, dto),
        });
    }
    async deletetutor(userId, tutorId) {
        const tutorial = await this.prisma.tutorial.findUnique({
            where: {
                id: tutorId,
            },
        });
        if (!tutorial || tutorial.userId !== userId)
            throw new common_1.ForbiddenException('Access to resources denied');
        await this.prisma.tutorial.delete({
            where: {
                id: tutorId,
            },
        });
    }
    async Logout(id) {
        await this.prisma.user.updateMany({
            where: { id, referesh_password: {
                    not: null
                } },
            data: {
                referesh_password: null
            }
        });
    }
};
TutorialService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TutorialService);
exports.TutorialService = TutorialService;
//# sourceMappingURL=tutorial.service.js.map