/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212?language=javascript
 * @param {number[]} diffs 난이도
 * @param {string[]} times 소요시간
 * @param {string} limit 이전 퍼즐 소요시간
 * @returns 
 */

function solution(diffs, times, limit) {

    function calcLowLevel({ prevTime, currentTime, currentDiff }) {
        const returnTime = ((currentDiff - level) * (prevTime + currentTime)) + currentTime;

        return returnTime;
    }
    function minLevel() {
        const maxDiff = diffs.sort((a, b) => b - a);
        console.log(maxDiff)
        const sumTime = times.reduce((prev, current) => prev + current, 0);
        // times.reduce((prevLimitTime, currentTime, index) => {
        //     const currentDiff = diffs[index];
        //     const plusTime = currentDiff <= level ? currentDiff : calcLowLevel({ prevTime: times[index - 1], currentDiff, currentTime });
        //     return prevLimitTime + plusTime
        // }, 0);
    }
    minLevel();

    // let isEqualLimit = false;
    // let level = 1;
    // for (let level = 1; isEqualLimit; level++) {
    //     const currentLimit = times.reduce((prevLimitTime, currentTime, index) => {
    //         const currentDiff = diffs[index];
    //         const plusTime = currentDiff < level ? currentDiff : calcLowLevel({ prevTime: times[index - 1], currentDiff, currentTime });
    //         return prevLimitTime + plusTime
    //     }, 0);

    //     console.log(currentLimit);
    //     if (currentLimit <= limit) {
    //         isEqualLimit = true;
    //     }
    //     else {
    //         level++;
    //     }

    // }

    // return level;
}

// time으로 최소 리밋을 구해보자
// 13 diffs에 최대 값으로 계산을 해본다

//1.  지금은 calcLowLevel가 계속 돌아가지만 미리 n번 틀렸을때 흐르는 시간을 가지고 있으면? x


// 2 +
//     (diff - level * 6) + 4
//         (diff - level * 11) + 7
// 1번째 times보다는 클거고
// tiems 다 더했을때 limit보다 
// console.log(currentLimit)
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));