/**
 * 
 * @param {*} video_len 동영상 길이
 * @param {*} pos 기능이 수행되기 직전의 재생위치를 나타애는 문자열
 * @param {*} op_start 오프닝 시작 시각을 나타내는 문자열
 * @param {*} op_end 오프닝이 끝나는 시각을 나타내는 문자열
 * @param {*} commands 사용자의 입력을 나타내는 1차원 배열
 * @returns "mm:ss"형식으로 리턴
 */
function solution(video_len, pos, op_start, op_end, commands) {
    const splitTime = (time) => time.split(':').map(Number);
    const calcSecond = (min, sec) => (min * 60) + sec;
    const secondConverter = (time) => {
        const [videoLenMin, videoLenSec] = splitTime(time);

        return calcSecond(videoLenMin, videoLenSec);
    }
    const timeConverter = (tiem) => {
        const min = `${Math.floor(tiem / 60)}`;
        const sec = `${tiem % 60}`;

        return `${min.padStart(2, '0')}:${sec.padStart(2, '0')}`
    }
    const checkOp = (sec) => {
        const opStartSecond = secondConverter(op_start);
        const opEndSecond = secondConverter(op_end);

        return opStartSecond <= sec && opEndSecond >= sec ? opEndSecond : sec
    }
    const videoSecond = secondConverter(video_len);
    const posSecond = secondConverter(pos);

    const VIDEO_UTILS = {
        prev(nowPos) {
            return nowPos < 10 ? 0 : nowPos - 10

        },
        next(nowPos) {
            return nowPos + 10 > videoSecond ? videoSecond : nowPos + 10
        }
    }

    const answer = commands.reduce((prev, command) => {
        const nowTime = VIDEO_UTILS[command](checkOp(prev));

        return checkOp(nowTime);
    }, posSecond)

    return timeConverter(answer);
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]));
/**
 * 정시
 * - 10초 전으로 이동 10미만인 경우 영상 처음 위치로 이동 00분
 *
 * 재생
 * - 10초 후로 이동 10미만인 경우 영상 마치막 위치
 *
 * 오프닝 건너뛰기 현재
 */

// 일시정시, 재생, 오프닝 건너뛰기

// 일시
// 재성