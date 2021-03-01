export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToLogin = (history) => {
  history.push("/");
};

export const goToDetailsPost = (history, id) => {
  history.push(`/post/${id}`);
};
