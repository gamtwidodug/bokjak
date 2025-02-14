import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AboutWrap } from './style';
import { BarButton } from '../../ui';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

    gsap.fromTo(
      '.floating-animation',
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((section, i) => {
      const width = section.scrollWidth;
      gsap.to(section, {
        x: -width,
        ease: 'linear',
        repeat: -1,
        duration: 10,
        delay: i, // Each section starts 1 second after the previous
        modifiers: {
          x: (x) => gsap.utils.wrap(-width, 0, parseFloat(x)) + 'px',
        },
      });
    });

    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: '복작은 무엇인가요?',
      answer:
        '복작은 사용자들에게 다양한 콘텐츠를 제공하는 스트리밍 플랫폼입니다. 저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.',
    },
    {
      question: '복작에서 어떤 콘텐츠를 시청할 수 있나요?',
      answer:
        '복작에서는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.',
    },
    {
      question: '복작을 어디에서 시청할 수 있나요?',
      answer:
        '언제 어디서나 시청할 수 있습니다. 로그인하면 PC에서 bokjak.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.',
    },
    {
      question: '복작을 얼마에 이용할 수 있나요?',
      answer:
        '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 복작을 시청하세요. 멤버십 요금은 월 9,900원부터 15,600원까지 다양합니다. 추가 비용이나 약정이 없습니다.',
    },
  ];

  return (
    <AboutWrap>
      {/* Hero Section */}
      <section>
        <div
          style={{
            position: 'relative',
            backgroundImage:
              "url('https://raw.githubusercontent.com/lse-7660/bokjak-image/ea1decc22540a6f97e470d430f20a256bd37a994/images/about/headerimgg.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '800px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              zIndex: 1,
            }}
          ></div>
          <h1
            style={{
              position: 'absolute',
              top: '300px',
              left: '10%',
              fontWeight: 'bold',
              zIndex: 2,
              color: 'white',
            }}
          >
            이 모든 이야기가 여기에 <br /> 지금 스트리밍 중
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="flex-grow text-center">
        <div className="max-w-screen-lg mx-auto">
          <h2
            style={{
              textAlign: 'center',
              paddingTop: '200px',
            }}
          >
            BOKJAK의 영화, 애니메이션
          </h2>
          <h3
            style={{
              textAlign: 'center',
              paddingTop: '10px',
              paddingBottom: '50px',
            }}
          >
            다른 어디에서도 볼 수 없는 복작을 만나보세요. <br />
            영화, 드라마, 애니메이션
          </h3>
        </div>
      </section>

      {/* 추가된 이미지 그리드 섹션 */}
      <section
        className="scroll-section"
        style={{
          display: 'flex',
          flexWrap: 'nowrap', // 한 줄 유지
          justifyContent: 'flex-start', // 왼쪽 정렬
          gap: '15px',
          overflowX: 'auto', // 가로 스크롤 가능
          whiteSpace: 'nowrap', // 줄 바꿈 방지
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* 이미지 리스트 */}
        {[
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-1.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-10.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-2.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-4.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-3.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-5.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-6.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-8.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-7.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-9.png',
        ].map((img, index) => (
          <div
            key={index}
            style={{
              width: '30%', // 크기 증가
              minWidth: '250px', // 최소 크기 증가
              aspectRatio: '16 / 9',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="hover:scale-105"
          ></div>
        ))}
      </section>
      <section
        className="scroll-section"
        style={{
          display: 'flex',
          flexWrap: 'nowrap', // 한 줄 유지
          justifyContent: 'flex-start', // 왼쪽 정렬
          gap: '15px',
          paddingTop: '10px',
          overflowX: 'auto', // 가로 스크롤 가능
          whiteSpace: 'nowrap', // 줄 바꿈 방지
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* 이미지 리스트 */}
        {[
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-9.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-6.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-5.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-4.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-3.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-2.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-10.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-8.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-1.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-7.png',
        ].map((img, index) => (
          <div
            key={index}
            style={{
              width: '30%', // 크기 증가
              minWidth: '250px', // 최소 크기 증가
              aspectRatio: '16 / 9',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="hover:scale-105"
          ></div>
        ))}
      </section>
      <section
        className="scroll-section"
        style={{
          display: 'flex',
          flexWrap: 'nowrap', // 한 줄 유지
          justifyContent: 'flex-start', // 왼쪽 정렬
          gap: '15px',
          paddingTop: '10px',
          overflowX: 'auto', // 가로 스크롤 가능
          whiteSpace: 'nowrap', // 줄 바꿈 방지
        }}
      >
        {/* 이미지 리스트 */}
        {[
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-10.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-2.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-3.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/ed65b9963c35ce9b2178fabfd2993f40b92888de/images/about/movevisual2-4.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-6.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-4.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-5.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/48de5d9e8827900045f128317f07c7c24d4c0db8/images/about/movevisual1-8.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-9.png',
          'https://raw.githubusercontent.com/lse-7660/bokjak-image/7791a8d09f6cc22fddcd359a3886384bf5013c07/images/about/movevisual3-7.png',
        ].map((img, index) => (
          <div
            key={index}
            style={{
              width: '30%', // 크기 증가
              minWidth: '250px', // 최소 크기 증가
              aspectRatio: '16 / 9',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="hover:scale-105"
          ></div>
        ))}
      </section>

      <section>
        <h6
          style={{
            paddingTop: '100px',
          }}
        >
          1,200편 이상의 영화 | 20,000편 이상의 에피소드 | 신규 및 단독 콘텐츠
        </h6>
      </section>

      {/* Floating Animation Section */}
      <section className="py-12">
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '300px',
            zIndex: 2, // 텍스트가 맨 위에 오도록
            position: 'relative',
          }}
        >
          좋아하는 콘텐츠를 친구들과 함께 <br /> 감상하며 즐거움을 나눠보세요!
        </h2>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '80px',
            position: 'relative', // 애니메이션 이미지와 배경 이미지가 겹칠 수 있도록 설정
            zIndex: 1, // 애니메이션 이미지는 배경 이미지 위에 오게 설정
          }}
        >
          <img
            src="https://raw.githubusercontent.com/lse-7660/bokjak-image/ea1decc22540a6f97e470d430f20a256bd37a994/images/about/watchparty-2.png"
            alt="복작화면"
            className="floating-animation"
            style={{
              maxWidth: '500px',
              height: 'auto',
            }}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '300px',
          }}
        >
          원하는 멤버십을 선택하세요
        </h2>
        <h3
          style={{
            textAlign: 'center',
            paddingTop: '10px',
            paddingBottom: '50px',
          }}
        >
          멤버십은 언제나 변경, 취소할 수 있습니다.
        </h3>

        <div
          style={{
            textAlign: 'center',
            display: 'inline-block',
            padding: '20px',
            borderRadius: '5px',
            width: '80%',
            maxWidth: '800px',
          }}
        >
          <table
            style={{
              width: '100%',
              color: 'white',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                <th
                  colSpan="2"
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#272727',
                    borderBottom: '2px solid #fff',
                    fontWeight: 'bold',
                    fontSize: '1.2em',
                  }}
                >
                  베이직
                </th>
                <th
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#272727',
                    borderBottom: '2px solid #fff',
                    fontWeight: 'bold',
                    fontSize: '1.2em',
                  }}
                >
                  프리미엄
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                  }}
                >
                  연간 구독료
                </td>

                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                  }}
                >
                  <td
                    style={{
                      padding: '15px',
                      textAlign: 'center',
                      border: '2px solid #fff',
                    }}
                  >
                    연 99,000원
                  </td>
                  최대 16% 할인된 가격
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#2e2e2e',
                  }}
                >
                  <td
                    style={{
                      padding: '15px',
                      textAlign: 'center',
                      border: '2px solid #fff',
                    }}
                  >
                    연 99,000원
                  </td>
                  최대 16% 할인된 가격
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                    fontWeight: 'bold',
                  }}
                >
                  오디오
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                  }}
                >
                  최대 5.1 사운드
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#2e2e2e',
                  }}
                >
                  최대 Dolby Atmos 오디오
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                    fontWeight: 'bold',
                  }}
                >
                  영상화질
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                  }}
                >
                  최대 1080p Full HD
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#2e2e2e',
                  }}
                >
                  최대 4K UHD & HDR
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                    fontWeight: 'bold',
                  }}
                >
                  광고
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#1d1d1d',
                  }}
                >
                  광고 없는 스트리밍
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',
                    borderBottom: '2px solid #333',
                    backgroundColor: '#2e2e2e',
                  }}
                >
                  광고 없는 스트리밍
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',

                    backgroundColor: '#1d1d1d',
                    fontWeight: 'bold',
                  }}
                >
                  콘텐츠 저장
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',

                    backgroundColor: '#1d1d1d',
                  }}
                >
                  <span>✔</span>
                </td>
                <td
                  style={{
                    padding: '15px',
                    textAlign: 'center',

                    backgroundColor: '#2e2e2e',
                  }}
                >
                  <span>✔</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4
          style={{
            textAlign: 'left',
            paddingTop: '5px',
            color: 'gray',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          멤버십 구독이 필요합니다.
          <br /> 결제 주기 종료 시 취소 처리됩니다.
          <br /> 월간 멤버십 12개월 구독료 대비 할인된 가격입니다. 추가 약관 적용.
          <br /> 영상 화질/오디오 및 저장 기능은 인터넷 서비스, 기기 성능, 멤버십 유형 및 각 콘텐츠에 따라 달라질 수
          있습니다.
        </h4>
      </section>

      {/* FAQ Section */}
      <section>
        <h2
          style={{
            textAlign: 'center',
            paddingTop: '200px',
            fontWeight: 'bold',
            paddingBottom: '20px',
            color: 'white',
          }}
        >
          자주 묻는 질문
        </h2>
        <div
          style={{
            paddingBottom: '100px',
            width: '80%',
            maxWidth: 'auto',
            margin: '0 auto',
          }}
        >
          {questions.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: '20px',
                backgroundColor: '#1D1D1D',
                borderRadius: '5px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2d2d2d')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1d1d1d')}
            >
              <div
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '70px',
                  cursor: 'pointer',
                }}
                onClick={() => toggleQuestion(index)}
              >
                <span
                  style={{
                    fontSize: '16px',
                    color: 'white',
                    flex: 1,
                  }}
                >
                  {item.question}
                </span>
                <span
                  style={{
                    fontSize: '30px',
                    fontWeight: 'normal',
                    color: 'white',
                    transform: openIndex === index ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  +
                </span>
              </div>

              {/* 열림/닫힘 애니메이션 */}
              <div
                style={{
                  maxHeight: openIndex === index ? '300px' : '0px',
                  overflow: 'hidden',
                  transition:
                    openIndex === index ? 'max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'max-height 0.3s ease', // 닫힐 때 더 빠르게
                  backgroundColor: '#1d1d1d',
                  borderRadius: openIndex === index ? '0 0 5px 5px' : '5px',
                }}
              >
                <div
                  style={{
                    padding: '20px',
                    fontSize: '14px',
                    color: 'white',
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AboutWrap>
  );
};

export default HomePage;
