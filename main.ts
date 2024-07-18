radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    }
    if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 20)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
    }
    if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 20)
    }
    if (receivedNumber == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 30)
    }
    if (receivedNumber == 5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
