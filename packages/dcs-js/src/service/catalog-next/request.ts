/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester, RequestParameters } from "../../requester";
import type {
  CatalogVersionEndpointsResponse,
  ValidationError,
  CatalogSearchResultsV,
  CatalogSearchResultsPivotedV,
  CatalogEntryV,
  CatalogMetadata,
} from "./definition";

/** @description response type for miscListCatalogVersionEndpoints */
export interface MiscListCatalogVersionEndpointsResponse {
  200: CatalogVersionEndpointsResponse;
  422: ValidationError;
}

export type MiscListCatalogVersionEndpointsResponseSuccess =
  MiscListCatalogVersionEndpointsResponse[200];
/**
 * @description
 *   Catalog Next version endpoint list, including what version "latest" points to
 * @tags misc
 * @produces application/json
 */
export const miscListCatalogVersionEndpoints = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/misc/versions";
  function request(
    option?: RequestParameters
  ): Promise<MiscListCatalogVersionEndpointsResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<MiscListCatalogVersionEndpointsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for CatalogV3 */
export interface CatalogV3Response {
  200: CatalogSearchResultsV;
  422: ValidationError;
}

export type CatalogV3ResponseSuccess = CatalogV3Response[200];
/**
 * @description
 *   Catalog v3 listing by language, back-port of https://api.door43.org/v3/catalog.json
 * @tags v3
 * @produces application/json
 */
export const CatalogV3 = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v3/catalog.json";
  function request(
    option?: RequestParameters
  ): Promise<CatalogV3ResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogV3ResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for CatalogSearchV3 */
export interface CatalogSearchV3Option {
  /**
   * @description
   *   search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch=true
   */
  query?: {
    /**
        @description
          search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch=true */
    owner?: string;
    /**
        @description
          search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    repo?: string;
    /**
        @description
          search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    lang?: string;
    /**
        @description
          search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    subject?: string;
    /**
        @description
          if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false */
    partialMatch?: boolean;
  };
}

/** @description response type for CatalogSearchV3 */
export interface CatalogSearchV3Response {
  200: CatalogSearchResultsV;
  422: ValidationError;
}

export type CatalogSearchV3ResponseSuccess = CatalogSearchV3Response[200];
/**
 * @description
 *   Catalog v3 search
 * @tags v3
 * @produces application/json
 */
export const CatalogSearchV3 = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v3/search";
  function request(
    option?: CatalogSearchV3Option & RequestParameters
  ): Promise<CatalogSearchV3ResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSearchV3ResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for CatalogSubjectsPivotedV3 */
export interface CatalogSubjectsPivotedV3Response {
  200: CatalogSearchResultsPivotedV;
  422: ValidationError;
}

export type CatalogSubjectsPivotedV3ResponseSuccess =
  CatalogSubjectsPivotedV3Response[200];
/**
 * @description
 *   Catalog v3 listing pivoted by subject/language, back-port of https://api.door43.org/v3/subjects/pivoted.json
 * @tags v3
 * @produces application/json
 */
export const CatalogSubjectsPivotedV3 = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v3/subjects/pivoted.json";
  function request(
    option?: RequestParameters
  ): Promise<CatalogSubjectsPivotedV3ResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSubjectsPivotedV3ResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for CatalogSubjectsPivotedSearchV3 */
export interface CatalogSubjectsPivotedSearchV3Option {
  /**
   * @description
   *   search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch=true
   */
  query?: {
    /**
        @description
          search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch=true */
    owner?: string;
    /**
        @description
          search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    repo?: string;
    /**
        @description
          search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    lang?: string;
    /**
        @description
          search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    subject?: string;
    /**
        @description
          if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false */
    partialMatch?: boolean;
  };
}

/** @description response type for CatalogSubjectsPivotedSearchV3 */
export interface CatalogSubjectsPivotedSearchV3Response {
  200: CatalogSearchResultsPivotedV;
  422: ValidationError;
}

export type CatalogSubjectsPivotedSearchV3ResponseSuccess =
  CatalogSubjectsPivotedSearchV3Response[200];
/**
 * @description
 *   Catalog v3 search pivoted by subject/language
 * @tags v3
 * @produces application/json
 */
export const CatalogSubjectsPivotedSearchV3 = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v3/subjects/search";
  function request(
    option?: CatalogSubjectsPivotedSearchV3Option & RequestParameters
  ): Promise<CatalogSubjectsPivotedSearchV3ResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSubjectsPivotedSearchV3ResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for CatalogSubjectsPivotedBySubjectV3 */
