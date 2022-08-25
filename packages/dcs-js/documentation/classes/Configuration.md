[dcs-js](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [baseOptions](Configuration.md#baseoptions)
- [basePath](Configuration.md#basepath)
- [password](Configuration.md#password)
- [username](Configuration.md#username)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[configuration.ts:66](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L66)

## Properties

### <a id="accesstoken" name="accesstoken"></a> accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`<`string`\>

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

#### Defined in

[configuration.ts:50](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L50)

___

### <a id="apikey" name="apikey"></a> apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

#### Defined in

[configuration.ts:29](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L29)

___

### <a id="baseoptions" name="baseoptions"></a> baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`memberof`** Configuration

#### Defined in

[configuration.ts:64](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L64)

___

### <a id="basepath" name="basepath"></a> basePath

• `Optional` **basePath**: `string`

override base path

**`memberof`** Configuration

#### Defined in

[configuration.ts:57](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L57)

___

### <a id="password" name="password"></a> password

• `Optional` **password**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[configuration.ts:43](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L43)

___

### <a id="username" name="username"></a> username

• `Optional` **username**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[configuration.ts:36](https://github.com/unfoldingWord/dcs-js/blob/c677a54/configuration.ts#L36)
