export class ModuleFactoryProviderService {

    constructorValue: string;

    /**
     * 够造函数需要传入一个值(也可以是另一个服务)
     * 该服务的创建依赖另一个值
     */
    constructor(value: string) {
        this.constructorValue = value;
    }
}
