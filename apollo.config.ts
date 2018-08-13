/* tslint:disable */

module.exports = {
  schemas: {
    myPrimaryBackend: {
      schema: "schema.json", // if not defined the an introspection query will be run
      endpoint: "http://localhost:4000" // if not defined the schema will be downloaded from Apollo Engine
    }
  },
  queries: [
    // optional if you only have one schema
    {
      schema: "myPrimaryBackend", // reference the previously defined schema
      includes: ["**/*.tsx", "**/*.ts"], // load queries from .tsx files
      excludes: ["node_modules/**"] // don't include any matching files from node_modules
    }
  ]
};
