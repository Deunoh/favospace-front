import { useForm } from 'react-hook-form';
import '../Modals.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModifyAccountModal } from '../../../actions/markActions';
import { clearErrors, updateUserAccount } from '../../../actions/authActions';

const UserInfos = () => {
  const dispatch = useDispatch();
  const { userName, userEmail, updateErrors } = useSelector(
    (state) => state.user
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userName,
      email: userEmail,
    },
  });

  const handleCloseUserModal = () => {
    dispatch(toggleModifyAccountModal());
    dispatch(clearErrors());
  };

  const onSubmit = (data) => {
    const userInfos = {
      name: data.name.trim(),
      email: data.email.trim(),
    };
    dispatch(updateUserAccount(userInfos));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modifier mes informations</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('name', {
              required: 'Le nom est requis',
              minLength: {
                value: 2,
                message: 'Le nom doit contenir au moins 2 caractères',
              },
            })}
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
          {/* Erreurs du backend */}
          {updateErrors.name && (
            <p className="error-message">{updateErrors.name[0]}</p>
          )}

          <input
            type="email"
            {...register('email', {
              required: "L'email est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide',
              },
            })}
            placeholder="Votre email"
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
          {/* Erreurs du backend */}
          {updateErrors.email && (
            <p className="error-message">{updateErrors.email[0]}</p>
          )}

          <div className="modal-actions">
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={handleCloseUserModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfos;
