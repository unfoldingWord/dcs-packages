/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from "ts-gear";
import { GenerateRequestFunctionNameParameter } from "ts-gear/lib/type";
import baseAdapters from "./adapters/base";
import catalogAdapters from "./adapters/catalog-next";

type Adapters = typeof baseAdapters | typeof catalogAdapters;
type T = keyof Adapters;

type GenerateRequestFunction = GenerateRequestFunctionNameParameter & {
  parameterRequired: boolean;
  parameterTypeName: string;
  responseSuccessTypeName: string;
  project: Project;
  originSource: string;
};

const functionNameGenerator =
  (adapters: Adapters) =>
  (arg: GenerateRequestFunctionNameParameter): string => {
    const pathname = arg.pathname;
    const method = arg.httpMethod;
    const data = arg.schema.paths[pathname];
    const dataKeys = Object.keys(data);
    const key = <T>data[method]?.operationId;
    return dataKeys.length
      ? adapters[key]
      : method +
          pathname
            .split(/[^a-zA-z]/g)
            .reduce(
              (name, path) => (name += path[0].toUpperCase() + path.slice(1)),
              ""
            );
  };

const projects: Project[] = [
  {
    name: "base",
    dest: "service",
    source: "https://git.door43.org/swagger.v1.json",
    importRequesterStatement:
      'import { requester, RequestParameters } from "../../requester"',
    withBasePath: true,
    generateRequestFunctionName: functionNameGenerator(baseAdapters),
    requestOptionUnionType: "RequestParameters",
  },
  {
    name: "catalog-next",
    dest: "service",
    source: "https://git.door43.org/swagger.catalog.json",
    importRequesterStatement:
      'import { requester, RequestParameters } from "../../requester"',
    withBasePath: true,
    generateRequestFunctionName: functionNameGenerator(catalogAdapters),
    requestOptionUnionType: "RequestParameters",
  },
];

export default projects;