export interface CatalogSubjectsPivotedBySubjectV3Option {
  /**
   * @description
   *   subject to query
   */
  path: {
    /**
        @description
          subject to query */
    subject: string;
  };
}

/** @description response type for CatalogSubjectsPivotedBySubjectV3 */
export interface CatalogSubjectsPivotedBySubjectV3Response {
  200: CatalogSearchResultsPivotedV;
  422: ValidationError;
}

export type CatalogSubjectsPivotedBySubjectV3ResponseSuccess =
  CatalogSubjectsPivotedBySubjectV3Response[200];
/**
 * @description
 *   Catalog v3 listing pivoted on subject by a given subject (e.g. /v3/subjects/Open_Bible_Stories.json)
 * @tags v3
 * @produces application/json
 */
export const CatalogSubjectsPivotedBySubjectV3 = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v3/subjects/:subject.json";
  function request(
    option: CatalogSubjectsPivotedBySubjectV3Option & RequestParameters
  ): Promise<CatalogSubjectsPivotedBySubjectV3ResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSubjectsPivotedBySubjectV3ResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for catalogGetEntry */
export interface CatalogGetEntryOption {
  /**
   * @description
   *   name of the owner
   */
  path: {
    /**
        @description
          name of the owner */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          release tag or default branch */
    tag: string;
  };
}

/** @description response type for catalogGetEntry */
export interface CatalogGetEntryResponse {
  200: CatalogEntryV;
  422: ValidationError;
}

export type CatalogGetEntryResponseSuccess = CatalogGetEntryResponse[200];
/**
 * @description
 *   Catalog entry
 * @tags v5
 * @produces application/json
 */
export const catalogGetEntry = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v5/entry/:owner/:repo/:tag";
  function request(
    option: CatalogGetEntryOption & RequestParameters
  ): Promise<CatalogGetEntryResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogGetEntryResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for catalogGetMetadata */
export interface CatalogGetMetadataOption {
  /**
   * @description
   *   name of the owner
   */
  path: {
    /**
        @description
          name of the owner */
    owner: string;
    /**
        @description
          name of the repo */
    repo: string;
    /**
        @description
          release tag or default branch */
    tag: string;
  };
}

/** @description response type for catalogGetMetadata */
export interface CatalogGetMetadataResponse {
  200: CatalogMetadata;
  422: ValidationError;
}

export type CatalogGetMetadataResponseSuccess = CatalogGetMetadataResponse[200];
/**
 * @description
 *   Catalog entry metadata (manifest.yaml in JSON format)
 * @tags v5
 * @produces application/json
 */
export const catalogGetMetadata = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v5/entry/:owner/:repo/:tag/metadata";
  function request(
    option: CatalogGetMetadataOption & RequestParameters
  ): Promise<CatalogGetMetadataResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogGetMetadataResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for catalogSearch */
export interface CatalogSearchOption {
  /**
   * @description
   *   keyword(s). Can use multiple `q=<keyword>`s or a comma-delimited string for more than one keyword. Is case insensitive
   */
  query?: {
    /**
        @description
          keyword(s). Can use multiple `q=<keyword>`s or a comma-delimited string for more than one keyword. Is case insensitive */
    q?: string;
    /**
        @description
          search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch=true */
    owner?: string;
    /**
        @description
          search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    repo?: string;
    /**
        @description
          search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    tag?: string;
    /**
        @description
          search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    lang?: string;
    /**
        @description
          specifies which release stage to be return of these stages: "prod" - return only the production releases (default); "preprod" - return the pre-production release if it exists instead of the production release; "draft" - return the draft release if it exists instead of pre-production or production release; "latest" -return the default branch (e.g. master) if it is a valid RC instead of the above */
    stage?: string;
    /**
        @description
          search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    subject?: string;
    /**
        @description
          search only for entries with the given checking level(s). Can be 1, 2 or 3 */
    checkingLevel?: string;
    /**
        @description
          search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    book?: string;
    /**
        @description
          if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false */
    partialMatch?: boolean;
    /**
        @description
          if true, all releases, not just the latest, are included. Default is false */
    includeHistory?: boolean;
    /**
        @description
          if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true */
    includeMetadata?: boolean;
    /**
        @description
          if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false */
    showIngredients?: boolean;
    /**
        @description
          sort repos alphanumerically by attribute. Supported values are "subject", "title", "reponame", "tag", "released", "lang", "releases", "stars", "forks". Default is by "language", "subject" and then "tag" */
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
          page size of results, defaults to no limit */
    limit?: number;
  };
}

