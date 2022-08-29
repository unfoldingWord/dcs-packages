/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester, RequestParameters } from "../../requester";
import type {
  GetNotificationsItems,
  GetReposOwnerRepoCommitsRefStatusesSort,
  GetReposOwnerRepoCommitsRefStatusesState,
  GetReposOwnerRepoGitCommitsShaDiffTypeDiffType,
  GetReposOwnerRepoIssuesState,
  GetReposOwnerRepoIssuesType,
  GetReposOwnerRepoNotificationsItems,
  GetReposOwnerRepoPullsState,
  GetReposOwnerRepoPullsSort,
  GetReposOwnerRepoPullsIndexDiffTypeDiffType,
  PostReposOwnerRepoPullsIndexUpdateStyle,
  GetReposOwnerRepoStatusesShaSort,
  GetReposOwnerRepoStatusesShaState,
  CronList,
  Forbidden,
  Empty,
  NotFound,
  OrganizationList,
  StringSlice,
  UserList,
  CreateUserOption,
  User,
  TsgError,
  ValidationError,
  EditUserOption,
  CreateKeyOption,
  PublicKey,
  CreateOrgOption,
  Organization,
  CreateRepoOption,
  Repository,
  MarkdownOption,
  MarkdownRender,
  NodeInfo,
  NotificationThreadList,
  NotificationCount,
  NotificationThread,
  EditOrgOption,
  HookList,
  CreateHookOption,
  Hook,
  EditHookOption,
  LabelList,
  CreateLabelOption,
  Label,
  EditLabelOption,
  RepositoryList,
  TeamList,
  CreateTeamOption,
  Team,
  IssueList,
  MigrateRepoOptions,
  SearchResults,
  EditRepoOption,
  BranchProtectionList,
  CreateBranchProtectionOption,
  BranchProtection,
  EditBranchProtectionOption,
  BranchList,
  CreateBranchRepoOption,
  Branch,
  AddCollaboratorOption,
  CommitList,
  EmptyRepository,
  CombinedStatus,
  CommitStatusList,
  ContentsListResponse,
  ContentsResponse,
  UpdateFileOptions,
  FileResponse,
  CreateFileOptions,
  DeleteFileOptions,
  FileDeleteResponse,
  CreateForkOption,
  GitBlobResponse,
  Commit,
  TsgString,
  Note,
  ReferenceList,
  AnnotatedTag,
  GitTreeResponse,
  GitHookList,
  GitHook,
  EditGitHookOption,
  IssueTemplates,
  CreateIssueOption,
  Issue,
  CommentList,
  Comment,
  EditIssueCommentOption,
  ReactionList,
  EditReactionOption,
  Reaction,
  EditIssueOption,
  CreateIssueCommentOption,
  EditDeadlineOption,
  IssueDeadline,
  IssueLabelsOption,
  WatchInfo,
  TimelineList,
  TrackedTimeList,
  AddTimeOption,
  TrackedTime,
  DeployKeyList,
  DeployKey,
  LanguageStatistics,
  MilestoneList,
  CreateMilestoneOption,
  Milestone,
  EditMilestoneOption,
  PullRequestList,
  CreatePullRequestOption,
  PullRequest,
  EditPullRequestOption,
  MergePullRequestOption,
  PullReviewRequestOptions,
  PullReviewList,
  CreatePullReviewOptions,
  PullReview,
  SubmitPullReviewOptions,
  PullReviewCommentList,
  DismissPullReviewOptions,
  ReleaseList,
  CreateReleaseOption,
  Release,
  EditReleaseOption,
  AttachmentList,
  Attachment,
  EditAttachmentOptions,
  CreateStatusOption,
  CommitStatus,
  TagList,
  CreateTagOption,
  Tag,
  Conflict,
  TopicNames,
  RepoTopicOptions,
  InvalidTopicsError,
  TransferRepoOption,
  CreateWikiPageOptions,
  WikiPage,
  WikiPageList,
  WikiCommitList,
  GenerateRepoOption,
  GeneralAPISettings,
  GeneralAttachmentSettings,
  GeneralRepoSettings,
  GeneralUISettings,
  EditTeamOption,
  TopicListResponse,
  OAuthApplicationList,
  CreateOAuthApplicationOptions,
  OAuthApplication,
  EmailList,
  CreateEmailOption,
  DeleteEmailOption,
  GPGKey,
  GPGKeyList,
  CreateGPGKeyOption,
  PublicKeyList,
  UserSettings,
  UserSettingsOptions,
  StopWatchList,
  UserHeatmapData,
  OrganizationPermissions,
  AccessTokenList,
  CreateAccessTokenOption,
  AccessToken,
  ServerVersion,
} from "./definition";

/** @description request parameter type for adminCronList */
export interface AdminCronListOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for adminCronList */
export interface AdminCronListResponse {
  200: CronList;
  403: Forbidden;
}

export type AdminCronListResponseSuccess = AdminCronListResponse[200];
/**
 * @description
 *   List cron tasks
 * @tags admin
 * @produces application/json
 */
export const adminCronList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/admin/cron";
  function request(
    option?: AdminCronListOption & RequestParameters
  ): Promise<AdminCronListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminCronListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminCronRun */
export interface AdminCronRunOption {
  /**
   * @description
   *   task to run
   */
  path: {
    /**
        @description
          task to run */
    task: string;
  };
}

/** @description response type for adminCronRun */
export interface AdminCronRunResponse {
  204: Empty;
  404: NotFound;
}

export type AdminCronRunResponseSuccess = AdminCronRunResponse[204];
/**
 * @description
 *   Run cron task
 * @tags admin
 * @produces application/json
 */
export const adminCronRun = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/cron/:task";
  function request(
    option: AdminCronRunOption & RequestParameters
  ): Promise<AdminCronRunResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminCronRunResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminGetAllOrgs */
export interface AdminGetAllOrgsOption {
  /**
   * @description
   *   If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.
   */
  query?: {
    /**
        @description
          If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed. */
    lang?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for adminGetAllOrgs */
export interface AdminGetAllOrgsResponse {
  200: OrganizationList;
  403: Forbidden;
}

export type AdminGetAllOrgsResponseSuccess = AdminGetAllOrgsResponse[200];
/**
 * @description
 *   List all organizations
 * @tags admin
 * @produces application/json
 */
export const adminGetAllOrgs = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/admin/orgs";
  function request(
    option?: AdminGetAllOrgsOption & RequestParameters
  ): Promise<AdminGetAllOrgsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminGetAllOrgsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminUnadoptedList */
export interface AdminUnadoptedListOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
    /**
        @description
          pattern of repositories to search for */
    pattern?: string;
  };
}

/** @description response type for adminUnadoptedList */
export interface AdminUnadoptedListResponse {
  200: StringSlice;
  403: Forbidden;
}

export type AdminUnadoptedListResponseSuccess = AdminUnadoptedListResponse[200];
/**
 * @description
 *   List unadopted repositories
 * @tags admin
 * @produces application/json
 */
export const adminUnadoptedList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/admin/unadopted";
  function request(
    option?: AdminUnadoptedListOption & RequestParameters
  ): Promise<AdminUnadoptedListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminUnadoptedListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminAdoptRepository */
export interface AdminAdoptRepositoryOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for adminAdoptRepository */
export interface AdminAdoptRepositoryResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type AdminAdoptRepositoryResponseSuccess =
  AdminAdoptRepositoryResponse[204];
/**
 * @description
 *   Adopt unadopted files as a repository
 * @tags admin
 * @produces application/json
 */
export const adminAdoptRepository = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/unadopted/:owner/:repo";
  function request(
    option: AdminAdoptRepositoryOption & RequestParameters
  ): Promise<AdminAdoptRepositoryResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminAdoptRepositoryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminDeleteUnadoptedRepository */
export interface AdminDeleteUnadoptedRepositoryOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for adminDeleteUnadoptedRepository */
export interface AdminDeleteUnadoptedRepositoryResponse {
  204: Empty;
  403: Forbidden;
}

export type AdminDeleteUnadoptedRepositoryResponseSuccess =
  AdminDeleteUnadoptedRepositoryResponse[204];
/**
 * @description
 *   Delete unadopted files
 * @tags admin
 * @produces application/json
 */
export const adminDeleteUnadoptedRepository = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/admin/unadopted/:owner/:repo";
  function request(
    option: AdminDeleteUnadoptedRepositoryOption & RequestParameters
  ): Promise<AdminDeleteUnadoptedRepositoryResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminDeleteUnadoptedRepositoryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminGetAllUsers */
