let sec = 0
let tm = TM1637.create(
DigitalPin.P13,
DigitalPin.P14,
7,
4
)
OLED.init(128, 64)
let tmp = 0
for (let index = 0; index < 100; index++) {
    OLED.drawLoading(tmp)
    tmp = tmp + 1
    basic.pause(100)
}
OLED.clear()
OLED.writeStringNewLine("Hello,oled!")
OLED.writeStringNewLine("My name is OLED!")
OLED.writeStringNewLine("Today is chinese new year.  ")
OLED.writeStringNewLine("Happy new year!")
OLED.writeStringNewLine("Tomorrow is 2025/01/29.")
basic.pause(2000)
OLED.clear()
basic.forever(function () {
    OLED.writeNum(sec)
    basic.pause(1000)
    tm.showbit(5, 0)
    tm.showbit(2, 1)
    tm.showbit(0, 2)
    tm.showbit(2, 3)
})
basic.forever(function () {
    sec = sec + 1
    basic.pause(1000)
})
