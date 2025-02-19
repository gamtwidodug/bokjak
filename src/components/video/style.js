import styled, { keyframes } from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const VideoWrapCom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    @media (max-aspect-ratio: 1/1) {
        flex-direction: column;
        height: 100vh;
    }
`;

export const VideoPlayerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${color('gray', '50')};

    @media (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 100%;
    }

    iframe {
        pointer-events: none;
    }

    div {
        &.video-player {
            width: 100%;
            height: 100%;
        }

        &.video-util-wrap {
            pointer-events: none;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 24px;
            img {
                width: 30px;
                height: 30px;
            }
        }
        &.video-controls-wrap {
            display: flex;
            justify-content: space-between;
        }
        &.video-controls {
            display: flex;
            gap: 24px;
            align-items: center;
            pointer-events: all;

            span {
                &.video-play-time {
                    font-size: ${font('detail', 'md')};
                }
            }
        }
        &.video-util-top {
            position: relative;
            display: flex;
            justify-content: space-between;
            pointer-events: all;

            ul {
                &.video-option-list {
                    position: absolute;
                    right: 0;
                    width: auto;
                    min-width: 232px;
                    padding: 10px 20px;
                    border-radius: 7px;
                    background-color: ${color('gray', '80')};
                    li {
                        &.video-option-item {
                            padding: 15px 0;

                            div {
                                &.option-depth1 {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;

                                    svg {
                                        size: 18px;
                                    }
                                }
                            }
                        }

                        li {
                            &.depth2-item {
                                padding: 15px 0;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const BokjakChatWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    visibility: hidden;

    width: 0;
    min-width: 0;
    height: 100vh;
    background-color: ${color('gray', '80')};
    transition: all 0.2s ease;

    @media (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 0;
    }

    &.chat-window-active {
        visibility: visible;
        width: 30%;
        min-width: 400px;
        padding: 78px 24px 24px 24px;

        @media (max-aspect-ratio: 1/1) {
            width: 100%;
            height: 60%;
            min-height: 60%;
            padding: 20px;
            /* border-radius: 12px; */
        }
    }

    P {
        &.chat-exit {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            padding: 24px;
        }
    }

    div {
        &.chat-content-wrap {
            display: flex;
            flex-direction: column-reverse;
            gap: 12px;

            height: 100%;

            overflow-y: auto;
            -ms-overflow-style: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`;

export const ChatItemWrap = styled.div`
    display: flex;
    gap: 20px;

    span {
        &.chat-username {
            width: auto;
            font-weight: 600;
            white-space: nowrap;
        }
    }
`;

export const ChatFormWrap = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    aside {
        &.emoji-picker {
            position: absolute;
            bottom: 80px;
            right: 0;
        }
    }

    input {
        position: relative;

        width: 100%;
        height: 42px;
        padding: 12px;

        border-radius: 7px;
        border: 1px solid ${color('gray', '60')};
        background-color: transparent;

        color: ${color('gray', '0')};
    }
    button {
        &.chatform-submit-btn {
            position: absolute;
            bottom: 4px;
            right: 4px;

            width: 34px;
            height: 34px;
            background-color: ${color('primary', 'default')};
            border-radius: 4px;
        }
    }
`;

const floatEmoji = keyframes`
0% {

}
`;
