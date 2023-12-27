"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./common/exception.filter");
const configuration_1 = require("./config/configuration");
const cookieParser = require("cookie-parser");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.setGlobalPrefix('api');
        const adapterHost = app.get(core_1.HttpAdapterHost);
        app.useGlobalFilters(new exception_filter_1.GlobalExceptionFilter(adapterHost));
        yield app.enableCors({
            origin: true,
            preflightContinue: false,
            credentials: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            allowedHeaders: 'Content-Type, Accept',
        });
        app.use(cookieParser());
        yield app.listen(configuration_1.EnvConfig.AppPort);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map