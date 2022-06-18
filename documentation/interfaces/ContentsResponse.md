[dcs-js](../README.md) / [Exports](../modules.md) / ContentsResponse

# Interface: ContentsResponse

ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content

**`export`**

**`interface`** ContentsResponse

## Table of contents

### Properties

- [content](ContentsResponse.md#content)
- [downloadUrl](ContentsResponse.md#downloadurl)
- [encoding](ContentsResponse.md#encoding)
- [gitUrl](ContentsResponse.md#giturl)
- [htmlUrl](ContentsResponse.md#htmlurl)
- [links](ContentsResponse.md#links)
- [name](ContentsResponse.md#name)
- [path](ContentsResponse.md#path)
- [sha](ContentsResponse.md#sha)
- [size](ContentsResponse.md#size)
- [submoduleGitUrl](ContentsResponse.md#submodulegiturl)
- [target](ContentsResponse.md#target)
- [type](ContentsResponse.md#type)
- [url](ContentsResponse.md#url)

## Properties

### <a id="content" name="content"></a> content

• `Optional` **content**: `string`

`content` is populated when `type` is `file`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:32](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L32)

___

### <a id="downloadurl" name="downloadurl"></a> downloadUrl

• `Optional` **downloadUrl**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:38](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L38)

___

### <a id="encoding" name="encoding"></a> encoding

• `Optional` **encoding**: `string`

`encoding` is populated when `type` is `file`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:44](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L44)

___

### <a id="giturl" name="giturl"></a> gitUrl

• `Optional` **gitUrl**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:50](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L50)

___

### <a id="htmlurl" name="htmlurl"></a> htmlUrl

• `Optional` **htmlUrl**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:56](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L56)

___

### <a id="links" name="links"></a> links

• `Optional` **links**: [`FileLinksResponse`](FileLinksResponse.md)

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:26](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L26)

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:62](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L62)

___

### <a id="path" name="path"></a> path

• `Optional` **path**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:68](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L68)

___

### <a id="sha" name="sha"></a> sha

• `Optional` **sha**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:74](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L74)

___

### <a id="size" name="size"></a> size

• `Optional` **size**: `number`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:80](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L80)

___

### <a id="submodulegiturl" name="submodulegiturl"></a> submoduleGitUrl

• `Optional` **submoduleGitUrl**: `string`

`submodule_git_url` is populated when `type` is `submodule`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:86](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L86)

___

### <a id="target" name="target"></a> target

• `Optional` **target**: `string`

`target` is populated when `type` is `symlink`, otherwise null

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:92](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L92)

___

### <a id="type" name="type"></a> type

• `Optional` **type**: `string`

`type` will be `file`, `dir`, `symlink`, or `submodule`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:98](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L98)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** ContentsResponse

#### Defined in

[models/contents-response.ts:104](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/contents-response.ts#L104)
