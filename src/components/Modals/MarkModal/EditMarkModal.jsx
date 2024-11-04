import './MarkModal.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditMarkModal } from '../../../actions/markActions';

const EditMarkModal = () => {
  const dispatch = useDispatch();
  const currentMark = useSelector((state) => state.mark.currentMarkToEdit);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      markName: currentMark.name,
      markUrl: currentMark.url,
    },
  });

  const onSubmit = (data) => {
    let name = data.markName.trim();
    const url = data.markUrl.trim();

    if (!name) {
      try {
        const urlObject = new URL(url);
        name = urlObject.hostname.replace('www.', '');
      } catch (error) {
        name = url;
      }
    }

    // dispatch(updateMark({ ...currentMark, name, url }));
    dispatch(toggleEditMarkModal());
  };

  const handleCloseMarkModal = () => {
    dispatch(toggleEditMarkModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modifier le lien</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            type="url"
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

          <div className="modal-actions">
            <button type="submit">Modifier</button>
            <button type="button" onClick={handleCloseMarkModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMarkModal;