export interface AdminGetAllUsersOption {
  /**
   * @description
   *   If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.
   */
  query?: {
    /**
        @description
          If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed. */
    lang?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for adminGetAllUsers */
export interface AdminGetAllUsersResponse {
  200: UserList;
  403: Forbidden;
}

export type AdminGetAllUsersResponseSuccess = AdminGetAllUsersResponse[200];
/**
 * @description
 *   List all users
 * @tags admin
 * @produces application/json
 */
export const adminGetAllUsers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/admin/users";
  function request(
    option?: AdminGetAllUsersOption & RequestParameters
  ): Promise<AdminGetAllUsersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminGetAllUsersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminCreateUser */
export interface AdminCreateUserOption {
  body?: CreateUserOption;
}

/** @description response type for adminCreateUser */
export interface AdminCreateUserResponse {
  201: User;
  400: TsgError;
  403: Forbidden;
  422: ValidationError;
}

export type AdminCreateUserResponseSuccess = AdminCreateUserResponse[201];
/**
 * @description
 *   Create a user
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminCreateUser = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/users";
  function request(
    option?: AdminCreateUserOption & RequestParameters
  ): Promise<AdminCreateUserResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminCreateUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminDeleteUser */
export interface AdminDeleteUserOption {
  /**
   * @description
   *   username of user to delete
   */
  path: {
    /**
        @description
          username of user to delete */
    username: string;
  };
}

/** @description response type for adminDeleteUser */
export interface AdminDeleteUserResponse {
  204: Empty;
  403: Forbidden;
  422: ValidationError;
}

export type AdminDeleteUserResponseSuccess = AdminDeleteUserResponse[204];
/**
 * @description
 *   Delete a user
 * @tags admin
 * @produces application/json
 */
export const adminDeleteUser = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/admin/users/:username";
  function request(
    option: AdminDeleteUserOption & RequestParameters
  ): Promise<AdminDeleteUserResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminDeleteUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminEditUser */
export interface AdminEditUserOption {
  /**
   * @description
   *   username of user to edit
   */
  path: {
    /**
        @description
          username of user to edit */
    username: string;
  };
}

/** @description request parameter type for adminEditUser */
export interface AdminEditUserOption {
  body?: EditUserOption;
}

/** @description response type for adminEditUser */
export interface AdminEditUserResponse {
  200: User;
  403: Forbidden;
  422: ValidationError;
}

export type AdminEditUserResponseSuccess = AdminEditUserResponse[200];
/**
 * @description
 *   Edit an existing user
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminEditUser = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/admin/users/:username";
  function request(
    option: AdminEditUserOption & RequestParameters
  ): Promise<AdminEditUserResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminEditUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminCreatePublicKey */
export interface AdminCreatePublicKeyOption {
  /**
   * @description
   *   username of the user
   */
  path: {
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description request parameter type for adminCreatePublicKey */
export interface AdminCreatePublicKeyOption {
  body?: {
    key?: CreateKeyOption;
  };
}

/** @description response type for adminCreatePublicKey */
export interface AdminCreatePublicKeyResponse {
  201: PublicKey;
  403: Forbidden;
  422: ValidationError;
}

export type AdminCreatePublicKeyResponseSuccess =
  AdminCreatePublicKeyResponse[201];
/**
 * @description
 *   Add a public key on behalf of a user
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminCreatePublicKey = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/users/:username/keys";
  function request(
    option: AdminCreatePublicKeyOption & RequestParameters
  ): Promise<AdminCreatePublicKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminCreatePublicKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminDeleteUserPublicKey */
export interface AdminDeleteUserPublicKeyOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
    /**
        @description
          id of the key to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for adminDeleteUserPublicKey */
export interface AdminDeleteUserPublicKeyResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type AdminDeleteUserPublicKeyResponseSuccess =
  AdminDeleteUserPublicKeyResponse[204];
/**
 * @description
 *   Delete a user's public key
 * @tags admin
 * @produces application/json
 */
export const adminDeleteUserPublicKey = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/admin/users/:username/keys/:id";
  function request(
    option: AdminDeleteUserPublicKeyOption & RequestParameters
  ): Promise<AdminDeleteUserPublicKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminDeleteUserPublicKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminCreateOrg */
export interface AdminCreateOrgOption {
  /**
   * @description
   *   username of the user that will own the created organization
   */
  path: {
    /**
        @description
          username of the user that will own the created organization */
    username: string;
  };
}

/** @description request parameter type for adminCreateOrg */
export interface AdminCreateOrgOption {
  body: {
    organization: CreateOrgOption;
  };
}

/** @description response type for adminCreateOrg */
export interface AdminCreateOrgResponse {
  201: Organization;
  403: Forbidden;
  422: ValidationError;
}

export type AdminCreateOrgResponseSuccess = AdminCreateOrgResponse[201];
/**
 * @description
 *   Create an organization
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminCreateOrg = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/users/:username/orgs";
  function request(
    option: AdminCreateOrgOption & RequestParameters
  ): Promise<AdminCreateOrgResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminCreateOrgResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminCreateRepo */
export interface AdminCreateRepoOption {
  /**
   * @description
   *   username of the user. This user will own the created repository
   */
  path: {
    /**
        @description
          username of the user. This user will own the created repository */
    username: string;
  };
}

/** @description request parameter type for adminCreateRepo */
export interface AdminCreateRepoOption {
  body: {
    repository: CreateRepoOption;
  };
}

/** @description response type for adminCreateRepo */
export interface AdminCreateRepoResponse {
  201: Repository;
  403: Forbidden;
  404: NotFound;
  409: TsgError;
  422: ValidationError;
}

export type AdminCreateRepoResponseSuccess = AdminCreateRepoResponse[201];
/**
 * @description
 *   Create a repository on behalf of a user
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminCreateRepo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/admin/users/:username/repos";
  function request(
    option: AdminCreateRepoOption & RequestParameters
  ): Promise<AdminCreateRepoResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AdminCreateRepoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for renderMarkdown */
export interface RenderMarkdownOption {
  body?: MarkdownOption;
}

/** @description response type for renderMarkdown */
export interface RenderMarkdownResponse {
  200: MarkdownRender;
  422: ValidationError;
}

export type RenderMarkdownResponseSuccess = RenderMarkdownResponse[200];
/**
 * @description
 *   Render a markdown document as HTML
 * @tags miscellaneous
 * @produces text/html
 * @consumes application/json
 */
export const renderMarkdown = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/markdown";
  function request(
    option?: RenderMarkdownOption & RequestParameters
  ): Promise<RenderMarkdownResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RenderMarkdownResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for renderMarkdownRaw */
export interface RenderMarkdownRawOption {
  /**
   * @description
   *   Request body to render
   */
  body: string;
}

/** @description response type for renderMarkdownRaw */
export interface RenderMarkdownRawResponse {
  200: MarkdownRender;
  422: ValidationError;
}

export type RenderMarkdownRawResponseSuccess = RenderMarkdownRawResponse[200];
/**
 * @description
 *   Render raw markdown as HTML
 * @tags miscellaneous
 * @produces text/html
 * @consumes text/plain
 */
export const renderMarkdownRaw = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/markdown/raw";
  function request(
    option: RenderMarkdownRawOption & RequestParameters
  ): Promise<RenderMarkdownRawResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RenderMarkdownRawResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getNodeInfo */
export interface GetNodeInfoResponse {
  200: NodeInfo;
}

export type GetNodeInfoResponseSuccess = GetNodeInfoResponse[200];
/**
 * @description
 *   Returns the nodeinfo of the Gitea application
 * @tags miscellaneous
 * @produces application/json
 */
export const getNodeInfo = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/nodeinfo";
  function request(
    option?: RequestParameters
  ): Promise<GetNodeInfoResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetNodeInfoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifyGetList */
export interface NotifyGetListOption {
  /**
   * @description
   *   If true, show notifications marked as read. Default value is false
   */
  query?: {
    /**
        @description
          If true, show notifications marked as read. Default value is false */
    all?: boolean;
    /**
        @description
          Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned. */
    "status-types"?: Array<string>;
    /**
        @description
          filter notifications by subject type */
    "subject-type"?: Array<GetNotificationsItems>;
    /**
        @description
          Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for notifyGetList */
export interface NotifyGetListResponse {
  200: NotificationThreadList;
}

export type NotifyGetListResponseSuccess = NotifyGetListResponse[200];
/**
 * @description
 *   List users's notification threads
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifyGetList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/notifications";
  function request(
    option?: NotifyGetListOption & RequestParameters
  ): Promise<NotifyGetListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyGetListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifyReadList */
export interface NotifyReadListOption {
  /**
   * @description
   *   Describes the last point that notifications were checked. Anything updated since this time will not be updated.
   * @format date-time
   */
  query?: {
    /**
        @description
          Describes the last point that notifications were checked. Anything updated since this time will not be updated.
        @format date-time */
    last_read_at?: string;
    /**
        @description
          If true, mark all notifications on this repo. Default value is false */
    all?: string;
    /**
        @description
          Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. */
    "status-types"?: Array<string>;
    /**
        @description
          Status to mark notifications as, Defaults to read. */
    "to-status"?: string;
  };
}

/** @description response type for notifyReadList */
export interface NotifyReadListResponse {
  205: NotificationThreadList;
}

export type NotifyReadListResponseSuccess = NotifyReadListResponse[205];
/**
 * @description
 *   Mark notification threads as read, pinned or unread
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifyReadList = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/notifications";
  function request(
    option?: NotifyReadListOption & RequestParameters
  ): Promise<NotifyReadListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyReadListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for notifyNewAvailable */
export interface NotifyNewAvailableResponse {
  200: NotificationCount;
}

export type NotifyNewAvailableResponseSuccess = NotifyNewAvailableResponse[200];
/**
 * @description
 *   Check if unread notifications exist
 * @tags notification
 */
export const notifyNewAvailable = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/notifications/new";
  function request(
    option?: RequestParameters
  ): Promise<NotifyNewAvailableResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyNewAvailableResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifyGetThread */
export interface NotifyGetThreadOption {
  /**
   * @description
   *   id of notification thread
   */
  path: {
    /**
        @description
          id of notification thread */
    id: string;
  };
}

/** @description response type for notifyGetThread */
export interface NotifyGetThreadResponse {
  200: NotificationThread;
  403: Forbidden;
  404: NotFound;
}

export type NotifyGetThreadResponseSuccess = NotifyGetThreadResponse[200];
/**
 * @description
 *   Get notification thread by ID
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifyGetThread = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/notifications/threads/:id";
  function request(
    option: NotifyGetThreadOption & RequestParameters
  ): Promise<NotifyGetThreadResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyGetThreadResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifyReadThread */
export interface NotifyReadThreadOption {
  /**
   * @description
   *   id of notification thread
   */
  path: {
    /**
        @description
          id of notification thread */
    id: string;
  };
}

/** @description request parameter type for notifyReadThread */
export interface NotifyReadThreadOption {
  /**
   * @description
   *   Status to mark notifications as
   * @default read
   */
  query?: {
    /**
        @description
          Status to mark notifications as
        @default read */
    "to-status"?: string;
  };
}

/** @description response type for notifyReadThread */
export interface NotifyReadThreadResponse {
  205: NotificationThread;
  403: Forbidden;
  404: NotFound;
}

export type NotifyReadThreadResponseSuccess = NotifyReadThreadResponse[205];
/**
 * @description
 *   Mark notification thread as read by ID
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifyReadThread = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/notifications/threads/:id";
  function request(
    option: NotifyReadThreadOption & RequestParameters
  ): Promise<NotifyReadThreadResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyReadThreadResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgGetAll */
export interface OrgGetAllOption {
  /**
   * @description
   *   If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed.
   */
  query?: {
    /**
        @description
          If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed. */
    lang?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgGetAll */
export interface OrgGetAllResponse {
  200: OrganizationList;
}

export type OrgGetAllResponseSuccess = OrgGetAllResponse[200];
/**
 * @description
 *   Get list of organizations
 * @tags organization
 * @produces application/json
 */
export const orgGetAll = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs";
  function request(
    option?: OrgGetAllOption & RequestParameters
  ): Promise<OrgGetAllResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgGetAllResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgCreate */
export interface OrgCreateOption {
  body: {
    organization: CreateOrgOption;
  };
}

/** @description response type for orgCreate */
export interface OrgCreateResponse {
  201: Organization;
  403: Forbidden;
  422: ValidationError;
}

export type OrgCreateResponseSuccess = OrgCreateResponse[201];
/**
 * @description
 *   Create an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgCreate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/orgs";
  function request(
    option: OrgCreateOption & RequestParameters
  ): Promise<OrgCreateResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgGet */
export interface OrgGetOption {
  /**
   * @description
   *   name of the organization to get
   */
  path: {
    /**
        @description
          name of the organization to get */
    org: string;
  };
}

/** @description response type for orgGet */
export interface OrgGetResponse {
  200: Organization;
}

export type OrgGetResponseSuccess = OrgGetResponse[200];
/**
 * @description
 *   Get an organization
 * @tags organization
 * @produces application/json
 */
export const orgGet = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org";
  function request(
    option: OrgGetOption & RequestParameters
  ): Promise<OrgGetResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgGetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgDelete */
export interface OrgDeleteOption {
  /**
   * @description
   *   organization that is to be deleted
   */
  path: {
    /**
        @description
          organization that is to be deleted */
    org: string;
  };
}

/** @description response type for orgDelete */
export interface OrgDeleteResponse {
  204: Empty;
}

export type OrgDeleteResponseSuccess = OrgDeleteResponse[204];
/**
 * @description
 *   Delete an organization
 * @tags organization
 * @produces application/json
 */
export const orgDelete = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/orgs/:org";
  function request(
    option: OrgDeleteOption & RequestParameters
  ): Promise<OrgDeleteResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgDeleteResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgEdit */
export interface OrgEditOption {
  /**
   * @description
   *   name of the organization to edit
   */
  path: {
    /**
        @description
          name of the organization to edit */
    org: string;
  };
}

/** @description request parameter type for orgEdit */
export interface OrgEditOption {
  body: EditOrgOption;
}

/** @description response type for orgEdit */
export interface OrgEditResponse {
  200: Organization;
}

export type OrgEditResponseSuccess = OrgEditResponse[200];
/**
 * @description
 *   Edit an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgEdit = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/orgs/:org";
  function request(
    option: OrgEditOption & RequestParameters
  ): Promise<OrgEditResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgEditResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListHooks */
export interface OrgListHooksOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgListHooks */
export interface OrgListHooksOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListHooks */
export interface OrgListHooksResponse {
  200: HookList;
}

export type OrgListHooksResponseSuccess = OrgListHooksResponse[200];
/**
 * @description
 *   List an organization's webhooks
 * @tags organization
 * @produces application/json
 */
export const orgListHooks = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/hooks";
  function request(
    option: OrgListHooksOption & RequestParameters
  ): Promise<OrgListHooksResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListHooksResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgCreateHook */
export interface OrgCreateHookOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgCreateHook */
export interface OrgCreateHookOption {
  body: CreateHookOption;
}

/** @description response type for orgCreateHook */
export interface OrgCreateHookResponse {
  201: Hook;
}

export type OrgCreateHookResponseSuccess = OrgCreateHookResponse[201];
/**
 * @description
 *   Create a hook
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgCreateHook = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/orgs/:org/hooks/";
  function request(
    option: OrgCreateHookOption & RequestParameters
  ): Promise<OrgCreateHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgCreateHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgGetHook */
export interface OrgGetHookOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          id of the hook to get
        @format int64 */
    id: number;
  };
}

/** @description response type for orgGetHook */
export interface OrgGetHookResponse {
  200: Hook;
}

export type OrgGetHookResponseSuccess = OrgGetHookResponse[200];
/**
 * @description
 *   Get a hook
 * @tags organization
 * @produces application/json
 */
export const orgGetHook = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/hooks/:id";
  function request(
    option: OrgGetHookOption & RequestParameters
  ): Promise<OrgGetHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgGetHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgDeleteHook */
export interface OrgDeleteHookOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          id of the hook to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for orgDeleteHook */
export interface OrgDeleteHookResponse {
  204: Empty;
}

export type OrgDeleteHookResponseSuccess = OrgDeleteHookResponse[204];
/**
 * @description
 *   Delete a hook
 * @tags organization
 * @produces application/json
 */
export const orgDeleteHook = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/orgs/:org/hooks/:id";
  function request(
    option: OrgDeleteHookOption & RequestParameters
  ): Promise<OrgDeleteHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgDeleteHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgEditHook */
export interface OrgEditHookOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          id of the hook to update
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for orgEditHook */
export interface OrgEditHookOption {
  body?: EditHookOption;
}

/** @description response type for orgEditHook */
export interface OrgEditHookResponse {
  200: Hook;
}

export type OrgEditHookResponseSuccess = OrgEditHookResponse[200];
/**
 * @description
 *   Update a hook
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgEditHook = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/orgs/:org/hooks/:id";
  function request(
    option: OrgEditHookOption & RequestParameters
  ): Promise<OrgEditHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgEditHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListLabels */
export interface OrgListLabelsOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgListLabels */
export interface OrgListLabelsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListLabels */
export interface OrgListLabelsResponse {
  200: LabelList;
}

export type OrgListLabelsResponseSuccess = OrgListLabelsResponse[200];
/**
 * @description
 *   List an organization's labels
 * @tags organization
 * @produces application/json
 */
export const orgListLabels = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/labels";
  function request(
    option: OrgListLabelsOption & RequestParameters
  ): Promise<OrgListLabelsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListLabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgCreateLabel */
export interface OrgCreateLabelOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgCreateLabel */
export interface OrgCreateLabelOption {
  body?: CreateLabelOption;
}

/** @description response type for orgCreateLabel */
export interface OrgCreateLabelResponse {
  201: Label;
  422: ValidationError;
}

export type OrgCreateLabelResponseSuccess = OrgCreateLabelResponse[201];
/**
 * @description
 *   Create a label for an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgCreateLabel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/orgs/:org/labels";
  function request(
    option: OrgCreateLabelOption & RequestParameters
  ): Promise<OrgCreateLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgCreateLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgGetLabel */
export interface OrgGetLabelOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          id of the label to get
        @format int64 */
    id: number;
  };
}

/** @description response type for orgGetLabel */
export interface OrgGetLabelResponse {
  200: Label;
}

export type OrgGetLabelResponseSuccess = OrgGetLabelResponse[200];
/**
 * @description
 *   Get a single label
 * @tags organization
 * @produces application/json
 */
export const orgGetLabel = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/labels/:id";
  function request(
    option: OrgGetLabelOption & RequestParameters
  ): Promise<OrgGetLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgGetLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgDeleteLabel */
export interface OrgDeleteLabelOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          id of the label to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for orgDeleteLabel */
export interface OrgDeleteLabelResponse {
  204: Empty;
}

export type OrgDeleteLabelResponseSuccess = OrgDeleteLabelResponse[204];
/**
 * @description
 *   Delete a label
 * @tags organization
 */
export const orgDeleteLabel = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/orgs/:org/labels/:id";
  function request(
    option: OrgDeleteLabelOption & RequestParameters
  ): Promise<OrgDeleteLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgDeleteLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgEditLabel */
export interface OrgEditLabelOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          id of the label to edit
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for orgEditLabel */
export interface OrgEditLabelOption {
  body?: EditLabelOption;
}

/** @description response type for orgEditLabel */
export interface OrgEditLabelResponse {
  200: Label;
  422: ValidationError;
}

export type OrgEditLabelResponseSuccess = OrgEditLabelResponse[200];
/**
 * @description
 *   Update a label
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgEditLabel = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/orgs/:org/labels/:id";
  function request(
    option: OrgEditLabelOption & RequestParameters
  ): Promise<OrgEditLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgEditLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListMembers */
export interface OrgListMembersOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgListMembers */
export interface OrgListMembersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListMembers */
export interface OrgListMembersResponse {
  200: UserList;
}

export type OrgListMembersResponseSuccess = OrgListMembersResponse[200];
/**
 * @description
 *   List an organization's members
 * @tags organization
 * @produces application/json
 */
export const orgListMembers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/members";
  function request(
    option: OrgListMembersOption & RequestParameters
  ): Promise<OrgListMembersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListMembersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgIsMember */
export interface OrgIsMemberOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description response type for orgIsMember */
export interface OrgIsMemberResponse {
  /**
   * @description
   *   user is a member
   */
  204: any;
  /**
   * @description
   *   redirection to /orgs/{org}/public_members/{username}
   */
  302: any;
  /**
   * @description
   *   user is not a member
   */
  404: any;
}

export type OrgIsMemberResponseSuccess = OrgIsMemberResponse[204];
/**
 * @description
 *   Check if a user is a member of an organization
 * @tags organization
 */
export const orgIsMember = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/members/:username";
  function request(
    option: OrgIsMemberOption & RequestParameters
  ): Promise<OrgIsMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgIsMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgDeleteMember */
export interface OrgDeleteMemberOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description response type for orgDeleteMember */
export interface OrgDeleteMemberResponse {
  /**
   * @description
   *   member removed
   */
  204: any;
}

export type OrgDeleteMemberResponseSuccess = OrgDeleteMemberResponse[204];
/**
 * @description
 *   Remove a member from an organization
 * @tags organization
 * @produces application/json
 */
export const orgDeleteMember = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/orgs/:org/members/:username";
  function request(
    option: OrgDeleteMemberOption & RequestParameters
  ): Promise<OrgDeleteMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgDeleteMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListPublicMembers */
export interface OrgListPublicMembersOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgListPublicMembers */
export interface OrgListPublicMembersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListPublicMembers */
export interface OrgListPublicMembersResponse {
  200: UserList;
}

export type OrgListPublicMembersResponseSuccess =
  OrgListPublicMembersResponse[200];
/**
 * @description
 *   List an organization's public members
 * @tags organization
 * @produces application/json
 */
export const orgListPublicMembers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/public_members";
  function request(
    option: OrgListPublicMembersOption & RequestParameters
  ): Promise<OrgListPublicMembersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListPublicMembersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgIsPublicMember */
export interface OrgIsPublicMemberOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description response type for orgIsPublicMember */
export interface OrgIsPublicMemberResponse {
  /**
   * @description
   *   user is a public member
   */
  204: any;
  /**
   * @description
   *   user is not a public member
   */
  404: any;
}

export type OrgIsPublicMemberResponseSuccess = OrgIsPublicMemberResponse[204];
/**
 * @description
 *   Check if a user is a public member of an organization
 * @tags organization
 */
export const orgIsPublicMember = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/public_members/:username";
  function request(
    option: OrgIsPublicMemberOption & RequestParameters
  ): Promise<OrgIsPublicMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgIsPublicMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgPublicizeMember */
export interface OrgPublicizeMemberOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description response type for orgPublicizeMember */
export interface OrgPublicizeMemberResponse {
  /**
   * @description
   *   membership publicized
   */
  204: any;
  403: Forbidden;
}

export type OrgPublicizeMemberResponseSuccess = OrgPublicizeMemberResponse[204];
/**
 * @description
 *   Publicize a user's membership
 * @tags organization
 * @produces application/json
 */
export const orgPublicizeMember = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/orgs/:org/public_members/:username";
  function request(
    option: OrgPublicizeMemberOption & RequestParameters
  ): Promise<OrgPublicizeMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgPublicizeMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgConcealMember */
export interface OrgConcealMemberOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description response type for orgConcealMember */
export interface OrgConcealMemberResponse {
  204: Empty;
  403: Forbidden;
}

export type OrgConcealMemberResponseSuccess = OrgConcealMemberResponse[204];
/**
 * @description
 *   Conceal a user's membership
 * @tags organization
 * @produces application/json
 */
export const orgConcealMember = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/orgs/:org/public_members/:username";
  function request(
    option: OrgConcealMemberOption & RequestParameters
  ): Promise<OrgConcealMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgConcealMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListRepos */
export interface OrgListReposOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgListRepos */
export interface OrgListReposOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListRepos */
export interface OrgListReposResponse {
  200: RepositoryList;
}

export type OrgListReposResponseSuccess = OrgListReposResponse[200];
/**
 * @description
 *   List an organization's repos
 * @tags organization
 * @produces application/json
 */
export const orgListRepos = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/repos";
  function request(
    option: OrgListReposOption & RequestParameters
  ): Promise<OrgListReposResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListReposResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for createOrgRepo */
export interface CreateOrgRepoOption {
  /**
   * @description
   *   name of organization
   */
  path: {
    /**
        @description
          name of organization */
    org: string;
  };
}

/** @description request parameter type for createOrgRepo */
export interface CreateOrgRepoOption {
  body?: CreateRepoOption;
}

/** @description response type for createOrgRepo */
export interface CreateOrgRepoResponse {
  201: Repository;
  403: Forbidden;
  404: NotFound;
}

export type CreateOrgRepoResponseSuccess = CreateOrgRepoResponse[201];
/**
 * @description
 *   Create a repository in an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const createOrgRepo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/orgs/:org/repos";
  function request(
    option: CreateOrgRepoOption & RequestParameters
  ): Promise<CreateOrgRepoResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<CreateOrgRepoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListTeams */
export interface OrgListTeamsOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgListTeams */
export interface OrgListTeamsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListTeams */
export interface OrgListTeamsResponse {
  200: TeamList;
}

export type OrgListTeamsResponseSuccess = OrgListTeamsResponse[200];
/**
 * @description
 *   List an organization's teams
 * @tags organization
 * @produces application/json
 */
export const orgListTeams = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/teams";
  function request(
    option: OrgListTeamsOption & RequestParameters
  ): Promise<OrgListTeamsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListTeamsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgCreateTeam */
export interface OrgCreateTeamOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for orgCreateTeam */
export interface OrgCreateTeamOption {
  body?: CreateTeamOption;
}

/** @description response type for orgCreateTeam */
export interface OrgCreateTeamResponse {
  201: Team;
  422: ValidationError;
}

export type OrgCreateTeamResponseSuccess = OrgCreateTeamResponse[201];
/**
 * @description
 *   Create a team
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgCreateTeam = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/orgs/:org/teams";
  function request(
    option: OrgCreateTeamOption & RequestParameters
  ): Promise<OrgCreateTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgCreateTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for teamSearch */
export interface TeamSearchOption {
  /**
   * @description
   *   name of the organization
   */
  path: {
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description request parameter type for teamSearch */
export interface TeamSearchOption {
  /**
   * @description
   *   keywords to search
   */
  query?: {
    /**
        @description
          keywords to search */
    q?: string;
    /**
        @description
          include search within team description (defaults to true) */
    include_desc?: boolean;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for teamSearch */
export interface TeamSearchResponse {
  /**
   * @description
   *   SearchResults of a successful search
   */
  200: {
    data?: Array<Team>;
    ok?: boolean;
  };
}

export type TeamSearchResponseSuccess = TeamSearchResponse[200];
/**
 * @description
 *   Search for teams within an organization
 * @tags organization
 * @produces application/json
 */
export const teamSearch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/orgs/:org/teams/search";
  function request(
    option: TeamSearchOption & RequestParameters
  ): Promise<TeamSearchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<TeamSearchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueSearchIssues */
export interface IssueSearchIssuesOption {
  /**
   * @description
   *   whether issue is open or closed
   */
  query?: {
    /**
        @description
          whether issue is open or closed */
    state?: string;
    /**
        @description
          comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
    labels?: string;
    /**
        @description
          comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded */
    milestones?: string;
    /**
        @description
          search string */
    q?: string;
    /**
        @description
          repository to prioritize in the results
        @format int64 */
    priority_repo_id?: number;
    /**
        @description
          filter by type (issues / pulls) if set */
    type?: string;
    /**
        @description
          Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
    /**
        @description
          filter (issues / pulls) assigned to you, default is false */
    assigned?: boolean;
    /**
        @description
          filter (issues / pulls) created by you, default is false */
    created?: boolean;
    /**
        @description
          filter (issues / pulls) mentioning you, default is false */
    mentioned?: boolean;
    /**
        @description
          filter pulls requesting your review, default is false */
    review_requested?: boolean;
    /**
        @description
          filter by owner */
    owner?: string;
    /**
        @description
          filter by team (requires organization owner parameter to be provided) */
    team?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueSearchIssues */
export interface IssueSearchIssuesResponse {
  200: IssueList;
}

export type IssueSearchIssuesResponseSuccess = IssueSearchIssuesResponse[200];
/**
 * @description
 *   Search for issues across the repositories that the user has access to
 * @tags issue
 * @produces application/json
 */
export const issueSearchIssues = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/issues/search";
  function request(
    option?: IssueSearchIssuesOption & RequestParameters
  ): Promise<IssueSearchIssuesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueSearchIssuesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoMigrate */
export interface RepoMigrateOption {
  body?: MigrateRepoOptions;
}

/** @description response type for repoMigrate */
export interface RepoMigrateResponse {
  201: Repository;
  403: Forbidden;
  422: ValidationError;
}

export type RepoMigrateResponseSuccess = RepoMigrateResponse[201];
/**
 * @description
 *   Migrate a remote git repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoMigrate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/migrate";
  function request(
    option?: RepoMigrateOption & RequestParameters
  ): Promise<RepoMigrateResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoMigrateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoSearch */
export interface RepoSearchOption {
  /**
   * @description
   *   keyword
   */
  query?: {
    /**
        @description
          keyword */
    q?: string;
    /**
        @description
          Limit search to repositories with keyword as topic */
    topic?: boolean;
    /**
        @description
          include search of keyword within repository description (defaults to false) */
    includeDesc?: boolean;
    /**
        @description
          search only for repos that the user with the given id owns or contributes to
        @format int64 */
    uid?: number;
    /**
        @description
          repo owner to prioritize in the results
        @format int64 */
    priority_owner_id?: number;
    /**
        @description
          search only for repos that belong to the given team id
        @format int64 */
    team_id?: number;
    /**
        @description
          search only for repos that the user with the given id has starred
        @format int64 */
    starredBy?: number;
    /**
        @description
          include private repositories this user has access to (defaults to true) */
    private?: boolean;
    /**
        @description
          show only pubic, private or all repositories (defaults to all) */
    is_private?: boolean;
    /**
        @description
          include template repositories this user has access to (defaults to true) */
    template?: boolean;
    /**
        @description
          show only archived, non-archived or all repositories (defaults to all) */
    archived?: boolean;
    /**
        @description
          type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative" */
    mode?: string;
    /**
        @description
          if `uid` is given, search only for repos that the user owns */
    exclusive?: boolean;
    /**
        @description
          name of the repo. Multiple repo's are ORed. */
    repo?: string;
    /**
        @description
          owner of the repo. Multiple owner's are ORed. */
    owner?: string;
    /**
        @description
          If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang's are ORed. */
    lang?: string;
    /**
        @description
          resource subject. Multiple subject's are ORed. */
    subject?: string;
    /**
        @description
          book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book's are ORed. */
    book?: string;
    /**
        @description
          if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false) */
    includeMetadata?: boolean;
    /**
        @description
          sort repos by attribute. Supported values are "alpha", "created", "updated", "size", and "id". Default is "alpha" */
    sort?: string;
    /**
        @description
          sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified. */
    order?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoSearch */
export interface RepoSearchResponse {
  200: SearchResults;
  422: ValidationError;
}

export type RepoSearchResponseSuccess = RepoSearchResponse[200];
/**
 * @description
 *   Search for repositories
 * @tags repository
 * @produces application/json
 */
export const repoSearch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/search";
  function request(
    option?: RepoSearchOption & RequestParameters
  ): Promise<RepoSearchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoSearchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGet */
export interface RepoGetOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoGet */
export interface RepoGetResponse {
  200: Repository;
}

export type RepoGetResponseSuccess = RepoGetResponse[200];
/**
 * @description
 *   Get a repository
 * @tags repository
 * @produces application/json
 */
export const repoGet = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo";
  function request(
    option: RepoGetOption & RequestParameters
  ): Promise<RepoGetResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDelete */
export interface RepoDeleteOption {
  /**
   * @description
   *   owner of the repo to delete
   */
  path: {
    /**
        @description
          owner of the repo to delete */
    owner: string;
    /**
        @description
          name of the repo to delete */
    repo: string;
  };
}

/** @description response type for repoDelete */
export interface RepoDeleteResponse {
  204: Empty;
  403: Forbidden;
}

export type RepoDeleteResponseSuccess = RepoDeleteResponse[204];
/**
 * @description
 *   Delete a repository
 * @tags repository
 * @produces application/json
 */
export const repoDelete = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo";
  function request(
    option: RepoDeleteOption & RequestParameters
  ): Promise<RepoDeleteResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEdit */
export interface RepoEditOption {
  /**
   * @description
   *   owner of the repo to edit
   */
  path: {
    /**
        @description
          owner of the repo to edit */
    owner: string;
    /**
        @description
          name of the repo to edit */
    repo: string;
  };
}

/** @description request parameter type for repoEdit */
export interface RepoEditOption {
  /**
   * @description
   *   Properties of a repo that you can edit
   */
  body?: EditRepoOption;
}

/** @description response type for repoEdit */
export interface RepoEditResponse {
  200: Repository;
  403: Forbidden;
  422: ValidationError;
}

export type RepoEditResponseSuccess = RepoEditResponse[200];
/**
 * @description
 *   Edit a repository's properties. Only fields that are set will be changed.
 * @tags repository
 * @produces application/json
 */
export const repoEdit = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo";
  function request(
    option: RepoEditOption & RequestParameters
  ): Promise<RepoEditResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetArchive */
export interface RepoGetArchiveOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          the git reference for download with attached archive format (e.g. master.zip) */
    archive: string;
  };
}

/** @description response type for repoGetArchive */
export interface RepoGetArchiveResponse {
  /**
   * @description
   *   success
   */
  200: any;
  404: NotFound;
}

export type RepoGetArchiveResponseSuccess = RepoGetArchiveResponse[200];
/**
 * @description
 *   Get an archive of a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetArchive = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/archive/:archive";
  function request(
    option: RepoGetArchiveOption & RequestParameters
  ): Promise<RepoGetArchiveResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetArchiveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetAssignees */
export interface RepoGetAssigneesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoGetAssignees */
export interface RepoGetAssigneesResponse {
  200: UserList;
}

export type RepoGetAssigneesResponseSuccess = RepoGetAssigneesResponse[200];
/**
 * @description
 *   Return all users that have write access and can be assigned to issues
 * @tags repository
 * @produces application/json
 */
export const repoGetAssignees = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/assignees";
  function request(
    option: RepoGetAssigneesOption & RequestParameters
  ): Promise<RepoGetAssigneesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetAssigneesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListBranchProtection */
export interface RepoListBranchProtectionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoListBranchProtection */
export interface RepoListBranchProtectionResponse {
  200: BranchProtectionList;
}

export type RepoListBranchProtectionResponseSuccess =
  RepoListBranchProtectionResponse[200];
/**
 * @description
 *   List branch protections for a repository
 * @tags repository
 * @produces application/json
 */
export const repoListBranchProtection = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/branch_protections";
  function request(
    option: RepoListBranchProtectionOption & RequestParameters
  ): Promise<RepoListBranchProtectionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListBranchProtectionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateBranchProtection */
export interface RepoCreateBranchProtectionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateBranchProtection */
export interface RepoCreateBranchProtectionOption {
  body?: CreateBranchProtectionOption;
}

/** @description response type for repoCreateBranchProtection */
export interface RepoCreateBranchProtectionResponse {
  201: BranchProtection;
  403: Forbidden;
  404: NotFound;
  422: ValidationError;
}

export type RepoCreateBranchProtectionResponseSuccess =
  RepoCreateBranchProtectionResponse[201];
/**
 * @description
 *   Create a branch protections for a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreateBranchProtection = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/branch_protections";
  function request(
    option: RepoCreateBranchProtectionOption & RequestParameters
  ): Promise<RepoCreateBranchProtectionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateBranchProtectionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetBranchProtection */
export interface RepoGetBranchProtectionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of protected branch */
    name: string;
  };
}

/** @description response type for repoGetBranchProtection */
export interface RepoGetBranchProtectionResponse {
  200: BranchProtection;
  404: NotFound;
}

export type RepoGetBranchProtectionResponseSuccess =
  RepoGetBranchProtectionResponse[200];
/**
 * @description
 *   Get a specific branch protection for the repository
 * @tags repository
 * @produces application/json
 */
export const repoGetBranchProtection = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/branch_protections/:name";
  function request(
    option: RepoGetBranchProtectionOption & RequestParameters
  ): Promise<RepoGetBranchProtectionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetBranchProtectionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteBranchProtection */
export interface RepoDeleteBranchProtectionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of protected branch */
    name: string;
  };
}

/** @description response type for repoDeleteBranchProtection */
export interface RepoDeleteBranchProtectionResponse {
  204: Empty;
  404: NotFound;
}

export type RepoDeleteBranchProtectionResponseSuccess =
  RepoDeleteBranchProtectionResponse[204];
/**
 * @description
 *   Delete a specific branch protection for the repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteBranchProtection = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/branch_protections/:name";
  function request(
    option: RepoDeleteBranchProtectionOption & RequestParameters
  ): Promise<RepoDeleteBranchProtectionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteBranchProtectionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditBranchProtection */
export interface RepoEditBranchProtectionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of protected branch */
    name: string;
  };
}

/** @description request parameter type for repoEditBranchProtection */
export interface RepoEditBranchProtectionOption {
  body?: EditBranchProtectionOption;
}

/** @description response type for repoEditBranchProtection */
export interface RepoEditBranchProtectionResponse {
  200: BranchProtection;
  404: NotFound;
  422: ValidationError;
}

export type RepoEditBranchProtectionResponseSuccess =
  RepoEditBranchProtectionResponse[200];
/**
 * @description
 *   Edit a branch protections for a repository. Only fields that are set will be changed
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoEditBranchProtection = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/branch_protections/:name";
  function request(
    option: RepoEditBranchProtectionOption & RequestParameters
  ): Promise<RepoEditBranchProtectionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditBranchProtectionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListBranches */
export interface RepoListBranchesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListBranches */
export interface RepoListBranchesOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListBranches */
export interface RepoListBranchesResponse {
  200: BranchList;
}

export type RepoListBranchesResponseSuccess = RepoListBranchesResponse[200];
/**
 * @description
 *   List a repository's branches
 * @tags repository
 * @produces application/json
 */
export const repoListBranches = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/branches";
  function request(
    option: RepoListBranchesOption & RequestParameters
  ): Promise<RepoListBranchesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListBranchesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateBranch */
export interface RepoCreateBranchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateBranch */
export interface RepoCreateBranchOption {
  body?: CreateBranchRepoOption;
}

/** @description response type for repoCreateBranch */
export interface RepoCreateBranchResponse {
  201: Branch;
  /**
   * @description
   *   The old branch does not exist.
   */
  404: any;
  /**
   * @description
   *   The branch with the same name already exists.
   */
  409: any;
}

export type RepoCreateBranchResponseSuccess = RepoCreateBranchResponse[201];
/**
 * @description
 *   Create a branch
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreateBranch = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/branches";
  function request(
    option: RepoCreateBranchOption & RequestParameters
  ): Promise<RepoCreateBranchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateBranchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetBranch */
export interface RepoGetBranchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          branch to get */
    branch: string;
  };
}

/** @description response type for repoGetBranch */
export interface RepoGetBranchResponse {
  200: Branch;
  404: NotFound;
}

export type RepoGetBranchResponseSuccess = RepoGetBranchResponse[200];
/**
 * @description
 *   Retrieve a specific branch from a repository, including its effective branch protection
 * @tags repository
 * @produces application/json
 */
export const repoGetBranch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/branches/:branch";
  function request(
    option: RepoGetBranchOption & RequestParameters
  ): Promise<RepoGetBranchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetBranchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteBranch */
export interface RepoDeleteBranchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          branch to delete */
    branch: string;
  };
}

/** @description response type for repoDeleteBranch */
export interface RepoDeleteBranchResponse {
  204: Empty;
  403: TsgError;
  404: NotFound;
}

export type RepoDeleteBranchResponseSuccess = RepoDeleteBranchResponse[204];
/**
 * @description
 *   Delete a specific branch from a repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteBranch = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/branches/:branch";
  function request(
    option: RepoDeleteBranchOption & RequestParameters
  ): Promise<RepoDeleteBranchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteBranchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListCollaborators */
export interface RepoListCollaboratorsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListCollaborators */
export interface RepoListCollaboratorsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListCollaborators */
export interface RepoListCollaboratorsResponse {
  200: UserList;
}

export type RepoListCollaboratorsResponseSuccess =
  RepoListCollaboratorsResponse[200];
/**
 * @description
 *   List a repository's collaborators
 * @tags repository
 * @produces application/json
 */
export const repoListCollaborators = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/collaborators";
  function request(
    option: RepoListCollaboratorsOption & RequestParameters
  ): Promise<RepoListCollaboratorsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListCollaboratorsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCheckCollaborator */
export interface RepoCheckCollaboratorOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          username of the collaborator */
    collaborator: string;
  };
}

/** @description response type for repoCheckCollaborator */
export interface RepoCheckCollaboratorResponse {
  204: Empty;
  404: NotFound;
  422: ValidationError;
}

export type RepoCheckCollaboratorResponseSuccess =
  RepoCheckCollaboratorResponse[204];
