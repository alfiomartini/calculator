const prg01 = ` 16 `;
const prg02 = `(178)`;
const prg03 = `50 * 40`;
const prg04 = `10 + 12 * 5`;
const prg05 = "(12 / 4)";
const prg06 = "(5+3) * 4";

const programs = [prg01, prg02, prg03, prg04, prg05, prg06];

programs.forEach((prg) => {
  console.log(`${prg} :`, parseE(prg));
});
