// Firebase Authentication Functions
import auth from '@react-native-firebase/auth';

export async function signupUserFirebase(username: string, password: string): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export async function singInUserFirebase(
  username: string,
  password: string,
): Promise<any> {
  return auth().signInWithEmailAndPassword(username, password);
}