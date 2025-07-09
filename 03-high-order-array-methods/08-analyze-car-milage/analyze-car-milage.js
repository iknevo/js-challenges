function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
  const highestMileage = Math.max(...cars.map((car) => car.mileage));
  const lowestMileage = Math.min(...cars.map((car) => car.mileage));
  const highestMileageCar = cars.find((car) => car.mileage === highestMileage);
  const lowestMileageCar = cars.find((car) => car.mileage === lowestMileage);
  const averageMileage = totalMileage / cars.length;
  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
