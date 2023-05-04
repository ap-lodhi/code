function findMostAndLeastFrequentBirds(birds) {
  const sightings = {};
  for (let i = 0; i < birds.length; i++) {
    if (sightings[birds[i]] === undefined) {
      sightings[birds[i]] = 1;
    } else {
      sightings[birds[i]]++;
    }
  }

  const sortedTypes = Object.keys(sightings).sort((a, b) => {
    return sightings[b] - sightings[a];
  });

  const maxCount = sightings[sortedTypes[0]];
  const minCount = sightings[sortedTypes[sortedTypes.length - 1]];

  const maxTypes = [];
  const minTypes = [];

  for (let i = 0; i < sortedTypes.length; i++) {
    const birdType = sortedTypes[i];
    if (sightings[birdType] === maxCount) {
      maxTypes.push(parseInt(birdType));
    }
    if (sightings[birdType] === minCount) {
      minTypes.push(parseInt(birdType));
    }
  }

  if (maxTypes.length > 1) {
    return [Math.min(...maxTypes), Math.min(...minTypes)];
  } else if (minTypes.length > 1) {
    return [Math.min(...maxTypes), Math.min(...minTypes)];
  } else {
    return [maxTypes[0], minTypes[0]];
  }
}

let arr = [1, 2, 2, 4, 4, 4, 4, 5];
console.log(findMostAndLeastFrequentBirds(arr));
