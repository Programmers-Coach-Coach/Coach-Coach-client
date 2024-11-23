import { useEffect } from "react";
import styled from "styled-components";
import EmptyVersion2 from "../../common/Empty/EmptyVersion2";

interface Props {
  roadNameAddress: string | null;
}

const ActiveCenterMap = ({ roadNameAddress }: Props) => {
  useEffect(() => {
    if (!roadNameAddress) return;

    // 스크립트 동적 추가
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_APP_KEY}&autoload=false&libraries=services`;
    script.async = true;

    document.head.appendChild(script);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        drawMap(roadNameAddress);
      });
    };

    script.addEventListener("load", onLoadKakaoMap);

    return () => {
      document.head.removeChild(script);
    };
  }, [roadNameAddress]);

  const drawMap = (address: string) => {
    const mapContainer = document.getElementById("map");

    if (!mapContainer) return;

    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 초기 좌표
      level: 4 // 확대 수준
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    const geocoder = new window.kakao.maps.services.Geocoder();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    geocoder.addressSearch(address, (result: any, status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 마커 생성
        new window.kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 지도 중심 이동
        map.setCenter(coords);
      } else {
        console.error("주소 검색에 실패했습니다:", status);
      }
    });
  };

  return (
    <Wrapper>
      {roadNameAddress ? (
        <>
          <Info>
            <div className="center-address">{roadNameAddress}</div>
          </Info>
          <Map id="map"></Map>
        </>
      ) : (
        <EmptyVersion2 imgName="noLocation" height="290px">
          코치님의
          <br />
          활동 센터 정보가 없어요
        </EmptyVersion2>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #111111;
  border-radius: 24px;
  padding: 20px;
  min-height: 330px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  .center-address {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.65px;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 0;
  padding-top: 60%;
`;

export default ActiveCenterMap;
