const charDataValue = (prevState, nbUser) => {
  const newState = prevState.map((prev) => {
    const matchingNb = nbUser.countByMonthByYear.find(
      (nb) => nb.month === prev.number
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
