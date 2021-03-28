import type {FC} from 'react';
import {Card, Centered, SkeletonRow} from "../../../components";

const ServerStatusCardSkeleton: FC = () => {
  return (
    <Card>
      <Centered column>
        {new Array(4).fill(1).map(() => <SkeletonRow />)}
      </Centered>
    </Card>
  );
};

export {ServerStatusCardSkeleton};