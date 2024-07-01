import User from "models/User";

export const generateUserCode = async (prefix) => {
  let generatedCode = "";
  try {
    while (generatedCode == "") {
      console.log("Prefix >> ", prefix);
      generatedCode = generateCode(prefix);
      let existingCode = await User.findOne({ code: generatedCode });
      if (existingCode) {
        generatedCode = "";
      }
    }
  } catch (error) {
    console.log("generateUserCode error >> " + error);
  }

  return generatedCode;
};

function generateCode(prefix) {
  let generatedCode = prefix;

  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    generatedCode += numbers.charAt(randomIndex);
  }

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * letters.length);
    generatedCode += letters.charAt(randomIndex);
  }

  return generatedCode;
}
