import { FC } from "react";
import { IMyType } from "./types";

const MyComponent: FC<IMyType> = ({ propName }) => {
  return (
    <>
      <div>{propName}</div>
    </>
  );
};

export default MyComponent;
