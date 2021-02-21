<template>
  <!-- 日程顶部日历栏 -->
  <div class="datePicker">
    <div class="datePicker__top">
      <div class="datePicker__date-title" @click="openCalendar">
        {{ checkedDate[0] + "月" }}
        <van-icon class="vant__icon-arrow" name="arrow-down" />
      </div>
    </div>
    <ul class="datePicker__date">
      <li
        class="datePicker__date-item"
        v-for="item in weekList"
        :key="item.date"
        :class="{
          active: item.day === checkedDate[1],
          hasSchedule: item.hasSchedule,
        }"
        @click="selectDate(item)"
      >
        <p class="datePicker__date-item__week">{{ item.week }}</p>
        <span>{{ item.day }}</span>
      </li>
    </ul>
    <van-calendar
      v-model="showCalendar"
      :formatter="formatter"
      :default-date="defaultDate"
      @confirm="onConfirm"
      :round="false"
      :maxDate="endDate"
      :show-confirm="true"
    />
  </div>
</template>

<script>
// import { Calendar as VanCalendar } from "vant";
import { Icon as VanIcon } from "vant";
const weekMaps = {
  0: "日",
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
};

export default {
  name: "datePickerBar",
  data() {
    return {
      showCalendar: false,
      checkedDate: [],
      defaultDate: new Date(),
      defaultDateCache: new Date(),
      weekList: [],
      endDate: new Date(2020, 11, 27),
      dates: [
        {
          year: 2020,
          month: 8,
          day: 28,
        },
        {
          year: 2021,
          month: 10,
          day: 22,
        },
        {
          year: 2020,
          month: 9,
          day: 30,
        },
        {
          year: 2020,
          month: 9,
          day: 29,
        },
        {
          year: 2020,
          month: 9,
          day: 29,
        },
        {
          year: 2020,
          month: 11,
          day: 5,
        },
      ],
    };
  },
  // computed: {
  //   endDate() {
  //     try {
  //       return new Date(this.$store.state.site.timeRange[1].split(" ")[0]);
  //     } catch (e) {
  //       return new Date();
  //     }
  //   },
  // },
  components: {
    VanIcon,
  },
  created() {
    this.getNowDate();
  },
  methods: {
    hasSchedule(item) {
      const { year, month, day } = item;
      return this.dates.some(
        (item) => item.year === year && item.month === month && item.day === day
      );
    },
    openCalendar() {
      this.defaultDate = this.defaultDateCache;
      this.showCalendar = true;
    },
    getNowDate() {
      const _now = new Date();

      this.getWeekDates(_now);
    },
    selectDate(item) {
      const { year, month, day } = item;
      const [_month, _day] = this.checkedDate;

      if (month === _month && day === _day) {
        return false;
      }

      this.checkedDate = [month, day];
      this.defaultDateCache = new Date(`${year}/${month}/${day}`);
      this.$emit("getCheckedDate", this.defaultDateCache);
    },
    onConfirm(date) {
      const _date = new Date(date);

      this.getWeekDates(_date);
      this.showCalendar = false;
    },
    formatter(day) {
      const year = day.date.getFullYear();
      const month = day.date.getMonth() + 1;
      const _day = day.date.getDate();
      // 判断有日程的日期
      if (this.hasSchedule({ year, month, day: _day })) {
        day.className = "calendar-active";
      }
      return day;
    },
    getWeekDates(date) {
      this.weekList = [];
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      const _week = date.getDay();
      const _day = date.getDate();
      // 当周星期天为哪一天
      let _mondayDay = _day - _week;

      this.defaultDateCache = date;
      this.checkedDate = [month, _day];

      // _mondayDay为负数
      if (_mondayDay < 1) {
        month = month - 1;
        // 上一个月为负数
        if (month < 1) {
          year = year - 1;
          month = 12;
        }
        // 得到上一月的总天数
        const prevMonthDays = this.getMonthDays(year, month);

        _mondayDay = prevMonthDays + _mondayDay;
      }

      for (let i = 0; i < 7; i++) {
        let nextDay = _mondayDay + i;
        // 如果当前日期超过了本月天数
        if (nextDay > this.getMonthDays(year, month)) {
          _mondayDay = -i + 1;
          nextDay = 1;
          month = month + 1;
          if (month > 12) {
            year = year + 1;
            month = 1;
          }
        }
        this.weekList.push({
          week: weekMaps[i],
          year,
          month,
          day: nextDay,
          hasSchedule: this.hasSchedule({ year, month, day: nextDay }),
        });
      }
      this.$emit("getCheckedDate", date);
    },
    getMonthDays(year, month) {
      var d = new Date(year, month, 0);
      return d.getDate();
    },
  },
  watch: {
    dates() {
      this.weekList.forEach((v) => {
        v.hasSchedule = this.hasSchedule(v);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.datePicker {
  background: #fff;
  padding: 20px 20px 0;
  .vant__icon-search {
    font-weight: 600;
    font-size: 20px;
  }
  .vant__icon-arrow {
    vertical-align: text-top;
  }
  &__top {
    display: flex;
    margin-bottom: 13px;
    line-height: 28px;
    justify-content: space-between;
  }
  &__date {
    display: flex;
    flex: 0 0 1;
  }
  &__date-title {
    font-weight: bold;
    font-size: 19px;
    color: #333;
  }
  &__date-item {
    width: 20%;
    text-align: center;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 600;
    &__week {
      font-weight: 400;
      font-size: 10px;
      margin-bottom: 12px;
    }
    &.active {
      background: #d71f25;
      color: #fff;
      &.hasSchedule::after {
        border-color: #fff;
      }
    }
    &.hasSchedule {
      position: relative;
      &::after {
        position: absolute;
        top: 5px;
        right: 5px;
        content: "";
        width: 0;
        height: 0;
        border: 3px solid #ee0a24;
        border-radius: 50%;
      }
    }
  }
  /deep/ .calendar-active {
    position: relative;
    &::after {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 0;
      height: 0;
      border: 3px solid #ee0a24;
      border-radius: 50%;
      z-index: 9;
    }
    .van-calendar__selected-day::after {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 0;
      height: 0;
      border: 3px solid #fff;
      border-radius: 50%;
      z-index: 10;
    }
  }
  /deep/ .van-button--round {
    border-radius: 1px;
  }
}
</style>
