export function validateProjectInput(name) {
  if (name.length > 15) {
    return false;
  } else if (name.length <= 0) {
    return false;
  }

  return true;
}
