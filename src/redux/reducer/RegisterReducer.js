const initialState = {
  form: {fullName: '', email: '', password: ''},
  title: 'Register page',
  desc:
    'ini adalah halaman register jika anda sudah membuat akun silahkan ke halaman login',
};

const RegisterReducer = (state = initialState, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register title di ganti',
    };
  }
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

export default RegisterReducer;
