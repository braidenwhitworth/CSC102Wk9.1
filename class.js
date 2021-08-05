class Mission {
  //states first
  constructor(
    fuelLevel,
    oxygenLevel,
    foodLevel,
    spaceCraft,
    launchDateDay,
    launchDateMonth,
    launchDateYear,
    numOfAstronauts
  ) {
    //sustaniate states
    this.fuelLevel = fuelLevel;
    this.oxygenLevel = oxygenLevel;
    this.foodLevel = foodLevel;
    this.spaceCraft = spaceCraft;
    this.launchDateDay = launchDateDay;
    this.launchDateMonth = launchDateMonth;
    this.launchDateYear = launchDateYear;
    this.numOfAstronauts = numOfAstronauts;
  }
  //list methods
  launch() {
    //code for launch
    alert("we are taking off");
  }

  disMissionLaunchDate() {
    alert(
      "This mission launches on " +
        this.launchDateMonth +
        " " +
        this.launchDateDay +
        ", " +
        this.launchDateYear
    );
  }
}

function launchFall() {
  console.log("launchFall() running");
  fallLaunch.launch();
}

function displayFall() {
  console.log("DisplayFall() running");
  fallLaunch.disMissionLaunchDate();
}

class InputData {
  constructor(
    time_seconds,
    latitude,
    longitude,
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure,
    bmpSensor_temp,
    digSensor_temp,
    cssSensor_ecO2,
    cssSensor_TVOC,
    UV,
    accelX,
    accelY,
    accelZ,
    magnetX,
    magnetY,
    magnetZ,
    gyroX,
    gyroY,
    gyroZ
  ) {
    this.time_seconds = time_seconds;
    this.latitude = latitude;
    this.longitude = longitude;
    this.gps_altitude = gps_altitude;
    this.bmpSensor_altitude = bmpSensor_altitude;
    this.bmpSensor_pressure = bmpSensor_pressure;
    this.bmpSensor_temp = bmpSensor_temp;
    this.digSensor_temp = digSensor_temp;
    this.cssSensor_ecO2 = cssSensor_ecO2;
    this.cssSensor_TVOC = cssSensor_TVOC;
    this.UV = UV;
    this.accelX = accelX;
    this.accelY = accelY;
    this.accelZ = accelZ;
    this.magnetX = magnetX;
    this.magnetY = magnetY;
    this.magnetZ = magnetZ;
    this.gyroX = gyroX;
    this.gyroY = gyroY;
    this.gyroZ = gyroZ;
  }
}
