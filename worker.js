// 워커 태스크에서 메시지를 받았을 때 처리할 로직
self.onmessage = function (e) {
    const from = parseInt(e.data.from); // 첫 번째 숫자
    const to = parseInt(e.data.to); // 두 번째 숫자

    // 두 숫자를 곱한 결과 계산
    const result = from * to;

    // 메인 스레드로 결과 전송
    self.postMessage(result);
};
