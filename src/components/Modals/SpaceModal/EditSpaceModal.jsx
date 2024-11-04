import { useForm } from 'react-hook-form';
import './SpaceModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditSpaceModal } from '../../../actions/markActions';

const EditSpaceModal = () => {
  const dispatch = useDispatch();
  const existingSpaces = useSelector((state) => state.mark.spaceList);
  const selectedSpace = useSelector((state) => state.mark.spaceSelected);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      spaceName: selectedSpace.name,
    },
  });

  const onSubmit = (data) => {
    const newSpaceName = data.spaceName.trim();

    // Pour verifié si c'est le même nom ne pas envoyer la requete pour rien
    if (newSpaceName === selectedSpace) {
      dispatch(toggleEditSpaceModal());
      return;
    }

    // si le nom existe déjà
    if (
      existingSpaces.some(
        (space) => space.name.toLowerCase() === newSpaceName.toLowerCase()
      )
    ) {
      setError('spaceName', {
        type: 'manual',
        message: 'Un espace avec ce nom existe déjà',
      });
      return;
    }

    // dispatch(updateSpace(id, name: newSpaceName));
    dispatch(toggleEditSpaceModal());
  };

  const handleCloseSpaceModal = () => {
    dispatch(toggleEditSpaceModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modifier l'espace</h2>
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
            <button type="submit">Modifier</button>
            <button type="button" onClick={handleCloseSpaceModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSpaceModal;
