function rank(st, we, n) {
  if (st.length === 0) return "No participants";
  if (we.length < n) return "Not enough participants";

  const split = st.split(",");
  const splitMap = split.map((item, i) => {
    const nameLength = item.length;
    const alphaNum = item.split("").reduce((acc, curr) => {
      return acc + getAlphabetOrder(curr);
    }, 0);
    const som = nameLength + alphaNum;
    const winningNum = som * we[i];
    return {
      name: item,
      winningNum,
    };
  });
  const sort = splitMap.sort((a, b) =>
    a.winningNum !== b.winningNum
      ? b.winningNum - a.winningNum
      : a.name.localeCompare(b.name)
  );

  return sort[n - 1].name;
}
function getAlphabetOrder(char) {
  const uppercaseChar = char.toUpperCase();
  const charCode = uppercaseChar.charCodeAt(0);
  const alphabetOrder = charCode - 65 + 1;
  return alphabetOrder;
}

console.log(
  rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4)
); // PauL

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    4
  )
); // Benjamin
console.log(rank("Lagon,Lily", [1, 5], 2)); // Lagon
console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    8
  )
); // Not enough participants
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6)); // No participants

console.log(
  rank(
    "Aubrey,Jayden,William,Lyli,Aiden,Benjamin,Samantha,Isabella,Elijah,Joshua,Andrew,Abigail,Ella,Addison,Elizabeth,Sofia,Sophia,Liam,Avery,James,Noah,Lagon,Ethan,Willaim,Emma,Ava",
    [
      5, 6, 5, 5, 6, 6, 4, 6, 2, 2, 4, 1, 2, 2, 3, 2, 2, 3, 6, 5, 2, 5, 6, 5, 4,
      1,
    ],
    3
  )
);

// console.log(["William", "Willaim"].sort());
