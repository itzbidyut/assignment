import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div>
      <Skeleton width="70%" />
      <Skeleton width="40%" />
      <Skeleton width="60%" />
      <Skeleton width="30%" />
      <Skeleton width="50%" />
      <Skeleton width="30%" />
      <Skeleton width="80%" />
    </div>
  );
}
