import React from "react";
import { GitCommit } from "../type";

export type HistoryContentProps = {
  data?: GitCommit[];
};

const columns = ["email", "name", "date"];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const HistoryContent = (props: HistoryContentProps) => {
  const { data: contentData } = props;
  if (!contentData || contentData.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className=" text-red-400">Couldn't find history!</span>
      </div>
    );
  }

  return (
    <div className="px-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Message</th>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contentData.map(({ commit = {} }, index) => {
            const committer: any = commit.committer || {};
            const { message } = commit;
            return (
              <tr key={index} className=" border">
                <td>{index}</td>
                <td width={500} className=" text-left px-4">
                  {message}
                </td>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {column === "date"
                      ? formatDate(committer[column])
                      : committer[column] || "Undefined"}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryContent;
