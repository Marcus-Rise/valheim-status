import type { FC } from "react";
import { Card, Centered, SkeletonRow } from "../../../components";

const ServerStatusCardSkeleton: FC = () => (
  <Card>
    <Centered column>
      {new Array(4).fill(1).map((_, index) => (
        <SkeletonRow key={index} />
      ))}
    </Centered>
  </Card>
);

export { ServerStatusCardSkeleton };
