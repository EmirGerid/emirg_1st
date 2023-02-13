input.onPinPressed(TouchPin.P0, function () {
    Count = Count + 1
    basic.showNumber(Count)
})
let Count = 0
basic.showNumber(Count)
