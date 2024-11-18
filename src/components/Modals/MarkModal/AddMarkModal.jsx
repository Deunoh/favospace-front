/* eslint-disable jsx-a11y/no-autofocus */
import './MarkModal.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addMark, toggleAddMarkModal } from '../../../actions/markActions';

const AddMarkModal = () => {
  const dispatch = useDispatch();
  const spaceId = useSelector((state) => state.mark.spaceSelected.id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let name = data.markName.trim();
    const url = data.markUrl.trim();
    const description = data.markDescription.trim() || null;

    if (!name) {
      try {
        const urlObject = new URL(url);
        name = urlObject.hostname.replace('www.', '');
      } catch (error) {
        name = url;
      }
    }
    dispatch(addMark({ name, url, description, spaceId }));
    dispatch(toggleAddMarkModal());
  };

  const handleCloseMarkModal = () => {
    dispatch(toggleAddMarkModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Ajouter un nouveau lien</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            autoFocus
            type="url"
            className="url-input"
            {...register('markUrl', {
              required: "L'URL du lien est requise",
              pattern: {
                value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)?$/,
                message: 'Veuillez entrer une URL valide',
              },
            })}
            placeholder="URL du lien"
          />
          {errors.markUrl && (
            <p className="error-message">{errors.markUrl.message}</p>
          )}
          <input
            type="text"
            {...register('markName', {
              minLength: {
                value: 2,
                message: 'Le nom doit contenir au moins 2 caractères',
              },
            })}
            placeholder="Nom du lien (Optionnel)"
          />
          {errors.markName && (
            <p className="error-message">{errors.markName.message}</p>
          )}
          <input
            type="text"
            {...register('markDescription', {
              maxLength: {
                value: 255,
                message: 'La description ne peut pas dépasser 255 caractères',
              },
            })}
            placeholder="Description du lien (Optionnel)"
          />
          {errors.markDescription && (
            <p className="error-message">{errors.markDescription.message}</p>
          )}

          <div className="modal-actions">
            <button type="submit">Ajouter</button>
            <button type="button" onClick={handleCloseMarkModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMarkModal;
