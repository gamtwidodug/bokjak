import styled from 'styled-components'
import { color } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { Play } from '@phosphor-icons/react'
import { media } from '../../../styled/media'

const ViewHistoryItemCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  gap: 16px;
  .thumbnailCont {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .thumbnailBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    min-height: 200px;
    border-radius: 7px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
      background: ${color('gray', '70')};
      ${media.mobile} {
        border-radius: 5px;
      }
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${media.mobile} {
      width: 24px;
      height: 24px;
      size: 18px;
    }
  }
`

const StateBar = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: ${color('gray', '50')};
  z-index: 1;
  border-radius: 0 0 7px 7px;
  ${media.mobile} {
    height: 3px;
    border-radius: 0 0 5px 5px;
  }
`

const ViewHistoryContItem = () => {
  return (
    <ViewHistoryItemCont>
      <div className="thumbnailCont">
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt=""
        />

        <div className="icon">
          <IconButton
            className="border"
            icon={<Play size={24} weight="fill" />}
            text="Play"
          />
        </div>
        <StateBar>
          <div className="progress"></div>
        </StateBar>
      </div>
    </ViewHistoryItemCont>
  )
}

export default ViewHistoryContItem
