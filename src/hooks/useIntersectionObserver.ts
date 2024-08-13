import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

interface Props {
  threshold?: number; // 타겟의 가시성 (ex. 0.1 -> 10% 만 보여도 다음 데이터를 fetch)
  hasNextPage: boolean | undefined; // 다음 페이지에 데이터가 있는지 없는 지 확인
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>; // 다음 페이지를 호출하는 함수
}
const useIntersectionObserver = ({
  threshold = 0,
  hasNextPage,
  fetchNextPage
}: Props) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null); // 관찰할 대상

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        // target이 화면에 관찰되고, 다음 페이지가 있으면 다음페이지를 호출
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    if (!target) return;

    // Intersection observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, { threshold });

    // 타겟 관찰 시작
    observer.observe(target);

    // 관찰 멈춤
    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
};

export default useIntersectionObserver;
