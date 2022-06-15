/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.16.7+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { MarkdownOption } from '../models';
import { NodeInfo } from '../models';
import { ServerVersion } from '../models';
/**
 * MiscellaneousApi - axios parameter creator
 * @export
 */
export const MiscellaneousApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns the nodeinfo of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNodeInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/nodeinfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            // authentication AuthorizationHeaderToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication BasicAuth required
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }

            // authentication SudoHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Sudo")
                    : await configuration.apiKey;
                localVarHeaderParameter["Sudo"] = localVarApiKeyValue;
            }

            // authentication SudoParam required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("sudo")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["sudo"] = localVarApiKeyValue;
            }

            // authentication TOTPHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-GITEA-OTP")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-GITEA-OTP"] = localVarApiKeyValue;
            }

            // authentication Token required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get default signing-key.gpg
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSigningKey: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/signing-key.gpg`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            // authentication AuthorizationHeaderToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication BasicAuth required
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }

            // authentication SudoHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Sudo")
                    : await configuration.apiKey;
                localVarHeaderParameter["Sudo"] = localVarApiKeyValue;
            }

            // authentication SudoParam required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("sudo")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["sudo"] = localVarApiKeyValue;
            }

            // authentication TOTPHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-GITEA-OTP")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-GITEA-OTP"] = localVarApiKeyValue;
            }

            // authentication Token required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns the version of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersion: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/version`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            // authentication AuthorizationHeaderToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication BasicAuth required
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }

            // authentication SudoHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Sudo")
                    : await configuration.apiKey;
                localVarHeaderParameter["Sudo"] = localVarApiKeyValue;
            }

            // authentication SudoParam required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("sudo")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["sudo"] = localVarApiKeyValue;
            }

            // authentication TOTPHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-GITEA-OTP")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-GITEA-OTP"] = localVarApiKeyValue;
            }

            // authentication Token required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Render a markdown document as HTML
         * @param {MarkdownOption} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderMarkdown: async (body?: MarkdownOption, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/markdown`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            // authentication AuthorizationHeaderToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication BasicAuth required
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }

            // authentication SudoHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Sudo")
                    : await configuration.apiKey;
                localVarHeaderParameter["Sudo"] = localVarApiKeyValue;
            }

            // authentication SudoParam required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("sudo")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["sudo"] = localVarApiKeyValue;
            }

            // authentication TOTPHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-GITEA-OTP")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-GITEA-OTP"] = localVarApiKeyValue;
            }

            // authentication Token required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Render raw markdown as HTML
         * @param {string} body Request body to render
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderMarkdownRaw: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling renderMarkdownRaw.');
            }
            const localVarPath = `/markdown/raw`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("access_token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["access_token"] = localVarApiKeyValue;
            }

            // authentication AuthorizationHeaderToken required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            // authentication BasicAuth required
            if (configuration && (configuration.username || configuration.password)) {
                localVarHeaderParameter["Authorization"] = "Basic " + btoa(configuration.username + ":" + configuration.password);
            }

            // authentication SudoHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Sudo")
                    : await configuration.apiKey;
                localVarHeaderParameter["Sudo"] = localVarApiKeyValue;
            }

            // authentication SudoParam required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("sudo")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["sudo"] = localVarApiKeyValue;
            }

            // authentication TOTPHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-GITEA-OTP")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-GITEA-OTP"] = localVarApiKeyValue;
            }

            // authentication Token required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("token")
                    : await configuration.apiKey;
                if (localVarApiKeyValue) localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'text/plain';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MiscellaneousApi - functional programming interface
 * @export
 */
export const MiscellaneousApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns the nodeinfo of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNodeInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<NodeInfo>>> {
            const localVarAxiosArgs = await MiscellaneousApiAxiosParamCreator(configuration).getNodeInfo(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get default signing-key.gpg
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSigningKey(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await MiscellaneousApiAxiosParamCreator(configuration).getSigningKey(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Returns the version of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersion(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ServerVersion>>> {
            const localVarAxiosArgs = await MiscellaneousApiAxiosParamCreator(configuration).getVersion(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Render a markdown document as HTML
         * @param {MarkdownOption} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderMarkdown(body?: MarkdownOption, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await MiscellaneousApiAxiosParamCreator(configuration).renderMarkdown(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Render raw markdown as HTML
         * @param {string} body Request body to render
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderMarkdownRaw(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await MiscellaneousApiAxiosParamCreator(configuration).renderMarkdownRaw(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MiscellaneousApi - factory interface
 * @export
 */
export const MiscellaneousApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Returns the nodeinfo of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNodeInfo(options?: AxiosRequestConfig): Promise<AxiosResponse<NodeInfo>> {
            return MiscellaneousApiFp(configuration).getNodeInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get default signing-key.gpg
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSigningKey(options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return MiscellaneousApiFp(configuration).getSigningKey(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns the version of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersion(options?: AxiosRequestConfig): Promise<AxiosResponse<ServerVersion>> {
            return MiscellaneousApiFp(configuration).getVersion(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Render a markdown document as HTML
         * @param {MarkdownOption} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderMarkdown(body?: MarkdownOption, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return MiscellaneousApiFp(configuration).renderMarkdown(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Render raw markdown as HTML
         * @param {string} body Request body to render
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderMarkdownRaw(body: string, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return MiscellaneousApiFp(configuration).renderMarkdownRaw(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MiscellaneousApi - object-oriented interface
 * @export
 * @class MiscellaneousApi
 * @extends {BaseAPI}
 */
export class MiscellaneousApi extends BaseAPI {
    /**
     * 
     * @summary Returns the nodeinfo of the Gitea application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public async getNodeInfo(options?: AxiosRequestConfig) : Promise<AxiosResponse<NodeInfo>> {
        return MiscellaneousApiFp(this.configuration).getNodeInfo(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get default signing-key.gpg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public async getSigningKey(options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return MiscellaneousApiFp(this.configuration).getSigningKey(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Returns the version of the Gitea application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public async getVersion(options?: AxiosRequestConfig) : Promise<AxiosResponse<ServerVersion>> {
        return MiscellaneousApiFp(this.configuration).getVersion(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Render a markdown document as HTML
     * @param {MarkdownOption} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public async renderMarkdown(body?: MarkdownOption, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return MiscellaneousApiFp(this.configuration).renderMarkdown(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Render raw markdown as HTML
     * @param {string} body Request body to render
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public async renderMarkdownRaw(body: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return MiscellaneousApiFp(this.configuration).renderMarkdownRaw(body, options).then((request) => request(this.axios, this.basePath));
    }
}
