import React from "react";

interface BBSCardListProps {
  children: React.ReactNode;
}

const BBSCardList = ({ children }: BBSCardListProps) => {
  return <div className="grid lg:grid-cols-3 p-4 gap-4">{children}</div>;
};

export default BBSCardList;