/**
 * @description
 *   Check if a user is a collaborator of a repository
 * @tags repository
 * @produces application/json
 */
export const repoCheckCollaborator = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/collaborators/:collaborator";
  function request(
    option: RepoCheckCollaboratorOption & RequestParameters
  ): Promise<RepoCheckCollaboratorResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCheckCollaboratorResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoAddCollaborator */
export interface RepoAddCollaboratorOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          username of the collaborator to add */
    collaborator: string;
  };
}

/** @description request parameter type for repoAddCollaborator */
export interface RepoAddCollaboratorOption {
  body?: AddCollaboratorOption;
}

/** @description response type for repoAddCollaborator */
export interface RepoAddCollaboratorResponse {
  204: Empty;
  422: ValidationError;
}

export type RepoAddCollaboratorResponseSuccess =
  RepoAddCollaboratorResponse[204];
/**
 * @description
 *   Add a collaborator to a repository
 * @tags repository
 * @produces application/json
 */
export const repoAddCollaborator = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/collaborators/:collaborator";
  function request(
    option: RepoAddCollaboratorOption & RequestParameters
  ): Promise<RepoAddCollaboratorResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoAddCollaboratorResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteCollaborator */
export interface RepoDeleteCollaboratorOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          username of the collaborator to delete */
    collaborator: string;
  };
}

/** @description response type for repoDeleteCollaborator */
export interface RepoDeleteCollaboratorResponse {
  204: Empty;
  422: ValidationError;
}

export type RepoDeleteCollaboratorResponseSuccess =
  RepoDeleteCollaboratorResponse[204];
/**
 * @description
 *   Delete a collaborator from a repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteCollaborator = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/collaborators/:collaborator";
  function request(
    option: RepoDeleteCollaboratorOption & RequestParameters
  ): Promise<RepoDeleteCollaboratorResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteCollaboratorResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetAllCommits */
export interface RepoGetAllCommitsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoGetAllCommits */
export interface RepoGetAllCommitsOption {
  /**
   * @description
   *   SHA or branch to start listing commits from (usually 'master')
   */
  query?: {
    /**
        @description
          SHA or branch to start listing commits from (usually 'master') */
    sha?: string;
    /**
        @description
          filepath of a file/dir */
    path?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results (ignored if used with 'path') */
    limit?: number;
  };
}

/** @description response type for repoGetAllCommits */
export interface RepoGetAllCommitsResponse {
  200: CommitList;
  404: NotFound;
  409: EmptyRepository;
}

export type RepoGetAllCommitsResponseSuccess = RepoGetAllCommitsResponse[200];
/**
 * @description
 *   Get a list of all commits from a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetAllCommits = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/commits";
  function request(
    option: RepoGetAllCommitsOption & RequestParameters
  ): Promise<RepoGetAllCommitsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetAllCommitsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetCombinedStatusByRef */
export interface RepoGetCombinedStatusByRefOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of branch/tag/commit */
    ref: string;
  };
}

/** @description request parameter type for repoGetCombinedStatusByRef */
export interface RepoGetCombinedStatusByRefOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoGetCombinedStatusByRef */
export interface RepoGetCombinedStatusByRefResponse {
  200: CombinedStatus;
  400: TsgError;
}

export type RepoGetCombinedStatusByRefResponseSuccess =
  RepoGetCombinedStatusByRefResponse[200];
/**
 * @description
 *   Get a commit's combined status, by branch/tag/commit reference
 * @tags repository
 * @produces application/json
 */
export const repoGetCombinedStatusByRef = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/commits/:ref/status";
  function request(
    option: RepoGetCombinedStatusByRefOption & RequestParameters
  ): Promise<RepoGetCombinedStatusByRefResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetCombinedStatusByRefResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListStatusesByRef */
export interface RepoListStatusesByRefOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of branch/tag/commit */
    ref: string;
  };
}

/** @description request parameter type for repoListStatusesByRef */
export interface RepoListStatusesByRefOption {
  /**
   * @description
   *   type of sort
   */
  query?: {
    /**
        @description
          type of sort */
    sort?: GetReposOwnerRepoCommitsRefStatusesSort;
    /**
        @description
          type of state */
    state?: GetReposOwnerRepoCommitsRefStatusesState;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListStatusesByRef */
export interface RepoListStatusesByRefResponse {
  200: CommitStatusList;
  400: TsgError;
}

export type RepoListStatusesByRefResponseSuccess =
  RepoListStatusesByRefResponse[200];
/**
 * @description
 *   Get a commit's statuses, by branch/tag/commit reference
 * @tags repository
 * @produces application/json
 */
export const repoListStatusesByRef = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/commits/:ref/statuses";
  function request(
    option: RepoListStatusesByRefOption & RequestParameters
  ): Promise<RepoListStatusesByRefResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListStatusesByRefResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetContentsList */
export interface RepoGetContentsListOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoGetContentsList */
export interface RepoGetContentsListOption {
  /**
   * @description
   *   The name of the commit/branch/tag. Default the repository’s default branch (usually master)
   */
  query?: {
    /**
        @description
          The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
    ref?: string;
  };
}

/** @description response type for repoGetContentsList */
export interface RepoGetContentsListResponse {
  200: ContentsListResponse;
  404: NotFound;
}

export type RepoGetContentsListResponseSuccess =
  RepoGetContentsListResponse[200];
/**
 * @description
 *   Gets the metadata of all the entries of the root dir
 * @tags repository
 * @produces application/json
 */
export const repoGetContentsList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/contents";
  function request(
    option: RepoGetContentsListOption & RequestParameters
  ): Promise<RepoGetContentsListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetContentsListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetContents */
export interface RepoGetContentsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          path of the dir, file, symlink or submodule in the repo */
    filepath: string;
  };
}

/** @description request parameter type for repoGetContents */
export interface RepoGetContentsOption {
  /**
   * @description
   *   The name of the commit/branch/tag. Default the repository’s default branch (usually master)
   */
  query?: {
    /**
        @description
          The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
    ref?: string;
  };
}

/** @description response type for repoGetContents */
export interface RepoGetContentsResponse {
  200: ContentsResponse;
  404: NotFound;
}

export type RepoGetContentsResponseSuccess = RepoGetContentsResponse[200];
/**
 * @description
 *   Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
 * @tags repository
 * @produces application/json
 */
export const repoGetContents = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/contents/:filepath";
  function request(
    option: RepoGetContentsOption & RequestParameters
  ): Promise<RepoGetContentsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetContentsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoUpdateFile */
export interface RepoUpdateFileOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          path of the file to update */
    filepath: string;
  };
}

/** @description request parameter type for repoUpdateFile */
export interface RepoUpdateFileOption {
  body: UpdateFileOptions;
}

/** @description response type for repoUpdateFile */
export interface RepoUpdateFileResponse {
  200: FileResponse;
  403: TsgError;
  404: NotFound;
  422: TsgError;
}

export type RepoUpdateFileResponseSuccess = RepoUpdateFileResponse[200];
/**
 * @description
 *   Update a file in a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoUpdateFile = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/contents/:filepath";
  function request(
    option: RepoUpdateFileOption & RequestParameters
  ): Promise<RepoUpdateFileResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoUpdateFileResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateFile */
export interface RepoCreateFileOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          path of the file to create */
    filepath: string;
  };
}

/** @description request parameter type for repoCreateFile */
export interface RepoCreateFileOption {
  body: CreateFileOptions;
}

/** @description response type for repoCreateFile */
export interface RepoCreateFileResponse {
  201: FileResponse;
  403: TsgError;
  404: NotFound;
  422: TsgError;
}

export type RepoCreateFileResponseSuccess = RepoCreateFileResponse[201];
/**
 * @description
 *   Create a file in a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreateFile = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/contents/:filepath";
  function request(
    option: RepoCreateFileOption & RequestParameters
  ): Promise<RepoCreateFileResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateFileResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteFile */
export interface RepoDeleteFileOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          path of the file to delete */
    filepath: string;
  };
}

/** @description request parameter type for repoDeleteFile */
export interface RepoDeleteFileOption {
  body: DeleteFileOptions;
}

/** @description response type for repoDeleteFile */
export interface RepoDeleteFileResponse {
  200: FileDeleteResponse;
  400: TsgError;
  403: TsgError;
  404: TsgError;
}

export type RepoDeleteFileResponseSuccess = RepoDeleteFileResponse[200];
/**
 * @description
 *   Delete a file in a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoDeleteFile = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/contents/:filepath";
  function request(
    option: RepoDeleteFileOption & RequestParameters
  ): Promise<RepoDeleteFileResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteFileResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetEditorConfig */
export interface RepoGetEditorConfigOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          filepath of file to get */
    filepath: string;
  };
}

/** @description response type for repoGetEditorConfig */
export interface RepoGetEditorConfigResponse {
  /**
   * @description
   *   success
   */
  200: any;
  404: NotFound;
}

export type RepoGetEditorConfigResponseSuccess =
  RepoGetEditorConfigResponse[200];
/**
 * @description
 *   Get the EditorConfig definitions of a file in a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetEditorConfig = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/editorconfig/:filepath";
  function request(
    option: RepoGetEditorConfigOption & RequestParameters
  ): Promise<RepoGetEditorConfigResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetEditorConfigResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for listForks */
export interface ListForksOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for listForks */
export interface ListForksOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for listForks */
export interface ListForksResponse {
  200: RepositoryList;
}

export type ListForksResponseSuccess = ListForksResponse[200];
/**
 * @description
 *   List a repository's forks
 * @tags repository
 * @produces application/json
 */
export const listForks = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/forks";
  function request(
    option: ListForksOption & RequestParameters
  ): Promise<ListForksResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<ListForksResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateFork */
export interface RepoCreateForkOption {
  /**
   * @description
   *   owner of the repo to fork
   */
  path: {
    /**
        @description
          owner of the repo to fork */
    owner: string;
    /**
        @description
          name of the repo to fork */
    repo: string;
  };
}

/** @description request parameter type for repoCreateFork */
export interface RepoCreateForkOption {
  body?: CreateForkOption;
}

/** @description response type for repoCreateFork */
export interface RepoCreateForkResponse {
  202: Repository;
  403: Forbidden;
  /**
   * @description
   *   The repository with the same name already exists.
   */
  409: any;
  422: ValidationError;
}

export type RepoCreateForkResponseSuccess = RepoCreateForkResponse[202];
/**
 * @description
 *   Fork a repository
 * @tags repository
 * @produces application/json
 */
export const repoCreateFork = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/forks";
  function request(
    option: RepoCreateForkOption & RequestParameters
  ): Promise<RepoCreateForkResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateForkResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for GetBlob */
export interface GetBlobOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          sha of the commit */
    sha: string;
  };
}

/** @description response type for GetBlob */
export interface GetBlobResponse {
  200: GitBlobResponse;
  400: TsgError;
}

export type GetBlobResponseSuccess = GetBlobResponse[200];
/**
 * @description
 *   Gets the blob of a repository.
 * @tags repository
 * @produces application/json
 */
export const GetBlob = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/blobs/:sha";
  function request(
    option: GetBlobOption & RequestParameters
  ): Promise<GetBlobResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetBlobResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetSingleCommit */
export interface RepoGetSingleCommitOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          a git ref or commit sha */
    sha: string;
  };
}

/** @description response type for repoGetSingleCommit */
export interface RepoGetSingleCommitResponse {
  200: Commit;
  404: NotFound;
  422: ValidationError;
}

export type RepoGetSingleCommitResponseSuccess =
  RepoGetSingleCommitResponse[200];
/**
 * @description
 *   Get a single commit from a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetSingleCommit = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/commits/:sha";
  function request(
    option: RepoGetSingleCommitOption & RequestParameters
  ): Promise<RepoGetSingleCommitResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetSingleCommitResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDownloadCommitDiffOrPatch */
export interface RepoDownloadCommitDiffOrPatchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          SHA of the commit to get */
    sha: string;
    /**
        @description
          whether the output is diff or patch */
    diffType: GetReposOwnerRepoGitCommitsShaDiffTypeDiffType;
  };
}

/** @description response type for repoDownloadCommitDiffOrPatch */
export interface RepoDownloadCommitDiffOrPatchResponse {
  200: TsgString;
  404: NotFound;
}

export type RepoDownloadCommitDiffOrPatchResponseSuccess =
  RepoDownloadCommitDiffOrPatchResponse[200];
/**
 * @description
 *   Get a commit's diff or patch
 * @tags repository
 * @produces text/plain
 */
export const repoDownloadCommitDiffOrPatch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/commits/:sha.diffType";
  function request(
    option: RepoDownloadCommitDiffOrPatchOption & RequestParameters
  ): Promise<RepoDownloadCommitDiffOrPatchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDownloadCommitDiffOrPatchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetNote */
export interface RepoGetNoteOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          a git ref or commit sha */
    sha: string;
  };
}

/** @description response type for repoGetNote */
export interface RepoGetNoteResponse {
  200: Note;
  404: NotFound;
  422: ValidationError;
}

export type RepoGetNoteResponseSuccess = RepoGetNoteResponse[200];
/**
 * @description
 *   Get a note corresponding to a single commit from a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetNote = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/notes/:sha";
  function request(
    option: RepoGetNoteOption & RequestParameters
  ): Promise<RepoGetNoteResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetNoteResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListAllGitRefs */
export interface RepoListAllGitRefsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoListAllGitRefs */
export interface RepoListAllGitRefsResponse {
  200: ReferenceList;
  404: NotFound;
}

export type RepoListAllGitRefsResponseSuccess = RepoListAllGitRefsResponse[200];
/**
 * @description
 *   Get specified ref or filtered repository's refs
 * @tags repository
 * @produces application/json
 */
export const repoListAllGitRefs = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/refs";
  function request(
    option: RepoListAllGitRefsOption & RequestParameters
  ): Promise<RepoListAllGitRefsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListAllGitRefsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListGitRefs */
export interface RepoListGitRefsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          part or full name of the ref */
    ref: string;
  };
}

/** @description response type for repoListGitRefs */
export interface RepoListGitRefsResponse {
  200: ReferenceList;
  404: NotFound;
}

export type RepoListGitRefsResponseSuccess = RepoListGitRefsResponse[200];
/**
 * @description
 *   Get specified ref or filtered repository's refs
 * @tags repository
 * @produces application/json
 */
export const repoListGitRefs = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/refs/:ref";
  function request(
    option: RepoListGitRefsOption & RequestParameters
  ): Promise<RepoListGitRefsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListGitRefsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for GetAnnotatedTag */
export interface GetAnnotatedTagOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. */
    sha: string;
  };
}

/** @description response type for GetAnnotatedTag */
export interface GetAnnotatedTagResponse {
  200: AnnotatedTag;
  400: TsgError;
}

export type GetAnnotatedTagResponseSuccess = GetAnnotatedTagResponse[200];
/**
 * @description
 *   Gets the tag object of an annotated tag (not lightweight tags)
 * @tags repository
 * @produces application/json
 */
export const GetAnnotatedTag = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/tags/:sha";
  function request(
    option: GetAnnotatedTagOption & RequestParameters
  ): Promise<GetAnnotatedTagResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetAnnotatedTagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for GetTree */
export interface GetTreeOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          sha of the commit */
    sha: string;
  };
}

/** @description request parameter type for GetTree */
export interface GetTreeOption {
  /**
   * @description
   *   show all directories and files
   */
  query?: {
    /**
        @description
          show all directories and files */
    recursive?: boolean;
    /**
        @description
          page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page */
    page?: number;
    /**
        @description
          number of items per page */
    per_page?: number;
  };
}

/** @description response type for GetTree */
export interface GetTreeResponse {
  200: GitTreeResponse;
  400: TsgError;
}

export type GetTreeResponseSuccess = GetTreeResponse[200];
/**
 * @description
 *   Gets the tree of a repository.
 * @tags repository
 * @produces application/json
 */
export const GetTree = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/git/trees/:sha";
  function request(
    option: GetTreeOption & RequestParameters
  ): Promise<GetTreeResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetTreeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListHooks */
export interface RepoListHooksOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListHooks */
export interface RepoListHooksOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListHooks */
export interface RepoListHooksResponse {
  200: HookList;
}

export type RepoListHooksResponseSuccess = RepoListHooksResponse[200];
/**
 * @description
 *   List the hooks in a repository
 * @tags repository
 * @produces application/json
 */
export const repoListHooks = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/hooks";
  function request(
    option: RepoListHooksOption & RequestParameters
  ): Promise<RepoListHooksResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListHooksResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateHook */
export interface RepoCreateHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateHook */
export interface RepoCreateHookOption {
  body?: CreateHookOption;
}

/** @description response type for repoCreateHook */
export interface RepoCreateHookResponse {
  201: Hook;
}

export type RepoCreateHookResponseSuccess = RepoCreateHookResponse[201];
/**
 * @description
 *   Create a hook
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreateHook = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/hooks";
  function request(
    option: RepoCreateHookOption & RequestParameters
  ): Promise<RepoCreateHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListGitHooks */
export interface RepoListGitHooksOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoListGitHooks */
export interface RepoListGitHooksResponse {
  200: GitHookList;
}

export type RepoListGitHooksResponseSuccess = RepoListGitHooksResponse[200];
/**
 * @description
 *   List the Git hooks in a repository
 * @tags repository
 * @produces application/json
 */
export const repoListGitHooks = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/hooks/git";
  function request(
    option: RepoListGitHooksOption & RequestParameters
  ): Promise<RepoListGitHooksResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListGitHooksResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetGitHook */
export interface RepoGetGitHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the hook to get */
    id: string;
  };
}

/** @description response type for repoGetGitHook */
export interface RepoGetGitHookResponse {
  200: GitHook;
  404: NotFound;
}

export type RepoGetGitHookResponseSuccess = RepoGetGitHookResponse[200];
/**
 * @description
 *   Get a Git hook
 * @tags repository
 * @produces application/json
 */
export const repoGetGitHook = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/hooks/git/:id";
  function request(
    option: RepoGetGitHookOption & RequestParameters
  ): Promise<RepoGetGitHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetGitHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteGitHook */
export interface RepoDeleteGitHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the hook to get */
    id: string;
  };
}

/** @description response type for repoDeleteGitHook */
export interface RepoDeleteGitHookResponse {
  204: Empty;
  404: NotFound;
}

export type RepoDeleteGitHookResponseSuccess = RepoDeleteGitHookResponse[204];
/**
 * @description
 *   Delete a Git hook in a repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteGitHook = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/hooks/git/:id";
  function request(
    option: RepoDeleteGitHookOption & RequestParameters
  ): Promise<RepoDeleteGitHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteGitHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditGitHook */
export interface RepoEditGitHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the hook to get */
    id: string;
  };
}

/** @description request parameter type for repoEditGitHook */
export interface RepoEditGitHookOption {
  body?: EditGitHookOption;
}

/** @description response type for repoEditGitHook */
export interface RepoEditGitHookResponse {
  200: GitHook;
  404: NotFound;
}

export type RepoEditGitHookResponseSuccess = RepoEditGitHookResponse[200];
/**
 * @description
 *   Edit a Git hook in a repository
 * @tags repository
 * @produces application/json
 */
export const repoEditGitHook = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/hooks/git/:id";
  function request(
    option: RepoEditGitHookOption & RequestParameters
  ): Promise<RepoEditGitHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditGitHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetHook */
export interface RepoGetHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the hook to get
        @format int64 */
    id: number;
  };
}

/** @description response type for repoGetHook */
export interface RepoGetHookResponse {
  200: Hook;
  404: NotFound;
}

export type RepoGetHookResponseSuccess = RepoGetHookResponse[200];
/**
 * @description
 *   Get a hook
 * @tags repository
 * @produces application/json
 */
export const repoGetHook = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/hooks/:id";
  function request(
    option: RepoGetHookOption & RequestParameters
  ): Promise<RepoGetHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteHook */
export interface RepoDeleteHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the hook to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for repoDeleteHook */
export interface RepoDeleteHookResponse {
  204: Empty;
  404: NotFound;
}

export type RepoDeleteHookResponseSuccess = RepoDeleteHookResponse[204];
/**
 * @description
 *   Delete a hook in a repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteHook = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/hooks/:id";
  function request(
    option: RepoDeleteHookOption & RequestParameters
  ): Promise<RepoDeleteHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditHook */
export interface RepoEditHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the hook
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for repoEditHook */
export interface RepoEditHookOption {
  body?: EditHookOption;
}

/** @description response type for repoEditHook */
export interface RepoEditHookResponse {
  200: Hook;
}

export type RepoEditHookResponseSuccess = RepoEditHookResponse[200];
/**
 * @description
 *   Edit a hook in a repository
 * @tags repository
 * @produces application/json
 */
export const repoEditHook = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/hooks/:id";
  function request(
    option: RepoEditHookOption & RequestParameters
  ): Promise<RepoEditHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoTestHook */
export interface RepoTestHookOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the hook to test
        @format int64 */
    id: number;
  };
}

/** @description response type for repoTestHook */
export interface RepoTestHookResponse {
  204: Empty;
}

export type RepoTestHookResponseSuccess = RepoTestHookResponse[204];
/**
 * @description
 *   Test a push webhook
 * @tags repository
 * @produces application/json
 */
export const repoTestHook = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/hooks/:id/tests";
  function request(
    option: RepoTestHookOption & RequestParameters
  ): Promise<RepoTestHookResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoTestHookResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetIssueTemplates */
export interface RepoGetIssueTemplatesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoGetIssueTemplates */
export interface RepoGetIssueTemplatesResponse {
  200: IssueTemplates;
}

export type RepoGetIssueTemplatesResponseSuccess =
  RepoGetIssueTemplatesResponse[200];
/**
 * @description
 *   Get available issue templates for a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetIssueTemplates = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issue_templates";
  function request(
    option: RepoGetIssueTemplatesOption & RequestParameters
  ): Promise<RepoGetIssueTemplatesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetIssueTemplatesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueListIssues */
