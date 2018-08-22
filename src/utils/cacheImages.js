import { Image } from 'react-native';
import { Asset } from 'expo';


export function cacheImages(imgs) {
  return imgs.map(img => {
    if(typeof img === 'stirng') {
      return Image.prefetch(img);
    } else {
      return Asset.fromModule(img).downloadAsync();
    }
  });
}
