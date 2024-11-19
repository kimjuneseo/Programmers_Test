/**
 * 
 * @param {number[]} diffs 난이도
 * @param {string[]} times 소요시간
 * @param {string} limit 이전 퍼즐 소요시간
 * @returns 
 */
function solution(diffs, times, limit) {
    // 레벨을 1부터 다 올린다?
    // 더 좋은 방법 없을까 근사치
    // 범위를 잡아서 하는게 덜 계산하지 않을까?
    let level = 1;
    // function 
    // result는 level = tiems
    function calcLowLevel({ prevTime, currentTime, currentDiff }) {
        const returnTime = ((currentDiff - level) * (prevTime + currentTime)) + currentTime;

        return returnTime;
    }
    function minLevel() {
        times.reduce((prevLimitTime, currentTime, index) => {
            const currentDiff = diffs[index];
            const plusTime = currentDiff <= level ? currentDiff : calcLowLevel({ prevTime: times[index - 1], currentDiff, currentTime });
            return prevLimitTime + plusTime
        }, 0);
    }

    let isEqualLimit = false;
    while (!isEqualLimit) {
        const currentLimit = times.reduce((prevLimitTime, currentTime, index) => {
            const currentDiff = diffs[index];
            const plusTime = currentDiff <= level ? currentDiff : calcLowLevel({ prevTime: times[index - 1], currentDiff, currentTime });
            return prevLimitTime + plusTime
        }, 0);

        2 +
            (diff - level * 6) + 4
                (diff - level * 11) + 7
        // 1번째 times보다는 클거고
        // tiems 다 더했을때 limit보다 
        console.log(currentLimit)
        if (currentLimit <= limit) {
            isEqualLimit = true;
        }
        else {
            level++;
        }
    }

    return level;
}

console.log(solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012));