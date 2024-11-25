import { useSelector } from 'react-redux';
import Mark from './Mark/Mark';
import './Space.scss';
import AddMarkButton from './Mark/AddMarkButton/AddMarkButton';
import SkeletonMark from '../Loading/SkeletonMark/SkeletonMark';

const Space = () => {
  const marks = useSelector((state) => state.mark.markList);
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const isMarksLoading = useSelector((state) => state.mark.isMarksLoading);
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="space-container">
      <div className="space-content">
        {!isEditMode && <AddMarkButton />}
        {isMarksLoading
          ? numbersArray.map((number) => (
              <SkeletonMark key={`skeleton-${number}`} />
            ))
          : marks.map((mark) => <Mark key={mark.id} {...mark} />)}
      </div>
    </div>
  );
};

export default Space;
