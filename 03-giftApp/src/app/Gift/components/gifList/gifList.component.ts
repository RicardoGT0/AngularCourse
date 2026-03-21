import { AfterViewInit, Component, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { GitListItemComponent } from "./gifList-item/gifList-item.component";
import { Gif } from '../../interfaces/Gif.interfaces';
import { ScrollStateService } from '../../services/scrollState.service';

@Component({
  selector: 'gif-list',
  imports: [GitListItemComponent],
  templateUrl: './gifList.component.html',
})

export class GifListComponent implements AfterViewInit {
  gifs = input.required<Gif[]>()
  needToLoadMore = output<Boolean>();
  scrollStateService = inject(ScrollStateService);
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('GroupDivGifList')



  readyToLoad() {
    const scrollElement = this.scrollDivRef()?.nativeElement
    if (!scrollElement)
      return { result: false, reason: "scrollElement is null" }

    const scrollTop = scrollElement.scrollTop ?? 0
    const scrollHeight = scrollElement.scrollHeight ?? 0
    const clientHeight = scrollElement.clientHeight ?? 0
    if (!(scrollHeight && clientHeight))
      return { result: false, reason: "Scroll values are invalid" }
    this.scrollStateService.setScrollPosition(scrollTop);
    if ((scrollTop + clientHeight >= (scrollHeight * 0.7)) || (scrollHeight === clientHeight))
      return { result: true, reason: "Ready to load" }
    return { result: false, reason: "Not ready to load" }
  }

  ngAfterViewInit() {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return
    scrollDiv.scrollTop = this.scrollStateService.getScrollPosition();

    if (this.readyToLoad().result) {
      this.needToLoadMore.emit(true);
    }
  }


  onScroll(event: Event) {
    if (this.readyToLoad().result) {
      this.needToLoadMore.emit(true);
    }
  }
}
