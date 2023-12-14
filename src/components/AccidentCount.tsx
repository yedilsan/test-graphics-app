import React from "react";
import { ResultSet } from "@cubejs-client/core";

interface AccidentCountProps {
  resultSet: ResultSet<any> | null;
  error: Error | null;
  title: string;
}

const AccidentCount: React.FC<AccidentCountProps> = ({
  resultSet,
  error,
  title,
}) => {
  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return;
  }

  const accidentCount = resultSet.series()[0]?.series[0]?.value || 0;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        fontSize: "16px",
      }}
    >
      <p>{title}</p>
      <span>{accidentCount}</span>
    </div>
  );
};

export default AccidentCount;
