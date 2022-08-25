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
import { Repository } from './repository';
/**
 * SearchResults results of a successful search
 * @export
 * @interface SearchResults
 */
export interface SearchResults {
    /**
     * 
     * @type {Array<Repository>}
     * @memberof SearchResults
     */
    data?: Array<Repository>;
    /**
     * 
     * @type {boolean}
     * @memberof SearchResults
     */
    ok?: boolean;
}
