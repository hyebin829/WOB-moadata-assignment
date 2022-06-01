import { useState } from 'react'
import { DateRange, Range } from 'react-date-range'
import dayjs from 'dayjs'
import ko from 'date-fns/locale/ko'

import styles from './datePickerModal.module.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Button } from '../Button'

const DatePickerModal = () => {
  const today = new Date()
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: dayjs(today).add(-1, 'day').toDate(),
      endDate: today,
      key: 'selection',
    },
  ])

  console.log(dayjs(dateRange[0].startDate).format('YYYY-MM-DD'))
  console.log(dayjs(dateRange[0].endDate).format('YYYY-MM-DD'))

  return (
    <aside className={styles.container}>
      <section className={styles.calendarContainer}>
        <DateRange
          editableDateInputs
          onChange={(item) => setDateRange([item.selection])}
          ranges={dateRange}
          locale={ko}
          months={2}
          direction='horizontal'
          dateDisplayFormat='yyyy년 MM월 dd일'
          maxDate={new Date()}
          showPreview={false}
          monthDisplayFormat='yyyy년 MM월'
          rangeColors={['#586cf5']}
        />
      </section>
      <section className={styles.buttonContainer}>
        <Button size='large'>취소</Button>
        <Button size='large' primary>
          적용
        </Button>
      </section>
    </aside>
  )
}

export default DatePickerModal