export interface IssueListIssuesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueListIssues */
export interface IssueListIssuesOption {
  /**
   * @description
   *   whether issue is open or closed
   */
  query?: {
    /**
        @description
          whether issue is open or closed */
    state?: GetReposOwnerRepoIssuesState;
    /**
        @description
          comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded */
    labels?: string;
    /**
        @description
          search string */
    q?: string;
    /**
        @description
          filter by type (issues / pulls) if set */
    type?: GetReposOwnerRepoIssuesType;
    /**
        @description
          comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded */
    milestones?: string;
    /**
        @description
          Only show items updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show items updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
    /**
        @description
          Only show items which were created by the the given user */
    created_by?: string;
    /**
        @description
          Only show items for which the given user is assigned */
    assigned_by?: string;
    /**
        @description
          Only show items in which the given user was mentioned */
    mentioned_by?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueListIssues */
export interface IssueListIssuesResponse {
  200: IssueList;
}

export type IssueListIssuesResponseSuccess = IssueListIssuesResponse[200];
/**
 * @description
 *   List a repository's issues
 * @tags issue
 * @produces application/json
 */
export const issueListIssues = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues";
  function request(
    option: IssueListIssuesOption & RequestParameters
  ): Promise<IssueListIssuesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueListIssuesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueCreateIssue */
export interface IssueCreateIssueOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueCreateIssue */
export interface IssueCreateIssueOption {
  body?: CreateIssueOption;
}

/** @description response type for issueCreateIssue */
export interface IssueCreateIssueResponse {
  201: Issue;
  403: Forbidden;
  412: TsgError;
  422: ValidationError;
}

export type IssueCreateIssueResponseSuccess = IssueCreateIssueResponse[201];
/**
 * @description
 *   Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueCreateIssue = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues";
  function request(
    option: IssueCreateIssueOption & RequestParameters
  ): Promise<IssueCreateIssueResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueCreateIssueResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetRepoComments */
export interface IssueGetRepoCommentsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueGetRepoComments */
export interface IssueGetRepoCommentsOption {
  /**
   * @description
   *   if provided, only comments updated since the provided time are returned.
   * @format date-time
   */
  query?: {
    /**
        @description
          if provided, only comments updated since the provided time are returned.
        @format date-time */
    since?: string;
    /**
        @description
          if provided, only comments updated before the provided time are returned.
        @format date-time */
    before?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueGetRepoComments */
export interface IssueGetRepoCommentsResponse {
  200: CommentList;
}

export type IssueGetRepoCommentsResponseSuccess =
  IssueGetRepoCommentsResponse[200];
/**
 * @description
 *   List all comments in a repository
 * @tags issue
 * @produces application/json
 */
export const issueGetRepoComments = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/comments";
  function request(
    option: IssueGetRepoCommentsOption & RequestParameters
  ): Promise<IssueGetRepoCommentsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetRepoCommentsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetComment */
export interface IssueGetCommentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the comment
        @format int64 */
    id: number;
  };
}

/** @description response type for issueGetComment */
export interface IssueGetCommentResponse {
  200: Comment;
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type IssueGetCommentResponseSuccess = IssueGetCommentResponse[200];
/**
 * @description
 *   Get a comment
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueGetComment = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/comments/:id";
  function request(
    option: IssueGetCommentOption & RequestParameters
  ): Promise<IssueGetCommentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetCommentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteComment */
export interface IssueDeleteCommentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of comment to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for issueDeleteComment */
export interface IssueDeleteCommentResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type IssueDeleteCommentResponseSuccess = IssueDeleteCommentResponse[204];
/**
 * @description
 *   Delete a comment
 * @tags issue
 */
export const issueDeleteComment = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/comments/:id";
  function request(
    option: IssueDeleteCommentOption & RequestParameters
  ): Promise<IssueDeleteCommentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteCommentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueEditComment */
export interface IssueEditCommentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the comment to edit
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for issueEditComment */
export interface IssueEditCommentOption {
  body?: EditIssueCommentOption;
}

/** @description response type for issueEditComment */
export interface IssueEditCommentResponse {
  200: Comment;
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type IssueEditCommentResponseSuccess = IssueEditCommentResponse[200];
/**
 * @description
 *   Edit a comment
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueEditComment = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/issues/comments/:id";
  function request(
    option: IssueEditCommentOption & RequestParameters
  ): Promise<IssueEditCommentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueEditCommentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetCommentReactions */
export interface IssueGetCommentReactionsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the comment to edit
        @format int64 */
    id: number;
  };
}

/** @description response type for issueGetCommentReactions */
export interface IssueGetCommentReactionsResponse {
  200: ReactionList;
  403: Forbidden;
}

export type IssueGetCommentReactionsResponseSuccess =
  IssueGetCommentReactionsResponse[200];
/**
 * @description
 *   Get a list of reactions from a comment of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueGetCommentReactions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/comments/:id/reactions";
  function request(
    option: IssueGetCommentReactionsOption & RequestParameters
  ): Promise<IssueGetCommentReactionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetCommentReactionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issuePostCommentReaction */
export interface IssuePostCommentReactionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the comment to edit
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for issuePostCommentReaction */
export interface IssuePostCommentReactionOption {
  body?: {
    content?: EditReactionOption;
  };
}

/** @description response type for issuePostCommentReaction */
export interface IssuePostCommentReactionResponse {
  200: Reaction;
  201: Reaction;
  403: Forbidden;
}

export type IssuePostCommentReactionResponseSuccess =
  IssuePostCommentReactionResponse[200];
/**
 * @description
 *   Add a reaction to a comment of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issuePostCommentReaction = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/comments/:id/reactions";
  function request(
    option: IssuePostCommentReactionOption & RequestParameters
  ): Promise<IssuePostCommentReactionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssuePostCommentReactionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteCommentReaction */
export interface IssueDeleteCommentReactionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the comment to edit
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for issueDeleteCommentReaction */
export interface IssueDeleteCommentReactionOption {
  body?: {
    content?: EditReactionOption;
  };
}

/** @description response type for issueDeleteCommentReaction */
export interface IssueDeleteCommentReactionResponse {
  200: Empty;
  403: Forbidden;
}

export type IssueDeleteCommentReactionResponseSuccess =
  IssueDeleteCommentReactionResponse[200];
/**
 * @description
 *   Remove a reaction from a comment of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueDeleteCommentReaction = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/comments/:id/reactions";
  function request(
    option: IssueDeleteCommentReactionOption & RequestParameters
  ): Promise<IssueDeleteCommentReactionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteCommentReactionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetIssue */
export interface IssueGetIssueOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to get
        @format int64 */
    index: number;
  };
}

/** @description response type for issueGetIssue */
export interface IssueGetIssueResponse {
  200: Issue;
  404: NotFound;
}

export type IssueGetIssueResponseSuccess = IssueGetIssueResponse[200];
/**
 * @description
 *   Get an issue
 * @tags issue
 * @produces application/json
 */
export const issueGetIssue = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index";
  function request(
    option: IssueGetIssueOption & RequestParameters
  ): Promise<IssueGetIssueResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetIssueResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueEditIssue */
export interface IssueEditIssueOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to edit
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueEditIssue */
export interface IssueEditIssueOption {
  body?: EditIssueOption;
}

/** @description response type for issueEditIssue */
export interface IssueEditIssueResponse {
  201: Issue;
  403: Forbidden;
  404: NotFound;
  412: TsgError;
}

export type IssueEditIssueResponseSuccess = IssueEditIssueResponse[201];
/**
 * @description
 *   Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueEditIssue = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/issues/:index";
  function request(
    option: IssueEditIssueOption & RequestParameters
  ): Promise<IssueEditIssueResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueEditIssueResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetComments */
export interface IssueGetCommentsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueGetComments */
export interface IssueGetCommentsOption {
  /**
   * @description
   *   if provided, only comments updated since the specified time are returned.
   * @format date-time
   */
  query?: {
    /**
        @description
          if provided, only comments updated since the specified time are returned.
        @format date-time */
    since?: string;
    /**
        @description
          if provided, only comments updated before the provided time are returned.
        @format date-time */
    before?: string;
  };
}

/** @description response type for issueGetComments */
export interface IssueGetCommentsResponse {
  200: CommentList;
}

export type IssueGetCommentsResponseSuccess = IssueGetCommentsResponse[200];
/**
 * @description
 *   List all comments on an issue
 * @tags issue
 * @produces application/json
 */
export const issueGetComments = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/comments";
  function request(
    option: IssueGetCommentsOption & RequestParameters
  ): Promise<IssueGetCommentsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetCommentsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueCreateComment */
export interface IssueCreateCommentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueCreateComment */
export interface IssueCreateCommentOption {
  body?: CreateIssueCommentOption;
}

/** @description response type for issueCreateComment */
export interface IssueCreateCommentResponse {
  201: Comment;
  403: Forbidden;
}

export type IssueCreateCommentResponseSuccess = IssueCreateCommentResponse[201];
/**
 * @description
 *   Add a comment to an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueCreateComment = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/comments";
  function request(
    option: IssueCreateCommentOption & RequestParameters
  ): Promise<IssueCreateCommentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueCreateCommentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueEditIssueDeadline */
export interface IssueEditIssueDeadlineOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to create or update a deadline on
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueEditIssueDeadline */
export interface IssueEditIssueDeadlineOption {
  body?: EditDeadlineOption;
}

/** @description response type for issueEditIssueDeadline */
export interface IssueEditIssueDeadlineResponse {
  201: IssueDeadline;
  403: Forbidden;
  404: NotFound;
}

export type IssueEditIssueDeadlineResponseSuccess =
  IssueEditIssueDeadlineResponse[201];
/**
 * @description
 *   Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueEditIssueDeadline = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/deadline";
  function request(
    option: IssueEditIssueDeadlineOption & RequestParameters
  ): Promise<IssueEditIssueDeadlineResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueEditIssueDeadlineResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetLabels */
export interface IssueGetLabelsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description response type for issueGetLabels */
export interface IssueGetLabelsResponse {
  200: LabelList;
  404: NotFound;
}

export type IssueGetLabelsResponseSuccess = IssueGetLabelsResponse[200];
/**
 * @description
 *   Get an issue's labels
 * @tags issue
 * @produces application/json
 */
export const issueGetLabels = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/labels";
  function request(
    option: IssueGetLabelsOption & RequestParameters
  ): Promise<IssueGetLabelsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetLabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueReplaceLabels */
export interface IssueReplaceLabelsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueReplaceLabels */
export interface IssueReplaceLabelsOption {
  body?: IssueLabelsOption;
}

/** @description response type for issueReplaceLabels */
export interface IssueReplaceLabelsResponse {
  200: LabelList;
  403: Forbidden;
}

export type IssueReplaceLabelsResponseSuccess = IssueReplaceLabelsResponse[200];
/**
 * @description
 *   Replace an issue's labels
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueReplaceLabels = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/labels";
  function request(
    option: IssueReplaceLabelsOption & RequestParameters
  ): Promise<IssueReplaceLabelsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueReplaceLabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueAddLabel */
export interface IssueAddLabelOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueAddLabel */
export interface IssueAddLabelOption {
  body?: IssueLabelsOption;
}

/** @description response type for issueAddLabel */
export interface IssueAddLabelResponse {
  200: LabelList;
  403: Forbidden;
}

export type IssueAddLabelResponseSuccess = IssueAddLabelResponse[200];
/**
 * @description
 *   Add a label to an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueAddLabel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/labels";
  function request(
    option: IssueAddLabelOption & RequestParameters
  ): Promise<IssueAddLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueAddLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueClearLabels */
export interface IssueClearLabelsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description response type for issueClearLabels */
export interface IssueClearLabelsResponse {
  204: Empty;
  403: Forbidden;
}

export type IssueClearLabelsResponseSuccess = IssueClearLabelsResponse[204];
/**
 * @description
 *   Remove all labels from an issue
 * @tags issue
 * @produces application/json
 */
export const issueClearLabels = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/labels";
  function request(
    option: IssueClearLabelsOption & RequestParameters
  ): Promise<IssueClearLabelsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueClearLabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueRemoveLabel */
export interface IssueRemoveLabelOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
    /**
        @description
          id of the label to remove
        @format int64 */
    id: number;
  };
}

/** @description response type for issueRemoveLabel */
export interface IssueRemoveLabelResponse {
  204: Empty;
  403: Forbidden;
  422: ValidationError;
}

export type IssueRemoveLabelResponseSuccess = IssueRemoveLabelResponse[204];
/**
 * @description
 *   Remove a label from an issue
 * @tags issue
 * @produces application/json
 */
export const issueRemoveLabel = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/labels/:id";
  function request(
    option: IssueRemoveLabelOption & RequestParameters
  ): Promise<IssueRemoveLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueRemoveLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetIssueReactions */
export interface IssueGetIssueReactionsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueGetIssueReactions */
export interface IssueGetIssueReactionsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueGetIssueReactions */
export interface IssueGetIssueReactionsResponse {
  200: ReactionList;
  403: Forbidden;
}

export type IssueGetIssueReactionsResponseSuccess =
  IssueGetIssueReactionsResponse[200];
/**
 * @description
 *   Get a list reactions of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueGetIssueReactions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/reactions";
  function request(
    option: IssueGetIssueReactionsOption & RequestParameters
  ): Promise<IssueGetIssueReactionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetIssueReactionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issuePostIssueReaction */
export interface IssuePostIssueReactionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issuePostIssueReaction */
export interface IssuePostIssueReactionOption {
  body?: {
    content?: EditReactionOption;
  };
}

/** @description response type for issuePostIssueReaction */
export interface IssuePostIssueReactionResponse {
  200: Reaction;
  201: Reaction;
  403: Forbidden;
}

export type IssuePostIssueReactionResponseSuccess =
  IssuePostIssueReactionResponse[200];
/**
 * @description
 *   Add a reaction to an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issuePostIssueReaction = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/reactions";
  function request(
    option: IssuePostIssueReactionOption & RequestParameters
  ): Promise<IssuePostIssueReactionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssuePostIssueReactionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteIssueReaction */
export interface IssueDeleteIssueReactionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueDeleteIssueReaction */
export interface IssueDeleteIssueReactionOption {
  body?: {
    content?: EditReactionOption;
  };
}

/** @description response type for issueDeleteIssueReaction */
export interface IssueDeleteIssueReactionResponse {
  200: Empty;
  403: Forbidden;
}

export type IssueDeleteIssueReactionResponseSuccess =
  IssueDeleteIssueReactionResponse[200];
/**
 * @description
 *   Remove a reaction from an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueDeleteIssueReaction = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/reactions";
  function request(
    option: IssueDeleteIssueReactionOption & RequestParameters
  ): Promise<IssueDeleteIssueReactionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteIssueReactionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteStopWatch */
export interface IssueDeleteStopWatchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to stop the stopwatch on
        @format int64 */
    index: number;
  };
}

/** @description response type for issueDeleteStopWatch */
export interface IssueDeleteStopWatchResponse {
  204: Empty;
  /**
   * @description
   *   Not repo writer, user does not have rights to toggle stopwatch
   */
  403: any;
  404: NotFound;
  /**
   * @description
   *   Cannot cancel a non existent stopwatch
   */
  409: any;
}

export type IssueDeleteStopWatchResponseSuccess =
  IssueDeleteStopWatchResponse[204];
/**
 * @description
 *   Delete an issue's existing stopwatch.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueDeleteStopWatch = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/stopwatch/delete";
  function request(
    option: IssueDeleteStopWatchOption & RequestParameters
  ): Promise<IssueDeleteStopWatchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteStopWatchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueStartStopWatch */
export interface IssueStartStopWatchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to create the stopwatch on
        @format int64 */
    index: number;
  };
}

/** @description response type for issueStartStopWatch */
export interface IssueStartStopWatchResponse {
  201: Empty;
  /**
   * @description
   *   Not repo writer, user does not have rights to toggle stopwatch
   */
  403: any;
  404: NotFound;
  /**
   * @description
   *   Cannot start a stopwatch again if it already exists
   */
  409: any;
}

export type IssueStartStopWatchResponseSuccess =
  IssueStartStopWatchResponse[201];
/**
 * @description
 *   Start stopwatch on an issue.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueStartStopWatch = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/stopwatch/start";
  function request(
    option: IssueStartStopWatchOption & RequestParameters
  ): Promise<IssueStartStopWatchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueStartStopWatchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueStopStopWatch */
export interface IssueStopStopWatchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to stop the stopwatch on
        @format int64 */
    index: number;
  };
}

/** @description response type for issueStopStopWatch */
export interface IssueStopStopWatchResponse {
  201: Empty;
  /**
   * @description
   *   Not repo writer, user does not have rights to toggle stopwatch
   */
  403: any;
  404: NotFound;
  /**
   * @description
   *   Cannot stop a non existent stopwatch
   */
  409: any;
}

export type IssueStopStopWatchResponseSuccess = IssueStopStopWatchResponse[201];
/**
 * @description
 *   Stop an issue's existing stopwatch.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueStopStopWatch = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/stopwatch/stop";
  function request(
    option: IssueStopStopWatchOption & RequestParameters
  ): Promise<IssueStopStopWatchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueStopStopWatchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueSubscriptions */
export interface IssueSubscriptionsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueSubscriptions */
export interface IssueSubscriptionsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueSubscriptions */
export interface IssueSubscriptionsResponse {
  200: UserList;
  404: NotFound;
}

export type IssueSubscriptionsResponseSuccess = IssueSubscriptionsResponse[200];
/**
 * @description
 *   Get users who subscribed on an issue.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueSubscriptions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/subscriptions";
  function request(
    option: IssueSubscriptionsOption & RequestParameters
  ): Promise<IssueSubscriptionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueSubscriptionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueCheckSubscription */
export interface IssueCheckSubscriptionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description response type for issueCheckSubscription */
export interface IssueCheckSubscriptionResponse {
  200: WatchInfo;
  404: NotFound;
}

export type IssueCheckSubscriptionResponseSuccess =
  IssueCheckSubscriptionResponse[200];
/**
 * @description
 *   Check if user is subscribed to an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueCheckSubscription = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/subscriptions/check";
  function request(
    option: IssueCheckSubscriptionOption & RequestParameters
  ): Promise<IssueCheckSubscriptionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueCheckSubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueAddSubscription */
export interface IssueAddSubscriptionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
    /**
        @description
          user to subscribe */
    user: string;
  };
}

/** @description response type for issueAddSubscription */
export interface IssueAddSubscriptionResponse {
  /**
   * @description
   *   Already subscribed
   */
  200: any;
  /**
   * @description
   *   Successfully Subscribed
   */
  201: any;
  /**
   * @description
   *   User can only subscribe itself if he is no admin
   */
  304: any;
  404: NotFound;
}

export type IssueAddSubscriptionResponseSuccess =
  IssueAddSubscriptionResponse[200];
/**
 * @description
 *   Subscribe user to issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueAddSubscription = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/subscriptions/:user";
  function request(
    option: IssueAddSubscriptionOption & RequestParameters
  ): Promise<IssueAddSubscriptionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueAddSubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteSubscription */
export interface IssueDeleteSubscriptionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
    /**
        @description
          user witch unsubscribe */
    user: string;
  };
}

/** @description response type for issueDeleteSubscription */
export interface IssueDeleteSubscriptionResponse {
  /**
   * @description
   *   Already unsubscribed
   */
  200: any;
  /**
   * @description
   *   Successfully Unsubscribed
   */
  201: any;
  /**
   * @description
   *   User can only subscribe itself if he is no admin
   */
  304: any;
  404: NotFound;
}

export type IssueDeleteSubscriptionResponseSuccess =
  IssueDeleteSubscriptionResponse[200];
/**
 * @description
 *   Unsubscribe user from issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueDeleteSubscription = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/subscriptions/:user";
  function request(
    option: IssueDeleteSubscriptionOption & RequestParameters
  ): Promise<IssueDeleteSubscriptionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteSubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetCommentsAndTimeline */
export interface IssueGetCommentsAndTimelineOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueGetCommentsAndTimeline */
export interface IssueGetCommentsAndTimelineOption {
  /**
   * @description
   *   if provided, only comments updated since the specified time are returned.
   * @format date-time
   */
  query?: {
    /**
        @description
          if provided, only comments updated since the specified time are returned.
        @format date-time */
    since?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
    /**
        @description
          if provided, only comments updated before the provided time are returned.
        @format date-time */
    before?: string;
  };
}

/** @description response type for issueGetCommentsAndTimeline */
export interface IssueGetCommentsAndTimelineResponse {
  200: TimelineList;
}

export type IssueGetCommentsAndTimelineResponseSuccess =
  IssueGetCommentsAndTimelineResponse[200];
/**
 * @description
 *   List all comments and events on an issue
 * @tags issue
 * @produces application/json
 */
export const issueGetCommentsAndTimeline = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/timeline";
  function request(
    option: IssueGetCommentsAndTimelineOption & RequestParameters
  ): Promise<IssueGetCommentsAndTimelineResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetCommentsAndTimelineResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueTrackedTimes */
export interface IssueTrackedTimesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueTrackedTimes */
export interface IssueTrackedTimesOption {
  /**
   * @description
   *   optional filter by user (available for issue managers)
   */
  query?: {
    /**
        @description
          optional filter by user (available for issue managers) */
    user?: string;
    /**
        @description
          Only show times updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show times updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueTrackedTimes */
export interface IssueTrackedTimesResponse {
  200: TrackedTimeList;
  404: NotFound;
}

export type IssueTrackedTimesResponseSuccess = IssueTrackedTimesResponse[200];
/**
 * @description
 *   List an issue's tracked times
 * @tags issue
 * @produces application/json
 */
export const issueTrackedTimes = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/times";
  function request(
    option: IssueTrackedTimesOption & RequestParameters
  ): Promise<IssueTrackedTimesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueTrackedTimesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueAddTime */
export interface IssueAddTimeOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for issueAddTime */
export interface IssueAddTimeOption {
  body?: AddTimeOption;
}

/** @description response type for issueAddTime */
export interface IssueAddTimeResponse {
  200: TrackedTime;
  400: TsgError;
  403: Forbidden;
}

export type IssueAddTimeResponseSuccess = IssueAddTimeResponse[200];
/**
 * @description
 *   Add tracked time to a issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueAddTime = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/times";
  function request(
    option: IssueAddTimeOption & RequestParameters
  ): Promise<IssueAddTimeResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueAddTimeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueResetTime */
export interface IssueResetTimeOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue to add tracked time to
        @format int64 */
    index: number;
  };
}

/** @description response type for issueResetTime */
export interface IssueResetTimeResponse {
  204: Empty;
  400: TsgError;
  403: Forbidden;
}

export type IssueResetTimeResponseSuccess = IssueResetTimeResponse[204];
/**
 * @description
 *   Reset a tracked time of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueResetTime = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/times";
  function request(
    option: IssueResetTimeOption & RequestParameters
  ): Promise<IssueResetTimeResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueResetTimeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteTime */
export interface IssueDeleteTimeOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the issue
        @format int64 */
    index: number;
    /**
        @description
          id of time to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for issueDeleteTime */
export interface IssueDeleteTimeResponse {
  204: Empty;
  400: TsgError;
  403: Forbidden;
}

export type IssueDeleteTimeResponseSuccess = IssueDeleteTimeResponse[204];
/**
 * @description
 *   Delete specific tracked time
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueDeleteTime = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/issues/:index/times/:id";
  function request(
    option: IssueDeleteTimeOption & RequestParameters
  ): Promise<IssueDeleteTimeResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteTimeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListKeys */
export interface RepoListKeysOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListKeys */
export interface RepoListKeysOption {
  /**
   * @description
   *   the key_id to search for
   */
  query?: {
    /**
        @description
          the key_id to search for */
    key_id?: number;
    /**
        @description
          fingerprint of the key */
    fingerprint?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListKeys */
export interface RepoListKeysResponse {
  200: DeployKeyList;
}

export type RepoListKeysResponseSuccess = RepoListKeysResponse[200];
/**
 * @description
 *   List a repository's keys
 * @tags repository
 * @produces application/json
 */
export const repoListKeys = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/keys";
  function request(
    option: RepoListKeysOption & RequestParameters
  ): Promise<RepoListKeysResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListKeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateKey */
export interface RepoCreateKeyOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateKey */
export interface RepoCreateKeyOption {
  body?: CreateKeyOption;
}

/** @description response type for repoCreateKey */
export interface RepoCreateKeyResponse {
  201: DeployKey;
  422: ValidationError;
}

export type RepoCreateKeyResponseSuccess = RepoCreateKeyResponse[201];
/**
 * @description
 *   Add a key to a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreateKey = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/keys";
  function request(
    option: RepoCreateKeyOption & RequestParameters
  ): Promise<RepoCreateKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetKey */
export interface RepoGetKeyOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the key to get
        @format int64 */
    id: number;
  };
}

/** @description response type for repoGetKey */
export interface RepoGetKeyResponse {
  200: DeployKey;
}

export type RepoGetKeyResponseSuccess = RepoGetKeyResponse[200];
/**
 * @description
 *   Get a repository's key by id
 * @tags repository
 * @produces application/json
 */
export const repoGetKey = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/keys/:id";
  function request(
    option: RepoGetKeyOption & RequestParameters
  ): Promise<RepoGetKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteKey */
export interface RepoDeleteKeyOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the key to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for repoDeleteKey */
export interface RepoDeleteKeyResponse {
  204: Empty;
  403: Forbidden;
}

export type RepoDeleteKeyResponseSuccess = RepoDeleteKeyResponse[204];
/**
 * @description
 *   Delete a key from a repository
 * @tags repository
 */
export const repoDeleteKey = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/keys/:id";
  function request(
    option: RepoDeleteKeyOption & RequestParameters
  ): Promise<RepoDeleteKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueListLabels */
export interface IssueListLabelsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueListLabels */
export interface IssueListLabelsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueListLabels */
export interface IssueListLabelsResponse {
  200: LabelList;
}

export type IssueListLabelsResponseSuccess = IssueListLabelsResponse[200];
/**
 * @description
 *   Get all of a repository's labels
 * @tags issue
 * @produces application/json
 */
export const issueListLabels = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/labels";
  function request(
    option: IssueListLabelsOption & RequestParameters
  ): Promise<IssueListLabelsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueListLabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueCreateLabel */
export interface IssueCreateLabelOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueCreateLabel */
export interface IssueCreateLabelOption {
  body?: CreateLabelOption;
}

/** @description response type for issueCreateLabel */
export interface IssueCreateLabelResponse {
  201: Label;
  422: ValidationError;
}

export type IssueCreateLabelResponseSuccess = IssueCreateLabelResponse[201];
/**
 * @description
 *   Create a label
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueCreateLabel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/labels";
  function request(
    option: IssueCreateLabelOption & RequestParameters
  ): Promise<IssueCreateLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueCreateLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetLabel */
export interface IssueGetLabelOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the label to get
        @format int64 */
    id: number;
  };
}

/** @description response type for issueGetLabel */
export interface IssueGetLabelResponse {
  200: Label;
}

export type IssueGetLabelResponseSuccess = IssueGetLabelResponse[200];
/**
 * @description
 *   Get a single label
 * @tags issue
 * @produces application/json
 */
export const issueGetLabel = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/labels/:id";
  function request(
    option: IssueGetLabelOption & RequestParameters
  ): Promise<IssueGetLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteLabel */
export interface IssueDeleteLabelOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the label to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for issueDeleteLabel */
export interface IssueDeleteLabelResponse {
  204: Empty;
}

export type IssueDeleteLabelResponseSuccess = IssueDeleteLabelResponse[204];
/**
 * @description
 *   Delete a label
 * @tags issue
 */
export const issueDeleteLabel = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/labels/:id";
  function request(
    option: IssueDeleteLabelOption & RequestParameters
  ): Promise<IssueDeleteLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueEditLabel */
export interface IssueEditLabelOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the label to edit
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for issueEditLabel */
export interface IssueEditLabelOption {
  body?: EditLabelOption;
}

/** @description response type for issueEditLabel */
export interface IssueEditLabelResponse {
  200: Label;
  422: ValidationError;
}

export type IssueEditLabelResponseSuccess = IssueEditLabelResponse[200];
/**
 * @description
 *   Update a label
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueEditLabel = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/labels/:id";
  function request(
    option: IssueEditLabelOption & RequestParameters
  ): Promise<IssueEditLabelResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueEditLabelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetLanguages */
export interface RepoGetLanguagesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoGetLanguages */
export interface RepoGetLanguagesResponse {
  200: LanguageStatistics;
  404: NotFound;
}

export type RepoGetLanguagesResponseSuccess = RepoGetLanguagesResponse[200];
/**
 * @description
 *   Get languages and number of bytes of code written
 * @tags repository
 * @produces application/json
 */
export const repoGetLanguages = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/languages";
  function request(
    option: RepoGetLanguagesOption & RequestParameters
  ): Promise<RepoGetLanguagesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetLanguagesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetMilestonesList */
export interface IssueGetMilestonesListOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueGetMilestonesList */
export interface IssueGetMilestonesListOption {
  /**
   * @description
   *   Milestone state, Recognised values are open, closed and all. Defaults to "open"
   */
  query?: {
    /**
        @description
          Milestone state, Recognised values are open, closed and all. Defaults to "open" */
    state?: string;
    /**
        @description
          filter by milestone name */
    name?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for issueGetMilestonesList */
export interface IssueGetMilestonesListResponse {
  200: MilestoneList;
}

export type IssueGetMilestonesListResponseSuccess =
  IssueGetMilestonesListResponse[200];
/**
 * @description
 *   Get all of a repository's opened milestones
 * @tags issue
 * @produces application/json
 */
export const issueGetMilestonesList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/milestones";
  function request(
    option: IssueGetMilestonesListOption & RequestParameters
  ): Promise<IssueGetMilestonesListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetMilestonesListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueCreateMilestone */
export interface IssueCreateMilestoneOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for issueCreateMilestone */
export interface IssueCreateMilestoneOption {
  body?: CreateMilestoneOption;
}

/** @description response type for issueCreateMilestone */
export interface IssueCreateMilestoneResponse {
  201: Milestone;
}

export type IssueCreateMilestoneResponseSuccess =
  IssueCreateMilestoneResponse[201];
/**
 * @description
 *   Create a milestone
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueCreateMilestone = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/milestones";
  function request(
    option: IssueCreateMilestoneOption & RequestParameters
  ): Promise<IssueCreateMilestoneResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueCreateMilestoneResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueGetMilestone */
export interface IssueGetMilestoneOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          the milestone to get, identified by ID and if not available by name */
    id: string;
  };
}

/** @description response type for issueGetMilestone */
export interface IssueGetMilestoneResponse {
  200: Milestone;
}

export type IssueGetMilestoneResponseSuccess = IssueGetMilestoneResponse[200];
/**
 * @description
 *   Get a milestone
 * @tags issue
 * @produces application/json
 */
export const issueGetMilestone = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/milestones/:id";
  function request(
    option: IssueGetMilestoneOption & RequestParameters
  ): Promise<IssueGetMilestoneResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueGetMilestoneResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueDeleteMilestone */
export interface IssueDeleteMilestoneOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          the milestone to delete, identified by ID and if not available by name */
    id: string;
  };
}

/** @description response type for issueDeleteMilestone */
export interface IssueDeleteMilestoneResponse {
  204: Empty;
}

export type IssueDeleteMilestoneResponseSuccess =
  IssueDeleteMilestoneResponse[204];
/**
 * @description
 *   Delete a milestone
 * @tags issue
 */
export const issueDeleteMilestone = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/milestones/:id";
  function request(
    option: IssueDeleteMilestoneOption & RequestParameters
  ): Promise<IssueDeleteMilestoneResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueDeleteMilestoneResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for issueEditMilestone */
export interface IssueEditMilestoneOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          the milestone to edit, identified by ID and if not available by name */
    id: string;
  };
}

/** @description request parameter type for issueEditMilestone */
export interface IssueEditMilestoneOption {
  body?: EditMilestoneOption;
}

/** @description response type for issueEditMilestone */
export interface IssueEditMilestoneResponse {
  200: Milestone;
}

export type IssueEditMilestoneResponseSuccess = IssueEditMilestoneResponse[200];
/**
 * @description
 *   Update a milestone
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const issueEditMilestone = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/milestones/:id";
  function request(
    option: IssueEditMilestoneOption & RequestParameters
  ): Promise<IssueEditMilestoneResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<IssueEditMilestoneResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoMirrorSync */
export interface RepoMirrorSyncOption {
  /**
   * @description
   *   owner of the repo to sync
   */
  path: {
    /**
        @description
          owner of the repo to sync */
    owner: string;
    /**
        @description
          name of the repo to sync */
    repo: string;
  };
}

/** @description response type for repoMirrorSync */
export interface RepoMirrorSyncResponse {
  200: Empty;
  403: Forbidden;
}

export type RepoMirrorSyncResponseSuccess = RepoMirrorSyncResponse[200];
/**
 * @description
 *   Sync a mirrored repository
 * @tags repository
 * @produces application/json
 */
export const repoMirrorSync = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/mirror-sync";
  function request(
    option: RepoMirrorSyncOption & RequestParameters
  ): Promise<RepoMirrorSyncResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoMirrorSyncResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifyGetRepoList */
export interface NotifyGetRepoListOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for notifyGetRepoList */
export interface NotifyGetRepoListOption {
  /**
   * @description
   *   If true, show notifications marked as read. Default value is false
   */
  query?: {
    /**
        @description
          If true, show notifications marked as read. Default value is false */
    all?: boolean;
    /**
        @description
          Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned */
    "status-types"?: Array<string>;
    /**
        @description
          filter notifications by subject type */
    "subject-type"?: Array<GetReposOwnerRepoNotificationsItems>;
    /**
        @description
          Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for notifyGetRepoList */
export interface NotifyGetRepoListResponse {
  200: NotificationThreadList;
}

export type NotifyGetRepoListResponseSuccess = NotifyGetRepoListResponse[200];
/**
 * @description
 *   List users's notification threads on a specific repo
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifyGetRepoList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/notifications";
  function request(
    option: NotifyGetRepoListOption & RequestParameters
  ): Promise<NotifyGetRepoListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyGetRepoListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifyReadRepoList */
export interface NotifyReadRepoListOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for notifyReadRepoList */
export interface NotifyReadRepoListOption {
  /**
   * @description
   *   If true, mark all notifications on this repo. Default value is false
   */
  query?: {
    /**
        @description
          If true, mark all notifications on this repo. Default value is false */
    all?: string;
    /**
        @description
          Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. */
    "status-types"?: Array<string>;
    /**
        @description
          Status to mark notifications as. Defaults to read. */
    "to-status"?: string;
    /**
        @description
          Describes the last point that notifications were checked. Anything updated since this time will not be updated.
        @format date-time */
    last_read_at?: string;
  };
}

/** @description response type for notifyReadRepoList */
export interface NotifyReadRepoListResponse {
  205: NotificationThreadList;
}

export type NotifyReadRepoListResponseSuccess = NotifyReadRepoListResponse[205];
/**
 * @description
 *   Mark notification threads as read, pinned or unread on a specific repo
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifyReadRepoList = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/notifications";
  function request(
    option: NotifyReadRepoListOption & RequestParameters
  ): Promise<NotifyReadRepoListResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<NotifyReadRepoListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListPullRequests */
export interface RepoListPullRequestsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListPullRequests */
export interface RepoListPullRequestsOption {
  /**
   * @description
   *   State of pull request: open or closed (optional)
   */
  query?: {
    /**
        @description
          State of pull request: open or closed (optional) */
    state?: GetReposOwnerRepoPullsState;
    /**
        @description
          Type of sort */
    sort?: GetReposOwnerRepoPullsSort;
    /**
        @description
          ID of the milestone
        @format int64 */
    milestone?: number;
    /**
        @description
          Label IDs */
    labels?: Array<number>;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListPullRequests */
export interface RepoListPullRequestsResponse {
  200: PullRequestList;
}

export type RepoListPullRequestsResponseSuccess =
  RepoListPullRequestsResponse[200];
/**
 * @description
 *   List a repo's pull requests
 * @tags repository
 * @produces application/json
 */
export const repoListPullRequests = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls";
  function request(
    option: RepoListPullRequestsOption & RequestParameters
  ): Promise<RepoListPullRequestsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListPullRequestsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreatePullRequest */
export interface RepoCreatePullRequestOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreatePullRequest */
export interface RepoCreatePullRequestOption {
  body?: CreatePullRequestOption;
}

/** @description response type for repoCreatePullRequest */
export interface RepoCreatePullRequestResponse {
  201: PullRequest;
  409: TsgError;
  422: ValidationError;
}

export type RepoCreatePullRequestResponseSuccess =
  RepoCreatePullRequestResponse[201];
/**
 * @description
 *   Create a pull request
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreatePullRequest = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls";
  function request(
    option: RepoCreatePullRequestOption & RequestParameters
  ): Promise<RepoCreatePullRequestResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreatePullRequestResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetPullRequest */
export interface RepoGetPullRequestOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request to get
        @format int64 */
    index: number;
  };
}

/** @description response type for repoGetPullRequest */
export interface RepoGetPullRequestResponse {
  200: PullRequest;
  404: NotFound;
}

export type RepoGetPullRequestResponseSuccess = RepoGetPullRequestResponse[200];
/**
 * @description
 *   Get a pull request
 * @tags repository
 * @produces application/json
 */
export const repoGetPullRequest = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index";
  function request(
    option: RepoGetPullRequestOption & RequestParameters
  ): Promise<RepoGetPullRequestResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetPullRequestResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditPullRequest */
export interface RepoEditPullRequestOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request to edit
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoEditPullRequest */
export interface RepoEditPullRequestOption {
  body?: EditPullRequestOption;
}

/** @description response type for repoEditPullRequest */
export interface RepoEditPullRequestResponse {
  201: PullRequest;
  403: Forbidden;
  409: TsgError;
  412: TsgError;
  422: ValidationError;
}

export type RepoEditPullRequestResponseSuccess =
  RepoEditPullRequestResponse[201];
/**
 * @description
 *   Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoEditPullRequest = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index";
  function request(
    option: RepoEditPullRequestOption & RequestParameters
  ): Promise<RepoEditPullRequestResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditPullRequestResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDownloadPullDiffOrPatch */
export interface RepoDownloadPullDiffOrPatchOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request to get
        @format int64 */
    index: number;
    /**
        @description
          whether the output is diff or patch */
    diffType: GetReposOwnerRepoPullsIndexDiffTypeDiffType;
  };
}

/** @description request parameter type for repoDownloadPullDiffOrPatch */
export interface RepoDownloadPullDiffOrPatchOption {
  /**
   * @description
   *   whether to include binary file changes. if true, the diff is applicable with `git apply`
   */
  query?: {
    /**
        @description
          whether to include binary file changes. if true, the diff is applicable with `git apply` */
    binary?: boolean;
  };
}

/** @description response type for repoDownloadPullDiffOrPatch */
export interface RepoDownloadPullDiffOrPatchResponse {
  200: TsgString;
  404: NotFound;
}

export type RepoDownloadPullDiffOrPatchResponseSuccess =
  RepoDownloadPullDiffOrPatchResponse[200];
/**
 * @description
 *   Get a pull request diff or patch
 * @tags repository
 * @produces text/plain
 */
export const repoDownloadPullDiffOrPatch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index.diffType";
  function request(
    option: RepoDownloadPullDiffOrPatchOption & RequestParameters
  ): Promise<RepoDownloadPullDiffOrPatchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDownloadPullDiffOrPatchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetPullRequestCommits */
export interface RepoGetPullRequestCommitsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request to get
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoGetPullRequestCommits */
export interface RepoGetPullRequestCommitsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoGetPullRequestCommits */
export interface RepoGetPullRequestCommitsResponse {
  200: CommitList;
  404: NotFound;
}

export type RepoGetPullRequestCommitsResponseSuccess =
  RepoGetPullRequestCommitsResponse[200];
/**
 * @description
 *   Get commits for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoGetPullRequestCommits = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/commits";
  function request(
    option: RepoGetPullRequestCommitsOption & RequestParameters
  ): Promise<RepoGetPullRequestCommitsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetPullRequestCommitsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoPullRequestIsMerged */
export interface RepoPullRequestIsMergedOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
  };
}

/** @description response type for repoPullRequestIsMerged */
export interface RepoPullRequestIsMergedResponse {
  /**
   * @description
   *   pull request has been merged
   */
  204: any;
  /**
   * @description
   *   pull request has not been merged
   */
  404: any;
}

export type RepoPullRequestIsMergedResponseSuccess =
  RepoPullRequestIsMergedResponse[204];
/**
 * @description
 *   Check if a pull request has been merged
 * @tags repository
 * @produces application/json
 */
export const repoPullRequestIsMerged = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/merge";
  function request(
    option: RepoPullRequestIsMergedOption & RequestParameters
  ): Promise<RepoPullRequestIsMergedResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoPullRequestIsMergedResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoMergePullRequest */
export interface RepoMergePullRequestOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request to merge
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoMergePullRequest */
export interface RepoMergePullRequestOption {
  body?: MergePullRequestOption;
}

/** @description response type for repoMergePullRequest */
export interface RepoMergePullRequestResponse {
  200: Empty;
  405: Empty;
  409: TsgError;
}

export type RepoMergePullRequestResponseSuccess =
  RepoMergePullRequestResponse[200];
/**
 * @description
 *   Merge a pull request
 * @tags repository
 * @produces application/json
 */
export const repoMergePullRequest = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/merge";
  function request(
    option: RepoMergePullRequestOption & RequestParameters
  ): Promise<RepoMergePullRequestResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoMergePullRequestResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreatePullReviewRequests */
export interface RepoCreatePullReviewRequestsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoCreatePullReviewRequests */
export interface RepoCreatePullReviewRequestsOption {
  body: PullReviewRequestOptions;
}

/** @description response type for repoCreatePullReviewRequests */
export interface RepoCreatePullReviewRequestsResponse {
  201: PullReviewList;
  404: NotFound;
  422: ValidationError;
}

export type RepoCreatePullReviewRequestsResponseSuccess =
  RepoCreatePullReviewRequestsResponse[201];
/**
 * @description
 *   create review requests for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoCreatePullReviewRequests = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/requested_reviewers";
  function request(
    option: RepoCreatePullReviewRequestsOption & RequestParameters
  ): Promise<RepoCreatePullReviewRequestsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreatePullReviewRequestsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeletePullReviewRequests */
export interface RepoDeletePullReviewRequestsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoDeletePullReviewRequests */
export interface RepoDeletePullReviewRequestsOption {
  body: PullReviewRequestOptions;
}

/** @description response type for repoDeletePullReviewRequests */
export interface RepoDeletePullReviewRequestsResponse {
  204: Empty;
  404: NotFound;
  422: ValidationError;
}

export type RepoDeletePullReviewRequestsResponseSuccess =
  RepoDeletePullReviewRequestsResponse[204];
/**
 * @description
 *   cancel review requests for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoDeletePullReviewRequests = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/requested_reviewers";
  function request(
    option: RepoDeletePullReviewRequestsOption & RequestParameters
  ): Promise<RepoDeletePullReviewRequestsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeletePullReviewRequestsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListPullReviews */
export interface RepoListPullReviewsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoListPullReviews */
export interface RepoListPullReviewsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListPullReviews */
export interface RepoListPullReviewsResponse {
  200: PullReviewList;
  404: NotFound;
}

export type RepoListPullReviewsResponseSuccess =
  RepoListPullReviewsResponse[200];
/**
 * @description
 *   List all reviews for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoListPullReviews = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews";
  function request(
    option: RepoListPullReviewsOption & RequestParameters
  ): Promise<RepoListPullReviewsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListPullReviewsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreatePullReview */
export interface RepoCreatePullReviewOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoCreatePullReview */
export interface RepoCreatePullReviewOption {
  body: CreatePullReviewOptions;
}

/** @description response type for repoCreatePullReview */
export interface RepoCreatePullReviewResponse {
  200: PullReview;
  404: NotFound;
  422: ValidationError;
}

export type RepoCreatePullReviewResponseSuccess =
  RepoCreatePullReviewResponse[200];
/**
 * @description
 *   Create a review to an pull request
 * @tags repository
 * @produces application/json
 */
export const repoCreatePullReview = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews";
  function request(
    option: RepoCreatePullReviewOption & RequestParameters
  ): Promise<RepoCreatePullReviewResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreatePullReviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetPullReview */
export interface RepoGetPullReviewOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
    /**
        @description
          id of the review
        @format int64 */
    id: number;
  };
}

/** @description response type for repoGetPullReview */
export interface RepoGetPullReviewResponse {
  200: PullReview;
  404: NotFound;
}

export type RepoGetPullReviewResponseSuccess = RepoGetPullReviewResponse[200];
/**
 * @description
 *   Get a specific review for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoGetPullReview = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews/:id";
  function request(
    option: RepoGetPullReviewOption & RequestParameters
  ): Promise<RepoGetPullReviewResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetPullReviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoSubmitPullReview */
export interface RepoSubmitPullReviewOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
    /**
        @description
          id of the review
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for repoSubmitPullReview */
export interface RepoSubmitPullReviewOption {
  body: SubmitPullReviewOptions;
}

/** @description response type for repoSubmitPullReview */
export interface RepoSubmitPullReviewResponse {
  200: PullReview;
  404: NotFound;
  422: ValidationError;
}

export type RepoSubmitPullReviewResponseSuccess =
  RepoSubmitPullReviewResponse[200];
/**
 * @description
 *   Submit a pending review to an pull request
 * @tags repository
 * @produces application/json
 */
export const repoSubmitPullReview = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews/:id";
  function request(
    option: RepoSubmitPullReviewOption & RequestParameters
  ): Promise<RepoSubmitPullReviewResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoSubmitPullReviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeletePullReview */
export interface RepoDeletePullReviewOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
    /**
        @description
          id of the review
        @format int64 */
    id: number;
  };
}

/** @description response type for repoDeletePullReview */
export interface RepoDeletePullReviewResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type RepoDeletePullReviewResponseSuccess =
  RepoDeletePullReviewResponse[204];
/**
 * @description
 *   Delete a specific review from a pull request
 * @tags repository
 * @produces application/json
 */
export const repoDeletePullReview = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews/:id";
  function request(
    option: RepoDeletePullReviewOption & RequestParameters
  ): Promise<RepoDeletePullReviewResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeletePullReviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetPullReviewComments */
export interface RepoGetPullReviewCommentsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
    /**
        @description
          id of the review
        @format int64 */
    id: number;
  };
}

/** @description response type for repoGetPullReviewComments */
export interface RepoGetPullReviewCommentsResponse {
  200: PullReviewCommentList;
  404: NotFound;
}

export type RepoGetPullReviewCommentsResponseSuccess =
  RepoGetPullReviewCommentsResponse[200];
/**
 * @description
 *   Get a specific review for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoGetPullReviewComments = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews/:id/comments";
  function request(
    option: RepoGetPullReviewCommentsOption & RequestParameters
  ): Promise<RepoGetPullReviewCommentsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetPullReviewCommentsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDismissPullReview */
export interface RepoDismissPullReviewOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
    /**
        @description
          id of the review
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for repoDismissPullReview */
export interface RepoDismissPullReviewOption {
  body: DismissPullReviewOptions;
}

/** @description response type for repoDismissPullReview */
export interface RepoDismissPullReviewResponse {
  200: PullReview;
  403: Forbidden;
  422: ValidationError;
}

export type RepoDismissPullReviewResponseSuccess =
  RepoDismissPullReviewResponse[200];
/**
 * @description
 *   Dismiss a review for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoDismissPullReview = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/reviews/:id/dismissals";
  function request(
    option: RepoDismissPullReviewOption & RequestParameters
  ): Promise<RepoDismissPullReviewResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDismissPullReviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoUnDismissPullReview */
export interface RepoUnDismissPullReviewOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request
        @format int64 */
    index: number;
    /**
        @description
          id of the review
        @format int64 */
    id: number;
  };
}

/** @description response type for repoUnDismissPullReview */
export interface RepoUnDismissPullReviewResponse {
  200: PullReview;
  403: Forbidden;
  422: ValidationError;
}

export type RepoUnDismissPullReviewResponseSuccess =
  RepoUnDismissPullReviewResponse[200];
/**
 * @description
 *   Cancel to dismiss a review for a pull request
 * @tags repository
 * @produces application/json
 */
export const repoUnDismissPullReview = /* #__PURE__ */ (() => {
  const method = "post";
  const url =
    "/api/v1/repos/:owner/:repo/pulls/:index/reviews/:id/undismissals";
  function request(
    option: RepoUnDismissPullReviewOption & RequestParameters
  ): Promise<RepoUnDismissPullReviewResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoUnDismissPullReviewResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoUpdatePullRequest */
export interface RepoUpdatePullRequestOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          index of the pull request to get
        @format int64 */
    index: number;
  };
}

/** @description request parameter type for repoUpdatePullRequest */
export interface RepoUpdatePullRequestOption {
  /**
   * @description
   *   how to update pull request
   */
  query?: {
    /**
        @description
          how to update pull request */
    style?: PostReposOwnerRepoPullsIndexUpdateStyle;
  };
}

/** @description response type for repoUpdatePullRequest */
export interface RepoUpdatePullRequestResponse {
  200: Empty;
  403: Forbidden;
  404: NotFound;
  409: TsgError;
  422: ValidationError;
}

export type RepoUpdatePullRequestResponseSuccess =
  RepoUpdatePullRequestResponse[200];
/**
 * @description
 *   Merge PR's baseBranch into headBranch
 * @tags repository
 * @produces application/json
 */
export const repoUpdatePullRequest = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/pulls/:index/update";
  function request(
    option: RepoUpdatePullRequestOption & RequestParameters
  ): Promise<RepoUpdatePullRequestResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoUpdatePullRequestResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetRawFile */
export interface RepoGetRawFileOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          filepath of the file to get */
    filepath: string;
  };
}

/** @description request parameter type for repoGetRawFile */
export interface RepoGetRawFileOption {
  /**
   * @description
   *   The name of the commit/branch/tag. Default the repository’s default branch (usually master)
   */
  query?: {
    /**
        @description
          The name of the commit/branch/tag. Default the repository’s default branch (usually master) */
    ref?: string;
  };
}

/** @description response type for repoGetRawFile */
export interface RepoGetRawFileResponse {
  /**
   * @description
   *   success
   */
  200: any;
  404: NotFound;
}

export type RepoGetRawFileResponseSuccess = RepoGetRawFileResponse[200];
/**
 * @description
 *   Get a file from a repository
 * @tags repository
 * @produces application/json
 */
export const repoGetRawFile = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/raw/:filepath";
  function request(
    option: RepoGetRawFileOption & RequestParameters
  ): Promise<RepoGetRawFileResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetRawFileResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListReleases */
export interface RepoListReleasesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListReleases */
export interface RepoListReleasesOption {
  /**
   * @description
   *   filter (exclude / include) drafts, if you dont have repo write access none will show
   */
  query?: {
    /**
        @description
          filter (exclude / include) drafts, if you dont have repo write access none will show */
    draft?: boolean;
    /**
        @description
          filter (exclude / include) pre-releases */
    "pre-release"?: boolean;
    /**
        @description
          page size of results, deprecated - use limit */
    per_page?: number;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListReleases */
export interface RepoListReleasesResponse {
  200: ReleaseList;
}

export type RepoListReleasesResponseSuccess = RepoListReleasesResponse[200];
/**
 * @description
 *   List a repo's releases
 * @tags repository
 * @produces application/json
 */
export const repoListReleases = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/releases";
  function request(
    option: RepoListReleasesOption & RequestParameters
  ): Promise<RepoListReleasesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListReleasesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateRelease */
export interface RepoCreateReleaseOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateRelease */
export interface RepoCreateReleaseOption {
  body?: CreateReleaseOption;
}

/** @description response type for repoCreateRelease */
export interface RepoCreateReleaseResponse {
  201: Release;
  404: NotFound;
  409: TsgError;
}

export type RepoCreateReleaseResponseSuccess = RepoCreateReleaseResponse[201];
/**
 * @description
 *   Create a release
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoCreateRelease = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/releases";
  function request(
    option: RepoCreateReleaseOption & RequestParameters
  ): Promise<RepoCreateReleaseResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateReleaseResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetReleaseByTag */
export interface RepoGetReleaseByTagOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          tag name of the release to get */
    tag: string;
  };
}

/** @description response type for repoGetReleaseByTag */
export interface RepoGetReleaseByTagResponse {
  200: Release;
  404: NotFound;
}