/** @description response type for catalogSearch */
export interface CatalogSearchResponse {
  200: CatalogSearchResultsV;
  422: ValidationError;
}

export type CatalogSearchResponseSuccess = CatalogSearchResponse[200];
/**
 * @description
 *   Catalog search
 * @tags v5
 * @produces application/json
 */
export const catalogSearch = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v5/search";
  function request(
    option?: CatalogSearchOption & RequestParameters
  ): Promise<CatalogSearchResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSearchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for catalo4SearchOwner */
export interface Catalo4SearchOwnerOption {
  /**
   * @description
   *   owner of entries
   */
  path: {
    /**
        @description
          owner of entries */
    owner: string;
  };
}

/** @description request parameter type for catalo4SearchOwner */
export interface Catalo4SearchOwnerOption {
  /**
   * @description
   *   keyword(s). Can use multiple `q=<keyword>`s or commas for more than one keyword
   */
  query?: {
    /**
        @description
          keyword(s). Can use multiple `q=<keyword>`s or commas for more than one keyword */
    q?: string;
    /**
        @description
          search only for entries with the given repo name(s). */
    repo?: string;
    /**
        @description
          search only for entries with the given release tag(s) */
    tag?: string;
    /**
        @description
          search only for entries with the given language(s) */
    lang?: string;
    /**
        @description
          specifies which release stage to be return of these stages: "prod" - return only the production releases (default); "preprod" - return the pre-production release if it exists instead of the production release; "draft" - return the draft release if it exists instead of pre-production or production release; "latest" -return the default branch (e.g. master) if it is a valid RC instead of the above */
    stage?: string;
    /**
        @description
          search only for entries with the given subject(s). Must match the entire string (case insensitive) */
    subject?: string;
    /**
        @description
          search only for entries with the given checking level(s). Can be 1, 2 or 3 */
    checkingLevel?: string;
    /**
        @description
          search only for entries with the given book(s) (project ids) */
    book?: string;
    /**
        @description
          if true, all releases, not just the latest, are included. Default is false */
    includeHistory?: boolean;
    /**
        @description
          if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true */
    includeMetadata?: boolean;
    /**
        @description
          if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false */
    showIngredients?: boolean;
    /**
        @description
          sort repos alphanumerically by attribute. Supported values are "subject", "title", "reponame", "tag", "released", "lang", "releases", "stars", "forks". Default is by "language", "subject" and then "tag" */
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
          page size of results, maximum page size is 50 */
    limit?: number;
  };
}

/** @description response type for catalo4SearchOwner */
export interface Catalo4SearchOwnerResponse {
  200: CatalogSearchResultsV;
  422: ValidationError;
}

export type Catalo4SearchOwnerResponseSuccess = Catalo4SearchOwnerResponse[200];
/**
 * @description
 *   Catalog search by owner
 * @tags v4
 * @produces application/json
 */
export const catalo4SearchOwner = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v4/search/:owner";
  function request(
    option: Catalo4SearchOwnerOption & RequestParameters
  ): Promise<Catalo4SearchOwnerResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<Catalo4SearchOwnerResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for catalogSearchRepo */
export interface CatalogSearchRepoOption {
  /**
   * @description
   *   owner of the returned entries
   */
  path: {
    /**
        @description
          owner of the returned entries */
    owner: string;
    /**
        @description
          name of the repo of the returned entries */
    repo: string;
  };
}

/** @description request parameter type for catalogSearchRepo */
export interface CatalogSearchRepoOption {
  /**
   * @description
   *   keyword(s). Can use multiple `q=<keyword>`s or a comma-delimited string for more than one keyword. Is case insensitive
   */
  query?: {
    /**
        @description
          keyword(s). Can use multiple `q=<keyword>`s or a comma-delimited string for more than one keyword. Is case insensitive */
    q?: string;
    /**
        @description
          search only for entries with the given owner name(s). Will perform an exact match (case insensitive) unlesss partialMatch=true */
    owner?: string;
    /**
        @description
          search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    repo?: string;
    /**
        @description
          search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    tag?: string;
    /**
        @description
          search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    lang?: string;
    /**
        @description
          specifies which release stage to be return of these stages: "prod" - return only the production releases (default); "preprod" - return the pre-production release if it exists instead of the production release; "draft" - return the draft release if it exists instead of pre-production or production release; "latest" -return the default branch (e.g. master) if it is a valid RC instead of the above */
    stage?: string;
    /**
        @description
          search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    subject?: string;
    /**
        @description
          search only for entries with the given checking level(s). Can be 1, 2 or 3 */
    checkingLevel?: string;
    /**
        @description
          search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    book?: string;
    /**
        @description
          if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false */
    partialMatch?: boolean;
    /**
        @description
          if true, all releases, not just the latest, are included. Default is false */
    includeHistory?: boolean;
    /**
        @description
          if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true */
    includeMetadata?: boolean;
    /**
        @description
          if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false */
    showIngredients?: boolean;
    /**
        @description
          sort repos alphanumerically by attribute. Supported values are "subject", "title", "reponame", "tag", "released", "lang", "releases", "stars", "forks". Default is by "language", "subject" and then "tag" */
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
          page size of results, defaults to no limit */
    limit?: number;
  };
}

