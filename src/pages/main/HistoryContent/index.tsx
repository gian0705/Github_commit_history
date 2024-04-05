import React from "react";
import { GitCommit } from "../type";
export type HistoryContentProps = {
  data?: GitCommit[];
};

const columns = ["email", "name", "date"];

const HistoryContent = (props: HistoryContentProps) => {
  const { data: contentData } = props;
  if (!contentData || contentData.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className=" text-red-400">Couldn't found history!</span>
      </div>
    );
  }

  return (
    <div>
      <table className="table-auto">
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
          {contentData &&
            contentData.map(({ commit = {} }, index) => {
              const committer: any = commit.committer || {};
              const { message } = commit;
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{message}</td>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>
                      {committer[column] || "Undefined"}
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
