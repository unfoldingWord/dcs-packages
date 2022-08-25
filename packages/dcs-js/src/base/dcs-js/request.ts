/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import requester from "./requester.ts";
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
  CreateLabelOption,
  Label,
  EditLabelOption,
  UserList,
  CreateTeamOption,
  Team,
  IssueList,
  MigrateRepoOptions,
  SearchResults,
  EditRepoOption,
  CreateBranchProtectionOption,
  BranchProtection,
  EditBranchProtectionOption,
  CreateBranchRepoOption,
  Branch,
  CommitList,
  EmptyRepository,
  CombinedStatus,
  CommitStatusList,
  ContentsListResponse,
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
  EditGitHookOption,
  GitHook,
  IssueTemplates,
  CreateIssueOption,
  Issue,
  CommentList,
  EditIssueCommentOption,
  Comment,
  EditReactionOption,
  EditIssueOption,
  CreateIssueCommentOption,
  EditDeadlineOption,
  IssueDeadline,
  WatchInfo,
  TimelineList,
  DeployKey,
  LanguageStatistics,
  CreateMilestoneOption,
  Milestone,
  EditMilestoneOption,
  CreatePullRequestOption,
  PullRequest,
  EditPullRequestOption,
  MergePullRequestOption,
  PullReviewRequestOptions,
  CreatePullReviewOptions,
  PullReview,
  PullReviewCommentList,
  DismissPullReviewOptions,
  CreateReleaseOption,
  Release,
  EditReleaseOption,
  Attachment,
  EditAttachmentOptions,
  CreateStatusOption,
  CommitStatus,
  CreateTagOption,
  Tag,
  Conflict,
  TeamList,
  TrackedTimeList,
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
  RepositoryList,
  TopicListResponse,
  CreateOAuthApplicationOptions,
  OAuthApplication,
  DeleteEmailOption,
  GPGKey,
  CreateGPGKeyOption,
  UserSettingsOptions,
  UserSettings,
  StopWatchList,
  GPGKeyList,
  UserHeatmapData,
  PublicKeyList,
  OrganizationPermissions,
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
  const url = "/admin/cron";
  function request(
    option?: AdminCronListOption
  ): Promise<AdminCronListResponseSuccess> {
    return requester(url, {
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
  const url = "/admin/cron/:task";
  function request(
    option: AdminCronRunOption
  ): Promise<AdminCronRunResponseSuccess> {
    return requester(url, {
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
  const url = "/admin/orgs";
  function request(
    option?: AdminGetAllOrgsOption
  ): Promise<AdminGetAllOrgsResponseSuccess> {
    return requester(url, {
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
  const url = "/admin/unadopted";
  function request(
    option?: AdminUnadoptedListOption
  ): Promise<AdminUnadoptedListResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for adminunadoptedownerrepo */
export interface AdminunadoptedownerrepoOption {
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

/** @description response type for adminunadoptedownerrepo */
export interface AdminunadoptedownerrepoResponse {
  204: Empty;
  403: Forbidden;
}

export type AdminunadoptedownerrepoResponseSuccess =
  AdminunadoptedownerrepoResponse[204];
/**
 * @description
 *   Delete unadopted files
 * @tags admin
 * @produces application/json
 */
export const adminunadoptedownerrepo = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/admin/unadopted/:owner/:repo";
  function request(
    option: AdminunadoptedownerrepoOption
  ): Promise<AdminunadoptedownerrepoResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<AdminunadoptedownerrepoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminusers */
export interface AdminusersOption {
  body?: CreateUserOption;
}

/** @description response type for adminusers */
export interface AdminusersResponse {
  201: User;
  400: TsgError;
  403: Forbidden;
  422: ValidationError;
}

export type AdminusersResponseSuccess = AdminusersResponse[201];
/**
 * @description
 *   Create a user
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminusers = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/admin/users";
  function request(
    option?: AdminusersOption
  ): Promise<AdminusersResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<AdminusersResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for adminusersusername */
export interface AdminusersusernameOption {
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

/** @description request parameter type for adminusersusername */
export interface AdminusersusernameOption {
  body?: EditUserOption;
}

/** @description response type for adminusersusername */
export interface AdminusersusernameResponse {
  200: User;
  403: Forbidden;
  422: ValidationError;
}

export type AdminusersusernameResponseSuccess = AdminusersusernameResponse[200];
/**
 * @description
 *   Edit an existing user
 * @tags admin
 * @produces application/json
 * @consumes application/json
 */
export const adminusersusername = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/admin/users/:username";
  function request(
    option: AdminusersusernameOption
  ): Promise<AdminusersusernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<AdminusersusernameResponseSuccess>;
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
  const url = "/admin/users/:username/keys";
  function request(
    option: AdminCreatePublicKeyOption
  ): Promise<AdminCreatePublicKeyResponseSuccess> {
    return requester(url, {
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
  const url = "/admin/users/:username/keys/:id";
  function request(
    option: AdminDeleteUserPublicKeyOption
  ): Promise<AdminDeleteUserPublicKeyResponseSuccess> {
    return requester(url, {
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
  const url = "/admin/users/:username/orgs";
  function request(
    option: AdminCreateOrgOption
  ): Promise<AdminCreateOrgResponseSuccess> {
    return requester(url, {
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
  const url = "/admin/users/:username/repos";
  function request(
    option: AdminCreateRepoOption
  ): Promise<AdminCreateRepoResponseSuccess> {
    return requester(url, {
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
  const url = "/markdown";
  function request(
    option?: RenderMarkdownOption
  ): Promise<RenderMarkdownResponseSuccess> {
    return requester(url, {
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
  const url = "/markdown/raw";
  function request(
    option: RenderMarkdownRawOption
  ): Promise<RenderMarkdownRawResponseSuccess> {
    return requester(url, {
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
  const url = "/nodeinfo";
  function request(): Promise<GetNodeInfoResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<GetNodeInfoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notifications */
export interface NotificationsOption {
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

/** @description response type for notifications */
export interface NotificationsResponse {
  205: NotificationThreadList;
}

export type NotificationsResponseSuccess = NotificationsResponse[205];
/**
 * @description
 *   Mark notification threads as read, pinned or unread
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notifications = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/notifications";
  function request(
    option?: NotificationsOption
  ): Promise<NotificationsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<NotificationsResponseSuccess>;
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
  const url = "/notifications/new";
  function request(): Promise<NotifyNewAvailableResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<NotifyNewAvailableResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for notificationsthreadsid */
export interface NotificationsthreadsidOption {
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

/** @description request parameter type for notificationsthreadsid */
export interface NotificationsthreadsidOption {
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

/** @description response type for notificationsthreadsid */
export interface NotificationsthreadsidResponse {
  205: NotificationThread;
  403: Forbidden;
  404: NotFound;
}

export type NotificationsthreadsidResponseSuccess =
  NotificationsthreadsidResponse[205];
/**
 * @description
 *   Mark notification thread as read by ID
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const notificationsthreadsid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/notifications/threads/:id";
  function request(
    option: NotificationsthreadsidOption
  ): Promise<NotificationsthreadsidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<NotificationsthreadsidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgs */
export interface OrgsOption {
  body: {
    organization: CreateOrgOption;
  };
}

/** @description response type for orgs */
export interface OrgsResponse {
  201: Organization;
  403: Forbidden;
  422: ValidationError;
}

export type OrgsResponseSuccess = OrgsResponse[201];
/**
 * @description
 *   Create an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgs = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/orgs";
  function request(option: OrgsOption): Promise<OrgsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgsorg */
export interface OrgsorgOption {
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

/** @description request parameter type for orgsorg */
export interface OrgsorgOption {
  body: EditOrgOption;
}

/** @description response type for orgsorg */
export interface OrgsorgResponse {
  200: Organization;
}

export type OrgsorgResponseSuccess = OrgsorgResponse[200];
/**
 * @description
 *   Edit an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgsorg = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/orgs/:org";
  function request(option: OrgsorgOption): Promise<OrgsorgResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorgResponseSuccess>;
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
  const url = "/orgs/:org/hooks";
  function request(
    option: OrgListHooksOption
  ): Promise<OrgListHooksResponseSuccess> {
    return requester(url, {
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
  const url = "/orgs/:org/hooks/";
  function request(
    option: OrgCreateHookOption
  ): Promise<OrgCreateHookResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for orgsorghooksid */
export interface OrgsorghooksidOption {
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

/** @description request parameter type for orgsorghooksid */
export interface OrgsorghooksidOption {
  body?: EditHookOption;
}

/** @description response type for orgsorghooksid */
export interface OrgsorghooksidResponse {
  200: Hook;
}

export type OrgsorghooksidResponseSuccess = OrgsorghooksidResponse[200];
/**
 * @description
 *   Update a hook
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgsorghooksid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/orgs/:org/hooks/:id";
  function request(
    option: OrgsorghooksidOption
  ): Promise<OrgsorghooksidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorghooksidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgsorglabels */
export interface OrgsorglabelsOption {
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

/** @description request parameter type for orgsorglabels */
export interface OrgsorglabelsOption {
  body?: CreateLabelOption;
}

/** @description response type for orgsorglabels */
export interface OrgsorglabelsResponse {
  201: Label;
  422: ValidationError;
}

export type OrgsorglabelsResponseSuccess = OrgsorglabelsResponse[201];
/**
 * @description
 *   Create a label for an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgsorglabels = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/orgs/:org/labels";
  function request(
    option: OrgsorglabelsOption
  ): Promise<OrgsorglabelsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorglabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgsorglabelsid */
export interface OrgsorglabelsidOption {
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

/** @description request parameter type for orgsorglabelsid */
export interface OrgsorglabelsidOption {
  body?: EditLabelOption;
}

/** @description response type for orgsorglabelsid */
export interface OrgsorglabelsidResponse {
  200: Label;
  422: ValidationError;
}

export type OrgsorglabelsidResponseSuccess = OrgsorglabelsidResponse[200];
/**
 * @description
 *   Update a label
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgsorglabelsid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/orgs/:org/labels/:id";
  function request(
    option: OrgsorglabelsidOption
  ): Promise<OrgsorglabelsidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorglabelsidResponseSuccess>;
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
  const url = "/orgs/:org/members";
  function request(
    option: OrgListMembersOption
  ): Promise<OrgListMembersResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for orgsorgmembersusername */
export interface OrgsorgmembersusernameOption {
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

/** @description response type for orgsorgmembersusername */
export interface OrgsorgmembersusernameResponse {
  /**
   * @description
   *   member removed
   */
  204: any;
}

export type OrgsorgmembersusernameResponseSuccess =
  OrgsorgmembersusernameResponse[204];
/**
 * @description
 *   Remove a member from an organization
 * @tags organization
 * @produces application/json
 */
export const orgsorgmembersusername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/orgs/:org/members/:username";
  function request(
    option: OrgsorgmembersusernameOption
  ): Promise<OrgsorgmembersusernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorgmembersusernameResponseSuccess>;
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
  const url = "/orgs/:org/public_members";
  function request(
    option: OrgListPublicMembersOption
  ): Promise<OrgListPublicMembersResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for orgsorgpublic_membersusername */
export interface Orgsorgpublic_membersusernameOption {
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

/** @description response type for orgsorgpublic_membersusername */
export interface Orgsorgpublic_membersusernameResponse {
  204: Empty;
  403: Forbidden;
}

export type Orgsorgpublic_membersusernameResponseSuccess =
  Orgsorgpublic_membersusernameResponse[204];
/**
 * @description
 *   Conceal a user's membership
 * @tags organization
 * @produces application/json
 */
export const orgsorgpublic_membersusername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/orgs/:org/public_members/:username";
  function request(
    option: Orgsorgpublic_membersusernameOption
  ): Promise<Orgsorgpublic_membersusernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<Orgsorgpublic_membersusernameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgsorgrepos */
export interface OrgsorgreposOption {
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

/** @description request parameter type for orgsorgrepos */
export interface OrgsorgreposOption {
  body?: CreateRepoOption;
}

/** @description response type for orgsorgrepos */
export interface OrgsorgreposResponse {
  201: Repository;
  403: Forbidden;
  404: NotFound;
}

export type OrgsorgreposResponseSuccess = OrgsorgreposResponse[201];
/**
 * @description
 *   Create a repository in an organization
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgsorgrepos = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/orgs/:org/repos";
  function request(
    option: OrgsorgreposOption
  ): Promise<OrgsorgreposResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorgreposResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for orgsorgteams */
export interface OrgsorgteamsOption {
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

/** @description request parameter type for orgsorgteams */
export interface OrgsorgteamsOption {
  body?: CreateTeamOption;
}

/** @description response type for orgsorgteams */
export interface OrgsorgteamsResponse {
  201: Team;
  422: ValidationError;
}

export type OrgsorgteamsResponseSuccess = OrgsorgteamsResponse[201];
/**
 * @description
 *   Create a team
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const orgsorgteams = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/orgs/:org/teams";
  function request(
    option: OrgsorgteamsOption
  ): Promise<OrgsorgteamsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<OrgsorgteamsResponseSuccess>;
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
  const url = "/orgs/:org/teams/search";
  function request(
    option: TeamSearchOption
  ): Promise<TeamSearchResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/issues/search";
  function request(
    option?: IssueSearchIssuesOption
  ): Promise<IssueSearchIssuesResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/migrate";
  function request(
    option?: RepoMigrateOption
  ): Promise<RepoMigrateResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/search";
  function request(
    option?: RepoSearchOption
  ): Promise<RepoSearchResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepo */
export interface ReposownerrepoOption {
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

/** @description request parameter type for reposownerrepo */
export interface ReposownerrepoOption {
  /**
   * @description
   *   Properties of a repo that you can edit
   */
  body?: EditRepoOption;
}

/** @description response type for reposownerrepo */
export interface ReposownerrepoResponse {
  200: Repository;
  403: Forbidden;
  422: ValidationError;
}

export type ReposownerrepoResponseSuccess = ReposownerrepoResponse[200];
/**
 * @description
 *   Edit a repository's properties. Only fields that are set will be changed.
 * @tags repository
 * @produces application/json
 */
export const reposownerrepo = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo";
  function request(
    option: ReposownerrepoOption
  ): Promise<ReposownerrepoResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoResponseSuccess>;
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
  const url = "/repos/:owner/:repo/archive/:archive";
  function request(
    option: RepoGetArchiveOption
  ): Promise<RepoGetArchiveResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/assignees";
  function request(
    option: RepoGetAssigneesOption
  ): Promise<RepoGetAssigneesResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepobranch_protections */
export interface Reposownerrepobranch_protectionsOption {
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

/** @description request parameter type for reposownerrepobranch_protections */
export interface Reposownerrepobranch_protectionsOption {
  body?: CreateBranchProtectionOption;
}

/** @description response type for reposownerrepobranch_protections */
export interface Reposownerrepobranch_protectionsResponse {
  201: BranchProtection;
  403: Forbidden;
  404: NotFound;
  422: ValidationError;
}

export type Reposownerrepobranch_protectionsResponseSuccess =
  Reposownerrepobranch_protectionsResponse[201];
/**
 * @description
 *   Create a branch protections for a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepobranch_protections = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/branch_protections";
  function request(
    option: Reposownerrepobranch_protectionsOption
  ): Promise<Reposownerrepobranch_protectionsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<Reposownerrepobranch_protectionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepobranch_protectionsname */
export interface Reposownerrepobranch_protectionsnameOption {
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

/** @description request parameter type for reposownerrepobranch_protectionsname */
export interface Reposownerrepobranch_protectionsnameOption {
  body?: EditBranchProtectionOption;
}

/** @description response type for reposownerrepobranch_protectionsname */
export interface Reposownerrepobranch_protectionsnameResponse {
  200: BranchProtection;
  404: NotFound;
  422: ValidationError;
}

export type Reposownerrepobranch_protectionsnameResponseSuccess =
  Reposownerrepobranch_protectionsnameResponse[200];
/**
 * @description
 *   Edit a branch protections for a repository. Only fields that are set will be changed
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepobranch_protectionsname = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/branch_protections/:name";
  function request(
    option: Reposownerrepobranch_protectionsnameOption
  ): Promise<Reposownerrepobranch_protectionsnameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<Reposownerrepobranch_protectionsnameResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepobranches */
export interface ReposownerrepobranchesOption {
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

/** @description request parameter type for reposownerrepobranches */
export interface ReposownerrepobranchesOption {
  body?: CreateBranchRepoOption;
}

/** @description response type for reposownerrepobranches */
export interface ReposownerrepobranchesResponse {
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

export type ReposownerrepobranchesResponseSuccess =
  ReposownerrepobranchesResponse[201];
/**
 * @description
 *   Create a branch
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepobranches = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/branches";
  function request(
    option: ReposownerrepobranchesOption
  ): Promise<ReposownerrepobranchesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepobranchesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepobranchesbranch */
export interface ReposownerrepobranchesbranchOption {
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

/** @description response type for reposownerrepobranchesbranch */
export interface ReposownerrepobranchesbranchResponse {
  204: Empty;
  403: TsgError;
  404: NotFound;
}

export type ReposownerrepobranchesbranchResponseSuccess =
  ReposownerrepobranchesbranchResponse[204];
/**
 * @description
 *   Delete a specific branch from a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepobranchesbranch = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/branches/:branch";
  function request(
    option: ReposownerrepobranchesbranchOption
  ): Promise<ReposownerrepobranchesbranchResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepobranchesbranchResponseSuccess>;
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
  const url = "/repos/:owner/:repo/collaborators";
  function request(
    option: RepoListCollaboratorsOption
  ): Promise<RepoListCollaboratorsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepocollaboratorscollaborator */
export interface ReposownerrepocollaboratorscollaboratorOption {
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

/** @description response type for reposownerrepocollaboratorscollaborator */
export interface ReposownerrepocollaboratorscollaboratorResponse {
  204: Empty;
  422: ValidationError;
}

export type ReposownerrepocollaboratorscollaboratorResponseSuccess =
  ReposownerrepocollaboratorscollaboratorResponse[204];
/**
 * @description
 *   Delete a collaborator from a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepocollaboratorscollaborator = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/collaborators/:collaborator";
  function request(
    option: ReposownerrepocollaboratorscollaboratorOption
  ): Promise<ReposownerrepocollaboratorscollaboratorResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepocollaboratorscollaboratorResponseSuccess>;
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
  const url = "/repos/:owner/:repo/commits";
  function request(
    option: RepoGetAllCommitsOption
  ): Promise<RepoGetAllCommitsResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/commits/:ref/status";
  function request(
    option: RepoGetCombinedStatusByRefOption
  ): Promise<RepoGetCombinedStatusByRefResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/commits/:ref/statuses";
  function request(
    option: RepoListStatusesByRefOption
  ): Promise<RepoListStatusesByRefResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/contents";
  function request(
    option: RepoGetContentsListOption
  ): Promise<RepoGetContentsListResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepocontentsfilepath */
export interface ReposownerrepocontentsfilepathOption {
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

/** @description request parameter type for reposownerrepocontentsfilepath */
export interface ReposownerrepocontentsfilepathOption {
  body: DeleteFileOptions;
}

/** @description response type for reposownerrepocontentsfilepath */
export interface ReposownerrepocontentsfilepathResponse {
  200: FileDeleteResponse;
  400: TsgError;
  403: TsgError;
  404: TsgError;
}

export type ReposownerrepocontentsfilepathResponseSuccess =
  ReposownerrepocontentsfilepathResponse[200];
/**
 * @description
 *   Delete a file in a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepocontentsfilepath = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/contents/:filepath";
  function request(
    option: ReposownerrepocontentsfilepathOption
  ): Promise<ReposownerrepocontentsfilepathResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepocontentsfilepathResponseSuccess>;
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
  const url = "/repos/:owner/:repo/editorconfig/:filepath";
  function request(
    option: RepoGetEditorConfigOption
  ): Promise<RepoGetEditorConfigResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoforks */
export interface ReposownerrepoforksOption {
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

/** @description request parameter type for reposownerrepoforks */
export interface ReposownerrepoforksOption {
  body?: CreateForkOption;
}

/** @description response type for reposownerrepoforks */
export interface ReposownerrepoforksResponse {
  202: Repository;
  403: Forbidden;
  /**
   * @description
   *   The repository with the same name already exists.
   */
  409: any;
  422: ValidationError;
}

export type ReposownerrepoforksResponseSuccess =
  ReposownerrepoforksResponse[202];
/**
 * @description
 *   Fork a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepoforks = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/forks";
  function request(
    option: ReposownerrepoforksOption
  ): Promise<ReposownerrepoforksResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoforksResponseSuccess>;
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
  const url = "/repos/:owner/:repo/git/blobs/:sha";
  function request(option: GetBlobOption): Promise<GetBlobResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/commits/:sha";
  function request(
    option: RepoGetSingleCommitOption
  ): Promise<RepoGetSingleCommitResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/commits/:sha.diffType";
  function request(
    option: RepoDownloadCommitDiffOrPatchOption
  ): Promise<RepoDownloadCommitDiffOrPatchResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/notes/:sha";
  function request(
    option: RepoGetNoteOption
  ): Promise<RepoGetNoteResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/refs";
  function request(
    option: RepoListAllGitRefsOption
  ): Promise<RepoListAllGitRefsResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/refs/:ref";
  function request(
    option: RepoListGitRefsOption
  ): Promise<RepoListGitRefsResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/tags/:sha";
  function request(
    option: GetAnnotatedTagOption
  ): Promise<GetAnnotatedTagResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/git/trees/:sha";
  function request(option: GetTreeOption): Promise<GetTreeResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepohooks */
export interface ReposownerrepohooksOption {
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

/** @description request parameter type for reposownerrepohooks */
export interface ReposownerrepohooksOption {
  body?: CreateHookOption;
}

/** @description response type for reposownerrepohooks */
export interface ReposownerrepohooksResponse {
  201: Hook;
}

export type ReposownerrepohooksResponseSuccess =
  ReposownerrepohooksResponse[201];
/**
 * @description
 *   Create a hook
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepohooks = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/hooks";
  function request(
    option: ReposownerrepohooksOption
  ): Promise<ReposownerrepohooksResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepohooksResponseSuccess>;
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
  const url = "/repos/:owner/:repo/hooks/git";
  function request(
    option: RepoListGitHooksOption
  ): Promise<RepoListGitHooksResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepohooksgitid */
export interface ReposownerrepohooksgitidOption {
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

/** @description request parameter type for reposownerrepohooksgitid */
export interface ReposownerrepohooksgitidOption {
  body?: EditGitHookOption;
}

/** @description response type for reposownerrepohooksgitid */
export interface ReposownerrepohooksgitidResponse {
  200: GitHook;
  404: NotFound;
}

export type ReposownerrepohooksgitidResponseSuccess =
  ReposownerrepohooksgitidResponse[200];
/**
 * @description
 *   Edit a Git hook in a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepohooksgitid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/hooks/git/:id";
  function request(
    option: ReposownerrepohooksgitidOption
  ): Promise<ReposownerrepohooksgitidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepohooksgitidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepohooksid */
export interface ReposownerrepohooksidOption {
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

/** @description request parameter type for reposownerrepohooksid */
export interface ReposownerrepohooksidOption {
  body?: EditHookOption;
}

/** @description response type for reposownerrepohooksid */
export interface ReposownerrepohooksidResponse {
  200: Hook;
}

export type ReposownerrepohooksidResponseSuccess =
  ReposownerrepohooksidResponse[200];
/**
 * @description
 *   Edit a hook in a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepohooksid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/hooks/:id";
  function request(
    option: ReposownerrepohooksidOption
  ): Promise<ReposownerrepohooksidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepohooksidResponseSuccess>;
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
  const url = "/repos/:owner/:repo/hooks/:id/tests";
  function request(
    option: RepoTestHookOption
  ): Promise<RepoTestHookResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/issue_templates";
  function request(
    option: RepoGetIssueTemplatesOption
  ): Promise<RepoGetIssueTemplatesResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoissues */
export interface ReposownerrepoissuesOption {
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

/** @description request parameter type for reposownerrepoissues */
export interface ReposownerrepoissuesOption {
  body?: CreateIssueOption;
}

/** @description response type for reposownerrepoissues */
export interface ReposownerrepoissuesResponse {
  201: Issue;
  403: Forbidden;
  412: TsgError;
  422: ValidationError;
}

export type ReposownerrepoissuesResponseSuccess =
  ReposownerrepoissuesResponse[201];
/**
 * @description
 *   Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissues = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/issues";
  function request(
    option: ReposownerrepoissuesOption
  ): Promise<ReposownerrepoissuesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuesResponseSuccess>;
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
  const url = "/repos/:owner/:repo/issues/comments";
  function request(
    option: IssueGetRepoCommentsOption
  ): Promise<IssueGetRepoCommentsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoissuescommentsid */
export interface ReposownerrepoissuescommentsidOption {
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

/** @description request parameter type for reposownerrepoissuescommentsid */
export interface ReposownerrepoissuescommentsidOption {
  body?: EditIssueCommentOption;
}

/** @description response type for reposownerrepoissuescommentsid */
export interface ReposownerrepoissuescommentsidResponse {
  200: Comment;
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type ReposownerrepoissuescommentsidResponseSuccess =
  ReposownerrepoissuescommentsidResponse[200];
/**
 * @description
 *   Edit a comment
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuescommentsid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/issues/comments/:id";
  function request(
    option: ReposownerrepoissuescommentsidOption
  ): Promise<ReposownerrepoissuescommentsidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuescommentsidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepoissuescommentsidreactions */
export interface ReposownerrepoissuescommentsidreactionsOption {
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

/** @description request parameter type for reposownerrepoissuescommentsidreactions */
export interface ReposownerrepoissuescommentsidreactionsOption {
  body?: {
    content?: EditReactionOption;
  };
}

/** @description response type for reposownerrepoissuescommentsidreactions */
export interface ReposownerrepoissuescommentsidreactionsResponse {
  200: Empty;
  403: Forbidden;
}

export type ReposownerrepoissuescommentsidreactionsResponseSuccess =
  ReposownerrepoissuescommentsidreactionsResponse[200];
/**
 * @description
 *   Remove a reaction from a comment of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuescommentsidreactions = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/issues/comments/:id/reactions";
  function request(
    option: ReposownerrepoissuescommentsidreactionsOption
  ): Promise<ReposownerrepoissuescommentsidreactionsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuescommentsidreactionsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepoissuesindex */
export interface ReposownerrepoissuesindexOption {
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

/** @description request parameter type for reposownerrepoissuesindex */
export interface ReposownerrepoissuesindexOption {
  body?: EditIssueOption;
}

/** @description response type for reposownerrepoissuesindex */
export interface ReposownerrepoissuesindexResponse {
  201: Issue;
  403: Forbidden;
  404: NotFound;
  412: TsgError;
}

export type ReposownerrepoissuesindexResponseSuccess =
  ReposownerrepoissuesindexResponse[201];
/**
 * @description
 *   Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuesindex = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/issues/:index";
  function request(
    option: ReposownerrepoissuesindexOption
  ): Promise<ReposownerrepoissuesindexResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuesindexResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepoissuesindexcomments */
export interface ReposownerrepoissuesindexcommentsOption {
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

/** @description request parameter type for reposownerrepoissuesindexcomments */
export interface ReposownerrepoissuesindexcommentsOption {
  body?: CreateIssueCommentOption;
}

/** @description response type for reposownerrepoissuesindexcomments */
export interface ReposownerrepoissuesindexcommentsResponse {
  201: Comment;
  403: Forbidden;
}

export type ReposownerrepoissuesindexcommentsResponseSuccess =
  ReposownerrepoissuesindexcommentsResponse[201];
/**
 * @description
 *   Add a comment to an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuesindexcomments = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/issues/:index/comments";
  function request(
    option: ReposownerrepoissuesindexcommentsOption
  ): Promise<ReposownerrepoissuesindexcommentsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuesindexcommentsResponseSuccess>;
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
  const url = "/repos/:owner/:repo/issues/:index/deadline";
  function request(
    option: IssueEditIssueDeadlineOption
  ): Promise<IssueEditIssueDeadlineResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoissuesindexlabels */
export interface ReposownerrepoissuesindexlabelsOption {
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

/** @description response type for reposownerrepoissuesindexlabels */
export interface ReposownerrepoissuesindexlabelsResponse {
  204: Empty;
  403: Forbidden;
}

export type ReposownerrepoissuesindexlabelsResponseSuccess =
  ReposownerrepoissuesindexlabelsResponse[204];
/**
 * @description
 *   Remove all labels from an issue
 * @tags issue
 * @produces application/json
 */
export const reposownerrepoissuesindexlabels = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/issues/:index/labels";
  function request(
    option: ReposownerrepoissuesindexlabelsOption
  ): Promise<ReposownerrepoissuesindexlabelsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuesindexlabelsResponseSuccess>;
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
  const url = "/repos/:owner/:repo/issues/:index/labels/:id";
  function request(
    option: IssueRemoveLabelOption
  ): Promise<IssueRemoveLabelResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoissuesindexreactions */
export interface ReposownerrepoissuesindexreactionsOption {
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

/** @description request parameter type for reposownerrepoissuesindexreactions */
export interface ReposownerrepoissuesindexreactionsOption {
  body?: {
    content?: EditReactionOption;
  };
}

/** @description response type for reposownerrepoissuesindexreactions */
export interface ReposownerrepoissuesindexreactionsResponse {
  200: Empty;
  403: Forbidden;
}

export type ReposownerrepoissuesindexreactionsResponseSuccess =
  ReposownerrepoissuesindexreactionsResponse[200];
/**
 * @description
 *   Remove a reaction from an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuesindexreactions = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/issues/:index/reactions";
  function request(
    option: ReposownerrepoissuesindexreactionsOption
  ): Promise<ReposownerrepoissuesindexreactionsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuesindexreactionsResponseSuccess>;
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
  const url = "/repos/:owner/:repo/issues/:index/stopwatch/delete";
  function request(
    option: IssueDeleteStopWatchOption
  ): Promise<IssueDeleteStopWatchResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/issues/:index/stopwatch/start";
  function request(
    option: IssueStartStopWatchOption
  ): Promise<IssueStartStopWatchResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/issues/:index/stopwatch/stop";
  function request(
    option: IssueStopStopWatchOption
  ): Promise<IssueStopStopWatchResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/issues/:index/subscriptions";
  function request(
    option: IssueSubscriptionsOption
  ): Promise<IssueSubscriptionsResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/issues/:index/subscriptions/check";
  function request(
    option: IssueCheckSubscriptionOption
  ): Promise<IssueCheckSubscriptionResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoissuesindexsubscriptionsuser */
export interface ReposownerrepoissuesindexsubscriptionsuserOption {
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

/** @description response type for reposownerrepoissuesindexsubscriptionsuser */
export interface ReposownerrepoissuesindexsubscriptionsuserResponse {
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

export type ReposownerrepoissuesindexsubscriptionsuserResponseSuccess =
  ReposownerrepoissuesindexsubscriptionsuserResponse[200];
/**
 * @description
 *   Unsubscribe user from issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuesindexsubscriptionsuser =
  /* #__PURE__ */ (() => {
    const method = "delete";
    const url = "/repos/:owner/:repo/issues/:index/subscriptions/:user";
    function request(
      option: ReposownerrepoissuesindexsubscriptionsuserOption
    ): Promise<ReposownerrepoissuesindexsubscriptionsuserResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<ReposownerrepoissuesindexsubscriptionsuserResponseSuccess>;
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
  const url = "/repos/:owner/:repo/issues/:index/timeline";
  function request(
    option: IssueGetCommentsAndTimelineOption
  ): Promise<IssueGetCommentsAndTimelineResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoissuesindextimes */
export interface ReposownerrepoissuesindextimesOption {
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

/** @description response type for reposownerrepoissuesindextimes */
export interface ReposownerrepoissuesindextimesResponse {
  204: Empty;
  400: TsgError;
  403: Forbidden;
}

export type ReposownerrepoissuesindextimesResponseSuccess =
  ReposownerrepoissuesindextimesResponse[204];
/**
 * @description
 *   Reset a tracked time of an issue
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepoissuesindextimes = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/issues/:index/times";
  function request(
    option: ReposownerrepoissuesindextimesOption
  ): Promise<ReposownerrepoissuesindextimesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoissuesindextimesResponseSuccess>;
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
  const url = "/repos/:owner/:repo/issues/:index/times/:id";
  function request(
    option: IssueDeleteTimeOption
  ): Promise<IssueDeleteTimeResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepokeys */
export interface ReposownerrepokeysOption {
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

/** @description request parameter type for reposownerrepokeys */
export interface ReposownerrepokeysOption {
  body?: CreateKeyOption;
}

/** @description response type for reposownerrepokeys */
export interface ReposownerrepokeysResponse {
  201: DeployKey;
  422: ValidationError;
}

export type ReposownerrepokeysResponseSuccess = ReposownerrepokeysResponse[201];
/**
 * @description
 *   Add a key to a repository
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepokeys = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/keys";
  function request(
    option: ReposownerrepokeysOption
  ): Promise<ReposownerrepokeysResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepokeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepokeysid */
export interface ReposownerrepokeysidOption {
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

/** @description response type for reposownerrepokeysid */
export interface ReposownerrepokeysidResponse {
  204: Empty;
  403: Forbidden;
}

export type ReposownerrepokeysidResponseSuccess =
  ReposownerrepokeysidResponse[204];
/**
 * @description
 *   Delete a key from a repository
 * @tags repository
 */
export const reposownerrepokeysid = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/keys/:id";
  function request(
    option: ReposownerrepokeysidOption
  ): Promise<ReposownerrepokeysidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepokeysidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepolabels */
export interface ReposownerrepolabelsOption {
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

/** @description request parameter type for reposownerrepolabels */
export interface ReposownerrepolabelsOption {
  body?: CreateLabelOption;
}

/** @description response type for reposownerrepolabels */
export interface ReposownerrepolabelsResponse {
  201: Label;
  422: ValidationError;
}

export type ReposownerrepolabelsResponseSuccess =
  ReposownerrepolabelsResponse[201];
/**
 * @description
 *   Create a label
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepolabels = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/labels";
  function request(
    option: ReposownerrepolabelsOption
  ): Promise<ReposownerrepolabelsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepolabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepolabelsid */
export interface ReposownerrepolabelsidOption {
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

/** @description request parameter type for reposownerrepolabelsid */
export interface ReposownerrepolabelsidOption {
  body?: EditLabelOption;
}

/** @description response type for reposownerrepolabelsid */
export interface ReposownerrepolabelsidResponse {
  200: Label;
  422: ValidationError;
}

export type ReposownerrepolabelsidResponseSuccess =
  ReposownerrepolabelsidResponse[200];
/**
 * @description
 *   Update a label
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepolabelsid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/labels/:id";
  function request(
    option: ReposownerrepolabelsidOption
  ): Promise<ReposownerrepolabelsidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepolabelsidResponseSuccess>;
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
  const url = "/repos/:owner/:repo/languages";
  function request(
    option: RepoGetLanguagesOption
  ): Promise<RepoGetLanguagesResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepomilestones */
export interface ReposownerrepomilestonesOption {
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

/** @description request parameter type for reposownerrepomilestones */
export interface ReposownerrepomilestonesOption {
  body?: CreateMilestoneOption;
}

/** @description response type for reposownerrepomilestones */
export interface ReposownerrepomilestonesResponse {
  201: Milestone;
}

export type ReposownerrepomilestonesResponseSuccess =
  ReposownerrepomilestonesResponse[201];
/**
 * @description
 *   Create a milestone
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepomilestones = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/milestones";
  function request(
    option: ReposownerrepomilestonesOption
  ): Promise<ReposownerrepomilestonesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepomilestonesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepomilestonesid */
export interface ReposownerrepomilestonesidOption {
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

/** @description request parameter type for reposownerrepomilestonesid */
export interface ReposownerrepomilestonesidOption {
  body?: EditMilestoneOption;
}

/** @description response type for reposownerrepomilestonesid */
export interface ReposownerrepomilestonesidResponse {
  200: Milestone;
}

export type ReposownerrepomilestonesidResponseSuccess =
  ReposownerrepomilestonesidResponse[200];
/**
 * @description
 *   Update a milestone
 * @tags issue
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepomilestonesid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/milestones/:id";
  function request(
    option: ReposownerrepomilestonesidOption
  ): Promise<ReposownerrepomilestonesidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepomilestonesidResponseSuccess>;
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
  const url = "/repos/:owner/:repo/mirror-sync";
  function request(
    option: RepoMirrorSyncOption
  ): Promise<RepoMirrorSyncResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerreponotifications */
export interface ReposownerreponotificationsOption {
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

/** @description request parameter type for reposownerreponotifications */
export interface ReposownerreponotificationsOption {
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

/** @description response type for reposownerreponotifications */
export interface ReposownerreponotificationsResponse {
  205: NotificationThreadList;
}

export type ReposownerreponotificationsResponseSuccess =
  ReposownerreponotificationsResponse[205];
/**
 * @description
 *   Mark notification threads as read, pinned or unread on a specific repo
 * @tags notification
 * @produces application/json
 * @consumes application/json
 */
export const reposownerreponotifications = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/repos/:owner/:repo/notifications";
  function request(
    option: ReposownerreponotificationsOption
  ): Promise<ReposownerreponotificationsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerreponotificationsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepopulls */
export interface ReposownerrepopullsOption {
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

/** @description request parameter type for reposownerrepopulls */
export interface ReposownerrepopullsOption {
  body?: CreatePullRequestOption;
}

/** @description response type for reposownerrepopulls */
export interface ReposownerrepopullsResponse {
  201: PullRequest;
  409: TsgError;
  422: ValidationError;
}

export type ReposownerrepopullsResponseSuccess =
  ReposownerrepopullsResponse[201];
/**
 * @description
 *   Create a pull request
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepopulls = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/pulls";
  function request(
    option: ReposownerrepopullsOption
  ): Promise<ReposownerrepopullsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepopullsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepopullsindex */
export interface ReposownerrepopullsindexOption {
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

/** @description request parameter type for reposownerrepopullsindex */
export interface ReposownerrepopullsindexOption {
  body?: EditPullRequestOption;
}

/** @description response type for reposownerrepopullsindex */
export interface ReposownerrepopullsindexResponse {
  201: PullRequest;
  403: Forbidden;
  409: TsgError;
  412: TsgError;
  422: ValidationError;
}

export type ReposownerrepopullsindexResponseSuccess =
  ReposownerrepopullsindexResponse[201];
/**
 * @description
 *   Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerrepopullsindex = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/pulls/:index";
  function request(
    option: ReposownerrepopullsindexOption
  ): Promise<ReposownerrepopullsindexResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepopullsindexResponseSuccess>;
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
  const url = "/repos/:owner/:repo/pulls/:index.diffType";
  function request(
    option: RepoDownloadPullDiffOrPatchOption
  ): Promise<RepoDownloadPullDiffOrPatchResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/pulls/:index/commits";
  function request(
    option: RepoGetPullRequestCommitsOption
  ): Promise<RepoGetPullRequestCommitsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepopullsindexmerge */
export interface ReposownerrepopullsindexmergeOption {
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

/** @description request parameter type for reposownerrepopullsindexmerge */
export interface ReposownerrepopullsindexmergeOption {
  body?: MergePullRequestOption;
}

/** @description response type for reposownerrepopullsindexmerge */
export interface ReposownerrepopullsindexmergeResponse {
  200: Empty;
  405: Empty;
  409: TsgError;
}

export type ReposownerrepopullsindexmergeResponseSuccess =
  ReposownerrepopullsindexmergeResponse[200];
/**
 * @description
 *   Merge a pull request
 * @tags repository
 * @produces application/json
 */
export const reposownerrepopullsindexmerge = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/pulls/:index/merge";
  function request(
    option: ReposownerrepopullsindexmergeOption
  ): Promise<ReposownerrepopullsindexmergeResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepopullsindexmergeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepopullsindexrequested_reviewers */
export interface Reposownerrepopullsindexrequested_reviewersOption {
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

/** @description request parameter type for reposownerrepopullsindexrequested_reviewers */
export interface Reposownerrepopullsindexrequested_reviewersOption {
  body: PullReviewRequestOptions;
}

/** @description response type for reposownerrepopullsindexrequested_reviewers */
export interface Reposownerrepopullsindexrequested_reviewersResponse {
  204: Empty;
  404: NotFound;
  422: ValidationError;
}

export type Reposownerrepopullsindexrequested_reviewersResponseSuccess =
  Reposownerrepopullsindexrequested_reviewersResponse[204];
/**
 * @description
 *   cancel review requests for a pull request
 * @tags repository
 * @produces application/json
 */
export const reposownerrepopullsindexrequested_reviewers =
  /* #__PURE__ */ (() => {
    const method = "delete";
    const url = "/repos/:owner/:repo/pulls/:index/requested_reviewers";
    function request(
      option: Reposownerrepopullsindexrequested_reviewersOption
    ): Promise<Reposownerrepopullsindexrequested_reviewersResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<Reposownerrepopullsindexrequested_reviewersResponseSuccess>;
    }

    /** http method */
    request.method = method;
    /** request url */
    request.url = url;
    return request;
  })();

/** @description request parameter type for reposownerrepopullsindexreviews */
export interface ReposownerrepopullsindexreviewsOption {
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

/** @description request parameter type for reposownerrepopullsindexreviews */
export interface ReposownerrepopullsindexreviewsOption {
  body: CreatePullReviewOptions;
}

/** @description response type for reposownerrepopullsindexreviews */
export interface ReposownerrepopullsindexreviewsResponse {
  200: PullReview;
  404: NotFound;
  422: ValidationError;
}

export type ReposownerrepopullsindexreviewsResponseSuccess =
  ReposownerrepopullsindexreviewsResponse[200];
/**
 * @description
 *   Create a review to an pull request
 * @tags repository
 * @produces application/json
 */
export const reposownerrepopullsindexreviews = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/pulls/:index/reviews";
  function request(
    option: ReposownerrepopullsindexreviewsOption
  ): Promise<ReposownerrepopullsindexreviewsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepopullsindexreviewsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepopullsindexreviewsid */
export interface ReposownerrepopullsindexreviewsidOption {
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

/** @description response type for reposownerrepopullsindexreviewsid */
export interface ReposownerrepopullsindexreviewsidResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type ReposownerrepopullsindexreviewsidResponseSuccess =
  ReposownerrepopullsindexreviewsidResponse[204];
/**
 * @description
 *   Delete a specific review from a pull request
 * @tags repository
 * @produces application/json
 */
export const reposownerrepopullsindexreviewsid = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/pulls/:index/reviews/:id";
  function request(
    option: ReposownerrepopullsindexreviewsidOption
  ): Promise<ReposownerrepopullsindexreviewsidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepopullsindexreviewsidResponseSuccess>;
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
  const url = "/repos/:owner/:repo/pulls/:index/reviews/:id/comments";
  function request(
    option: RepoGetPullReviewCommentsOption
  ): Promise<RepoGetPullReviewCommentsResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/pulls/:index/reviews/:id/dismissals";
  function request(
    option: RepoDismissPullReviewOption
  ): Promise<RepoDismissPullReviewResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/pulls/:index/reviews/:id/undismissals";
  function request(
    option: RepoUnDismissPullReviewOption
  ): Promise<RepoUnDismissPullReviewResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/pulls/:index/update";
  function request(
    option: RepoUpdatePullRequestOption
  ): Promise<RepoUpdatePullRequestResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/raw/:filepath";
  function request(
    option: RepoGetRawFileOption
  ): Promise<RepoGetRawFileResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerreporeleases */
export interface ReposownerreporeleasesOption {
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

/** @description request parameter type for reposownerreporeleases */
export interface ReposownerreporeleasesOption {
  body?: CreateReleaseOption;
}

/** @description response type for reposownerreporeleases */
export interface ReposownerreporeleasesResponse {
  201: Release;
  404: NotFound;
  409: TsgError;
}

export type ReposownerreporeleasesResponseSuccess =
  ReposownerreporeleasesResponse[201];
/**
 * @description
 *   Create a release
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerreporeleases = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/releases";
  function request(
    option: ReposownerreporeleasesOption
  ): Promise<ReposownerreporeleasesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerreporeleasesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerreporeleasestagstag */
export interface ReposownerreporeleasestagstagOption {
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

/** @description response type for reposownerreporeleasestagstag */
export interface ReposownerreporeleasestagstagResponse {
  204: Empty;
  404: NotFound;
  405: Empty;
}

export type ReposownerreporeleasestagstagResponseSuccess =
  ReposownerreporeleasestagstagResponse[204];
/**
 * @description
 *   Delete a release by tag name
 * @tags repository
 */
export const reposownerreporeleasestagstag = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/releases/tags/:tag";
  function request(
    option: ReposownerreporeleasestagstagOption
  ): Promise<ReposownerreporeleasestagstagResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerreporeleasestagstagResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerreporeleasesid */
export interface ReposownerreporeleasesidOption {
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

/** @description request parameter type for reposownerreporeleasesid */
export interface ReposownerreporeleasesidOption {
  body?: EditReleaseOption;
}

/** @description response type for reposownerreporeleasesid */
export interface ReposownerreporeleasesidResponse {
  200: Release;
  404: NotFound;
}

export type ReposownerreporeleasesidResponseSuccess =
  ReposownerreporeleasesidResponse[200];
/**
 * @description
 *   Update a release
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerreporeleasesid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/releases/:id";
  function request(
    option: ReposownerreporeleasesidOption
  ): Promise<ReposownerreporeleasesidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerreporeleasesidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerreporeleasesidassets */
export interface ReposownerreporeleasesidassetsOption {
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

/** @description request parameter type for reposownerreporeleasesidassets */
export interface ReposownerreporeleasesidassetsOption {
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

/** @description request parameter type for reposownerreporeleasesidassets */
export interface ReposownerreporeleasesidassetsOption {
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

/** @description response type for reposownerreporeleasesidassets */
export interface ReposownerreporeleasesidassetsResponse {
  201: Attachment;
  400: TsgError;
}

export type ReposownerreporeleasesidassetsResponseSuccess =
  ReposownerreporeleasesidassetsResponse[201];
/**
 * @description
 *   Create a release attachment
 * @tags repository
 * @produces application/json
 * @consumes multipart/form-data
 */
export const reposownerreporeleasesidassets = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/releases/:id/assets";
  function request(
    option: ReposownerreporeleasesidassetsOption
  ): Promise<ReposownerreporeleasesidassetsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerreporeleasesidassetsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerreporeleasesidassetsattachment_id */
export interface Reposownerreporeleasesidassetsattachment_idOption {
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

/** @description request parameter type for reposownerreporeleasesidassetsattachment_id */
export interface Reposownerreporeleasesidassetsattachment_idOption {
  body?: EditAttachmentOptions;
}

/** @description response type for reposownerreporeleasesidassetsattachment_id */
export interface Reposownerreporeleasesidassetsattachment_idResponse {
  201: Attachment;
}

export type Reposownerreporeleasesidassetsattachment_idResponseSuccess =
  Reposownerreporeleasesidassetsattachment_idResponse[201];
/**
 * @description
 *   Edit a release attachment
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const reposownerreporeleasesidassetsattachment_id =
  /* #__PURE__ */ (() => {
    const method = "patch";
    const url = "/repos/:owner/:repo/releases/:id/assets/:attachment_id";
    function request(
      option: Reposownerreporeleasesidassetsattachment_idOption
    ): Promise<Reposownerreporeleasesidassetsattachment_idResponseSuccess> {
      return requester(url, {
        method,
        ...option,
      }) as unknown as Promise<Reposownerreporeleasesidassetsattachment_idResponseSuccess>;
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
  const url = "/repos/:owner/:repo/reviewers";
  function request(
    option: RepoGetReviewersOption
  ): Promise<RepoGetReviewersResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/signing-key.gpg";
  function request(
    option: RepoSigningKeyOption
  ): Promise<RepoSigningKeyResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/stargazers";
  function request(
    option: RepoListStargazersOption
  ): Promise<RepoListStargazersResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepostatusessha */
export interface ReposownerrepostatusesshaOption {
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

/** @description request parameter type for reposownerrepostatusessha */
export interface ReposownerrepostatusesshaOption {
  body?: CreateStatusOption;
}

/** @description response type for reposownerrepostatusessha */
export interface ReposownerrepostatusesshaResponse {
  201: CommitStatus;
  400: TsgError;
}

export type ReposownerrepostatusesshaResponseSuccess =
  ReposownerrepostatusesshaResponse[201];
/**
 * @description
 *   Create a commit status
 * @tags repository
 * @produces application/json
 */
export const reposownerrepostatusessha = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/statuses/:sha";
  function request(
    option: ReposownerrepostatusesshaOption
  ): Promise<ReposownerrepostatusesshaResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepostatusesshaResponseSuccess>;
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
  const url = "/repos/:owner/:repo/subscribers";
  function request(
    option: RepoListSubscribersOption
  ): Promise<RepoListSubscribersResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerreposubscription */
export interface ReposownerreposubscriptionOption {
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

/** @description response type for reposownerreposubscription */
export interface ReposownerreposubscriptionResponse {
  204: Empty;
}

export type ReposownerreposubscriptionResponseSuccess =
  ReposownerreposubscriptionResponse[204];
/**
 * @description
 *   Unwatch a repo
 * @tags repository
 */
export const reposownerreposubscription = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/subscription";
  function request(
    option: ReposownerreposubscriptionOption
  ): Promise<ReposownerreposubscriptionResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerreposubscriptionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepotags */
export interface ReposownerrepotagsOption {
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

/** @description request parameter type for reposownerrepotags */
export interface ReposownerrepotagsOption {
  body?: CreateTagOption;
}

/** @description response type for reposownerrepotags */
export interface ReposownerrepotagsResponse {
  200: Tag;
  404: NotFound;
  405: Empty;
  409: Conflict;
}

export type ReposownerrepotagsResponseSuccess = ReposownerrepotagsResponse[200];
/**
 * @description
 *   Create a new git tag in a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepotags = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:owner/:repo/tags";
  function request(
    option: ReposownerrepotagsOption
  ): Promise<ReposownerrepotagsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepotagsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepotagstag */
export interface ReposownerrepotagstagOption {
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

/** @description response type for reposownerrepotagstag */
export interface ReposownerrepotagstagResponse {
  204: Empty;
  404: NotFound;
  405: Empty;
  409: Conflict;
}

export type ReposownerrepotagstagResponseSuccess =
  ReposownerrepotagstagResponse[204];
/**
 * @description
 *   Delete a repository's tag by name
 * @tags repository
 * @produces application/json
 */
export const reposownerrepotagstag = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/tags/:tag";
  function request(
    option: ReposownerrepotagstagOption
  ): Promise<ReposownerrepotagstagResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepotagstagResponseSuccess>;
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
  const url = "/repos/:owner/:repo/teams";
  function request(
    option: RepoListTeamsOption
  ): Promise<RepoListTeamsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepoteamsteam */
export interface ReposownerrepoteamsteamOption {
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

/** @description response type for reposownerrepoteamsteam */
export interface ReposownerrepoteamsteamResponse {
  204: Empty;
  405: TsgError;
  422: ValidationError;
}

export type ReposownerrepoteamsteamResponseSuccess =
  ReposownerrepoteamsteamResponse[204];
/**
 * @description
 *   Delete a team from a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepoteamsteam = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/teams/:team";
  function request(
    option: ReposownerrepoteamsteamOption
  ): Promise<ReposownerrepoteamsteamResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepoteamsteamResponseSuccess>;
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
  const url = "/repos/:owner/:repo/times";
  function request(
    option: RepoTrackedTimesOption
  ): Promise<RepoTrackedTimesResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepotopics */
export interface ReposownerrepotopicsOption {
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

/** @description request parameter type for reposownerrepotopics */
export interface ReposownerrepotopicsOption {
  body?: RepoTopicOptions;
}

/** @description response type for reposownerrepotopics */
export interface ReposownerrepotopicsResponse {
  204: Empty;
  422: InvalidTopicsError;
}

export type ReposownerrepotopicsResponseSuccess =
  ReposownerrepotopicsResponse[204];
/**
 * @description
 *   Replace list of topics for a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepotopics = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/repos/:owner/:repo/topics";
  function request(
    option: ReposownerrepotopicsOption
  ): Promise<ReposownerrepotopicsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepotopicsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for reposownerrepotopicstopic */
export interface ReposownerrepotopicstopicOption {
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

/** @description response type for reposownerrepotopicstopic */
export interface ReposownerrepotopicstopicResponse {
  204: Empty;
  422: InvalidTopicsError;
}

export type ReposownerrepotopicstopicResponseSuccess =
  ReposownerrepotopicstopicResponse[204];
/**
 * @description
 *   Delete a topic from a repository
 * @tags repository
 * @produces application/json
 */
export const reposownerrepotopicstopic = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/repos/:owner/:repo/topics/:topic";
  function request(
    option: ReposownerrepotopicstopicOption
  ): Promise<ReposownerrepotopicstopicResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepotopicstopicResponseSuccess>;
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
  const url = "/repos/:owner/:repo/transfer";
  function request(
    option: RepoTransferOption
  ): Promise<RepoTransferResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/transfer/accept";
  function request(
    option: AcceptRepoTransferOption
  ): Promise<AcceptRepoTransferResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/transfer/reject";
  function request(
    option: RejectRepoTransferOption
  ): Promise<RejectRepoTransferResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/wiki/new";
  function request(
    option: RepoCreateWikiPageOption
  ): Promise<RepoCreateWikiPageResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for reposownerrepowikipagepageName */
export interface ReposownerrepowikipagepageNameOption {
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

/** @description request parameter type for reposownerrepowikipagepageName */
export interface ReposownerrepowikipagepageNameOption {
  body?: CreateWikiPageOptions;
}

/** @description response type for reposownerrepowikipagepageName */
export interface ReposownerrepowikipagepageNameResponse {
  200: WikiPage;
  400: TsgError;
  403: Forbidden;
}

export type ReposownerrepowikipagepageNameResponseSuccess =
  ReposownerrepowikipagepageNameResponse[200];
/**
 * @description
 *   Edit a wiki page
 * @tags repository
 * @consumes application/json
 */
export const reposownerrepowikipagepageName = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/repos/:owner/:repo/wiki/page/:pageName";
  function request(
    option: ReposownerrepowikipagepageNameOption
  ): Promise<ReposownerrepowikipagepageNameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<ReposownerrepowikipagepageNameResponseSuccess>;
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
  const url = "/repos/:owner/:repo/wiki/pages";
  function request(
    option: RepoGetWikiPagesOption
  ): Promise<RepoGetWikiPagesResponseSuccess> {
    return requester(url, {
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
  const url = "/repos/:owner/:repo/wiki/revisions/:pageName";
  function request(
    option: RepoGetWikiPageRevisionsOption
  ): Promise<RepoGetWikiPageRevisionsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for generateRepo */
export interface GenerateRepoOption {
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

/** @description request parameter type for generateRepo */
export interface GenerateRepoOption {
  body?: GenerateRepoOption;
}

/** @description response type for generateRepo */
export interface GenerateRepoResponse {
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

export type GenerateRepoResponseSuccess = GenerateRepoResponse[201];
/**
 * @description
 *   Create a repository using a template
 * @tags repository
 * @produces application/json
 * @consumes application/json
 */
export const generateRepo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/repos/:template_owner/:template_repo/generate";
  function request(
    option: GenerateRepoOption
  ): Promise<GenerateRepoResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<GenerateRepoResponseSuccess>;
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
  const url = "/repositories/:id";
  function request(
    option: RepoGetByIDOption
  ): Promise<RepoGetByIDResponseSuccess> {
    return requester(url, {
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
  const url = "/settings/api";
  function request(): Promise<GetGeneralAPISettingsResponseSuccess> {
    return requester(url, {
      method,
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
  const url = "/settings/attachment";
  function request(): Promise<GetGeneralAttachmentSettingsResponseSuccess> {
    return requester(url, {
      method,
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
  const url = "/settings/repository";
  function request(): Promise<GetGeneralRepositorySettingsResponseSuccess> {
    return requester(url, {
      method,
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
  const url = "/settings/ui";
  function request(): Promise<GetGeneralUISettingsResponseSuccess> {
    return requester(url, {
      method,
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
  const url = "/signing-key.gpg";
  function request(): Promise<GetSigningKeyResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<GetSigningKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for teamsid */
export interface TeamsidOption {
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

/** @description request parameter type for teamsid */
export interface TeamsidOption {
  body?: EditTeamOption;
}

/** @description response type for teamsid */
export interface TeamsidResponse {
  200: Team;
}

export type TeamsidResponseSuccess = TeamsidResponse[200];
/**
 * @description
 *   Edit a team
 * @tags organization
 * @produces application/json
 * @consumes application/json
 */
export const teamsid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/teams/:id";
  function request(option: TeamsidOption): Promise<TeamsidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<TeamsidResponseSuccess>;
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
  const url = "/teams/:id/members";
  function request(
    option: OrgListTeamMembersOption
  ): Promise<OrgListTeamMembersResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for teamsidmembersusername */
export interface TeamsidmembersusernameOption {
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

/** @description response type for teamsidmembersusername */
export interface TeamsidmembersusernameResponse {
  204: Empty;
  404: NotFound;
}

export type TeamsidmembersusernameResponseSuccess =
  TeamsidmembersusernameResponse[204];
/**
 * @description
 *   Remove a team member
 * @tags organization
 * @produces application/json
 */
export const teamsidmembersusername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/teams/:id/members/:username";
  function request(
    option: TeamsidmembersusernameOption
  ): Promise<TeamsidmembersusernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<TeamsidmembersusernameResponseSuccess>;
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
  const url = "/teams/:id/repos";
  function request(
    option: OrgListTeamReposOption
  ): Promise<OrgListTeamReposResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for teamsidreposorgrepo */
export interface TeamsidreposorgrepoOption {
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

/** @description response type for teamsidreposorgrepo */
export interface TeamsidreposorgrepoResponse {
  204: Empty;
  403: Forbidden;
}

export type TeamsidreposorgrepoResponseSuccess =
  TeamsidreposorgrepoResponse[204];
/**
 * @description
 *   This does not delete the repository, it only removes the repository from the team.
 *   Remove a repository from a team
 * @tags organization
 * @produces application/json
 */
export const teamsidreposorgrepo = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/teams/:id/repos/:org/:repo";
  function request(
    option: TeamsidreposorgrepoOption
  ): Promise<TeamsidreposorgrepoResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<TeamsidreposorgrepoResponseSuccess>;
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
  const url = "/topics/search";
  function request(
    option: TopicSearchOption
  ): Promise<TopicSearchResponseSuccess> {
    return requester(url, {
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
  const url = "/user";
  function request(): Promise<UserGetCurrentResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<UserGetCurrentResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userapplicationsoauth */
export interface UserapplicationsoauthOption {
  body: CreateOAuthApplicationOptions;
}

/** @description response type for userapplicationsoauth */
export interface UserapplicationsoauthResponse {
  201: OAuthApplication;
  400: TsgError;
}

export type UserapplicationsoauthResponseSuccess =
  UserapplicationsoauthResponse[201];
/**
 * @description
 *   creates a new OAuth2 application
 * @tags user
 * @produces application/json
 */
export const userapplicationsoauth = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/user/applications/oauth2";
  function request(
    option: UserapplicationsoauthOption
  ): Promise<UserapplicationsoauthResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserapplicationsoauthResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userapplicationsoauthid */
export interface UserapplicationsoauthidOption {
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

/** @description request parameter type for userapplicationsoauthid */
export interface UserapplicationsoauthidOption {
  body: CreateOAuthApplicationOptions;
}

/** @description response type for userapplicationsoauthid */
export interface UserapplicationsoauthidResponse {
  200: OAuthApplication;
  404: NotFound;
}

export type UserapplicationsoauthidResponseSuccess =
  UserapplicationsoauthidResponse[200];
/**
 * @description
 *   update an OAuth2 Application, this includes regenerating the client secret
 * @tags user
 * @produces application/json
 */
export const userapplicationsoauthid = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/user/applications/oauth2/:id";
  function request(
    option: UserapplicationsoauthidOption
  ): Promise<UserapplicationsoauthidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserapplicationsoauthidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for useremails */
export interface UseremailsOption {
  body?: DeleteEmailOption;
}

/** @description response type for useremails */
export interface UseremailsResponse {
  204: Empty;
  404: NotFound;
}

export type UseremailsResponseSuccess = UseremailsResponse[204];
/**
 * @description
 *   Delete email addresses
 * @tags user
 * @produces application/json
 */
export const useremails = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/user/emails";
  function request(
    option?: UseremailsOption
  ): Promise<UseremailsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UseremailsResponseSuccess>;
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
  const url = "/user/followers";
  function request(
    option?: UserCurrentListFollowersOption
  ): Promise<UserCurrentListFollowersResponseSuccess> {
    return requester(url, {
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
  const url = "/user/following";
  function request(
    option?: UserCurrentListFollowingOption
  ): Promise<UserCurrentListFollowingResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for userfollowingusername */
export interface UserfollowingusernameOption {
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

/** @description response type for userfollowingusername */
export interface UserfollowingusernameResponse {
  204: Empty;
}

export type UserfollowingusernameResponseSuccess =
  UserfollowingusernameResponse[204];
/**
 * @description
 *   Unfollow a user
 * @tags user
 */
export const userfollowingusername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/user/following/:username";
  function request(
    option: UserfollowingusernameOption
  ): Promise<UserfollowingusernameResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserfollowingusernameResponseSuccess>;
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
  const url = "/user/gpg_key_token";
  function request(): Promise<GetVerificationTokenResponseSuccess> {
    return requester(url, {
      method,
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
  const url = "/user/gpg_key_verify";
  function request(): Promise<UserVerifyGPGKeyResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<UserVerifyGPGKeyResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for usergpg_keys */
export interface Usergpg_keysOption {
  body?: {
    Form?: CreateGPGKeyOption;
  };
}

/** @description response type for usergpg_keys */
export interface Usergpg_keysResponse {
  201: GPGKey;
  404: NotFound;
  422: ValidationError;
}

export type Usergpg_keysResponseSuccess = Usergpg_keysResponse[201];
/**
 * @description
 *   Create a GPG key
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const usergpg_keys = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/user/gpg_keys";
  function request(
    option?: Usergpg_keysOption
  ): Promise<Usergpg_keysResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<Usergpg_keysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for usergpg_keysid */
export interface Usergpg_keysidOption {
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

/** @description response type for usergpg_keysid */
export interface Usergpg_keysidResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type Usergpg_keysidResponseSuccess = Usergpg_keysidResponse[204];
/**
 * @description
 *   Remove a GPG key
 * @tags user
 * @produces application/json
 */
export const usergpg_keysid = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/user/gpg_keys/:id";
  function request(
    option: Usergpg_keysidOption
  ): Promise<Usergpg_keysidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<Usergpg_keysidResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userkeys */
export interface UserkeysOption {
  body?: CreateKeyOption;
}

/** @description response type for userkeys */
export interface UserkeysResponse {
  201: PublicKey;
  422: ValidationError;
}

export type UserkeysResponseSuccess = UserkeysResponse[201];
/**
 * @description
 *   Create a public key
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const userkeys = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/user/keys";
  function request(option?: UserkeysOption): Promise<UserkeysResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserkeysResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for userkeysid */
export interface UserkeysidOption {
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

/** @description response type for userkeysid */
export interface UserkeysidResponse {
  204: Empty;
  403: Forbidden;
  404: NotFound;
}

export type UserkeysidResponseSuccess = UserkeysidResponse[204];
/**
 * @description
 *   Delete a public key
 * @tags user
 * @produces application/json
 */
export const userkeysid = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/user/keys/:id";
  function request(
    option: UserkeysidOption
  ): Promise<UserkeysidResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserkeysidResponseSuccess>;
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
  const url = "/user/orgs";
  function request(
    option?: OrgListCurrentUserOrgsOption
  ): Promise<OrgListCurrentUserOrgsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for userrepos */
export interface UserreposOption {
  body?: CreateRepoOption;
}

/** @description response type for userrepos */
export interface UserreposResponse {
  201: Repository;
  /**
   * @description
   *   The repository with the same name already exists.
   */
  409: any;
  422: ValidationError;
}

export type UserreposResponseSuccess = UserreposResponse[201];
/**
 * @description
 *   Create a repository
 * @tags repository,user
 * @produces application/json
 * @consumes application/json
 */
export const userrepos = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/user/repos";
  function request(
    option?: UserreposOption
  ): Promise<UserreposResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserreposResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for usersettings */
export interface UsersettingsOption {
  body?: UserSettingsOptions;
}

/** @description response type for usersettings */
export interface UsersettingsResponse {
  200: UserSettings;
}

export type UsersettingsResponseSuccess = UsersettingsResponse[200];
/**
 * @description
 *   Update user settings
 * @tags user
 * @produces application/json
 */
export const usersettings = /* #__PURE__ */ (() => {
  const method = "patch";
  const url = "/user/settings";
  function request(
    option?: UsersettingsOption
  ): Promise<UsersettingsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UsersettingsResponseSuccess>;
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
  const url = "/user/starred";
  function request(
    option?: UserCurrentListStarredOption
  ): Promise<UserCurrentListStarredResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for userstarredownerrepo */
export interface UserstarredownerrepoOption {
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

/** @description response type for userstarredownerrepo */
export interface UserstarredownerrepoResponse {
  204: Empty;
}

export type UserstarredownerrepoResponseSuccess =
  UserstarredownerrepoResponse[204];
/**
 * @description
 *   Unstar the given repo
 * @tags user
 */
export const userstarredownerrepo = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/user/starred/:owner/:repo";
  function request(
    option: UserstarredownerrepoOption
  ): Promise<UserstarredownerrepoResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UserstarredownerrepoResponseSuccess>;
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
  const url = "/user/stopwatches";
  function request(
    option?: UserGetStopWatchesOption
  ): Promise<UserGetStopWatchesResponseSuccess> {
    return requester(url, {
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
  const url = "/user/subscriptions";
  function request(
    option?: UserCurrentListSubscriptionsOption
  ): Promise<UserCurrentListSubscriptionsResponseSuccess> {
    return requester(url, {
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
  const url = "/user/teams";
  function request(
    option?: UserListTeamsOption
  ): Promise<UserListTeamsResponseSuccess> {
    return requester(url, {
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
  const url = "/user/times";
  function request(
    option?: UserCurrentTrackedTimesOption
  ): Promise<UserCurrentTrackedTimesResponseSuccess> {
    return requester(url, {
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
  const url = "/users/search";
  function request(
    option?: UserSearchOption
  ): Promise<UserSearchResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:follower/following/:followee";
  function request(
    option: UserCheckFollowingOption
  ): Promise<UserCheckFollowingResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username";
  function request(option: UserGetOption): Promise<UserGetResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/followers";
  function request(
    option: UserListFollowersOption
  ): Promise<UserListFollowersResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/following";
  function request(
    option: UserListFollowingOption
  ): Promise<UserListFollowingResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/gpg_keys";
  function request(
    option: UserListGPGKeysOption
  ): Promise<UserListGPGKeysResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/heatmap";
  function request(
    option: UserGetHeatmapDataOption
  ): Promise<UserGetHeatmapDataResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/keys";
  function request(
    option: UserListKeysOption
  ): Promise<UserListKeysResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/orgs";
  function request(
    option: OrgListUserOrgsOption
  ): Promise<OrgListUserOrgsResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/orgs/:org/permissions";
  function request(
    option: OrgGetUserPermissionsOption
  ): Promise<OrgGetUserPermissionsResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/repos";
  function request(
    option: UserListReposOption
  ): Promise<UserListReposResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/starred";
  function request(
    option: UserListStarredOption
  ): Promise<UserListStarredResponseSuccess> {
    return requester(url, {
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
  const url = "/users/:username/subscriptions";
  function request(
    option: UserListSubscriptionsOption
  ): Promise<UserListSubscriptionsResponseSuccess> {
    return requester(url, {
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

/** @description request parameter type for usersusernametokens */
export interface UsersusernametokensOption {
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

/** @description request parameter type for usersusernametokens */
export interface UsersusernametokensOption {
  body?: {
    userCreateToken?: CreateAccessTokenOption;
  };
}

/** @description response type for usersusernametokens */
export interface UsersusernametokensResponse {
  201: AccessToken;
  400: TsgError;
}

export type UsersusernametokensResponseSuccess =
  UsersusernametokensResponse[201];
/**
 * @description
 *   Create an access token
 * @tags user
 * @produces application/json
 * @consumes application/json
 */
export const usersusernametokens = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/users/:username/tokens";
  function request(
    option: UsersusernametokensOption
  ): Promise<UsersusernametokensResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as unknown as Promise<UsersusernametokensResponseSuccess>;
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
  const url = "/users/:username/tokens/:token";
  function request(
    option: UserDeleteAccessTokenOption
  ): Promise<UserDeleteAccessTokenResponseSuccess> {
    return requester(url, {
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
  const url = "/version";
  function request(): Promise<GetVersionResponseSuccess> {
    return requester(url, {
      method,
    }) as unknown as Promise<GetVersionResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
