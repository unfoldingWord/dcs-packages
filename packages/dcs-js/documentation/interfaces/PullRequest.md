[dcs-js](../README.md) / [Exports](../modules.md) / PullRequest

# Interface: PullRequest

PullRequest represents a pull request

**`export`**

**`interface`** PullRequest

## Table of contents

### Properties

- [assignee](PullRequest.md#assignee)
- [assignees](PullRequest.md#assignees)
- [base](PullRequest.md#base)
- [body](PullRequest.md#body)
- [closedAt](PullRequest.md#closedat)
- [comments](PullRequest.md#comments)
- [createdAt](PullRequest.md#createdat)
- [diffUrl](PullRequest.md#diffurl)
- [dueDate](PullRequest.md#duedate)
- [head](PullRequest.md#head)
- [htmlUrl](PullRequest.md#htmlurl)
- [id](PullRequest.md#id)
- [isLocked](PullRequest.md#islocked)
- [labels](PullRequest.md#labels)
- [mergeBase](PullRequest.md#mergebase)
- [mergeCommitSha](PullRequest.md#mergecommitsha)
- [mergeable](PullRequest.md#mergeable)
- [merged](PullRequest.md#merged)
- [mergedAt](PullRequest.md#mergedat)
- [mergedBy](PullRequest.md#mergedby)
- [milestone](PullRequest.md#milestone)
- [number](PullRequest.md#number)
- [patchUrl](PullRequest.md#patchurl)
- [state](PullRequest.md#state)
- [title](PullRequest.md#title)
- [updatedAt](PullRequest.md#updatedat)
- [url](PullRequest.md#url)
- [user](PullRequest.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• `Optional` **assignee**: [`User`](User.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:30](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L30)

___

### <a id="assignees" name="assignees"></a> assignees

• `Optional` **assignees**: [`User`](User.md)[]

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:36](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L36)

___

### <a id="base" name="base"></a> base

• `Optional` **base**: [`PRBranchInfo`](PRBranchInfo.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:42](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L42)

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:48](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L48)

___

### <a id="closedat" name="closedat"></a> closedAt

• `Optional` **closedAt**: `Date`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:54](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L54)

___

### <a id="comments" name="comments"></a> comments

• `Optional` **comments**: `number`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:60](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L60)

___

### <a id="createdat" name="createdat"></a> createdAt

• `Optional` **createdAt**: `Date`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:66](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L66)

___

### <a id="diffurl" name="diffurl"></a> diffUrl

• `Optional` **diffUrl**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:72](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L72)

___

### <a id="duedate" name="duedate"></a> dueDate

• `Optional` **dueDate**: `Date`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:78](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L78)

___

### <a id="head" name="head"></a> head

• `Optional` **head**: [`PRBranchInfo`](PRBranchInfo.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:84](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L84)

___

### <a id="htmlurl" name="htmlurl"></a> htmlUrl

• `Optional` **htmlUrl**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:90](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L90)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:96](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L96)

___

### <a id="islocked" name="islocked"></a> isLocked

• `Optional` **isLocked**: `boolean`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:102](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L102)

___

### <a id="labels" name="labels"></a> labels

• `Optional` **labels**: [`Label`](Label.md)[]

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:108](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L108)

___

### <a id="mergebase" name="mergebase"></a> mergeBase

• `Optional` **mergeBase**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:114](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L114)

___

### <a id="mergecommitsha" name="mergecommitsha"></a> mergeCommitSha

• `Optional` **mergeCommitSha**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:120](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L120)

___

### <a id="mergeable" name="mergeable"></a> mergeable

• `Optional` **mergeable**: `boolean`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:126](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L126)

___

### <a id="merged" name="merged"></a> merged

• `Optional` **merged**: `boolean`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:132](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L132)

___

### <a id="mergedat" name="mergedat"></a> mergedAt

• `Optional` **mergedAt**: `Date`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:138](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L138)

___

### <a id="mergedby" name="mergedby"></a> mergedBy

• `Optional` **mergedBy**: [`User`](User.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:144](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L144)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: [`Milestone`](Milestone.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:150](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L150)

___

### <a id="number" name="number"></a> number

• `Optional` **number**: `number`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:156](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L156)

___

### <a id="patchurl" name="patchurl"></a> patchUrl

• `Optional` **patchUrl**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:162](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L162)

___

### <a id="state" name="state"></a> state

• `Optional` **state**: [`StateType`](StateType.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:168](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L168)

___

### <a id="title" name="title"></a> title

• `Optional` **title**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:174](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L174)

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:180](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L180)

___

### <a id="url" name="url"></a> url

• `Optional` **url**: `string`

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:186](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L186)

___

### <a id="user" name="user"></a> user

• `Optional` **user**: [`User`](User.md)

**`memberof`** PullRequest

#### Defined in

[models/pull-request.ts:192](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/pull-request.ts#L192)
