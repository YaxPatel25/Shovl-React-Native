import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {Post} from '../model/PostModel';
import {User} from '../model/UserModel';

export async function addPost(Post: Post): Promise<any> {
  firestore()
    .collection('Posts')
    .add(Post)
    .then(() => {
      return true;
    })
    .catch(e => {
      Alert.alert('Error Adding Post');
      return false;
    });
}

export async function GetAllPosts(): Promise<Post[]> {
  var posts: Post[] = [];
  var snapShot = firestore()
    .collection('Posts')
    .get()
    .then(querySnapshot => {
      return querySnapshot;
    });

  if ((await snapShot).empty) {
    console.log('No results');
    return posts;
  } else {
    (await snapShot).docs.forEach(doc => {
      var todo: Post = doc.data() as Post;
      todo.id = doc.id;
      posts.push(todo);
    });
    return posts;
  }
}