export type RepoGetReleaseByTagResponseSuccess =
  RepoGetReleaseByTagResponse[200];
/**
 * @description
 *   Get a release by tag name
 * @tags repository
 * @produces application/json
 */
export const repoGetReleaseByTag = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/releases/tags/:tag";
  function request(
    option: RepoGetReleaseByTagOption & RequestParameters
  ): Promise<RepoGetReleaseByTagResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetReleaseByTagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteReleaseByTag */
export interface RepoDeleteReleaseByTagOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          tag name of the release to delete */
    tag: string;
  };
}

/** @description response type for repoDeleteReleaseByTag */
export interface RepoDeleteReleaseByTagResponse {
  204: Empty;
  404: NotFound;
  405: Empty;
}

export type RepoDeleteReleaseByTagResponseSuccess =
  RepoDeleteReleaseByTagResponse[204];
/**
 * @description
 *   Delete a release by tag name
 * @tags repository
 */
export const repoDeleteReleaseByTag = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/releases/tags/:tag";
  function request(
    option: RepoDeleteReleaseByTagOption & RequestParameters
  ): Promise<RepoDeleteReleaseByTagResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteReleaseByTagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetRelease */
export interface RepoGetReleaseOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release to get
        @format int64 */
    id: number;
  };
}

/** @description response type for repoGetRelease */
export interface RepoGetReleaseResponse {
  200: Release;
  404: NotFound;
}

export type RepoGetReleaseResponseSuccess = RepoGetReleaseResponse[200];
/**
 * @description
 *   Get a release
 * @tags repository
 * @produces application/json
 */
export const repoGetRelease = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/releases/:id";
  function request(
    option: RepoGetReleaseOption & RequestParameters
  ): Promise<RepoGetReleaseResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetReleaseResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteRelease */
export interface RepoDeleteReleaseOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for repoDeleteRelease */
export interface RepoDeleteReleaseResponse {
  204: Empty;
  404: NotFound;
  405: Empty;
}

export type RepoDeleteReleaseResponseSuccess = RepoDeleteReleaseResponse[204];
/**
 * @description
 *   Delete a release
 * @tags repository
 */
export const repoDeleteRelease = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/releases/:id";
  function request(
    option: RepoDeleteReleaseOption & RequestParameters
  ): Promise<RepoDeleteReleaseResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteReleaseResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditRelease */
export interface RepoEditReleaseOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release to edit
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for repoEditRelease */
export interface RepoEditReleaseOption {
  body?: EditReleaseOption;
}

/** @description response type for repoEditRelease */
export interface RepoEditReleaseResponse {
  200: Release;
  404: NotFound;
}

export type RepoEditReleaseResponseSuccess = RepoEditReleaseResponse[200];
/**
 * @description
 *   Update a release
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoEditRelease = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/releases/:id";
  function request(
    option: RepoEditReleaseOption & RequestParameters
  ): Promise<RepoEditReleaseResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditReleaseResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListReleaseAttachments */
export interface RepoListReleaseAttachmentsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release
        @format int64 */
    id: number;
  };
}

/** @description response type for repoListReleaseAttachments */
export interface RepoListReleaseAttachmentsResponse {
  200: AttachmentList;
}

export type RepoListReleaseAttachmentsResponseSuccess =
  RepoListReleaseAttachmentsResponse[200];
/**
 * @description
 *   List release's attachments
 * @tags repository
 * @produces application/json
 */
export const repoListReleaseAttachments = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/releases/:id/assets";
  function request(
    option: RepoListReleaseAttachmentsOption & RequestParameters
  ): Promise<RepoListReleaseAttachmentsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListReleaseAttachmentsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateReleaseAttachment */
export interface RepoCreateReleaseAttachmentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for repoCreateReleaseAttachment */
export interface RepoCreateReleaseAttachmentOption {
  /**
   * @description
   *   name of the attachment
   */
  query?: {
    /**
        @description
          name of the attachment */
    name?: string;
  };
}

/** @description request parameter type for repoCreateReleaseAttachment */
export interface RepoCreateReleaseAttachmentOption {
  /**
   * @description
   *   attachment to upload
   */
  formData: {
    /**
        @description
          attachment to upload */
    attachment: File;
  };
}

/** @description response type for repoCreateReleaseAttachment */
export interface RepoCreateReleaseAttachmentResponse {
  201: Attachment;
  400: TsgError;
}

export type RepoCreateReleaseAttachmentResponseSuccess =
  RepoCreateReleaseAttachmentResponse[201];
/**
 * @description
 *   Create a release attachment
 * @tags repository
 * @produces application/json
 * @consumes multipart/form-data
 */
export const repoCreateReleaseAttachment = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/releases/:id/assets";
  function request(
    option: RepoCreateReleaseAttachmentOption & RequestParameters
  ): Promise<RepoCreateReleaseAttachmentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateReleaseAttachmentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetReleaseAttachment */
export interface RepoGetReleaseAttachmentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release
        @format int64 */
    id: number;
    /**
        @description
          id of the attachment to get
        @format int64 */
    attachment_id: number;
  };
}

/** @description response type for repoGetReleaseAttachment */
export interface RepoGetReleaseAttachmentResponse {
  200: Attachment;
}

export type RepoGetReleaseAttachmentResponseSuccess =
  RepoGetReleaseAttachmentResponse[200];
/**
 * @description
 *   Get a release attachment
 * @tags repository
 * @produces application/json
 */
export const repoGetReleaseAttachment = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/releases/:id/assets/:attachment_id";
  function request(
    option: RepoGetReleaseAttachmentOption & RequestParameters
  ): Promise<RepoGetReleaseAttachmentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetReleaseAttachmentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteReleaseAttachment */
export interface RepoDeleteReleaseAttachmentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release
        @format int64 */
    id: number;
    /**
        @description
          id of the attachment to delete
        @format int64 */
    attachment_id: number;
  };
}

/** @description response type for repoDeleteReleaseAttachment */
export interface RepoDeleteReleaseAttachmentResponse {
  204: Empty;
}

export type RepoDeleteReleaseAttachmentResponseSuccess =
  RepoDeleteReleaseAttachmentResponse[204];
/**
 * @description
 *   Delete a release attachment
 * @tags repository
 * @produces application/json
 */
export const repoDeleteReleaseAttachment = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/releases/:id/assets/:attachment_id";
  function request(
    option: RepoDeleteReleaseAttachmentOption & RequestParameters
  ): Promise<RepoDeleteReleaseAttachmentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteReleaseAttachmentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditReleaseAttachment */
export interface RepoEditReleaseAttachmentOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          id of the release
        @format int64 */
    id: number;
    /**
        @description
          id of the attachment to edit
        @format int64 */
    attachment_id: number;
  };
}

/** @description request parameter type for repoEditReleaseAttachment */
export interface RepoEditReleaseAttachmentOption {
  body?: EditAttachmentOptions;
}

/** @description response type for repoEditReleaseAttachment */
export interface RepoEditReleaseAttachmentResponse {
  201: Attachment;
}

export type RepoEditReleaseAttachmentResponseSuccess =
  RepoEditReleaseAttachmentResponse[201];
/**
 * @description
 *   Edit a release attachment
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoEditReleaseAttachment = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/releases/:id/assets/:attachment_id";
  function request(
    option: RepoEditReleaseAttachmentOption & RequestParameters
  ): Promise<RepoEditReleaseAttachmentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditReleaseAttachmentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetReviewers */
export interface RepoGetReviewersOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoGetReviewers */
export interface RepoGetReviewersResponse {
  200: UserList;
}

export type RepoGetReviewersResponseSuccess = RepoGetReviewersResponse[200];
/**
 * @description
 *   Return all users that can be requested to review in this repo
 * @tags repository
 * @produces application/json
 */
export const repoGetReviewers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/reviewers";
  function request(
    option: RepoGetReviewersOption & RequestParameters
  ): Promise<RepoGetReviewersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetReviewersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoSigningKey */
export interface RepoSigningKeyOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoSigningKey */
export interface RepoSigningKeyResponse {
  /**
   * @description
   *   GPG armored public key
   */
  200: string;
}

export type RepoSigningKeyResponseSuccess = RepoSigningKeyResponse[200];
/**
 * @description
 *   Get signing-key.gpg for given repository
 * @tags repository
 * @produces text/plain
 */
export const repoSigningKey = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/signing-key.gpg";
  function request(
    option: RepoSigningKeyOption & RequestParameters
  ): Promise<RepoSigningKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoSigningKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListStargazers */
export interface RepoListStargazersOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListStargazers */
export interface RepoListStargazersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListStargazers */
export interface RepoListStargazersResponse {
  200: UserList;
}

export type RepoListStargazersResponseSuccess = RepoListStargazersResponse[200];
/**
 * @description
 *   List a repo's stargazers
 * @tags repository
 * @produces application/json
 */
export const repoListStargazers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/stargazers";
  function request(
    option: RepoListStargazersOption & RequestParameters
  ): Promise<RepoListStargazersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListStargazersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListStatuses */
export interface RepoListStatusesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          sha of the commit */
    sha: string;
  };
}

/** @description request parameter type for repoListStatuses */
export interface RepoListStatusesOption {
  /**
   * @description
   *   type of sort
   */
  query?: {
    /**
        @description
          type of sort */
    sort?: GetReposOwnerRepoStatusesShaSort;
    /**
        @description
          type of state */
    state?: GetReposOwnerRepoStatusesShaState;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListStatuses */
export interface RepoListStatusesResponse {
  200: CommitStatusList;
  400: TsgError;
}

export type RepoListStatusesResponseSuccess = RepoListStatusesResponse[200];
/**
 * @description
 *   Get a commit's statuses
 * @tags repository
 * @produces application/json
 */
export const repoListStatuses = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/statuses/:sha";
  function request(
    option: RepoListStatusesOption & RequestParameters
  ): Promise<RepoListStatusesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListStatusesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateStatus */
export interface RepoCreateStatusOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          sha of the commit */
    sha: string;
  };
}

/** @description request parameter type for repoCreateStatus */
export interface RepoCreateStatusOption {
  body?: CreateStatusOption;
}

/** @description response type for repoCreateStatus */
export interface RepoCreateStatusResponse {
  201: CommitStatus;
  400: TsgError;
}

export type RepoCreateStatusResponseSuccess = RepoCreateStatusResponse[201];
/**
 * @description
 *   Create a commit status
 * @tags repository
 * @produces application/json
 */
export const repoCreateStatus = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/statuses/:sha";
  function request(
    option: RepoCreateStatusOption & RequestParameters
  ): Promise<RepoCreateStatusResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateStatusResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListSubscribers */
export interface RepoListSubscribersOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListSubscribers */
export interface RepoListSubscribersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListSubscribers */
export interface RepoListSubscribersResponse {
  200: UserList;
}

export type RepoListSubscribersResponseSuccess =
  RepoListSubscribersResponse[200];
/**
 * @description
 *   List a repo's watchers
 * @tags repository
 * @produces application/json
 */
export const repoListSubscribers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/subscribers";
  function request(
    option: RepoListSubscribersOption & RequestParameters
  ): Promise<RepoListSubscribersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListSubscribersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentCheckSubscription */
export interface UserCurrentCheckSubscriptionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for userCurrentCheckSubscription */
export interface UserCurrentCheckSubscriptionResponse {
  200: WatchInfo;
  /**
   * @description
   *   User is not watching this repo or repo do not exist
   */
  404: any;
}

export type UserCurrentCheckSubscriptionResponseSuccess =
  UserCurrentCheckSubscriptionResponse[200];
/**
 * @description
 *   Check if the current user is watching a repo
 * @tags repository
 */
export const userCurrentCheckSubscription = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/subscription";
  function request(
    option: UserCurrentCheckSubscriptionOption & RequestParameters
  ): Promise<UserCurrentCheckSubscriptionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentCheckSubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentPutSubscription */
export interface UserCurrentPutSubscriptionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for userCurrentPutSubscription */
export interface UserCurrentPutSubscriptionResponse {
  200: WatchInfo;
}

export type UserCurrentPutSubscriptionResponseSuccess =
  UserCurrentPutSubscriptionResponse[200];
/**
 * @description
 *   Watch a repo
 * @tags repository
 */
export const userCurrentPutSubscription = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/subscription";
  function request(
    option: UserCurrentPutSubscriptionOption & RequestParameters
  ): Promise<UserCurrentPutSubscriptionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentPutSubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentDeleteSubscription */
export interface UserCurrentDeleteSubscriptionOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for userCurrentDeleteSubscription */
export interface UserCurrentDeleteSubscriptionResponse {
  204: Empty;
}

export type UserCurrentDeleteSubscriptionResponseSuccess =
  UserCurrentDeleteSubscriptionResponse[204];
/**
 * @description
 *   Unwatch a repo
 * @tags repository
 */
export const userCurrentDeleteSubscription = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/subscription";
  function request(
    option: UserCurrentDeleteSubscriptionOption & RequestParameters
  ): Promise<UserCurrentDeleteSubscriptionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentDeleteSubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListTags */
export interface RepoListTagsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListTags */
export interface RepoListTagsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results, default maximum page size is 50 */
    limit?: number;
  };
}

/** @description response type for repoListTags */
export interface RepoListTagsResponse {
  200: TagList;
}

export type RepoListTagsResponseSuccess = RepoListTagsResponse[200];
/**
 * @description
 *   List a repository's tags
 * @tags repository
 * @produces application/json
 */
export const repoListTags = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/tags";
  function request(
    option: RepoListTagsOption & RequestParameters
  ): Promise<RepoListTagsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListTagsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateTag */
export interface RepoCreateTagOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateTag */
export interface RepoCreateTagOption {
  body?: CreateTagOption;
}

/** @description response type for repoCreateTag */
export interface RepoCreateTagResponse {
  200: Tag;
  404: NotFound;
  405: Empty;
  409: Conflict;
}

export type RepoCreateTagResponseSuccess = RepoCreateTagResponse[200];
/**
 * @description
 *   Create a new git tag in a repository
 * @tags repository
 * @produces application/json
 */
export const repoCreateTag = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/tags";
  function request(
    option: RepoCreateTagOption & RequestParameters
  ): Promise<RepoCreateTagResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateTagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetTag */
export interface RepoGetTagOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of tag */
    tag: string;
  };
}

/** @description response type for repoGetTag */
export interface RepoGetTagResponse {
  200: Tag;
  404: NotFound;
}

export type RepoGetTagResponseSuccess = RepoGetTagResponse[200];
/**
 * @description
 *   Get the tag of a repository by tag name
 * @tags repository
 * @produces application/json
 */
export const repoGetTag = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/tags/:tag";
  function request(
    option: RepoGetTagOption & RequestParameters
  ): Promise<RepoGetTagResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetTagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteTag */
export interface RepoDeleteTagOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of tag to delete */
    tag: string;
  };
}

/** @description response type for repoDeleteTag */
export interface RepoDeleteTagResponse {
  204: Empty;
  404: NotFound;
  405: Empty;
  409: Conflict;
}

export type RepoDeleteTagResponseSuccess = RepoDeleteTagResponse[204];
/**
 * @description
 *   Delete a repository's tag by name
 * @tags repository
 * @produces application/json
 */
export const repoDeleteTag = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/tags/:tag";
  function request(
    option: RepoDeleteTagOption & RequestParameters
  ): Promise<RepoDeleteTagResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteTagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListTeams */
export interface RepoListTeamsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for repoListTeams */
export interface RepoListTeamsResponse {
  200: TeamList;
}

export type RepoListTeamsResponseSuccess = RepoListTeamsResponse[200];
/**
 * @description
 *   List a repository's teams
 * @tags repository
 * @produces application/json
 */
export const repoListTeams = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/teams";
  function request(
    option: RepoListTeamsOption & RequestParameters
  ): Promise<RepoListTeamsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListTeamsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCheckTeam */
export interface RepoCheckTeamOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          team name */
    team: string;
  };
}

/** @description response type for repoCheckTeam */
export interface RepoCheckTeamResponse {
  200: Team;
  404: NotFound;
  405: TsgError;
}

export type RepoCheckTeamResponseSuccess = RepoCheckTeamResponse[200];
/**
 * @description
 *   Check if a team is assigned to a repository
 * @tags repository
 * @produces application/json
 */
export const repoCheckTeam = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/teams/:team";
  function request(
    option: RepoCheckTeamOption & RequestParameters
  ): Promise<RepoCheckTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCheckTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoAddTeam */
export interface RepoAddTeamOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          team name */
    team: string;
  };
}

/** @description response type for repoAddTeam */
export interface RepoAddTeamResponse {
  204: Empty;
  405: TsgError;
  422: ValidationError;
}

export type RepoAddTeamResponseSuccess = RepoAddTeamResponse[204];
/**
 * @description
 *   Add a team to a repository
 * @tags repository
 * @produces application/json
 */
export const repoAddTeam = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/teams/:team";
  function request(
    option: RepoAddTeamOption & RequestParameters
  ): Promise<RepoAddTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoAddTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteTeam */
export interface RepoDeleteTeamOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          team name */
    team: string;
  };
}

/** @description response type for repoDeleteTeam */
export interface RepoDeleteTeamResponse {
  204: Empty;
  405: TsgError;
  422: ValidationError;
}

export type RepoDeleteTeamResponseSuccess = RepoDeleteTeamResponse[204];
/**
 * @description
 *   Delete a team from a repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteTeam = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/teams/:team";
  function request(
    option: RepoDeleteTeamOption & RequestParameters
  ): Promise<RepoDeleteTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoTrackedTimes */
export interface RepoTrackedTimesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoTrackedTimes */
export interface RepoTrackedTimesOption {
  /**
   * @description
   *   optional filter by user (available for issue managers)
   */
  query?: {
    /**
        @description
          optional filter by user (available for issue managers) */
    user?: string;
    /**
        @description
          Only show times updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show times updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoTrackedTimes */
export interface RepoTrackedTimesResponse {
  200: TrackedTimeList;
  400: TsgError;
  403: Forbidden;
}

export type RepoTrackedTimesResponseSuccess = RepoTrackedTimesResponse[200];
/**
 * @description
 *   List a repo's tracked times
 * @tags repository
 * @produces application/json
 */
export const repoTrackedTimes = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/times";
  function request(
    option: RepoTrackedTimesOption & RequestParameters
  ): Promise<RepoTrackedTimesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoTrackedTimesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoListTopics */
export interface RepoListTopicsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoListTopics */
export interface RepoListTopicsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoListTopics */
export interface RepoListTopicsResponse {
  200: TopicNames;
}

export type RepoListTopicsResponseSuccess = RepoListTopicsResponse[200];
/**
 * @description
 *   Get list of topics that a repository has
 * @tags repository
 * @produces application/json
 */
export const repoListTopics = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/topics";
  function request(
    option: RepoListTopicsOption & RequestParameters
  ): Promise<RepoListTopicsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoListTopicsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoUpdateTopics */
export interface RepoUpdateTopicsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoUpdateTopics */
export interface RepoUpdateTopicsOption {
  body?: RepoTopicOptions;
}

/** @description response type for repoUpdateTopics */
export interface RepoUpdateTopicsResponse {
  204: Empty;
  422: InvalidTopicsError;
}

export type RepoUpdateTopicsResponseSuccess = RepoUpdateTopicsResponse[204];
/**
 * @description
 *   Replace list of topics for a repository
 * @tags repository
 * @produces application/json
 */
export const repoUpdateTopics = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/topics";
  function request(
    option: RepoUpdateTopicsOption & RequestParameters
  ): Promise<RepoUpdateTopicsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoUpdateTopicsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoAddTopic */
export interface RepoAddTopicOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of the topic to add */
    topic: string;
  };
}

/** @description response type for repoAddTopic */
export interface RepoAddTopicResponse {
  204: Empty;
  422: InvalidTopicsError;
}

export type RepoAddTopicResponseSuccess = RepoAddTopicResponse[204];
/**
 * @description
 *   Add a topic to a repository
 * @tags repository
 * @produces application/json
 */
export const repoAddTopic = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/repos/:owner/:repo/topics/:topic";
  function request(
    option: RepoAddTopicOption & RequestParameters
  ): Promise<RepoAddTopicResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoAddTopicResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteTopic */
export interface RepoDeleteTopicOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of the topic to delete */
    topic: string;
  };
}

/** @description response type for repoDeleteTopic */
export interface RepoDeleteTopicResponse {
  204: Empty;
  422: InvalidTopicsError;
}

export type RepoDeleteTopicResponseSuccess = RepoDeleteTopicResponse[204];
/**
 * @description
 *   Delete a topic from a repository
 * @tags repository
 * @produces application/json
 */
export const repoDeleteTopic = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/topics/:topic";
  function request(
    option: RepoDeleteTopicOption & RequestParameters
  ): Promise<RepoDeleteTopicResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteTopicResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoTransfer */
export interface RepoTransferOption {
  /**
   * @description
   *   owner of the repo to transfer
   */
  path: {
    /**
        @description
          owner of the repo to transfer */
    owner: string;
    /**
        @description
          name of the repo to transfer */
    repo: string;
  };
}

/** @description request parameter type for repoTransfer */
export interface RepoTransferOption {
  /**
   * @description
   *   Transfer Options
   */
  body: TransferRepoOption;
}

/** @description response type for repoTransfer */
export interface RepoTransferResponse {
  202: Repository;
  403: Forbidden;
  404: NotFound;
  422: ValidationError;
}

export type RepoTransferResponseSuccess = RepoTransferResponse[202];
/**
 * @description
 *   Transfer a repo ownership
 * @tags repository
 * @produces application/json
 */
export const repoTransfer = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/transfer";
  function request(
    option: RepoTransferOption & RequestParameters
  ): Promise<RepoTransferResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoTransferResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for acceptRepoTransfer */
export interface AcceptRepoTransferOption {
  /**
   * @description
   *   owner of the repo to transfer
   */
  path: {
    /**
        @description
          owner of the repo to transfer */
    owner: string;
    /**
        @description
          name of the repo to transfer */
    repo: string;
  };
}

/** @description response type for acceptRepoTransfer */
export interface AcceptRepoTransferResponse {
  202: Repository;
  403: Forbidden;
  404: NotFound;
}

export type AcceptRepoTransferResponseSuccess = AcceptRepoTransferResponse[202];
/**
 * @description
 *   Accept a repo transfer
 * @tags repository
 * @produces application/json
 */
export const acceptRepoTransfer = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/transfer/accept";
  function request(
    option: AcceptRepoTransferOption & RequestParameters
  ): Promise<AcceptRepoTransferResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<AcceptRepoTransferResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for rejectRepoTransfer */
export interface RejectRepoTransferOption {
  /**
   * @description
   *   owner of the repo to transfer
   */
  path: {
    /**
        @description
          owner of the repo to transfer */
    owner: string;
    /**
        @description
          name of the repo to transfer */
    repo: string;
  };
}

/** @description response type for rejectRepoTransfer */
export interface RejectRepoTransferResponse {
  200: Repository;
  403: Forbidden;
  404: NotFound;
}

export type RejectRepoTransferResponseSuccess = RejectRepoTransferResponse[200];
/**
 * @description
 *   Reject a repo transfer
 * @tags repository
 * @produces application/json
 */
export const rejectRepoTransfer = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/transfer/reject";
  function request(
    option: RejectRepoTransferOption & RequestParameters
  ): Promise<RejectRepoTransferResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RejectRepoTransferResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoCreateWikiPage */
export interface RepoCreateWikiPageOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoCreateWikiPage */
export interface RepoCreateWikiPageOption {
  body?: CreateWikiPageOptions;
}

/** @description response type for repoCreateWikiPage */
export interface RepoCreateWikiPageResponse {
  201: WikiPage;
  400: TsgError;
  403: Forbidden;
}

export type RepoCreateWikiPageResponseSuccess = RepoCreateWikiPageResponse[201];
/**
 * @description
 *   Create a wiki page
 * @tags repository
 * @consumes application/json
 */
export const repoCreateWikiPage = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:owner/:repo/wiki/new";
  function request(
    option: RepoCreateWikiPageOption & RequestParameters
  ): Promise<RepoCreateWikiPageResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoCreateWikiPageResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetWikiPage */
export interface RepoGetWikiPageOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of the page */
    pageName: string;
  };
}

/** @description response type for repoGetWikiPage */
export interface RepoGetWikiPageResponse {
  200: WikiPage;
  404: NotFound;
}

export type RepoGetWikiPageResponseSuccess = RepoGetWikiPageResponse[200];
/**
 * @description
 *   Get a wiki page
 * @tags repository
 * @produces application/json
 */
export const repoGetWikiPage = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/wiki/page/:pageName";
  function request(
    option: RepoGetWikiPageOption & RequestParameters
  ): Promise<RepoGetWikiPageResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetWikiPageResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoDeleteWikiPage */
export interface RepoDeleteWikiPageOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of the page */
    pageName: string;
  };
}

