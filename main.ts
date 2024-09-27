input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showNumber(input.temperature() * (1.8 * 32))
    currenttemp = input.temperature()
    max = input.temperature() * (1.8 + 0 * (1.8 + 32))
    basic.showNumber(input.temperature())
    currenttemp = Fahrenheit
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    basic.showNumber(input.temperature() * (1.8 + 0 * (1.8 + 32)))
    currenttemp = input.temperature()
    basic.showNumber(input.temperature() * Fahrenheit)
    min = input.temperature()
    basic.showNumber(input.temperature())
    basic.pause(6000)
    basic.clearScreen()
    basic.pause(6000)
})
dht11_dht22.readData(dataType.temperature)
basic.clearScreen()
basic.forever(function() {
})
input.onButtonPressed(Button.A, function() {
    basic.showNumber(input.temperature())
})
datalogger.onLogFull(function() {
    
})
let Fahrenheit = 0
let max = 0
let min = 0
let currenttemp = 0
currenttemp = input.temperature()
min = input.temperature()
max = input.temperature()
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.showNumber(input.temperature() * (1.8 + 32))
    currenttemp = input.temperature()
    basic.showNumber(input.temperature() * (1.8 + 32))
    basic.showNumber(input.temperature() * Fahrenheit)
    currenttemp = Fahrenheit
    max = input.temperature()
    basic.showNumber(input.temperature())
    basic.pause(6000)
    basic.clearScreen()
    basic.pause(6000)
})