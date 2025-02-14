import TopContItem from './TopContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useEffect, useRef } from 'react'
import { getTrending } from '../../../store/modules/getThunk'
import { useDispatch } from 'react-redux'
import { TopListWrap } from './style'
import { NavigationButton } from '../style'
// import { useDispatch } from 'react-redux'

const TopContList = () => {
  const swiperRef = useRef()

  const goNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTrending())
  }, [])

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

export default TopContList
