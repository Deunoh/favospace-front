import './SkeletonMark.scss';

const SkeletonMark = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-img-container" />
      <div className="skeleton-title" />
    </div>
  );
};

export default SkeletonMark;
