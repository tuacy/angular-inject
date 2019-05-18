import {InjectionToken} from '@angular/core';
import {Config} from './provider/value-provider/config';
import {ModuleFactoryProviderService} from "./provider/factory-provider/module-factory-provider.service";
import {ModuleConstructorConfig} from "./provider/constructor-provider/module-constructor-config";

export const TOKEN_MODULE_CLASS_PROVIDER = new InjectionToken<any>('TOKEN_MODULE_CLASS_PROVIDER');
export const TOKEN_MODULE_CONFIG = new InjectionToken<Config>('TOKEN_MODULE_CONFIG');
export const TOKEN_COMPONENT_VALUE = new InjectionToken<string>('TOKEN_COMPONENT_VALUE');

// FactoryProvider
export const TOKEN_FACTORY_MODULE = new InjectionToken<ModuleFactoryProviderService>('TOKEN_FACTORY_MODULE');
export const TOKEN_FACTORY_MODULE_DEPS = new InjectionToken<ModuleFactoryProviderService>('TOKEN_FACTORY_MODULE_DEPS');

// ConstructorProvider
export const TOKEN_CONSTRUCTOR_RELY = new InjectionToken<ModuleConstructorConfig>('TOKEN_CONSTRUCTOR_RELY');


