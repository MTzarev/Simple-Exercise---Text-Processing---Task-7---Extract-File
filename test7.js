function test7(input) {
    let finalArr = [];
    for (const word of input.split(`\\`)) {
        finalArr.push(word);
    }
    let lastIdx = finalArr[finalArr.length - 1].lastIndexOf(`.`);

    console.log(`File name: ${finalArr[finalArr.length - 1].split(`.`)[0]}`);
    console.log(`File extension: ${finalArr[finalArr.length - 1].substring(lastIdx + 1)}`);
}
test7('C:\\Internal\\training-internal\\Template.pptx.ppp.rrr')