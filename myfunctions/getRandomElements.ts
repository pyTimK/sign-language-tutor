function getRandomElements<T>(list: T[], n: number): T[] {
  const shuffled = list.slice(); // Create a copy of the original array
  let currentIndex = shuffled.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  // Return the first n elements from the shuffled array.
  return shuffled.slice(0, n);
}

export default getRandomElements;
