function Add(numbers) {
  //1,2
  if (numbers == "") return 0;

  let result = 0;
  const individual_numbers = numbers.split(/[,\n]/);
  individual_numbers.forEach(element => {
    const num = parseInt(element);
    if (!isNaN(num)) {
      result = result + num;
    }
  });

  return result;
}
