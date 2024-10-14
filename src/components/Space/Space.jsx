import { useSelector } from 'react-redux';
import Mark from './Mark/Mark';
import './Space.scss';
import AddMarkButton from './Mark/AddMarkButton/AddMarkButton';

const Space = () => {
  const marks = useSelector((state) => state.mark.markList);

  return (
    <div className="space-container">
      <div className="space-content">
        {marks.map((mark) => (
          <Mark key={mark.id} {...mark} />
        ))}
        <AddMarkButton />
      </div>
    </div>
  );
};

export default Space;
