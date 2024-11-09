// ShareSpaceHandler.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cloneSharedSpace } from '../../actions/markActions';
import { setLoading } from '../../actions/authActions';

const ShareSpaceHandler = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(cloneSharedSpace(token));
    navigate('/');
  }, [dispatch, token, navigate]);

  return null;
};

export default ShareSpaceHandler;
