import cubejs, { ResultSet } from "@cubejs-client/core";
import { QueryRenderer, QueryRendererRenderProps } from "@cubejs-client/react";

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDIzNTIxNzMsImV4cCI6MTcwMjQzODU3M30.c-Ou6CS8D1eCbH2r_OgE4eg-y-GZftpJ8lUV1qRhbIk",
  { apiUrl: "http://localhost:4000/cubejs-api/v1" }
);

interface QueryResultProps {
  query: any; // Adjust the type of query as per your needs
  render: (
    resultSet: ResultSet<any> | null,
    error: Error | null
  ) => React.ReactNode;
}

const QueryResult: React.FC<QueryResultProps> = ({ query, render }) => {
  return (
    <QueryRenderer
      query={query}
      cubejsApi={cubejsApi}
      resetResultSetOnChange={false}
      render={(props: QueryRendererRenderProps) =>
        render(props.resultSet, props.error)
      }
    />
  );
};

export default QueryResult;
