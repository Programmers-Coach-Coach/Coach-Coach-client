import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface DraggableIconProps {
  children: React.ReactNode;
  isDraggingFn: React.Dispatch<React.SetStateAction<boolean>>;
}

// DraggableIcon 컴포넌트 정의
const DraggableIcon = ({ children, isDraggingFn }: DraggableIconProps) => {
  // 아이콘의 위치를 관리하는 상태 (초기 위치: x 50%, y 88%)
  const [position, setPosition] = useState({ x: "50%", y: "88%" });

  // 드래그 상태를 관리하는 상태 (true: 드래그 중, false: 드래그 중 아님)
  const [isDragging, setIsDragging] = useState(false);

  // requestAnimationFrame의 ID를 저장할 ref
  const requestRef = useRef<number | null>(null);

  // 아이콘 크기 정의 (정사각형 아이콘, 60px 크기)
  const ICON_SIZE = 60;

  // 드래그가 시작될 때 호출되는 함수
  const handleDragStart = () => {
    setIsDragging(true); // 드래그 상태 활성화
  };

  // 드래그가 끝날 때 호출되는 함수
  const handleDragEnd = useCallback(() => {
    setIsDragging(false); // 드래그 상태 비활성화
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current); // 예약된 애니메이션 프레임 취소
      requestRef.current = null; // 참조 초기화
    }
    setTimeout(() => {
      isDraggingFn(false); // 부모 컴포넌트에도 드래그 비활성화 알림
    }, 500);
  }, [setIsDragging, isDraggingFn]); // 의존성 배열

  // 마우스 또는 터치 이동에 따라 위치를 업데이트하는 함수
  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (isDragging) {
        isDraggingFn(true);
        // 드래그 중일 때만 위치를 업데이트
        if (requestRef.current === null) {
          // requestAnimationFrame으로 위치 업데이트 예약
          requestRef.current = requestAnimationFrame(() => {
            // 화면 경계 계산
            const windowWidth = window.innerWidth; // 브라우저 창 너비
            const windowHeight = window.innerHeight; // 브라우저 창 높이

            // 아이콘이 화면 밖으로 나가지 않도록 경계 내에서만 이동하게 제한
            const newX = Math.max(
              ICON_SIZE / 2,
              Math.min(clientX, windowWidth - ICON_SIZE / 2)
            );
            const newY = Math.max(
              ICON_SIZE / 2,
              Math.min(clientY, windowHeight - ICON_SIZE / 2)
            );

            // 위치 상태 업데이트
            setPosition({
              x: `${newX}px`,
              y: `${newY}px`
            });

            // 애니메이션 프레임 처리 후 참조 초기화
            requestRef.current = null;
          });
        }
      }
    },
    [isDragging, isDraggingFn, setPosition] // 의존성 배열
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      e.preventDefault(); // 기본 동작 방지
      handleMove(e.clientX, e.clientY); // 마우스 좌표 업데이트
    },
    [handleMove] // handleMove가 바뀔 때만 새로 정의
  );

  // 터치 이동 처리 함수
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault(); // 기본 동작 방지
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY); // 터치 좌표 업데이트
    },
    [handleMove] // handleMove가 바뀔 때만 새로 정의
  );

  // 드래그 상태에 따라 이벤트 리스너 추가 및 제거 관리
  useEffect(() => {
    if (isDragging) {
      // 드래그 중일 때 마우스/터치 이동 이벤트 리스너 추가
      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
    } else {
      // 드래그가 끝나면 이벤트 리스너 제거
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleDragEnd);
    }

    // 컴포넌트가 언마운트되거나 상태가 변경될 때 이벤트 리스너 정리
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleMouseMove, handleDragEnd, handleTouchMove]); // isDragging 상태가 변경될 때마다 실행

  return (
    <IconWrapper
      onMouseDown={handleDragStart} // 마우스 드래그 시작
      onTouchStart={handleDragStart} // 터치 드래그 시작
      style={{
        top: position.y, // 아이콘의 Y 위치 설정
        left: position.x, // 아이콘의 X 위치 설정
        transform: "translate(-50%, -50%)", // 아이콘을 중앙 기준으로 정렬
        width: ICON_SIZE, // 아이콘 크기 설정
        height: ICON_SIZE // 아이콘 크기 설정
      }}
    >
      {children} {/* 전달된 아이콘 컴포넌트 */}
    </IconWrapper>
  );
};

// 아이콘을 감싸는 스타일드 컴포넌트
const IconWrapper = styled.div`
  position: fixed; // 화면에서 고정된 위치
  cursor: grab; // 드래그 가능한 커서
  user-select: none; // 텍스트 선택 방지
  touch-action: none; // 터치로 인한 스크롤 방지
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

export default DraggableIcon;
