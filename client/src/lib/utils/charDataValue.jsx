const charDataValue = (prevState, nbUser, count) => {
  const newState = prevState.map((prev) => {
    console.log(nbUser[count]);
    const matchingNb = nbUser[count].find(
      (nb) => nb.month == prev.number
    );
  
    if (matchingNb) {
      return { ...prev, users: matchingNb.count };
    } else {
      return prev;
    }
  });

  return newState;
};

export default charDataValue;
