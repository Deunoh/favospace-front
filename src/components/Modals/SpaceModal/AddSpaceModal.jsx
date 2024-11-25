import { useForm } from 'react-hook-form';
import '../Modals.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addSpace, toggleAddSpaceModal } from '../../../actions/markActions';

const AddSpaceModal = () => {
  const dispatch = useDispatch();
  const existingSpaces = useSelector((state) => state.mark.spaceList);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    const spaceName = data.spaceName.trim();
    if (
      existingSpaces.some(
        (space) => space.name.toLowerCase() === spaceName.toLowerCase()
      )
    ) {
      setError('spaceName', {
        type: 'manual',
        message: 'Un espace avec ce nom existe déjà',
      });
      return;
    }
    dispatch(addSpace(spaceName));
    dispatch(toggleAddSpaceModal());
  };

  const handleCloseSpaceModal = () => {
    dispatch(toggleAddSpaceModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Ajouter un nouvel espace</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('spaceName', {
              required: "Le nom de l'espace est requis",
              minLength: {
                value: 2,
                message: 'Le nom doit contenir au moins 2 caractères',
              },
            })}
            placeholder="Nom de l'espace"
          />
          {errors.spaceName && (
            <p className="error-message">{errors.spaceName.message}</p>
          )}
          <div className="modal-actions">
            <button type="submit">Ajouter</button>
            <button type="button" onClick={handleCloseSpaceModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpaceModal;
