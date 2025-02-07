import { useMemo, useState } from "react";

const Assigment_02 = () => {
    const word = ["hi", "my", "name", "is", "for", "to", "random", "word"];
    const allWords = []

    for (let i = 0; i < 1000; i++) {
        let sentence = ''
        for (let j = 0; j < word.length; j++) {
            sentence += (word[Math.floor(word.length * Math.random())])
            sentence += ' '
        }

        allWords.push(sentence)
    }


    const [sentences] = useState(allWords)
    const [filterdWord, setFiterWord] = useState('')


    const filter = useMemo(() => {
        return sentences.filter(x => x.includes(filterdWord))

    }, [sentences, filterdWord])
    return (
        <div>
            <input type="text" placeholder="Search Words" onChange={(e) => {
                setFiterWord(e.target.value)
            }} />
            {filter.map((sentence, index) => {
                return (
                    <p key={index}>{sentence}</p>
                )
            })}
        </div>
    )
}

export default Assigment_02