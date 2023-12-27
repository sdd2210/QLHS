interface DBEnv {
    Uri: string;
    Host: string;
    Port: number;
    DBname: string;
    User: string;
    Pwd: string;
}
interface SecurityEnv {
    ThrottlerTTL: number;
    ThrottlerLimit: number;
}
interface CacheEnv {
    Host: string;
    Port: number;
}
export declare class EnvConfig {
    private static getDatabase;
    private static getSecurity;
    private static getCache;
    static AppPort: number;
    static Database: DBEnv;
    static Cache: CacheEnv;
    static Security: SecurityEnv;
    static reCaptchaKey: string;
    static maxUploadDocs: number;
    static maxUploadFolder: number;
    static PathUploadRoot: string;
}
export {};
