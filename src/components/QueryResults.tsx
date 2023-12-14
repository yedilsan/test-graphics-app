import QueryResult from "../components/QueryResult";
import AccidentCount from "../components/AccidentCount";

const QueryResults = () => {
  return (
    <>
      <QueryResult
        query={{
          timeDimensions: [
            {
              dimension: "accident.occurred_at",
              dateRange: "Last year",
            },
          ],
          measures: ["accident.count"],
        }}
        render={(resultSet, error) => (
          <AccidentCount
            resultSet={resultSet}
            error={error}
            title="Общее количество ДТП"
          />
        )}
      />

      <QueryResult
        query={{
          limit: 5000,
          measures: ["accident.count"],
          order: {
            "accident.count": "desc",
          },
          dimensions: ["accident.public_transport"],
          filters: [
            {
              member: "accident.public_transport",
              operator: "equals",
              values: ["true"],
            },
          ],
          timeDimensions: [
            {
              dimension: "accident.occurred_at",
              dateRange: "Last year",
            },
          ],
        }}
        render={(resultSet, error) => (
          <AccidentCount
            resultSet={resultSet}
            error={error}
            title="С участием общ.транспорта"
          />
        )}
      />

      <QueryResult
        query={{
          measures: ["accident.count"],
          dimensions: ["kind.name_ru"],
          timeDimensions: [
            {
              dimension: "accident.occurred_at",
              dateRange: "Last year",
            },
          ],
          order: {
            "kind.count": "desc",
          },
          filters: [
            {
              member: "kind.name_ru",
              operator: "contains",
              values: ["наезд на пешехода"],
            },
          ],
        }}
        render={(resultSet, error) => (
          <AccidentCount
            resultSet={resultSet}
            error={error}
            title="С участием пешехода"
          />
        )}
      />
      <QueryResult
        query={{
          dimensions: ["impairment.name_ru"],
          timeDimensions: [
            {
              dimension: "accident.occurred_at",
              dateRange: "Last year",
            },
          ],
          order: {
            "accident_impairment.count": "desc",
          },
          measures: ["accident_impairment.count"],
          filters: [
            {
              member: "impairment.id",
              operator: "equals",
              values: [2],
            },
          ],
        }}
        render={(resultSet, error) => (
          <AccidentCount
            resultSet={resultSet}
            error={error}
            title="С алкогольным опьянением"
          />
        )}
      />
    </>
  );
};

export default QueryResults;
