radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    }
    if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 10)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 25)
    }
    if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 25)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 10)
    }
    if (receivedNumber == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 15)
    }
    if (receivedNumber == 5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
radio.setGroup(2)
basic.showIcon(IconNames.Heart)
