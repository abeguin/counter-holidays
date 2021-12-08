import {
  daysToMs,
  hoursToMs,
  integerDiffDays,
  integerDiffHours,
  integerDiffMinutes,
  integerDiffSeconds,
  minutesToMs,
  msToDays,
  msToHours,
  msToMinutes,
  msToSeconds,
  secondsToMs
} from "./time.converter"

describe("time converter", () => {
  it("msToSeconds when 1000ms should return 1", () => {
    // Given
    const ms = 1000

    // WHen
    const seconds = msToSeconds(ms)

    // Then
    expect(seconds).toEqual(1)
  })

  it("msToMinutes when 60k [ms], should return 1", () => {
    // Given
    const ms = 60_000

    // WHen
    const minutes = msToMinutes(ms)

    // Then
    expect(minutes).toEqual(1)
  })

  it("msToHours when 3600k [ms], should return 1", () => {
    // Given
    const ms = 3_600_000

    // WHen
    const hours = msToHours(ms)

    // Then
    expect(hours).toEqual(1)
  })

  it("msToDays when 86400k [ms], should return 1", () => {
    // Given
    const ms = 86_400_000

    // WHen
    const days = msToDays(ms)

    // Then
    expect(days).toEqual(1)
  })

  it("secondsToMs when 1 [s] should return 1000", () => {
    // Given
    const seconds = 1

    // When
    const ms = secondsToMs(seconds)

    // Then
    expect(ms).toEqual(1000)
  })

  it("minutesToMs when 1 [min] should return 60k", () => {
    // Given
    const minutes = 1

    // When
    const ms = minutesToMs(minutes)

    // Then
    expect(ms).toEqual(60_000)
  })

  it("hoursToMs when 1 [h] should return 3600k", () => {
    // Given
    const hours = 1

    // When
    const ms = hoursToMs(hours)

    // Then
    expect(ms).toEqual(3_600_000)
  })

  it("daysToMs when 1 [d] should return 86400k", () => {
    // Given
    const days = 1

    // When
    const ms = daysToMs(days)

    // Then
    expect(ms).toEqual(86_400_000)
  })

  describe("integerDiffDays", () => {
    it("when 25-12-2021 and 23-12-2021, should return 2", () => {
      // Given
      const refDate = new Date(2021, 11, 25)
      const now = new Date(2021, 11, 23)

      // When
      const result = integerDiffDays(refDate, now)

      // Then
      expect(result).toEqual(2)
    })


    it("when 25-12-2021 and 25-12-2020, should return 365", () => {
      // Given
      const refDate = new Date(2021, 11, 25)
      const now = new Date(2020, 11, 25)

      // When
      const result = integerDiffDays(refDate, now)

      // Then
      expect(result).toEqual(365)
    })

  })

  describe("integerDiffHours", () => {
    it("when 25-12-2021T12:00:00 and 25-12-2021T10:00:00, should return 2", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 10)

      // When
      const result = integerDiffHours(refDate, now)

      // Then
      expect(result).toEqual(2)
    })

    it("when 25-12-2021T12:00:00 and 24-12-2020T:12:00:00, should return 0", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 24, 12)

      // When
      const result = integerDiffHours(refDate, now)

      // Then
      expect(result).toEqual(0)
    })

    it("when 25-12-2021T12:00:00 and 24-12-2020T:16:00:00, should return 20", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 24, 16)

      // When
      const result = integerDiffHours(refDate, now)

      // Then
      expect(result).toEqual(20)
    })

  })

  describe("integerDiffMinutes", () => {
    it("when 25-12-2021T12:00:00 and 25-12-2021T11:50:00, should return 10", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 11, 50)

      // When
      const result = integerDiffMinutes(refDate, now)

      // Then
      expect(result).toEqual(10)
    })

    it("when 25-12-2021T12:00:00 and 24-12-2020T:11:00:00, should return 0", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 11)

      // When
      const result = integerDiffMinutes(refDate, now)

      // Then
      expect(result).toEqual(0)
    })

    it("when 25-12-2021T12:00:00 and 24-12-2020T:11:30:00, should return 30", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 11, 30)

      // When
      const result = integerDiffMinutes(refDate, now)

      // Then
      expect(result).toEqual(30)
    })

  })

  describe("integerDiffSeconds", () => {
    it("when 25-12-2021T12:00:00 and 25-12-2021T11:59:50, should return 10", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 11, 59, 50)

      // When
      const result = integerDiffSeconds(refDate, now)

      // Then
      expect(result).toEqual(10)
    })

    it("when 25-12-2021T12:00:00 and 24-12-2020T:11:59:00, should return 0", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 11, 59)

      // When
      const result = integerDiffSeconds(refDate, now)

      // Then
      expect(result).toEqual(0)
    })

    it("when 25-12-2021T12:00:00 and 24-12-2020T:11:30:30, should return 30", () => {
      // Given
      const refDate = new Date(2021, 11, 25, 12)
      const now = new Date(2021, 11, 25, 11, 30, 30)

      // When
      const result = integerDiffSeconds(refDate, now)

      // Then
      expect(result).toEqual(30)
    })

  })
})
