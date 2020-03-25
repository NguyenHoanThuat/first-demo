import React, { useState } from 'react';
import './Example.scss'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://c4.wallpaperflare.com/wallpaper/944/509/284/moonlight-fish-wolf-sword-wallpaper-preview.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://i.imgur.com/wWuP0RM.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://2.bp.blogspot.com/-uCytMw1-Lv4/XMG5yfOMKiI/AAAAAAAAPt0/Z42e5BJGanY2WVl-TwbubKahvKKVPVu_gCLcBGAs/s1600/ava6.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://anhdepfree.com/wp-content/uploads/2019/05/anh-anime-dep-lam-hinh-nen-2.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-slide" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slide;