/** @description response type for repoDeleteWikiPage */
export interface RepoDeleteWikiPageResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type RepoDeleteWikiPageResponseSuccess = RepoDeleteWikiPageResponse[204];
/**
 * @description
 *   Delete a wiki page
 * @tags repository
 */
export const repoDeleteWikiPage = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/repos/:owner/:repo/wiki/page/:pageName";
  function request(
    option: RepoDeleteWikiPageOption & RequestParameters
  ): Promise<RepoDeleteWikiPageResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoDeleteWikiPageResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoEditWikiPage */
export interface RepoEditWikiPageOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of the page */
    pageName: string;
  };
}

/** @description request parameter type for repoEditWikiPage */
export interface RepoEditWikiPageOption {
  body?: CreateWikiPageOptions;
}

/** @description response type for repoEditWikiPage */
export interface RepoEditWikiPageResponse {
  200: WikiPage;
  400: TsgError;
  403: Forbidden;
}

export type RepoEditWikiPageResponseSuccess = RepoEditWikiPageResponse[200];
/**
 * @description
 *   Edit a wiki page
 * @tags repository
 * @consumes application/json
 */
export const repoEditWikiPage = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/repos/:owner/:repo/wiki/page/:pageName";
  function request(
    option: RepoEditWikiPageOption & RequestParameters
  ): Promise<RepoEditWikiPageResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoEditWikiPageResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetWikiPages */
export interface RepoGetWikiPagesOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description request parameter type for repoGetWikiPages */
export interface RepoGetWikiPagesOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for repoGetWikiPages */
export interface RepoGetWikiPagesResponse {
  200: WikiPageList;
  404: NotFound;
}

export type RepoGetWikiPagesResponseSuccess = RepoGetWikiPagesResponse[200];
/**
 * @description
 *   Get all wiki pages
 * @tags repository
 * @produces application/json
 */
export const repoGetWikiPages = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/wiki/pages";
  function request(
    option: RepoGetWikiPagesOption & RequestParameters
  ): Promise<RepoGetWikiPagesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetWikiPagesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetWikiPageRevisions */
export interface RepoGetWikiPageRevisionsOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          name of the page */
    pageName: string;
  };
}

/** @description request parameter type for repoGetWikiPageRevisions */
export interface RepoGetWikiPageRevisionsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
  };
}

/** @description response type for repoGetWikiPageRevisions */
export interface RepoGetWikiPageRevisionsResponse {
  200: WikiCommitList;
  404: NotFound;
}

export type RepoGetWikiPageRevisionsResponseSuccess =
  RepoGetWikiPageRevisionsResponse[200];
/**
 * @description
 *   Get revisions of a wiki page
 * @tags repository
 * @produces application/json
 */
export const repoGetWikiPageRevisions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repos/:owner/:repo/wiki/revisions/:pageName";
  function request(
    option: RepoGetWikiPageRevisionsOption & RequestParameters
  ): Promise<RepoGetWikiPageRevisionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetWikiPageRevisionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGenerate */
export interface RepoGenerateOption {
  /**
   * @description
   *   name of the template repository owner
   */
  path: {
    /**
        @description
          name of the template repository owner */
    template_owner: string;
    /**
        @description
          name of the template repository */
    template_repo: string;
  };
}

/** @description request parameter type for repoGenerate */
export interface RepoGenerateOption {
  body?: GenerateRepoOption;
}

/** @description response type for repoGenerate */
export interface RepoGenerateResponse {
  201: Repository;
  403: Forbidden;
  404: NotFound;
  /**
   * @description
   *   The repository with the same name already exists.
   */
  409: any;
  422: ValidationError;
}

export type RepoGenerateResponseSuccess = RepoGenerateResponse[201];
/**
 * @description
 *   Create a repository using a template
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const repoGenerate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/repos/:template_owner/:template_repo/generate";
  function request(
    option: RepoGenerateOption & RequestParameters
  ): Promise<RepoGenerateResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGenerateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for repoGetByID */
export interface RepoGetByIDOption {
  /**
   * @description
   *   id of the repo to get
   * @format int64
   */
  path: {
    /**
        @description
          id of the repo to get
        @format int64 */
    id: number;
  };
}

/** @description response type for repoGetByID */
export interface RepoGetByIDResponse {
  200: Repository;
}

export type RepoGetByIDResponseSuccess = RepoGetByIDResponse[200];
/**
 * @description
 *   Get a repository by id
 * @tags repository
 * @produces application/json
 */
export const repoGetByID = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/repositories/:id";
  function request(
    option: RepoGetByIDOption & RequestParameters
  ): Promise<RepoGetByIDResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<RepoGetByIDResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getGeneralAPISettings */
export interface GetGeneralAPISettingsResponse {
  200: GeneralAPISettings;
}

export type GetGeneralAPISettingsResponseSuccess =
  GetGeneralAPISettingsResponse[200];
/**
 * @description
 *   Get instance's global settings for api
 * @tags settings
 * @produces application/json
 */
export const getGeneralAPISettings = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/settings/api";
  function request(
    option?: RequestParameters
  ): Promise<GetGeneralAPISettingsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetGeneralAPISettingsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getGeneralAttachmentSettings */
export interface GetGeneralAttachmentSettingsResponse {
  200: GeneralAttachmentSettings;
}

export type GetGeneralAttachmentSettingsResponseSuccess =
  GetGeneralAttachmentSettingsResponse[200];
/**
 * @description
 *   Get instance's global settings for Attachment
 * @tags settings
 * @produces application/json
 */
export const getGeneralAttachmentSettings = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/settings/attachment";
  function request(
    option?: RequestParameters
  ): Promise<GetGeneralAttachmentSettingsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetGeneralAttachmentSettingsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getGeneralRepositorySettings */
export interface GetGeneralRepositorySettingsResponse {
  200: GeneralRepoSettings;
}

export type GetGeneralRepositorySettingsResponseSuccess =
  GetGeneralRepositorySettingsResponse[200];
/**
 * @description
 *   Get instance's global settings for repositories
 * @tags settings
 * @produces application/json
 */
export const getGeneralRepositorySettings = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/settings/repository";
  function request(
    option?: RequestParameters
  ): Promise<GetGeneralRepositorySettingsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetGeneralRepositorySettingsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getGeneralUISettings */
export interface GetGeneralUISettingsResponse {
  200: GeneralUISettings;
}

export type GetGeneralUISettingsResponseSuccess =
  GetGeneralUISettingsResponse[200];
/**
 * @description
 *   Get instance's global settings for ui
 * @tags settings
 * @produces application/json
 */
export const getGeneralUISettings = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/settings/ui";
  function request(
    option?: RequestParameters
  ): Promise<GetGeneralUISettingsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetGeneralUISettingsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getSigningKey */
export interface GetSigningKeyResponse {
  /**
   * @description
   *   GPG armored public key
   */
  200: string;
}

export type GetSigningKeyResponseSuccess = GetSigningKeyResponse[200];
/**
 * @description
 *   Get default signing-key.gpg
 * @tags miscellaneous
 * @produces text/plain
 */
export const getSigningKey = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/signing-key.gpg";
  function request(
    option?: RequestParameters
  ): Promise<GetSigningKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetSigningKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgGetTeam */
export interface OrgGetTeamOption {
  /**
   * @description
   *   id of the team to get
   * @format int64
   */
  path: {
    /**
        @description
          id of the team to get
        @format int64 */
    id: number;
  };
}

/** @description response type for orgGetTeam */
export interface OrgGetTeamResponse {
  200: Team;
}

export type OrgGetTeamResponseSuccess = OrgGetTeamResponse[200];
/**
 * @description
 *   Get a team
 * @tags organization
 * @produces application/json
 */
export const orgGetTeam = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/teams/:id";
  function request(
    option: OrgGetTeamOption & RequestParameters
  ): Promise<OrgGetTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgGetTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgDeleteTeam */
export interface OrgDeleteTeamOption {
  /**
   * @description
   *   id of the team to delete
   * @format int64
   */
  path: {
    /**
        @description
          id of the team to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for orgDeleteTeam */
export interface OrgDeleteTeamResponse {
  /**
   * @description
   *   team deleted
   */
  204: any;
}

export type OrgDeleteTeamResponseSuccess = OrgDeleteTeamResponse[204];
/**
 * @description
 *   Delete a team
 * @tags organization
 */
export const orgDeleteTeam = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/teams/:id";
  function request(
    option: OrgDeleteTeamOption & RequestParameters
  ): Promise<OrgDeleteTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgDeleteTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgEditTeam */
export interface OrgEditTeamOption {
  /**
   * @description
   *   id of the team to edit
   */
  path: {
    /**
        @description
          id of the team to edit */
    id: number;
  };
}

/** @description request parameter type for orgEditTeam */
export interface OrgEditTeamOption {
  body?: EditTeamOption;
}

/** @description response type for orgEditTeam */
export interface OrgEditTeamResponse {
  200: Team;
}

export type OrgEditTeamResponseSuccess = OrgEditTeamResponse[200];
/**
 * @description
 *   Edit a team
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgEditTeam = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/teams/:id";
  function request(
    option: OrgEditTeamOption & RequestParameters
  ): Promise<OrgEditTeamResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgEditTeamResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListTeamMembers */
export interface OrgListTeamMembersOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for orgListTeamMembers */
export interface OrgListTeamMembersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListTeamMembers */
export interface OrgListTeamMembersResponse {
  200: UserList;
}

export type OrgListTeamMembersResponseSuccess = OrgListTeamMembersResponse[200];
/**
 * @description
 *   List a team's members
 * @tags organization
 * @produces application/json
 */
export const orgListTeamMembers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/teams/:id/members";
  function request(
    option: OrgListTeamMembersOption & RequestParameters
  ): Promise<OrgListTeamMembersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListTeamMembersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListTeamMember */
export interface OrgListTeamMemberOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
    /**
        @description
          username of the member to list */
    username: string;
  };
}

/** @description response type for orgListTeamMember */
export interface OrgListTeamMemberResponse {
  200: User;
  404: NotFound;
}

export type OrgListTeamMemberResponseSuccess = OrgListTeamMemberResponse[200];
/**
 * @description
 *   List a particular member of team
 * @tags organization
 * @produces application/json
 */
export const orgListTeamMember = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/teams/:id/members/:username";
  function request(
    option: OrgListTeamMemberOption & RequestParameters
  ): Promise<OrgListTeamMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListTeamMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgAddTeamMember */
export interface OrgAddTeamMemberOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
    /**
        @description
          username of the user to add */
    username: string;
  };
}

/** @description response type for orgAddTeamMember */
export interface OrgAddTeamMemberResponse {
  204: Empty;
  404: NotFound;
}

export type OrgAddTeamMemberResponseSuccess = OrgAddTeamMemberResponse[204];
/**
 * @description
 *   Add a team member
 * @tags organization
 * @produces application/json
 */
export const orgAddTeamMember = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/teams/:id/members/:username";
  function request(
    option: OrgAddTeamMemberOption & RequestParameters
  ): Promise<OrgAddTeamMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgAddTeamMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgRemoveTeamMember */
export interface OrgRemoveTeamMemberOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
    /**
        @description
          username of the user to remove */
    username: string;
  };
}

/** @description response type for orgRemoveTeamMember */
export interface OrgRemoveTeamMemberResponse {
  204: Empty;
  404: NotFound;
}

export type OrgRemoveTeamMemberResponseSuccess =
  OrgRemoveTeamMemberResponse[204];
/**
 * @description
 *   Remove a team member
 * @tags organization
 * @produces application/json
 */
export const orgRemoveTeamMember = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/teams/:id/members/:username";
  function request(
    option: OrgRemoveTeamMemberOption & RequestParameters
  ): Promise<OrgRemoveTeamMemberResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgRemoveTeamMemberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListTeamRepos */
export interface OrgListTeamReposOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for orgListTeamRepos */
export interface OrgListTeamReposOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListTeamRepos */
export interface OrgListTeamReposResponse {
  200: RepositoryList;
}

export type OrgListTeamReposResponseSuccess = OrgListTeamReposResponse[200];
/**
 * @description
 *   List a team's repos
 * @tags organization
 * @produces application/json
 */
export const orgListTeamRepos = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/teams/:id/repos";
  function request(
    option: OrgListTeamReposOption & RequestParameters
  ): Promise<OrgListTeamReposResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListTeamReposResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgAddTeamRepository */
export interface OrgAddTeamRepositoryOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
    /**
        @description
          organization that owns the repo to add */
    org: string;
    /**
        @description
          name of the repo to add */
    repo: string;
  };
}

/** @description response type for orgAddTeamRepository */
export interface OrgAddTeamRepositoryResponse {
  204: Empty;
  403: Forbidden;
}

export type OrgAddTeamRepositoryResponseSuccess =
  OrgAddTeamRepositoryResponse[204];
/**
 * @description
 *   Add a repository to a team
 * @tags organization
 * @produces application/json
 */
export const orgAddTeamRepository = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/teams/:id/repos/:org/:repo";
  function request(
    option: OrgAddTeamRepositoryOption & RequestParameters
  ): Promise<OrgAddTeamRepositoryResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgAddTeamRepositoryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgRemoveTeamRepository */
export interface OrgRemoveTeamRepositoryOption {
  /**
   * @description
   *   id of the team
   * @format int64
   */
  path: {
    /**
        @description
          id of the team
        @format int64 */
    id: number;
    /**
        @description
          organization that owns the repo to remove */
    org: string;
    /**
        @description
          name of the repo to remove */
    repo: string;
  };
}

/** @description response type for orgRemoveTeamRepository */
export interface OrgRemoveTeamRepositoryResponse {
  204: Empty;
  403: Forbidden;
}

export type OrgRemoveTeamRepositoryResponseSuccess =
  OrgRemoveTeamRepositoryResponse[204];
/**
 * @description
 *   This does not delete the repository, it only removes the repository from the team.
 *   Remove a repository from a team
 * @tags organization
 * @produces application/json
 */
export const orgRemoveTeamRepository = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/teams/:id/repos/:org/:repo";
  function request(
    option: OrgRemoveTeamRepositoryOption & RequestParameters
  ): Promise<OrgRemoveTeamRepositoryResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgRemoveTeamRepositoryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for topicSearch */
