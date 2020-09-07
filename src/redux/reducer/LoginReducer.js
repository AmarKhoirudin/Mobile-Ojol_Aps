const initialState = {
  form: {email: '', password: ''},
  title: 'Login Page',
  desc: 'Silahkan ke halaman login jika belom mempunya akun',
};

const LoginReducer = (state = initialState, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

export default LoginReducer;
