export const errorMessage = (error: unknown) => {
  let message: string;

  if (error instanceof Error) {
    message = `${error.message}. Try again later, please!`;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(`${error.message}. Try again later, please!`);
  } else if (typeof error === 'string') {
    message = `${error}. Try again later, please!`;
  } else {
    message = 'An error occurred, try again later, please!';
  }
  return message;
};
