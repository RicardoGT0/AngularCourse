import { Gif } from '../interfaces/Gif.interfaces';
import { GiphyItem } from '../interfaces/Giphy.interfaces';

export class GifMapper {
  static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
    return {
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url
    }
  }

  static mapGiphyItemsToGifArray(giphyArray: GiphyItem[]): Gif[] {
    return giphyArray.map(this.mapGiphyItemToGif)
  }
}
