function gregorianToJalali(gYear, gMonth, gDay) {
  const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const jDaysInMonth = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  const gy = gYear - 1600;
  const gm = gMonth - 1;
  const gd = gDay - 1;
  let gDayNo =
    365 * gy +
    Math.floor((gy + 3) / 4) -
    Math.floor((gy + 99) / 100) +
    Math.floor((gy + 399) / 400);

  for (let i = 0; i < gm; ++i) gDayNo += gDaysInMonth[i];
  if (gm > 1 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) gDayNo++; // Leap year adjustment
  gDayNo += gd;

  let jDayNo = gDayNo - 79;
  const jNp = Math.floor(jDayNo / 12053);
  jDayNo %= 12053;

  const jy = 979 + 33 * jNp + 4 * Math.floor(jDayNo / 1461);
  jDayNo %= 1461;

  if (jDayNo >= 366) {
    jy += Math.floor((jDayNo - 1) / 365);
    jDayNo = (jDayNo - 1) % 365;
  }

  let jm = 0;
  while (jm < 11 && jDayNo >= jDaysInMonth[jm]) {
    jDayNo -= jDaysInMonth[jm];
    jm++;
  }
  const jd = jDayNo + 1;

  return { year: jy, month: jm + 1, day: jd };
}

// گرفتن تاریخ جاری با در نظر گرفتن اختلاف زمانی ایران
function getCurrentJalaliDate() {
  const now = new Date();
  const offset = 3.5 * 60 * 60 * 1000; // اختلاف زمانی ایران به میلی‌ثانیه
  const iranTime = new Date(now.getTime() + offset);

  const utcYear = iranTime.getUTCFullYear();
  const utcMonth = iranTime.getUTCMonth() + 1; // getUTCMonth() صفر مبنا است
  const utcDay = iranTime.getUTCDate();

  return gregorianToJalali(utcYear, utcMonth, utcDay);
}

// استفاده
const jalaliDate = getCurrentJalaliDate();

export default jalaliDate;
