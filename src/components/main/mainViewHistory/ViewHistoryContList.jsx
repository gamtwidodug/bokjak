import styled from 'styled-components'
import { font } from '../../../styled/theme'
import { media } from '../../../styled/media'
import { useDispatch } from 'react-redux'
import { detailActions } from '../../../store/modules/detailSlice'
import ViewHistoryContItem from './ViewHistoryContItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useRef } from 'react'

const ViewHistoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
  .viewHeader {
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
  .viewList {
    display: flex;
    flex-direction: row;
    overflow: visible;
    position: relative;

    .swiper {
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .swiper-slide {
      flex: 0 0 auto;
      min-width: 180px;
      max-width: 200px;
      ${media.tablet} {
        min-width: 220px;
        max-width: 250px;
      }
      ${media.desktop} {
        min-width: 300px;
        max-width: 320px;
      }
    }
  }
`
const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;
`
const ViewHistoryContList = () => {
  const dispatch = useDispatch()
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }
  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  return (
    <ViewHistoryContainer>
      <div className="viewHeader">
        <h2>title</h2>
        <h3>more</h3>
      </div>

      <div className="viewList">
        <Swiper
          className="swiper"
          ref={swiperRef}
          modules={[Navigation]}
          pagination={{ clickable: true }}
          slidesPerView="auto"
          slidesPerGroup={4.5}
          navigation={false}
          breakpoints={{
            320: { slidesPerView: 2.5, spaceBetween: 10 },
            600: { slidesPerView: 3.5, spaceBetween: 16 },
            1024: { slidesPerView: 4.5, spaceBetween: 24 },
          }}>
          <SwiperSlide>
            <ViewHistoryContItem
              onClick={() => dispatch(detailActions.openDetailModal())}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
          </SwiperSlide>
          <SwiperSlide>
            <ViewHistoryContItem />
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
    </ViewHistoryContainer>
  )
}

export default ViewHistoryContList
