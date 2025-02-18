import { useSelector } from 'react-redux';
import Mark from './Mark/Mark';
import './Space.scss';
import AddMarkButton from './Mark/AddMarkButton/AddMarkButton';
import AddMarkRowButton from './MarkRow/AddMarkRowButton/AddMarkRowButton';
import SkeletonMark from '../Loading/SkeletonMark/SkeletonMark';
import MarkRow from './MarkRow/MarkRow';

const Space = () => {
  const isExpertMode = useSelector((state) => state.mark.isExpertMode);
  const marks = useSelector((state) => state.mark.markList);
  const isEditMode = useSelector((state) => state.mark.isEditMode);
  const isMarksLoading = useSelector((state) => state.mark.isMarksLoading);
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="space-container">
      <div
        className={
          !isExpertMode
            ? 'space-content'
            : 'space-content space-content--expert'
        }
      >
        {isExpertMode ? (
          <>
            {!isEditMode && <AddMarkRowButton />}
            {marks.map((mark) => (
              <MarkRow key={mark.id} {...mark} />
            ))}
          </>
        ) : (
          <>
            {!isEditMode && <AddMarkButton />}
            {isMarksLoading
              ? numbersArray.map((number) => (
                  <SkeletonMark key={`skeleton-${number}`} />
                ))
              : marks.map((mark) => <Mark key={mark.id} {...mark} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default Space;
