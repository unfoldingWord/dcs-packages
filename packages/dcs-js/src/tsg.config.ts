/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from "ts-gear";
import { GenerateRequestFunctionNameParameter } from "ts-gear/lib/type";

const generateRequestFunctionName = (
  arg: GenerateRequestFunctionNameParameter
): string => {
  const pathname = arg.pathname;
  const method = arg.httpMethod;
  const data = arg.schema.paths[pathname];
  const dataKeys = Object.keys(data);
  return dataKeys.length
    ? data[method].operationId
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
    importRequesterStatement: 'import requester from "./requester.ts"',
    generateRequestFunctionName,
  },
  {
    name: "catalog-next",
    dest: "service",
    source: "https://git.door43.org/swagger.catalog.json",
    importRequesterStatement: 'import requester from "./requester.ts"',
    generateRequestFunctionName,
  },
];

export default projects;
