[dcs-js](../README.md) / [Exports](../modules.md) / Issue

# Interface: Issue

Issue represents an issue in a repository

**`export`**

**`interface`** Issue

## Table of contents

### Properties

- [assignee](Issue.md#assignee)
- [assignees](Issue.md#assignees)
- [body](Issue.md#body)
- [closedAt](Issue.md#closedat)
- [comments](Issue.md#comments)
- [createdAt](Issue.md#createdat)
- [dueDate](Issue.md#duedate)
- [htmlUrl](Issue.md#htmlurl)
- [id](Issue.md#id)
- [isLocked](Issue.md#islocked)
- [labels](Issue.md#labels)
- [milestone](Issue.md#milestone)
- [number](Issue.md#number)
- [originalAuthor](Issue.md#originalauthor)
- [originalAuthorId](Issue.md#originalauthorid)
- [pullRequest](Issue.md#pullrequest)
- [ref](Issue.md#ref)
- [repository](Issue.md#repository)
- [state](Issue.md#state)
- [title](Issue.md#title)
- [updatedAt](Issue.md#updatedat)
- [url](Issue.md#url)
- [user](Issue.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• `Optional` **assignee**: [`User`](User.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:31](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L31)

___

### <a id="assignees" name="assignees"></a> assignees

• `Optional` **assignees**: [`User`](User.md)[]

**`memberof`** Issue

#### Defined in

[models/issue.ts:37](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L37)

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:43](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L43)

___

### <a id="closedat" name="closedat"></a> closedAt

• `Optional` **closedAt**: `Date`

**`memberof`** Issue

#### Defined in

[models/issue.ts:49](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L49)

___

### <a id="comments" name="comments"></a> comments

• `Optional` **comments**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:55](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L55)

___

### <a id="createdat" name="createdat"></a> createdAt

• `Optional` **createdAt**: `Date`

**`memberof`** Issue

#### Defined in

[models/issue.ts:61](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L61)

___

### <a id="duedate" name="duedate"></a> dueDate

• `Optional` **dueDate**: `Date`

**`memberof`** Issue

#### Defined in

[models/issue.ts:67](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L67)

___

### <a id="htmlurl" name="htmlurl"></a> htmlUrl

• `Optional` **htmlUrl**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:73](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L73)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:79](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L79)

___

### <a id="islocked" name="islocked"></a> isLocked

• `Optional` **isLocked**: `boolean`

**`memberof`** Issue

#### Defined in

[models/issue.ts:85](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L85)

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: [`Label`](Label.md)[]

**`memberof`** Issue

#### Defined in

[models/issue.ts:91](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L91)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: [`Milestone`](Milestone.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:97](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L97)

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:103](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L103)

___

### <a id="originalauthor" name="originalauthor"></a> originalAuthor

• `Optional` **originalAuthor**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:109](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L109)

___

### <a id="originalauthorid" name="originalauthorid"></a> originalAuthorId

• `Optional` **originalAuthorId**: `number`

**`memberof`** Issue

#### Defined in

[models/issue.ts:115](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L115)

___

### <a id="pullrequest" name="pullrequest"></a> pullRequest

• `Optional` **pullRequest**: [`PullRequestMeta`](PullRequestMeta.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:121](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L121)

___

### <a id="ref" name="ref"></a> ref

• `Optional` **ref**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:127](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L127)

___

### <a id="repository" name="repository"></a> repository

• `Optional` **repository**: [`RepositoryMeta`](RepositoryMeta.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:133](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L133)

___

### <a id="state" name="state"></a> state

• `Optional` **state**: [`StateType`](StateType.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:139](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L139)

___

### <a id="title" name="title"></a> title

• `Optional` **title**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:145](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L145)

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** Issue

#### Defined in

[models/issue.ts:151](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L151)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** Issue

#### Defined in

[models/issue.ts:157](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L157)

___

### <a id="user" name="user"></a> user

• `Optional` **user**: [`User`](User.md)

**`memberof`** Issue

#### Defined in

[models/issue.ts:163](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/issue.ts#L163)
