// Firebase Authentication Functions
import auth from '@react-native-firebase/auth';

export async function signupUserFirebase(username: string, password: string, name: string): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password)
}

export async function singInUserFirebase(
  username: string,
  password: string,
): Promise<any> {
  return auth().signInWithEmailAndPassword(username, password);
}

export async function singUpUserFirebase(
  username: string,
  password: string,
  name : string
): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export async function fetchUser(userId: String): Promise<any> {
  const user = auth().currentUser;
  if (user) {
    return {
      username: 'Random Name',
      email: user.email,
      userId: userId,
    };
  } else {
    return {
      username: 'Test User',
      email: 'user@user.com',
      userId: userId,
    };
  }
}