export interface TopicSearchOption {
  /**
   * @description
   *   keywords to search
   */
  query: {
    /**
        @description
          keywords to search */
    q: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for topicSearch */
export interface TopicSearchResponse {
  200: TopicListResponse;
  403: Forbidden;
}

export type TopicSearchResponseSuccess = TopicSearchResponse[200];
/**
 * @description
 *   search topics via keyword
 * @tags repository
 * @produces application/json
 */
export const topicSearch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/topics/search";
  function request(
    option: TopicSearchOption & RequestParameters
  ): Promise<TopicSearchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<TopicSearchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for userGetCurrent */
export interface UserGetCurrentResponse {
  200: User;
}

export type UserGetCurrentResponseSuccess = UserGetCurrentResponse[200];
/**
 * @description
 *   Get the authenticated user
 * @tags user
 * @produces application/json
 */
export const userGetCurrent = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user";
  function request(
    option?: RequestParameters
  ): Promise<UserGetCurrentResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetCurrentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userGetOauth2Application */
export interface UserGetOauth2ApplicationOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userGetOauth2Application */
export interface UserGetOauth2ApplicationResponse {
  200: OAuthApplicationList;
}

export type UserGetOauth2ApplicationResponseSuccess =
  UserGetOauth2ApplicationResponse[200];
/**
 * @description
 *   List the authenticated user's oauth2 applications
 * @tags user
 * @produces application/json
 */
export const userGetOauth2Application = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/applications/oauth2";
  function request(
    option?: UserGetOauth2ApplicationOption & RequestParameters
  ): Promise<UserGetOauth2ApplicationResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetOauth2ApplicationResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCreateOAuth2Application */
export interface UserCreateOAuth2ApplicationOption {
  body: CreateOAuthApplicationOptions;
}

/** @description response type for userCreateOAuth2Application */
export interface UserCreateOAuth2ApplicationResponse {
  201: OAuthApplication;
  400: TsgError;
}

export type UserCreateOAuth2ApplicationResponseSuccess =
  UserCreateOAuth2ApplicationResponse[201];
/**
 * @description
 *   creates a new OAuth2 application
 * @tags user
 * @produces application/json
 */
export const userCreateOAuth2Application = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/applications/oauth2";
  function request(
    option: UserCreateOAuth2ApplicationOption & RequestParameters
  ): Promise<UserCreateOAuth2ApplicationResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCreateOAuth2ApplicationResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userGetOAuth2Application */
export interface UserGetOAuth2ApplicationOption {
  /**
   * @description
   *   Application ID to be found
   * @format int64
   */
  path: {
    /**
        @description
          Application ID to be found
        @format int64 */
    id: number;
  };
}

/** @description response type for userGetOAuth2Application */
export interface UserGetOAuth2ApplicationResponse {
  200: OAuthApplication;
  404: NotFound;
}

export type UserGetOAuth2ApplicationResponseSuccess =
  UserGetOAuth2ApplicationResponse[200];
/**
 * @description
 *   get an OAuth2 Application
 * @tags user
 * @produces application/json
 */
export const userGetOAuth2Application = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/applications/oauth2/:id";
  function request(
    option: UserGetOAuth2ApplicationOption & RequestParameters
  ): Promise<UserGetOAuth2ApplicationResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetOAuth2ApplicationResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userDeleteOAuth2Application */
export interface UserDeleteOAuth2ApplicationOption {
  /**
   * @description
   *   token to be deleted
   * @format int64
   */
  path: {
    /**
        @description
          token to be deleted
        @format int64 */
    id: number;
  };
}

/** @description response type for userDeleteOAuth2Application */
export interface UserDeleteOAuth2ApplicationResponse {
  204: Empty;
  404: NotFound;
}

export type UserDeleteOAuth2ApplicationResponseSuccess =
  UserDeleteOAuth2ApplicationResponse[204];
/**
 * @description
 *   delete an OAuth2 Application
 * @tags user
 * @produces application/json
 */
export const userDeleteOAuth2Application = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/user/applications/oauth2/:id";
  function request(
    option: UserDeleteOAuth2ApplicationOption & RequestParameters
  ): Promise<UserDeleteOAuth2ApplicationResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserDeleteOAuth2ApplicationResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userUpdateOAuth2Application */
export interface UserUpdateOAuth2ApplicationOption {
  /**
   * @description
   *   application to be updated
   * @format int64
   */
  path: {
    /**
        @description
          application to be updated
        @format int64 */
    id: number;
  };
}

/** @description request parameter type for userUpdateOAuth2Application */
export interface UserUpdateOAuth2ApplicationOption {
  body: CreateOAuthApplicationOptions;
}

/** @description response type for userUpdateOAuth2Application */
export interface UserUpdateOAuth2ApplicationResponse {
  200: OAuthApplication;
  404: NotFound;
}

export type UserUpdateOAuth2ApplicationResponseSuccess =
  UserUpdateOAuth2ApplicationResponse[200];
/**
 * @description
 *   update an OAuth2 Application, this includes regenerating the client secret
 * @tags user
 * @produces application/json
 */
export const userUpdateOAuth2Application = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/user/applications/oauth2/:id";
  function request(
    option: UserUpdateOAuth2ApplicationOption & RequestParameters
  ): Promise<UserUpdateOAuth2ApplicationResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserUpdateOAuth2ApplicationResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for userListEmails */
export interface UserListEmailsResponse {
  200: EmailList;
}

export type UserListEmailsResponseSuccess = UserListEmailsResponse[200];
/**
 * @description
 *   List the authenticated user's email addresses
 * @tags user
 * @produces application/json
 */
export const userListEmails = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/emails";
  function request(
    option?: RequestParameters
  ): Promise<UserListEmailsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListEmailsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userAddEmail */
export interface UserAddEmailOption {
  body?: CreateEmailOption;
}

/** @description response type for userAddEmail */
export interface UserAddEmailResponse {
  201: EmailList;
  422: ValidationError;
}

export type UserAddEmailResponseSuccess = UserAddEmailResponse[201];
/**
 * @description
 *   Add email addresses
 * @tags user
 * @produces application/json
 */
export const userAddEmail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/emails";
  function request(
    option?: UserAddEmailOption & RequestParameters
  ): Promise<UserAddEmailResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserAddEmailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userDeleteEmail */
export interface UserDeleteEmailOption {
  body?: DeleteEmailOption;
}

/** @description response type for userDeleteEmail */
export interface UserDeleteEmailResponse {
  204: Empty;
  404: NotFound;
}

export type UserDeleteEmailResponseSuccess = UserDeleteEmailResponse[204];
/**
 * @description
 *   Delete email addresses
 * @tags user
 * @produces application/json
 */
export const userDeleteEmail = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/user/emails";
  function request(
    option?: UserDeleteEmailOption & RequestParameters
  ): Promise<UserDeleteEmailResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserDeleteEmailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListFollowers */
export interface UserCurrentListFollowersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListFollowers */
export interface UserCurrentListFollowersResponse {
  200: UserList;
}

export type UserCurrentListFollowersResponseSuccess =
  UserCurrentListFollowersResponse[200];
/**
 * @description
 *   List the authenticated user's followers
 * @tags user
 * @produces application/json
 */
export const userCurrentListFollowers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/followers";
  function request(
    option?: UserCurrentListFollowersOption & RequestParameters
  ): Promise<UserCurrentListFollowersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListFollowersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListFollowing */
export interface UserCurrentListFollowingOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListFollowing */
export interface UserCurrentListFollowingResponse {
  200: UserList;
}

export type UserCurrentListFollowingResponseSuccess =
  UserCurrentListFollowingResponse[200];
/**
 * @description
 *   List the users that the authenticated user is following
 * @tags user
 * @produces application/json
 */
export const userCurrentListFollowing = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/following";
  function request(
    option?: UserCurrentListFollowingOption & RequestParameters
  ): Promise<UserCurrentListFollowingResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListFollowingResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentCheckFollowing */
export interface UserCurrentCheckFollowingOption {
  /**
   * @description
   *   username of followed user
   */
  path: {
    /**
        @description
          username of followed user */
    username: string;
  };
}

/** @description response type for userCurrentCheckFollowing */
export interface UserCurrentCheckFollowingResponse {
  204: Empty;
  404: NotFound;
}

export type UserCurrentCheckFollowingResponseSuccess =
  UserCurrentCheckFollowingResponse[204];
/**
 * @description
 *   Check whether a user is followed by the authenticated user
 * @tags user
 */
export const userCurrentCheckFollowing = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/following/:username";
  function request(
    option: UserCurrentCheckFollowingOption & RequestParameters
  ): Promise<UserCurrentCheckFollowingResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentCheckFollowingResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentPutFollow */
export interface UserCurrentPutFollowOption {
  /**
   * @description
   *   username of user to follow
   */
  path: {
    /**
        @description
          username of user to follow */
    username: string;
  };
}

/** @description response type for userCurrentPutFollow */
export interface UserCurrentPutFollowResponse {
  204: Empty;
}

export type UserCurrentPutFollowResponseSuccess =
  UserCurrentPutFollowResponse[204];
/**
 * @description
 *   Follow a user
 * @tags user
 */
export const userCurrentPutFollow = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/user/following/:username";
  function request(
    option: UserCurrentPutFollowOption & RequestParameters
  ): Promise<UserCurrentPutFollowResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentPutFollowResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentDeleteFollow */
export interface UserCurrentDeleteFollowOption {
  /**
   * @description
   *   username of user to unfollow
   */
  path: {
    /**
        @description
          username of user to unfollow */
    username: string;
  };
}

/** @description response type for userCurrentDeleteFollow */
export interface UserCurrentDeleteFollowResponse {
  204: Empty;
}

export type UserCurrentDeleteFollowResponseSuccess =
  UserCurrentDeleteFollowResponse[204];
/**
 * @description
 *   Unfollow a user
 * @tags user
 */
export const userCurrentDeleteFollow = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/user/following/:username";
  function request(
    option: UserCurrentDeleteFollowOption & RequestParameters
  ): Promise<UserCurrentDeleteFollowResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentDeleteFollowResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getVerificationToken */
export interface GetVerificationTokenResponse {
  200: TsgString;
  404: NotFound;
}

export type GetVerificationTokenResponseSuccess =
  GetVerificationTokenResponse[200];
/**
 * @description
 *   Get a Token to verify
 * @tags user
 * @produces text/plain
 */
export const getVerificationToken = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/gpg_key_token";
  function request(
    option?: RequestParameters
  ): Promise<GetVerificationTokenResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetVerificationTokenResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for userVerifyGPGKey */
export interface UserVerifyGPGKeyResponse {
  201: GPGKey;
  404: NotFound;
  422: ValidationError;
}

export type UserVerifyGPGKeyResponseSuccess = UserVerifyGPGKeyResponse[201];
/**
 * @description
 *   Verify a GPG key
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const userVerifyGPGKey = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/gpg_key_verify";
  function request(
    option?: RequestParameters
  ): Promise<UserVerifyGPGKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserVerifyGPGKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListGPGKeys */
export interface UserCurrentListGPGKeysOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListGPGKeys */
export interface UserCurrentListGPGKeysResponse {
  200: GPGKeyList;
}

export type UserCurrentListGPGKeysResponseSuccess =
  UserCurrentListGPGKeysResponse[200];
/**
 * @description
 *   List the authenticated user's GPG keys
 * @tags user
 * @produces application/json
 */
export const userCurrentListGPGKeys = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/gpg_keys";
  function request(
    option?: UserCurrentListGPGKeysOption & RequestParameters
  ): Promise<UserCurrentListGPGKeysResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListGPGKeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentPostGPGKey */
export interface UserCurrentPostGPGKeyOption {
  body?: {
    Form?: CreateGPGKeyOption;
  };
}

/** @description response type for userCurrentPostGPGKey */
export interface UserCurrentPostGPGKeyResponse {
  201: GPGKey;
  404: NotFound;
  422: ValidationError;
}

export type UserCurrentPostGPGKeyResponseSuccess =
  UserCurrentPostGPGKeyResponse[201];
/**
 * @description
 *   Create a GPG key
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const userCurrentPostGPGKey = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/gpg_keys";
  function request(
    option?: UserCurrentPostGPGKeyOption & RequestParameters
  ): Promise<UserCurrentPostGPGKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentPostGPGKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentGetGPGKey */
export interface UserCurrentGetGPGKeyOption {
  /**
   * @description
   *   id of key to get
   * @format int64
   */
  path: {
    /**
        @description
          id of key to get
        @format int64 */
    id: number;
  };
}

/** @description response type for userCurrentGetGPGKey */
export interface UserCurrentGetGPGKeyResponse {
  200: GPGKey;
  404: NotFound;
}

export type UserCurrentGetGPGKeyResponseSuccess =
  UserCurrentGetGPGKeyResponse[200];
/**
 * @description
 *   Get a GPG key
 * @tags user
 * @produces application/json
 */
export const userCurrentGetGPGKey = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/gpg_keys/:id";
  function request(
    option: UserCurrentGetGPGKeyOption & RequestParameters
  ): Promise<UserCurrentGetGPGKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentGetGPGKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentDeleteGPGKey */
export interface UserCurrentDeleteGPGKeyOption {
  /**
   * @description
   *   id of key to delete
   * @format int64
   */
  path: {
    /**
        @description
          id of key to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for userCurrentDeleteGPGKey */
export interface UserCurrentDeleteGPGKeyResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type UserCurrentDeleteGPGKeyResponseSuccess =
  UserCurrentDeleteGPGKeyResponse[204];
/**
 * @description
 *   Remove a GPG key
 * @tags user
 * @produces application/json
 */
export const userCurrentDeleteGPGKey = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/user/gpg_keys/:id";
  function request(
    option: UserCurrentDeleteGPGKeyOption & RequestParameters
  ): Promise<UserCurrentDeleteGPGKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentDeleteGPGKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListKeys */
export interface UserCurrentListKeysOption {
  /**
   * @description
   *   fingerprint of the key
   */
  query?: {
    /**
        @description
          fingerprint of the key */
    fingerprint?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListKeys */
export interface UserCurrentListKeysResponse {
  200: PublicKeyList;
}

export type UserCurrentListKeysResponseSuccess =
  UserCurrentListKeysResponse[200];
/**
 * @description
 *   List the authenticated user's public keys
 * @tags user
 * @produces application/json
 */
export const userCurrentListKeys = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/keys";
  function request(
    option?: UserCurrentListKeysOption & RequestParameters
  ): Promise<UserCurrentListKeysResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListKeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentPostKey */
export interface UserCurrentPostKeyOption {
  body?: CreateKeyOption;
}

/** @description response type for userCurrentPostKey */
export interface UserCurrentPostKeyResponse {
  201: PublicKey;
  422: ValidationError;
}

export type UserCurrentPostKeyResponseSuccess = UserCurrentPostKeyResponse[201];
/**
 * @description
 *   Create a public key
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const userCurrentPostKey = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/keys";
  function request(
    option?: UserCurrentPostKeyOption & RequestParameters
  ): Promise<UserCurrentPostKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentPostKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentGetKey */
export interface UserCurrentGetKeyOption {
  /**
   * @description
   *   id of key to get
   * @format int64
   */
  path: {
    /**
        @description
          id of key to get
        @format int64 */
    id: number;
  };
}

/** @description response type for userCurrentGetKey */
export interface UserCurrentGetKeyResponse {
  200: PublicKey;
  404: NotFound;
}

export type UserCurrentGetKeyResponseSuccess = UserCurrentGetKeyResponse[200];
/**
 * @description
 *   Get a public key
 * @tags user
 * @produces application/json
 */
export const userCurrentGetKey = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/keys/:id";
  function request(
    option: UserCurrentGetKeyOption & RequestParameters
  ): Promise<UserCurrentGetKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentGetKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentDeleteKey */
export interface UserCurrentDeleteKeyOption {
  /**
   * @description
   *   id of key to delete
   * @format int64
   */
  path: {
    /**
        @description
          id of key to delete
        @format int64 */
    id: number;
  };
}

/** @description response type for userCurrentDeleteKey */
export interface UserCurrentDeleteKeyResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type UserCurrentDeleteKeyResponseSuccess =
  UserCurrentDeleteKeyResponse[204];
/**
 * @description
 *   Delete a public key
 * @tags user
 * @produces application/json
 */
export const userCurrentDeleteKey = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/user/keys/:id";
  function request(
    option: UserCurrentDeleteKeyOption & RequestParameters
  ): Promise<UserCurrentDeleteKeyResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentDeleteKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListCurrentUserOrgs */
export interface OrgListCurrentUserOrgsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListCurrentUserOrgs */
export interface OrgListCurrentUserOrgsResponse {
  200: OrganizationList;
}

export type OrgListCurrentUserOrgsResponseSuccess =
  OrgListCurrentUserOrgsResponse[200];
/**
 * @description
 *   List the current user's organizations
 * @tags organization
 * @produces application/json
 */
export const orgListCurrentUserOrgs = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/orgs";
  function request(
    option?: OrgListCurrentUserOrgsOption & RequestParameters
  ): Promise<OrgListCurrentUserOrgsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListCurrentUserOrgsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListRepos */
export interface UserCurrentListReposOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListRepos */
export interface UserCurrentListReposResponse {
  200: RepositoryList;
}

export type UserCurrentListReposResponseSuccess =
  UserCurrentListReposResponse[200];
/**
 * @description
 *   List the repos that the authenticated user owns
 * @tags user
 * @produces application/json
 */
export const userCurrentListRepos = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/repos";
  function request(
    option?: UserCurrentListReposOption & RequestParameters
  ): Promise<UserCurrentListReposResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListReposResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for createCurrentUserRepo */
export interface CreateCurrentUserRepoOption {
  body?: CreateRepoOption;
}

/** @description response type for createCurrentUserRepo */
export interface CreateCurrentUserRepoResponse {
  201: Repository;
  /**
   * @description
   *   The repository with the same name already exists.
   */
  409: any;
  422: ValidationError;
}

export type CreateCurrentUserRepoResponseSuccess =
  CreateCurrentUserRepoResponse[201];
/**
 * @description
 *   Create a repository
 * @tags repository,user
 * @produces application/json
 * @consumes application/json
 */
export const createCurrentUserRepo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/user/repos";
  function request(
    option?: CreateCurrentUserRepoOption & RequestParameters
  ): Promise<CreateCurrentUserRepoResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<CreateCurrentUserRepoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getUserSettings */
export interface GetUserSettingsResponse {
  200: UserSettings;
}

export type GetUserSettingsResponseSuccess = GetUserSettingsResponse[200];
/**
 * @description
 *   Get user settings
 * @tags user
 * @produces application/json
 */
export const getUserSettings = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/settings";
  function request(
    option?: RequestParameters
  ): Promise<GetUserSettingsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetUserSettingsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for updateUserSettings */
export interface UpdateUserSettingsOption {
  body?: UserSettingsOptions;
}

/** @description response type for updateUserSettings */
export interface UpdateUserSettingsResponse {
  200: UserSettings;
}

export type UpdateUserSettingsResponseSuccess = UpdateUserSettingsResponse[200];
/**
 * @description
 *   Update user settings
 * @tags user
 * @produces application/json
 */
export const updateUserSettings = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/api/v1/user/settings";
  function request(
    option?: UpdateUserSettingsOption & RequestParameters
  ): Promise<UpdateUserSettingsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UpdateUserSettingsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListStarred */
export interface UserCurrentListStarredOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListStarred */
export interface UserCurrentListStarredResponse {
  200: RepositoryList;
}

export type UserCurrentListStarredResponseSuccess =
  UserCurrentListStarredResponse[200];
/**
 * @description
 *   The repos that the authenticated user has starred
 * @tags user
 * @produces application/json
 */
export const userCurrentListStarred = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/starred";
  function request(
    option?: UserCurrentListStarredOption & RequestParameters
  ): Promise<UserCurrentListStarredResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListStarredResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentCheckStarring */
export interface UserCurrentCheckStarringOption {
  /**
   * @description
   *   owner of the repo
   */
  path: {
    /**
        @description
          owner of the repo */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
  };
}

/** @description response type for userCurrentCheckStarring */
export interface UserCurrentCheckStarringResponse {
  204: Empty;
  404: NotFound;
}

export type UserCurrentCheckStarringResponseSuccess =
  UserCurrentCheckStarringResponse[204];
/**
 * @description
 *   Whether the authenticated is starring the repo
 * @tags user
 */
export const userCurrentCheckStarring = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/starred/:owner/:repo";
  function request(
    option: UserCurrentCheckStarringOption & RequestParameters
  ): Promise<UserCurrentCheckStarringResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentCheckStarringResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentPutStar */
export interface UserCurrentPutStarOption {
  /**
   * @description
   *   owner of the repo to star
   */
  path: {
    /**
        @description
          owner of the repo to star */
    owner: string;
    /**
        @description
          name of the repo to star */
    repo: string;
  };
}

/** @description response type for userCurrentPutStar */
export interface UserCurrentPutStarResponse {
  204: Empty;
}

export type UserCurrentPutStarResponseSuccess = UserCurrentPutStarResponse[204];
/**
 * @description
 *   Star the given repo
 * @tags user
 */
export const userCurrentPutStar = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/api/v1/user/starred/:owner/:repo";
  function request(
    option: UserCurrentPutStarOption & RequestParameters
  ): Promise<UserCurrentPutStarResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentPutStarResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentDeleteStar */
export interface UserCurrentDeleteStarOption {
  /**
   * @description
   *   owner of the repo to unstar
   */
  path: {
    /**
        @description
          owner of the repo to unstar */
    owner: string;
    /**
        @description
          name of the repo to unstar */
    repo: string;
  };
}

/** @description response type for userCurrentDeleteStar */
export interface UserCurrentDeleteStarResponse {
  204: Empty;
}

export type UserCurrentDeleteStarResponseSuccess =
  UserCurrentDeleteStarResponse[204];
/**
 * @description
 *   Unstar the given repo
 * @tags user
 */
export const userCurrentDeleteStar = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/user/starred/:owner/:repo";
  function request(
    option: UserCurrentDeleteStarOption & RequestParameters
  ): Promise<UserCurrentDeleteStarResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentDeleteStarResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userGetStopWatches */
export interface UserGetStopWatchesOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userGetStopWatches */
export interface UserGetStopWatchesResponse {
  200: StopWatchList;
}

export type UserGetStopWatchesResponseSuccess = UserGetStopWatchesResponse[200];
/**
 * @description
 *   Get list of all existing stopwatches
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const userGetStopWatches = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/stopwatches";
  function request(
    option?: UserGetStopWatchesOption & RequestParameters
  ): Promise<UserGetStopWatchesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetStopWatchesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentListSubscriptions */
export interface UserCurrentListSubscriptionsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userCurrentListSubscriptions */
export interface UserCurrentListSubscriptionsResponse {
  200: RepositoryList;
}

export type UserCurrentListSubscriptionsResponseSuccess =
  UserCurrentListSubscriptionsResponse[200];
/**
 * @description
 *   List repositories watched by the authenticated user
 * @tags user
 * @produces application/json
 */
export const userCurrentListSubscriptions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/subscriptions";
  function request(
    option?: UserCurrentListSubscriptionsOption & RequestParameters
  ): Promise<UserCurrentListSubscriptionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentListSubscriptionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListTeams */
export interface UserListTeamsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListTeams */
export interface UserListTeamsResponse {
  200: TeamList;
}

export type UserListTeamsResponseSuccess = UserListTeamsResponse[200];
/**
 * @description
 *   List all the teams a user belongs to
 * @tags user
 * @produces application/json
 */
export const userListTeams = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/teams";
  function request(
    option?: UserListTeamsOption & RequestParameters
  ): Promise<UserListTeamsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListTeamsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCurrentTrackedTimes */
export interface UserCurrentTrackedTimesOption {
  /**
   * @description
   *   Only show times updated after the given time. This is a timestamp in RFC 3339 format
   * @format date-time
   */
  query?: {
    /**
        @description
          Only show times updated after the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    since?: string;
    /**
        @description
          Only show times updated before the given time. This is a timestamp in RFC 3339 format
        @format date-time */
    before?: string;
  };
}

/** @description response type for userCurrentTrackedTimes */
export interface UserCurrentTrackedTimesResponse {
  200: TrackedTimeList;
}

export type UserCurrentTrackedTimesResponseSuccess =
  UserCurrentTrackedTimesResponse[200];
/**
 * @description
 *   List the current user's tracked times
 * @tags user
 * @produces application/json
 */
export const userCurrentTrackedTimes = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/user/times";
  function request(
    option?: UserCurrentTrackedTimesOption & RequestParameters
  ): Promise<UserCurrentTrackedTimesResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCurrentTrackedTimesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userSearch */
export interface UserSearchOption {
  /**
   * @description
   *   keyword
   */
  query?: {
    /**
        @description
          keyword */
    q?: string;
    /**
        @description
          ID of the user to search for
        @format int64 */
    uid?: number;
    /**
        @description
          If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang's are ORed. */
    lang?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userSearch */
export interface UserSearchResponse {
  /**
   * @description
   *   SearchResults of a successful search
   */
  200: {
    data?: Array<User>;
    ok?: boolean;
  };
}

export type UserSearchResponseSuccess = UserSearchResponse[200];
/**
 * @description
 *   Search for users
 * @tags user
 * @produces application/json
 */
export const userSearch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/search";
  function request(
    option?: UserSearchOption & RequestParameters
  ): Promise<UserSearchResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserSearchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCheckFollowing */
export interface UserCheckFollowingOption {
  /**
   * @description
   *   username of following user
   */
  path: {
    /**
        @description
          username of following user */
    follower: string;
    /**
        @description
          username of followed user */
    followee: string;
  };
}

/** @description response type for userCheckFollowing */
export interface UserCheckFollowingResponse {
  204: Empty;
  404: NotFound;
}

export type UserCheckFollowingResponseSuccess = UserCheckFollowingResponse[204];
/**
 * @description
 *   Check if one user is following another user
 * @tags user
 */
export const userCheckFollowing = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:follower/following/:followee";
  function request(
    option: UserCheckFollowingOption & RequestParameters
  ): Promise<UserCheckFollowingResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCheckFollowingResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userGet */
export interface UserGetOption {
  /**
   * @description
   *   username of user to get
   */
  path: {
    /**
        @description
          username of user to get */
    username: string;
  };
}

/** @description response type for userGet */
export interface UserGetResponse {
  200: User;
  404: NotFound;
}

export type UserGetResponseSuccess = UserGetResponse[200];
/**
 * @description
 *   Get a user
 * @tags user
 * @produces application/json
 */
export const userGet = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username";
  function request(
    option: UserGetOption & RequestParameters
  ): Promise<UserGetResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListFollowers */
export interface UserListFollowersOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userListFollowers */
export interface UserListFollowersOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListFollowers */
export interface UserListFollowersResponse {
  200: UserList;
}

export type UserListFollowersResponseSuccess = UserListFollowersResponse[200];
/**
 * @description
 *   List the given user's followers
 * @tags user
 * @produces application/json
 */
export const userListFollowers = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/followers";
  function request(
    option: UserListFollowersOption & RequestParameters
  ): Promise<UserListFollowersResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListFollowersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListFollowing */
export interface UserListFollowingOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userListFollowing */
export interface UserListFollowingOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListFollowing */
export interface UserListFollowingResponse {
  200: UserList;
}

export type UserListFollowingResponseSuccess = UserListFollowingResponse[200];
/**
 * @description
 *   List the users that the given user is following
 * @tags user
 * @produces application/json
 */
export const userListFollowing = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/following";
  function request(
    option: UserListFollowingOption & RequestParameters
  ): Promise<UserListFollowingResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListFollowingResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListGPGKeys */
export interface UserListGPGKeysOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userListGPGKeys */
export interface UserListGPGKeysOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListGPGKeys */
export interface UserListGPGKeysResponse {
  200: GPGKeyList;
}

export type UserListGPGKeysResponseSuccess = UserListGPGKeysResponse[200];
/**
 * @description
 *   List the given user's GPG keys
 * @tags user
 * @produces application/json
 */
export const userListGPGKeys = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/gpg_keys";
  function request(
    option: UserListGPGKeysOption & RequestParameters
  ): Promise<UserListGPGKeysResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListGPGKeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userGetHeatmapData */
export interface UserGetHeatmapDataOption {
  /**
   * @description
   *   username of user to get
   */
  path: {
    /**
        @description
          username of user to get */
    username: string;
  };
}

/** @description response type for userGetHeatmapData */
export interface UserGetHeatmapDataResponse {
  200: UserHeatmapData;
  404: NotFound;
}

export type UserGetHeatmapDataResponseSuccess = UserGetHeatmapDataResponse[200];
/**
 * @description
 *   Get a user's heatmap
 * @tags user
 * @produces application/json
 */
export const userGetHeatmapData = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/heatmap";
  function request(
    option: UserGetHeatmapDataOption & RequestParameters
  ): Promise<UserGetHeatmapDataResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetHeatmapDataResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListKeys */
export interface UserListKeysOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userListKeys */
export interface UserListKeysOption {
  /**
   * @description
   *   fingerprint of the key
   */
  query?: {
    /**
        @description
          fingerprint of the key */
    fingerprint?: string;
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListKeys */
export interface UserListKeysResponse {
  200: PublicKeyList;
}

export type UserListKeysResponseSuccess = UserListKeysResponse[200];
/**
 * @description
 *   List the given user's public keys
 * @tags user
 * @produces application/json
 */
export const userListKeys = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/keys";
  function request(
    option: UserListKeysOption & RequestParameters
  ): Promise<UserListKeysResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListKeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgListUserOrgs */
export interface OrgListUserOrgsOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for orgListUserOrgs */
export interface OrgListUserOrgsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for orgListUserOrgs */
export interface OrgListUserOrgsResponse {
  200: OrganizationList;
}

export type OrgListUserOrgsResponseSuccess = OrgListUserOrgsResponse[200];
/**
 * @description
 *   List a user's organizations
 * @tags organization
 * @produces application/json
 */
export const orgListUserOrgs = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/orgs";
  function request(
    option: OrgListUserOrgsOption & RequestParameters
  ): Promise<OrgListUserOrgsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgListUserOrgsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgGetUserPermissions */
export interface OrgGetUserPermissionsOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
    /**
        @description
          name of the organization */
    org: string;
  };
}

/** @description response type for orgGetUserPermissions */
export interface OrgGetUserPermissionsResponse {
  200: OrganizationPermissions;
  403: Forbidden;
  404: NotFound;
}

export type OrgGetUserPermissionsResponseSuccess =
  OrgGetUserPermissionsResponse[200];
/**
 * @description
 *   Get user permissions in organization
 * @tags organization
 * @produces application/json
 */
export const orgGetUserPermissions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/orgs/:org/permissions";
  function request(
    option: OrgGetUserPermissionsOption & RequestParameters
  ): Promise<OrgGetUserPermissionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<OrgGetUserPermissionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListRepos */
export interface UserListReposOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userListRepos */
export interface UserListReposOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListRepos */
export interface UserListReposResponse {
  200: RepositoryList;
}

export type UserListReposResponseSuccess = UserListReposResponse[200];
/**
 * @description
 *   List the repos owned by the given user
 * @tags user
 * @produces application/json
 */
export const userListRepos = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/repos";
  function request(
    option: UserListReposOption & RequestParameters
  ): Promise<UserListReposResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListReposResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListStarred */
export interface UserListStarredOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userListStarred */
export interface UserListStarredOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListStarred */
export interface UserListStarredResponse {
  200: RepositoryList;
}

export type UserListStarredResponseSuccess = UserListStarredResponse[200];
/**
 * @description
 *   The repos that the given user has starred
 * @tags user
 * @produces application/json
 */
export const userListStarred = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/starred";
  function request(
    option: UserListStarredOption & RequestParameters
  ): Promise<UserListStarredResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListStarredResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userListSubscriptions */
export interface UserListSubscriptionsOption {
  /**
   * @description
   *   username of the user
   */
  path: {
    /**
        @description
          username of the user */
    username: string;
  };
}

/** @description request parameter type for userListSubscriptions */
export interface UserListSubscriptionsOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userListSubscriptions */
export interface UserListSubscriptionsResponse {
  200: RepositoryList;
}

export type UserListSubscriptionsResponseSuccess =
  UserListSubscriptionsResponse[200];
/**
 * @description
 *   List the repositories watched by a user
 * @tags user
 * @produces application/json
 */
export const userListSubscriptions = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/subscriptions";
  function request(
    option: UserListSubscriptionsOption & RequestParameters
  ): Promise<UserListSubscriptionsResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserListSubscriptionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userGetTokens */
export interface UserGetTokensOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
  };
}

/** @description request parameter type for userGetTokens */
export interface UserGetTokensOption {
  /**
   * @description
   *   page number of results to return (1-based)
   */
  query?: {
    /**
        @description
          page number of results to return (1-based) */
    page?: number;
    /**
        @description
          page size of results */
    limit?: number;
  };
}

/** @description response type for userGetTokens */
export interface UserGetTokensResponse {
  200: AccessTokenList;
}

export type UserGetTokensResponseSuccess = UserGetTokensResponse[200];
/**
 * @description
 *   List the authenticated user's access tokens
 * @tags user
 * @produces application/json
 */
export const userGetTokens = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/users/:username/tokens";
  function request(
    option: UserGetTokensOption & RequestParameters
  ): Promise<UserGetTokensResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserGetTokensResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userCreateToken */
export interface UserCreateTokenOption {
  /**
   * @description
   *   username of user
   * @x-go-name "Name"
   */
  path: {
    /**
        @description
          username of user
        @x-go-name "Name" */
    username: string;
  };
}

/** @description request parameter type for userCreateToken */
export interface UserCreateTokenOption {
  body?: {
    userCreateToken?: CreateAccessTokenOption;
  };
}

/** @description response type for userCreateToken */
export interface UserCreateTokenResponse {
  201: AccessToken;
  400: TsgError;
}

export type UserCreateTokenResponseSuccess = UserCreateTokenResponse[201];
/**
 * @description
 *   Create an access token
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const userCreateToken = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/api/v1/users/:username/tokens";
  function request(
    option: UserCreateTokenOption & RequestParameters
  ): Promise<UserCreateTokenResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserCreateTokenResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userDeleteAccessToken */
export interface UserDeleteAccessTokenOption {
  /**
   * @description
   *   username of user
   */
  path: {
    /**
        @description
          username of user */
    username: string;
    /**
        @description
          token to be deleted, identified by ID and if not available by name */
    token: string;
  };
}

/** @description response type for userDeleteAccessToken */
export interface UserDeleteAccessTokenResponse {
  204: Empty;
  404: NotFound;
  422: TsgError;
}

export type UserDeleteAccessTokenResponseSuccess =
  UserDeleteAccessTokenResponse[204];
/**
 * @description
 *   delete an access token
 * @tags user
 * @produces application/json
 */
export const userDeleteAccessToken = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/api/v1/users/:username/tokens/:token";
  function request(
    option: UserDeleteAccessTokenOption & RequestParameters
  ): Promise<UserDeleteAccessTokenResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<UserDeleteAccessTokenResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getVersion */
export interface GetVersionResponse {
  200: ServerVersion;
}

export type GetVersionResponseSuccess = GetVersionResponse[200];
/**
 * @description
 *   Returns the version of the Gitea application
 * @tags miscellaneous
 * @produces application/json
 */
export const getVersion = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/v1/version";
  function request(
    option?: RequestParameters
  ): Promise<GetVersionResponseSuccess> {
    return requester(url, {
      basePath: "/api/v1",
      method,
      ...option,
    }) as unknown as Promise<GetVersionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