/** @description response type for catalogSearchRepo */
export interface CatalogSearchRepoResponse {
  200: CatalogSearchResultsV;
  422: ValidationError;
}

export type CatalogSearchRepoResponseSuccess = CatalogSearchRepoResponse[200];
/**
 * @description
 *   Catalog search by repo
 * @tags v5
 * @produces application/json
 */
export const catalogSearchRepo = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v5/search/:owner/:repo";
  function request(
    option: CatalogSearchRepoOption & RequestParameters
  ): Promise<CatalogSearchRepoResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSearchRepoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for catalogSearchOwner */
export interface CatalogSearchOwnerOption {
  /**
   * @description
   *   owner of the returned entries
   */
  path: {
    /**
        @description
          owner of the returned entries */
    owner: string;
  };
}

/** @description request parameter type for catalogSearchOwner */
export interface CatalogSearchOwnerOption {
  /**
   * @description
   *   keyword(s). Can use multiple `q=<keyword>`s or a comma-delimited string for more than one keyword. Is case insensitive
   */
  query?: {
    /**
        @description
          keyword(s). Can use multiple `q=<keyword>`s or a comma-delimited string for more than one keyword. Is case insensitive */
    q?: string;
    /**
        @description
          search only for entries with the given repo name(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    repo?: string;
    /**
        @description
          search only for entries with the given release tag(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    tag?: string;
    /**
        @description
          search only for entries with the given language(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    lang?: string;
    /**
        @description
          specifies which release stage to be return of these stages: "prod" - return only the production releases (default); "preprod" - return the pre-production release if it exists instead of the production release; "draft" - return the draft release if it exists instead of pre-production or production release; "latest" -return the default branch (e.g. master) if it is a valid RC instead of the above */
    stage?: string;
    /**
        @description
          search only for entries with the given subject(s). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) unlesss partialMatch=true */
    subject?: string;
    /**
        @description
          search only for entries with the given checking level(s). Can be 1, 2 or 3 */
    checkingLevel?: string;
    /**
        @description
          search only for entries with the given book(s) (project ids). To match multiple, give the parameter multiple times or give a list comma delimited. Will perform an exact match (case insensitive) */
    book?: string;
    /**
        @description
          if true, subject, owner and repo search fields will use partial match (LIKE) when querying the catalog. Default is false */
    partialMatch?: boolean;
    /**
        @description
          if true, all releases, not just the latest, are included. Default is false */
    includeHistory?: boolean;
    /**
        @description
          if false, only subject and title are searched with query terms, if true all metadata values are searched. Default is true */
    includeMetadata?: boolean;
    /**
        @description
          if true, a list of the projects in the resource and their file paths will be listed for each entry. Default is false */
    showIngredients?: boolean;
    /**
        @description
          sort repos alphanumerically by attribute. Supported values are "subject", "title", "reponame", "tag", "released", "lang", "releases", "stars", "forks". Default is by "language", "subject" and then "tag" */
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
          page size of results, defaults to no limit */
    limit?: number;
  };
}

/** @description response type for catalogSearchOwner */
export interface CatalogSearchOwnerResponse {
  200: CatalogSearchResultsV;
  422: ValidationError;
}

export type CatalogSearchOwnerResponseSuccess = CatalogSearchOwnerResponse[200];
/**
 * @description
 *   Catalog search by owner
 * @tags v5
 * @produces application/json
 */
export const catalogSearchOwner = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/catalog/v5/search/:owner";
  function request(
    option: CatalogSearchOwnerOption & RequestParameters
  ): Promise<CatalogSearchOwnerResponseSuccess> {
    return requester(url, {
      basePath: "/api/catalog",
      method,
      ...option,
    }) as unknown as Promise<CatalogSearchOwnerResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
