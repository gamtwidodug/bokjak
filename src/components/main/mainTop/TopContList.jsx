import styled from 'styled-components';
import { font } from '../../../styled/theme';
import TopContItem from './TopContItem';
import { IconButton } from '../../../ui';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { media } from '../../../styled/media';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { getTrending } from '../../../store/modules/getThunk';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux'

const TopListWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    ${media.mobile} {
        gap: 20px;
    }
    .topHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            font-size: ${font('title', 'xxlg')};
            ${media.tablet} {
                font-size: ${font('title', 'xlg')};
            }
            ${media.mobile} {
                font-size: ${font('title', 'lg')};
            }
        }
        h3 {
            font-size: ${font('body', 'sm')};
        }
    }

  }
  .topList {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    .swiper {
      width: 100%;
      overflow: visible;
    }
    .swiper-slide {
      width: auto;
      height: auto;

    }
`;

const NavigationButton = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 3;
`;

const TopContList = () => {
    const swiperRef = useRef();

    const goNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrending());
    }, []);


  return (
    <TopListWrap>
      <div className="topHeader">
        <h2>title</h2>
        <h3>more</h3>
      </div>
      <div className="topList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 'auto', slidesPerGroup: 3, spaceBetween: 10 },
            390: { slidesPerView: 'auto', slidesPerGroup: 3, spaceBetween: 10 },

            768: { slidesPerView: 'auto', slidesPerGroup: 4, spaceBetween: 16 },
            1024: {
              slidesPerView: 'auto',
              slidesPerGroup: 5,
              spaceBetween: 24,
            },
          }}>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <SwiperSlide>
            <TopContItem />
          </SwiperSlide>
          <NavigationButton>
            <IconButton
              onClick={goPrev}
              className="b30"
              icon={<CaretLeft size={24} />}
              text="caretLeft"
            />
            <IconButton
              onClick={goNext}
              className="b30"
              icon={<CaretRight size={24} />}
              text="caretRight"
            />
          </NavigationButton>
        </Swiper>
      </div>
    </TopListWrap>
  )
}


export default TopContList;
